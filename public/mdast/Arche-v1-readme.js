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
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Principles:',
          position: {
            start: { line: 20, column: 1, offset: 977 },
            end: { line: 20, column: 12, offset: 988 }
          }
        }
      ],
      position: {
        start: { line: 20, column: 1, offset: 977 },
        end: { line: 20, column: 12, offset: 988 }
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
                  value: 'Front end development for the web should be done in HTML, CSS, and JavaScript.',
                  position: {
                    start: { line: 21, column: 5, offset: 993 },
                    end: { line: 21, column: 83, offset: 1071 }
                  }
                }
              ],
              position: {
                start: { line: 21, column: 5, offset: 993 },
                end: { line: 21, column: 83, offset: 1071 }
              }
            }
          ],
          position: {
            start: { line: 21, column: 3, offset: 991 },
            end: { line: 21, column: 83, offset: 1071 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 3, offset: 991 },
        end: { line: 21, column: 83, offset: 1071 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Getting Started',
          position: {
            start: { line: 23, column: 4, offset: 1076 },
            end: { line: 23, column: 19, offset: 1091 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 1073 },
        end: { line: 23, column: 19, offset: 1091 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Vanilla microfrontends starts with an HTML document. Whenever a browser navigates to a web page, the first file it downloads and reads is the HTML document of the web page.',
          position: {
            start: { line: 25, column: 1, offset: 1093 },
            end: { line: 25, column: 173, offset: 1265 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 1093 },
        end: { line: 25, column: 173, offset: 1265 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Here's a project structure. The ",
          position: {
            start: { line: 27, column: 1, offset: 1267 },
            end: { line: 27, column: 33, offset: 1299 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 27, column: 33, offset: 1299 },
            end: { line: 27, column: 41, offset: 1307 }
          }
        },
        {
          type: 'text',
          value: ' directory will have all of the files that will be public to the world wide web.',
          position: {
            start: { line: 27, column: 41, offset: 1307 },
            end: { line: 27, column: 121, offset: 1387 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1267 },
        end: { line: 27, column: 121, offset: 1387 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'public/\n    index.html\n    styles.css\n    index.js',
      position: {
        start: { line: 29, column: 1, offset: 1389 },
        end: { line: 34, column: 4, offset: 1447 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTML document of a web page loads JavaScript scripts and CSS stylesheets. JavaScript scripts are defined with ',
          position: {
            start: { line: 36, column: 1, offset: 1449 },
            end: { line: 36, column: 115, offset: 1563 }
          }
        },
        {
          type: 'inlineCode',
          value: '<script></script>',
          position: {
            start: { line: 36, column: 115, offset: 1563 },
            end: { line: 36, column: 134, offset: 1582 }
          }
        },
        {
          type: 'text',
          value: ' tags, and CSS stylesheets with ',
          position: {
            start: { line: 36, column: 134, offset: 1582 },
            end: { line: 36, column: 166, offset: 1614 }
          }
        },
        {
          type: 'inlineCode',
          value: '<link>',
          position: {
            start: { line: 36, column: 166, offset: 1614 },
            end: { line: 36, column: 174, offset: 1622 }
          }
        },
        {
          type: 'text',
          value: ' tags. Add this to ',
          position: {
            start: { line: 36, column: 174, offset: 1622 },
            end: { line: 36, column: 193, offset: 1641 }
          }
        },
        {
          type: 'inlineCode',
          value: 'index.html',
          position: {
            start: { line: 36, column: 193, offset: 1641 },
            end: { line: 36, column: 205, offset: 1653 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 36, column: 205, offset: 1653 },
            end: { line: 36, column: 206, offset: 1654 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 1449 },
        end: { line: 36, column: 206, offset: 1654 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTML document is read line by line, from top to bottom.',
          position: {
            start: { line: 38, column: 1, offset: 1656 },
            end: { line: 38, column: 60, offset: 1715 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1656 },
        end: { line: 38, column: 60, offset: 1715 }
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <title>Welcome to Vanilla Microfrontends.</title>\n' +
        '\n' +
        '  <link rel="stylesheet" href="/styles.css" />\n' +
        '</head>\n' +
        '<body>\n' +
        '  <h1>Welcome to Vanilla Microfrontends.</h1>\n' +
        '  <p>This HTML document is the first file a browser downloads and reads when it navigates to this web page.</p>\n' +
        '\n' +
        '  <script src="https://cdn.jsdelivr.net/npm/arche"></script>\n' +
        '  <script src="/index.js"></script>\n' +
        '</body>\n' +
        '</html>',
      position: {
        start: { line: 40, column: 1, offset: 1717 },
        end: { line: 57, column: 4, offset: 2180 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'CSS stylesheets are downloaded and read right after the HTML document. Add this to ',
          position: {
            start: { line: 59, column: 1, offset: 2182 },
            end: { line: 59, column: 84, offset: 2265 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styles.css',
          position: {
            start: { line: 59, column: 84, offset: 2265 },
            end: { line: 59, column: 96, offset: 2277 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 59, column: 96, offset: 2277 },
            end: { line: 59, column: 97, offset: 2278 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 2182 },
        end: { line: 59, column: 97, offset: 2278 }
      }
    },
    {
      type: 'code',
      lang: 'css',
      meta: null,
      value: 'body {\n' +
        '  color: #FFF;\n' +
        '  background-color: #7FB665;\n' +
        '}\n' +
        '\n' +
        'h1 {\n' +
        '  font-size: 32px;\n' +
        '}\n' +
        '\n' +
        'p {\n' +
        '  font-size: 14px;\n' +
        '}',
      position: {
        start: { line: 61, column: 1, offset: 2280 },
        end: { line: 74, column: 4, offset: 2396 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JavaScript scripts are run from where they are defined in the HTML. Add this to ',
          position: {
            start: { line: 76, column: 1, offset: 2398 },
            end: { line: 76, column: 81, offset: 2478 }
          }
        },
        {
          type: 'inlineCode',
          value: 'index.js',
          position: {
            start: { line: 76, column: 81, offset: 2478 },
            end: { line: 76, column: 91, offset: 2488 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 76, column: 91, offset: 2488 },
            end: { line: 76, column: 92, offset: 2489 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 2398 },
        end: { line: 76, column: 92, offset: 2489 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'console.log("Welcome to Vanilla Microfrontends.")\n' +
        '\n' +
        'const DocumentElement = Arche(document)\n' +
        'const { P } = DocumentElement\n' +
        '\n' +
        'const p = P("This element was added from index.js.")\n' +
        '\n' +
        'document.body.appendChild(p)',
      position: {
        start: { line: 78, column: 1, offset: 2491 },
        end: { line: 87, column: 4, offset: 2713 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now all you have to do to see the website you just created is serve the ',
          position: {
            start: { line: 89, column: 1, offset: 2715 },
            end: { line: 89, column: 73, offset: 2787 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 89, column: 73, offset: 2787 },
            end: { line: 89, column: 81, offset: 2795 }
          }
        },
        {
          type: 'text',
          value: ' folder. I recommend installing the ',
          position: {
            start: { line: 89, column: 81, offset: 2795 },
            end: { line: 89, column: 117, offset: 2831 }
          }
        },
        {
          type: 'inlineCode',
          value: 'static-web-server',
          position: {
            start: { line: 89, column: 117, offset: 2831 },
            end: { line: 89, column: 136, offset: 2850 }
          }
        },
        {
          type: 'text',
          value: ' command line tool from ',
          position: {
            start: { line: 89, column: 136, offset: 2850 },
            end: { line: 89, column: 160, offset: 2874 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://static-web-server.net/',
          children: [
            {
              type: 'text',
              value: 'Static Web Server',
              position: {
                start: { line: 89, column: 161, offset: 2875 },
                end: { line: 89, column: 178, offset: 2892 }
              }
            }
          ],
          position: {
            start: { line: 89, column: 160, offset: 2874 },
            end: { line: 89, column: 211, offset: 2925 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 89, column: 211, offset: 2925 },
            end: { line: 89, column: 212, offset: 2926 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 2715 },
        end: { line: 89, column: 212, offset: 2926 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Install ',
          position: {
            start: { line: 91, column: 1, offset: 2928 },
            end: { line: 91, column: 9, offset: 2936 }
          }
        },
        {
          type: 'inlineCode',
          value: 'static-web-server',
          position: {
            start: { line: 91, column: 9, offset: 2936 },
            end: { line: 91, column: 28, offset: 2955 }
          }
        },
        {
          type: 'text',
          value: ' with the following command:',
          position: {
            start: { line: 91, column: 28, offset: 2955 },
            end: { line: 91, column: 56, offset: 2983 }
          }
        }
      ],
      position: {
        start: { line: 91, column: 1, offset: 2928 },
        end: { line: 91, column: 56, offset: 2983 }
      }
    },
    {
      type: 'code',
      lang: 'sh',
      meta: null,
      value: "curl --proto '=https' --tlsv1.2 -sSfL https://get.static-web-server.net | sh",
      position: {
        start: { line: 92, column: 1, offset: 2984 },
        end: { line: 94, column: 4, offset: 3070 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now you can serve the ',
          position: {
            start: { line: 96, column: 1, offset: 3072 },
            end: { line: 96, column: 23, offset: 3094 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 96, column: 23, offset: 3094 },
            end: { line: 96, column: 31, offset: 3102 }
          }
        },
        {
          type: 'text',
          value: ' folder. Serve the ',
          position: {
            start: { line: 96, column: 31, offset: 3102 },
            end: { line: 96, column: 50, offset: 3121 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 96, column: 50, offset: 3121 },
            end: { line: 96, column: 58, offset: 3129 }
          }
        },
        {
          type: 'text',
          value: ' folder with the following command:',
          position: {
            start: { line: 96, column: 58, offset: 3129 },
            end: { line: 96, column: 93, offset: 3164 }
          }
        }
      ],
      position: {
        start: { line: 96, column: 1, offset: 3072 },
        end: { line: 96, column: 93, offset: 3164 }
      }
    },
    {
      type: 'code',
      lang: 'sh',
      meta: null,
      value: 'static-web-server --port=8080 --root=./public',
      position: {
        start: { line: 97, column: 1, offset: 3165 },
        end: { line: 99, column: 4, offset: 3220 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Finally, navigate to ',
          position: {
            start: { line: 101, column: 1, offset: 3222 },
            end: { line: 101, column: 22, offset: 3243 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http://localhost:8080/',
          position: {
            start: { line: 101, column: 22, offset: 3243 },
            end: { line: 101, column: 46, offset: 3267 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 101, column: 46, offset: 3267 },
            end: { line: 101, column: 47, offset: 3268 }
          }
        }
      ],
      position: {
        start: { line: 101, column: 1, offset: 3222 },
        end: { line: 101, column: 47, offset: 3268 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Getting Started with React',
          position: {
            start: { line: 103, column: 4, offset: 3273 },
            end: { line: 103, column: 30, offset: 3299 }
          }
        }
      ],
      position: {
        start: { line: 103, column: 1, offset: 3270 },
        end: { line: 103, column: 30, offset: 3299 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://react.dev/',
          children: [
            {
              type: 'text',
              value: 'React',
              position: {
                start: { line: 104, column: 2, offset: 3301 },
                end: { line: 104, column: 7, offset: 3306 }
              }
            }
          ],
          position: {
            start: { line: 104, column: 1, offset: 3300 },
            end: { line: 104, column: 28, offset: 3327 }
          }
        },
        {
          type: 'text',
          value: ' is a library and paradigm for creating web and native interfaces in JavaScript. If you are new to React, please watch this ',
          position: {
            start: { line: 104, column: 28, offset: 3327 },
            end: { line: 104, column: 152, offset: 3451 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://www.instagram.com/p/DeVlsXRuVzU/',
          children: [
            {
              type: 'text',
              value: 'video',
              position: {
                start: { line: 104, column: 153, offset: 3452 },
                end: { line: 104, column: 158, offset: 3457 }
              }
            }
          ],
          position: {
            start: { line: 104, column: 152, offset: 3451 },
            end: { line: 104, column: 201, offset: 3500 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 104, column: 201, offset: 3500 },
            end: { line: 104, column: 202, offset: 3501 }
          }
        }
      ],
      position: {
        start: { line: 104, column: 1, offset: 3300 },
        end: { line: 104, column: 202, offset: 3501 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here is a project structure for a website made with React.',
          position: {
            start: { line: 106, column: 1, offset: 3503 },
            end: { line: 106, column: 59, offset: 3561 }
          }
        }
      ],
      position: {
        start: { line: 106, column: 1, offset: 3503 },
        end: { line: 106, column: 59, offset: 3561 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'public/\n    index.html\n    styles.css\n    index.js',
      position: {
        start: { line: 107, column: 1, offset: 3562 },
        end: { line: 112, column: 4, offset: 3620 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to the ',
          position: {
            start: { line: 114, column: 1, offset: 3622 },
            end: { line: 114, column: 17, offset: 3638 }
          }
        },
        {
          type: 'inlineCode',
          value: 'index.html',
          position: {
            start: { line: 114, column: 17, offset: 3638 },
            end: { line: 114, column: 29, offset: 3650 }
          }
        },
        {
          type: 'text',
          value: ' file.',
          position: {
            start: { line: 114, column: 29, offset: 3650 },
            end: { line: 114, column: 35, offset: 3656 }
          }
        }
      ],
      position: {
        start: { line: 114, column: 1, offset: 3622 },
        end: { line: 114, column: 35, offset: 3656 }
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <title>Welcome to Vanilla Microfrontends with React.</title>\n' +
        '\n' +
        '  <link rel="stylesheet" href="/styles.css" />\n' +
        '</head>\n' +
        '<body>\n' +
        '  <div id="react-root"></div>\n' +
        '\n' +
        '  <script src="https://cdn.jsdelivr.net/npm/arche"></script>\n' +
        '  <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>\n' +
        '  <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>\n' +
        '  <script src="/index.js"></script>\n' +
        '</body>\n' +
        '</html>',
      position: {
        start: { line: 115, column: 1, offset: 3657 },
        end: { line: 133, column: 4, offset: 4213 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to ',
          position: {
            start: { line: 135, column: 1, offset: 4215 },
            end: { line: 135, column: 13, offset: 4227 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styles.css',
          position: {
            start: { line: 135, column: 13, offset: 4227 },
            end: { line: 135, column: 25, offset: 4239 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 135, column: 25, offset: 4239 },
            end: { line: 135, column: 26, offset: 4240 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 1, offset: 4215 },
        end: { line: 135, column: 26, offset: 4240 }
      }
    },
    {
      type: 'code',
      lang: 'css',
      meta: null,
      value: 'body {\n' +
        '  color: #FFF;\n' +
        '  background-color: #7FB665;\n' +
        '}\n' +
        '\n' +
        'h1 {\n' +
        '  font-size: 32px;\n' +
        '}\n' +
        '\n' +
        'p {\n' +
        '  font-size: 14px;\n' +
        '}\n' +
        '\n' +
        '#click-example {\n' +
        '  margin-top: 20px;\n' +
        '}',
      position: {
        start: { line: 136, column: 1, offset: 4241 },
        end: { line: 153, column: 4, offset: 4397 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to ',
          position: {
            start: { line: 155, column: 1, offset: 4399 },
            end: { line: 155, column: 13, offset: 4411 }
          }
        },
        {
          type: 'inlineCode',
          value: 'index.js',
          position: {
            start: { line: 155, column: 13, offset: 4411 },
            end: { line: 155, column: 23, offset: 4421 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 155, column: 23, offset: 4421 },
            end: { line: 155, column: 24, offset: 4422 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 4399 },
        end: { line: 155, column: 24, offset: 4422 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React)\n' +
        'const { Div, H1, P, Button } = ReactElement\n' +
        'const { useState } = React\n' +
        '\n' +
        'const ClickExample = ReactElement(() => {\n' +
        '  const [count, setCount] = useState(0)\n' +
        '\n' +
        "  return Div({ id: 'click-example' }, [\n" +
        '    P(`You clicked ${count} times`),\n' +
        '    Button({\n' +
        '      onClick() {\n' +
        '        setCount(count + 1)\n' +
        '      },\n' +
        "    }, 'Click me'),\n" +
        '  ])\n' +
        '})\n' +
        '\n' +
        'const Root = ReactElement(() => {\n' +
        '  return [\n' +
        "    H1('Welcome to Vanilla Microfrontends with React.'),\n" +
        "    P('All of the content on this page was added with React.'),\n" +
        '    ClickExample(),\n' +
        '  ]\n' +
        '})\n' +
        '\n' +
        "ReactDOM.render(Root(), document.getElementById('react-root'))",
      position: {
        start: { line: 156, column: 1, offset: 4423 },
        end: { line: 183, column: 4, offset: 5060 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Serve the ',
          position: {
            start: { line: 185, column: 1, offset: 5062 },
            end: { line: 185, column: 11, offset: 5072 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 185, column: 11, offset: 5072 },
            end: { line: 185, column: 19, offset: 5080 }
          }
        },
        {
          type: 'text',
          value: ' folder.',
          position: {
            start: { line: 185, column: 19, offset: 5080 },
            end: { line: 185, column: 27, offset: 5088 }
          }
        }
      ],
      position: {
        start: { line: 185, column: 1, offset: 5062 },
        end: { line: 185, column: 27, offset: 5088 }
      }
    },
    {
      type: 'code',
      lang: 'sh',
      meta: null,
      value: 'static-web-server --port=8080 --root=./public',
      position: {
        start: { line: 187, column: 1, offset: 5090 },
        end: { line: 189, column: 4, offset: 5145 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Navigate to ',
          position: {
            start: { line: 191, column: 1, offset: 5147 },
            end: { line: 191, column: 13, offset: 5159 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http://localhost:8080/',
          position: {
            start: { line: 191, column: 13, offset: 5159 },
            end: { line: 191, column: 37, offset: 5183 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 191, column: 37, offset: 5183 },
            end: { line: 191, column: 38, offset: 5184 }
          }
        }
      ],
      position: {
        start: { line: 191, column: 1, offset: 5147 },
        end: { line: 191, column: 38, offset: 5184 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'React Tips',
          position: {
            start: { line: 193, column: 4, offset: 5189 },
            end: { line: 193, column: 14, offset: 5199 }
          }
        }
      ],
      position: {
        start: { line: 193, column: 1, offset: 5186 },
        end: { line: 193, column: 14, offset: 5199 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Global',
          position: {
            start: { line: 195, column: 5, offset: 5205 },
            end: { line: 195, column: 11, offset: 5211 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 1, offset: 5201 },
        end: { line: 195, column: 11, offset: 5211 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 196, column: 1, offset: 5212 },
            end: { line: 196, column: 5, offset: 5216 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 196, column: 5, offset: 5216 },
            end: { line: 196, column: 19, offset: 5230 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 196, column: 19, offset: 5230 },
            end: { line: 196, column: 63, offset: 5274 }
          }
        }
      ],
      position: {
        start: { line: 196, column: 1, offset: 5212 },
        end: { line: 196, column: 63, offset: 5274 }
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
        start: { line: 197, column: 1, offset: 5275 },
        end: { line: 211, column: 4, offset: 5600 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'React Context',
          position: {
            start: { line: 213, column: 5, offset: 5606 },
            end: { line: 213, column: 18, offset: 5619 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 5602 },
        end: { line: 213, column: 18, offset: 5619 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To have React Context with Arche, wrap ',
          position: {
            start: { line: 214, column: 1, offset: 5620 },
            end: { line: 214, column: 40, offset: 5659 }
          }
        },
        {
          type: 'inlineCode',
          value: 'YourContext.Provider',
          position: {
            start: { line: 214, column: 40, offset: 5659 },
            end: { line: 214, column: 62, offset: 5681 }
          }
        },
        {
          type: 'text',
          value: ' with ',
          position: {
            start: { line: 214, column: 62, offset: 5681 },
            end: { line: 214, column: 68, offset: 5687 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 214, column: 68, offset: 5687 },
            end: { line: 214, column: 82, offset: 5701 }
          }
        },
        {
          type: 'text',
          value: ' and supply ',
          position: {
            start: { line: 214, column: 82, offset: 5701 },
            end: { line: 214, column: 94, offset: 5713 }
          }
        },
        {
          type: 'inlineCode',
          value: 'value',
          position: {
            start: { line: 214, column: 94, offset: 5713 },
            end: { line: 214, column: 101, offset: 5720 }
          }
        },
        {
          type: 'text',
          value: ' as a prop, specifying children in the next argument.',
          position: {
            start: { line: 214, column: 101, offset: 5720 },
            end: { line: 214, column: 154, offset: 5773 }
          }
        }
      ],
      position: {
        start: { line: 214, column: 1, offset: 5620 },
        end: { line: 214, column: 154, offset: 5773 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JSX example:',
          position: {
            start: { line: 216, column: 1, offset: 5775 },
            end: { line: 216, column: 13, offset: 5787 }
          }
        }
      ],
      position: {
        start: { line: 216, column: 1, offset: 5775 },
        end: { line: 216, column: 13, offset: 5787 }
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
        start: { line: 217, column: 1, offset: 5788 },
        end: { line: 231, column: 4, offset: 6062 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Translates to the following with Arche:',
          position: {
            start: { line: 233, column: 1, offset: 6064 },
            end: { line: 233, column: 40, offset: 6103 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 1, offset: 6064 },
        end: { line: 233, column: 40, offset: 6103 }
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
        start: { line: 234, column: 1, offset: 6104 },
        end: { line: 242, column: 4, offset: 6350 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'React Fragments',
          position: {
            start: { line: 244, column: 5, offset: 6356 },
            end: { line: 244, column: 20, offset: 6371 }
          }
        }
      ],
      position: {
        start: { line: 244, column: 1, offset: 6352 },
        end: { line: 244, column: 20, offset: 6371 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For React fragments (',
          position: {
            start: { line: 245, column: 1, offset: 6372 },
            end: { line: 245, column: 22, offset: 6393 }
          }
        },
        {
          type: 'inlineCode',
          value: '<>',
          position: {
            start: { line: 245, column: 22, offset: 6393 },
            end: { line: 245, column: 26, offset: 6397 }
          }
        },
        {
          type: 'text',
          value: '), just return an array.',
          position: {
            start: { line: 245, column: 26, offset: 6397 },
            end: { line: 245, column: 50, offset: 6421 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 6372 },
        end: { line: 245, column: 50, offset: 6421 }
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
        start: { line: 247, column: 1, offset: 6423 },
        end: { line: 262, column: 4, offset: 6853 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Working with Styled Components',
          position: {
            start: { line: 264, column: 5, offset: 6859 },
            end: { line: 264, column: 35, offset: 6889 }
          }
        }
      ],
      position: {
        start: { line: 264, column: 1, offset: 6855 },
        end: { line: 264, column: 35, offset: 6889 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To install Styled Components, add the following script to your Arche and React scripts.',
          position: {
            start: { line: 265, column: 1, offset: 6890 },
            end: { line: 265, column: 88, offset: 6977 }
          }
        }
      ],
      position: {
        start: { line: 265, column: 1, offset: 6890 },
        end: { line: 265, column: 88, offset: 6977 }
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<script src="https://cdn.jsdelivr.net/npm/styled-components/dist/styled-components.min.js"></script>',
      position: {
        start: { line: 266, column: 1, offset: 6978 },
        end: { line: 268, column: 4, offset: 7090 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche accepts a ',
          position: {
            start: { line: 270, column: 1, offset: 7092 },
            end: { line: 270, column: 17, offset: 7108 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styled',
          position: {
            start: { line: 270, column: 17, offset: 7108 },
            end: { line: 270, column: 25, offset: 7116 }
          }
        },
        {
          type: 'text',
          value: ' option from css-in-js libraries like ',
          position: {
            start: { line: 270, column: 25, offset: 7116 },
            end: { line: 270, column: 63, offset: 7154 }
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
                start: { line: 270, column: 64, offset: 7155 },
                end: { line: 270, column: 81, offset: 7172 }
              }
            }
          ],
          position: {
            start: { line: 270, column: 63, offset: 7154 },
            end: { line: 270, column: 114, offset: 7205 }
          }
        },
        {
          type: 'text',
          value: ' to enable a ',
          position: {
            start: { line: 270, column: 114, offset: 7205 },
            end: { line: 270, column: 127, offset: 7218 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 270, column: 127, offset: 7218 },
            end: { line: 270, column: 132, offset: 7223 }
          }
        },
        {
          type: 'text',
          value: ' prop on ',
          position: {
            start: { line: 270, column: 132, offset: 7223 },
            end: { line: 270, column: 141, offset: 7232 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 270, column: 141, offset: 7232 },
            end: { line: 270, column: 155, offset: 7246 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 270, column: 155, offset: 7246 },
            end: { line: 270, column: 160, offset: 7251 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedReactElement',
          position: {
            start: { line: 270, column: 160, offset: 7251 },
            end: { line: 270, column: 179, offset: 7270 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 270, column: 179, offset: 7270 },
            end: { line: 270, column: 180, offset: 7271 }
          }
        }
      ],
      position: {
        start: { line: 270, column: 1, offset: 7092 },
        end: { line: 270, column: 180, offset: 7271 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React, { styled })',
      position: {
        start: { line: 271, column: 1, offset: 7272 },
        end: { line: 273, column: 4, offset: 7335 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Elements can now specify a ',
          position: {
            start: { line: 275, column: 1, offset: 7337 },
            end: { line: 275, column: 28, offset: 7364 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 275, column: 28, offset: 7364 },
            end: { line: 275, column: 33, offset: 7369 }
          }
        },
        {
          type: 'text',
          value: ' prop for css-in-js.',
          position: {
            start: { line: 275, column: 33, offset: 7369 },
            end: { line: 275, column: 53, offset: 7389 }
          }
        }
      ],
      position: {
        start: { line: 275, column: 1, offset: 7337 },
        end: { line: 275, column: 53, offset: 7389 }
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
        start: { line: 276, column: 1, offset: 7390 },
        end: { line: 294, column: 4, offset: 7774 }
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
            start: { line: 296, column: 3, offset: 7778 },
            end: { line: 296, column: 15, offset: 7790 }
          }
        }
      ],
      position: {
        start: { line: 296, column: 1, offset: 7776 },
        end: { line: 296, column: 15, offset: 7790 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 297, column: 1, offset: 7791 },
            end: { line: 297, column: 260, offset: 8050 }
          }
        }
      ],
      position: {
        start: { line: 297, column: 1, offset: 7791 },
        end: { line: 297, column: 260, offset: 8050 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. If you are interested in contributing, the ',
          position: {
            start: { line: 299, column: 1, offset: 8052 },
            end: { line: 299, column: 121, offset: 8172 }
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
                start: { line: 299, column: 122, offset: 8173 },
                end: { line: 299, column: 133, offset: 8184 }
              }
            }
          ],
          position: {
            start: { line: 299, column: 121, offset: 8172 },
            end: { line: 299, column: 226, offset: 8277 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 299, column: 226, offset: 8277 },
            end: { line: 299, column: 256, offset: 8307 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 8052 },
        end: { line: 299, column: 256, offset: 8307 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 301, column: 1, offset: 8309 },
            end: { line: 301, column: 33, offset: 8341 }
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
                start: { line: 301, column: 34, offset: 8342 },
                end: { line: 301, column: 49, offset: 8357 }
              }
            }
          ],
          position: {
            start: { line: 301, column: 33, offset: 8341 },
            end: { line: 301, column: 114, offset: 8422 }
          }
        }
      ],
      position: {
        start: { line: 301, column: 1, offset: 8309 },
        end: { line: 301, column: 114, offset: 8422 }
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
            start: { line: 303, column: 3, offset: 8426 },
            end: { line: 303, column: 10, offset: 8433 }
          }
        }
      ],
      position: {
        start: { line: 303, column: 1, offset: 8424 },
        end: { line: 303, column: 10, offset: 8433 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche is distributed under the ',
          position: {
            start: { line: 304, column: 1, offset: 8434 },
            end: { line: 304, column: 32, offset: 8465 }
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
                start: { line: 304, column: 33, offset: 8466 },
                end: { line: 304, column: 46, offset: 8479 }
              }
            }
          ],
          position: {
            start: { line: 304, column: 32, offset: 8465 },
            end: { line: 304, column: 98, offset: 8531 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 304, column: 98, offset: 8531 },
            end: { line: 304, column: 99, offset: 8532 }
          }
        }
      ],
      position: {
        start: { line: 304, column: 1, offset: 8434 },
        end: { line: 304, column: 99, offset: 8532 }
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
            start: { line: 306, column: 3, offset: 8536 },
            end: { line: 306, column: 10, offset: 8543 }
          }
        }
      ],
      position: {
        start: { line: 306, column: 1, offset: 8534 },
        end: { line: 306, column: 10, offset: 8543 }
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
                    start: { line: 307, column: 4, offset: 8547 },
                    end: { line: 307, column: 31, offset: 8574 }
                  }
                }
              ],
              position: {
                start: { line: 307, column: 4, offset: 8547 },
                end: { line: 307, column: 31, offset: 8574 }
              }
            }
          ],
          position: {
            start: { line: 307, column: 2, offset: 8545 },
            end: { line: 307, column: 31, offset: 8574 }
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
                    start: { line: 308, column: 4, offset: 8578 },
                    end: { line: 308, column: 30, offset: 8604 }
                  }
                }
              ],
              position: {
                start: { line: 308, column: 4, offset: 8578 },
                end: { line: 308, column: 30, offset: 8604 }
              }
            }
          ],
          position: {
            start: { line: 308, column: 2, offset: 8576 },
            end: { line: 308, column: 30, offset: 8604 }
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
                    start: { line: 309, column: 4, offset: 8608 },
                    end: { line: 309, column: 31, offset: 8635 }
                  }
                }
              ],
              position: {
                start: { line: 309, column: 4, offset: 8608 },
                end: { line: 309, column: 31, offset: 8635 }
              }
            }
          ],
          position: {
            start: { line: 309, column: 2, offset: 8606 },
            end: { line: 309, column: 31, offset: 8635 }
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
                    start: { line: 310, column: 4, offset: 8639 },
                    end: { line: 310, column: 28, offset: 8663 }
                  }
                }
              ],
              position: {
                start: { line: 310, column: 4, offset: 8639 },
                end: { line: 310, column: 28, offset: 8663 }
              }
            }
          ],
          position: {
            start: { line: 310, column: 2, offset: 8637 },
            end: { line: 310, column: 28, offset: 8663 }
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
                    start: { line: 311, column: 4, offset: 8667 },
                    end: { line: 311, column: 32, offset: 8695 }
                  }
                }
              ],
              position: {
                start: { line: 311, column: 4, offset: 8667 },
                end: { line: 311, column: 32, offset: 8695 }
              }
            }
          ],
          position: {
            start: { line: 311, column: 2, offset: 8665 },
            end: { line: 311, column: 32, offset: 8695 }
          }
        }
      ],
      position: {
        start: { line: 307, column: 2, offset: 8545 },
        end: { line: 311, column: 32, offset: 8695 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 312, column: 1, offset: 8696 }
  }
}