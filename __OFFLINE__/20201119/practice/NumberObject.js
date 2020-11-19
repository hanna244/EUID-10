// ES5 Function
// 1. 함수 역할
// 2. 생성자(constructor) 함수 역할(모체) -> 아이(객체) 잉태(생성)

/* -------------------------------------------------------------------------- */
// 생성자

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

function 인간(name, age, gender, height) {
  'use strict'

  this.name = name
  this.age = age
  this.gender = gender
  this.height = height
}

/* -------------------------------------------------------------------------- */
// 객체 생성

var samsungCamera = new Camera('samsung', 100)
var canonCamera = new Camera('canon', 4)

var hannaBrain = new Brain('female', 10000000000)
var jihoBrain = new Brain('male', 1000000)

var gogleAndroid = new Android(hannaBrain, false, canonCamera)
