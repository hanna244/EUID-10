/* for문 -------------------------------------------------------------------- */
var colors = [
  '#8DE8E2',
  '#A9FFAB',
  'F2EF83',
  '#FFD17D',
  '#F9947A',
  '#F69A9A',
  '#C8C8A9',
  '#F9CDAE',
]

for (var i = 0; i < colors.length; i += 1) {
  var color = colors[i]
  console.log(color)
}

/* for~in 문 ----------------------------------------------------------------- */
var beverage_01 = {
  name: '벗꽃라떼',
  type: 'ICED',
  photo: 'img.png',
  width: '328px',
  height: '328px',
}

for (var property in beverage_01) {
  console.log(property) //key
  console.log(beverage_01[property]) //value
}

var beverage = []

beverage.push({
  name: '벗꽃라떼',
  type: 'ICED',
  photo: 'img.png',
  width: '328px',
  height: '328px',
})
