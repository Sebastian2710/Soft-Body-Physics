const { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;

const { GravityBehavior } = toxi.physics2d.behaviors;

const { Vec2D, Rect } = toxi.geom;

let physics;

let particles=[];
let springs=[];
let showSprings = true;
let go_up= false;
let go_down= false;
let go_left= false;
let go_right= false;
function keyPressed() {
  if (key == ' ') {
    showSprings = !showSprings;  
  }
  if (key == 'w'){
    go_up = !go_up;
  }
  if (key == 's'){
    go_down = !go_down;
  }
  if (key == 'a'){
    go_left = !go_left;
  }
  if (key == 'd'){
    go_right = !go_right;
  }
}

function setup(){
  createCanvas(1300,600);
  
  physics=new VerletPhysics2D();
  
  let bounds = new Rect(0,0,width,height);
  physics.setWorldBounds(bounds);
  
  //head
  particles.push(new Particle(380,190));
  particles.push(new Particle(355,160));
  particles.push(new Particle(340,190));
  particles.push(new Particle(355,220));
  particles.push(new Particle(405,220));
  particles.push(new Particle(420,190));
  particles.push(new Particle(405,160));
  for (let i = 0; i <7 ; i++) {
    for (let j = i + 1; j <7 ; j++) {
      if (i !== j) {
        let a = particles[i];
        let b = particles[j];
        springs.push(new Spring(a, b, 0.2));
      }
    }
  }
  //neck
  particles.push(new Particle(370,220));
  particles.push(new Particle(390,220));
  particles.push(new Particle(370,245));
  particles.push(new Particle(390,245));
  for (let i = 7; i <11 ; i++) {
    for (let j = i + 1; j <11 ; j++) {
      if (i !== j) {
        let a = particles[i];
        let b = particles[j];
        springs.push(new Spring(a, b, 0.2));
      }
    }
  }
  for (let i = 7; i <11 ; i++) {
    for (let j = 0; j <7 ; j++) {
      if (i !== j) {
        let a = particles[i];
        let b = particles[j];
        springs.push(new Spring(a, b, 0.2));
      }
    }
  }
  //torso
  particles.push(new Particle(335,245));
  particles.push(new Particle(335,400));
  particles.push(new Particle(425,400));
  particles.push(new Particle(425,245));
  for (let i = 11; i <15 ; i++) {
    for (let j = i + 1; j <15 ; j++) {
      if (i !== j) {
        let a = particles[i];
        let b = particles[j];
        springs.push(new Spring(a, b, 0.2));
      }
    }
  }
  for (let i = 11; i <15 ; i++) {
    for (let j = 7; j <11 ; j++) {
      if (i !== j) {
        let a = particles[i];
        let b = particles[j];
        springs.push(new Spring(a, b, 0.2));
      }
    }
  }
  //left arm
  particles.push(new Particle(335,270));
  particles.push(new Particle(335,290));
  particles.push(new Particle(280,270));
  particles.push(new Particle(280,290));
  particles.push(new Particle(220,270));
  particles.push(new Particle(220,290));
  
  springs.push(new Spring(particles[15], particles[16], 0.2));
  springs.push(new Spring(particles[17], particles[18], 0.2));
  springs.push(new Spring(particles[19], particles[20], 0.2));
  springs.push(new Spring(particles[15], particles[17], 0.2));
  springs.push(new Spring(particles[16], particles[18], 0.2));
  springs.push(new Spring(particles[17], particles[19], 0.2));
  springs.push(new Spring(particles[18], particles[20], 0.2));
  
  for (let i = 15; i <17 ; i++) {
    for (let j = 11; j <15 ; j++) {
      if (i !== j) {
        let a = particles[i];
        let b = particles[j];
        springs.push(new Spring(a, b, 0.2));
      }
    }
  }
  
  //right arm
  particles.push(new Particle(425,270));
  particles.push(new Particle(425,290));
  particles.push(new Particle(480,270));
  particles.push(new Particle(480,290));
  particles.push(new Particle(540,270));
  particles.push(new Particle(540,290));
  
  springs.push(new Spring(particles[15+6], particles[16+6], 0.2));
  springs.push(new Spring(particles[17+6], particles[18+6], 0.2));
  springs.push(new Spring(particles[19+6], particles[20+6], 0.2));
  springs.push(new Spring(particles[15+6], particles[17+6], 0.2));
  springs.push(new Spring(particles[16+6], particles[18+6], 0.2));
  springs.push(new Spring(particles[17+6], particles[19+6], 0.2));
  springs.push(new Spring(particles[18+6], particles[20+6], 0.2));
  
  for (let i = 21; i <23 ; i++) {
    for (let j = 11; j <15 ; j++) {
      if (i !== j) {
        let a = particles[i];
        let b = particles[j];
        springs.push(new Spring(a, b, 0.2));
      }
    }
  }
  
  //left leg
  particles.push(new Particle(335,400));
  particles.push(new Particle(365,400));
  particles.push(new Particle(335,480));
  particles.push(new Particle(365,480));
  particles.push(new Particle(335,570));
  particles.push(new Particle(365,570));
  
  springs.push(new Spring(particles[15+12], particles[16+12], 0.2));
  springs.push(new Spring(particles[17+12], particles[18+12], 0.2));
  springs.push(new Spring(particles[19+12], particles[20+12], 0.2));
  springs.push(new Spring(particles[15+12], particles[17+12], 0.2));
  springs.push(new Spring(particles[16+12], particles[18+12], 0.2));
  springs.push(new Spring(particles[17+12], particles[19+12], 0.2));
  springs.push(new Spring(particles[18+12], particles[20+12], 0.2));
  
  for (let i = 27; i <29 ; i++) {
    for (let j = 11; j <15 ; j++) {
      if (i !== j) {
        let a = particles[i];
        let b = particles[j];
        springs.push(new Spring(a, b, 0.2));
      }
    }
  }
  
  //right leg
  particles.push(new Particle(395,400));
  particles.push(new Particle(425,400));
  particles.push(new Particle(395,480));
  particles.push(new Particle(425,480));
  particles.push(new Particle(395,570));
  particles.push(new Particle(425,570));
  
  springs.push(new Spring(particles[15+18], particles[16+18], 0.2));
  springs.push(new Spring(particles[17+18], particles[18+18], 0.2));
  springs.push(new Spring(particles[19+18], particles[20+18], 0.2));
  springs.push(new Spring(particles[15+18], particles[17+18], 0.2));
  springs.push(new Spring(particles[16+18], particles[18+18], 0.2));
  springs.push(new Spring(particles[17+18], particles[19+18], 0.2));
  springs.push(new Spring(particles[18+18], particles[20+18], 0.2));
 
  for (let i = 33; i <35 ; i++) {
    for (let j = 11; j <15 ; j++) {
      if (i !== j) {
        let a = particles[i];
        let b = particles[j];
        springs.push(new Spring(a, b, 0.2));
      }
    }
  }
  
  
  
}



function draw(){
  
  background(0);
  physics.update();
  stroke(112, 50, 126);
  if (showSprings) stroke(112, 50, 126, 100);
  
  fill(45, 197, 244);
  if (showSprings) fill(45, 197, 244, 100);
  strokeWeight(6);
  beginShape();
  for (let particle of particles) {
    vertex(particle.x, particle.y);
  }
  endShape(CLOSE);
  
  if(showSprings){
    background(255);
    for(let spring of springs){
    spring.show();
    }
  }
    
  if(mouseIsPressed){
    particles[0].lock();
    particles[0].x=mouseX;
    particles[0].y=mouseY;
    particles[0].unlock();
  }
  if(go_up)
  {
    particles[0].y =particles[0].y-100;
    go_up=!go_up;
  }
  if(go_down)
  {
    particles[0].y =particles[0].y+100;
    go_down=!go_down;
  }
  if(go_left)
  {
    particles[0].x =particles[0].x-100;
    go_left=!go_left;
  }
  if(go_right)
  {
    particles[0].x =particles[0].x+100;
    go_right=!go_right;
  }
  
}