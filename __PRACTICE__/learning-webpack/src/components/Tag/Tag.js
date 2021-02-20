export default function Tag(name = 'div') {
  const element = document.createElement(name)
  element.classList.add('tag-element')
  element.dataset.hanna = '김한나'
  element.textContent = '한나가 만든 컴포넌트'
  return element
}
