const m = new Map()

m.set('DocumentElement.A', '{ href: \'http://example.com/\' }, \'My Anchor\'')
m.set('ReactElement.A', '{ href: \'http://example.com/\' }, \'My Anchor\'')

m.set('DocumentElement.P', '\'Text\'')
m.set('ReactElement.P', '\'Text\'')

m.set('DocumentElement.B', '\'Text\'')
m.set('ReactElement.B', '\'Text\'')

m.set('DocumentElement.Q', '\'Text\'')
m.set('ReactElement.Q', '\'Text\'')

m.set('DocumentElement.I', '\'Text\'')
m.set('ReactElement.I', '\'Text\'')

m.set('DocumentElement.S', '\'Text\'')
m.set('ReactElement.S', '\'Text\'')

m.set('DocumentElement.U', '\'Text\'')
m.set('ReactElement.U', '\'Text\'')

m.set('DocumentElement.Ul', '[Li(\'Item1\'), Li(\'Item2\')]')
m.set('ReactElement.Ul', '[Li(\'Item1\'), Li(\'Item2\')]')

m.set('DocumentElement.Ol', '[Li(\'Item1\'), Li(\'Item2\')]')
m.set('ReactElement.Ol', '[Li(\'Item1\'), Li(\'Item2\')]')

m.set('DocumentElement.Li', '\'Item1\'')
m.set('ReactElement.Li', '\'Item1\'')

m.set('DocumentElement.H1', '\'Heading\'')
m.set('ReactElement.H1', '\'Heading\'')

m.set('DocumentElement.H2', '\'Heading\'')
m.set('ReactElement.H2', '\'Heading\'')

m.set('DocumentElement.H3', '\'Heading\'')
m.set('ReactElement.H3', '\'Heading\'')

m.set('DocumentElement.H4', '\'Heading\'')
m.set('ReactElement.H4', '\'Heading\'')

m.set('DocumentElement.H5', '\'Heading\'')
m.set('ReactElement.H5', '\'Heading\'')

m.set('DocumentElement.H6', '\'Heading\'')
m.set('ReactElement.H6', '\'Heading\'')

m.set('DocumentElement.Script', '{ src: \'https://example.com/script.js\', crossorigin: true }')
m.set('ReactElement.Script', '{ src: \'https://example.com/script.js\', crossorigin: true }')

m.set('DocumentElement.Style', '\`\\nbody {\\n  background-color: pink;\\n  color: #000;\\n}\\n\`')
m.set('ReactElement.Style', '\`\\nbody {\\n  background-color: pink;\\n  color: #000;\\n}\\n\`')

m.set('DocumentElement.Span', '\'Text\'')
m.set('ReactElement.Span', '\'Text\'')

m.set('DocumentElement.Div', '[P(\'Text1\'), P(\'Text2\'))]')
m.set('ReactElement.Div', '[P(\'Text1\'), P(\'Text2\'))]')

m.set('DocumentElement.Img', '{ src: \'https://placehold.co/300x300\', alt: \'placeholder\' }')
m.set('ReactElement.Img', '{ src: \'https://placehold.co/300x300\', alt: \'placeholder\' }')

// TODO
// m.set('DocumentElement.Button', '{ onClick() {} }')
m.set('ReactElement.Button', '{ onClick() {} }')

m.set('DocumentElement.Code', '\'code\'')
m.set('ReactElement.Code', '\'code\'')

m.set('DocumentElement.Pre', '\'code\'')
m.set('ReactElement.Pre', '\'code\'')

  /*

  CreatorElement.Script = CreatorElement('script')
  CreatorElement.Style = CreatorElement('style')

  CreatorElement.Html = CreatorElement('html')
  CreatorElement.Main = CreatorElement('main')
  CreatorElement.Body = CreatorElement('body')
  CreatorElement.Header = CreatorElement('header')
  CreatorElement.Nav = CreatorElement('nav')
  CreatorElement.Section = CreatorElement('section')
  CreatorElement.Article = CreatorElement('article')
  CreatorElement.Footer = CreatorElement('footer')
  CreatorElement.Span = CreatorElement('span')
  CreatorElement.Div = CreatorElement('div')
  CreatorElement.Img = CreatorElement('img')
  CreatorElement.Video = CreatorElement('video')
  CreatorElement.Picture = CreatorElement('picture')
  CreatorElement.Source = CreatorElement('source')

  CreatorElement.Form = CreatorElement('form')
  CreatorElement.Fieldset = CreatorElement('fieldset')
  CreatorElement.Input = CreatorElement('input')
  CreatorElement.Label = CreatorElement('label')
  CreatorElement.Textarea = CreatorElement('textarea')
  CreatorElement.Select = CreatorElement('select')
  CreatorElement.Option = CreatorElement('option')

  CreatorElement.Button = CreatorElement('button')
  CreatorElement.Iframe = CreatorElement('iframe')
  CreatorElement.Blockquote = CreatorElement('blockquote')
  CreatorElement.Code = CreatorElement('code')
  CreatorElement.Pre = CreatorElement('pre')

  CreatorElement.Polygon = CreatorElement('polygon')
  CreatorElement.Svg = CreatorElement('svg')
  CreatorElement.Path = CreatorElement('path')
  CreatorElement.Rect = CreatorElement('rect')
  CreatorElement.Mask = CreatorElement('mask')

  CreatorElement.Dl = CreatorElement('dl')
  CreatorElement.Dt = CreatorElement('dt')
  CreatorElement.Dd = CreatorElement('dd')
  */

module.exports = m
