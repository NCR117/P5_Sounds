var mySong;

function preload(){
mySong = loadSound('assets/massiveAttackAngel.mp3')
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    play = false;
   imageMode(CENTER);
    background(0);
    var button = createButton('Play');
    button.center();
    button.addClass('btn');

    button.mousePressed(function(){
 play = true;
 mySong.play();
 button.hide();
      })

    noStroke();

    amplitude = new p5.Amplitude();
}

function draw() {
var level = amplitude.getLevel();
    console.log(level);

    var vol = map(level, 0, 1, 0, 1000)
    var col = map(level, 0, 1, 0, 255);

    background(col);

if(vol > 200){
       fill(col + 10);
       ellipse(width/2, height/2, vol + 100);

}

    fill(col, 255, 255);
    ellipse(width/2, height/2, vol);


    fill(col, 255, col);
    ellipse(width/2, height/2, vol/2);
}