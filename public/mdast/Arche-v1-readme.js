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
        '  <div id="click-example">\n' +
        '    <p>You clicked 0 times.</p>\n' +
        '    <button>Click</button>\n' +
        '  </div>\n' +
        '\n' +
        '  <script src="https://cdn.jsdelivr.net/npm/arche"></script>\n' +
        '  <script src="/index.js"></script>\n' +
        '</body>\n' +
        '</html>',
      position: {
        start: { line: 40, column: 1, offset: 1717 },
        end: { line: 62, column: 4, offset: 2276 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'CSS stylesheets are downloaded and read right after the HTML document. Add this to ',
          position: {
            start: { line: 64, column: 1, offset: 2278 },
            end: { line: 64, column: 84, offset: 2361 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styles.css',
          position: {
            start: { line: 64, column: 84, offset: 2361 },
            end: { line: 64, column: 96, offset: 2373 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 64, column: 96, offset: 2373 },
            end: { line: 64, column: 97, offset: 2374 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 2278 },
        end: { line: 64, column: 97, offset: 2374 }
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
        start: { line: 66, column: 1, offset: 2376 },
        end: { line: 79, column: 4, offset: 2492 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JavaScript scripts are run from where they are defined in the HTML. Add this to ',
          position: {
            start: { line: 81, column: 1, offset: 2494 },
            end: { line: 81, column: 81, offset: 2574 }
          }
        },
        {
          type: 'inlineCode',
          value: 'index.js',
          position: {
            start: { line: 81, column: 81, offset: 2574 },
            end: { line: 81, column: 91, offset: 2584 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 81, column: 91, offset: 2584 },
            end: { line: 81, column: 92, offset: 2585 }
          }
        }
      ],
      position: {
        start: { line: 81, column: 1, offset: 2494 },
        end: { line: 81, column: 92, offset: 2585 }
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
        'const p2 = P("This element was added from index.js.")\n' +
        '\n' +
        'document.body.appendChild(p2)\n' +
        '\n' +
        'const p1 = document.querySelector("#click-example > p")\n' +
        'const button = document.querySelector("#click-example > button")\n' +
        '\n' +
        'let value = 0\n' +
        '\n' +
        'button.addEventListener("click", () => {\n' +
        '  value += 1\n' +
        '  p1.innerHTML = `You clicked ${value} times.`\n' +
        '})',
      position: {
        start: { line: 83, column: 1, offset: 2587 },
        end: { line: 102, column: 4, offset: 3053 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now all you have to do to see the website you just created is serve the ',
          position: {
            start: { line: 104, column: 1, offset: 3055 },
            end: { line: 104, column: 73, offset: 3127 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 104, column: 73, offset: 3127 },
            end: { line: 104, column: 81, offset: 3135 }
          }
        },
        {
          type: 'text',
          value: ' folder. I recommend installing the ',
          position: {
            start: { line: 104, column: 81, offset: 3135 },
            end: { line: 104, column: 117, offset: 3171 }
          }
        },
        {
          type: 'inlineCode',
          value: 'static-web-server',
          position: {
            start: { line: 104, column: 117, offset: 3171 },
            end: { line: 104, column: 136, offset: 3190 }
          }
        },
        {
          type: 'text',
          value: ' command line tool from ',
          position: {
            start: { line: 104, column: 136, offset: 3190 },
            end: { line: 104, column: 160, offset: 3214 }
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
                start: { line: 104, column: 161, offset: 3215 },
                end: { line: 104, column: 178, offset: 3232 }
              }
            }
          ],
          position: {
            start: { line: 104, column: 160, offset: 3214 },
            end: { line: 104, column: 211, offset: 3265 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 104, column: 211, offset: 3265 },
            end: { line: 104, column: 212, offset: 3266 }
          }
        }
      ],
      position: {
        start: { line: 104, column: 1, offset: 3055 },
        end: { line: 104, column: 212, offset: 3266 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Install ',
          position: {
            start: { line: 106, column: 1, offset: 3268 },
            end: { line: 106, column: 9, offset: 3276 }
          }
        },
        {
          type: 'inlineCode',
          value: 'static-web-server',
          position: {
            start: { line: 106, column: 9, offset: 3276 },
            end: { line: 106, column: 28, offset: 3295 }
          }
        },
        {
          type: 'text',
          value: ' with the following command:',
          position: {
            start: { line: 106, column: 28, offset: 3295 },
            end: { line: 106, column: 56, offset: 3323 }
          }
        }
      ],
      position: {
        start: { line: 106, column: 1, offset: 3268 },
        end: { line: 106, column: 56, offset: 3323 }
      }
    },
    {
      type: 'code',
      lang: 'sh',
      meta: null,
      value: "curl --proto '=https' --tlsv1.2 -sSfL https://get.static-web-server.net | sh",
      position: {
        start: { line: 107, column: 1, offset: 3324 },
        end: { line: 109, column: 4, offset: 3410 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now you can serve the ',
          position: {
            start: { line: 111, column: 1, offset: 3412 },
            end: { line: 111, column: 23, offset: 3434 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 111, column: 23, offset: 3434 },
            end: { line: 111, column: 31, offset: 3442 }
          }
        },
        {
          type: 'text',
          value: ' folder. Serve the ',
          position: {
            start: { line: 111, column: 31, offset: 3442 },
            end: { line: 111, column: 50, offset: 3461 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 111, column: 50, offset: 3461 },
            end: { line: 111, column: 58, offset: 3469 }
          }
        },
        {
          type: 'text',
          value: ' folder with the following command:',
          position: {
            start: { line: 111, column: 58, offset: 3469 },
            end: { line: 111, column: 93, offset: 3504 }
          }
        }
      ],
      position: {
        start: { line: 111, column: 1, offset: 3412 },
        end: { line: 111, column: 93, offset: 3504 }
      }
    },
    {
      type: 'code',
      lang: 'sh',
      meta: null,
      value: 'static-web-server --port=8080 --root=./public',
      position: {
        start: { line: 112, column: 1, offset: 3505 },
        end: { line: 114, column: 4, offset: 3560 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Finally, navigate to ',
          position: {
            start: { line: 116, column: 1, offset: 3562 },
            end: { line: 116, column: 22, offset: 3583 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http://localhost:8080/',
          position: {
            start: { line: 116, column: 22, offset: 3583 },
            end: { line: 116, column: 46, offset: 3607 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 116, column: 46, offset: 3607 },
            end: { line: 116, column: 47, offset: 3608 }
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 3562 },
        end: { line: 116, column: 47, offset: 3608 }
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
            start: { line: 118, column: 4, offset: 3613 },
            end: { line: 118, column: 8, offset: 3617 }
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 3610 },
        end: { line: 118, column: 8, offset: 3617 }
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
            start: { line: 120, column: 5, offset: 3623 },
            end: { line: 120, column: 22, offset: 3640 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 3619 },
        end: { line: 120, column: 22, offset: 3640 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To import a JavaScript file in another JavaScript file, use an ',
          position: {
            start: { line: 121, column: 1, offset: 3641 },
            end: { line: 121, column: 64, offset: 3704 }
          }
        },
        {
          type: 'inlineCode',
          value: 'import',
          position: {
            start: { line: 121, column: 64, offset: 3704 },
            end: { line: 121, column: 72, offset: 3712 }
          }
        },
        {
          type: 'text',
          value: ' statement.',
          position: {
            start: { line: 121, column: 72, offset: 3712 },
            end: { line: 121, column: 83, offset: 3723 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 3641 },
        end: { line: 121, column: 83, offset: 3723 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'import ClickExample from "./ClickExample.js"',
      position: {
        start: { line: 122, column: 1, offset: 3724 },
        end: { line: 124, column: 4, offset: 3786 }
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
            start: { line: 126, column: 5, offset: 3792 },
            end: { line: 126, column: 20, offset: 3807 }
          }
        }
      ],
      position: {
        start: { line: 126, column: 1, offset: 3788 },
        end: { line: 126, column: 20, offset: 3807 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To dynamically import a module, use the ',
          position: {
            start: { line: 127, column: 1, offset: 3808 },
            end: { line: 127, column: 41, offset: 3848 }
          }
        },
        {
          type: 'inlineCode',
          value: 'import',
          position: {
            start: { line: 127, column: 41, offset: 3848 },
            end: { line: 127, column: 49, offset: 3856 }
          }
        },
        {
          type: 'text',
          value: ' keyword as a function.',
          position: {
            start: { line: 127, column: 49, offset: 3856 },
            end: { line: 127, column: 72, offset: 3879 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 3808 },
        end: { line: 127, column: 72, offset: 3879 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'async function () {\n  const myModule = await import("/my-module.js")\n}',
      position: {
        start: { line: 128, column: 1, offset: 3880 },
        end: { line: 132, column: 4, offset: 3968 }
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
            start: { line: 134, column: 4, offset: 3973 },
            end: { line: 134, column: 30, offset: 3999 }
          }
        }
      ],
      position: {
        start: { line: 134, column: 1, offset: 3970 },
        end: { line: 134, column: 30, offset: 3999 }
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
                start: { line: 135, column: 2, offset: 4001 },
                end: { line: 135, column: 7, offset: 4006 }
              }
            }
          ],
          position: {
            start: { line: 135, column: 1, offset: 4000 },
            end: { line: 135, column: 28, offset: 4027 }
          }
        },
        {
          type: 'text',
          value: ' is a library and paradigm for creating web and native interfaces in JavaScript. If you are new to React, please watch this ',
          position: {
            start: { line: 135, column: 28, offset: 4027 },
            end: { line: 135, column: 152, offset: 4151 }
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
                start: { line: 135, column: 153, offset: 4152 },
                end: { line: 135, column: 158, offset: 4157 }
              }
            }
          ],
          position: {
            start: { line: 135, column: 152, offset: 4151 },
            end: { line: 135, column: 201, offset: 4200 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 135, column: 201, offset: 4200 },
            end: { line: 135, column: 202, offset: 4201 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 1, offset: 4000 },
        end: { line: 135, column: 202, offset: 4201 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here is a project structure for a website made with React.',
          position: {
            start: { line: 137, column: 1, offset: 4203 },
            end: { line: 137, column: 59, offset: 4261 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 4203 },
        end: { line: 137, column: 59, offset: 4261 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'public/\n    index.html\n    styles.css\n    ClickExample.js\n    index.js',
      position: {
        start: { line: 138, column: 1, offset: 4262 },
        end: { line: 144, column: 4, offset: 4340 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to the ',
          position: {
            start: { line: 146, column: 1, offset: 4342 },
            end: { line: 146, column: 17, offset: 4358 }
          }
        },
        {
          type: 'inlineCode',
          value: 'index.html',
          position: {
            start: { line: 146, column: 17, offset: 4358 },
            end: { line: 146, column: 29, offset: 4370 }
          }
        },
        {
          type: 'text',
          value: ' file.',
          position: {
            start: { line: 146, column: 29, offset: 4370 },
            end: { line: 146, column: 35, offset: 4376 }
          }
        }
      ],
      position: {
        start: { line: 146, column: 1, offset: 4342 },
        end: { line: 146, column: 35, offset: 4376 }
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
        start: { line: 147, column: 1, offset: 4377 },
        end: { line: 165, column: 4, offset: 4923 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to ',
          position: {
            start: { line: 167, column: 1, offset: 4925 },
            end: { line: 167, column: 13, offset: 4937 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styles.css',
          position: {
            start: { line: 167, column: 13, offset: 4937 },
            end: { line: 167, column: 25, offset: 4949 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 167, column: 25, offset: 4949 },
            end: { line: 167, column: 26, offset: 4950 }
          }
        }
      ],
      position: {
        start: { line: 167, column: 1, offset: 4925 },
        end: { line: 167, column: 26, offset: 4950 }
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
        start: { line: 168, column: 1, offset: 4951 },
        end: { line: 185, column: 4, offset: 5107 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to ',
          position: {
            start: { line: 187, column: 1, offset: 5109 },
            end: { line: 187, column: 13, offset: 5121 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClickExample.js',
          position: {
            start: { line: 187, column: 13, offset: 5121 },
            end: { line: 187, column: 30, offset: 5138 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 187, column: 30, offset: 5138 },
            end: { line: 187, column: 31, offset: 5139 }
          }
        }
      ],
      position: {
        start: { line: 187, column: 1, offset: 5109 },
        end: { line: 187, column: 31, offset: 5139 }
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
        start: { line: 188, column: 1, offset: 5140 },
        end: { line: 207, column: 4, offset: 5544 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Add this to ',
          position: {
            start: { line: 209, column: 1, offset: 5546 },
            end: { line: 209, column: 13, offset: 5558 }
          }
        },
        {
          type: 'inlineCode',
          value: 'index.js',
          position: {
            start: { line: 209, column: 13, offset: 5558 },
            end: { line: 209, column: 23, offset: 5568 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 209, column: 23, offset: 5568 },
            end: { line: 209, column: 24, offset: 5569 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 5546 },
        end: { line: 209, column: 24, offset: 5569 }
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
        start: { line: 210, column: 1, offset: 5570 },
        end: { line: 225, column: 4, offset: 5961 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Serve the ',
          position: {
            start: { line: 227, column: 1, offset: 5963 },
            end: { line: 227, column: 11, offset: 5973 }
          }
        },
        {
          type: 'inlineCode',
          value: 'public',
          position: {
            start: { line: 227, column: 11, offset: 5973 },
            end: { line: 227, column: 19, offset: 5981 }
          }
        },
        {
          type: 'text',
          value: ' folder.',
          position: {
            start: { line: 227, column: 19, offset: 5981 },
            end: { line: 227, column: 27, offset: 5989 }
          }
        }
      ],
      position: {
        start: { line: 227, column: 1, offset: 5963 },
        end: { line: 227, column: 27, offset: 5989 }
      }
    },
    {
      type: 'code',
      lang: 'sh',
      meta: null,
      value: 'static-web-server --port=8080 --root=./public',
      position: {
        start: { line: 229, column: 1, offset: 5991 },
        end: { line: 231, column: 4, offset: 6046 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Navigate to ',
          position: {
            start: { line: 233, column: 1, offset: 6048 },
            end: { line: 233, column: 13, offset: 6060 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http://localhost:8080/',
          position: {
            start: { line: 233, column: 13, offset: 6060 },
            end: { line: 233, column: 37, offset: 6084 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 233, column: 37, offset: 6084 },
            end: { line: 233, column: 38, offset: 6085 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 1, offset: 6048 },
        end: { line: 233, column: 38, offset: 6085 }
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
            start: { line: 235, column: 4, offset: 6090 },
            end: { line: 235, column: 14, offset: 6100 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 6087 },
        end: { line: 235, column: 14, offset: 6100 }
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
            start: { line: 237, column: 5, offset: 6106 },
            end: { line: 237, column: 11, offset: 6112 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 6102 },
        end: { line: 237, column: 11, offset: 6112 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Set ',
          position: {
            start: { line: 238, column: 1, offset: 6113 },
            end: { line: 238, column: 5, offset: 6117 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 238, column: 5, offset: 6117 },
            end: { line: 238, column: 19, offset: 6131 }
          }
        },
        {
          type: 'text',
          value: ' globally for a better developer experience.',
          position: {
            start: { line: 238, column: 19, offset: 6131 },
            end: { line: 238, column: 63, offset: 6175 }
          }
        }
      ],
      position: {
        start: { line: 238, column: 1, offset: 6113 },
        end: { line: 238, column: 63, offset: 6175 }
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
        start: { line: 239, column: 1, offset: 6176 },
        end: { line: 253, column: 4, offset: 6501 }
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
            start: { line: 255, column: 5, offset: 6507 },
            end: { line: 255, column: 18, offset: 6520 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 6503 },
        end: { line: 255, column: 18, offset: 6520 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To have React Context with Arche, wrap ',
          position: {
            start: { line: 256, column: 1, offset: 6521 },
            end: { line: 256, column: 40, offset: 6560 }
          }
        },
        {
          type: 'inlineCode',
          value: 'YourContext.Provider',
          position: {
            start: { line: 256, column: 40, offset: 6560 },
            end: { line: 256, column: 62, offset: 6582 }
          }
        },
        {
          type: 'text',
          value: ' with ',
          position: {
            start: { line: 256, column: 62, offset: 6582 },
            end: { line: 256, column: 68, offset: 6588 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 256, column: 68, offset: 6588 },
            end: { line: 256, column: 82, offset: 6602 }
          }
        },
        {
          type: 'text',
          value: ' and supply ',
          position: {
            start: { line: 256, column: 82, offset: 6602 },
            end: { line: 256, column: 94, offset: 6614 }
          }
        },
        {
          type: 'inlineCode',
          value: 'value',
          position: {
            start: { line: 256, column: 94, offset: 6614 },
            end: { line: 256, column: 101, offset: 6621 }
          }
        },
        {
          type: 'text',
          value: ' as a prop, specifying children in the next argument.',
          position: {
            start: { line: 256, column: 101, offset: 6621 },
            end: { line: 256, column: 154, offset: 6674 }
          }
        }
      ],
      position: {
        start: { line: 256, column: 1, offset: 6521 },
        end: { line: 256, column: 154, offset: 6674 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'JSX example:',
          position: {
            start: { line: 258, column: 1, offset: 6676 },
            end: { line: 258, column: 13, offset: 6688 }
          }
        }
      ],
      position: {
        start: { line: 258, column: 1, offset: 6676 },
        end: { line: 258, column: 13, offset: 6688 }
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
        start: { line: 259, column: 1, offset: 6689 },
        end: { line: 273, column: 4, offset: 6963 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Translates to the following with Arche:',
          position: {
            start: { line: 275, column: 1, offset: 6965 },
            end: { line: 275, column: 40, offset: 7004 }
          }
        }
      ],
      position: {
        start: { line: 275, column: 1, offset: 6965 },
        end: { line: 275, column: 40, offset: 7004 }
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
        start: { line: 276, column: 1, offset: 7005 },
        end: { line: 284, column: 4, offset: 7251 }
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
            start: { line: 286, column: 5, offset: 7257 },
            end: { line: 286, column: 20, offset: 7272 }
          }
        }
      ],
      position: {
        start: { line: 286, column: 1, offset: 7253 },
        end: { line: 286, column: 20, offset: 7272 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For React fragments (',
          position: {
            start: { line: 287, column: 1, offset: 7273 },
            end: { line: 287, column: 22, offset: 7294 }
          }
        },
        {
          type: 'inlineCode',
          value: '<>',
          position: {
            start: { line: 287, column: 22, offset: 7294 },
            end: { line: 287, column: 26, offset: 7298 }
          }
        },
        {
          type: 'text',
          value: '), just return an array.',
          position: {
            start: { line: 287, column: 26, offset: 7298 },
            end: { line: 287, column: 50, offset: 7322 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 7273 },
        end: { line: 287, column: 50, offset: 7322 }
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
        start: { line: 289, column: 1, offset: 7324 },
        end: { line: 304, column: 4, offset: 7754 }
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
            start: { line: 306, column: 5, offset: 7760 },
            end: { line: 306, column: 35, offset: 7790 }
          }
        }
      ],
      position: {
        start: { line: 306, column: 1, offset: 7756 },
        end: { line: 306, column: 35, offset: 7790 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To install Styled Components, add the following script to your Arche and React scripts.',
          position: {
            start: { line: 307, column: 1, offset: 7791 },
            end: { line: 307, column: 88, offset: 7878 }
          }
        }
      ],
      position: {
        start: { line: 307, column: 1, offset: 7791 },
        end: { line: 307, column: 88, offset: 7878 }
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<script src="https://cdn.jsdelivr.net/npm/styled-components/dist/styled-components.min.js"></script>',
      position: {
        start: { line: 308, column: 1, offset: 7879 },
        end: { line: 310, column: 4, offset: 7991 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche accepts a ',
          position: {
            start: { line: 312, column: 1, offset: 7993 },
            end: { line: 312, column: 17, offset: 8009 }
          }
        },
        {
          type: 'inlineCode',
          value: 'styled',
          position: {
            start: { line: 312, column: 17, offset: 8009 },
            end: { line: 312, column: 25, offset: 8017 }
          }
        },
        {
          type: 'text',
          value: ' option from css-in-js libraries like ',
          position: {
            start: { line: 312, column: 25, offset: 8017 },
            end: { line: 312, column: 63, offset: 8055 }
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
                start: { line: 312, column: 64, offset: 8056 },
                end: { line: 312, column: 81, offset: 8073 }
              }
            }
          ],
          position: {
            start: { line: 312, column: 63, offset: 8055 },
            end: { line: 312, column: 114, offset: 8106 }
          }
        },
        {
          type: 'text',
          value: ' to enable a ',
          position: {
            start: { line: 312, column: 114, offset: 8106 },
            end: { line: 312, column: 127, offset: 8119 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 312, column: 127, offset: 8119 },
            end: { line: 312, column: 132, offset: 8124 }
          }
        },
        {
          type: 'text',
          value: ' prop on ',
          position: {
            start: { line: 312, column: 132, offset: 8124 },
            end: { line: 312, column: 141, offset: 8133 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ReactElement',
          position: {
            start: { line: 312, column: 141, offset: 8133 },
            end: { line: 312, column: 155, offset: 8147 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 312, column: 155, offset: 8147 },
            end: { line: 312, column: 160, offset: 8152 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedReactElement',
          position: {
            start: { line: 312, column: 160, offset: 8152 },
            end: { line: 312, column: 179, offset: 8171 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 312, column: 179, offset: 8171 },
            end: { line: 312, column: 180, offset: 8172 }
          }
        }
      ],
      position: {
        start: { line: 312, column: 1, offset: 7993 },
        end: { line: 312, column: 180, offset: 8172 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const ReactElement = Arche(React, { styled })',
      position: {
        start: { line: 313, column: 1, offset: 8173 },
        end: { line: 315, column: 4, offset: 8236 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Elements can now specify a ',
          position: {
            start: { line: 317, column: 1, offset: 8238 },
            end: { line: 317, column: 28, offset: 8265 }
          }
        },
        {
          type: 'inlineCode',
          value: 'css',
          position: {
            start: { line: 317, column: 28, offset: 8265 },
            end: { line: 317, column: 33, offset: 8270 }
          }
        },
        {
          type: 'text',
          value: ' prop for css-in-js.',
          position: {
            start: { line: 317, column: 33, offset: 8270 },
            end: { line: 317, column: 53, offset: 8290 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 1, offset: 8238 },
        end: { line: 317, column: 53, offset: 8290 }
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
        start: { line: 318, column: 1, offset: 8291 },
        end: { line: 336, column: 4, offset: 8675 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Server-Side Rendering',
          position: {
            start: { line: 338, column: 3, offset: 8679 },
            end: { line: 338, column: 24, offset: 8700 }
          }
        }
      ],
      position: {
        start: { line: 338, column: 1, offset: 8677 },
        end: { line: 338, column: 24, offset: 8700 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For server-side rendering, see ',
          position: {
            start: { line: 339, column: 1, offset: 8701 },
            end: { line: 339, column: 32, offset: 8732 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/richytong/ArcheHTML',
          children: [
            {
              type: 'text',
              value: 'ArcheHTML',
              position: {
                start: { line: 339, column: 33, offset: 8733 },
                end: { line: 339, column: 42, offset: 8742 }
              }
            }
          ],
          position: {
            start: { line: 339, column: 32, offset: 8732 },
            end: { line: 339, column: 83, offset: 8783 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 339, column: 83, offset: 8783 },
            end: { line: 339, column: 84, offset: 8784 }
          }
        }
      ],
      position: {
        start: { line: 339, column: 1, offset: 8701 },
        end: { line: 339, column: 84, offset: 8784 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Vanilla Microfrontends Ecosystem',
          position: {
            start: { line: 341, column: 3, offset: 8788 },
            end: { line: 341, column: 35, offset: 8820 }
          }
        }
      ],
      position: {
        start: { line: 341, column: 1, offset: 8786 },
        end: { line: 341, column: 35, offset: 8820 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some awesome libraries that are part of the vanilla microfrontends ecosystem.',
          position: {
            start: { line: 342, column: 1, offset: 8821 },
            end: { line: 342, column: 87, offset: 8907 }
          }
        }
      ],
      position: {
        start: { line: 342, column: 1, offset: 8821 },
        end: { line: 342, column: 87, offset: 8907 }
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
                  type: 'link',
                  title: null,
                  url: 'https://github.com/richytong/ArcheHighlight',
                  children: [
                    {
                      type: 'text',
                      value: 'ArcheHighlight',
                      position: {
                        start: { line: 343, column: 6, offset: 8913 },
                        end: { line: 343, column: 20, offset: 8927 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 343, column: 5, offset: 8912 },
                    end: { line: 343, column: 66, offset: 8973 }
                  }
                },
                {
                  type: 'text',
                  value: ' - Syntax highlighting for vanilla microfrontends.',
                  position: {
                    start: { line: 343, column: 66, offset: 8973 },
                    end: { line: 343, column: 116, offset: 9023 }
                  }
                }
              ],
              position: {
                start: { line: 343, column: 5, offset: 8912 },
                end: { line: 343, column: 116, offset: 9023 }
              }
            }
          ],
          position: {
            start: { line: 343, column: 3, offset: 8910 },
            end: { line: 343, column: 116, offset: 9023 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 3, offset: 8910 },
        end: { line: 343, column: 116, offset: 9023 }
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
            start: { line: 345, column: 3, offset: 9027 },
            end: { line: 345, column: 15, offset: 9039 }
          }
        }
      ],
      position: {
        start: { line: 345, column: 1, offset: 9025 },
        end: { line: 345, column: 15, offset: 9039 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 346, column: 1, offset: 9040 },
            end: { line: 346, column: 260, offset: 9299 }
          }
        }
      ],
      position: {
        start: { line: 346, column: 1, offset: 9040 },
        end: { line: 346, column: 260, offset: 9299 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. If you are interested in contributing, the ',
          position: {
            start: { line: 348, column: 1, offset: 9301 },
            end: { line: 348, column: 121, offset: 9421 }
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
                start: { line: 348, column: 122, offset: 9422 },
                end: { line: 348, column: 133, offset: 9433 }
              }
            }
          ],
          position: {
            start: { line: 348, column: 121, offset: 9421 },
            end: { line: 348, column: 226, offset: 9526 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 348, column: 226, offset: 9526 },
            end: { line: 348, column: 256, offset: 9556 }
          }
        }
      ],
      position: {
        start: { line: 348, column: 1, offset: 9301 },
        end: { line: 348, column: 256, offset: 9556 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 350, column: 1, offset: 9558 },
            end: { line: 350, column: 33, offset: 9590 }
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
                start: { line: 350, column: 34, offset: 9591 },
                end: { line: 350, column: 49, offset: 9606 }
              }
            }
          ],
          position: {
            start: { line: 350, column: 33, offset: 9590 },
            end: { line: 350, column: 114, offset: 9671 }
          }
        }
      ],
      position: {
        start: { line: 350, column: 1, offset: 9558 },
        end: { line: 350, column: 114, offset: 9671 }
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
            start: { line: 352, column: 3, offset: 9675 },
            end: { line: 352, column: 10, offset: 9682 }
          }
        }
      ],
      position: {
        start: { line: 352, column: 1, offset: 9673 },
        end: { line: 352, column: 10, offset: 9682 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Arche is distributed under the ',
          position: {
            start: { line: 353, column: 1, offset: 9683 },
            end: { line: 353, column: 32, offset: 9714 }
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
                start: { line: 353, column: 33, offset: 9715 },
                end: { line: 353, column: 46, offset: 9728 }
              }
            }
          ],
          position: {
            start: { line: 353, column: 32, offset: 9714 },
            end: { line: 353, column: 98, offset: 9780 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 353, column: 98, offset: 9780 },
            end: { line: 353, column: 99, offset: 9781 }
          }
        }
      ],
      position: {
        start: { line: 353, column: 1, offset: 9683 },
        end: { line: 353, column: 99, offset: 9781 }
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
            start: { line: 355, column: 3, offset: 9785 },
            end: { line: 355, column: 10, offset: 9792 }
          }
        }
      ],
      position: {
        start: { line: 355, column: 1, offset: 9783 },
        end: { line: 355, column: 10, offset: 9792 }
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
                    start: { line: 356, column: 4, offset: 9796 },
                    end: { line: 356, column: 31, offset: 9823 }
                  }
                }
              ],
              position: {
                start: { line: 356, column: 4, offset: 9796 },
                end: { line: 356, column: 31, offset: 9823 }
              }
            }
          ],
          position: {
            start: { line: 356, column: 2, offset: 9794 },
            end: { line: 356, column: 31, offset: 9823 }
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
                    start: { line: 357, column: 4, offset: 9827 },
                    end: { line: 357, column: 30, offset: 9853 }
                  }
                }
              ],
              position: {
                start: { line: 357, column: 4, offset: 9827 },
                end: { line: 357, column: 30, offset: 9853 }
              }
            }
          ],
          position: {
            start: { line: 357, column: 2, offset: 9825 },
            end: { line: 357, column: 30, offset: 9853 }
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
                    start: { line: 358, column: 4, offset: 9857 },
                    end: { line: 358, column: 31, offset: 9884 }
                  }
                }
              ],
              position: {
                start: { line: 358, column: 4, offset: 9857 },
                end: { line: 358, column: 31, offset: 9884 }
              }
            }
          ],
          position: {
            start: { line: 358, column: 2, offset: 9855 },
            end: { line: 358, column: 31, offset: 9884 }
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
                    start: { line: 359, column: 4, offset: 9888 },
                    end: { line: 359, column: 28, offset: 9912 }
                  }
                }
              ],
              position: {
                start: { line: 359, column: 4, offset: 9888 },
                end: { line: 359, column: 28, offset: 9912 }
              }
            }
          ],
          position: {
            start: { line: 359, column: 2, offset: 9886 },
            end: { line: 359, column: 28, offset: 9912 }
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
                    start: { line: 360, column: 4, offset: 9916 },
                    end: { line: 360, column: 32, offset: 9944 }
                  }
                }
              ],
              position: {
                start: { line: 360, column: 4, offset: 9916 },
                end: { line: 360, column: 32, offset: 9944 }
              }
            }
          ],
          position: {
            start: { line: 360, column: 2, offset: 9914 },
            end: { line: 360, column: 32, offset: 9944 }
          }
        }
      ],
      position: {
        start: { line: 356, column: 2, offset: 9794 },
        end: { line: 360, column: 32, offset: 9944 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 361, column: 1, offset: 9945 }
  }
}