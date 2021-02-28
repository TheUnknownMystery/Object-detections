let Camera

function setup() {
  createCanvas(windowWidth, windowHeight)
  Camera = createCapture(VIDEO)
  Camera.hide()
}

function draw() {

  image(Camera, 400, 100)
  filter(INVERT)
}