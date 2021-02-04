var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')

var abbr = h('abbr', { title: 'Application Programming Interfaces' }, 'APIs')
var strong = h('strong', 'React')

var head = h('h1. headline', { leng: 'en' }, [strong, abbr])

var rootNode = createElement(head)
document.body.appendChild(rootNode)
