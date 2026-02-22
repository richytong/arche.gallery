import useArcheVersion from './useArcheVersion.js'
import inspect from './inspect.js'

const templateCodeSandbox = ({ code, imports }) => `
${
  Object.entries(imports)
    .map(([name, url]) => `import ${name} from '${url}'`)
    .join('\n')
}

const inspect = ${inspect.toString()}

const codeArea = document.createElement('code')
codeArea.style.fontSize = '1.25em'
const panel = document.createElement('pre')
codeArea.appendChild(panel)
document.body.appendChild(panel)

const console = {
  log: (...msgs) => {
    panel.innerHTML += msgs.map(inspect).join(' ')
    panel.innerHTML += '\\n'
  },
}
console.error = console.log

const parentOrigin = '${window.origin}'

const domContainer = document.createElement('div')
domContainer.id = 'dom-container'
document.body.appendChild(domContainer)

const reactRoot = document.createElement('div')
reactRoot.id = 'react-root'
document.body.appendChild(reactRoot)

;(async function () {
  try {
    ${code}
  } catch (e) {
    console.log(e)
  }
})()

document.body.onload = () => {
  const body = document.body
  const html = document.documentElement

  const height = Math.max(
    body.scrollHeight, 
    body.offsetHeight,
    html.clientHeight, 
    html.scrollHeight, 
    html.offsetHeight
  )

  window.parent.postMessage({ height }, parentOrigin)
}
`.trim()

// { code: string, imports: Object<string> } => html_string_with_code string
const generateHTMLScript = ({ code, imports }) => {
  const script = document.createElement('script')
  script.type = 'module'
  script.innerHTML = templateCodeSandbox({ code, imports })
  return script
}

// HTMLElement => HTMLDocument
const renderIntoNewHTMLDoc = el => {
  const html = document.createElement('html')
  const head = document.createElement('head')
  const body = document.createElement('body')

  {
    const script = document.createElement('script')
    script.crossorigin = true
    script.src = 'https://cdn.jsdelivr.net/npm/react@18.3.0/umd/react.production.min.js'
    head.appendChild(script)
  }

  {
    const script = document.createElement('script')
    script.crossorigin = true
    script.src = 'https://cdn.jsdelivr.net/npm/react-dom@18.3.0/umd/react-dom.production.min.js'
    head.appendChild(script)
  }

  {
    const script = document.createElement('script')
    script.crossorigin = true
    script.src = 'https://cdn.jsdelivr.net/npm/arche@1.0.2/index.js'
    head.appendChild(script)
  }

  {
    const script = document.createElement('script')
    script.crossorigin = true
    script.src = 'https://cdn.jsdelivr.net/npm/styled-components@6.1.19/dist/styled-components.min.js'
    head.appendChild(script)
  }

  body.appendChild(el)
  html.appendChild(head)
  html.appendChild(body)
  return html
}

// HTMLElement => html_string
const htmlToString = el => {
  const div = document.createElement('div')
  div.appendChild(el)
  return div.innerHTML
}

// { code: string, imports: Object<string> } => iframeSrc
const transformCodeToIFrameSrc = pipe([
  generateHTMLScript,
  renderIntoNewHTMLDoc,
  htmlToString,
  tap(console.log),
  encodeURI,
  encodedHtmlString => `data:text/html;charset=utf-8,${encodedHtmlString}`,
])

const codeMirrors = new Map()

// { code } -> codeRunner React.Element
const CodeRunner = ReactElement(({
  code,
  imports: propsImports,
  theme = 'default',
  lineWrapping = true,
  lineNumbers = true,
}) => {
  const codeAreaRef = useRef(null)
  const outputAreaRef = useRef(null)
  const [outputAreaSrc, setOutputAreaSrc] = useState(null)

  useEffect(() => {
    if (!codeMirrors.has(codeAreaRef)) return
    codeMirrors.get(codeAreaRef).getDoc().setValue(code)
    setOutputAreaSrc(null)
  }, [code])

  useEffect(() => {
    const cm = CodeMirror(codeAreaRef.current, {
      value: code,
      mode: 'javascript',
      lineWrapping,
      lineNumbers,
      theme,
      inputStyle: 'contenteditable',
    })
    codeMirrors.set(codeAreaRef, cm)
    return () => {
      codeMirrors.delete(codeAreaRef)
    }
  }, [])

  const [ArcheVersion] = useArcheVersion()

  const createImports = ArcheVersion =>
    ArcheVersion == 'v1' ? ({ ...propsImports }) : ({ ...propsImports })

  const [imports, setImports] = useState(createImports(ArcheVersion))

  useEffect(function updateImports() {
    setImports(createImports(ArcheVersion))
  }, [ArcheVersion, propsImports])

  const iframeRef = useRef(null)
  useEffect(() => {
    const iframe = iframeRef.current
    const listener = window.addEventListener('message', event => {
      if (event.origin == "null" && event.source == iframe.contentWindow) {
        // continue
      } else {
        return
      }

      if (iframe) {
        iframe.style.height = event.data.height + 'px'
      }
    }, false)

    return () => {
      window.removeEventListener('message', listener)
    }
  }, [outputAreaSrc])

  const createOutput = pipe([
    all({
      code: () => codeMirrors.get(codeAreaRef).getValue(),
      imports: always(imports),
    }),
    transformCodeToIFrameSrc,
    iframeSrc => {
      setOutputAreaSrc(iframeSrc)
    },
  ])

  return Div({ class: 'code-runner' }, [
    Div({ ref: codeAreaRef }),
    Div({ style: { height: '.5em' } }),
    Div({
      style: {
        display: 'grid',
        gridTemplateColumns: '36px 26px 1fr',
      },
    }, [
      Button({
        style: {
          textAlign: 'center',
          borderRadius: '2px',
          width: '36px',
          padding: '0',
          cursor: 'pointer',
          height: '2em',
          outline: 'none',
          boxShadow: '1px 1px grey',
        },

        onClick: createOutput,
      }, ['run']),

      Span({
        style: {
          visibility: outputAreaSrc ? 'visible' : 'hidden',
          color: '#3f72fc',
          fontSize: '.80em',
          fontWeight: '625',
          position: 'relative',
          right: '-0.75em',
          bottom: '-0.65em',
        },
      }, [' >']),

      Iframe({
        sandbox: 'allow-same-origin allow-scripts',
        ref: iframeRef,
        style: {
          visibility: outputAreaSrc ? 'visible' : 'hidden',
          width: 'calc(100% - 10px)',
        },
        src: outputAreaSrc,
      }),
    ]),
  ])
})
export default CodeRunner

