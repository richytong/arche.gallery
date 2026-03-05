const ScriptTag = require('./lib/ScriptTag')
const StylesheetTag = require('./lib/StylesheetTag')
const Arche = require('../arche')

module.exports = {
  domain: 'arche.gallery',

  scripts: [
    ScriptTag('https://cdn.jsdelivr.net/npm/rubico@2.8.2/dist/rubico.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://cdn.jsdelivr.net/npm/react@18.3.0/umd/react.production.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://cdn.jsdelivr.net/npm/react-dom@18.3.0/umd/react-dom.production.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://cdn.jsdelivr.net/npm/arche@1.0.2/index.js', {
      crossorigin: true,
    }),
    ScriptTag('/global.js'),
    ScriptTag('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js'),
    ScriptTag('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/javascript.min.js'),

    ScriptTag('/vendor/codemirror/index.js'),
    ScriptTag('/vendor/codemirror/syntax/javascript.js', { async: true }),
    ScriptTag('/vendor/codemirror/syntax/coffeescript.js', { async: true }),
    ScriptTag('/vendor/codemirror/syntax/htmlmixed.js', { async: true }),
    ScriptTag('/vendor/codemirror/syntax/xml.js', { async: true }),
    ScriptTag('/vendor/codemirror/syntax/css.js', { async: true }),
  ],

  stylesheets: [
    StylesheetTag('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/a11y-light.min.css'),
    StylesheetTag('/index.css'),
    StylesheetTag('/vendor/codemirror/styles.css'),
    StylesheetTag('/vendor/codemirror/theme/rubico.css'),
    StylesheetTag('/vendor/codemirror/theme/coffeescript.css'),
  ],

  publicDir: 'public',

  pages: [
    {
      title: 'Arche',
      description: 'Documentation for Arche',
      url: '/',
      filepath: '/index.html',
    },

    {
      title: 'Arche Docs',
      description: 'Documentation for Arche',
      url: '/docs',
      filepath: '/docs/index.html',
    },

    {
      title: 'Arche | Arche Docs',
      description: 'Documentation for Arche',
      url: '/docs/Arche',
      filepath: '/docs/Arche',
    },

    {
      title: 'DocumentElement | Arche Docs',
      description: 'Documentation for Arche DocumentElement',
      url: '/docs/DocumentElement',
      filepath: '/docs/DocumentElement',
    },

    {
      title: 'ReactElement | Arche Docs',
      description: 'Documentation for Arche ReactElement',
      url: '/docs/ReactElement',
      filepath: '/docs/ReactElement',
    },
  ],
}
