let img, detector;
let video;

function preload() {

  //img = loadImage('dog_cat.jpg')
  detector = ml5.objectDetector('cocossd')

}
function gotDetections(error, results) {

  if (error) {

    console.log(error)

  } else {

    //console.log(results)
    for (var i = 0; i < results.length; i++) {

      let ob = results[i]

      stroke('black')
      strokeWeight(3)
      noFill()
      rect(ob.x, ob.y, ob.width, ob.height)


      textSize(60)
      strokeWeight(2)
      text(ob.label, ob.x + 20, ob.y + 45)
      text(ob.confidence, ob.x + 30, ob.y + 105)
    }
    detector.detect(video, gotDetections)
  }
}

function setup() {
  createCanvas(640, 480)
  video = createCapture(VIDEO)
  video.size(640, 480)
  video.hide()
  detector.detect(video, gotDetections)

}


function draw() {

  image(video, 0, 0)

}
