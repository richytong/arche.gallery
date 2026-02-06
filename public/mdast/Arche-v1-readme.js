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
          value: 'Using React',
          position: {
            start: { line: 80, column: 4, offset: 2231 },
            end: { line: 80, column: 15, offset: 2242 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2228 },
        end: { line: 80, column: 15, offset: 2242 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use Arche with ',
          position: {
            start: { line: 81, column: 1, offset: 2243 },
            end: { line: 81, column: 19, offset: 2261 }
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
                start: { line: 81, column: 20, offset: 2262 },
                end: { line: 81, column: 25, offset: 2267 }
              }
            }
          ],
          position: {
            start: { line: 81, column: 19, offset: 2261 },
            end: { line: 81, column: 46, offset: 2288 }
          }
        },
        {
          type: 'text',
          value: ', simply provide the React library.',
          position: {
            start: { line: 81, column: 46, offset: 2288 },
            end: { line: 81, column: 81, offset: 2323 }
          }
        }
      ],
      position: {
        start: { line: 81, column: 1, offset: 2243 },
        end: { line: 81, column: 81, offset: 2323 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React)',
      position: {
        start: { line: 83, column: 1, offset: 2325 },
        end: { line: 85, column: 4, offset: 2376 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Create dynamic components with props.',
          position: {
            start: { line: 87, column: 1, offset: 2378 },
            end: { line: 87, column: 38, offset: 2415 }
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 2378 },
        end: { line: 87, column: 38, offset: 2415 }
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
        start: { line: 89, column: 1, offset: 2417 },
        end: { line: 106, column: 4, offset: 2891 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Complete interoperability with React hooks (converted from ',
          position: {
            start: { line: 108, column: 1, offset: 2893 },
            end: { line: 108, column: 60, offset: 2952 }
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
                start: { line: 108, column: 61, offset: 2953 },
                end: { line: 108, column: 73, offset: 2965 }
              }
            }
          ],
          position: {
            start: { line: 108, column: 60, offset: 2952 },
            end: { line: 108, column: 117, offset: 3009 }
          }
        },
        {
          type: 'text',
          value: ').',
          position: {
            start: { line: 108, column: 117, offset: 3009 },
            end: { line: 108, column: 119, offset: 3011 }
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 2893 },
        end: { line: 108, column: 119, offset: 3011 }
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
        start: { line: 110, column: 1, offset: 3013 },
        end: { line: 129, column: 4, offset: 3438 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 131, column: 1, offset: 3440 },
            end: { line: 131, column: 5, offset: 3444 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 131, column: 5, offset: 3444 },
            end: { line: 131, column: 19, offset: 3458 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 131, column: 19, offset: 3458 },
            end: { line: 131, column: 63, offset: 3502 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 3440 },
        end: { line: 131, column: 63, offset: 3502 }
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
        start: { line: 133, column: 1, offset: 3504 },
        end: { line: 147, column: 4, offset: 3829 }
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
            start: { line: 149, column: 4, offset: 3834 },
            end: { line: 149, column: 23, offset: 3853 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 3831 },
        end: { line: 149, column: 23, offset: 3853 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use React Context with Arche, wrap ',
          position: {
            start: { line: 150, column: 1, offset: 3854 },
            end: { line: 150, column: 39, offset: 3892 }
          }
        },
        {
          type: 'inlineCode',
          value: 'YourContext.Provider',
          position: {
            start: { line: 150, column: 39, offset: 3892 },
            end: { line: 150, column: 61, offset: 3914 }
          }
        },
        {
          type: 'text',
          value: ' with ',
          position: {
            start: { line: 150, column: 61, offset: 3914 },
            end: { line: 150, column: 67, offset: 3920 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 150, column: 67, offset: 3920 },
            end: { line: 150, column: 81, offset: 3934 }
          }
        },
        {
          type: 'text',
          value: ' and supply ',
          position: {
            start: { line: 150, column: 81, offset: 3934 },
            end: { line: 150, column: 93, offset: 3946 }
          }
        },
        {
          type: 'inlineCode',
          value: 'value',
          position: {
            start: { line: 150, column: 93, offset: 3946 },
            end: { line: 150, column: 100, offset: 3953 }
          }
        },
        {
          type: 'text',
          value: ' as a prop, specifying children in the next argument.',
          position: {
            start: { line: 150, column: 100, offset: 3953 },
            end: { line: 150, column: 153, offset: 4006 }
          }
        }
      ],
      position: {
        start: { line: 150, column: 1, offset: 3854 },
        end: { line: 150, column: 153, offset: 4006 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JSX example:',
          position: {
            start: { line: 152, column: 1, offset: 4008 },
            end: { line: 152, column: 13, offset: 4020 }
          }
        }
      ],
      position: {
        start: { line: 152, column: 1, offset: 4008 },
        end: { line: 152, column: 13, offset: 4020 }
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
        start: { line: 153, column: 1, offset: 4021 },
        end: { line: 167, column: 4, offset: 4295 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Translates to the following with Arche:',
          position: {
            start: { line: 169, column: 1, offset: 4297 },
            end: { line: 169, column: 40, offset: 4336 }
          }
        }
      ],
      position: {
        start: { line: 169, column: 1, offset: 4297 },
        end: { line: 169, column: 40, offset: 4336 }
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
        start: { line: 170, column: 1, offset: 4337 },
        end: { line: 178, column: 4, offset: 4583 }
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
            start: { line: 180, column: 4, offset: 4588 },
            end: { line: 180, column: 16, offset: 4600 }
          }
        }
      ],
      position: {
        start: { line: 180, column: 1, offset: 4585 },
        end: { line: 180, column: 16, offset: 4600 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche accepts a ',
          position: {
            start: { line: 181, column: 1, offset: 4601 },
            end: { line: 181, column: 17, offset: 4617 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styled',
          position: {
            start: { line: 181, column: 17, offset: 4617 },
            end: { line: 181, column: 25, offset: 4625 }
          }
        },
        {
          type: 'text',
          value: ' option from css-in-js libraries like ',
          position: {
            start: { line: 181, column: 25, offset: 4625 },
            end: { line: 181, column: 63, offset: 4663 }
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
                start: { line: 181, column: 64, offset: 4664 },
                end: { line: 181, column: 81, offset: 4681 }
              }
            }
          ],
          position: {
            start: { line: 181, column: 63, offset: 4663 },
            end: { line: 181, column: 114, offset: 4714 }
          }
        },
        {
          type: 'text',
          value: ' to enable a ',
          position: {
            start: { line: 181, column: 114, offset: 4714 },
            end: { line: 181, column: 127, offset: 4727 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 181, column: 127, offset: 4727 },
            end: { line: 181, column: 132, offset: 4732 }
          }
        },
        {
          type: 'text',
          value: ' prop on ',
          position: {
            start: { line: 181, column: 132, offset: 4732 },
            end: { line: 181, column: 141, offset: 4741 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 181, column: 141, offset: 4741 },
            end: { line: 181, column: 155, offset: 4755 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 181, column: 155, offset: 4755 },
            end: { line: 181, column: 160, offset: 4760 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedReactElement',
          position: {
            start: { line: 181, column: 160, offset: 4760 },
            end: { line: 181, column: 179, offset: 4779 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 181, column: 179, offset: 4779 },
            end: { line: 181, column: 180, offset: 4780 }
          }
        }
      ],
      position: {
        start: { line: 181, column: 1, offset: 4601 },
        end: { line: 181, column: 180, offset: 4780 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React, { styled })',
      position: {
        start: { line: 183, column: 1, offset: 4782 },
        end: { line: 185, column: 4, offset: 4845 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Elements can now specify a ',
          position: {
            start: { line: 187, column: 1, offset: 4847 },
            end: { line: 187, column: 28, offset: 4874 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 187, column: 28, offset: 4874 },
            end: { line: 187, column: 33, offset: 4879 }
          }
        },
        {
          type: 'text',
          value: ' prop to use css-in-js.',
          position: {
            start: { line: 187, column: 33, offset: 4879 },
            end: { line: 187, column: 56, offset: 4902 }
          }
        }
      ],
      position: {
        start: { line: 187, column: 1, offset: 4847 },
        end: { line: 187, column: 56, offset: 4902 }
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
        start: { line: 189, column: 1, offset: 4904 },
        end: { line: 207, column: 4, offset: 5288 }
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
            start: { line: 209, column: 3, offset: 5292 },
            end: { line: 209, column: 15, offset: 5304 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 5290 },
        end: { line: 209, column: 15, offset: 5304 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 210, column: 1, offset: 5305 },
            end: { line: 210, column: 260, offset: 5564 }
          }
        }
      ],
      position: {
        start: { line: 210, column: 1, offset: 5305 },
        end: { line: 210, column: 260, offset: 5564 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. If you are interested in contributing, the ',
          position: {
            start: { line: 212, column: 1, offset: 5566 },
            end: { line: 212, column: 121, offset: 5686 }
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
                start: { line: 212, column: 122, offset: 5687 },
                end: { line: 212, column: 133, offset: 5698 }
              }
            }
          ],
          position: {
            start: { line: 212, column: 121, offset: 5686 },
            end: { line: 212, column: 226, offset: 5791 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 212, column: 226, offset: 5791 },
            end: { line: 212, column: 256, offset: 5821 }
          }
        }
      ],
      position: {
        start: { line: 212, column: 1, offset: 5566 },
        end: { line: 212, column: 256, offset: 5821 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 214, column: 1, offset: 5823 },
            end: { line: 214, column: 33, offset: 5855 }
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
                start: { line: 214, column: 34, offset: 5856 },
                end: { line: 214, column: 49, offset: 5871 }
              }
            }
          ],
          position: {
            start: { line: 214, column: 33, offset: 5855 },
            end: { line: 214, column: 68, offset: 5890 }
          }
        }
      ],
      position: {
        start: { line: 214, column: 1, offset: 5823 },
        end: { line: 214, column: 68, offset: 5890 }
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
            start: { line: 216, column: 3, offset: 5894 },
            end: { line: 216, column: 10, offset: 5901 }
          }
        }
      ],
      position: {
        start: { line: 216, column: 1, offset: 5892 },
        end: { line: 216, column: 10, offset: 5901 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche is ',
          position: {
            start: { line: 217, column: 1, offset: 5902 },
            end: { line: 217, column: 10, offset: 5911 }
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
                start: { line: 217, column: 11, offset: 5912 },
                end: { line: 217, column: 23, offset: 5924 }
              }
            }
          ],
          position: {
            start: { line: 217, column: 10, offset: 5911 },
            end: { line: 217, column: 85, offset: 5986 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 217, column: 85, offset: 5986 },
            end: { line: 217, column: 86, offset: 5987 }
          }
        }
      ],
      position: {
        start: { line: 217, column: 1, offset: 5902 },
        end: { line: 217, column: 86, offset: 5987 }
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
            start: { line: 219, column: 3, offset: 5991 },
            end: { line: 219, column: 10, offset: 5998 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 5989 },
        end: { line: 219, column: 10, offset: 5998 }
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
                    start: { line: 220, column: 4, offset: 6002 },
                    end: { line: 220, column: 31, offset: 6029 }
                  }
                }
              ],
              position: {
                start: { line: 220, column: 4, offset: 6002 },
                end: { line: 220, column: 31, offset: 6029 }
              }
            }
          ],
          position: {
            start: { line: 220, column: 2, offset: 6000 },
            end: { line: 220, column: 31, offset: 6029 }
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
                    start: { line: 221, column: 4, offset: 6033 },
                    end: { line: 221, column: 30, offset: 6059 }
                  }
                }
              ],
              position: {
                start: { line: 221, column: 4, offset: 6033 },
                end: { line: 221, column: 30, offset: 6059 }
              }
            }
          ],
          position: {
            start: { line: 221, column: 2, offset: 6031 },
            end: { line: 221, column: 30, offset: 6059 }
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
                    start: { line: 222, column: 4, offset: 6063 },
                    end: { line: 222, column: 31, offset: 6090 }
                  }
                }
              ],
              position: {
                start: { line: 222, column: 4, offset: 6063 },
                end: { line: 222, column: 31, offset: 6090 }
              }
            }
          ],
          position: {
            start: { line: 222, column: 2, offset: 6061 },
            end: { line: 222, column: 31, offset: 6090 }
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
                    start: { line: 223, column: 4, offset: 6094 },
                    end: { line: 223, column: 28, offset: 6118 }
                  }
                }
              ],
              position: {
                start: { line: 223, column: 4, offset: 6094 },
                end: { line: 223, column: 28, offset: 6118 }
              }
            }
          ],
          position: {
            start: { line: 223, column: 2, offset: 6092 },
            end: { line: 223, column: 28, offset: 6118 }
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
                    start: { line: 224, column: 4, offset: 6122 },
                    end: { line: 224, column: 32, offset: 6150 }
                  }
                }
              ],
              position: {
                start: { line: 224, column: 4, offset: 6122 },
                end: { line: 224, column: 32, offset: 6150 }
              }
            }
          ],
          position: {
            start: { line: 224, column: 2, offset: 6120 },
            end: { line: 224, column: 32, offset: 6150 }
          }
        }
      ],
      position: {
        start: { line: 220, column: 2, offset: 6000 },
        end: { line: 224, column: 32, offset: 6150 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 225, column: 1, offset: 6151 }
  }
}