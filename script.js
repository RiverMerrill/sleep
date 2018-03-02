let spinners = [];
function setup(){
  angleMode(DEGREES)
  createCanvas(window.innerWidth,window.innerHeight);
  background('grey');
  spinners.push(new Spinner(window.innerWidth/2-50, 1, 5));
  play(new p5.Oscillator(), random(500,3000), new p5.Env());
  play(new p5.Oscillator(), random(500,3000), new p5.Env());
  play(new p5.Oscillator(), random(500,3000), new p5.Env());
}
function draw(){
  spinners.forEach(spinner =>{
    if(spinner){
      spinner.move();
    }
    if(spinner.angle > 358){
      let d = random(window.innerWidth/20,window.innerWidth/2-50);
      let r = random(0.3,3);
      let s = random(1,20);
      spinners.splice(spinners.indexOf(spinner),1);
      clear();
      background('grey');
      spinners.push(new Spinner(d,r,s));
    }
  })
}

function Spinner(d, rate, s){
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.d = d;
  this.rate = rate;
  this.angle = 0.1;
  this.move = function(){
    noFill();
    strokeWeight(s)
    stroke(this.r, this.g, this.b);
    arc(width/2, height/2, this.d, this.d, 0, this.angle);
    if(this.angle < 360){
      this.angle+= this.rate;
    }
  }
}
