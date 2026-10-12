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
          value: 'Tips',
          position: {
            start: { line: 103, column: 4, offset: 3273 },
            end: { line: 103, column: 8, offset: 3277 }
          }
        }
      ],
      position: {
        start: { line: 103, column: 1, offset: 3270 },
        end: { line: 103, column: 8, offset: 3277 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Import Statements',
          position: {
            start: { line: 105, column: 5, offset: 3283 },
            end: { line: 105, column: 22, offset: 3300 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 3279 },
        end: { line: 105, column: 22, offset: 3300 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To import a JavaScript file in another JavaScript file, use an ',
          position: {
            start: { line: 106, column: 1, offset: 3301 },
            end: { line: 106, column: 64, offset: 3364 }
          }
        },
        {
          type: 'inlineCode',
          value: 'import',
          position: {
            start: { line: 106, column: 64, offset: 3364 },
            end: { line: 106, column: 72, offset: 3372 }
          }
        },
        {
          type: 'text',
          value: ' statement.',
          position: {
            start: { line: 106, column: 72, offset: 3372 },
            end: { line: 106, column: 83, offset: 3383 }
          }
        }
      ],
      position: {
        start: { line: 106, column: 1, offset: 3301 },
        end: { line: 106, column: 83, offset: 3383 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'import ClickExample from "./ClickExample.js"',
      position: {
        start: { line: 107, column: 1, offset: 3384 },
        end: { line: 109, column: 4, offset: 3446 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Dynamic Imports',
          position: {
            start: { line: 111, column: 5, offset: 3452 },
            end: { line: 111, column: 20, offset: 3467 }
          }
        }
      ],
      position: {
        start: { line: 111, column: 1, offset: 3448 },
        end: { line: 111, column: 20, offset: 3467 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To dynamically import a module, use the ',
          position: {
            start: { line: 112, column: 1, offset: 3468 },
            end: { line: 112, column: 41, offset: 3508 }
          }
        },
        {
          type: 'inlineCode',
          value: 'import',
          position: {
            start: { line: 112, column: 41, offset: 3508 },
            end: { line: 112, column: 49, offset: 3516 }
          }
        },
        {
          type: 'text',
          value: ' keyword as a function.',
          position: {
            start: { line: 112, column: 49, offset: 3516 },
            end: { line: 112, column: 72, offset: 3539 }
          }
        }
      ],
      position: {
        start: { line: 112, column: 1, offset: 3468 },
        end: { line: 112, column: 72, offset: 3539 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'async function () {\n  const myModule = await import("/my-module.js")\n}',
      position: {
        start: { line: 113, column: 1, offset: 3540 },
        end: { line: 117, column: 4, offset: 3628 }
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
            start: { line: 119, column: 4, offset: 3633 },
            end: { line: 119, column: 30, offset: 3659 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 3630 },
        end: { line: 119, column: 30, offset: 3659 }
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
                start: { line: 120, column: 2, offset: 3661 },
                end: { line: 120, column: 7, offset: 3666 }
              }
            }
          ],
          position: {
            start: { line: 120, column: 1, offset: 3660 },
            end: { line: 120, column: 28, offset: 3687 }
          }
        },
        {
          type: 'text',
          value: ' is a library and paradigm for creating web and native interfaces in JavaScript. If you are new to React, please watch this ',
          position: {
            start: { line: 120, column: 28, offset: 3687 },
            end: { line: 120, column: 152, offset: 3811 }
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
                start: { line: 120, column: 153, offset: 3812 },
                end: { line: 120, column: 158, offset: 3817 }
              }
            }
          ],
          position: {
            start: { line: 120, column: 152, offset: 3811 },
            end: { line: 120, column: 201, offset: 3860 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 120, column: 201, offset: 3860 },
            end: { line: 120, column: 202, offset: 3861 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 3660 },
        end: { line: 120, column: 202, offset: 3861 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here is a project structure for a website made with React.',
          position: {
            start: { line: 122, column: 1, offset: 3863 },
            end: { line: 122, column: 59, offset: 3921 }
          }
        }
      ],
      position: {
        start: { line: 122, column: 1, offset: 3863 },
        end: { line: 122, column: 59, offset: 3921 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'public/\n    index.html\n    styles.css\n    ClickExample.js\n    index.js',
      position: {
        start: { line: 123, column: 1, offset: 3922 },
        end: { line: 129, column: 4, offset: 4000 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to the ',
          position: {
            start: { line: 131, column: 1, offset: 4002 },
            end: { line: 131, column: 17, offset: 4018 }
          }
        },
        {
          type: 'inlineCode',
          value: 'index.html',
          position: {
            start: { line: 131, column: 17, offset: 4018 },
            end: { line: 131, column: 29, offset: 4030 }
          }
        },
        {
          type: 'text',
          value: ' file.',
          position: {
            start: { line: 131, column: 29, offset: 4030 },
            end: { line: 131, column: 35, offset: 4036 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 4002 },
        end: { line: 131, column: 35, offset: 4036 }
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
        '  <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></script>\n' +
        '  <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"></script>\n' +
        '  <script src="/index.js" type="module"></script>\n' +
        '</body>\n' +
        '</html>',
      position: {
        start: { line: 132, column: 1, offset: 4037 },
        end: { line: 150, column: 4, offset: 4583 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to ',
          position: {
            start: { line: 152, column: 1, offset: 4585 },
            end: { line: 152, column: 13, offset: 4597 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styles.css',
          position: {
            start: { line: 152, column: 13, offset: 4597 },
            end: { line: 152, column: 25, offset: 4609 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 152, column: 25, offset: 4609 },
            end: { line: 152, column: 26, offset: 4610 }
          }
        }
      ],
      position: {
        start: { line: 152, column: 1, offset: 4585 },
        end: { line: 152, column: 26, offset: 4610 }
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
        start: { line: 153, column: 1, offset: 4611 },
        end: { line: 170, column: 4, offset: 4767 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to ',
          position: {
            start: { line: 172, column: 1, offset: 4769 },
            end: { line: 172, column: 13, offset: 4781 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClickExample.js',
          position: {
            start: { line: 172, column: 13, offset: 4781 },
            end: { line: 172, column: 30, offset: 4798 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 172, column: 30, offset: 4798 },
            end: { line: 172, column: 31, offset: 4799 }
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 4769 },
        end: { line: 172, column: 31, offset: 4799 }
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
        '  return Div({ id: "click-example" }, [\n' +
        '    P(`You clicked ${count} times`),\n' +
        '    Button({\n' +
        '      onClick() {\n' +
        '        setCount(count + 1)\n' +
        '      },\n' +
        '    }, "Click me"),\n' +
        '  ])\n' +
        '})\n' +
        '\n' +
        'export default ClickExample',
      position: {
        start: { line: 173, column: 1, offset: 4800 },
        end: { line: 192, column: 4, offset: 5204 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to ',
          position: {
            start: { line: 194, column: 1, offset: 5206 },
            end: { line: 194, column: 13, offset: 5218 }
          }
        },
        {
          type: 'inlineCode',
          value: 'index.js',
          position: {
            start: { line: 194, column: 13, offset: 5218 },
            end: { line: 194, column: 23, offset: 5228 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 194, column: 23, offset: 5228 },
            end: { line: 194, column: 24, offset: 5229 }
          }
        }
      ],
      position: {
        start: { line: 194, column: 1, offset: 5206 },
        end: { line: 194, column: 24, offset: 5229 }
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
        '    H1("Welcome to Vanilla Microfrontends with React."),\n' +
        '    P("All of the content on this page was added with React."),\n' +
        '    ClickExample(),\n' +
        '  ]\n' +
        '})\n' +
        '\n' +
        'ReactDOM.render(Root(), document.getElementById("react-root"))',
      position: {
        start: { line: 195, column: 1, offset: 5230 },
        end: { line: 210, column: 4, offset: 5621 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Serve the ',
          position: {
            start: { line: 212, column: 1, offset: 5623 },
            end: { line: 212, column: 11, offset: 5633 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 212, column: 11, offset: 5633 },
            end: { line: 212, column: 19, offset: 5641 }
          }
        },
        {
          type: 'text',
          value: ' folder.',
          position: {
            start: { line: 212, column: 19, offset: 5641 },
            end: { line: 212, column: 27, offset: 5649 }
          }
        }
      ],
      position: {
        start: { line: 212, column: 1, offset: 5623 },
        end: { line: 212, column: 27, offset: 5649 }
      }
    },
    {
      type: 'code',
      lang: 'sh',
      meta: null,
      value: 'static-web-server --port=8080 --root=./public',
      position: {
        start: { line: 214, column: 1, offset: 5651 },
        end: { line: 216, column: 4, offset: 5706 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Navigate to ',
          position: {
            start: { line: 218, column: 1, offset: 5708 },
            end: { line: 218, column: 13, offset: 5720 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http://localhost:8080/',
          position: {
            start: { line: 218, column: 13, offset: 5720 },
            end: { line: 218, column: 37, offset: 5744 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 218, column: 37, offset: 5744 },
            end: { line: 218, column: 38, offset: 5745 }
          }
        }
      ],
      position: {
        start: { line: 218, column: 1, offset: 5708 },
        end: { line: 218, column: 38, offset: 5745 }
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
            start: { line: 220, column: 4, offset: 5750 },
            end: { line: 220, column: 14, offset: 5760 }
          }
        }
      ],
      position: {
        start: { line: 220, column: 1, offset: 5747 },
        end: { line: 220, column: 14, offset: 5760 }
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
            start: { line: 222, column: 5, offset: 5766 },
            end: { line: 222, column: 11, offset: 5772 }
          }
        }
      ],
      position: {
        start: { line: 222, column: 1, offset: 5762 },
        end: { line: 222, column: 11, offset: 5772 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 223, column: 1, offset: 5773 },
            end: { line: 223, column: 5, offset: 5777 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 223, column: 5, offset: 5777 },
            end: { line: 223, column: 19, offset: 5791 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 223, column: 19, offset: 5791 },
            end: { line: 223, column: 63, offset: 5835 }
          }
        }
      ],
      position: {
        start: { line: 223, column: 1, offset: 5773 },
        end: { line: 223, column: 63, offset: 5835 }
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
        'window.Aside = ReactElement("aside")\n' +
        'window.Svg = ReactElement("svg")\n' +
        'window.Path = ReactElement("path")',
      position: {
        start: { line: 224, column: 1, offset: 5836 },
        end: { line: 238, column: 4, offset: 6161 }
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
            start: { line: 240, column: 5, offset: 6167 },
            end: { line: 240, column: 18, offset: 6180 }
          }
        }
      ],
      position: {
        start: { line: 240, column: 1, offset: 6163 },
        end: { line: 240, column: 18, offset: 6180 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To have React Context with Arche, wrap ',
          position: {
            start: { line: 241, column: 1, offset: 6181 },
            end: { line: 241, column: 40, offset: 6220 }
          }
        },
        {
          type: 'inlineCode',
          value: 'YourContext.Provider',
          position: {
            start: { line: 241, column: 40, offset: 6220 },
            end: { line: 241, column: 62, offset: 6242 }
          }
        },
        {
          type: 'text',
          value: ' with ',
          position: {
            start: { line: 241, column: 62, offset: 6242 },
            end: { line: 241, column: 68, offset: 6248 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 241, column: 68, offset: 6248 },
            end: { line: 241, column: 82, offset: 6262 }
          }
        },
        {
          type: 'text',
          value: ' and supply ',
          position: {
            start: { line: 241, column: 82, offset: 6262 },
            end: { line: 241, column: 94, offset: 6274 }
          }
        },
        {
          type: 'inlineCode',
          value: 'value',
          position: {
            start: { line: 241, column: 94, offset: 6274 },
            end: { line: 241, column: 101, offset: 6281 }
          }
        },
        {
          type: 'text',
          value: ' as a prop, specifying children in the next argument.',
          position: {
            start: { line: 241, column: 101, offset: 6281 },
            end: { line: 241, column: 154, offset: 6334 }
          }
        }
      ],
      position: {
        start: { line: 241, column: 1, offset: 6181 },
        end: { line: 241, column: 154, offset: 6334 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JSX example:',
          position: {
            start: { line: 243, column: 1, offset: 6336 },
            end: { line: 243, column: 13, offset: 6348 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 6336 },
        end: { line: 243, column: 13, offset: 6348 }
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
        start: { line: 244, column: 1, offset: 6349 },
        end: { line: 258, column: 4, offset: 6623 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Translates to the following with Arche:',
          position: {
            start: { line: 260, column: 1, offset: 6625 },
            end: { line: 260, column: 40, offset: 6664 }
          }
        }
      ],
      position: {
        start: { line: 260, column: 1, offset: 6625 },
        end: { line: 260, column: 40, offset: 6664 }
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
        start: { line: 261, column: 1, offset: 6665 },
        end: { line: 269, column: 4, offset: 6911 }
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
            start: { line: 271, column: 5, offset: 6917 },
            end: { line: 271, column: 20, offset: 6932 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 6913 },
        end: { line: 271, column: 20, offset: 6932 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For React fragments (',
          position: {
            start: { line: 272, column: 1, offset: 6933 },
            end: { line: 272, column: 22, offset: 6954 }
          }
        },
        {
          type: 'inlineCode',
          value: '<>',
          position: {
            start: { line: 272, column: 22, offset: 6954 },
            end: { line: 272, column: 26, offset: 6958 }
          }
        },
        {
          type: 'text',
          value: '), just return an array.',
          position: {
            start: { line: 272, column: 26, offset: 6958 },
            end: { line: 272, column: 50, offset: 6982 }
          }
        }
      ],
      position: {
        start: { line: 272, column: 1, offset: 6933 },
        end: { line: 272, column: 50, offset: 6982 }
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
        '  Img({ src: "https://placehold.co/300x150", alt: "placeholder" }),\n' +
        '  Img({ src: "https://placehold.co/300x150", alt: "placeholder" }),\n' +
        '])\n' +
        '\n' +
        'const Root = ReactElement(() => [\n' +
        '  H1("Fragment Example"),\n' +
        '  Placeholders(),\n' +
        '])\n' +
        '\n' +
        'ReactDOM.render(Root(), document.getElementById("react-root"))',
      position: {
        start: { line: 274, column: 1, offset: 6984 },
        end: { line: 289, column: 4, offset: 7414 }
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
            start: { line: 291, column: 5, offset: 7420 },
            end: { line: 291, column: 35, offset: 7450 }
          }
        }
      ],
      position: {
        start: { line: 291, column: 1, offset: 7416 },
        end: { line: 291, column: 35, offset: 7450 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To install Styled Components, add the following script to your Arche and React scripts.',
          position: {
            start: { line: 292, column: 1, offset: 7451 },
            end: { line: 292, column: 88, offset: 7538 }
          }
        }
      ],
      position: {
        start: { line: 292, column: 1, offset: 7451 },
        end: { line: 292, column: 88, offset: 7538 }
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<script src="https://cdn.jsdelivr.net/npm/styled-components/dist/styled-components.min.js"></script>',
      position: {
        start: { line: 293, column: 1, offset: 7539 },
        end: { line: 295, column: 4, offset: 7651 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche accepts a ',
          position: {
            start: { line: 297, column: 1, offset: 7653 },
            end: { line: 297, column: 17, offset: 7669 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styled',
          position: {
            start: { line: 297, column: 17, offset: 7669 },
            end: { line: 297, column: 25, offset: 7677 }
          }
        },
        {
          type: 'text',
          value: ' option from css-in-js libraries like ',
          position: {
            start: { line: 297, column: 25, offset: 7677 },
            end: { line: 297, column: 63, offset: 7715 }
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
                start: { line: 297, column: 64, offset: 7716 },
                end: { line: 297, column: 81, offset: 7733 }
              }
            }
          ],
          position: {
            start: { line: 297, column: 63, offset: 7715 },
            end: { line: 297, column: 114, offset: 7766 }
          }
        },
        {
          type: 'text',
          value: ' to enable a ',
          position: {
            start: { line: 297, column: 114, offset: 7766 },
            end: { line: 297, column: 127, offset: 7779 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 297, column: 127, offset: 7779 },
            end: { line: 297, column: 132, offset: 7784 }
          }
        },
        {
          type: 'text',
          value: ' prop on ',
          position: {
            start: { line: 297, column: 132, offset: 7784 },
            end: { line: 297, column: 141, offset: 7793 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 297, column: 141, offset: 7793 },
            end: { line: 297, column: 155, offset: 7807 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 297, column: 155, offset: 7807 },
            end: { line: 297, column: 160, offset: 7812 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedReactElement',
          position: {
            start: { line: 297, column: 160, offset: 7812 },
            end: { line: 297, column: 179, offset: 7831 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 297, column: 179, offset: 7831 },
            end: { line: 297, column: 180, offset: 7832 }
          }
        }
      ],
      position: {
        start: { line: 297, column: 1, offset: 7653 },
        end: { line: 297, column: 180, offset: 7832 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React, { styled })',
      position: {
        start: { line: 298, column: 1, offset: 7833 },
        end: { line: 300, column: 4, offset: 7896 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Elements can now specify a ',
          position: {
            start: { line: 302, column: 1, offset: 7898 },
            end: { line: 302, column: 28, offset: 7925 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 302, column: 28, offset: 7925 },
            end: { line: 302, column: 33, offset: 7930 }
          }
        },
        {
          type: 'text',
          value: ' prop for css-in-js.',
          position: {
            start: { line: 302, column: 33, offset: 7930 },
            end: { line: 302, column: 53, offset: 7950 }
          }
        }
      ],
      position: {
        start: { line: 302, column: 1, offset: 7898 },
        end: { line: 302, column: 53, offset: 7950 }
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
        '    H1("Styled Example"),\n' +
        '    P("Text"),\n' +
        '  ])\n' +
        '})\n' +
        '\n' +
        'ReactDOM.render(MyComponent(), document.getElementById("react-root"))',
      position: {
        start: { line: 303, column: 1, offset: 7951 },
        end: { line: 321, column: 4, offset: 8335 }
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
            start: { line: 323, column: 3, offset: 8339 },
            end: { line: 323, column: 15, offset: 8351 }
          }
        }
      ],
      position: {
        start: { line: 323, column: 1, offset: 8337 },
        end: { line: 323, column: 15, offset: 8351 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 324, column: 1, offset: 8352 },
            end: { line: 324, column: 260, offset: 8611 }
          }
        }
      ],
      position: {
        start: { line: 324, column: 1, offset: 8352 },
        end: { line: 324, column: 260, offset: 8611 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. If you are interested in contributing, the ',
          position: {
            start: { line: 326, column: 1, offset: 8613 },
            end: { line: 326, column: 121, offset: 8733 }
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
                start: { line: 326, column: 122, offset: 8734 },
                end: { line: 326, column: 133, offset: 8745 }
              }
            }
          ],
          position: {
            start: { line: 326, column: 121, offset: 8733 },
            end: { line: 326, column: 226, offset: 8838 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 326, column: 226, offset: 8838 },
            end: { line: 326, column: 256, offset: 8868 }
          }
        }
      ],
      position: {
        start: { line: 326, column: 1, offset: 8613 },
        end: { line: 326, column: 256, offset: 8868 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 328, column: 1, offset: 8870 },
            end: { line: 328, column: 33, offset: 8902 }
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
                start: { line: 328, column: 34, offset: 8903 },
                end: { line: 328, column: 49, offset: 8918 }
              }
            }
          ],
          position: {
            start: { line: 328, column: 33, offset: 8902 },
            end: { line: 328, column: 114, offset: 8983 }
          }
        }
      ],
      position: {
        start: { line: 328, column: 1, offset: 8870 },
        end: { line: 328, column: 114, offset: 8983 }
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
            start: { line: 330, column: 3, offset: 8987 },
            end: { line: 330, column: 10, offset: 8994 }
          }
        }
      ],
      position: {
        start: { line: 330, column: 1, offset: 8985 },
        end: { line: 330, column: 10, offset: 8994 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche is distributed under the ',
          position: {
            start: { line: 331, column: 1, offset: 8995 },
            end: { line: 331, column: 32, offset: 9026 }
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
                start: { line: 331, column: 33, offset: 9027 },
                end: { line: 331, column: 46, offset: 9040 }
              }
            }
          ],
          position: {
            start: { line: 331, column: 32, offset: 9026 },
            end: { line: 331, column: 98, offset: 9092 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 331, column: 98, offset: 9092 },
            end: { line: 331, column: 99, offset: 9093 }
          }
        }
      ],
      position: {
        start: { line: 331, column: 1, offset: 8995 },
        end: { line: 331, column: 99, offset: 9093 }
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
            start: { line: 333, column: 3, offset: 9097 },
            end: { line: 333, column: 10, offset: 9104 }
          }
        }
      ],
      position: {
        start: { line: 333, column: 1, offset: 9095 },
        end: { line: 333, column: 10, offset: 9104 }
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
                    start: { line: 334, column: 4, offset: 9108 },
                    end: { line: 334, column: 31, offset: 9135 }
                  }
                }
              ],
              position: {
                start: { line: 334, column: 4, offset: 9108 },
                end: { line: 334, column: 31, offset: 9135 }
              }
            }
          ],
          position: {
            start: { line: 334, column: 2, offset: 9106 },
            end: { line: 334, column: 31, offset: 9135 }
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
                    start: { line: 335, column: 4, offset: 9139 },
                    end: { line: 335, column: 30, offset: 9165 }
                  }
                }
              ],
              position: {
                start: { line: 335, column: 4, offset: 9139 },
                end: { line: 335, column: 30, offset: 9165 }
              }
            }
          ],
          position: {
            start: { line: 335, column: 2, offset: 9137 },
            end: { line: 335, column: 30, offset: 9165 }
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
                    start: { line: 336, column: 4, offset: 9169 },
                    end: { line: 336, column: 31, offset: 9196 }
                  }
                }
              ],
              position: {
                start: { line: 336, column: 4, offset: 9169 },
                end: { line: 336, column: 31, offset: 9196 }
              }
            }
          ],
          position: {
            start: { line: 336, column: 2, offset: 9167 },
            end: { line: 336, column: 31, offset: 9196 }
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
                    start: { line: 337, column: 4, offset: 9200 },
                    end: { line: 337, column: 28, offset: 9224 }
                  }
                }
              ],
              position: {
                start: { line: 337, column: 4, offset: 9200 },
                end: { line: 337, column: 28, offset: 9224 }
              }
            }
          ],
          position: {
            start: { line: 337, column: 2, offset: 9198 },
            end: { line: 337, column: 28, offset: 9224 }
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
                    start: { line: 338, column: 4, offset: 9228 },
                    end: { line: 338, column: 32, offset: 9256 }
                  }
                }
              ],
              position: {
                start: { line: 338, column: 4, offset: 9228 },
                end: { line: 338, column: 32, offset: 9256 }
              }
            }
          ],
          position: {
            start: { line: 338, column: 2, offset: 9226 },
            end: { line: 338, column: 32, offset: 9256 }
          }
        }
      ],
      position: {
        start: { line: 334, column: 2, offset: 9106 },
        end: { line: 338, column: 32, offset: 9256 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 339, column: 1, offset: 9257 }
  }
}