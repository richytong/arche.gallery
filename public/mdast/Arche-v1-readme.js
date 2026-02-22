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
      value: '<script src="https://cdn.jsdelivr.net/npm/arche"></script>',
      position: {
        start: { line: 53, column: 1, offset: 1596 },
        end: { line: 55, column: 4, offset: 1666 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 57, column: 1, offset: 1668 },
            end: { line: 57, column: 6, offset: 1673 }
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
                start: { line: 57, column: 7, offset: 1674 },
                end: { line: 57, column: 17, offset: 1684 }
              }
            }
          ],
          position: {
            start: { line: 57, column: 6, offset: 1673 },
            end: { line: 57, column: 89, offset: 1756 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 1, offset: 1668 },
        end: { line: 57, column: 89, offset: 1756 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "import Arche from 'https://cdn.jsdelivr.net/npm/arche/es.js'",
      position: {
        start: { line: 58, column: 1, offset: 1757 },
        end: { line: 60, column: 4, offset: 1835 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 62, column: 1, offset: 1837 },
            end: { line: 62, column: 5, offset: 1841 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DocumentElement',
          position: {
            start: { line: 62, column: 5, offset: 1841 },
            end: { line: 62, column: 22, offset: 1858 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 62, column: 22, offset: 1858 },
            end: { line: 62, column: 66, offset: 1902 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 1837 },
        end: { line: 62, column: 66, offset: 1902 }
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
        start: { line: 64, column: 1, offset: 1904 },
        end: { line: 78, column: 4, offset: 2248 }
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
            start: { line: 80, column: 4, offset: 2253 },
            end: { line: 80, column: 15, offset: 2264 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2250 },
        end: { line: 80, column: 15, offset: 2264 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use Arche with ',
          position: {
            start: { line: 81, column: 1, offset: 2265 },
            end: { line: 81, column: 19, offset: 2283 }
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
                start: { line: 81, column: 20, offset: 2284 },
                end: { line: 81, column: 25, offset: 2289 }
              }
            }
          ],
          position: {
            start: { line: 81, column: 19, offset: 2283 },
            end: { line: 81, column: 46, offset: 2310 }
          }
        },
        {
          type: 'text',
          value: ', simply provide the React library.',
          position: {
            start: { line: 81, column: 46, offset: 2310 },
            end: { line: 81, column: 81, offset: 2345 }
          }
        }
      ],
      position: {
        start: { line: 81, column: 1, offset: 2265 },
        end: { line: 81, column: 81, offset: 2345 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React)',
      position: {
        start: { line: 83, column: 1, offset: 2347 },
        end: { line: 85, column: 4, offset: 2398 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Create dynamic components with props.',
          position: {
            start: { line: 87, column: 1, offset: 2400 },
            end: { line: 87, column: 38, offset: 2437 }
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 2400 },
        end: { line: 87, column: 38, offset: 2437 }
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
        start: { line: 89, column: 1, offset: 2439 },
        end: { line: 106, column: 4, offset: 2913 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Complete interoperability with React hooks (converted from ',
          position: {
            start: { line: 108, column: 1, offset: 2915 },
            end: { line: 108, column: 60, offset: 2974 }
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
                start: { line: 108, column: 61, offset: 2975 },
                end: { line: 108, column: 73, offset: 2987 }
              }
            }
          ],
          position: {
            start: { line: 108, column: 60, offset: 2974 },
            end: { line: 108, column: 117, offset: 3031 }
          }
        },
        {
          type: 'text',
          value: ').',
          position: {
            start: { line: 108, column: 117, offset: 3031 },
            end: { line: 108, column: 119, offset: 3033 }
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 2915 },
        end: { line: 108, column: 119, offset: 3033 }
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
        start: { line: 110, column: 1, offset: 3035 },
        end: { line: 129, column: 4, offset: 3460 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 131, column: 1, offset: 3462 },
            end: { line: 131, column: 5, offset: 3466 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 131, column: 5, offset: 3466 },
            end: { line: 131, column: 19, offset: 3480 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 131, column: 19, offset: 3480 },
            end: { line: 131, column: 63, offset: 3524 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 3462 },
        end: { line: 131, column: 63, offset: 3524 }
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
        start: { line: 133, column: 1, offset: 3526 },
        end: { line: 147, column: 4, offset: 3851 }
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
            start: { line: 149, column: 4, offset: 3856 },
            end: { line: 149, column: 23, offset: 3875 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 3853 },
        end: { line: 149, column: 23, offset: 3875 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use React Context with Arche, wrap ',
          position: {
            start: { line: 150, column: 1, offset: 3876 },
            end: { line: 150, column: 39, offset: 3914 }
          }
        },
        {
          type: 'inlineCode',
          value: 'YourContext.Provider',
          position: {
            start: { line: 150, column: 39, offset: 3914 },
            end: { line: 150, column: 61, offset: 3936 }
          }
        },
        {
          type: 'text',
          value: ' with ',
          position: {
            start: { line: 150, column: 61, offset: 3936 },
            end: { line: 150, column: 67, offset: 3942 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 150, column: 67, offset: 3942 },
            end: { line: 150, column: 81, offset: 3956 }
          }
        },
        {
          type: 'text',
          value: ' and supply ',
          position: {
            start: { line: 150, column: 81, offset: 3956 },
            end: { line: 150, column: 93, offset: 3968 }
          }
        },
        {
          type: 'inlineCode',
          value: 'value',
          position: {
            start: { line: 150, column: 93, offset: 3968 },
            end: { line: 150, column: 100, offset: 3975 }
          }
        },
        {
          type: 'text',
          value: ' as a prop, specifying children in the next argument.',
          position: {
            start: { line: 150, column: 100, offset: 3975 },
            end: { line: 150, column: 153, offset: 4028 }
          }
        }
      ],
      position: {
        start: { line: 150, column: 1, offset: 3876 },
        end: { line: 150, column: 153, offset: 4028 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JSX example:',
          position: {
            start: { line: 152, column: 1, offset: 4030 },
            end: { line: 152, column: 13, offset: 4042 }
          }
        }
      ],
      position: {
        start: { line: 152, column: 1, offset: 4030 },
        end: { line: 152, column: 13, offset: 4042 }
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
        start: { line: 153, column: 1, offset: 4043 },
        end: { line: 167, column: 4, offset: 4317 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Translates to the following with Arche:',
          position: {
            start: { line: 169, column: 1, offset: 4319 },
            end: { line: 169, column: 40, offset: 4358 }
          }
        }
      ],
      position: {
        start: { line: 169, column: 1, offset: 4319 },
        end: { line: 169, column: 40, offset: 4358 }
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
        start: { line: 170, column: 1, offset: 4359 },
        end: { line: 178, column: 4, offset: 4605 }
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
            start: { line: 180, column: 4, offset: 4610 },
            end: { line: 180, column: 16, offset: 4622 }
          }
        }
      ],
      position: {
        start: { line: 180, column: 1, offset: 4607 },
        end: { line: 180, column: 16, offset: 4622 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche accepts a ',
          position: {
            start: { line: 181, column: 1, offset: 4623 },
            end: { line: 181, column: 17, offset: 4639 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styled',
          position: {
            start: { line: 181, column: 17, offset: 4639 },
            end: { line: 181, column: 25, offset: 4647 }
          }
        },
        {
          type: 'text',
          value: ' option from css-in-js libraries like ',
          position: {
            start: { line: 181, column: 25, offset: 4647 },
            end: { line: 181, column: 63, offset: 4685 }
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
                start: { line: 181, column: 64, offset: 4686 },
                end: { line: 181, column: 81, offset: 4703 }
              }
            }
          ],
          position: {
            start: { line: 181, column: 63, offset: 4685 },
            end: { line: 181, column: 114, offset: 4736 }
          }
        },
        {
          type: 'text',
          value: ' to enable a ',
          position: {
            start: { line: 181, column: 114, offset: 4736 },
            end: { line: 181, column: 127, offset: 4749 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 181, column: 127, offset: 4749 },
            end: { line: 181, column: 132, offset: 4754 }
          }
        },
        {
          type: 'text',
          value: ' prop on ',
          position: {
            start: { line: 181, column: 132, offset: 4754 },
            end: { line: 181, column: 141, offset: 4763 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 181, column: 141, offset: 4763 },
            end: { line: 181, column: 155, offset: 4777 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 181, column: 155, offset: 4777 },
            end: { line: 181, column: 160, offset: 4782 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedReactElement',
          position: {
            start: { line: 181, column: 160, offset: 4782 },
            end: { line: 181, column: 179, offset: 4801 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 181, column: 179, offset: 4801 },
            end: { line: 181, column: 180, offset: 4802 }
          }
        }
      ],
      position: {
        start: { line: 181, column: 1, offset: 4623 },
        end: { line: 181, column: 180, offset: 4802 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React, { styled })',
      position: {
        start: { line: 183, column: 1, offset: 4804 },
        end: { line: 185, column: 4, offset: 4867 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Elements can now specify a ',
          position: {
            start: { line: 187, column: 1, offset: 4869 },
            end: { line: 187, column: 28, offset: 4896 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 187, column: 28, offset: 4896 },
            end: { line: 187, column: 33, offset: 4901 }
          }
        },
        {
          type: 'text',
          value: ' prop to use css-in-js.',
          position: {
            start: { line: 187, column: 33, offset: 4901 },
            end: { line: 187, column: 56, offset: 4924 }
          }
        }
      ],
      position: {
        start: { line: 187, column: 1, offset: 4869 },
        end: { line: 187, column: 56, offset: 4924 }
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
        start: { line: 189, column: 1, offset: 4926 },
        end: { line: 207, column: 4, offset: 5310 }
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
            start: { line: 209, column: 3, offset: 5314 },
            end: { line: 209, column: 15, offset: 5326 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 5312 },
        end: { line: 209, column: 15, offset: 5326 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 210, column: 1, offset: 5327 },
            end: { line: 210, column: 260, offset: 5586 }
          }
        }
      ],
      position: {
        start: { line: 210, column: 1, offset: 5327 },
        end: { line: 210, column: 260, offset: 5586 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. If you are interested in contributing, the ',
          position: {
            start: { line: 212, column: 1, offset: 5588 },
            end: { line: 212, column: 121, offset: 5708 }
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
                start: { line: 212, column: 122, offset: 5709 },
                end: { line: 212, column: 133, offset: 5720 }
              }
            }
          ],
          position: {
            start: { line: 212, column: 121, offset: 5708 },
            end: { line: 212, column: 226, offset: 5813 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 212, column: 226, offset: 5813 },
            end: { line: 212, column: 256, offset: 5843 }
          }
        }
      ],
      position: {
        start: { line: 212, column: 1, offset: 5588 },
        end: { line: 212, column: 256, offset: 5843 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 214, column: 1, offset: 5845 },
            end: { line: 214, column: 33, offset: 5877 }
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
                start: { line: 214, column: 34, offset: 5878 },
                end: { line: 214, column: 49, offset: 5893 }
              }
            }
          ],
          position: {
            start: { line: 214, column: 33, offset: 5877 },
            end: { line: 214, column: 114, offset: 5958 }
          }
        }
      ],
      position: {
        start: { line: 214, column: 1, offset: 5845 },
        end: { line: 214, column: 114, offset: 5958 }
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
            start: { line: 216, column: 3, offset: 5962 },
            end: { line: 216, column: 10, offset: 5969 }
          }
        }
      ],
      position: {
        start: { line: 216, column: 1, offset: 5960 },
        end: { line: 216, column: 10, offset: 5969 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche is ',
          position: {
            start: { line: 217, column: 1, offset: 5970 },
            end: { line: 217, column: 10, offset: 5979 }
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
                start: { line: 217, column: 11, offset: 5980 },
                end: { line: 217, column: 23, offset: 5992 }
              }
            }
          ],
          position: {
            start: { line: 217, column: 10, offset: 5979 },
            end: { line: 217, column: 85, offset: 6054 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 217, column: 85, offset: 6054 },
            end: { line: 217, column: 86, offset: 6055 }
          }
        }
      ],
      position: {
        start: { line: 217, column: 1, offset: 5970 },
        end: { line: 217, column: 86, offset: 6055 }
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
            start: { line: 219, column: 3, offset: 6059 },
            end: { line: 219, column: 10, offset: 6066 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 6057 },
        end: { line: 219, column: 10, offset: 6066 }
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
                    start: { line: 220, column: 4, offset: 6070 },
                    end: { line: 220, column: 31, offset: 6097 }
                  }
                }
              ],
              position: {
                start: { line: 220, column: 4, offset: 6070 },
                end: { line: 220, column: 31, offset: 6097 }
              }
            }
          ],
          position: {
            start: { line: 220, column: 2, offset: 6068 },
            end: { line: 220, column: 31, offset: 6097 }
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
                    start: { line: 221, column: 4, offset: 6101 },
                    end: { line: 221, column: 30, offset: 6127 }
                  }
                }
              ],
              position: {
                start: { line: 221, column: 4, offset: 6101 },
                end: { line: 221, column: 30, offset: 6127 }
              }
            }
          ],
          position: {
            start: { line: 221, column: 2, offset: 6099 },
            end: { line: 221, column: 30, offset: 6127 }
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
                    start: { line: 222, column: 4, offset: 6131 },
                    end: { line: 222, column: 31, offset: 6158 }
                  }
                }
              ],
              position: {
                start: { line: 222, column: 4, offset: 6131 },
                end: { line: 222, column: 31, offset: 6158 }
              }
            }
          ],
          position: {
            start: { line: 222, column: 2, offset: 6129 },
            end: { line: 222, column: 31, offset: 6158 }
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
                    start: { line: 223, column: 4, offset: 6162 },
                    end: { line: 223, column: 28, offset: 6186 }
                  }
                }
              ],
              position: {
                start: { line: 223, column: 4, offset: 6162 },
                end: { line: 223, column: 28, offset: 6186 }
              }
            }
          ],
          position: {
            start: { line: 223, column: 2, offset: 6160 },
            end: { line: 223, column: 28, offset: 6186 }
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
                    start: { line: 224, column: 4, offset: 6190 },
                    end: { line: 224, column: 32, offset: 6218 }
                  }
                }
              ],
              position: {
                start: { line: 224, column: 4, offset: 6190 },
                end: { line: 224, column: 32, offset: 6218 }
              }
            }
          ],
          position: {
            start: { line: 224, column: 2, offset: 6188 },
            end: { line: 224, column: 32, offset: 6218 }
          }
        }
      ],
      position: {
        start: { line: 220, column: 2, offset: 6068 },
        end: { line: 224, column: 32, offset: 6218 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 225, column: 1, offset: 6219 }
  }
}