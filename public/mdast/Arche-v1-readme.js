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
      value: 'public/\n    index.html\n    styles.css\n    ClickExample.js\n    index.js',
      position: {
        start: { line: 107, column: 1, offset: 3562 },
        end: { line: 113, column: 4, offset: 3640 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to the ',
          position: {
            start: { line: 115, column: 1, offset: 3642 },
            end: { line: 115, column: 17, offset: 3658 }
          }
        },
        {
          type: 'inlineCode',
          value: 'index.html',
          position: {
            start: { line: 115, column: 17, offset: 3658 },
            end: { line: 115, column: 29, offset: 3670 }
          }
        },
        {
          type: 'text',
          value: ' file.',
          position: {
            start: { line: 115, column: 29, offset: 3670 },
            end: { line: 115, column: 35, offset: 3676 }
          }
        }
      ],
      position: {
        start: { line: 115, column: 1, offset: 3642 },
        end: { line: 115, column: 35, offset: 3676 }
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
        start: { line: 116, column: 1, offset: 3677 },
        end: { line: 134, column: 4, offset: 4233 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to ',
          position: {
            start: { line: 136, column: 1, offset: 4235 },
            end: { line: 136, column: 13, offset: 4247 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styles.css',
          position: {
            start: { line: 136, column: 13, offset: 4247 },
            end: { line: 136, column: 25, offset: 4259 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 136, column: 25, offset: 4259 },
            end: { line: 136, column: 26, offset: 4260 }
          }
        }
      ],
      position: {
        start: { line: 136, column: 1, offset: 4235 },
        end: { line: 136, column: 26, offset: 4260 }
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
        start: { line: 137, column: 1, offset: 4261 },
        end: { line: 154, column: 4, offset: 4417 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to ',
          position: {
            start: { line: 156, column: 1, offset: 4419 },
            end: { line: 156, column: 13, offset: 4431 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClickExample.js',
          position: {
            start: { line: 156, column: 13, offset: 4431 },
            end: { line: 156, column: 30, offset: 4448 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 156, column: 30, offset: 4448 },
            end: { line: 156, column: 31, offset: 4449 }
          }
        }
      ],
      position: {
        start: { line: 156, column: 1, offset: 4419 },
        end: { line: 156, column: 31, offset: 4449 }
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
        'export default ClickExample',
      position: {
        start: { line: 157, column: 1, offset: 4450 },
        end: { line: 176, column: 4, offset: 4854 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to ',
          position: {
            start: { line: 178, column: 1, offset: 4856 },
            end: { line: 178, column: 13, offset: 4868 }
          }
        },
        {
          type: 'inlineCode',
          value: 'index.js',
          position: {
            start: { line: 178, column: 13, offset: 4868 },
            end: { line: 178, column: 23, offset: 4878 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 178, column: 23, offset: 4878 },
            end: { line: 178, column: 24, offset: 4879 }
          }
        }
      ],
      position: {
        start: { line: 178, column: 1, offset: 4856 },
        end: { line: 178, column: 24, offset: 4879 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'import ClickExample from "./ClickExample.js"\n' +
        '\n' +
        'const ReactElement = Arche(React)\n' +
        'const { Div, H1, P } = ReactElement\n' +
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
        start: { line: 179, column: 1, offset: 4880 },
        end: { line: 194, column: 4, offset: 5271 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Serve the ',
          position: {
            start: { line: 196, column: 1, offset: 5273 },
            end: { line: 196, column: 11, offset: 5283 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 196, column: 11, offset: 5283 },
            end: { line: 196, column: 19, offset: 5291 }
          }
        },
        {
          type: 'text',
          value: ' folder.',
          position: {
            start: { line: 196, column: 19, offset: 5291 },
            end: { line: 196, column: 27, offset: 5299 }
          }
        }
      ],
      position: {
        start: { line: 196, column: 1, offset: 5273 },
        end: { line: 196, column: 27, offset: 5299 }
      }
    },
    {
      type: 'code',
      lang: 'sh',
      meta: null,
      value: 'static-web-server --port=8080 --root=./public',
      position: {
        start: { line: 198, column: 1, offset: 5301 },
        end: { line: 200, column: 4, offset: 5356 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Navigate to ',
          position: {
            start: { line: 202, column: 1, offset: 5358 },
            end: { line: 202, column: 13, offset: 5370 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http://localhost:8080/',
          position: {
            start: { line: 202, column: 13, offset: 5370 },
            end: { line: 202, column: 37, offset: 5394 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 202, column: 37, offset: 5394 },
            end: { line: 202, column: 38, offset: 5395 }
          }
        }
      ],
      position: {
        start: { line: 202, column: 1, offset: 5358 },
        end: { line: 202, column: 38, offset: 5395 }
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
            start: { line: 204, column: 4, offset: 5400 },
            end: { line: 204, column: 14, offset: 5410 }
          }
        }
      ],
      position: {
        start: { line: 204, column: 1, offset: 5397 },
        end: { line: 204, column: 14, offset: 5410 }
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
            start: { line: 206, column: 5, offset: 5416 },
            end: { line: 206, column: 11, offset: 5422 }
          }
        }
      ],
      position: {
        start: { line: 206, column: 1, offset: 5412 },
        end: { line: 206, column: 11, offset: 5422 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 207, column: 1, offset: 5423 },
            end: { line: 207, column: 5, offset: 5427 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 207, column: 5, offset: 5427 },
            end: { line: 207, column: 19, offset: 5441 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 207, column: 19, offset: 5441 },
            end: { line: 207, column: 63, offset: 5485 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 5423 },
        end: { line: 207, column: 63, offset: 5485 }
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
        start: { line: 208, column: 1, offset: 5486 },
        end: { line: 222, column: 4, offset: 5811 }
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
            start: { line: 224, column: 5, offset: 5817 },
            end: { line: 224, column: 18, offset: 5830 }
          }
        }
      ],
      position: {
        start: { line: 224, column: 1, offset: 5813 },
        end: { line: 224, column: 18, offset: 5830 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To have React Context with Arche, wrap ',
          position: {
            start: { line: 225, column: 1, offset: 5831 },
            end: { line: 225, column: 40, offset: 5870 }
          }
        },
        {
          type: 'inlineCode',
          value: 'YourContext.Provider',
          position: {
            start: { line: 225, column: 40, offset: 5870 },
            end: { line: 225, column: 62, offset: 5892 }
          }
        },
        {
          type: 'text',
          value: ' with ',
          position: {
            start: { line: 225, column: 62, offset: 5892 },
            end: { line: 225, column: 68, offset: 5898 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 225, column: 68, offset: 5898 },
            end: { line: 225, column: 82, offset: 5912 }
          }
        },
        {
          type: 'text',
          value: ' and supply ',
          position: {
            start: { line: 225, column: 82, offset: 5912 },
            end: { line: 225, column: 94, offset: 5924 }
          }
        },
        {
          type: 'inlineCode',
          value: 'value',
          position: {
            start: { line: 225, column: 94, offset: 5924 },
            end: { line: 225, column: 101, offset: 5931 }
          }
        },
        {
          type: 'text',
          value: ' as a prop, specifying children in the next argument.',
          position: {
            start: { line: 225, column: 101, offset: 5931 },
            end: { line: 225, column: 154, offset: 5984 }
          }
        }
      ],
      position: {
        start: { line: 225, column: 1, offset: 5831 },
        end: { line: 225, column: 154, offset: 5984 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JSX example:',
          position: {
            start: { line: 227, column: 1, offset: 5986 },
            end: { line: 227, column: 13, offset: 5998 }
          }
        }
      ],
      position: {
        start: { line: 227, column: 1, offset: 5986 },
        end: { line: 227, column: 13, offset: 5998 }
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
        start: { line: 228, column: 1, offset: 5999 },
        end: { line: 242, column: 4, offset: 6273 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Translates to the following with Arche:',
          position: {
            start: { line: 244, column: 1, offset: 6275 },
            end: { line: 244, column: 40, offset: 6314 }
          }
        }
      ],
      position: {
        start: { line: 244, column: 1, offset: 6275 },
        end: { line: 244, column: 40, offset: 6314 }
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
        start: { line: 245, column: 1, offset: 6315 },
        end: { line: 253, column: 4, offset: 6561 }
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
            start: { line: 255, column: 5, offset: 6567 },
            end: { line: 255, column: 20, offset: 6582 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 6563 },
        end: { line: 255, column: 20, offset: 6582 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For React fragments (',
          position: {
            start: { line: 256, column: 1, offset: 6583 },
            end: { line: 256, column: 22, offset: 6604 }
          }
        },
        {
          type: 'inlineCode',
          value: '<>',
          position: {
            start: { line: 256, column: 22, offset: 6604 },
            end: { line: 256, column: 26, offset: 6608 }
          }
        },
        {
          type: 'text',
          value: '), just return an array.',
          position: {
            start: { line: 256, column: 26, offset: 6608 },
            end: { line: 256, column: 50, offset: 6632 }
          }
        }
      ],
      position: {
        start: { line: 256, column: 1, offset: 6583 },
        end: { line: 256, column: 50, offset: 6632 }
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
        start: { line: 258, column: 1, offset: 6634 },
        end: { line: 273, column: 4, offset: 7064 }
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
            start: { line: 275, column: 5, offset: 7070 },
            end: { line: 275, column: 35, offset: 7100 }
          }
        }
      ],
      position: {
        start: { line: 275, column: 1, offset: 7066 },
        end: { line: 275, column: 35, offset: 7100 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To install Styled Components, add the following script to your Arche and React scripts.',
          position: {
            start: { line: 276, column: 1, offset: 7101 },
            end: { line: 276, column: 88, offset: 7188 }
          }
        }
      ],
      position: {
        start: { line: 276, column: 1, offset: 7101 },
        end: { line: 276, column: 88, offset: 7188 }
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<script src="https://cdn.jsdelivr.net/npm/styled-components/dist/styled-components.min.js"></script>',
      position: {
        start: { line: 277, column: 1, offset: 7189 },
        end: { line: 279, column: 4, offset: 7301 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche accepts a ',
          position: {
            start: { line: 281, column: 1, offset: 7303 },
            end: { line: 281, column: 17, offset: 7319 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styled',
          position: {
            start: { line: 281, column: 17, offset: 7319 },
            end: { line: 281, column: 25, offset: 7327 }
          }
        },
        {
          type: 'text',
          value: ' option from css-in-js libraries like ',
          position: {
            start: { line: 281, column: 25, offset: 7327 },
            end: { line: 281, column: 63, offset: 7365 }
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
                start: { line: 281, column: 64, offset: 7366 },
                end: { line: 281, column: 81, offset: 7383 }
              }
            }
          ],
          position: {
            start: { line: 281, column: 63, offset: 7365 },
            end: { line: 281, column: 114, offset: 7416 }
          }
        },
        {
          type: 'text',
          value: ' to enable a ',
          position: {
            start: { line: 281, column: 114, offset: 7416 },
            end: { line: 281, column: 127, offset: 7429 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 281, column: 127, offset: 7429 },
            end: { line: 281, column: 132, offset: 7434 }
          }
        },
        {
          type: 'text',
          value: ' prop on ',
          position: {
            start: { line: 281, column: 132, offset: 7434 },
            end: { line: 281, column: 141, offset: 7443 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 281, column: 141, offset: 7443 },
            end: { line: 281, column: 155, offset: 7457 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 281, column: 155, offset: 7457 },
            end: { line: 281, column: 160, offset: 7462 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedReactElement',
          position: {
            start: { line: 281, column: 160, offset: 7462 },
            end: { line: 281, column: 179, offset: 7481 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 281, column: 179, offset: 7481 },
            end: { line: 281, column: 180, offset: 7482 }
          }
        }
      ],
      position: {
        start: { line: 281, column: 1, offset: 7303 },
        end: { line: 281, column: 180, offset: 7482 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React, { styled })',
      position: {
        start: { line: 282, column: 1, offset: 7483 },
        end: { line: 284, column: 4, offset: 7546 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Elements can now specify a ',
          position: {
            start: { line: 286, column: 1, offset: 7548 },
            end: { line: 286, column: 28, offset: 7575 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 286, column: 28, offset: 7575 },
            end: { line: 286, column: 33, offset: 7580 }
          }
        },
        {
          type: 'text',
          value: ' prop for css-in-js.',
          position: {
            start: { line: 286, column: 33, offset: 7580 },
            end: { line: 286, column: 53, offset: 7600 }
          }
        }
      ],
      position: {
        start: { line: 286, column: 1, offset: 7548 },
        end: { line: 286, column: 53, offset: 7600 }
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
        start: { line: 287, column: 1, offset: 7601 },
        end: { line: 305, column: 4, offset: 7985 }
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
            start: { line: 307, column: 3, offset: 7989 },
            end: { line: 307, column: 15, offset: 8001 }
          }
        }
      ],
      position: {
        start: { line: 307, column: 1, offset: 7987 },
        end: { line: 307, column: 15, offset: 8001 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 308, column: 1, offset: 8002 },
            end: { line: 308, column: 260, offset: 8261 }
          }
        }
      ],
      position: {
        start: { line: 308, column: 1, offset: 8002 },
        end: { line: 308, column: 260, offset: 8261 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. If you are interested in contributing, the ',
          position: {
            start: { line: 310, column: 1, offset: 8263 },
            end: { line: 310, column: 121, offset: 8383 }
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
                start: { line: 310, column: 122, offset: 8384 },
                end: { line: 310, column: 133, offset: 8395 }
              }
            }
          ],
          position: {
            start: { line: 310, column: 121, offset: 8383 },
            end: { line: 310, column: 226, offset: 8488 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 310, column: 226, offset: 8488 },
            end: { line: 310, column: 256, offset: 8518 }
          }
        }
      ],
      position: {
        start: { line: 310, column: 1, offset: 8263 },
        end: { line: 310, column: 256, offset: 8518 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 312, column: 1, offset: 8520 },
            end: { line: 312, column: 33, offset: 8552 }
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
                start: { line: 312, column: 34, offset: 8553 },
                end: { line: 312, column: 49, offset: 8568 }
              }
            }
          ],
          position: {
            start: { line: 312, column: 33, offset: 8552 },
            end: { line: 312, column: 114, offset: 8633 }
          }
        }
      ],
      position: {
        start: { line: 312, column: 1, offset: 8520 },
        end: { line: 312, column: 114, offset: 8633 }
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
            start: { line: 314, column: 3, offset: 8637 },
            end: { line: 314, column: 10, offset: 8644 }
          }
        }
      ],
      position: {
        start: { line: 314, column: 1, offset: 8635 },
        end: { line: 314, column: 10, offset: 8644 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche is distributed under the ',
          position: {
            start: { line: 315, column: 1, offset: 8645 },
            end: { line: 315, column: 32, offset: 8676 }
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
                start: { line: 315, column: 33, offset: 8677 },
                end: { line: 315, column: 46, offset: 8690 }
              }
            }
          ],
          position: {
            start: { line: 315, column: 32, offset: 8676 },
            end: { line: 315, column: 98, offset: 8742 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 315, column: 98, offset: 8742 },
            end: { line: 315, column: 99, offset: 8743 }
          }
        }
      ],
      position: {
        start: { line: 315, column: 1, offset: 8645 },
        end: { line: 315, column: 99, offset: 8743 }
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
            start: { line: 317, column: 3, offset: 8747 },
            end: { line: 317, column: 10, offset: 8754 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 1, offset: 8745 },
        end: { line: 317, column: 10, offset: 8754 }
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
                    start: { line: 318, column: 4, offset: 8758 },
                    end: { line: 318, column: 31, offset: 8785 }
                  }
                }
              ],
              position: {
                start: { line: 318, column: 4, offset: 8758 },
                end: { line: 318, column: 31, offset: 8785 }
              }
            }
          ],
          position: {
            start: { line: 318, column: 2, offset: 8756 },
            end: { line: 318, column: 31, offset: 8785 }
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
                    start: { line: 319, column: 4, offset: 8789 },
                    end: { line: 319, column: 30, offset: 8815 }
                  }
                }
              ],
              position: {
                start: { line: 319, column: 4, offset: 8789 },
                end: { line: 319, column: 30, offset: 8815 }
              }
            }
          ],
          position: {
            start: { line: 319, column: 2, offset: 8787 },
            end: { line: 319, column: 30, offset: 8815 }
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
                    start: { line: 320, column: 4, offset: 8819 },
                    end: { line: 320, column: 31, offset: 8846 }
                  }
                }
              ],
              position: {
                start: { line: 320, column: 4, offset: 8819 },
                end: { line: 320, column: 31, offset: 8846 }
              }
            }
          ],
          position: {
            start: { line: 320, column: 2, offset: 8817 },
            end: { line: 320, column: 31, offset: 8846 }
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
                    start: { line: 321, column: 4, offset: 8850 },
                    end: { line: 321, column: 28, offset: 8874 }
                  }
                }
              ],
              position: {
                start: { line: 321, column: 4, offset: 8850 },
                end: { line: 321, column: 28, offset: 8874 }
              }
            }
          ],
          position: {
            start: { line: 321, column: 2, offset: 8848 },
            end: { line: 321, column: 28, offset: 8874 }
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
                    start: { line: 322, column: 4, offset: 8878 },
                    end: { line: 322, column: 32, offset: 8906 }
                  }
                }
              ],
              position: {
                start: { line: 322, column: 4, offset: 8878 },
                end: { line: 322, column: 32, offset: 8906 }
              }
            }
          ],
          position: {
            start: { line: 322, column: 2, offset: 8876 },
            end: { line: 322, column: 32, offset: 8906 }
          }
        }
      ],
      position: {
        start: { line: 318, column: 2, offset: 8756 },
        end: { line: 322, column: 32, offset: 8906 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 323, column: 1, offset: 8907 }
  }
}