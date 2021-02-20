export const getById = (idName) => document.getElementById(idName)

export const getNode = (selector, context = document) =>
  context.querySelector(selector)

export const getNodeList = (selector, context = document) =>
  context.querySelectorAll(selector)

/* -------------------------------------------------------------------------- */

export const createElement = (type, props, ...children) => {
  const node = document.createElement(type)

  if (!props) {
    props = {}
  }

  if (typeof props.children === 'string') {
    props.children = [props.children]
  }

  if (children) {
    if (typeof children === 'string') {
      children = [chlidren]
    }

    const [firstChild] = children

    if (Array.isArray(firstChild)) {
      props.children = [...firstChild]
    } else {
      props.children = props.children ?? []
    }
    props.children = [...props.children, ...children]
  }

  for (let [key, value] of Object.entries(props)) {
    if (key !== 'children') {
      if (key.includes('on')) {
        const eventKey = key.replace('on', '').toLowerCase()
        node.addEventListener(eventKey, value)
      } else {
        if (key === 'className') {
          key = 'class'
        }
        node.setAttribute(key, value)
      }
    } else {
      value.map((child) => {
        if (typeof child === 'string') {
          node.innerText = node.innerText + child
        }
        if (child.nodeType === 1) {
          node.appendChild(child)
        }
      })
    }
  }

  return node
}

/* -------------------------------------------------------------------------- */

export const render = (vNode, domNode) => {
  domNode.append(vNode)
}
