import Layout from './Layout.js'
import DocsNav from './DocsNav.js'
import useArcheVersion from './useArcheVersion.js'
import useDocsViewerClassName from './useDocsViewerClassName.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
import usePath from './usePath.js'
import useCronistMap from './useCronistMap.js'
import ArcheClassExludedMethods from './ArcheClassExcludedMethods.js'

/**
 * @name DocsHome
 *
 * @synopsis
 * ```coffeescript [specscript]
 * DocsHome() -> ReactElement
 * ```
 */
const DocsHome = ReactElement(props => {

  const [ArcheVersion] = useArcheVersion()
  const [cronistMap, setCronistMap] = useCronistMap()
  const [docsViewerClassName, setDocsViewerClassName] = useDocsViewerClassName('')
  const [path, setPath] = usePath()

  useEffect(function updatePathToDefaultViewerFunc() {
    if (path == '/docs') {
      setPath(`/docs/${defaultDocsViewerClassName}`, { replace: true })
    }
  }, [path])

  useEffect(function updateDocsViewerFuncNameFromPath() {
    if (path == '/docs') {
    } else {
      let funcName = path.replace('/docs/', '')
      setDocsViewerClassName(funcName)
    }
  }, [path])

  useEffect(function scrollToAnchor() {
    const anchor = new URL(location.href).hash
    if (anchor.length > 0) {
      setTimeout(() => {
        window.scrollTo(0, document.getElementById(anchor.slice(1)).offsetTop + 300)
      }, 10)
    }
  }, [])

  const docsData = cronistMap.get(docsViewerClassName)
  const excludedMethods = ArcheClassExludedMethods.get(docsViewerClassName) ?? []

  return Layout(props, [
    Div({ id: 'docs' }, [
      Div({ class: 'sidebar' }, [
        DocsNav(props),
      ]),

      cronistMap.size == 0 ? []
      : cronistMap.has(docsViewerClassName) ? [
        Div({ class: 'viewer' }, [
          A({ href: `#${docsViewerClassName}` }, H1(docsViewerClassName)),

          Div({ class: 'docs' }, [
            ReactElementFromMdast({ mdast: docsData.mdast.docs }),

            docsData.methods
            .filter(methodData =>
                !methodData.name.startsWith('_')
                && !excludedMethods.includes(methodData.name)
            )
            .map(methodData => Div({
              id: `${methodData.name}`,
              class: 'method',
              key: methodData.name,
            }, [
              A({ href: `${path}#${methodData.name}` }, H1(methodData.name)),
              ReactElementFromMdast({
                mdast: methodData.mdast.docs,
              })
            ])),
          ]),

        ]),
      ]
      : [
        Div({ class: 'viewer' }, [
          A({
            href: path,
          }, H1(docsViewerClassName)),

          P(`Not supported in Arche ${ArcheVersion}`),
        ]),
      ],
    ]),
  ])
})

export default DocsHome
