// ES5 Function
// 1. 함수 역할
// 2. 생성자(constructor) 함수 역할(모체) -> 아이(객체) 잉태(생성)

function Android(brain, alam, camera) {
  this.brain = brain // brain
  this.hasAlamFeature = alam // boolean
  this.camera = camera // camera
}

function Brain(gender, amount) {
  this.gender = gender
  this.amount = amount
}

function Camera(maker, zoom) {
  this.maker = maker
  this.zoom = zoom
}
