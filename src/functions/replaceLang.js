// "/whatever/url/blah" => "/{lang}/url/blah"
export default function replaceLang (url, lang) {
  return url.replace(/^\/[^/]*/, '/' + lang)
}
