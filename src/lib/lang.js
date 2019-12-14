const supportedLangs = [
  'en-gb',
  'nb-no'
]

const defaultLang = supportedLangs[0]

// replaceLang('/whatever/path/string', 'nb-no') // '/nb-no/path/string'
const replaceLang = (url, lang) => url.replace(/^\/[^/]*/, '/' + lang)

export {
  defaultLang,
  supportedLangs,
  replaceLang
}
