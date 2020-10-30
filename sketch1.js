let sv

function setup() {
  let canvas = createCanvas(600, 600)
  
  // Create a sound visualiser
  sv = new soundVisualiser()
  
  // Turn on the microphone input
  sv.enableMicrophone()
}


function draw() {
  // Analyse the sound being played
  sv.analyseSound()

  // Draw the wave
  background(220)
  sv.wave(300, 300, 200, 100)
}

