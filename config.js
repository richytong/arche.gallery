const ScriptTag = require('./lib/ScriptTag')
const StylesheetTag = require('./lib/StylesheetTag')
const Arche = require('../arche')

module.exports = {
  domain: 'arche.gallery',

  scripts: [
    ScriptTag('https://cdn.jsdelivr.net/npm/rubico@2.7.7/dist/rubico.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://unpkg.com/react@18.3.0/umd/react.production.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://unpkg.com/react-dom@18.3.0/umd/react-dom.production.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://unpkg.com/arche@1.0.0/index.js', {
      crossorigin: true,
    }),
    ScriptTag('/global.js'),

    ScriptTag('/vendor/codemirror/index.js'),
    ScriptTag('/vendor/codemirror/syntax/javascript.js', { async: true }),
    ScriptTag('/vendor/codemirror/syntax/coffeescript.js', { async: true }),
    ScriptTag('/vendor/codemirror/syntax/htmlmixed.js', { async: true }),
    ScriptTag('/vendor/codemirror/syntax/xml.js', { async: true }),
    ScriptTag('/vendor/codemirror/syntax/css.js', { async: true }),
  ],

  stylesheets: [
    StylesheetTag('https://fonts.googleapis.com'),
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
      filepath: '/docs.html',
    },

    {
      title: 'Arche | Arche Docs',
      description: 'Documentation for Arche',
      url: '/docs/Arche',
      filepath: '/docs/Arche.html',
    },

    {
      title: 'DocumentElement | Arche Docs',
      description: 'Documentation for Arche DocumentElement',
      url: '/docs/DocumentElement',
      filepath: '/docs/DocumentElement.html',
    },

    {
      title: 'ReactElement | Arche Docs',
      description: 'Documentation for Arche ReactElement',
      url: '/docs/ReactElement',
      filepath: '/docs/ReactElement.html',
    },
  ],
}
