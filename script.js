let spinners = [];
let a = 0.0;
let inc;
function setup(){
  inc = PI * 0.5;
  angleMode(DEGREES)
  createCanvas(window.innerWidth,window.innerHeight);
  background('grey');
  spinners.push(new Spinner(window.innerWidth/2-50, 1, 5));
  play(new p5.Oscillator(), random(500,3000), new p5.Env());
  play(new p5.Oscillator(), random(500,3000), new p5.Env());
  play(new p5.Oscillator(), random(500,3000), new p5.Env());
}
function draw(){
  let sine = map(sin(a),-1,1,10,50);
  drawCenter(sine);
  spinners.forEach(spinner =>{
    if(spinner){
      spinner.move();
    }
    if(spinner.angle > 360){
      if(spinners.length < 4){
        let d = random(window.innerWidth/20,window.innerWidth/2-50);
        let r = random(0.3,3);
        let s = random(1,20);
        completedCircle(new p5.Oscillator(),new p5.Env());
        spinners.push(new Spinner(random(window.innerWidth/20,window.innerWidth/2-50),random(0.3,3),random(1,20)));
        spinners.push(new Spinner(random(window.innerWidth/20,window.innerWidth/2-50),random(0.3,3),random(1,20)));
      }
      spinners.splice(spinners.indexOf(spinner),1);
    }
  })
  a += inc;
}

function Spinner(d, rate, s){
  // this.r = random(255);
  // this.g = random(255);
  // this.b = random(255);
  let rand = parseInt(random(0,palette.length-1));
  this.d = d;
  this.rate = rate;
  this.angle = 0.1;
  this.move = function(){
    noFill();
    strokeWeight(s)
    stroke(palette[rand]);
    arc(width/2, height/2, this.d, this.d, 0, this.angle);
    if(this.angle < 360){
      this.angle+= this.rate;
    }
  }
}
function drawCenter(x){
  clear();
  background('grey');
  fill(255)
  noStroke();
  ellipse(width/2,height/2,x,x);
}
