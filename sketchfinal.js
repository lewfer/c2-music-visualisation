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
  background(220);
  
  // Draw the wave
  //sv.wave(300, 300, 200, 100)
  
  // Draw the frequency chart
  //sv.frequencyChart(200, 300, 200, 100);
  //sv.frequencyBars(200, 300, {numBars:20, colour:color(60, 200, 60)})
  sv.frequencyRadial(300, 300, {radius:100, numBars:30, barWidth:10, barHeight:50, colour:color("red")})
  sv.energyCircle(300,300, {energy:"bass", radius:150, fillColour:color("yellow"), strokeColour:color("yellow")})
  
  // Lead cat
  // ---------------------------
  
  // Make it rotate a bit
  dir = 1
  push()
  if (sv.energyBass>0.9) {
    adjustment = 3*sv.energyBass*dir
    translate(300, 300);
    rotate(adjustment)
    translate(-300, -300);
    dir *= -1
  }
  
  // Draw it
  sv.cat(300, 300, 1,
         {mouthHeight:30 * sv.energyAll,
          tailWag:30 * sv.energyAll,
          whiskerWaveHeight:20,
          bodyColour:color(231, 122,122)  
          });  
    sv.energyCircle(300,400, {energy:"treble", radius:100, fillColour:color(255, 122,122), strokeColour:color(255, 122,122)})
  pop()
  

  
  // Bass cat
  // ---------------------------
  adjustment = 20*sv.energyBass
  sv.cat(150, 80-adjustment, 0.5, 
        {mouthHeight:30 * sv.energyBass,
        tailWag:30 * sv.energyBass,
        whiskerWaveHeight:10,
        bodyColour:color(15, 155, 155)})
  
  // Mid cat
  // ---------------------------
  sv.cat(300, 80, 0.5,
        {mouthHeight:30 * sv.energyMid,
        tailWag:30 * sv.energyMid,
        whiskerWaveHeight:10,
        eyePupilOffset:5*sv.energyMid*random([-1,1]),
        bodyColour:color(155, 15, 155)})
  
  // Treble cat
  // ---------------------------
  adjustment = 20*sv.energyTreble
  sv.cat(450+adjustment, 80, 0.5, 
        {mouthHeight:30 * sv.energyTreble,
        tailWag:30 * sv.energyTreble,
        whiskerWaveHeight:10,
        eyePupilOffset:5*sv.energyTreble*random([-1,1]),
        bodyColour:color(155, 155, 15),
        eyeColour:color(255, 255-255*sv.energyTreble, 255-255*sv.energyTreble)})        
}

function togglePlay() {
  // Turn the music on or off
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}