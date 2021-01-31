const makeArray = (arrayLikeObject) => {
  return Array.from(arrayLikeObject)
}

const buttonList = document.querySelectorAll('.scrollView__controlTab')
const sceneList = document.querySelectorAll('.scrollView__scene')
const arrButton = makeArray(buttonList)

const handelScrollButton = function (index) {
  return function (e) {
    e.preventDefault()
    sceneList[index].scrollIntoView({ behavior: 'smooth' })
  }
}

arrButton.forEach((item, index) => {
  item.addEventListener('click', handelScrollButton(index))
})
