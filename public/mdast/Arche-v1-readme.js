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
        "    H1('Heading'),\n" +
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
        "    UserCard({ firstName: 'Example', lastName: 'Name', age: 32 }),\n" +
        "    document.getElementById('react-root')\n" +
        '  )\n' +
        '}',
      position: {
        start: { line: 11, column: 1, offset: 717 },
        end: { line: 42, column: 4, offset: 1490 }
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
            start: { line: 44, column: 4, offset: 1495 },
            end: { line: 44, column: 16, offset: 1507 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 1492 },
        end: { line: 44, column: 16, offset: 1507 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 45, column: 1, offset: 1508 },
            end: { line: 45, column: 6, offset: 1513 }
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 45, column: 6, offset: 1513 },
            end: { line: 45, column: 11, offset: 1518 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 1508 },
        end: { line: 45, column: 11, offset: 1518 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i arche',
      position: {
        start: { line: 47, column: 1, offset: 1520 },
        end: { line: 49, column: 4, offset: 1543 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with browser script, sets ',
          position: {
            start: { line: 51, column: 1, offset: 1545 },
            end: { line: 51, column: 27, offset: 1571 }
          }
        },
        {
          type: 'inlineCode',
          value: 'window.Arche',
          position: {
            start: { line: 51, column: 27, offset: 1571 },
            end: { line: 51, column: 41, offset: 1585 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 1545 },
        end: { line: 51, column: 41, offset: 1585 }
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<script src="https://unpkg.com/arche"></script>',
      position: {
        start: { line: 53, column: 1, offset: 1587 },
        end: { line: 55, column: 4, offset: 1646 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 57, column: 1, offset: 1648 },
            end: { line: 57, column: 6, offset: 1653 }
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
                start: { line: 57, column: 7, offset: 1654 },
                end: { line: 57, column: 17, offset: 1664 }
              }
            }
          ],
          position: {
            start: { line: 57, column: 6, offset: 1653 },
            end: { line: 57, column: 89, offset: 1736 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 1, offset: 1648 },
        end: { line: 57, column: 89, offset: 1736 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "import Arche from 'https://unpkg.com/arche/es.js'",
      position: {
        start: { line: 58, column: 1, offset: 1737 },
        end: { line: 60, column: 4, offset: 1804 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 62, column: 1, offset: 1806 },
            end: { line: 62, column: 5, offset: 1810 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DocumentElement',
          position: {
            start: { line: 62, column: 5, offset: 1810 },
            end: { line: 62, column: 22, offset: 1827 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 62, column: 22, offset: 1827 },
            end: { line: 62, column: 66, offset: 1871 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 1806 },
        end: { line: 62, column: 66, offset: 1871 }
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
        start: { line: 64, column: 1, offset: 1873 },
        end: { line: 78, column: 4, offset: 2217 }
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
            start: { line: 80, column: 4, offset: 2222 },
            end: { line: 80, column: 10, offset: 2228 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2219 },
        end: { line: 80, column: 10, offset: 2228 }
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
        start: { line: 81, column: 1, offset: 2229 },
        end: { line: 142, column: 4, offset: 4622 }
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
            start: { line: 144, column: 4, offset: 4627 },
            end: { line: 144, column: 15, offset: 4638 }
          }
        }
      ],
      position: {
        start: { line: 144, column: 1, offset: 4624 },
        end: { line: 144, column: 15, offset: 4638 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use Arche with ',
          position: {
            start: { line: 145, column: 1, offset: 4639 },
            end: { line: 145, column: 19, offset: 4657 }
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
                start: { line: 145, column: 20, offset: 4658 },
                end: { line: 145, column: 25, offset: 4663 }
              }
            }
          ],
          position: {
            start: { line: 145, column: 19, offset: 4657 },
            end: { line: 145, column: 46, offset: 4684 }
          }
        },
        {
          type: 'text',
          value: ', simply provide the React library.',
          position: {
            start: { line: 145, column: 46, offset: 4684 },
            end: { line: 145, column: 81, offset: 4719 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 4639 },
        end: { line: 145, column: 81, offset: 4719 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React)',
      position: {
        start: { line: 147, column: 1, offset: 4721 },
        end: { line: 149, column: 4, offset: 4772 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Create dynamic components with props.',
          position: {
            start: { line: 151, column: 1, offset: 4774 },
            end: { line: 151, column: 38, offset: 4811 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 1, offset: 4774 },
        end: { line: 151, column: 38, offset: 4811 }
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
        start: { line: 153, column: 1, offset: 4813 },
        end: { line: 172, column: 4, offset: 5389 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Complete interoperability with React hooks (converted from ',
          position: {
            start: { line: 174, column: 1, offset: 5391 },
            end: { line: 174, column: 60, offset: 5450 }
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
                start: { line: 174, column: 61, offset: 5451 },
                end: { line: 174, column: 73, offset: 5463 }
              }
            }
          ],
          position: {
            start: { line: 174, column: 60, offset: 5450 },
            end: { line: 174, column: 117, offset: 5507 }
          }
        },
        {
          type: 'text',
          value: ').',
          position: {
            start: { line: 174, column: 117, offset: 5507 },
            end: { line: 174, column: 119, offset: 5509 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 5391 },
        end: { line: 174, column: 119, offset: 5509 }
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
        start: { line: 176, column: 1, offset: 5511 },
        end: { line: 199, column: 4, offset: 5993 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 201, column: 1, offset: 5995 },
            end: { line: 201, column: 5, offset: 5999 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 201, column: 5, offset: 5999 },
            end: { line: 201, column: 19, offset: 6013 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 201, column: 19, offset: 6013 },
            end: { line: 201, column: 63, offset: 6057 }
          }
        }
      ],
      position: {
        start: { line: 201, column: 1, offset: 5995 },
        end: { line: 201, column: 63, offset: 6057 }
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
        start: { line: 203, column: 1, offset: 6059 },
        end: { line: 217, column: 4, offset: 6384 }
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
            start: { line: 219, column: 4, offset: 6389 },
            end: { line: 219, column: 21, offset: 6406 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 6386 },
        end: { line: 219, column: 21, offset: 6406 }
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
        start: { line: 221, column: 1, offset: 6408 },
        end: { line: 294, column: 4, offset: 8754 }
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
            start: { line: 296, column: 4, offset: 8759 },
            end: { line: 296, column: 23, offset: 8778 }
          }
        }
      ],
      position: {
        start: { line: 296, column: 1, offset: 8756 },
        end: { line: 296, column: 23, offset: 8778 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use React Context with Arche, wrap ',
          position: {
            start: { line: 297, column: 1, offset: 8779 },
            end: { line: 297, column: 39, offset: 8817 }
          }
        },
        {
          type: 'inlineCode',
          value: 'YourContext.Provider',
          position: {
            start: { line: 297, column: 39, offset: 8817 },
            end: { line: 297, column: 61, offset: 8839 }
          }
        },
        {
          type: 'text',
          value: ' with ',
          position: {
            start: { line: 297, column: 61, offset: 8839 },
            end: { line: 297, column: 67, offset: 8845 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 297, column: 67, offset: 8845 },
            end: { line: 297, column: 81, offset: 8859 }
          }
        },
        {
          type: 'text',
          value: ' and supply ',
          position: {
            start: { line: 297, column: 81, offset: 8859 },
            end: { line: 297, column: 93, offset: 8871 }
          }
        },
        {
          type: 'inlineCode',
          value: 'value',
          position: {
            start: { line: 297, column: 93, offset: 8871 },
            end: { line: 297, column: 100, offset: 8878 }
          }
        },
        {
          type: 'text',
          value: ' as a prop, specifying children in the next argument.',
          position: {
            start: { line: 297, column: 100, offset: 8878 },
            end: { line: 297, column: 153, offset: 8931 }
          }
        }
      ],
      position: {
        start: { line: 297, column: 1, offset: 8779 },
        end: { line: 297, column: 153, offset: 8931 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JSX example:',
          position: {
            start: { line: 299, column: 1, offset: 8933 },
            end: { line: 299, column: 13, offset: 8945 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 8933 },
        end: { line: 299, column: 13, offset: 8945 }
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
        start: { line: 300, column: 1, offset: 8946 },
        end: { line: 314, column: 4, offset: 9220 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Translates to the following with Arche:',
          position: {
            start: { line: 316, column: 1, offset: 9222 },
            end: { line: 316, column: 40, offset: 9261 }
          }
        }
      ],
      position: {
        start: { line: 316, column: 1, offset: 9222 },
        end: { line: 316, column: 40, offset: 9261 }
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
        start: { line: 317, column: 1, offset: 9262 },
        end: { line: 325, column: 4, offset: 9508 }
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
            start: { line: 327, column: 4, offset: 9513 },
            end: { line: 327, column: 16, offset: 9525 }
          }
        }
      ],
      position: {
        start: { line: 327, column: 1, offset: 9510 },
        end: { line: 327, column: 16, offset: 9525 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche accepts a ',
          position: {
            start: { line: 328, column: 1, offset: 9526 },
            end: { line: 328, column: 17, offset: 9542 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styled',
          position: {
            start: { line: 328, column: 17, offset: 9542 },
            end: { line: 328, column: 25, offset: 9550 }
          }
        },
        {
          type: 'text',
          value: ' option from css-in-js libraries like ',
          position: {
            start: { line: 328, column: 25, offset: 9550 },
            end: { line: 328, column: 63, offset: 9588 }
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
                start: { line: 328, column: 64, offset: 9589 },
                end: { line: 328, column: 81, offset: 9606 }
              }
            }
          ],
          position: {
            start: { line: 328, column: 63, offset: 9588 },
            end: { line: 328, column: 114, offset: 9639 }
          }
        },
        {
          type: 'text',
          value: ' to enable a ',
          position: {
            start: { line: 328, column: 114, offset: 9639 },
            end: { line: 328, column: 127, offset: 9652 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 328, column: 127, offset: 9652 },
            end: { line: 328, column: 132, offset: 9657 }
          }
        },
        {
          type: 'text',
          value: ' prop on ',
          position: {
            start: { line: 328, column: 132, offset: 9657 },
            end: { line: 328, column: 141, offset: 9666 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 328, column: 141, offset: 9666 },
            end: { line: 328, column: 155, offset: 9680 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 328, column: 155, offset: 9680 },
            end: { line: 328, column: 160, offset: 9685 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedReactElement',
          position: {
            start: { line: 328, column: 160, offset: 9685 },
            end: { line: 328, column: 179, offset: 9704 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 328, column: 179, offset: 9704 },
            end: { line: 328, column: 180, offset: 9705 }
          }
        }
      ],
      position: {
        start: { line: 328, column: 1, offset: 9526 },
        end: { line: 328, column: 180, offset: 9705 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// global.js\nconst ReactElement = Arche(React, { styled })',
      position: {
        start: { line: 330, column: 1, offset: 9707 },
        end: { line: 333, column: 4, offset: 9783 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Elements can now specify a ',
          position: {
            start: { line: 335, column: 1, offset: 9785 },
            end: { line: 335, column: 28, offset: 9812 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 335, column: 28, offset: 9812 },
            end: { line: 335, column: 33, offset: 9817 }
          }
        },
        {
          type: 'text',
          value: ' prop to use css-in-js.',
          position: {
            start: { line: 335, column: 33, offset: 9817 },
            end: { line: 335, column: 56, offset: 9840 }
          }
        }
      ],
      position: {
        start: { line: 335, column: 1, offset: 9785 },
        end: { line: 335, column: 56, offset: 9840 }
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
        start: { line: 337, column: 1, offset: 9842 },
        end: { line: 347, column: 4, offset: 10012 }
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
            start: { line: 349, column: 4, offset: 10017 },
            end: { line: 349, column: 22, offset: 10035 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 10014 },
        end: { line: 349, column: 22, offset: 10035 }
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
        start: { line: 350, column: 1, offset: 10036 },
        end: { line: 452, column: 4, offset: 13131 }
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
            start: { line: 454, column: 3, offset: 13135 },
            end: { line: 454, column: 15, offset: 13147 }
          }
        }
      ],
      position: {
        start: { line: 454, column: 1, offset: 13133 },
        end: { line: 454, column: 15, offset: 13147 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 455, column: 1, offset: 13148 },
            end: { line: 455, column: 260, offset: 13407 }
          }
        }
      ],
      position: {
        start: { line: 455, column: 1, offset: 13148 },
        end: { line: 455, column: 260, offset: 13407 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 457, column: 1, offset: 13409 },
            end: { line: 457, column: 89, offset: 13497 }
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
                start: { line: 457, column: 90, offset: 13498 },
                end: { line: 457, column: 110, offset: 13518 }
              }
            }
          ],
          position: {
            start: { line: 457, column: 89, offset: 13497 },
            end: { line: 457, column: 160, offset: 13568 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 457, column: 160, offset: 13568 },
            end: { line: 457, column: 205, offset: 13613 }
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
                start: { line: 457, column: 206, offset: 13614 },
                end: { line: 457, column: 217, offset: 13625 }
              }
            }
          ],
          position: {
            start: { line: 457, column: 205, offset: 13613 },
            end: { line: 457, column: 310, offset: 13718 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 457, column: 310, offset: 13718 },
            end: { line: 457, column: 340, offset: 13748 }
          }
        }
      ],
      position: {
        start: { line: 457, column: 1, offset: 13409 },
        end: { line: 457, column: 340, offset: 13748 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 459, column: 1, offset: 13750 },
            end: { line: 459, column: 33, offset: 13782 }
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
                start: { line: 459, column: 34, offset: 13783 },
                end: { line: 459, column: 49, offset: 13798 }
              }
            }
          ],
          position: {
            start: { line: 459, column: 33, offset: 13782 },
            end: { line: 459, column: 68, offset: 13817 }
          }
        }
      ],
      position: {
        start: { line: 459, column: 1, offset: 13750 },
        end: { line: 459, column: 68, offset: 13817 }
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
            start: { line: 461, column: 3, offset: 13821 },
            end: { line: 461, column: 10, offset: 13828 }
          }
        }
      ],
      position: {
        start: { line: 461, column: 1, offset: 13819 },
        end: { line: 461, column: 10, offset: 13828 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche is ',
          position: {
            start: { line: 462, column: 1, offset: 13829 },
            end: { line: 462, column: 10, offset: 13838 }
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
                start: { line: 462, column: 11, offset: 13839 },
                end: { line: 462, column: 23, offset: 13851 }
              }
            }
          ],
          position: {
            start: { line: 462, column: 10, offset: 13838 },
            end: { line: 462, column: 85, offset: 13913 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 462, column: 85, offset: 13913 },
            end: { line: 462, column: 86, offset: 13914 }
          }
        }
      ],
      position: {
        start: { line: 462, column: 1, offset: 13829 },
        end: { line: 462, column: 86, offset: 13914 }
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
            start: { line: 464, column: 3, offset: 13918 },
            end: { line: 464, column: 10, offset: 13925 }
          }
        }
      ],
      position: {
        start: { line: 464, column: 1, offset: 13916 },
        end: { line: 464, column: 10, offset: 13925 }
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
                    start: { line: 465, column: 4, offset: 13929 },
                    end: { line: 465, column: 31, offset: 13956 }
                  }
                }
              ],
              position: {
                start: { line: 465, column: 4, offset: 13929 },
                end: { line: 465, column: 31, offset: 13956 }
              }
            }
          ],
          position: {
            start: { line: 465, column: 2, offset: 13927 },
            end: { line: 465, column: 31, offset: 13956 }
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
                    start: { line: 466, column: 4, offset: 13960 },
                    end: { line: 466, column: 30, offset: 13986 }
                  }
                }
              ],
              position: {
                start: { line: 466, column: 4, offset: 13960 },
                end: { line: 466, column: 30, offset: 13986 }
              }
            }
          ],
          position: {
            start: { line: 466, column: 2, offset: 13958 },
            end: { line: 466, column: 30, offset: 13986 }
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
                    start: { line: 467, column: 4, offset: 13990 },
                    end: { line: 467, column: 31, offset: 14017 }
                  }
                }
              ],
              position: {
                start: { line: 467, column: 4, offset: 13990 },
                end: { line: 467, column: 31, offset: 14017 }
              }
            }
          ],
          position: {
            start: { line: 467, column: 2, offset: 13988 },
            end: { line: 467, column: 31, offset: 14017 }
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
                    start: { line: 468, column: 4, offset: 14021 },
                    end: { line: 468, column: 28, offset: 14045 }
                  }
                }
              ],
              position: {
                start: { line: 468, column: 4, offset: 14021 },
                end: { line: 468, column: 28, offset: 14045 }
              }
            }
          ],
          position: {
            start: { line: 468, column: 2, offset: 14019 },
            end: { line: 468, column: 28, offset: 14045 }
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
                    start: { line: 469, column: 4, offset: 14049 },
                    end: { line: 469, column: 32, offset: 14077 }
                  }
                }
              ],
              position: {
                start: { line: 469, column: 4, offset: 14049 },
                end: { line: 469, column: 32, offset: 14077 }
              }
            }
          ],
          position: {
            start: { line: 469, column: 2, offset: 14047 },
            end: { line: 469, column: 32, offset: 14077 }
          }
        }
      ],
      position: {
        start: { line: 465, column: 2, offset: 13927 },
        end: { line: 469, column: 32, offset: 14077 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 470, column: 1, offset: 14078 }
  }
}