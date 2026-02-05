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
              value: `Arche (/ˈɑːrki/; Ancient Greek: ἀρχή) is a Greek word with primary senses "beginning", "origin" or "source of action" (ἐξ' ἀρχῆς: from the beginning, οr ἐξ' ἀρχῆς λόγος: the original argument), and later "first principle" or "element". (`,
              position: {
                start: { line: 3, column: 3, offset: 110 },
                end: { line: 3, column: 240, offset: 347 }
              }
            },
            {
              type: 'link',
              title: null,
              url: 'https://en.wikipedia.org/wiki/Arche',
              children: [
                {
                  type: 'text',
                  value: 'wikipedia',
                  position: {
                    start: { line: 3, column: 241, offset: 348 },
                    end: { line: 3, column: 250, offset: 357 }
                  }
                }
              ],
              position: {
                start: { line: 3, column: 240, offset: 347 },
                end: { line: 3, column: 288, offset: 395 }
              }
            },
            {
              type: 'text',
              value: ')',
              position: {
                start: { line: 3, column: 288, offset: 395 },
                end: { line: 3, column: 289, offset: 396 }
              }
            }
          ],
          position: {
            start: { line: 3, column: 3, offset: 110 },
            end: { line: 3, column: 289, offset: 396 }
          }
        }
      ],
      position: {
        start: { line: 3, column: 1, offset: 108 },
        end: { line: 3, column: 289, offset: 396 }
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
            start: { line: 5, column: 1, offset: 398 },
            end: { line: 5, column: 89, offset: 486 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 5, column: 89, offset: 486 },
            end: { line: 6, column: 1, offset: 487 }
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
                start: { line: 6, column: 2, offset: 488 },
                end: { line: 6, column: 81, offset: 567 }
              }
            }
          ],
          position: {
            start: { line: 6, column: 1, offset: 487 },
            end: { line: 6, column: 121, offset: 607 }
          }
        }
      ],
      position: {
        start: { line: 5, column: 1, offset: 398 },
        end: { line: 6, column: 121, offset: 607 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Simplified DOM interface / React in pure JavaScript.',
          position: {
            start: { line: 8, column: 1, offset: 609 },
            end: { line: 8, column: 53, offset: 661 }
          }
        }
      ],
      position: {
        start: { line: 8, column: 1, offset: 609 },
        end: { line: 8, column: 53, offset: 661 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const DocumentElement = Arche(document)\n' +
        'const { Div, H1, P } = DocumentElement\n' +
        '\n' +
        "const myElement = Div({ id: 'my-element' }, [\n" +
        "  H1('I am a heading'),\n" +
        "  P('paragraph'),\n" +
        "  P('lorem ipsum'),\n" +
        '])\n' +
        '\n' +
        "document.getElementById('#my-container').appendChild(myElement)\n" +
        '// <div id="my-container">\n' +
        '//   <div id="my-element">\n' +
        '//     <h1>I am a heading</h1>\n' +
        '//     <p>paragraph</p>\n' +
        '//     <p>lorem ipsum</p>\n' +
        '//   </div>\n' +
        '// </div>\n' +
        '\n' +
        'const ReactElement = Arche(React)\n' +
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
        'ReactDOM.render(\n' +
        "  UserCard({ firstName: 'Example', lastName: 'Name', age: 32 }),\n" +
        "  document.getElementById('react-root')\n" +
        ')',
      position: {
        start: { line: 10, column: 1, offset: 663 },
        end: { line: 44, column: 4, offset: 1544 }
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
            start: { line: 46, column: 4, offset: 1549 },
            end: { line: 46, column: 16, offset: 1561 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 1546 },
        end: { line: 46, column: 16, offset: 1561 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 47, column: 1, offset: 1562 },
            end: { line: 47, column: 6, offset: 1567 }
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 47, column: 6, offset: 1567 },
            end: { line: 47, column: 11, offset: 1572 }
          }
        }
      ],
      position: {
        start: { line: 47, column: 1, offset: 1562 },
        end: { line: 47, column: 11, offset: 1572 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i arche',
      position: {
        start: { line: 49, column: 1, offset: 1574 },
        end: { line: 51, column: 4, offset: 1597 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with browser script, sets ',
          position: {
            start: { line: 53, column: 1, offset: 1599 },
            end: { line: 53, column: 27, offset: 1625 }
          }
        },
        {
          type: 'inlineCode',
          value: 'window.Arche',
          position: {
            start: { line: 53, column: 27, offset: 1625 },
            end: { line: 53, column: 41, offset: 1639 }
          }
        }
      ],
      position: {
        start: { line: 53, column: 1, offset: 1599 },
        end: { line: 53, column: 41, offset: 1639 }
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<script src="https://unpkg.com/arche"></script>',
      position: {
        start: { line: 55, column: 1, offset: 1641 },
        end: { line: 57, column: 4, offset: 1700 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 59, column: 1, offset: 1702 },
            end: { line: 59, column: 6, offset: 1707 }
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
                start: { line: 59, column: 7, offset: 1708 },
                end: { line: 59, column: 17, offset: 1718 }
              }
            }
          ],
          position: {
            start: { line: 59, column: 6, offset: 1707 },
            end: { line: 59, column: 89, offset: 1790 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 1702 },
        end: { line: 59, column: 89, offset: 1790 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "import Arche from 'https://unpkg.com/arche/es.js'",
      position: {
        start: { line: 60, column: 1, offset: 1791 },
        end: { line: 62, column: 4, offset: 1858 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 64, column: 1, offset: 1860 },
            end: { line: 64, column: 5, offset: 1864 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DocumentElement',
          position: {
            start: { line: 64, column: 5, offset: 1864 },
            end: { line: 64, column: 22, offset: 1881 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 64, column: 22, offset: 1881 },
            end: { line: 64, column: 66, offset: 1925 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 1860 },
        end: { line: 64, column: 66, offset: 1925 }
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
        start: { line: 66, column: 1, offset: 1927 },
        end: { line: 80, column: 4, offset: 2271 }
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
            start: { line: 82, column: 4, offset: 2276 },
            end: { line: 82, column: 10, offset: 2282 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 2273 },
        end: { line: 82, column: 10, offset: 2282 }
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
        start: { line: 83, column: 1, offset: 2283 },
        end: { line: 144, column: 4, offset: 4676 }
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
            start: { line: 146, column: 4, offset: 4681 },
            end: { line: 146, column: 15, offset: 4692 }
          }
        }
      ],
      position: {
        start: { line: 146, column: 1, offset: 4678 },
        end: { line: 146, column: 15, offset: 4692 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use Arche with ',
          position: {
            start: { line: 147, column: 1, offset: 4693 },
            end: { line: 147, column: 19, offset: 4711 }
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
                start: { line: 147, column: 20, offset: 4712 },
                end: { line: 147, column: 25, offset: 4717 }
              }
            }
          ],
          position: {
            start: { line: 147, column: 19, offset: 4711 },
            end: { line: 147, column: 46, offset: 4738 }
          }
        },
        {
          type: 'text',
          value: ', simply provide the React library.',
          position: {
            start: { line: 147, column: 46, offset: 4738 },
            end: { line: 147, column: 81, offset: 4773 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 4693 },
        end: { line: 147, column: 81, offset: 4773 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React)',
      position: {
        start: { line: 149, column: 1, offset: 4775 },
        end: { line: 151, column: 4, offset: 4826 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Create dynamic components with props.',
          position: {
            start: { line: 153, column: 1, offset: 4828 },
            end: { line: 153, column: 38, offset: 4865 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 4828 },
        end: { line: 153, column: 38, offset: 4865 }
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
        start: { line: 155, column: 1, offset: 4867 },
        end: { line: 174, column: 4, offset: 5443 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Complete interoperability with React hooks (converted from ',
          position: {
            start: { line: 176, column: 1, offset: 5445 },
            end: { line: 176, column: 60, offset: 5504 }
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
                start: { line: 176, column: 61, offset: 5505 },
                end: { line: 176, column: 73, offset: 5517 }
              }
            }
          ],
          position: {
            start: { line: 176, column: 60, offset: 5504 },
            end: { line: 176, column: 117, offset: 5561 }
          }
        },
        {
          type: 'text',
          value: ').',
          position: {
            start: { line: 176, column: 117, offset: 5561 },
            end: { line: 176, column: 119, offset: 5563 }
          }
        }
      ],
      position: {
        start: { line: 176, column: 1, offset: 5445 },
        end: { line: 176, column: 119, offset: 5563 }
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
        start: { line: 178, column: 1, offset: 5565 },
        end: { line: 201, column: 4, offset: 6047 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 203, column: 1, offset: 6049 },
            end: { line: 203, column: 5, offset: 6053 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 203, column: 5, offset: 6053 },
            end: { line: 203, column: 19, offset: 6067 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 203, column: 19, offset: 6067 },
            end: { line: 203, column: 63, offset: 6111 }
          }
        }
      ],
      position: {
        start: { line: 203, column: 1, offset: 6049 },
        end: { line: 203, column: 63, offset: 6111 }
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
        start: { line: 205, column: 1, offset: 6113 },
        end: { line: 219, column: 4, offset: 6438 }
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
            start: { line: 221, column: 4, offset: 6443 },
            end: { line: 221, column: 21, offset: 6460 }
          }
        }
      ],
      position: {
        start: { line: 221, column: 1, offset: 6440 },
        end: { line: 221, column: 21, offset: 6460 }
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
        start: { line: 223, column: 1, offset: 6462 },
        end: { line: 296, column: 4, offset: 8808 }
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
            start: { line: 298, column: 4, offset: 8813 },
            end: { line: 298, column: 23, offset: 8832 }
          }
        }
      ],
      position: {
        start: { line: 298, column: 1, offset: 8810 },
        end: { line: 298, column: 23, offset: 8832 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use React Context with Arche, wrap ',
          position: {
            start: { line: 299, column: 1, offset: 8833 },
            end: { line: 299, column: 39, offset: 8871 }
          }
        },
        {
          type: 'inlineCode',
          value: 'YourContext.Provider',
          position: {
            start: { line: 299, column: 39, offset: 8871 },
            end: { line: 299, column: 61, offset: 8893 }
          }
        },
        {
          type: 'text',
          value: ' with ',
          position: {
            start: { line: 299, column: 61, offset: 8893 },
            end: { line: 299, column: 67, offset: 8899 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 299, column: 67, offset: 8899 },
            end: { line: 299, column: 81, offset: 8913 }
          }
        },
        {
          type: 'text',
          value: ' and supply ',
          position: {
            start: { line: 299, column: 81, offset: 8913 },
            end: { line: 299, column: 93, offset: 8925 }
          }
        },
        {
          type: 'inlineCode',
          value: 'value',
          position: {
            start: { line: 299, column: 93, offset: 8925 },
            end: { line: 299, column: 100, offset: 8932 }
          }
        },
        {
          type: 'text',
          value: ' as a prop, specifying children in the next argument.',
          position: {
            start: { line: 299, column: 100, offset: 8932 },
            end: { line: 299, column: 153, offset: 8985 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 8833 },
        end: { line: 299, column: 153, offset: 8985 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JSX example:',
          position: {
            start: { line: 301, column: 1, offset: 8987 },
            end: { line: 301, column: 13, offset: 8999 }
          }
        }
      ],
      position: {
        start: { line: 301, column: 1, offset: 8987 },
        end: { line: 301, column: 13, offset: 8999 }
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
        start: { line: 302, column: 1, offset: 9000 },
        end: { line: 316, column: 4, offset: 9274 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Translates to the following with Arche:',
          position: {
            start: { line: 318, column: 1, offset: 9276 },
            end: { line: 318, column: 40, offset: 9315 }
          }
        }
      ],
      position: {
        start: { line: 318, column: 1, offset: 9276 },
        end: { line: 318, column: 40, offset: 9315 }
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
        start: { line: 319, column: 1, offset: 9316 },
        end: { line: 327, column: 4, offset: 9562 }
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
            start: { line: 329, column: 4, offset: 9567 },
            end: { line: 329, column: 16, offset: 9579 }
          }
        }
      ],
      position: {
        start: { line: 329, column: 1, offset: 9564 },
        end: { line: 329, column: 16, offset: 9579 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche accepts a ',
          position: {
            start: { line: 330, column: 1, offset: 9580 },
            end: { line: 330, column: 17, offset: 9596 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styled',
          position: {
            start: { line: 330, column: 17, offset: 9596 },
            end: { line: 330, column: 25, offset: 9604 }
          }
        },
        {
          type: 'text',
          value: ' option from css-in-js libraries like ',
          position: {
            start: { line: 330, column: 25, offset: 9604 },
            end: { line: 330, column: 63, offset: 9642 }
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
                start: { line: 330, column: 64, offset: 9643 },
                end: { line: 330, column: 81, offset: 9660 }
              }
            }
          ],
          position: {
            start: { line: 330, column: 63, offset: 9642 },
            end: { line: 330, column: 114, offset: 9693 }
          }
        },
        {
          type: 'text',
          value: ' to enable a ',
          position: {
            start: { line: 330, column: 114, offset: 9693 },
            end: { line: 330, column: 127, offset: 9706 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 330, column: 127, offset: 9706 },
            end: { line: 330, column: 132, offset: 9711 }
          }
        },
        {
          type: 'text',
          value: ' prop on ',
          position: {
            start: { line: 330, column: 132, offset: 9711 },
            end: { line: 330, column: 141, offset: 9720 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 330, column: 141, offset: 9720 },
            end: { line: 330, column: 155, offset: 9734 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 330, column: 155, offset: 9734 },
            end: { line: 330, column: 160, offset: 9739 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedReactElement',
          position: {
            start: { line: 330, column: 160, offset: 9739 },
            end: { line: 330, column: 179, offset: 9758 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 330, column: 179, offset: 9758 },
            end: { line: 330, column: 180, offset: 9759 }
          }
        }
      ],
      position: {
        start: { line: 330, column: 1, offset: 9580 },
        end: { line: 330, column: 180, offset: 9759 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// global.js\nconst ReactElement = Arche(React, { styled })',
      position: {
        start: { line: 332, column: 1, offset: 9761 },
        end: { line: 335, column: 4, offset: 9837 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Elements can now specify a ',
          position: {
            start: { line: 337, column: 1, offset: 9839 },
            end: { line: 337, column: 28, offset: 9866 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 337, column: 28, offset: 9866 },
            end: { line: 337, column: 33, offset: 9871 }
          }
        },
        {
          type: 'text',
          value: ' prop to use css-in-js.',
          position: {
            start: { line: 337, column: 33, offset: 9871 },
            end: { line: 337, column: 56, offset: 9894 }
          }
        }
      ],
      position: {
        start: { line: 337, column: 1, offset: 9839 },
        end: { line: 337, column: 56, offset: 9894 }
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
        start: { line: 339, column: 1, offset: 9896 },
        end: { line: 349, column: 4, offset: 10066 }
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
            start: { line: 351, column: 4, offset: 10071 },
            end: { line: 351, column: 22, offset: 10089 }
          }
        }
      ],
      position: {
        start: { line: 351, column: 1, offset: 10068 },
        end: { line: 351, column: 22, offset: 10089 }
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
        start: { line: 352, column: 1, offset: 10090 },
        end: { line: 454, column: 4, offset: 13185 }
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
            start: { line: 456, column: 3, offset: 13189 },
            end: { line: 456, column: 15, offset: 13201 }
          }
        }
      ],
      position: {
        start: { line: 456, column: 1, offset: 13187 },
        end: { line: 456, column: 15, offset: 13201 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 457, column: 1, offset: 13202 },
            end: { line: 457, column: 260, offset: 13461 }
          }
        }
      ],
      position: {
        start: { line: 457, column: 1, offset: 13202 },
        end: { line: 457, column: 260, offset: 13461 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 459, column: 1, offset: 13463 },
            end: { line: 459, column: 89, offset: 13551 }
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
                start: { line: 459, column: 90, offset: 13552 },
                end: { line: 459, column: 110, offset: 13572 }
              }
            }
          ],
          position: {
            start: { line: 459, column: 89, offset: 13551 },
            end: { line: 459, column: 160, offset: 13622 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 459, column: 160, offset: 13622 },
            end: { line: 459, column: 205, offset: 13667 }
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
                start: { line: 459, column: 206, offset: 13668 },
                end: { line: 459, column: 217, offset: 13679 }
              }
            }
          ],
          position: {
            start: { line: 459, column: 205, offset: 13667 },
            end: { line: 459, column: 310, offset: 13772 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 459, column: 310, offset: 13772 },
            end: { line: 459, column: 340, offset: 13802 }
          }
        }
      ],
      position: {
        start: { line: 459, column: 1, offset: 13463 },
        end: { line: 459, column: 340, offset: 13802 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 461, column: 1, offset: 13804 },
            end: { line: 461, column: 33, offset: 13836 }
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
                start: { line: 461, column: 34, offset: 13837 },
                end: { line: 461, column: 49, offset: 13852 }
              }
            }
          ],
          position: {
            start: { line: 461, column: 33, offset: 13836 },
            end: { line: 461, column: 68, offset: 13871 }
          }
        }
      ],
      position: {
        start: { line: 461, column: 1, offset: 13804 },
        end: { line: 461, column: 68, offset: 13871 }
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
            start: { line: 463, column: 3, offset: 13875 },
            end: { line: 463, column: 10, offset: 13882 }
          }
        }
      ],
      position: {
        start: { line: 463, column: 1, offset: 13873 },
        end: { line: 463, column: 10, offset: 13882 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche is ',
          position: {
            start: { line: 464, column: 1, offset: 13883 },
            end: { line: 464, column: 10, offset: 13892 }
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
                start: { line: 464, column: 11, offset: 13893 },
                end: { line: 464, column: 23, offset: 13905 }
              }
            }
          ],
          position: {
            start: { line: 464, column: 10, offset: 13892 },
            end: { line: 464, column: 85, offset: 13967 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 464, column: 85, offset: 13967 },
            end: { line: 464, column: 86, offset: 13968 }
          }
        }
      ],
      position: {
        start: { line: 464, column: 1, offset: 13883 },
        end: { line: 464, column: 86, offset: 13968 }
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
            start: { line: 466, column: 3, offset: 13972 },
            end: { line: 466, column: 10, offset: 13979 }
          }
        }
      ],
      position: {
        start: { line: 466, column: 1, offset: 13970 },
        end: { line: 466, column: 10, offset: 13979 }
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
                    start: { line: 467, column: 4, offset: 13983 },
                    end: { line: 467, column: 31, offset: 14010 }
                  }
                }
              ],
              position: {
                start: { line: 467, column: 4, offset: 13983 },
                end: { line: 467, column: 31, offset: 14010 }
              }
            }
          ],
          position: {
            start: { line: 467, column: 2, offset: 13981 },
            end: { line: 467, column: 31, offset: 14010 }
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
                    start: { line: 468, column: 4, offset: 14014 },
                    end: { line: 468, column: 30, offset: 14040 }
                  }
                }
              ],
              position: {
                start: { line: 468, column: 4, offset: 14014 },
                end: { line: 468, column: 30, offset: 14040 }
              }
            }
          ],
          position: {
            start: { line: 468, column: 2, offset: 14012 },
            end: { line: 468, column: 30, offset: 14040 }
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
                    start: { line: 469, column: 4, offset: 14044 },
                    end: { line: 469, column: 31, offset: 14071 }
                  }
                }
              ],
              position: {
                start: { line: 469, column: 4, offset: 14044 },
                end: { line: 469, column: 31, offset: 14071 }
              }
            }
          ],
          position: {
            start: { line: 469, column: 2, offset: 14042 },
            end: { line: 469, column: 31, offset: 14071 }
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
                    start: { line: 470, column: 4, offset: 14075 },
                    end: { line: 470, column: 28, offset: 14099 }
                  }
                }
              ],
              position: {
                start: { line: 470, column: 4, offset: 14075 },
                end: { line: 470, column: 28, offset: 14099 }
              }
            }
          ],
          position: {
            start: { line: 470, column: 2, offset: 14073 },
            end: { line: 470, column: 28, offset: 14099 }
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
                    start: { line: 471, column: 4, offset: 14103 },
                    end: { line: 471, column: 32, offset: 14131 }
                  }
                }
              ],
              position: {
                start: { line: 471, column: 4, offset: 14103 },
                end: { line: 471, column: 32, offset: 14131 }
              }
            }
          ],
          position: {
            start: { line: 471, column: 2, offset: 14101 },
            end: { line: 471, column: 32, offset: 14131 }
          }
        }
      ],
      position: {
        start: { line: 467, column: 2, offset: 13981 },
        end: { line: 471, column: 32, offset: 14131 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 472, column: 1, offset: 14132 }
  }
}