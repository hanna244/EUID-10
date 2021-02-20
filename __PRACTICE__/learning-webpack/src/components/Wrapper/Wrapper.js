const Wrapper = (props) => {
  const element = document.createElement(props.tag ?? 'div')

  if ('tag' in props) {
    delete props.tag
  }

  let children = null

  if ('children' in props) {
    children = props.children
    delete props.children
  }

  for (const [prop, value] of Object.entries(props)) {
    element.setAttribute(prop, value)
  }

  if (children) {
    element.innerHTML += children
  }

  return element
}

export default Wrapper
