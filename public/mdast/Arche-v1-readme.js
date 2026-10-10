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
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Vanilla Microfrontends',
          position: {
            start: { line: 12, column: 4, offset: 795 },
            end: { line: 12, column: 26, offset: 817 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 792 },
        end: { line: 12, column: 26, offset: 817 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A web page is a render of an HTML document.',
          position: {
            start: { line: 14, column: 1, offset: 819 },
            end: { line: 14, column: 44, offset: 862 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 819 },
        end: { line: 14, column: 44, offset: 862 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTML document loads JavaScript scripts and CSS stylesheets.',
          position: {
            start: { line: 16, column: 1, offset: 864 },
            end: { line: 16, column: 63, offset: 926 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 864 },
        end: { line: 16, column: 63, offset: 926 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JavaScript scripts can load JavaScript scripts.',
          position: {
            start: { line: 18, column: 1, offset: 928 },
            end: { line: 18, column: 48, offset: 975 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 928 },
        end: { line: 18, column: 48, offset: 975 }
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
        start: { line: 20, column: 1, offset: 977 },
        end: { line: 51, column: 4, offset: 1759 }
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
            start: { line: 53, column: 4, offset: 1764 },
            end: { line: 53, column: 16, offset: 1776 }
          }
        }
      ],
      position: {
        start: { line: 53, column: 1, offset: 1761 },
        end: { line: 53, column: 16, offset: 1776 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 54, column: 1, offset: 1777 },
            end: { line: 54, column: 6, offset: 1782 }
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 54, column: 6, offset: 1782 },
            end: { line: 54, column: 11, offset: 1787 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 1777 },
        end: { line: 54, column: 11, offset: 1787 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i arche',
      position: {
        start: { line: 56, column: 1, offset: 1789 },
        end: { line: 58, column: 4, offset: 1812 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with browser script, sets ',
          position: {
            start: { line: 60, column: 1, offset: 1814 },
            end: { line: 60, column: 27, offset: 1840 }
          }
        },
        {
          type: 'inlineCode',
          value: 'window.Arche',
          position: {
            start: { line: 60, column: 27, offset: 1840 },
            end: { line: 60, column: 41, offset: 1854 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 1814 },
        end: { line: 60, column: 41, offset: 1854 }
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<script src="https://cdn.jsdelivr.net/npm/arche"></script>',
      position: {
        start: { line: 62, column: 1, offset: 1856 },
        end: { line: 64, column: 4, offset: 1926 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 66, column: 1, offset: 1928 },
            end: { line: 66, column: 6, offset: 1933 }
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
                start: { line: 66, column: 7, offset: 1934 },
                end: { line: 66, column: 17, offset: 1944 }
              }
            }
          ],
          position: {
            start: { line: 66, column: 6, offset: 1933 },
            end: { line: 66, column: 89, offset: 2016 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 1928 },
        end: { line: 66, column: 89, offset: 2016 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "import Arche from 'https://cdn.jsdelivr.net/npm/arche/es.js'",
      position: {
        start: { line: 67, column: 1, offset: 2017 },
        end: { line: 69, column: 4, offset: 2095 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 71, column: 1, offset: 2097 },
            end: { line: 71, column: 5, offset: 2101 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DocumentElement',
          position: {
            start: { line: 71, column: 5, offset: 2101 },
            end: { line: 71, column: 22, offset: 2118 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 71, column: 22, offset: 2118 },
            end: { line: 71, column: 66, offset: 2162 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 1, offset: 2097 },
        end: { line: 71, column: 66, offset: 2162 }
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
        start: { line: 73, column: 1, offset: 2164 },
        end: { line: 87, column: 4, offset: 2508 }
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
            start: { line: 89, column: 4, offset: 2513 },
            end: { line: 89, column: 15, offset: 2524 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 2510 },
        end: { line: 89, column: 15, offset: 2524 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use Arche with ',
          position: {
            start: { line: 90, column: 1, offset: 2525 },
            end: { line: 90, column: 19, offset: 2543 }
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
                start: { line: 90, column: 20, offset: 2544 },
                end: { line: 90, column: 25, offset: 2549 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 19, offset: 2543 },
            end: { line: 90, column: 46, offset: 2570 }
          }
        },
        {
          type: 'text',
          value: ', simply provide the React library.',
          position: {
            start: { line: 90, column: 46, offset: 2570 },
            end: { line: 90, column: 81, offset: 2605 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 1, offset: 2525 },
        end: { line: 90, column: 81, offset: 2605 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React)',
      position: {
        start: { line: 92, column: 1, offset: 2607 },
        end: { line: 94, column: 4, offset: 2658 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Create dynamic components with props.',
          position: {
            start: { line: 96, column: 1, offset: 2660 },
            end: { line: 96, column: 38, offset: 2697 }
          }
        }
      ],
      position: {
        start: { line: 96, column: 1, offset: 2660 },
        end: { line: 96, column: 38, offset: 2697 }
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
        start: { line: 98, column: 1, offset: 2699 },
        end: { line: 115, column: 4, offset: 3173 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Complete interoperability with React hooks (converted from ',
          position: {
            start: { line: 117, column: 1, offset: 3175 },
            end: { line: 117, column: 60, offset: 3234 }
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
                start: { line: 117, column: 61, offset: 3235 },
                end: { line: 117, column: 73, offset: 3247 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 60, offset: 3234 },
            end: { line: 117, column: 117, offset: 3291 }
          }
        },
        {
          type: 'text',
          value: ').',
          position: {
            start: { line: 117, column: 117, offset: 3291 },
            end: { line: 117, column: 119, offset: 3293 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 3175 },
        end: { line: 117, column: 119, offset: 3293 }
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
        start: { line: 119, column: 1, offset: 3295 },
        end: { line: 138, column: 4, offset: 3720 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 140, column: 1, offset: 3722 },
            end: { line: 140, column: 5, offset: 3726 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 140, column: 5, offset: 3726 },
            end: { line: 140, column: 19, offset: 3740 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 140, column: 19, offset: 3740 },
            end: { line: 140, column: 63, offset: 3784 }
          }
        }
      ],
      position: {
        start: { line: 140, column: 1, offset: 3722 },
        end: { line: 140, column: 63, offset: 3784 }
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
        start: { line: 142, column: 1, offset: 3786 },
        end: { line: 156, column: 4, offset: 4111 }
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
            start: { line: 158, column: 4, offset: 4116 },
            end: { line: 158, column: 23, offset: 4135 }
          }
        }
      ],
      position: {
        start: { line: 158, column: 1, offset: 4113 },
        end: { line: 158, column: 23, offset: 4135 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use React Context with Arche, wrap ',
          position: {
            start: { line: 159, column: 1, offset: 4136 },
            end: { line: 159, column: 39, offset: 4174 }
          }
        },
        {
          type: 'inlineCode',
          value: 'YourContext.Provider',
          position: {
            start: { line: 159, column: 39, offset: 4174 },
            end: { line: 159, column: 61, offset: 4196 }
          }
        },
        {
          type: 'text',
          value: ' with ',
          position: {
            start: { line: 159, column: 61, offset: 4196 },
            end: { line: 159, column: 67, offset: 4202 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 159, column: 67, offset: 4202 },
            end: { line: 159, column: 81, offset: 4216 }
          }
        },
        {
          type: 'text',
          value: ' and supply ',
          position: {
            start: { line: 159, column: 81, offset: 4216 },
            end: { line: 159, column: 93, offset: 4228 }
          }
        },
        {
          type: 'inlineCode',
          value: 'value',
          position: {
            start: { line: 159, column: 93, offset: 4228 },
            end: { line: 159, column: 100, offset: 4235 }
          }
        },
        {
          type: 'text',
          value: ' as a prop, specifying children in the next argument.',
          position: {
            start: { line: 159, column: 100, offset: 4235 },
            end: { line: 159, column: 153, offset: 4288 }
          }
        }
      ],
      position: {
        start: { line: 159, column: 1, offset: 4136 },
        end: { line: 159, column: 153, offset: 4288 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JSX example:',
          position: {
            start: { line: 161, column: 1, offset: 4290 },
            end: { line: 161, column: 13, offset: 4302 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 4290 },
        end: { line: 161, column: 13, offset: 4302 }
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
        start: { line: 162, column: 1, offset: 4303 },
        end: { line: 176, column: 4, offset: 4577 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Translates to the following with Arche:',
          position: {
            start: { line: 178, column: 1, offset: 4579 },
            end: { line: 178, column: 40, offset: 4618 }
          }
        }
      ],
      position: {
        start: { line: 178, column: 1, offset: 4579 },
        end: { line: 178, column: 40, offset: 4618 }
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
        start: { line: 179, column: 1, offset: 4619 },
        end: { line: 187, column: 4, offset: 4865 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Using React Fragments',
          position: {
            start: { line: 189, column: 4, offset: 4870 },
            end: { line: 189, column: 25, offset: 4891 }
          }
        }
      ],
      position: {
        start: { line: 189, column: 1, offset: 4867 },
        end: { line: 189, column: 25, offset: 4891 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use React fragments (',
          position: {
            start: { line: 190, column: 1, offset: 4892 },
            end: { line: 190, column: 25, offset: 4916 }
          }
        },
        {
          type: 'inlineCode',
          value: '<>',
          position: {
            start: { line: 190, column: 25, offset: 4916 },
            end: { line: 190, column: 29, offset: 4920 }
          }
        },
        {
          type: 'text',
          value: '), just return an array.',
          position: {
            start: { line: 190, column: 29, offset: 4920 },
            end: { line: 190, column: 53, offset: 4944 }
          }
        }
      ],
      position: {
        start: { line: 190, column: 1, offset: 4892 },
        end: { line: 190, column: 53, offset: 4944 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const ReactElement = Arche(React)\n' +
        'const { Div, H1, Img } = ReactElement\n' +
        '\n' +
        'const Placeholders = ReactElement(() => [\n' +
        "  Img({ src: 'https://placehold.co/300x150', alt: 'placeholder' }),\n" +
        "  Img({ src: 'https://placehold.co/300x150', alt: 'placeholder' }),\n" +
        '])\n' +
        '\n' +
        'const Root = ReactElement(() => [\n' +
        "  H1('Fragment Example'),\n" +
        '  Placeholders(),\n' +
        '])\n' +
        '\n' +
        "ReactDOM.render(Root(), document.getElementById('react-root'))",
      position: {
        start: { line: 192, column: 1, offset: 4946 },
        end: { line: 207, column: 4, offset: 5376 }
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
            start: { line: 209, column: 4, offset: 5381 },
            end: { line: 209, column: 16, offset: 5393 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 5378 },
        end: { line: 209, column: 16, offset: 5393 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche accepts a ',
          position: {
            start: { line: 210, column: 1, offset: 5394 },
            end: { line: 210, column: 17, offset: 5410 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styled',
          position: {
            start: { line: 210, column: 17, offset: 5410 },
            end: { line: 210, column: 25, offset: 5418 }
          }
        },
        {
          type: 'text',
          value: ' option from css-in-js libraries like ',
          position: {
            start: { line: 210, column: 25, offset: 5418 },
            end: { line: 210, column: 63, offset: 5456 }
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
                start: { line: 210, column: 64, offset: 5457 },
                end: { line: 210, column: 81, offset: 5474 }
              }
            }
          ],
          position: {
            start: { line: 210, column: 63, offset: 5456 },
            end: { line: 210, column: 114, offset: 5507 }
          }
        },
        {
          type: 'text',
          value: ' to enable a ',
          position: {
            start: { line: 210, column: 114, offset: 5507 },
            end: { line: 210, column: 127, offset: 5520 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 210, column: 127, offset: 5520 },
            end: { line: 210, column: 132, offset: 5525 }
          }
        },
        {
          type: 'text',
          value: ' prop on ',
          position: {
            start: { line: 210, column: 132, offset: 5525 },
            end: { line: 210, column: 141, offset: 5534 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 210, column: 141, offset: 5534 },
            end: { line: 210, column: 155, offset: 5548 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 210, column: 155, offset: 5548 },
            end: { line: 210, column: 160, offset: 5553 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedReactElement',
          position: {
            start: { line: 210, column: 160, offset: 5553 },
            end: { line: 210, column: 179, offset: 5572 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 210, column: 179, offset: 5572 },
            end: { line: 210, column: 180, offset: 5573 }
          }
        }
      ],
      position: {
        start: { line: 210, column: 1, offset: 5394 },
        end: { line: 210, column: 180, offset: 5573 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React, { styled })',
      position: {
        start: { line: 212, column: 1, offset: 5575 },
        end: { line: 214, column: 4, offset: 5638 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Elements can now specify a ',
          position: {
            start: { line: 216, column: 1, offset: 5640 },
            end: { line: 216, column: 28, offset: 5667 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 216, column: 28, offset: 5667 },
            end: { line: 216, column: 33, offset: 5672 }
          }
        },
        {
          type: 'text',
          value: ' prop to use css-in-js.',
          position: {
            start: { line: 216, column: 33, offset: 5672 },
            end: { line: 216, column: 56, offset: 5695 }
          }
        }
      ],
      position: {
        start: { line: 216, column: 1, offset: 5640 },
        end: { line: 216, column: 56, offset: 5695 }
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
        start: { line: 218, column: 1, offset: 5697 },
        end: { line: 236, column: 4, offset: 6081 }
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
            start: { line: 238, column: 3, offset: 6085 },
            end: { line: 238, column: 15, offset: 6097 }
          }
        }
      ],
      position: {
        start: { line: 238, column: 1, offset: 6083 },
        end: { line: 238, column: 15, offset: 6097 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 239, column: 1, offset: 6098 },
            end: { line: 239, column: 260, offset: 6357 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 6098 },
        end: { line: 239, column: 260, offset: 6357 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. If you are interested in contributing, the ',
          position: {
            start: { line: 241, column: 1, offset: 6359 },
            end: { line: 241, column: 121, offset: 6479 }
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
                start: { line: 241, column: 122, offset: 6480 },
                end: { line: 241, column: 133, offset: 6491 }
              }
            }
          ],
          position: {
            start: { line: 241, column: 121, offset: 6479 },
            end: { line: 241, column: 226, offset: 6584 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 241, column: 226, offset: 6584 },
            end: { line: 241, column: 256, offset: 6614 }
          }
        }
      ],
      position: {
        start: { line: 241, column: 1, offset: 6359 },
        end: { line: 241, column: 256, offset: 6614 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 243, column: 1, offset: 6616 },
            end: { line: 243, column: 33, offset: 6648 }
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
                start: { line: 243, column: 34, offset: 6649 },
                end: { line: 243, column: 49, offset: 6664 }
              }
            }
          ],
          position: {
            start: { line: 243, column: 33, offset: 6648 },
            end: { line: 243, column: 114, offset: 6729 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 6616 },
        end: { line: 243, column: 114, offset: 6729 }
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
            start: { line: 245, column: 3, offset: 6733 },
            end: { line: 245, column: 10, offset: 6740 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 6731 },
        end: { line: 245, column: 10, offset: 6740 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche is distributed under the ',
          position: {
            start: { line: 246, column: 1, offset: 6741 },
            end: { line: 246, column: 32, offset: 6772 }
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
                start: { line: 246, column: 33, offset: 6773 },
                end: { line: 246, column: 46, offset: 6786 }
              }
            }
          ],
          position: {
            start: { line: 246, column: 32, offset: 6772 },
            end: { line: 246, column: 98, offset: 6838 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 246, column: 98, offset: 6838 },
            end: { line: 246, column: 99, offset: 6839 }
          }
        }
      ],
      position: {
        start: { line: 246, column: 1, offset: 6741 },
        end: { line: 246, column: 99, offset: 6839 }
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
            start: { line: 248, column: 3, offset: 6843 },
            end: { line: 248, column: 10, offset: 6850 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 1, offset: 6841 },
        end: { line: 248, column: 10, offset: 6850 }
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
                    start: { line: 249, column: 4, offset: 6854 },
                    end: { line: 249, column: 31, offset: 6881 }
                  }
                }
              ],
              position: {
                start: { line: 249, column: 4, offset: 6854 },
                end: { line: 249, column: 31, offset: 6881 }
              }
            }
          ],
          position: {
            start: { line: 249, column: 2, offset: 6852 },
            end: { line: 249, column: 31, offset: 6881 }
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
                    start: { line: 250, column: 4, offset: 6885 },
                    end: { line: 250, column: 30, offset: 6911 }
                  }
                }
              ],
              position: {
                start: { line: 250, column: 4, offset: 6885 },
                end: { line: 250, column: 30, offset: 6911 }
              }
            }
          ],
          position: {
            start: { line: 250, column: 2, offset: 6883 },
            end: { line: 250, column: 30, offset: 6911 }
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
                    start: { line: 251, column: 4, offset: 6915 },
                    end: { line: 251, column: 31, offset: 6942 }
                  }
                }
              ],
              position: {
                start: { line: 251, column: 4, offset: 6915 },
                end: { line: 251, column: 31, offset: 6942 }
              }
            }
          ],
          position: {
            start: { line: 251, column: 2, offset: 6913 },
            end: { line: 251, column: 31, offset: 6942 }
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
                    start: { line: 252, column: 4, offset: 6946 },
                    end: { line: 252, column: 28, offset: 6970 }
                  }
                }
              ],
              position: {
                start: { line: 252, column: 4, offset: 6946 },
                end: { line: 252, column: 28, offset: 6970 }
              }
            }
          ],
          position: {
            start: { line: 252, column: 2, offset: 6944 },
            end: { line: 252, column: 28, offset: 6970 }
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
                    start: { line: 253, column: 4, offset: 6974 },
                    end: { line: 253, column: 32, offset: 7002 }
                  }
                }
              ],
              position: {
                start: { line: 253, column: 4, offset: 6974 },
                end: { line: 253, column: 32, offset: 7002 }
              }
            }
          ],
          position: {
            start: { line: 253, column: 2, offset: 6972 },
            end: { line: 253, column: 32, offset: 7002 }
          }
        }
      ],
      position: {
        start: { line: 249, column: 2, offset: 6852 },
        end: { line: 253, column: 32, offset: 7002 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 254, column: 1, offset: 7003 }
  }
}