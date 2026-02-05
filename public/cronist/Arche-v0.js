export default [
  {
    name: 'DocumentElement',
    docs: '```coffeescript [specscript]\n' +
      'type DocumentElementChildren = string|Array<string|Element>\n' +
      '\n' +
      'type TypedDocumentElement =\n' +
      '  (props object, children DocumentElementChildren)=>(element Element)\n' +
      '  |(children DocumentElementChildren)=>(element Element)\n' +
      '  |(props object)=>(element Element)\n' +
      '\n' +
      'DocumentElement(elementType string) -> TypedDocumentElement\n' +
      '```\n' +
      '\n' +
      'The `DocumentElement` constructor returned from `Arche(document)`. Constructs a `TypedDocumentElement` constructor.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `elementType` - the name of the HTML element that the `TypedDocumentElement` constructor will represent.\n' +
      '\n' +
      'Return:\n' +
      '   * `TypedDocumentElement` - a DOM element constructor.\n' +
      '\n' +
      '```javascript\n' +
      'const DocumentElement = Arche(document)\n' +
      '\n' +
      "const H1 = DocumentElement('h1') // H1 is a DOM element constructor\n" +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'DocumentElement',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 16, offset: 15 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 16, offset: 15 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 16, offset: 15 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'type DocumentElementChildren = string|Array<string|Element>\n' +
              '\n' +
              'type TypedDocumentElement =\n' +
              '  (props object, children DocumentElementChildren)=>(element Element)\n' +
              '  |(children DocumentElementChildren)=>(element Element)\n' +
              '  |(props object)=>(element Element)\n' +
              '\n' +
              'DocumentElement(elementType string) -> TypedDocumentElement',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 10, column: 4, offset: 346 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The ',
                position: {
                  start: { line: 12, column: 1, offset: 348 },
                  end: { line: 12, column: 5, offset: 352 }
                }
              },
              {
                type: 'inlineCode',
                value: 'DocumentElement',
                position: {
                  start: { line: 12, column: 5, offset: 352 },
                  end: { line: 12, column: 22, offset: 369 }
                }
              },
              {
                type: 'text',
                value: ' constructor returned from ',
                position: {
                  start: { line: 12, column: 22, offset: 369 },
                  end: { line: 12, column: 49, offset: 396 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Arche(document)',
                position: {
                  start: { line: 12, column: 49, offset: 396 },
                  end: { line: 12, column: 66, offset: 413 }
                }
              },
              {
                type: 'text',
                value: '. Constructs a ',
                position: {
                  start: { line: 12, column: 66, offset: 413 },
                  end: { line: 12, column: 81, offset: 428 }
                }
              },
              {
                type: 'inlineCode',
                value: 'TypedDocumentElement',
                position: {
                  start: { line: 12, column: 81, offset: 428 },
                  end: { line: 12, column: 103, offset: 450 }
                }
              },
              {
                type: 'text',
                value: ' constructor.',
                position: {
                  start: { line: 12, column: 103, offset: 450 },
                  end: { line: 12, column: 116, offset: 463 }
                }
              }
            ],
            position: {
              start: { line: 12, column: 1, offset: 348 },
              end: { line: 12, column: 116, offset: 463 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 14, column: 1, offset: 465 },
                  end: { line: 14, column: 11, offset: 475 }
                }
              }
            ],
            position: {
              start: { line: 14, column: 1, offset: 465 },
              end: { line: 14, column: 11, offset: 475 }
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
                        type: 'inlineCode',
                        value: 'elementType',
                        position: {
                          start: { line: 15, column: 5, offset: 480 },
                          end: { line: 15, column: 18, offset: 493 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - the name of the HTML element that the ',
                        position: {
                          start: { line: 15, column: 18, offset: 493 },
                          end: { line: 15, column: 59, offset: 534 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'TypedDocumentElement',
                        position: {
                          start: { line: 15, column: 59, offset: 534 },
                          end: { line: 15, column: 81, offset: 556 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' constructor will represent.',
                        position: {
                          start: { line: 15, column: 81, offset: 556 },
                          end: { line: 15, column: 109, offset: 584 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 15, column: 5, offset: 480 },
                      end: { line: 15, column: 109, offset: 584 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 3, offset: 478 },
                  end: { line: 15, column: 109, offset: 584 }
                }
              }
            ],
            position: {
              start: { line: 15, column: 3, offset: 478 },
              end: { line: 15, column: 109, offset: 584 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 17, column: 1, offset: 586 },
                  end: { line: 17, column: 8, offset: 593 }
                }
              }
            ],
            position: {
              start: { line: 17, column: 1, offset: 586 },
              end: { line: 17, column: 8, offset: 593 }
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
                        type: 'inlineCode',
                        value: 'TypedDocumentElement',
                        position: {
                          start: { line: 18, column: 6, offset: 599 },
                          end: { line: 18, column: 28, offset: 621 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a DOM element constructor.',
                        position: {
                          start: { line: 18, column: 28, offset: 621 },
                          end: { line: 18, column: 57, offset: 650 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 18, column: 6, offset: 599 },
                      end: { line: 18, column: 57, offset: 650 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 4, offset: 597 },
                  end: { line: 18, column: 57, offset: 650 }
                }
              }
            ],
            position: {
              start: { line: 18, column: 4, offset: 597 },
              end: { line: 18, column: 57, offset: 650 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const DocumentElement = Arche(document)\n' +
              '\n' +
              "const H1 = DocumentElement('h1') // H1 is a DOM element constructor",
            position: {
              start: { line: 20, column: 1, offset: 652 },
              end: { line: 24, column: 4, offset: 778 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 24, column: 4, offset: 778 }
        }
      }
    },
    methods: [
      {
        name: 'DocumentElement.{ELEMENT_NAME}',
        docs: '```coffeescript [specscript]\n' +
          'type DocumentElementChildren = string|Array<string|Element>\n' +
          '\n' +
          'type TypedDocumentElement =\n' +
          '  (props object, children DocumentElementChildren)=>(element Element)\n' +
          '  |(children DocumentElementChildren)=>(element Element)\n' +
          '  |(props object)=>(element Element)\n' +
          '\n' +
          'type DocumentElement = (elementType string)=>TypedDocumentElement\n' +
          '\n' +
          'DocumentElement.{ELEMENT_NAME} -> TypedDocumentElement\n' +
          '```\n' +
          '\n' +
          'The DocumentElement.{ELEMENT_NAME} constructor.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `props` - an object of element properties. These are equivalent to [html attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes).\n' +
          '  * `children` - a string or array of strings and/or [elements](https://developer.mozilla.org/en-US/docs/Web/API/Element). Represents nesting elements in HTML.\n' +
          '\n' +
          'Return:\n' +
          '  * `element` - [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) - a basic [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) element.\n' +
          '\n' +
          '```javascript\n' +
          'const DocumentElement = Arche(document)\n' +
          'const my{ELEMENT_NAME} = DocumentElement.{ELEMENT_NAME}({CHILDREN})\n' +
          "document.getElementById('#container').appendChild(my{ELEMENT_NAME})\n" +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'DocumentElement.{ELEMENT_NAME}',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 31, offset: 30 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 31, offset: 30 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 31, offset: 30 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'type DocumentElementChildren = string|Array<string|Element>\n' +
                  '\n' +
                  'type TypedDocumentElement =\n' +
                  '  (props object, children DocumentElementChildren)=>(element Element)\n' +
                  '  |(children DocumentElementChildren)=>(element Element)\n' +
                  '  |(props object)=>(element Element)\n' +
                  '\n' +
                  'type DocumentElement = (elementType string)=>TypedDocumentElement\n' +
                  '\n' +
                  'DocumentElement.{ELEMENT_NAME} -> TypedDocumentElement',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 12, column: 4, offset: 408 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The DocumentElement.{ELEMENT_NAME} constructor.',
                    position: {
                      start: { line: 14, column: 1, offset: 410 },
                      end: { line: 14, column: 48, offset: 457 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 1, offset: 410 },
                  end: { line: 14, column: 48, offset: 457 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 16, column: 1, offset: 459 },
                      end: { line: 16, column: 11, offset: 469 }
                    }
                  }
                ],
                position: {
                  start: { line: 16, column: 1, offset: 459 },
                  end: { line: 16, column: 11, offset: 469 }
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
                            type: 'inlineCode',
                            value: 'props',
                            position: {
                              start: { line: 17, column: 5, offset: 474 },
                              end: { line: 17, column: 12, offset: 481 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an object of element properties. These are equivalent to ',
                            position: {
                              start: { line: 17, column: 12, offset: 481 },
                              end: { line: 17, column: 72, offset: 541 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes',
                            children: [
                              {
                                type: 'text',
                                value: 'html attributes',
                                position: {
                                  start: { line: 17, column: 73, offset: 542 },
                                  end: { line: 17, column: 88, offset: 557 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 17, column: 72, offset: 541 },
                              end: { line: 17, column: 161, offset: 630 }
                            }
                          },
                          {
                            type: 'text',
                            value: '.',
                            position: {
                              start: { line: 17, column: 161, offset: 630 },
                              end: { line: 17, column: 162, offset: 631 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 17, column: 5, offset: 474 },
                          end: { line: 17, column: 162, offset: 631 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 17, column: 3, offset: 472 },
                      end: { line: 17, column: 162, offset: 631 }
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
                            type: 'inlineCode',
                            value: 'children',
                            position: {
                              start: { line: 18, column: 5, offset: 636 },
                              end: { line: 18, column: 15, offset: 646 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a string or array of strings and/or ',
                            position: {
                              start: { line: 18, column: 15, offset: 646 },
                              end: { line: 18, column: 54, offset: 685 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://developer.mozilla.org/en-US/docs/Web/API/Element',
                            children: [
                              {
                                type: 'text',
                                value: 'elements',
                                position: {
                                  start: { line: 18, column: 55, offset: 686 },
                                  end: { line: 18, column: 63, offset: 694 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 18, column: 54, offset: 685 },
                              end: { line: 18, column: 122, offset: 753 }
                            }
                          },
                          {
                            type: 'text',
                            value: '. Represents nesting elements in HTML.',
                            position: {
                              start: { line: 18, column: 122, offset: 753 },
                              end: { line: 18, column: 160, offset: 791 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 636 },
                          end: { line: 18, column: 160, offset: 791 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 18, column: 3, offset: 634 },
                      end: { line: 18, column: 160, offset: 791 }
                    }
                  }
                ],
                position: {
                  start: { line: 17, column: 3, offset: 472 },
                  end: { line: 18, column: 160, offset: 791 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 20, column: 1, offset: 793 },
                      end: { line: 20, column: 8, offset: 800 }
                    }
                  }
                ],
                position: {
                  start: { line: 20, column: 1, offset: 793 },
                  end: { line: 20, column: 8, offset: 800 }
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
                            type: 'inlineCode',
                            value: 'element',
                            position: {
                              start: { line: 21, column: 5, offset: 805 },
                              end: { line: 21, column: 14, offset: 814 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 21, column: 14, offset: 814 },
                              end: { line: 21, column: 17, offset: 817 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://developer.mozilla.org/en-US/docs/Web/API/Element',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'Element',
                                position: {
                                  start: { line: 21, column: 18, offset: 818 },
                                  end: { line: 21, column: 27, offset: 827 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 17, offset: 817 },
                              end: { line: 21, column: 86, offset: 886 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a basic ',
                            position: {
                              start: { line: 21, column: 86, offset: 886 },
                              end: { line: 21, column: 97, offset: 897 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model',
                            children: [
                              {
                                type: 'text',
                                value: 'DOM',
                                position: {
                                  start: { line: 21, column: 98, offset: 898 },
                                  end: {
                                    line: 21,
                                    column: 101,
                                    offset: 901
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 97, offset: 897 },
                              end: { line: 21, column: 174, offset: 974 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' element.',
                            position: {
                              start: { line: 21, column: 174, offset: 974 },
                              end: { line: 21, column: 183, offset: 983 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 805 },
                          end: { line: 21, column: 183, offset: 983 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 21, column: 3, offset: 803 },
                      end: { line: 21, column: 183, offset: 983 }
                    }
                  }
                ],
                position: {
                  start: { line: 21, column: 3, offset: 803 },
                  end: { line: 21, column: 183, offset: 983 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const DocumentElement = Arche(document)\n' +
                  'const my{ELEMENT_NAME} = DocumentElement.{ELEMENT_NAME}({CHILDREN})\n' +
                  "document.getElementById('#container').appendChild(my{ELEMENT_NAME})",
                position: {
                  start: { line: 23, column: 1, offset: 985 },
                  end: { line: 27, column: 4, offset: 1178 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 27, column: 4, offset: 1178 }
            }
          }
        }
      },
      {
        name: 'ReactElement',
        docs: '```coffeescript [specscript]\n' +
          'type React = {\n' +
          '  Element: {\n' +
          '    $$typeof: Symbol,\n' +
          '    props: Object,\n' +
          '    type: any,\n' +
          '  },\n' +
          '  createElement: (\n' +
          '    elementType string,\n' +
          '    props object,\n' +
          '    children string|Array<React.Element|string>\n' +
          '\n' +
          '  )=>(reactElement React.Element),\n' +
          '}\n' +
          '\n' +
          'type ReactElementChildren = string|Array<React.Element>\n' +
          '\n' +
          'type TypedReactElement =\n' +
          '  (props object, children ReactElementChildren)=>(reactElement React.Element)\n' +
          '  |(children ReactElementChildren)=>(reactElement React.Element)\n' +
          '  |(props object)=>(reactElement React.Element)\n' +
          '\n' +
          'type ReactElement =\n' +
          '  ReactFunctionComponent=>(reactElement React.Element)\n' +
          '  |(elementType string)=>TypedReactElement\n' +
          '\n' +
          'ReactElement(fn ReactFunctionComponent) -> reactElement React.Element\n' +
          'ReactElement(elementType string) -> TypedReactElement\n' +
          '```\n' +
          '\n' +
          'The `ReactElement` constructor returned from `Arche(React)`. Constructs a `TypedReactElement` constructor.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `elementType` - the name of the HTML element that the `TypedReactElement` constructor will represent.\n' +
          '\n' +
          'Return:\n' +
          '   * `TypedReactElement` - a React element constructor.\n' +
          '\n' +
          '```javascript\n' +
          'const ReactElement = Arche(React)\n' +
          '\n' +
          "const H1 = ReactElement('h1') // H1 is a React element constructor\n" +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'ReactElement',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 13, offset: 12 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'type React = {\n' +
                  '  Element: {\n' +
                  '    $$typeof: Symbol,\n' +
                  '    props: Object,\n' +
                  '    type: any,\n' +
                  '  },\n' +
                  '  createElement: (\n' +
                  '    elementType string,\n' +
                  '    props object,\n' +
                  '    children string|Array<React.Element|string>\n' +
                  '\n' +
                  '  )=>(reactElement React.Element),\n' +
                  '}\n' +
                  '\n' +
                  'type ReactElementChildren = string|Array<React.Element>\n' +
                  '\n' +
                  'type TypedReactElement =\n' +
                  '  (props object, children ReactElementChildren)=>(reactElement React.Element)\n' +
                  '  |(children ReactElementChildren)=>(reactElement React.Element)\n' +
                  '  |(props object)=>(reactElement React.Element)\n' +
                  '\n' +
                  'type ReactElement =\n' +
                  '  ReactFunctionComponent=>(reactElement React.Element)\n' +
                  '  |(elementType string)=>TypedReactElement\n' +
                  '\n' +
                  'ReactElement(fn ReactFunctionComponent) -> reactElement React.Element\n' +
                  'ReactElement(elementType string) -> TypedReactElement',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 29, column: 4, offset: 786 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The ',
                    position: {
                      start: { line: 31, column: 1, offset: 788 },
                      end: { line: 31, column: 5, offset: 792 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'ReactElement',
                    position: {
                      start: { line: 31, column: 5, offset: 792 },
                      end: { line: 31, column: 19, offset: 806 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' constructor returned from ',
                    position: {
                      start: { line: 31, column: 19, offset: 806 },
                      end: { line: 31, column: 46, offset: 833 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'Arche(React)',
                    position: {
                      start: { line: 31, column: 46, offset: 833 },
                      end: { line: 31, column: 60, offset: 847 }
                    }
                  },
                  {
                    type: 'text',
                    value: '. Constructs a ',
                    position: {
                      start: { line: 31, column: 60, offset: 847 },
                      end: { line: 31, column: 75, offset: 862 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'TypedReactElement',
                    position: {
                      start: { line: 31, column: 75, offset: 862 },
                      end: { line: 31, column: 94, offset: 881 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' constructor.',
                    position: {
                      start: { line: 31, column: 94, offset: 881 },
                      end: { line: 31, column: 107, offset: 894 }
                    }
                  }
                ],
                position: {
                  start: { line: 31, column: 1, offset: 788 },
                  end: { line: 31, column: 107, offset: 894 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 33, column: 1, offset: 896 },
                      end: { line: 33, column: 11, offset: 906 }
                    }
                  }
                ],
                position: {
                  start: { line: 33, column: 1, offset: 896 },
                  end: { line: 33, column: 11, offset: 906 }
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
                            type: 'inlineCode',
                            value: 'elementType',
                            position: {
                              start: { line: 34, column: 5, offset: 911 },
                              end: { line: 34, column: 18, offset: 924 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the name of the HTML element that the ',
                            position: {
                              start: { line: 34, column: 18, offset: 924 },
                              end: { line: 34, column: 59, offset: 965 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'TypedReactElement',
                            position: {
                              start: { line: 34, column: 59, offset: 965 },
                              end: { line: 34, column: 78, offset: 984 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' constructor will represent.',
                            position: {
                              start: { line: 34, column: 78, offset: 984 },
                              end: { line: 34, column: 106, offset: 1012 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 34, column: 5, offset: 911 },
                          end: { line: 34, column: 106, offset: 1012 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 34, column: 3, offset: 909 },
                      end: { line: 34, column: 106, offset: 1012 }
                    }
                  }
                ],
                position: {
                  start: { line: 34, column: 3, offset: 909 },
                  end: { line: 34, column: 106, offset: 1012 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 36, column: 1, offset: 1014 },
                      end: { line: 36, column: 8, offset: 1021 }
                    }
                  }
                ],
                position: {
                  start: { line: 36, column: 1, offset: 1014 },
                  end: { line: 36, column: 8, offset: 1021 }
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
                            type: 'inlineCode',
                            value: 'TypedReactElement',
                            position: {
                              start: { line: 37, column: 6, offset: 1027 },
                              end: { line: 37, column: 25, offset: 1046 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a React element constructor.',
                            position: {
                              start: { line: 37, column: 25, offset: 1046 },
                              end: { line: 37, column: 56, offset: 1077 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 37, column: 6, offset: 1027 },
                          end: { line: 37, column: 56, offset: 1077 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 37, column: 4, offset: 1025 },
                      end: { line: 37, column: 56, offset: 1077 }
                    }
                  }
                ],
                position: {
                  start: { line: 37, column: 4, offset: 1025 },
                  end: { line: 37, column: 56, offset: 1077 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const ReactElement = Arche(React)\n' +
                  '\n' +
                  "const H1 = ReactElement('h1') // H1 is a React element constructor",
                position: {
                  start: { line: 39, column: 1, offset: 1079 },
                  end: { line: 43, column: 4, offset: 1198 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 43, column: 4, offset: 1198 }
            }
          }
        }
      },
      {
        name: 'ReactElement.{ELEMENT_NAME}',
        docs: '```coffeescript [specscript]\n' +
          'type React = {\n' +
          '  Element: {\n' +
          '    $$typeof: Symbol,\n' +
          '    props: Object,\n' +
          '    type: any,\n' +
          '  },\n' +
          '  createElement: (\n' +
          '    elementType string,\n' +
          '    props object,\n' +
          '    children string|Array<React.Element|string>\n' +
          '\n' +
          '  )=>(reactElement React.Element),\n' +
          '}\n' +
          '\n' +
          'type ReactElementChildren = string|Array<React.Element>\n' +
          '\n' +
          'type TypedReactElement =\n' +
          '  (props object, children ReactElementChildren)=>(reactElement React.Element)\n' +
          '  |(children ReactElementChildren)=>(reactElement React.Element)\n' +
          '  |(props object)=>(reactElement React.Element)\n' +
          '\n' +
          'type ReactElement =\n' +
          '  ReactFunctionComponent=>(reactElement React.Element)\n' +
          '  |(elementType string)=>TypedReactElement\n' +
          '\n' +
          'ReactElement.{ELEMENT_NAME} -> TypedReactElement\n' +
          '```\n' +
          '\n' +
          'The ReactElement.{ELEMENT_NAME} constructor.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `props` - an object of React element properties. These are equivalent to [React props](https://react.dev/learn/passing-props-to-a-component).\n' +
          '  * `children` - a string or array of strings and/or React elements. Represents nesting elements in HTML.\n' +
          '\n' +
          'Return:\n' +
          '  * `reactElement` - a basic React element, `reactElement` is recognized by React and used to render the final React application.\n' +
          '\n' +
          '```javascript\n' +
          'const ReactElement = Arche(React)\n' +
          'const myReact{ELEMENT_NAME} = ReactElement.{ELEMENT_NAME}({CHILDREN})\n' +
          "ReactDOM.render(myReact{ELEMENT_NAME}, document.getElementById('react-root'))\n" +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'ReactElement.{ELEMENT_NAME}',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 28, offset: 27 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 28, offset: 27 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 28, offset: 27 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'type React = {\n' +
                  '  Element: {\n' +
                  '    $$typeof: Symbol,\n' +
                  '    props: Object,\n' +
                  '    type: any,\n' +
                  '  },\n' +
                  '  createElement: (\n' +
                  '    elementType string,\n' +
                  '    props object,\n' +
                  '    children string|Array<React.Element|string>\n' +
                  '\n' +
                  '  )=>(reactElement React.Element),\n' +
                  '}\n' +
                  '\n' +
                  'type ReactElementChildren = string|Array<React.Element>\n' +
                  '\n' +
                  'type TypedReactElement =\n' +
                  '  (props object, children ReactElementChildren)=>(reactElement React.Element)\n' +
                  '  |(children ReactElementChildren)=>(reactElement React.Element)\n' +
                  '  |(props object)=>(reactElement React.Element)\n' +
                  '\n' +
                  'type ReactElement =\n' +
                  '  ReactFunctionComponent=>(reactElement React.Element)\n' +
                  '  |(elementType string)=>TypedReactElement\n' +
                  '\n' +
                  'ReactElement.{ELEMENT_NAME} -> TypedReactElement',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 28, column: 4, offset: 711 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The ReactElement.{ELEMENT_NAME} constructor.',
                    position: {
                      start: { line: 30, column: 1, offset: 713 },
                      end: { line: 30, column: 45, offset: 757 }
                    }
                  }
                ],
                position: {
                  start: { line: 30, column: 1, offset: 713 },
                  end: { line: 30, column: 45, offset: 757 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 32, column: 1, offset: 759 },
                      end: { line: 32, column: 11, offset: 769 }
                    }
                  }
                ],
                position: {
                  start: { line: 32, column: 1, offset: 759 },
                  end: { line: 32, column: 11, offset: 769 }
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
                            type: 'inlineCode',
                            value: 'props',
                            position: {
                              start: { line: 33, column: 5, offset: 774 },
                              end: { line: 33, column: 12, offset: 781 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an object of React element properties. These are equivalent to ',
                            position: {
                              start: { line: 33, column: 12, offset: 781 },
                              end: { line: 33, column: 78, offset: 847 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://react.dev/learn/passing-props-to-a-component',
                            children: [
                              {
                                type: 'text',
                                value: 'React props',
                                position: {
                                  start: { line: 33, column: 79, offset: 848 },
                                  end: { line: 33, column: 90, offset: 859 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 33, column: 78, offset: 847 },
                              end: { line: 33, column: 145, offset: 914 }
                            }
                          },
                          {
                            type: 'text',
                            value: '.',
                            position: {
                              start: { line: 33, column: 145, offset: 914 },
                              end: { line: 33, column: 146, offset: 915 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 33, column: 5, offset: 774 },
                          end: { line: 33, column: 146, offset: 915 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 33, column: 3, offset: 772 },
                      end: { line: 33, column: 146, offset: 915 }
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
                            type: 'inlineCode',
                            value: 'children',
                            position: {
                              start: { line: 34, column: 5, offset: 920 },
                              end: { line: 34, column: 15, offset: 930 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a string or array of strings and/or React elements. Represents nesting elements in HTML.',
                            position: {
                              start: { line: 34, column: 15, offset: 930 },
                              end: { line: 34, column: 106, offset: 1021 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 34, column: 5, offset: 920 },
                          end: { line: 34, column: 106, offset: 1021 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 34, column: 3, offset: 918 },
                      end: { line: 34, column: 106, offset: 1021 }
                    }
                  }
                ],
                position: {
                  start: { line: 33, column: 3, offset: 772 },
                  end: { line: 34, column: 106, offset: 1021 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 36, column: 1, offset: 1023 },
                      end: { line: 36, column: 8, offset: 1030 }
                    }
                  }
                ],
                position: {
                  start: { line: 36, column: 1, offset: 1023 },
                  end: { line: 36, column: 8, offset: 1030 }
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
                            type: 'inlineCode',
                            value: 'reactElement',
                            position: {
                              start: { line: 37, column: 5, offset: 1035 },
                              end: { line: 37, column: 19, offset: 1049 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a basic React element, ',
                            position: {
                              start: { line: 37, column: 19, offset: 1049 },
                              end: { line: 37, column: 45, offset: 1075 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'reactElement',
                            position: {
                              start: { line: 37, column: 45, offset: 1075 },
                              end: { line: 37, column: 59, offset: 1089 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' is recognized by React and used to render the final React application.',
                            position: {
                              start: { line: 37, column: 59, offset: 1089 },
                              end: { line: 37, column: 130, offset: 1160 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 37, column: 5, offset: 1035 },
                          end: { line: 37, column: 130, offset: 1160 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 37, column: 3, offset: 1033 },
                      end: { line: 37, column: 130, offset: 1160 }
                    }
                  }
                ],
                position: {
                  start: { line: 37, column: 3, offset: 1033 },
                  end: { line: 37, column: 130, offset: 1160 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const ReactElement = Arche(React)\n' +
                  'const myReact{ELEMENT_NAME} = ReactElement.{ELEMENT_NAME}({CHILDREN})\n' +
                  "ReactDOM.render(myReact{ELEMENT_NAME}, document.getElementById('react-root'))",
                position: {
                  start: { line: 39, column: 1, offset: 1162 },
                  end: { line: 43, column: 4, offset: 1361 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 43, column: 4, offset: 1361 }
            }
          }
        }
      },
      {
        name: 'Arche',
        constructor: [ [Function: Object], '' ],
        docs: '```coffeescript [specscript]\n' +
          'type DocumentElementChildren = string|Array<string|Element>\n' +
          '\n' +
          'type TypedDocumentElement =\n' +
          '  (props object, children DocumentElementChildren)=>(element Element)\n' +
          '  |(children DocumentElementChildren)=>(element Element)\n' +
          '  |(props object)=>(element Element)\n' +
          '\n' +
          'type DocumentElement = (elementType string)=>TypedDocumentElement\n' +
          '\n' +
          'type React = {\n' +
          '  Element: {\n' +
          '    $$typeof: Symbol,\n' +
          '    props: Object,\n' +
          '    type: any,\n' +
          '  },\n' +
          '  createElement: (\n' +
          '    elementType string,\n' +
          '    props object,\n' +
          '    children string|Array<React.Element|string>\n' +
          '  )=>(reactElement React.Element),\n' +
          '}\n' +
          '\n' +
          'type ReactElementChildren = string|Array<React.Element>\n' +
          '\n' +
          'type TypedReactElement =\n' +
          '  (props object, children ReactElementChildren)=>(reactElement React.Element)\n' +
          '  |(children ReactElementChildren)=>(reactElement React.Element)\n' +
          '  |(props object)=>(reactElement React.Element)\n' +
          '\n' +
          'type ReactFunctionComponent =\n' +
          '  ({ ...props Object, children ReactElementChildren })=>(reactElement React.Element)\n' +
          '\n' +
          'type ReactElement =\n' +
          '  ReactFunctionComponent=>(reactElement React.Element)\n' +
          '  |(elementType string)=>TypedReactElement\n' +
          '\n' +
          'type StyledComponent = ([css string])=>React.Element\n' +
          '\n' +
          'type styled = Object<[elementName string]: StyledComponent>\n' +
          '\n' +
          'Arche(document Document) -> DocumentElement\n' +
          'Arche(React) -> ReactElement\n' +
          'Arche(React, options { styled }) -> ReactElement\n' +
          '```\n' +
          '\n' +
          'The Arche class. Simplified DOM interface / React in pure JavaScript.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `document` - [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) - represents any web page loaded in the browser.\n' +
          '  * `React` - the [`React`](https://react.dev/) library.\n' +
          '  * `options`\n' +
          '    * `styled` - the [styled-components](https://styled-components.com/) library.\n' +
          '\n' +
          'Return:\n' +
          '  * `DocumentElement` - a simplified interface for the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)\n' +
          '  * `ReactElement` - a pure JavaScript interface for React.\n' +
          '\n' +
          '```javascript\n' +
          '{\n' +
          '  const DocumentElement = Arche(document)\n' +
          "  const H1 = DocumentElement('h1')\n" +
          "  const myH1Element = H1('Title')\n" +
          "  document.getElementById('#container').appendChild(myH1Element)\n" +
          '}\n' +
          '\n' +
          '{\n' +
          '  const ReactElement = Arche(React)\n' +
          "  const H1 = ReactElement('he')\n" +
          "  const myH1ReactElement = H1('Title')\n" +
          "  ReactDOM.render(myH1ReactElement, document.getElementById('react-root'))\n" +
          '}\n' +
          '```',
        mdast: {
          type: 'root',
          children: [],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 1, offset: 0 }
          }
        }
      }
    ],
    fileName: '/Users/richard/code/arche.gallery/../Arche/index.js'
  }
]