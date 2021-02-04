const DOC_URL = 'https://yamoo9.gitbook.io/euid-react'
const BADGE_URL =
  'https://img.shields.io/badge/E.UID%20React%20%E2%80%94%20learning%20guide-%20-00A4DE?style=flat&logo=gitbook&logoColor=00A4DE&labelColor=000'

/* -------------------------------------------------------------------------- */

export default (path, desc) => {
  const imgNode = document.createElement('img')
  const imgDesc = `"${desc}" ← 문서 바로가기`
  imgNode.setAttribute('src', BADGE_URL)
  imgNode.setAttribute('alt', imgDesc)
  imgNode.setAttribute('title', imgDesc)

  const aNode = document.createElement('a')
  aNode.classList.add('badge')
  aNode.setAttribute('href', `${DOC_URL}/${path}`)
  aNode.setAttribute('target', '_blank')
  aNode.setAttribute('rel', 'noopener noreferrer')
  aNode.append(imgNode)

  document.querySelector('body').append(aNode)
}
