let attackLevel = 0.33;
let releaseLevel = 0;
let attackTime = 0.05;
let decayTime = 0.2;
let susPercent = 0.2;
let releaseTime = 0.5;
let cMajScale = [262,294,330,349,392,440,494,523];
function play(osc, timeDistance, env){
  let noteRandom = parseInt(random(0,cMajScale.length-1));
  let note = cMajScale[noteRandom];
  env.setADSR(attackTime, decayTime, susPercent, random(0.5,1.5));
  env.setRange(attackLevel, releaseLevel);
  osc.setType('sine');
  osc.amp(env);
  osc.start();
  osc.freq(note);
  env.play();
  window.setTimeout(() => {play(osc, random(500,3000), env)}, timeDistance);
}
function completedCircle(osc, env){
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);
  osc.setType('triangle');
  osc.amp(env);
  osc.start();
  osc.freq(262);
  env.play();
}
