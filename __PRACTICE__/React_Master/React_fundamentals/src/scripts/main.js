import buildDocRef from './buildDocRef.js'

buildDocRef(document.querySelector('[data-euid]').dataset.euid, document.title)
