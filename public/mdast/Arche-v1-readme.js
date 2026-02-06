export default {
  type: 'root',
  children: [
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Arche',
          position: {
            start: { line: 1, column: 3, offset: 2 },
            end: { line: 1, column: 8, offset: 7 }
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 8, offset: 7 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: 'https://raw.githubusercontent.com/a-synchronous/assets/master/arche-logo-226x226.png',
          alt: 'arche-logo',
          position: {
            start: { line: 2, column: 1, offset: 8 },
            end: { line: 2, column: 100, offset: 107 }
          }
        }
      ],
      position: {
        start: { line: 2, column: 1, offset: 8 },
        end: { line: 2, column: 100, offset: 107 }
      }
    },
    {
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: `Arche (/ˈɑːrki/; Ancient Greek: ἀρχή) is a Greek word with primary senses "beginning", "origin" or "source of action" (ἐξ' ἀρχῆς: from the beginning, οr ἐξ' ἀρχῆς λόγος: the original argument), and later "first principle" or "element".`,
              position: {
                start: { line: 3, column: 3, offset: 110 },
                end: { line: 3, column: 238, offset: 345 }
              }
            }
          ],
          position: {
            start: { line: 3, column: 3, offset: 110 },
            end: { line: 3, column: 238, offset: 345 }
          }
        }
      ],
      position: {
        start: { line: 3, column: 1, offset: 108 },
        end: { line: 3, column: 238, offset: 345 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: 'https://github.com/richytong/arche/actions/workflows/nodejs.yml/badge.svg',
          alt: 'Node.js CI',
          position: {
            start: { line: 5, column: 1, offset: 347 },
            end: { line: 5, column: 89, offset: 435 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 5, column: 89, offset: 435 },
            end: { line: 6, column: 1, offset: 436 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://codecov.io/gh/richytong/arche',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://codecov.io/gh/richytong/arche/branch/master/graph/badge.svg',
              alt: 'codecov',
              position: {
                start: { line: 6, column: 2, offset: 437 },
                end: { line: 6, column: 81, offset: 516 }
              }
            }
          ],
          position: {
            start: { line: 6, column: 1, offset: 436 },
            end: { line: 6, column: 121, offset: 556 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 6, column: 121, offset: 556 },
            end: { line: 7, column: 1, offset: 557 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://www.npmjs.com/package/arche',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://img.shields.io/npm/v/arche.svg?style=flat',
              alt: 'npm version',
              position: {
                start: { line: 7, column: 2, offset: 558 },
                end: { line: 7, column: 67, offset: 623 }
              }
            }
          ],
          position: {
            start: { line: 7, column: 1, offset: 557 },
            end: { line: 7, column: 105, offset: 661 }
          }
        }
      ],
      position: {
        start: { line: 5, column: 1, offset: 347 },
        end: { line: 7, column: 105, offset: 661 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Simplified DOM interface / React in pure JavaScript.',
          position: {
            start: { line: 9, column: 1, offset: 663 },
            end: { line: 9, column: 53, offset: 715 }
          }
        }
      ],
      position: {
        start: { line: 9, column: 1, offset: 663 },
        end: { line: 9, column: 53, offset: 715 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: '{\n' +
        '  const DocumentElement = Arche(document)\n' +
        '  const { Div, H1, P } = DocumentElement\n' +
        '\n' +
        "  const myElement = Div({ id: 'my-element' }, [\n" +
        "    H1('DOM Example'),\n" +
        "    P('paragraph'),\n" +
        "    P('lorem ipsum'),\n" +
        '  ])\n' +
        '\n' +
        "  document.getElementById('dom-container').appendChild(myElement)\n" +
        '}\n' +
        '\n' +
        '{\n' +
        '  const ReactElement = Arche(React)\n' +
        '  const { Div, H1, P, Button, Img } = ReactElement\n' +
        '\n' +
        '  const UserCard = ReactElement(({\n' +
        '    firstName, lastName, age,\n' +
        '  }) => Div([\n' +
        '    H1(`${firstName} ${lastName}`),\n' +
        "    Img({ src: 'https://placehold.co/300x300', alt: 'placeholder' }),\n" +
        "    P({ style: { color: 'lightgrey' } }, `age: ${age}`),\n" +
        '  ]))\n' +
        '\n' +
        '  ReactDOM.render(\n' +
        "    UserCard({ firstName: 'React', lastName: 'ExampleUser', age: 32 }),\n" +
        "    document.getElementById('react-root')\n" +
        '  )\n' +
        '}',
      position: {
        start: { line: 11, column: 1, offset: 717 },
        end: { line: 42, column: 4, offset: 1499 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Installation',
          position: {
            start: { line: 44, column: 4, offset: 1504 },
            end: { line: 44, column: 16, offset: 1516 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 1501 },
        end: { line: 44, column: 16, offset: 1516 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 45, column: 1, offset: 1517 },
            end: { line: 45, column: 6, offset: 1522 }
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 45, column: 6, offset: 1522 },
            end: { line: 45, column: 11, offset: 1527 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 1517 },
        end: { line: 45, column: 11, offset: 1527 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i arche',
      position: {
        start: { line: 47, column: 1, offset: 1529 },
        end: { line: 49, column: 4, offset: 1552 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with browser script, sets ',
          position: {
            start: { line: 51, column: 1, offset: 1554 },
            end: { line: 51, column: 27, offset: 1580 }
          }
        },
        {
          type: 'inlineCode',
          value: 'window.Arche',
          position: {
            start: { line: 51, column: 27, offset: 1580 },
            end: { line: 51, column: 41, offset: 1594 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 1554 },
        end: { line: 51, column: 41, offset: 1594 }
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<script src="https://unpkg.com/arche"></script>',
      position: {
        start: { line: 53, column: 1, offset: 1596 },
        end: { line: 55, column: 4, offset: 1655 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 57, column: 1, offset: 1657 },
            end: { line: 57, column: 6, offset: 1662 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules',
          children: [
            {
              type: 'text',
              value: 'ES Modules',
              position: {
                start: { line: 57, column: 7, offset: 1663 },
                end: { line: 57, column: 17, offset: 1673 }
              }
            }
          ],
          position: {
            start: { line: 57, column: 6, offset: 1662 },
            end: { line: 57, column: 89, offset: 1745 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 1, offset: 1657 },
        end: { line: 57, column: 89, offset: 1745 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "import Arche from 'https://unpkg.com/arche/es.js'",
      position: {
        start: { line: 58, column: 1, offset: 1746 },
        end: { line: 60, column: 4, offset: 1813 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 62, column: 1, offset: 1815 },
            end: { line: 62, column: 5, offset: 1819 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DocumentElement',
          position: {
            start: { line: 62, column: 5, offset: 1819 },
            end: { line: 62, column: 22, offset: 1836 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 62, column: 22, offset: 1836 },
            end: { line: 62, column: 66, offset: 1880 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 1815 },
        end: { line: 62, column: 66, offset: 1880 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// global.js\n' +
        'const DocumentElement = Arche()\n' +
        '\n' +
        'window.DocumentElement = DocumentElement\n' +
        '\n' +
        'for (const elementName in DocumentElement) {\n' +
        '  window[elementName] = DocumentElement[elementName]\n' +
        '}\n' +
        '\n' +
        '// set missing elements\n' +
        "window.Aside = DocumentElement('aside')\n" +
        "window.Svg = DocumentElement('svg')\n" +
        "window.Path = DocumentElement('path')",
      position: {
        start: { line: 64, column: 1, offset: 1882 },
        end: { line: 78, column: 4, offset: 2226 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Syntax',
          position: {
            start: { line: 80, column: 4, offset: 2231 },
            end: { line: 80, column: 10, offset: 2237 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2228 },
        end: { line: 80, column: 10, offset: 2237 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'Arche() -> DocumentElement\n' +
        'Arche(document Document) -> DocumentElement\n' +
        '\n' +
        'DocumentElement(\n' +
        '  elementType string,\n' +
        '  props object,\n' +
        '  text string\n' +
        ') -> element Element\n' +
        '\n' +
        'DocumentElement(\n' +
        '  elementType string,\n' +
        '  props object,\n' +
        '  children Array<Element|string>\n' +
        ') -> element Element\n' +
        '\n' +
        'DocumentElement(elementType string) -> TypedDocumentElement\n' +
        'DocumentElement.A -> TypedDocumentElement\n' +
        'DocumentElement.P -> TypedDocumentElement\n' +
        'DocumentElement.B -> TypedDocumentElement\n' +
        'DocumentElement.Q -> TypedDocumentElement\n' +
        'DocumentElement.I -> TypedDocumentElement\n' +
        'DocumentElement.Ul -> TypedDocumentElement\n' +
        'DocumentElement.Ol -> TypedDocumentElement\n' +
        'DocumentElement.Li -> TypedDocumentElement\n' +
        'DocumentElement.H1 -> TypedDocumentElement\n' +
        'DocumentElement.H2 -> TypedDocumentElement\n' +
        'DocumentElement.H3 -> TypedDocumentElement\n' +
        'DocumentElement.H4 -> TypedDocumentElement\n' +
        'DocumentElement.H5 -> TypedDocumentElement\n' +
        'DocumentElement.H6 -> TypedDocumentElement\n' +
        'DocumentElement.Hr -> TypedDocumentElement\n' +
        'DocumentElement.Br -> TypedDocumentElement\n' +
        'DocumentElement.Script -> TypedDocumentElement\n' +
        'DocumentElement.Html -> TypedDocumentElement\n' +
        'DocumentElement.Body -> TypedDocumentElement\n' +
        'DocumentElement.Nav -> TypedDocumentElement\n' +
        'DocumentElement.Section -> TypedDocumentElement\n' +
        'DocumentElement.Article -> TypedDocumentElement\n' +
        'DocumentElement.Footer -> TypedDocumentElement\n' +
        'DocumentElement.Span -> TypedDocumentElement\n' +
        'DocumentElement.Div -> TypedDocumentElement\n' +
        'DocumentElement.Img -> TypedDocumentElement\n' +
        'DocumentElement.Video -> TypedDocumentElement\n' +
        'DocumentElement.Form -> TypedDocumentElement\n' +
        'DocumentElement.Fieldset -> TypedDocumentElement\n' +
        'DocumentElement.Input -> TypedDocumentElement\n' +
        'DocumentElement.Label -> TypedDocumentElement\n' +
        'DocumentElement.Textarea -> TypedDocumentElement\n' +
        'DocumentElement.Select -> TypedDocumentElement\n' +
        'DocumentElement.Option -> TypedDocumentElement\n' +
        'DocumentElement.Button -> TypedDocumentElement\n' +
        'DocumentElement.Iframe -> TypedDocumentElement\n' +
        'DocumentElement.Blockquote -> TypedDocumentElement\n' +
        'DocumentElement.Code -> TypedDocumentElement\n' +
        'DocumentElement.Pre -> TypedDocumentElement\n' +
        '\n' +
        'TypedDocumentElement(props object, text string) -> element Element\n' +
        'TypedDocumentElement(text string) -> element Element\n' +
        'TypedDocumentElement(props object, children Array<Element|string>) -> element Element\n' +
        'TypedDocumentElement(children Array<Element|string>) -> element Element',
      position: {
        start: { line: 81, column: 1, offset: 2238 },
        end: { line: 142, column: 4, offset: 4631 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Using React',
          position: {
            start: { line: 144, column: 4, offset: 4636 },
            end: { line: 144, column: 15, offset: 4647 }
          }
        }
      ],
      position: {
        start: { line: 144, column: 1, offset: 4633 },
        end: { line: 144, column: 15, offset: 4647 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use Arche with ',
          position: {
            start: { line: 145, column: 1, offset: 4648 },
            end: { line: 145, column: 19, offset: 4666 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://react.dev/',
          children: [
            {
              type: 'text',
              value: 'React',
              position: {
                start: { line: 145, column: 20, offset: 4667 },
                end: { line: 145, column: 25, offset: 4672 }
              }
            }
          ],
          position: {
            start: { line: 145, column: 19, offset: 4666 },
            end: { line: 145, column: 46, offset: 4693 }
          }
        },
        {
          type: 'text',
          value: ', simply provide the React library.',
          position: {
            start: { line: 145, column: 46, offset: 4693 },
            end: { line: 145, column: 81, offset: 4728 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 4648 },
        end: { line: 145, column: 81, offset: 4728 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React)',
      position: {
        start: { line: 147, column: 1, offset: 4730 },
        end: { line: 149, column: 4, offset: 4781 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Create dynamic components with props.',
          position: {
            start: { line: 151, column: 1, offset: 4783 },
            end: { line: 151, column: 38, offset: 4820 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 1, offset: 4783 },
        end: { line: 151, column: 38, offset: 4820 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React)\n' +
        '\n' +
        'const { Div, H1, P, Button, Img } = ReactElement\n' +
        '\n' +
        'const UserCard = ReactElement(({\n' +
        '  firstName, lastName, age,\n' +
        '}) => Div([\n' +
        '  H1(`${firstName} ${lastName}`),\n' +
        "  Img({ src: 'https://via.placeholder.com/150x150', alt: 'placeholder' }),\n" +
        "  P({ style: { color: 'lightgrey' } }, `age: ${age}`),\n" +
        ']))\n' +
        '\n' +
        "render(UserCard({ firstName: 'Example', lastName: 'Name', age: 32 }))\n" +
        '// <div>\n' +
        '//   <h1>Example Name</h1>\n' +
        '//   <img src="https://via.placeholder.com/150x150" alt="placeholder">\n' +
        '//   <p style="color: lightgrey">age: 32</p>\n' +
        '// </div>',
      position: {
        start: { line: 153, column: 1, offset: 4822 },
        end: { line: 172, column: 4, offset: 5398 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Complete interoperability with React hooks (converted from ',
          position: {
            start: { line: 174, column: 1, offset: 5400 },
            end: { line: 174, column: 60, offset: 5459 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://reactjs.org/docs/hooks-intro.html',
          children: [
            {
              type: 'text',
              value: 'this example',
              position: {
                start: { line: 174, column: 61, offset: 5460 },
                end: { line: 174, column: 73, offset: 5472 }
              }
            }
          ],
          position: {
            start: { line: 174, column: 60, offset: 5459 },
            end: { line: 174, column: 117, offset: 5516 }
          }
        },
        {
          type: 'text',
          value: ').',
          position: {
            start: { line: 174, column: 117, offset: 5516 },
            end: { line: 174, column: 119, offset: 5518 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 5400 },
        end: { line: 174, column: 119, offset: 5518 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React)\n' +
        'const { Div, P, Button } = ReactElement\n' +
        'const { useState } = React\n' +
        '\n' +
        'const Example = ReactElement(() => {\n' +
        '  const [count, setCount] = useState(0)\n' +
        '\n' +
        '  return Div([\n' +
        '    P(`You clicked ${count} times`),\n' +
        '    Button({\n' +
        '      onClick() {\n' +
        '        setCount(count + 1)\n' +
        '      },\n' +
        "    }, 'Click me'),\n" +
        '  ])\n' +
        '})\n' +
        '\n' +
        'render(Example())\n' +
        '// <div>\n' +
        '//   <p>You clicked {count} times</p>\n' +
        '//   <button onclick="setCount(count + 1)">Click me</button>\n' +
        '// </div>',
      position: {
        start: { line: 176, column: 1, offset: 5520 },
        end: { line: 199, column: 4, offset: 6002 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 201, column: 1, offset: 6004 },
            end: { line: 201, column: 5, offset: 6008 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 201, column: 5, offset: 6008 },
            end: { line: 201, column: 19, offset: 6022 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 201, column: 19, offset: 6022 },
            end: { line: 201, column: 63, offset: 6066 }
          }
        }
      ],
      position: {
        start: { line: 201, column: 1, offset: 6004 },
        end: { line: 201, column: 63, offset: 6066 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// global.js\n' +
        'const ReactElement = Arche(React)\n' +
        '\n' +
        'window.ReactElement = ReactElement\n' +
        '\n' +
        'for (const elementName in ReactElement) {\n' +
        '  window[elementName] = ReactElement[elementName]\n' +
        '}\n' +
        '\n' +
        '// set missing elements\n' +
        "window.Aside = ReactElement('aside')\n" +
        "window.Svg = ReactElement('svg')\n" +
        "window.Path = ReactElement('path')",
      position: {
        start: { line: 203, column: 1, offset: 6068 },
        end: { line: 217, column: 4, offset: 6393 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Syntax with React',
          position: {
            start: { line: 219, column: 4, offset: 6398 },
            end: { line: 219, column: 21, offset: 6415 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 6395 },
        end: { line: 219, column: 21, offset: 6415 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type React = {\n' +
        '  createElement: (\n' +
        '    elementType string,\n' +
        '    props object,\n' +
        '    children string|Array<React.Element|string>\n' +
        '  )=>(reactElement React.Element)\n' +
        '}\n' +
        '\n' +
        'Arche(React) -> ReactElement\n' +
        '\n' +
        'ReactElement(\n' +
        '  elementType string,\n' +
        '  props object,\n' +
        '  text string\n' +
        ') -> reactElement React.Element\n' +
        '\n' +
        'ReactElement(\n' +
        '  elementType string,\n' +
        '  props object,\n' +
        '  children Array<React.Element|string>\n' +
        ') -> reactElement React.Element\n' +
        '\n' +
        'ReactElement(elementType string) -> TypedReactElement\n' +
        'ReactElement.A -> TypedReactElement\n' +
        'ReactElement.P -> TypedReactElement\n' +
        'ReactElement.B -> TypedReactElement\n' +
        'ReactElement.Q -> TypedReactElement\n' +
        'ReactElement.I -> TypedReactElement\n' +
        'ReactElement.Ul -> TypedReactElement\n' +
        'ReactElement.Ol -> TypedReactElement\n' +
        'ReactElement.Li -> TypedReactElement\n' +
        'ReactElement.H1 -> TypedReactElement\n' +
        'ReactElement.H2 -> TypedReactElement\n' +
        'ReactElement.H3 -> TypedReactElement\n' +
        'ReactElement.H4 -> TypedReactElement\n' +
        'ReactElement.H5 -> TypedReactElement\n' +
        'ReactElement.H6 -> TypedReactElement\n' +
        'ReactElement.Hr -> TypedReactElement\n' +
        'ReactElement.Br -> TypedReactElement\n' +
        'ReactElement.Script -> TypedReactElement\n' +
        'ReactElement.Html -> TypedReactElement\n' +
        'ReactElement.Body -> TypedReactElement\n' +
        'ReactElement.Nav -> TypedReactElement\n' +
        'ReactElement.Section -> TypedReactElement\n' +
        'ReactElement.Article -> TypedReactElement\n' +
        'ReactElement.Footer -> TypedReactElement\n' +
        'ReactElement.Span -> TypedReactElement\n' +
        'ReactElement.Div -> TypedReactElement\n' +
        'ReactElement.Img -> TypedReactElement\n' +
        'ReactElement.Video -> TypedReactElement\n' +
        'ReactElement.Form -> TypedReactElement\n' +
        'ReactElement.Fieldset -> TypedReactElement\n' +
        'ReactElement.Input -> TypedReactElement\n' +
        'ReactElement.Label -> TypedReactElement\n' +
        'ReactElement.Textarea -> TypedReactElement\n' +
        'ReactElement.Select -> TypedReactElement\n' +
        'ReactElement.Option -> TypedReactElement\n' +
        'ReactElement.Button -> TypedReactElement\n' +
        'ReactElement.Iframe -> TypedReactElement\n' +
        'ReactElement.Blockquote -> TypedReactElement\n' +
        'ReactElement.Code -> TypedReactElement\n' +
        'ReactElement.Pre -> TypedReactElement\n' +
        '\n' +
        'TypedReactElement(props object, text string) -> reactElement React.Element\n' +
        'TypedReactElement(text string) -> reactElement React.Element\n' +
        '\n' +
        'TypedReactElement(\n' +
        '  props object,\n' +
        '  children Array<React.Element|string>\n' +
        ') -> reactElement React.Element\n' +
        '\n' +
        'TypedReactElement(children Array<React.Element|string>) -> reactElement React.Element',
      position: {
        start: { line: 221, column: 1, offset: 6417 },
        end: { line: 294, column: 4, offset: 8763 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Using React Context',
          position: {
            start: { line: 296, column: 4, offset: 8768 },
            end: { line: 296, column: 23, offset: 8787 }
          }
        }
      ],
      position: {
        start: { line: 296, column: 1, offset: 8765 },
        end: { line: 296, column: 23, offset: 8787 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use React Context with Arche, wrap ',
          position: {
            start: { line: 297, column: 1, offset: 8788 },
            end: { line: 297, column: 39, offset: 8826 }
          }
        },
        {
          type: 'inlineCode',
          value: 'YourContext.Provider',
          position: {
            start: { line: 297, column: 39, offset: 8826 },
            end: { line: 297, column: 61, offset: 8848 }
          }
        },
        {
          type: 'text',
          value: ' with ',
          position: {
            start: { line: 297, column: 61, offset: 8848 },
            end: { line: 297, column: 67, offset: 8854 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 297, column: 67, offset: 8854 },
            end: { line: 297, column: 81, offset: 8868 }
          }
        },
        {
          type: 'text',
          value: ' and supply ',
          position: {
            start: { line: 297, column: 81, offset: 8868 },
            end: { line: 297, column: 93, offset: 8880 }
          }
        },
        {
          type: 'inlineCode',
          value: 'value',
          position: {
            start: { line: 297, column: 93, offset: 8880 },
            end: { line: 297, column: 100, offset: 8887 }
          }
        },
        {
          type: 'text',
          value: ' as a prop, specifying children in the next argument.',
          position: {
            start: { line: 297, column: 100, offset: 8887 },
            end: { line: 297, column: 153, offset: 8940 }
          }
        }
      ],
      position: {
        start: { line: 297, column: 1, offset: 8788 },
        end: { line: 297, column: 153, offset: 8940 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JSX example:',
          position: {
            start: { line: 299, column: 1, offset: 8942 },
            end: { line: 299, column: 13, offset: 8954 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 8942 },
        end: { line: 299, column: 13, offset: 8954 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'function ArticleWrapper () {\n' +
        '  const [theme, setTheme] = React.useState(themes[0])\n' +
        '\n' +
        '  return (\n' +
        '    <ThemeContext.Provider value={{\n' +
        '      theme,\n' +
        '      changeTheme: setTheme\n' +
        '    }}>\n' +
        '      <ThemeSwitcher />\n' +
        '      <Article />\n' +
        '    </ThemeContext.Provider>\n' +
        '  )\n' +
        '}',
      position: {
        start: { line: 300, column: 1, offset: 8955 },
        end: { line: 314, column: 4, offset: 9229 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Translates to the following with Arche:',
          position: {
            start: { line: 316, column: 1, offset: 9231 },
            end: { line: 316, column: 40, offset: 9270 }
          }
        }
      ],
      position: {
        start: { line: 316, column: 1, offset: 9231 },
        end: { line: 316, column: 40, offset: 9270 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ArticleWrapper = ReactElement(() => {\n' +
        '  const [theme, setTheme] = React.useState(themes[0])\n' +
        '\n' +
        '  return ReactElement(ThemeContext.Provider)({\n' +
        '    value: { theme, changeTheme: setTheme },\n' +
        '  }, [ThemeSwitcher(), Article()])\n' +
        '})',
      position: {
        start: { line: 317, column: 1, offset: 9271 },
        end: { line: 325, column: 4, offset: 9517 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Using styled',
          position: {
            start: { line: 327, column: 4, offset: 9522 },
            end: { line: 327, column: 16, offset: 9534 }
          }
        }
      ],
      position: {
        start: { line: 327, column: 1, offset: 9519 },
        end: { line: 327, column: 16, offset: 9534 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche accepts a ',
          position: {
            start: { line: 328, column: 1, offset: 9535 },
            end: { line: 328, column: 17, offset: 9551 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styled',
          position: {
            start: { line: 328, column: 17, offset: 9551 },
            end: { line: 328, column: 25, offset: 9559 }
          }
        },
        {
          type: 'text',
          value: ' option from css-in-js libraries like ',
          position: {
            start: { line: 328, column: 25, offset: 9559 },
            end: { line: 328, column: 63, offset: 9597 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://styled-components.com/',
          children: [
            {
              type: 'text',
              value: 'Styled Components',
              position: {
                start: { line: 328, column: 64, offset: 9598 },
                end: { line: 328, column: 81, offset: 9615 }
              }
            }
          ],
          position: {
            start: { line: 328, column: 63, offset: 9597 },
            end: { line: 328, column: 114, offset: 9648 }
          }
        },
        {
          type: 'text',
          value: ' to enable a ',
          position: {
            start: { line: 328, column: 114, offset: 9648 },
            end: { line: 328, column: 127, offset: 9661 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 328, column: 127, offset: 9661 },
            end: { line: 328, column: 132, offset: 9666 }
          }
        },
        {
          type: 'text',
          value: ' prop on ',
          position: {
            start: { line: 328, column: 132, offset: 9666 },
            end: { line: 328, column: 141, offset: 9675 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 328, column: 141, offset: 9675 },
            end: { line: 328, column: 155, offset: 9689 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 328, column: 155, offset: 9689 },
            end: { line: 328, column: 160, offset: 9694 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedReactElement',
          position: {
            start: { line: 328, column: 160, offset: 9694 },
            end: { line: 328, column: 179, offset: 9713 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 328, column: 179, offset: 9713 },
            end: { line: 328, column: 180, offset: 9714 }
          }
        }
      ],
      position: {
        start: { line: 328, column: 1, offset: 9535 },
        end: { line: 328, column: 180, offset: 9714 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// global.js\nconst ReactElement = Arche(React, { styled })',
      position: {
        start: { line: 330, column: 1, offset: 9716 },
        end: { line: 333, column: 4, offset: 9792 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Elements can now specify a ',
          position: {
            start: { line: 335, column: 1, offset: 9794 },
            end: { line: 335, column: 28, offset: 9821 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 335, column: 28, offset: 9821 },
            end: { line: 335, column: 33, offset: 9826 }
          }
        },
        {
          type: 'text',
          value: ' prop to use css-in-js.',
          position: {
            start: { line: 335, column: 33, offset: 9826 },
            end: { line: 335, column: 56, offset: 9849 }
          }
        }
      ],
      position: {
        start: { line: 335, column: 1, offset: 9794 },
        end: { line: 335, column: 56, offset: 9849 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// MyComponent.js\n' +
        'const MyComponent = ReactElement(props => {\n' +
        '  return Div({\n' +
        '    css: `\n' +
        '      width: 500px;\n' +
        '      background-color: pink;\n' +
        '    `,\n' +
        '  })\n' +
        '})',
      position: {
        start: { line: 337, column: 1, offset: 9851 },
        end: { line: 347, column: 4, offset: 10021 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Syntax with styled',
          position: {
            start: { line: 349, column: 4, offset: 10026 },
            end: { line: 349, column: 22, offset: 10044 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 10023 },
        end: { line: 349, column: 22, offset: 10044 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: '([css string])=>(reactElement React.Element) -> StyledComponent\n' +
        '\n' +
        'type Styled = {\n' +
        '  h1: StyledComponent,\n' +
        '  h2: StyledComponent,\n' +
        '  h3: StyledComponent,\n' +
        '  h4: StyledComponent,\n' +
        '  h5: StyledComponent,\n' +
        '  div: StyledComponent,\n' +
        '  button: StyledComponent,\n' +
        '  a: StyledComponent,\n' +
        '  p: StyledComponent,\n' +
        '  span: StyledComponent,\n' +
        '  img: StyledComponent,\n' +
        '  ul: StyledComponent,\n' +
        '  ol: StyledComponent,\n' +
        '  li: StyledComponent,\n' +
        '  form: StyledComponent,\n' +
        '  article: StyledComponent,\n' +
        '  main: StyledComponent,\n' +
        '  section: StyledComponent,\n' +
        '  nav: StyledComponent,\n' +
        '}\n' +
        '\n' +
        'Arche(React {\n' +
        '  createElement: (\n' +
        '    elementType string,\n' +
        '    props object,\n' +
        '    textOrChildren string|Array<React.Element|string>\n' +
        '  )=>(reactElement React.Element)\n' +
        '}, options {\n' +
        '  styled: Styled,\n' +
        '  styledMemoizationCap?: number\n' +
        '}) -> reactElement ReactElement\n' +
        '\n' +
        'ReactElement(\n' +
        '  elementType string,\n' +
        '  propsWithCss { css: string, ...props object },\n' +
        '  text string\n' +
        ') -> reactElement React.Element\n' +
        '\n' +
        'ReactElement(\n' +
        '  elementType string,\n' +
        '  propsWithCss { css: string, ...props object },\n' +
        '  children Array<React.Element|string>\n' +
        ') -> reactElement React.Element\n' +
        '\n' +
        'ReactElement(elementType string) -> TypedReactElement\n' +
        'ReactElement.A -> TypedReactElement\n' +
        'ReactElement.P -> TypedReactElement\n' +
        'ReactElement.B -> TypedReactElement\n' +
        'ReactElement.Q -> TypedReactElement\n' +
        'ReactElement.I -> TypedReactElement\n' +
        'ReactElement.Ul -> TypedReactElement\n' +
        'ReactElement.Ol -> TypedReactElement\n' +
        'ReactElement.Li -> TypedReactElement\n' +
        'ReactElement.H1 -> TypedReactElement\n' +
        'ReactElement.H2 -> TypedReactElement\n' +
        'ReactElement.H3 -> TypedReactElement\n' +
        'ReactElement.H4 -> TypedReactElement\n' +
        'ReactElement.H5 -> TypedReactElement\n' +
        'ReactElement.H6 -> TypedReactElement\n' +
        'ReactElement.Hr -> TypedReactElement\n' +
        'ReactElement.Br -> TypedReactElement\n' +
        'ReactElement.Script -> TypedReactElement\n' +
        'ReactElement.Html -> TypedReactElement\n' +
        'ReactElement.Body -> TypedReactElement\n' +
        'ReactElement.Nav -> TypedReactElement\n' +
        'ReactElement.Section -> TypedReactElement\n' +
        'ReactElement.Article -> TypedReactElement\n' +
        'ReactElement.Footer -> TypedReactElement\n' +
        'ReactElement.Span -> TypedReactElement\n' +
        'ReactElement.Div -> TypedReactElement\n' +
        'ReactElement.Img -> TypedReactElement\n' +
        'ReactElement.Video -> TypedReactElement\n' +
        'ReactElement.Form -> TypedReactElement\n' +
        'ReactElement.Fieldset -> TypedReactElement\n' +
        'ReactElement.Input -> TypedReactElement\n' +
        'ReactElement.Label -> TypedReactElement\n' +
        'ReactElement.Textarea -> TypedReactElement\n' +
        'ReactElement.Select -> TypedReactElement\n' +
        'ReactElement.Option -> TypedReactElement\n' +
        'ReactElement.Button -> TypedReactElement\n' +
        'ReactElement.Iframe -> TypedReactElement\n' +
        'ReactElement.Blockquote -> TypedReactElement\n' +
        'ReactElement.Code -> TypedReactElement\n' +
        'ReactElement.Pre -> TypedReactElement\n' +
        '\n' +
        'TypedReactElement(\n' +
        '  propsWithCss { css: string, ...props object },\n' +
        '  text string\n' +
        ') -> reactElement React.Element\n' +
        '\n' +
        'TypedReactElement(text string) -> reactElement React.Element\n' +
        '\n' +
        'TypedReactElement(\n' +
        '  propsWithCss { css: string, ...props object },\n' +
        '  children Array<React.Element|string>\n' +
        ') -> reactElement React.Element\n' +
        '\n' +
        'TypedReactElement(children Array<React.Element|string>) -> reactElement React.Element',
      position: {
        start: { line: 350, column: 1, offset: 10045 },
        end: { line: 452, column: 4, offset: 13140 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Contributing',
          position: {
            start: { line: 454, column: 3, offset: 13144 },
            end: { line: 454, column: 15, offset: 13156 }
          }
        }
      ],
      position: {
        start: { line: 454, column: 1, offset: 13142 },
        end: { line: 454, column: 15, offset: 13156 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 455, column: 1, offset: 13157 },
            end: { line: 455, column: 260, offset: 13416 }
          }
        }
      ],
      position: {
        start: { line: 455, column: 1, offset: 13157 },
        end: { line: 455, column: 260, offset: 13416 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 457, column: 1, offset: 13418 },
            end: { line: 457, column: 89, offset: 13506 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/a-synchronous/rubico/pull/12',
          children: [
            {
              type: 'text',
              value: 'example pull request',
              position: {
                start: { line: 457, column: 90, offset: 13507 },
                end: { line: 457, column: 110, offset: 13527 }
              }
            }
          ],
          position: {
            start: { line: 457, column: 89, offset: 13506 },
            end: { line: 457, column: 160, offset: 13577 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 457, column: 160, offset: 13577 },
            end: { line: 457, column: 205, offset: 13622 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/richytong/arche/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22',
          children: [
            {
              type: 'text',
              value: 'help wanted',
              position: {
                start: { line: 457, column: 206, offset: 13623 },
                end: { line: 457, column: 217, offset: 13634 }
              }
            }
          ],
          position: {
            start: { line: 457, column: 205, offset: 13622 },
            end: { line: 457, column: 310, offset: 13727 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 457, column: 310, offset: 13727 },
            end: { line: 457, column: 340, offset: 13757 }
          }
        }
      ],
      position: {
        start: { line: 457, column: 1, offset: 13418 },
        end: { line: 457, column: 340, offset: 13757 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 459, column: 1, offset: 13759 },
            end: { line: 459, column: 33, offset: 13791 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/CONTRIBUTING.md',
          children: [
            {
              type: 'text',
              value: 'CONTRIBUTING.md',
              position: {
                start: { line: 459, column: 34, offset: 13792 },
                end: { line: 459, column: 49, offset: 13807 }
              }
            }
          ],
          position: {
            start: { line: 459, column: 33, offset: 13791 },
            end: { line: 459, column: 68, offset: 13826 }
          }
        }
      ],
      position: {
        start: { line: 459, column: 1, offset: 13759 },
        end: { line: 459, column: 68, offset: 13826 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'License',
          position: {
            start: { line: 461, column: 3, offset: 13830 },
            end: { line: 461, column: 10, offset: 13837 }
          }
        }
      ],
      position: {
        start: { line: 461, column: 1, offset: 13828 },
        end: { line: 461, column: 10, offset: 13837 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche is ',
          position: {
            start: { line: 462, column: 1, offset: 13838 },
            end: { line: 462, column: 10, offset: 13847 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/a-synchronous/rubico/blob/master/LICENSE',
          children: [
            {
              type: 'text',
              value: 'MIT Licensed',
              position: {
                start: { line: 462, column: 11, offset: 13848 },
                end: { line: 462, column: 23, offset: 13860 }
              }
            }
          ],
          position: {
            start: { line: 462, column: 10, offset: 13847 },
            end: { line: 462, column: 85, offset: 13922 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 462, column: 85, offset: 13922 },
            end: { line: 462, column: 86, offset: 13923 }
          }
        }
      ],
      position: {
        start: { line: 462, column: 1, offset: 13838 },
        end: { line: 462, column: 86, offset: 13923 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Support',
          position: {
            start: { line: 464, column: 3, offset: 13927 },
            end: { line: 464, column: 10, offset: 13934 }
          }
        }
      ],
      position: {
        start: { line: 464, column: 1, offset: 13925 },
        end: { line: 464, column: 10, offset: 13934 }
      }
    },
    {
      type: 'list',
      ordered: false,
      start: null,
      spread: false,
      children: [
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'minimum Node.js version: 14',
                  position: {
                    start: { line: 465, column: 4, offset: 13938 },
                    end: { line: 465, column: 31, offset: 13965 }
                  }
                }
              ],
              position: {
                start: { line: 465, column: 4, offset: 13938 },
                end: { line: 465, column: 31, offset: 13965 }
              }
            }
          ],
          position: {
            start: { line: 465, column: 2, offset: 13936 },
            end: { line: 465, column: 31, offset: 13965 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'minimum Chrome version: 63',
                  position: {
                    start: { line: 466, column: 4, offset: 13969 },
                    end: { line: 466, column: 30, offset: 13995 }
                  }
                }
              ],
              position: {
                start: { line: 466, column: 4, offset: 13969 },
                end: { line: 466, column: 30, offset: 13995 }
              }
            }
          ],
          position: {
            start: { line: 466, column: 2, offset: 13967 },
            end: { line: 466, column: 30, offset: 13995 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'minimum Firefox version: 57',
                  position: {
                    start: { line: 467, column: 4, offset: 13999 },
                    end: { line: 467, column: 31, offset: 14026 }
                  }
                }
              ],
              position: {
                start: { line: 467, column: 4, offset: 13999 },
                end: { line: 467, column: 31, offset: 14026 }
              }
            }
          ],
          position: {
            start: { line: 467, column: 2, offset: 13997 },
            end: { line: 467, column: 31, offset: 14026 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'minimum Edge version: 79',
                  position: {
                    start: { line: 468, column: 4, offset: 14030 },
                    end: { line: 468, column: 28, offset: 14054 }
                  }
                }
              ],
              position: {
                start: { line: 468, column: 4, offset: 14030 },
                end: { line: 468, column: 28, offset: 14054 }
              }
            }
          ],
          position: {
            start: { line: 468, column: 2, offset: 14028 },
            end: { line: 468, column: 28, offset: 14054 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'minimum Safari version: 11.1',
                  position: {
                    start: { line: 469, column: 4, offset: 14058 },
                    end: { line: 469, column: 32, offset: 14086 }
                  }
                }
              ],
              position: {
                start: { line: 469, column: 4, offset: 14058 },
                end: { line: 469, column: 32, offset: 14086 }
              }
            }
          ],
          position: {
            start: { line: 469, column: 2, offset: 14056 },
            end: { line: 469, column: 32, offset: 14086 }
          }
        }
      ],
      position: {
        start: { line: 465, column: 2, offset: 13936 },
        end: { line: 469, column: 32, offset: 14086 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 470, column: 1, offset: 14087 }
  }
}