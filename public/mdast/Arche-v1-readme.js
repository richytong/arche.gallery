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
          value: "Here's a project structure you can use. The ",
          position: {
            start: { line: 27, column: 1, offset: 1267 },
            end: { line: 27, column: 45, offset: 1311 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 27, column: 45, offset: 1311 },
            end: { line: 27, column: 53, offset: 1319 }
          }
        },
        {
          type: 'text',
          value: ' directory will have all of the files that will be public to the world wide web.',
          position: {
            start: { line: 27, column: 53, offset: 1319 },
            end: { line: 27, column: 133, offset: 1399 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1267 },
        end: { line: 27, column: 133, offset: 1399 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'public/\n    index.html\n    styles.css\n    index.js',
      position: {
        start: { line: 29, column: 1, offset: 1401 },
        end: { line: 34, column: 4, offset: 1459 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTML document of a web page loads JavaScript scripts and CSS stylesheets. JavaScript scripts are defined with ',
          position: {
            start: { line: 36, column: 1, offset: 1461 },
            end: { line: 36, column: 115, offset: 1575 }
          }
        },
        {
          type: 'inlineCode',
          value: '<script></script>',
          position: {
            start: { line: 36, column: 115, offset: 1575 },
            end: { line: 36, column: 134, offset: 1594 }
          }
        },
        {
          type: 'text',
          value: ' tags, and CSS stylesheets with ',
          position: {
            start: { line: 36, column: 134, offset: 1594 },
            end: { line: 36, column: 166, offset: 1626 }
          }
        },
        {
          type: 'inlineCode',
          value: '<link>',
          position: {
            start: { line: 36, column: 166, offset: 1626 },
            end: { line: 36, column: 174, offset: 1634 }
          }
        },
        {
          type: 'text',
          value: ' tags. Add this to ',
          position: {
            start: { line: 36, column: 174, offset: 1634 },
            end: { line: 36, column: 193, offset: 1653 }
          }
        },
        {
          type: 'inlineCode',
          value: 'index.html',
          position: {
            start: { line: 36, column: 193, offset: 1653 },
            end: { line: 36, column: 205, offset: 1665 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 36, column: 205, offset: 1665 },
            end: { line: 36, column: 206, offset: 1666 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 1461 },
        end: { line: 36, column: 206, offset: 1666 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTML document is read line by line, from top to bottom.',
          position: {
            start: { line: 38, column: 1, offset: 1668 },
            end: { line: 38, column: 60, offset: 1727 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1668 },
        end: { line: 38, column: 60, offset: 1727 }
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
        start: { line: 40, column: 1, offset: 1729 },
        end: { line: 57, column: 4, offset: 2192 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'CSS stylesheets are downloaded and read right after the HTML document. Add this to ',
          position: {
            start: { line: 59, column: 1, offset: 2194 },
            end: { line: 59, column: 84, offset: 2277 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styles.css',
          position: {
            start: { line: 59, column: 84, offset: 2277 },
            end: { line: 59, column: 96, offset: 2289 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 59, column: 96, offset: 2289 },
            end: { line: 59, column: 97, offset: 2290 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 2194 },
        end: { line: 59, column: 97, offset: 2290 }
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
        start: { line: 61, column: 1, offset: 2292 },
        end: { line: 74, column: 4, offset: 2408 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JavaScript scripts are run from where they are defined in the HTML. Add this to ',
          position: {
            start: { line: 76, column: 1, offset: 2410 },
            end: { line: 76, column: 81, offset: 2490 }
          }
        },
        {
          type: 'inlineCode',
          value: 'index.js',
          position: {
            start: { line: 76, column: 81, offset: 2490 },
            end: { line: 76, column: 91, offset: 2500 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 76, column: 91, offset: 2500 },
            end: { line: 76, column: 92, offset: 2501 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 2410 },
        end: { line: 76, column: 92, offset: 2501 }
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
        start: { line: 78, column: 1, offset: 2503 },
        end: { line: 87, column: 4, offset: 2725 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now all you have to do to see the website you just created is serve the ',
          position: {
            start: { line: 89, column: 1, offset: 2727 },
            end: { line: 89, column: 73, offset: 2799 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 89, column: 73, offset: 2799 },
            end: { line: 89, column: 81, offset: 2807 }
          }
        },
        {
          type: 'text',
          value: ' folder. I recommend installing the ',
          position: {
            start: { line: 89, column: 81, offset: 2807 },
            end: { line: 89, column: 117, offset: 2843 }
          }
        },
        {
          type: 'inlineCode',
          value: 'static-web-server',
          position: {
            start: { line: 89, column: 117, offset: 2843 },
            end: { line: 89, column: 136, offset: 2862 }
          }
        },
        {
          type: 'text',
          value: ' command line tool from ',
          position: {
            start: { line: 89, column: 136, offset: 2862 },
            end: { line: 89, column: 160, offset: 2886 }
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
                start: { line: 89, column: 161, offset: 2887 },
                end: { line: 89, column: 178, offset: 2904 }
              }
            }
          ],
          position: {
            start: { line: 89, column: 160, offset: 2886 },
            end: { line: 89, column: 211, offset: 2937 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 89, column: 211, offset: 2937 },
            end: { line: 89, column: 212, offset: 2938 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 2727 },
        end: { line: 89, column: 212, offset: 2938 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Install ',
          position: {
            start: { line: 91, column: 1, offset: 2940 },
            end: { line: 91, column: 9, offset: 2948 }
          }
        },
        {
          type: 'inlineCode',
          value: 'static-web-server',
          position: {
            start: { line: 91, column: 9, offset: 2948 },
            end: { line: 91, column: 28, offset: 2967 }
          }
        },
        {
          type: 'text',
          value: ' with the following command:',
          position: {
            start: { line: 91, column: 28, offset: 2967 },
            end: { line: 91, column: 56, offset: 2995 }
          }
        }
      ],
      position: {
        start: { line: 91, column: 1, offset: 2940 },
        end: { line: 91, column: 56, offset: 2995 }
      }
    },
    {
      type: 'code',
      lang: 'sh',
      meta: null,
      value: "curl --proto '=https' --tlsv1.2 -sSfL https://get.static-web-server.net | sh",
      position: {
        start: { line: 92, column: 1, offset: 2996 },
        end: { line: 94, column: 4, offset: 3082 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now you can serve the ',
          position: {
            start: { line: 96, column: 1, offset: 3084 },
            end: { line: 96, column: 23, offset: 3106 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 96, column: 23, offset: 3106 },
            end: { line: 96, column: 31, offset: 3114 }
          }
        },
        {
          type: 'text',
          value: ' folder. Serve the ',
          position: {
            start: { line: 96, column: 31, offset: 3114 },
            end: { line: 96, column: 50, offset: 3133 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 96, column: 50, offset: 3133 },
            end: { line: 96, column: 58, offset: 3141 }
          }
        },
        {
          type: 'text',
          value: ' folder with the following command:',
          position: {
            start: { line: 96, column: 58, offset: 3141 },
            end: { line: 96, column: 93, offset: 3176 }
          }
        }
      ],
      position: {
        start: { line: 96, column: 1, offset: 3084 },
        end: { line: 96, column: 93, offset: 3176 }
      }
    },
    {
      type: 'code',
      lang: 'sh',
      meta: null,
      value: 'static-web-server --port=8080 --root=./public',
      position: {
        start: { line: 97, column: 1, offset: 3177 },
        end: { line: 99, column: 4, offset: 3232 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Finally, navigate to ',
          position: {
            start: { line: 101, column: 1, offset: 3234 },
            end: { line: 101, column: 22, offset: 3255 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http://localhost:8080/',
          position: {
            start: { line: 101, column: 22, offset: 3255 },
            end: { line: 101, column: 46, offset: 3279 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 101, column: 46, offset: 3279 },
            end: { line: 101, column: 47, offset: 3280 }
          }
        }
      ],
      position: {
        start: { line: 101, column: 1, offset: 3234 },
        end: { line: 101, column: 47, offset: 3280 }
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
            start: { line: 103, column: 4, offset: 3285 },
            end: { line: 103, column: 30, offset: 3311 }
          }
        }
      ],
      position: {
        start: { line: 103, column: 1, offset: 3282 },
        end: { line: 103, column: 30, offset: 3311 }
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
                start: { line: 104, column: 2, offset: 3313 },
                end: { line: 104, column: 7, offset: 3318 }
              }
            }
          ],
          position: {
            start: { line: 104, column: 1, offset: 3312 },
            end: { line: 104, column: 28, offset: 3339 }
          }
        },
        {
          type: 'text',
          value: ' is a library and paradigm for creating web and native user interfaces in JavaScript. If you are still new to React, please watch this ',
          position: {
            start: { line: 104, column: 28, offset: 3339 },
            end: { line: 104, column: 163, offset: 3474 }
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
                start: { line: 104, column: 164, offset: 3475 },
                end: { line: 104, column: 169, offset: 3480 }
              }
            }
          ],
          position: {
            start: { line: 104, column: 163, offset: 3474 },
            end: { line: 104, column: 212, offset: 3523 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 104, column: 212, offset: 3523 },
            end: { line: 104, column: 213, offset: 3524 }
          }
        }
      ],
      position: {
        start: { line: 104, column: 1, offset: 3312 },
        end: { line: 104, column: 213, offset: 3524 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here is a project structure you can use for a website made with React.',
          position: {
            start: { line: 106, column: 1, offset: 3526 },
            end: { line: 106, column: 71, offset: 3596 }
          }
        }
      ],
      position: {
        start: { line: 106, column: 1, offset: 3526 },
        end: { line: 106, column: 71, offset: 3596 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'public/\n    index.html\n    styles.css\n    index.js',
      position: {
        start: { line: 107, column: 1, offset: 3597 },
        end: { line: 112, column: 4, offset: 3655 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to the index.html file.',
          position: {
            start: { line: 114, column: 1, offset: 3657 },
            end: { line: 114, column: 33, offset: 3689 }
          }
        }
      ],
      position: {
        start: { line: 114, column: 1, offset: 3657 },
        end: { line: 114, column: 33, offset: 3689 }
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
        start: { line: 115, column: 1, offset: 3690 },
        end: { line: 133, column: 4, offset: 4246 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to ',
          position: {
            start: { line: 135, column: 1, offset: 4248 },
            end: { line: 135, column: 13, offset: 4260 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styles.css',
          position: {
            start: { line: 135, column: 13, offset: 4260 },
            end: { line: 135, column: 25, offset: 4272 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 135, column: 25, offset: 4272 },
            end: { line: 135, column: 26, offset: 4273 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 1, offset: 4248 },
        end: { line: 135, column: 26, offset: 4273 }
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
        start: { line: 137, column: 1, offset: 4275 },
        end: { line: 154, column: 4, offset: 4431 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to ',
          position: {
            start: { line: 156, column: 1, offset: 4433 },
            end: { line: 156, column: 13, offset: 4445 }
          }
        },
        {
          type: 'inlineCode',
          value: 'index.js',
          position: {
            start: { line: 156, column: 13, offset: 4445 },
            end: { line: 156, column: 23, offset: 4455 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 156, column: 23, offset: 4455 },
            end: { line: 156, column: 24, offset: 4456 }
          }
        }
      ],
      position: {
        start: { line: 156, column: 1, offset: 4433 },
        end: { line: 156, column: 24, offset: 4456 }
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
        start: { line: 158, column: 1, offset: 4458 },
        end: { line: 185, column: 4, offset: 5095 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Serve the ',
          position: {
            start: { line: 187, column: 1, offset: 5097 },
            end: { line: 187, column: 11, offset: 5107 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 187, column: 11, offset: 5107 },
            end: { line: 187, column: 19, offset: 5115 }
          }
        },
        {
          type: 'text',
          value: ' folder.',
          position: {
            start: { line: 187, column: 19, offset: 5115 },
            end: { line: 187, column: 27, offset: 5123 }
          }
        }
      ],
      position: {
        start: { line: 187, column: 1, offset: 5097 },
        end: { line: 187, column: 27, offset: 5123 }
      }
    },
    {
      type: 'code',
      lang: 'sh',
      meta: null,
      value: 'static-web-server --port=8080 --root=./public',
      position: {
        start: { line: 189, column: 1, offset: 5125 },
        end: { line: 191, column: 4, offset: 5180 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Navigate to ',
          position: {
            start: { line: 193, column: 1, offset: 5182 },
            end: { line: 193, column: 13, offset: 5194 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http://localhost:8080/',
          position: {
            start: { line: 193, column: 13, offset: 5194 },
            end: { line: 193, column: 37, offset: 5218 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 193, column: 37, offset: 5218 },
            end: { line: 193, column: 38, offset: 5219 }
          }
        }
      ],
      position: {
        start: { line: 193, column: 1, offset: 5182 },
        end: { line: 193, column: 38, offset: 5219 }
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
            start: { line: 195, column: 4, offset: 5224 },
            end: { line: 195, column: 14, offset: 5234 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 1, offset: 5221 },
        end: { line: 195, column: 14, offset: 5234 }
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
            start: { line: 197, column: 5, offset: 5240 },
            end: { line: 197, column: 11, offset: 5246 }
          }
        }
      ],
      position: {
        start: { line: 197, column: 1, offset: 5236 },
        end: { line: 197, column: 11, offset: 5246 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 198, column: 1, offset: 5247 },
            end: { line: 198, column: 5, offset: 5251 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 198, column: 5, offset: 5251 },
            end: { line: 198, column: 19, offset: 5265 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 198, column: 19, offset: 5265 },
            end: { line: 198, column: 63, offset: 5309 }
          }
        }
      ],
      position: {
        start: { line: 198, column: 1, offset: 5247 },
        end: { line: 198, column: 63, offset: 5309 }
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
        start: { line: 200, column: 1, offset: 5311 },
        end: { line: 214, column: 4, offset: 5636 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Using React Context',
          position: {
            start: { line: 216, column: 5, offset: 5642 },
            end: { line: 216, column: 24, offset: 5661 }
          }
        }
      ],
      position: {
        start: { line: 216, column: 1, offset: 5638 },
        end: { line: 216, column: 24, offset: 5661 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use React Context with Arche, wrap ',
          position: {
            start: { line: 217, column: 1, offset: 5662 },
            end: { line: 217, column: 39, offset: 5700 }
          }
        },
        {
          type: 'inlineCode',
          value: 'YourContext.Provider',
          position: {
            start: { line: 217, column: 39, offset: 5700 },
            end: { line: 217, column: 61, offset: 5722 }
          }
        },
        {
          type: 'text',
          value: ' with ',
          position: {
            start: { line: 217, column: 61, offset: 5722 },
            end: { line: 217, column: 67, offset: 5728 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 217, column: 67, offset: 5728 },
            end: { line: 217, column: 81, offset: 5742 }
          }
        },
        {
          type: 'text',
          value: ' and supply ',
          position: {
            start: { line: 217, column: 81, offset: 5742 },
            end: { line: 217, column: 93, offset: 5754 }
          }
        },
        {
          type: 'inlineCode',
          value: 'value',
          position: {
            start: { line: 217, column: 93, offset: 5754 },
            end: { line: 217, column: 100, offset: 5761 }
          }
        },
        {
          type: 'text',
          value: ' as a prop, specifying children in the next argument.',
          position: {
            start: { line: 217, column: 100, offset: 5761 },
            end: { line: 217, column: 153, offset: 5814 }
          }
        }
      ],
      position: {
        start: { line: 217, column: 1, offset: 5662 },
        end: { line: 217, column: 153, offset: 5814 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JSX example:',
          position: {
            start: { line: 219, column: 1, offset: 5816 },
            end: { line: 219, column: 13, offset: 5828 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 5816 },
        end: { line: 219, column: 13, offset: 5828 }
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
        start: { line: 220, column: 1, offset: 5829 },
        end: { line: 234, column: 4, offset: 6103 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Translates to the following with Arche:',
          position: {
            start: { line: 236, column: 1, offset: 6105 },
            end: { line: 236, column: 40, offset: 6144 }
          }
        }
      ],
      position: {
        start: { line: 236, column: 1, offset: 6105 },
        end: { line: 236, column: 40, offset: 6144 }
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
        start: { line: 237, column: 1, offset: 6145 },
        end: { line: 245, column: 4, offset: 6391 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Using React Fragments',
          position: {
            start: { line: 247, column: 5, offset: 6397 },
            end: { line: 247, column: 26, offset: 6418 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 6393 },
        end: { line: 247, column: 26, offset: 6418 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To use React fragments (',
          position: {
            start: { line: 248, column: 1, offset: 6419 },
            end: { line: 248, column: 25, offset: 6443 }
          }
        },
        {
          type: 'inlineCode',
          value: '<>',
          position: {
            start: { line: 248, column: 25, offset: 6443 },
            end: { line: 248, column: 29, offset: 6447 }
          }
        },
        {
          type: 'text',
          value: '), just return an array.',
          position: {
            start: { line: 248, column: 29, offset: 6447 },
            end: { line: 248, column: 53, offset: 6471 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 1, offset: 6419 },
        end: { line: 248, column: 53, offset: 6471 }
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
        start: { line: 250, column: 1, offset: 6473 },
        end: { line: 265, column: 4, offset: 6903 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Using styled',
          position: {
            start: { line: 267, column: 5, offset: 6909 },
            end: { line: 267, column: 17, offset: 6921 }
          }
        }
      ],
      position: {
        start: { line: 267, column: 1, offset: 6905 },
        end: { line: 267, column: 17, offset: 6921 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To install Styled Components, add the following script to the ',
          position: {
            start: { line: 268, column: 1, offset: 6922 },
            end: { line: 268, column: 63, offset: 6984 }
          }
        },
        {
          type: 'inlineCode',
          value: '<head></head>',
          position: {
            start: { line: 268, column: 63, offset: 6984 },
            end: { line: 268, column: 78, offset: 6999 }
          }
        },
        {
          type: 'text',
          value: ' tag of the HTML document of your web page.',
          position: {
            start: { line: 268, column: 78, offset: 6999 },
            end: { line: 268, column: 121, offset: 7042 }
          }
        }
      ],
      position: {
        start: { line: 268, column: 1, offset: 6922 },
        end: { line: 268, column: 121, offset: 7042 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: '<script src="https://cdn.jsdelivr.net/npm/styled-components@6.1.19/dist/styled-components.min.js"></script>',
      position: {
        start: { line: 269, column: 1, offset: 7043 },
        end: { line: 271, column: 4, offset: 7158 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche accepts a ',
          position: {
            start: { line: 273, column: 1, offset: 7160 },
            end: { line: 273, column: 17, offset: 7176 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styled',
          position: {
            start: { line: 273, column: 17, offset: 7176 },
            end: { line: 273, column: 25, offset: 7184 }
          }
        },
        {
          type: 'text',
          value: ' option from css-in-js libraries like ',
          position: {
            start: { line: 273, column: 25, offset: 7184 },
            end: { line: 273, column: 63, offset: 7222 }
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
                start: { line: 273, column: 64, offset: 7223 },
                end: { line: 273, column: 81, offset: 7240 }
              }
            }
          ],
          position: {
            start: { line: 273, column: 63, offset: 7222 },
            end: { line: 273, column: 114, offset: 7273 }
          }
        },
        {
          type: 'text',
          value: ' to enable a ',
          position: {
            start: { line: 273, column: 114, offset: 7273 },
            end: { line: 273, column: 127, offset: 7286 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 273, column: 127, offset: 7286 },
            end: { line: 273, column: 132, offset: 7291 }
          }
        },
        {
          type: 'text',
          value: ' prop on ',
          position: {
            start: { line: 273, column: 132, offset: 7291 },
            end: { line: 273, column: 141, offset: 7300 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 273, column: 141, offset: 7300 },
            end: { line: 273, column: 155, offset: 7314 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 273, column: 155, offset: 7314 },
            end: { line: 273, column: 160, offset: 7319 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedReactElement',
          position: {
            start: { line: 273, column: 160, offset: 7319 },
            end: { line: 273, column: 179, offset: 7338 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 273, column: 179, offset: 7338 },
            end: { line: 273, column: 180, offset: 7339 }
          }
        }
      ],
      position: {
        start: { line: 273, column: 1, offset: 7160 },
        end: { line: 273, column: 180, offset: 7339 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React, { styled })',
      position: {
        start: { line: 275, column: 1, offset: 7341 },
        end: { line: 277, column: 4, offset: 7404 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Elements can now specify a ',
          position: {
            start: { line: 279, column: 1, offset: 7406 },
            end: { line: 279, column: 28, offset: 7433 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 279, column: 28, offset: 7433 },
            end: { line: 279, column: 33, offset: 7438 }
          }
        },
        {
          type: 'text',
          value: ' prop to use css-in-js.',
          position: {
            start: { line: 279, column: 33, offset: 7438 },
            end: { line: 279, column: 56, offset: 7461 }
          }
        }
      ],
      position: {
        start: { line: 279, column: 1, offset: 7406 },
        end: { line: 279, column: 56, offset: 7461 }
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
        start: { line: 281, column: 1, offset: 7463 },
        end: { line: 299, column: 4, offset: 7847 }
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
            start: { line: 301, column: 3, offset: 7851 },
            end: { line: 301, column: 15, offset: 7863 }
          }
        }
      ],
      position: {
        start: { line: 301, column: 1, offset: 7849 },
        end: { line: 301, column: 15, offset: 7863 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 302, column: 1, offset: 7864 },
            end: { line: 302, column: 260, offset: 8123 }
          }
        }
      ],
      position: {
        start: { line: 302, column: 1, offset: 7864 },
        end: { line: 302, column: 260, offset: 8123 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. If you are interested in contributing, the ',
          position: {
            start: { line: 304, column: 1, offset: 8125 },
            end: { line: 304, column: 121, offset: 8245 }
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
                start: { line: 304, column: 122, offset: 8246 },
                end: { line: 304, column: 133, offset: 8257 }
              }
            }
          ],
          position: {
            start: { line: 304, column: 121, offset: 8245 },
            end: { line: 304, column: 226, offset: 8350 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 304, column: 226, offset: 8350 },
            end: { line: 304, column: 256, offset: 8380 }
          }
        }
      ],
      position: {
        start: { line: 304, column: 1, offset: 8125 },
        end: { line: 304, column: 256, offset: 8380 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 306, column: 1, offset: 8382 },
            end: { line: 306, column: 33, offset: 8414 }
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
                start: { line: 306, column: 34, offset: 8415 },
                end: { line: 306, column: 49, offset: 8430 }
              }
            }
          ],
          position: {
            start: { line: 306, column: 33, offset: 8414 },
            end: { line: 306, column: 114, offset: 8495 }
          }
        }
      ],
      position: {
        start: { line: 306, column: 1, offset: 8382 },
        end: { line: 306, column: 114, offset: 8495 }
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
            start: { line: 308, column: 3, offset: 8499 },
            end: { line: 308, column: 10, offset: 8506 }
          }
        }
      ],
      position: {
        start: { line: 308, column: 1, offset: 8497 },
        end: { line: 308, column: 10, offset: 8506 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche is distributed under the ',
          position: {
            start: { line: 309, column: 1, offset: 8507 },
            end: { line: 309, column: 32, offset: 8538 }
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
                start: { line: 309, column: 33, offset: 8539 },
                end: { line: 309, column: 46, offset: 8552 }
              }
            }
          ],
          position: {
            start: { line: 309, column: 32, offset: 8538 },
            end: { line: 309, column: 98, offset: 8604 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 309, column: 98, offset: 8604 },
            end: { line: 309, column: 99, offset: 8605 }
          }
        }
      ],
      position: {
        start: { line: 309, column: 1, offset: 8507 },
        end: { line: 309, column: 99, offset: 8605 }
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
            start: { line: 311, column: 3, offset: 8609 },
            end: { line: 311, column: 10, offset: 8616 }
          }
        }
      ],
      position: {
        start: { line: 311, column: 1, offset: 8607 },
        end: { line: 311, column: 10, offset: 8616 }
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
                    start: { line: 312, column: 4, offset: 8620 },
                    end: { line: 312, column: 31, offset: 8647 }
                  }
                }
              ],
              position: {
                start: { line: 312, column: 4, offset: 8620 },
                end: { line: 312, column: 31, offset: 8647 }
              }
            }
          ],
          position: {
            start: { line: 312, column: 2, offset: 8618 },
            end: { line: 312, column: 31, offset: 8647 }
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
                    start: { line: 313, column: 4, offset: 8651 },
                    end: { line: 313, column: 30, offset: 8677 }
                  }
                }
              ],
              position: {
                start: { line: 313, column: 4, offset: 8651 },
                end: { line: 313, column: 30, offset: 8677 }
              }
            }
          ],
          position: {
            start: { line: 313, column: 2, offset: 8649 },
            end: { line: 313, column: 30, offset: 8677 }
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
                    start: { line: 314, column: 4, offset: 8681 },
                    end: { line: 314, column: 31, offset: 8708 }
                  }
                }
              ],
              position: {
                start: { line: 314, column: 4, offset: 8681 },
                end: { line: 314, column: 31, offset: 8708 }
              }
            }
          ],
          position: {
            start: { line: 314, column: 2, offset: 8679 },
            end: { line: 314, column: 31, offset: 8708 }
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
                    start: { line: 315, column: 4, offset: 8712 },
                    end: { line: 315, column: 28, offset: 8736 }
                  }
                }
              ],
              position: {
                start: { line: 315, column: 4, offset: 8712 },
                end: { line: 315, column: 28, offset: 8736 }
              }
            }
          ],
          position: {
            start: { line: 315, column: 2, offset: 8710 },
            end: { line: 315, column: 28, offset: 8736 }
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
                    start: { line: 316, column: 4, offset: 8740 },
                    end: { line: 316, column: 32, offset: 8768 }
                  }
                }
              ],
              position: {
                start: { line: 316, column: 4, offset: 8740 },
                end: { line: 316, column: 32, offset: 8768 }
              }
            }
          ],
          position: {
            start: { line: 316, column: 2, offset: 8738 },
            end: { line: 316, column: 32, offset: 8768 }
          }
        }
      ],
      position: {
        start: { line: 312, column: 2, offset: 8618 },
        end: { line: 316, column: 32, offset: 8768 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 317, column: 1, offset: 8769 }
  }
}