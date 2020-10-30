let sv

function preload() {
  sound = loadSound('MrJuan_12_OClock.mp3')
}

function setup() {
  let canvas = createCanvas(600, 600)
  
  // Handle the mouse click event
  canvas.mouseClicked(togglePlay)
  
  // Create a sound visualiser
  sv = new soundVisualiser()
  
  // Turn on the microphone input
  //sv.enableMicrophone()
}


function draw() {
  // Analyse the sound being played
  sv.analyseSound()

  // Set the background colour
  background(220)
  
  // Draw the wave
  sv.wave(300, 300, 200, 100)
  
  // Draw the frequency chart
  sv.frequencyChart(200, 300, 200, 100)
}

function togglePlay() {
  // Turn the music on or off
  if (sound.isPlaying()) {
    sound.pause()
  } else {
    sound.loop()
  }
}