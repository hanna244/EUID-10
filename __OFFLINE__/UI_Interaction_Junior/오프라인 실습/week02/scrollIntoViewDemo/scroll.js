const sceneList = document.querySelectorAll('.scrollView__scene')
const buttonList = document.querySelectorAll('.scrollView__controlTab')

var buttonArr = Array.from(buttonList)

const handleScroll = function (index) {
  return function (e) {
    e.preventDefault()
    sceneList[index].scrollIntoView({ behavior: 'smooth' })
  }
}

buttonArr.forEach((item, index) => {
  item.addEventListener('click', handleScroll(index))
})
