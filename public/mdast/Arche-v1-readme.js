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
          type: 'text',
          value: 'Source code: ',
          position: {
            start: { line: 5, column: 1, offset: 347 },
            end: { line: 5, column: 14, offset: 360 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/richytong/Arche',
          children: [
            {
              type: 'text',
              value: 'GitHub',
              position: {
                start: { line: 5, column: 15, offset: 361 },
                end: { line: 5, column: 21, offset: 367 }
              }
            }
          ],
          position: {
            start: { line: 5, column: 14, offset: 360 },
            end: { line: 5, column: 58, offset: 404 }
          }
        },
        {
          type: 'text',
          value: ' |\nLicense: ',
          position: {
            start: { line: 5, column: 58, offset: 404 },
            end: { line: 6, column: 10, offset: 416 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://cloutsworld.com/en-us/legal/license/cfoss',
          children: [
            {
              type: 'text',
              value: 'CFOSS',
              position: {
                start: { line: 6, column: 11, offset: 417 },
                end: { line: 6, column: 16, offset: 422 }
              }
            }
          ],
          position: {
            start: { line: 6, column: 10, offset: 416 },
            end: { line: 6, column: 68, offset: 474 }
          }
        }
      ],
      position: {
        start: { line: 5, column: 1, offset: 347 },
        end: { line: 6, column: 68, offset: 474 }
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
            start: { line: 8, column: 1, offset: 476 },
            end: { line: 8, column: 89, offset: 564 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 8, column: 89, offset: 564 },
            end: { line: 9, column: 1, offset: 565 }
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
                start: { line: 9, column: 2, offset: 566 },
                end: { line: 9, column: 81, offset: 645 }
              }
            }
          ],
          position: {
            start: { line: 9, column: 1, offset: 565 },
            end: { line: 9, column: 121, offset: 685 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 9, column: 121, offset: 685 },
            end: { line: 10, column: 1, offset: 686 }
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
                start: { line: 10, column: 2, offset: 687 },
                end: { line: 10, column: 67, offset: 752 }
              }
            }
          ],
          position: {
            start: { line: 10, column: 1, offset: 686 },
            end: { line: 10, column: 105, offset: 790 }
          }
        }
      ],
      position: {
        start: { line: 8, column: 1, offset: 476 },
        end: { line: 10, column: 105, offset: 790 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Simplified DOM interface / React in pure JavaScript.',
          position: {
            start: { line: 12, column: 1, offset: 792 },
            end: { line: 12, column: 53, offset: 844 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 792 },
        end: { line: 12, column: 53, offset: 844 }
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
        start: { line: 14, column: 1, offset: 846 },
        end: { line: 45, column: 4, offset: 1628 }
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
            start: { line: 47, column: 4, offset: 1633 },
            end: { line: 47, column: 16, offset: 1645 }
          }
        }
      ],
      position: {
        start: { line: 47, column: 1, offset: 1630 },
        end: { line: 47, column: 16, offset: 1645 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 48, column: 1, offset: 1646 },
            end: { line: 48, column: 6, offset: 1651 }
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 48, column: 6, offset: 1651 },
            end: { line: 48, column: 11, offset: 1656 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 1646 },
        end: { line: 48, column: 11, offset: 1656 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i arche',
      position: {
        start: { line: 50, column: 1, offset: 1658 },
        end: { line: 52, column: 4, offset: 1681 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with browser script, sets ',
          position: {
            start: { line: 54, column: 1, offset: 1683 },
            end: { line: 54, column: 27, offset: 1709 }
          }
        },
        {
          type: 'inlineCode',
          value: 'window.Arche',
          position: {
            start: { line: 54, column: 27, offset: 1709 },
            end: { line: 54, column: 41, offset: 1723 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 1683 },
        end: { line: 54, column: 41, offset: 1723 }
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<script src="https://cdn.jsdelivr.net/npm/arche"></script>',
      position: {
        start: { line: 56, column: 1, offset: 1725 },
        end: { line: 58, column: 4, offset: 1795 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 60, column: 1, offset: 1797 },
            end: { line: 60, column: 6, offset: 1802 }
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
                start: { line: 60, column: 7, offset: 1803 },
                end: { line: 60, column: 17, offset: 1813 }
              }
            }
          ],
          position: {
            start: { line: 60, column: 6, offset: 1802 },
            end: { line: 60, column: 89, offset: 1885 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 1797 },
        end: { line: 60, column: 89, offset: 1885 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "import Arche from 'https://cdn.jsdelivr.net/npm/arche/es.js'",
      position: {
        start: { line: 61, column: 1, offset: 1886 },
        end: { line: 63, column: 4, offset: 1964 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 65, column: 1, offset: 1966 },
            end: { line: 65, column: 5, offset: 1970 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DocumentElement',
          position: {
            start: { line: 65, column: 5, offset: 1970 },
            end: { line: 65, column: 22, offset: 1987 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 65, column: 22, offset: 1987 },
            end: { line: 65, column: 66, offset: 2031 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 1966 },
        end: { line: 65, column: 66, offset: 2031 }
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
        start: { line: 67, column: 1, offset: 2033 },
        end: { line: 81, column: 4, offset: 2377 }
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
            start: { line: 83, column: 4, offset: 2382 },
            end: { line: 83, column: 15, offset: 2393 }
          }
        }
      ],
      position: {
        start: { line: 83, column: 1, offset: 2379 },
        end: { line: 83, column: 15, offset: 2393 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use Arche with ',
          position: {
            start: { line: 84, column: 1, offset: 2394 },
            end: { line: 84, column: 19, offset: 2412 }
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
                start: { line: 84, column: 20, offset: 2413 },
                end: { line: 84, column: 25, offset: 2418 }
              }
            }
          ],
          position: {
            start: { line: 84, column: 19, offset: 2412 },
            end: { line: 84, column: 46, offset: 2439 }
          }
        },
        {
          type: 'text',
          value: ', simply provide the React library.',
          position: {
            start: { line: 84, column: 46, offset: 2439 },
            end: { line: 84, column: 81, offset: 2474 }
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 2394 },
        end: { line: 84, column: 81, offset: 2474 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React)',
      position: {
        start: { line: 86, column: 1, offset: 2476 },
        end: { line: 88, column: 4, offset: 2527 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Create dynamic components with props.',
          position: {
            start: { line: 90, column: 1, offset: 2529 },
            end: { line: 90, column: 38, offset: 2566 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 1, offset: 2529 },
        end: { line: 90, column: 38, offset: 2566 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const ReactElement = Arche(React)\n' +
        '\n' +
        'const { Div, H1, P, Button, Img } = ReactElement\n' +
        '\n' +
        'const UserCard = ReactElement(({\n' +
        '  firstName, lastName, age,\n' +
        '}) => Div([\n' +
        '  H1(`${firstName} ${lastName}`),\n' +
        "  Img({ src: 'https://placehold.co/300x300', alt: 'placeholder' }),\n" +
        "  P({ style: { color: 'lightgrey' } }, `age: ${age}`),\n" +
        ']))\n' +
        '\n' +
        'ReactDOM.render(\n' +
        "  UserCard({ firstName: 'Example', lastName: 'Name', age: 32 }),\n" +
        "  document.getElementById('react-root')\n" +
        ')',
      position: {
        start: { line: 92, column: 1, offset: 2568 },
        end: { line: 109, column: 4, offset: 3042 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Complete interoperability with React hooks (converted from ',
          position: {
            start: { line: 111, column: 1, offset: 3044 },
            end: { line: 111, column: 60, offset: 3103 }
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
                start: { line: 111, column: 61, offset: 3104 },
                end: { line: 111, column: 73, offset: 3116 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 60, offset: 3103 },
            end: { line: 111, column: 117, offset: 3160 }
          }
        },
        {
          type: 'text',
          value: ').',
          position: {
            start: { line: 111, column: 117, offset: 3160 },
            end: { line: 111, column: 119, offset: 3162 }
          }
        }
      ],
      position: {
        start: { line: 111, column: 1, offset: 3044 },
        end: { line: 111, column: 119, offset: 3162 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
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
        "ReactDOM.render(Example(), document.getElementById('react-root'))",
      position: {
        start: { line: 113, column: 1, offset: 3164 },
        end: { line: 132, column: 4, offset: 3589 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 134, column: 1, offset: 3591 },
            end: { line: 134, column: 5, offset: 3595 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 134, column: 5, offset: 3595 },
            end: { line: 134, column: 19, offset: 3609 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 134, column: 19, offset: 3609 },
            end: { line: 134, column: 63, offset: 3653 }
          }
        }
      ],
      position: {
        start: { line: 134, column: 1, offset: 3591 },
        end: { line: 134, column: 63, offset: 3653 }
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
        start: { line: 136, column: 1, offset: 3655 },
        end: { line: 150, column: 4, offset: 3980 }
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
            start: { line: 152, column: 4, offset: 3985 },
            end: { line: 152, column: 23, offset: 4004 }
          }
        }
      ],
      position: {
        start: { line: 152, column: 1, offset: 3982 },
        end: { line: 152, column: 23, offset: 4004 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use React Context with Arche, wrap ',
          position: {
            start: { line: 153, column: 1, offset: 4005 },
            end: { line: 153, column: 39, offset: 4043 }
          }
        },
        {
          type: 'inlineCode',
          value: 'YourContext.Provider',
          position: {
            start: { line: 153, column: 39, offset: 4043 },
            end: { line: 153, column: 61, offset: 4065 }
          }
        },
        {
          type: 'text',
          value: ' with ',
          position: {
            start: { line: 153, column: 61, offset: 4065 },
            end: { line: 153, column: 67, offset: 4071 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 153, column: 67, offset: 4071 },
            end: { line: 153, column: 81, offset: 4085 }
          }
        },
        {
          type: 'text',
          value: ' and supply ',
          position: {
            start: { line: 153, column: 81, offset: 4085 },
            end: { line: 153, column: 93, offset: 4097 }
          }
        },
        {
          type: 'inlineCode',
          value: 'value',
          position: {
            start: { line: 153, column: 93, offset: 4097 },
            end: { line: 153, column: 100, offset: 4104 }
          }
        },
        {
          type: 'text',
          value: ' as a prop, specifying children in the next argument.',
          position: {
            start: { line: 153, column: 100, offset: 4104 },
            end: { line: 153, column: 153, offset: 4157 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 4005 },
        end: { line: 153, column: 153, offset: 4157 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JSX example:',
          position: {
            start: { line: 155, column: 1, offset: 4159 },
            end: { line: 155, column: 13, offset: 4171 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 4159 },
        end: { line: 155, column: 13, offset: 4171 }
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
        start: { line: 156, column: 1, offset: 4172 },
        end: { line: 170, column: 4, offset: 4446 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Translates to the following with Arche:',
          position: {
            start: { line: 172, column: 1, offset: 4448 },
            end: { line: 172, column: 40, offset: 4487 }
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 4448 },
        end: { line: 172, column: 40, offset: 4487 }
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
        start: { line: 173, column: 1, offset: 4488 },
        end: { line: 181, column: 4, offset: 4734 }
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
            start: { line: 183, column: 4, offset: 4739 },
            end: { line: 183, column: 16, offset: 4751 }
          }
        }
      ],
      position: {
        start: { line: 183, column: 1, offset: 4736 },
        end: { line: 183, column: 16, offset: 4751 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche accepts a ',
          position: {
            start: { line: 184, column: 1, offset: 4752 },
            end: { line: 184, column: 17, offset: 4768 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styled',
          position: {
            start: { line: 184, column: 17, offset: 4768 },
            end: { line: 184, column: 25, offset: 4776 }
          }
        },
        {
          type: 'text',
          value: ' option from css-in-js libraries like ',
          position: {
            start: { line: 184, column: 25, offset: 4776 },
            end: { line: 184, column: 63, offset: 4814 }
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
                start: { line: 184, column: 64, offset: 4815 },
                end: { line: 184, column: 81, offset: 4832 }
              }
            }
          ],
          position: {
            start: { line: 184, column: 63, offset: 4814 },
            end: { line: 184, column: 114, offset: 4865 }
          }
        },
        {
          type: 'text',
          value: ' to enable a ',
          position: {
            start: { line: 184, column: 114, offset: 4865 },
            end: { line: 184, column: 127, offset: 4878 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 184, column: 127, offset: 4878 },
            end: { line: 184, column: 132, offset: 4883 }
          }
        },
        {
          type: 'text',
          value: ' prop on ',
          position: {
            start: { line: 184, column: 132, offset: 4883 },
            end: { line: 184, column: 141, offset: 4892 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 184, column: 141, offset: 4892 },
            end: { line: 184, column: 155, offset: 4906 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 184, column: 155, offset: 4906 },
            end: { line: 184, column: 160, offset: 4911 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedReactElement',
          position: {
            start: { line: 184, column: 160, offset: 4911 },
            end: { line: 184, column: 179, offset: 4930 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 184, column: 179, offset: 4930 },
            end: { line: 184, column: 180, offset: 4931 }
          }
        }
      ],
      position: {
        start: { line: 184, column: 1, offset: 4752 },
        end: { line: 184, column: 180, offset: 4931 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React, { styled })',
      position: {
        start: { line: 186, column: 1, offset: 4933 },
        end: { line: 188, column: 4, offset: 4996 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Elements can now specify a ',
          position: {
            start: { line: 190, column: 1, offset: 4998 },
            end: { line: 190, column: 28, offset: 5025 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 190, column: 28, offset: 5025 },
            end: { line: 190, column: 33, offset: 5030 }
          }
        },
        {
          type: 'text',
          value: ' prop to use css-in-js.',
          position: {
            start: { line: 190, column: 33, offset: 5030 },
            end: { line: 190, column: 56, offset: 5053 }
          }
        }
      ],
      position: {
        start: { line: 190, column: 1, offset: 4998 },
        end: { line: 190, column: 56, offset: 5053 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const ReactElement = Arche(React, { styled })\n' +
        'const { Div, H1, P } = ReactElement\n' +
        '\n' +
        'const MyComponent = ReactElement(() => {\n' +
        '  return Div({\n' +
        '    css: `\n' +
        '      height: 500px;\n' +
        '      width: 100%;\n' +
        '      background-color: pink;\n' +
        '    `,\n' +
        '  }, [\n' +
        "    H1('Styled Example'),\n" +
        "    P('Text'),\n" +
        '  ])\n' +
        '})\n' +
        '\n' +
        "ReactDOM.render(MyComponent(), document.getElementById('react-root'))",
      position: {
        start: { line: 192, column: 1, offset: 5055 },
        end: { line: 210, column: 4, offset: 5439 }
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
            start: { line: 212, column: 3, offset: 5443 },
            end: { line: 212, column: 15, offset: 5455 }
          }
        }
      ],
      position: {
        start: { line: 212, column: 1, offset: 5441 },
        end: { line: 212, column: 15, offset: 5455 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 213, column: 1, offset: 5456 },
            end: { line: 213, column: 260, offset: 5715 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 5456 },
        end: { line: 213, column: 260, offset: 5715 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. If you are interested in contributing, the ',
          position: {
            start: { line: 215, column: 1, offset: 5717 },
            end: { line: 215, column: 121, offset: 5837 }
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
                start: { line: 215, column: 122, offset: 5838 },
                end: { line: 215, column: 133, offset: 5849 }
              }
            }
          ],
          position: {
            start: { line: 215, column: 121, offset: 5837 },
            end: { line: 215, column: 226, offset: 5942 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 215, column: 226, offset: 5942 },
            end: { line: 215, column: 256, offset: 5972 }
          }
        }
      ],
      position: {
        start: { line: 215, column: 1, offset: 5717 },
        end: { line: 215, column: 256, offset: 5972 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 217, column: 1, offset: 5974 },
            end: { line: 217, column: 33, offset: 6006 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/richytong/arche/blob/master/CONTRIBUTING.md',
          children: [
            {
              type: 'text',
              value: 'CONTRIBUTING.md',
              position: {
                start: { line: 217, column: 34, offset: 6007 },
                end: { line: 217, column: 49, offset: 6022 }
              }
            }
          ],
          position: {
            start: { line: 217, column: 33, offset: 6006 },
            end: { line: 217, column: 114, offset: 6087 }
          }
        }
      ],
      position: {
        start: { line: 217, column: 1, offset: 5974 },
        end: { line: 217, column: 114, offset: 6087 }
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
            start: { line: 219, column: 3, offset: 6091 },
            end: { line: 219, column: 10, offset: 6098 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 6089 },
        end: { line: 219, column: 10, offset: 6098 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche is distributed under the ',
          position: {
            start: { line: 220, column: 1, offset: 6099 },
            end: { line: 220, column: 32, offset: 6130 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://cloutsworld.com/en-us/legal/license/cfoss',
          children: [
            {
              type: 'text',
              value: 'CFOSS License',
              position: {
                start: { line: 220, column: 33, offset: 6131 },
                end: { line: 220, column: 46, offset: 6144 }
              }
            }
          ],
          position: {
            start: { line: 220, column: 32, offset: 6130 },
            end: { line: 220, column: 98, offset: 6196 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 220, column: 98, offset: 6196 },
            end: { line: 220, column: 99, offset: 6197 }
          }
        }
      ],
      position: {
        start: { line: 220, column: 1, offset: 6099 },
        end: { line: 220, column: 99, offset: 6197 }
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
            start: { line: 222, column: 3, offset: 6201 },
            end: { line: 222, column: 10, offset: 6208 }
          }
        }
      ],
      position: {
        start: { line: 222, column: 1, offset: 6199 },
        end: { line: 222, column: 10, offset: 6208 }
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
                    start: { line: 223, column: 4, offset: 6212 },
                    end: { line: 223, column: 31, offset: 6239 }
                  }
                }
              ],
              position: {
                start: { line: 223, column: 4, offset: 6212 },
                end: { line: 223, column: 31, offset: 6239 }
              }
            }
          ],
          position: {
            start: { line: 223, column: 2, offset: 6210 },
            end: { line: 223, column: 31, offset: 6239 }
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
                    start: { line: 224, column: 4, offset: 6243 },
                    end: { line: 224, column: 30, offset: 6269 }
                  }
                }
              ],
              position: {
                start: { line: 224, column: 4, offset: 6243 },
                end: { line: 224, column: 30, offset: 6269 }
              }
            }
          ],
          position: {
            start: { line: 224, column: 2, offset: 6241 },
            end: { line: 224, column: 30, offset: 6269 }
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
                    start: { line: 225, column: 4, offset: 6273 },
                    end: { line: 225, column: 31, offset: 6300 }
                  }
                }
              ],
              position: {
                start: { line: 225, column: 4, offset: 6273 },
                end: { line: 225, column: 31, offset: 6300 }
              }
            }
          ],
          position: {
            start: { line: 225, column: 2, offset: 6271 },
            end: { line: 225, column: 31, offset: 6300 }
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
                    start: { line: 226, column: 4, offset: 6304 },
                    end: { line: 226, column: 28, offset: 6328 }
                  }
                }
              ],
              position: {
                start: { line: 226, column: 4, offset: 6304 },
                end: { line: 226, column: 28, offset: 6328 }
              }
            }
          ],
          position: {
            start: { line: 226, column: 2, offset: 6302 },
            end: { line: 226, column: 28, offset: 6328 }
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
                    start: { line: 227, column: 4, offset: 6332 },
                    end: { line: 227, column: 32, offset: 6360 }
                  }
                }
              ],
              position: {
                start: { line: 227, column: 4, offset: 6332 },
                end: { line: 227, column: 32, offset: 6360 }
              }
            }
          ],
          position: {
            start: { line: 227, column: 2, offset: 6330 },
            end: { line: 227, column: 32, offset: 6360 }
          }
        }
      ],
      position: {
        start: { line: 223, column: 2, offset: 6210 },
        end: { line: 227, column: 32, offset: 6360 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 228, column: 1, offset: 6361 }
  }
}