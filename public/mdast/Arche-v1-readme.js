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
        start: { line: 11, column: 1, offset: 717 },
        end: { line: 45, column: 4, offset: 1598 }
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
            start: { line: 47, column: 4, offset: 1603 },
            end: { line: 47, column: 16, offset: 1615 }
          }
        }
      ],
      position: {
        start: { line: 47, column: 1, offset: 1600 },
        end: { line: 47, column: 16, offset: 1615 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 48, column: 1, offset: 1616 },
            end: { line: 48, column: 6, offset: 1621 }
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 48, column: 6, offset: 1621 },
            end: { line: 48, column: 11, offset: 1626 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 1616 },
        end: { line: 48, column: 11, offset: 1626 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i arche',
      position: {
        start: { line: 50, column: 1, offset: 1628 },
        end: { line: 52, column: 4, offset: 1651 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with browser script, sets ',
          position: {
            start: { line: 54, column: 1, offset: 1653 },
            end: { line: 54, column: 27, offset: 1679 }
          }
        },
        {
          type: 'inlineCode',
          value: 'window.Arche',
          position: {
            start: { line: 54, column: 27, offset: 1679 },
            end: { line: 54, column: 41, offset: 1693 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 1653 },
        end: { line: 54, column: 41, offset: 1693 }
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<script src="https://unpkg.com/arche"></script>',
      position: {
        start: { line: 56, column: 1, offset: 1695 },
        end: { line: 58, column: 4, offset: 1754 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 60, column: 1, offset: 1756 },
            end: { line: 60, column: 6, offset: 1761 }
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
                start: { line: 60, column: 7, offset: 1762 },
                end: { line: 60, column: 17, offset: 1772 }
              }
            }
          ],
          position: {
            start: { line: 60, column: 6, offset: 1761 },
            end: { line: 60, column: 89, offset: 1844 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 1756 },
        end: { line: 60, column: 89, offset: 1844 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "import Arche from 'https://unpkg.com/arche/es.js'",
      position: {
        start: { line: 61, column: 1, offset: 1845 },
        end: { line: 63, column: 4, offset: 1912 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 65, column: 1, offset: 1914 },
            end: { line: 65, column: 5, offset: 1918 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DocumentElement',
          position: {
            start: { line: 65, column: 5, offset: 1918 },
            end: { line: 65, column: 22, offset: 1935 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 65, column: 22, offset: 1935 },
            end: { line: 65, column: 66, offset: 1979 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 1914 },
        end: { line: 65, column: 66, offset: 1979 }
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
        start: { line: 67, column: 1, offset: 1981 },
        end: { line: 81, column: 4, offset: 2325 }
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
            start: { line: 83, column: 4, offset: 2330 },
            end: { line: 83, column: 10, offset: 2336 }
          }
        }
      ],
      position: {
        start: { line: 83, column: 1, offset: 2327 },
        end: { line: 83, column: 10, offset: 2336 }
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
        start: { line: 84, column: 1, offset: 2337 },
        end: { line: 145, column: 4, offset: 4730 }
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
            start: { line: 147, column: 4, offset: 4735 },
            end: { line: 147, column: 15, offset: 4746 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 4732 },
        end: { line: 147, column: 15, offset: 4746 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use Arche with ',
          position: {
            start: { line: 148, column: 1, offset: 4747 },
            end: { line: 148, column: 19, offset: 4765 }
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
                start: { line: 148, column: 20, offset: 4766 },
                end: { line: 148, column: 25, offset: 4771 }
              }
            }
          ],
          position: {
            start: { line: 148, column: 19, offset: 4765 },
            end: { line: 148, column: 46, offset: 4792 }
          }
        },
        {
          type: 'text',
          value: ', simply provide the React library.',
          position: {
            start: { line: 148, column: 46, offset: 4792 },
            end: { line: 148, column: 81, offset: 4827 }
          }
        }
      ],
      position: {
        start: { line: 148, column: 1, offset: 4747 },
        end: { line: 148, column: 81, offset: 4827 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React)',
      position: {
        start: { line: 150, column: 1, offset: 4829 },
        end: { line: 152, column: 4, offset: 4880 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Create dynamic components with props.',
          position: {
            start: { line: 154, column: 1, offset: 4882 },
            end: { line: 154, column: 38, offset: 4919 }
          }
        }
      ],
      position: {
        start: { line: 154, column: 1, offset: 4882 },
        end: { line: 154, column: 38, offset: 4919 }
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
        start: { line: 156, column: 1, offset: 4921 },
        end: { line: 175, column: 4, offset: 5497 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Complete interoperability with React hooks (converted from ',
          position: {
            start: { line: 177, column: 1, offset: 5499 },
            end: { line: 177, column: 60, offset: 5558 }
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
                start: { line: 177, column: 61, offset: 5559 },
                end: { line: 177, column: 73, offset: 5571 }
              }
            }
          ],
          position: {
            start: { line: 177, column: 60, offset: 5558 },
            end: { line: 177, column: 117, offset: 5615 }
          }
        },
        {
          type: 'text',
          value: ').',
          position: {
            start: { line: 177, column: 117, offset: 5615 },
            end: { line: 177, column: 119, offset: 5617 }
          }
        }
      ],
      position: {
        start: { line: 177, column: 1, offset: 5499 },
        end: { line: 177, column: 119, offset: 5617 }
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
        start: { line: 179, column: 1, offset: 5619 },
        end: { line: 202, column: 4, offset: 6101 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 204, column: 1, offset: 6103 },
            end: { line: 204, column: 5, offset: 6107 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 204, column: 5, offset: 6107 },
            end: { line: 204, column: 19, offset: 6121 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 204, column: 19, offset: 6121 },
            end: { line: 204, column: 63, offset: 6165 }
          }
        }
      ],
      position: {
        start: { line: 204, column: 1, offset: 6103 },
        end: { line: 204, column: 63, offset: 6165 }
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
        start: { line: 206, column: 1, offset: 6167 },
        end: { line: 220, column: 4, offset: 6492 }
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
            start: { line: 222, column: 4, offset: 6497 },
            end: { line: 222, column: 21, offset: 6514 }
          }
        }
      ],
      position: {
        start: { line: 222, column: 1, offset: 6494 },
        end: { line: 222, column: 21, offset: 6514 }
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
        start: { line: 224, column: 1, offset: 6516 },
        end: { line: 297, column: 4, offset: 8862 }
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
            start: { line: 299, column: 4, offset: 8867 },
            end: { line: 299, column: 23, offset: 8886 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 8864 },
        end: { line: 299, column: 23, offset: 8886 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use React Context with Arche, wrap ',
          position: {
            start: { line: 300, column: 1, offset: 8887 },
            end: { line: 300, column: 39, offset: 8925 }
          }
        },
        {
          type: 'inlineCode',
          value: 'YourContext.Provider',
          position: {
            start: { line: 300, column: 39, offset: 8925 },
            end: { line: 300, column: 61, offset: 8947 }
          }
        },
        {
          type: 'text',
          value: ' with ',
          position: {
            start: { line: 300, column: 61, offset: 8947 },
            end: { line: 300, column: 67, offset: 8953 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 300, column: 67, offset: 8953 },
            end: { line: 300, column: 81, offset: 8967 }
          }
        },
        {
          type: 'text',
          value: ' and supply ',
          position: {
            start: { line: 300, column: 81, offset: 8967 },
            end: { line: 300, column: 93, offset: 8979 }
          }
        },
        {
          type: 'inlineCode',
          value: 'value',
          position: {
            start: { line: 300, column: 93, offset: 8979 },
            end: { line: 300, column: 100, offset: 8986 }
          }
        },
        {
          type: 'text',
          value: ' as a prop, specifying children in the next argument.',
          position: {
            start: { line: 300, column: 100, offset: 8986 },
            end: { line: 300, column: 153, offset: 9039 }
          }
        }
      ],
      position: {
        start: { line: 300, column: 1, offset: 8887 },
        end: { line: 300, column: 153, offset: 9039 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JSX example:',
          position: {
            start: { line: 302, column: 1, offset: 9041 },
            end: { line: 302, column: 13, offset: 9053 }
          }
        }
      ],
      position: {
        start: { line: 302, column: 1, offset: 9041 },
        end: { line: 302, column: 13, offset: 9053 }
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
        start: { line: 303, column: 1, offset: 9054 },
        end: { line: 317, column: 4, offset: 9328 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Translates to the following with Arche:',
          position: {
            start: { line: 319, column: 1, offset: 9330 },
            end: { line: 319, column: 40, offset: 9369 }
          }
        }
      ],
      position: {
        start: { line: 319, column: 1, offset: 9330 },
        end: { line: 319, column: 40, offset: 9369 }
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
        start: { line: 320, column: 1, offset: 9370 },
        end: { line: 328, column: 4, offset: 9616 }
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
            start: { line: 330, column: 4, offset: 9621 },
            end: { line: 330, column: 16, offset: 9633 }
          }
        }
      ],
      position: {
        start: { line: 330, column: 1, offset: 9618 },
        end: { line: 330, column: 16, offset: 9633 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche accepts a ',
          position: {
            start: { line: 331, column: 1, offset: 9634 },
            end: { line: 331, column: 17, offset: 9650 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styled',
          position: {
            start: { line: 331, column: 17, offset: 9650 },
            end: { line: 331, column: 25, offset: 9658 }
          }
        },
        {
          type: 'text',
          value: ' option from css-in-js libraries like ',
          position: {
            start: { line: 331, column: 25, offset: 9658 },
            end: { line: 331, column: 63, offset: 9696 }
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
                start: { line: 331, column: 64, offset: 9697 },
                end: { line: 331, column: 81, offset: 9714 }
              }
            }
          ],
          position: {
            start: { line: 331, column: 63, offset: 9696 },
            end: { line: 331, column: 114, offset: 9747 }
          }
        },
        {
          type: 'text',
          value: ' to enable a ',
          position: {
            start: { line: 331, column: 114, offset: 9747 },
            end: { line: 331, column: 127, offset: 9760 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 331, column: 127, offset: 9760 },
            end: { line: 331, column: 132, offset: 9765 }
          }
        },
        {
          type: 'text',
          value: ' prop on ',
          position: {
            start: { line: 331, column: 132, offset: 9765 },
            end: { line: 331, column: 141, offset: 9774 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 331, column: 141, offset: 9774 },
            end: { line: 331, column: 155, offset: 9788 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 331, column: 155, offset: 9788 },
            end: { line: 331, column: 160, offset: 9793 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedReactElement',
          position: {
            start: { line: 331, column: 160, offset: 9793 },
            end: { line: 331, column: 179, offset: 9812 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 331, column: 179, offset: 9812 },
            end: { line: 331, column: 180, offset: 9813 }
          }
        }
      ],
      position: {
        start: { line: 331, column: 1, offset: 9634 },
        end: { line: 331, column: 180, offset: 9813 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// global.js\nconst ReactElement = Arche(React, { styled })',
      position: {
        start: { line: 333, column: 1, offset: 9815 },
        end: { line: 336, column: 4, offset: 9891 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Elements can now specify a ',
          position: {
            start: { line: 338, column: 1, offset: 9893 },
            end: { line: 338, column: 28, offset: 9920 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 338, column: 28, offset: 9920 },
            end: { line: 338, column: 33, offset: 9925 }
          }
        },
        {
          type: 'text',
          value: ' prop to use css-in-js.',
          position: {
            start: { line: 338, column: 33, offset: 9925 },
            end: { line: 338, column: 56, offset: 9948 }
          }
        }
      ],
      position: {
        start: { line: 338, column: 1, offset: 9893 },
        end: { line: 338, column: 56, offset: 9948 }
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
        start: { line: 340, column: 1, offset: 9950 },
        end: { line: 350, column: 4, offset: 10120 }
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
            start: { line: 352, column: 4, offset: 10125 },
            end: { line: 352, column: 22, offset: 10143 }
          }
        }
      ],
      position: {
        start: { line: 352, column: 1, offset: 10122 },
        end: { line: 352, column: 22, offset: 10143 }
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
        start: { line: 353, column: 1, offset: 10144 },
        end: { line: 455, column: 4, offset: 13239 }
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
            start: { line: 457, column: 3, offset: 13243 },
            end: { line: 457, column: 15, offset: 13255 }
          }
        }
      ],
      position: {
        start: { line: 457, column: 1, offset: 13241 },
        end: { line: 457, column: 15, offset: 13255 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 458, column: 1, offset: 13256 },
            end: { line: 458, column: 260, offset: 13515 }
          }
        }
      ],
      position: {
        start: { line: 458, column: 1, offset: 13256 },
        end: { line: 458, column: 260, offset: 13515 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 460, column: 1, offset: 13517 },
            end: { line: 460, column: 89, offset: 13605 }
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
                start: { line: 460, column: 90, offset: 13606 },
                end: { line: 460, column: 110, offset: 13626 }
              }
            }
          ],
          position: {
            start: { line: 460, column: 89, offset: 13605 },
            end: { line: 460, column: 160, offset: 13676 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 460, column: 160, offset: 13676 },
            end: { line: 460, column: 205, offset: 13721 }
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
                start: { line: 460, column: 206, offset: 13722 },
                end: { line: 460, column: 217, offset: 13733 }
              }
            }
          ],
          position: {
            start: { line: 460, column: 205, offset: 13721 },
            end: { line: 460, column: 310, offset: 13826 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 460, column: 310, offset: 13826 },
            end: { line: 460, column: 340, offset: 13856 }
          }
        }
      ],
      position: {
        start: { line: 460, column: 1, offset: 13517 },
        end: { line: 460, column: 340, offset: 13856 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 462, column: 1, offset: 13858 },
            end: { line: 462, column: 33, offset: 13890 }
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
                start: { line: 462, column: 34, offset: 13891 },
                end: { line: 462, column: 49, offset: 13906 }
              }
            }
          ],
          position: {
            start: { line: 462, column: 33, offset: 13890 },
            end: { line: 462, column: 68, offset: 13925 }
          }
        }
      ],
      position: {
        start: { line: 462, column: 1, offset: 13858 },
        end: { line: 462, column: 68, offset: 13925 }
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
            start: { line: 464, column: 3, offset: 13929 },
            end: { line: 464, column: 10, offset: 13936 }
          }
        }
      ],
      position: {
        start: { line: 464, column: 1, offset: 13927 },
        end: { line: 464, column: 10, offset: 13936 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche is ',
          position: {
            start: { line: 465, column: 1, offset: 13937 },
            end: { line: 465, column: 10, offset: 13946 }
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
                start: { line: 465, column: 11, offset: 13947 },
                end: { line: 465, column: 23, offset: 13959 }
              }
            }
          ],
          position: {
            start: { line: 465, column: 10, offset: 13946 },
            end: { line: 465, column: 85, offset: 14021 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 465, column: 85, offset: 14021 },
            end: { line: 465, column: 86, offset: 14022 }
          }
        }
      ],
      position: {
        start: { line: 465, column: 1, offset: 13937 },
        end: { line: 465, column: 86, offset: 14022 }
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
            start: { line: 467, column: 3, offset: 14026 },
            end: { line: 467, column: 10, offset: 14033 }
          }
        }
      ],
      position: {
        start: { line: 467, column: 1, offset: 14024 },
        end: { line: 467, column: 10, offset: 14033 }
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
                    start: { line: 468, column: 4, offset: 14037 },
                    end: { line: 468, column: 31, offset: 14064 }
                  }
                }
              ],
              position: {
                start: { line: 468, column: 4, offset: 14037 },
                end: { line: 468, column: 31, offset: 14064 }
              }
            }
          ],
          position: {
            start: { line: 468, column: 2, offset: 14035 },
            end: { line: 468, column: 31, offset: 14064 }
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
                    start: { line: 469, column: 4, offset: 14068 },
                    end: { line: 469, column: 30, offset: 14094 }
                  }
                }
              ],
              position: {
                start: { line: 469, column: 4, offset: 14068 },
                end: { line: 469, column: 30, offset: 14094 }
              }
            }
          ],
          position: {
            start: { line: 469, column: 2, offset: 14066 },
            end: { line: 469, column: 30, offset: 14094 }
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
                    start: { line: 470, column: 4, offset: 14098 },
                    end: { line: 470, column: 31, offset: 14125 }
                  }
                }
              ],
              position: {
                start: { line: 470, column: 4, offset: 14098 },
                end: { line: 470, column: 31, offset: 14125 }
              }
            }
          ],
          position: {
            start: { line: 470, column: 2, offset: 14096 },
            end: { line: 470, column: 31, offset: 14125 }
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
                    start: { line: 471, column: 4, offset: 14129 },
                    end: { line: 471, column: 28, offset: 14153 }
                  }
                }
              ],
              position: {
                start: { line: 471, column: 4, offset: 14129 },
                end: { line: 471, column: 28, offset: 14153 }
              }
            }
          ],
          position: {
            start: { line: 471, column: 2, offset: 14127 },
            end: { line: 471, column: 28, offset: 14153 }
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
                    start: { line: 472, column: 4, offset: 14157 },
                    end: { line: 472, column: 32, offset: 14185 }
                  }
                }
              ],
              position: {
                start: { line: 472, column: 4, offset: 14157 },
                end: { line: 472, column: 32, offset: 14185 }
              }
            }
          ],
          position: {
            start: { line: 472, column: 2, offset: 14155 },
            end: { line: 472, column: 32, offset: 14185 }
          }
        }
      ],
      position: {
        start: { line: 468, column: 2, offset: 14035 },
        end: { line: 472, column: 32, offset: 14185 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 473, column: 1, offset: 14186 }
  }
}