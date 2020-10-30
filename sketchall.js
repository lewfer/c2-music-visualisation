let sv
let defaultCatParams;

function preload() {
  sound = loadSound('MrJuan_12_OClock.mp3');
}

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.mouseClicked(togglePlay);

  
  sv = new soundVisualiser()
  sv.enableMicrophone()


  
  defaultCatParams = {  
    earWidth:50,
    headSize:100,
    noseSize:10,
    eyeW:20,
    eyeH:15,
    eyeRotation:30,
    eyePupilOffset:0,
    bodySize:140,
    tailWag:0,
    legW:80,
    legH:40,
    legRotation:30,
    mouthHeight:0 ,
    whiskerLength:100,
    whiskerWaveHeight:0,
    bodyColour:color(255, 0, 0),
    eyeColour:color(255, 255, 255),
    mouthColour:color(0,0,0)
  }  
}


function draw() {
  // Analyse the sound being played
  sv.analyseSound()

  // Draw the wave
  background(220);
  noFill();
  sv.wave(300, 300, 200, 100);
  //sv.frequencyChart(200, 300, 200, 100);
  //sv.frequencyBars(200, 300, {numBars:20});
  sv.frequencyRadial(300, 300, {radius:100, numBars:30, barWidth:10, barHeight:50, colour:color("red")});
  sv.energyCircle(300,300)
  
  // Lead cat
  catParams = Object.assign({}, defaultCatParams);
  catParams.mouthHeight = 30 * sv.energyAll
  catParams.tailWag = 30 * sv.energyAll
  catParams.whiskerWaveHeight = 30
  catParams.bodyColour = color(231, 122,122)  
  sv.cat(300, 300, 1, catParams);  
}



function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}