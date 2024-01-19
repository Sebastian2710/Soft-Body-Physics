const { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;

const { GravityBehavior } = toxi.physics2d.behaviors;

const { Vec2D, Rect } = toxi.geom;

let physics;

let particles = [];
let eyes = [];
let springs = [];

let showSprings = false;
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

let img,img2;
function preload() {
  img = loadImage("VECTOR.png");
  img2 = loadImage("background2.jpg");
}

function setup() {
  createCanvas(1300, 600);

  physics = new VerletPhysics2D();

  let bounds = new Rect(0, 0, width, height);
  physics.setWorldBounds(bounds);
  
  particles.push(new Particle(400, 210));
  particles.push(new Particle(350, 250));
  particles.push(new Particle(350, 350));
  particles.push(new Particle(450, 350));
  particles.push(new Particle(450, 250));
  
  
  eyes.push(new Particle(375, 250));
  eyes.push(new Particle(425, 250));
  eyes.push(new Particle(330, 200));
  eyes.push(new Particle(470, 200))
  eyes.push(new Particle(460, 390));
  eyes.push(new Particle(340, 390));

  eyes.push(new Particle(400, 130));
  springs.push(new Spring(eyes[6],particles[0],1));
  //springs.push(new Spring(eyes[6],particles[1],0.01));
  //springs.push(new Spring(eyes[6],particles[4],0.01));
  
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      if (i !== j) {
        let a = particles[i];
        let b = particles[j];
        springs.push(new Spring(a, b, 1));
      }
    }
  }
  for (let particle of particles) {
    springs.push(new Spring(particle, eyes[0], 0.01));
    springs.push(new Spring(particle, eyes[1], 0.01));
  }
  
  springs.push(new Spring(eyes[2], particles[1],0.01));
  springs.push(new Spring(eyes[3], particles[4],0.01)); 
  springs.push(new Spring(eyes[4], particles[3],0.01));
  springs.push(new Spring(eyes[5], particles[2],0.01));

  
  springs.push(new Spring(eyes[2], particles[4],0.01));
  springs.push(new Spring(eyes[3], particles[1],0.01));
  springs.push(new Spring(eyes[4], particles[2],0.01));
  springs.push(new Spring(eyes[5], particles[3],0.01));
 
  springs.push(new Spring(eyes[4], particles[4],0.01));
  springs.push(new Spring(eyes[5], particles[1],0.01));
  
  springs.push(new Spring(eyes[4], particles[0],0.01));
  springs.push(new Spring(eyes[5], particles[0],0.01)); 
}



function draw() {
  background(102,51,0);
  physics.update();
  image(img2,0,0, 1400, 680);
  stroke(196, 13, 13);
  if (showSprings) stroke(196, 13, 13, 100);
  strokeWeight(4);
  line(particles[1].x, particles[1].y, eyes[2].x, eyes[2].y);
  line(particles[4].x, particles[4].y, eyes[3].x, eyes[3].y);
  line(particles[3].x, particles[3].y, eyes[4].x, eyes[4].y);
  line(particles[2].x, particles[2].y, eyes[5].x, eyes[5].y);


  if(mouseIsPressed)
  {image(img, eyes[6].x, eyes[6].y - 25, 50, 70);}
  if(mouseIsPressed){
  strokeWeight(7);
  stroke(0,150,0);
  line(particles[0].x, particles[0].y, eyes[6].x, eyes[6].y);
  strokeWeight(10);
  stroke(0, 100, 0);
  point(eyes[6].x, eyes[6].y);
  }

  if(go_up)
  {image(img, particles[0].x, particles[0].y-200 - 25, 50, 70);}
  if(go_up){
    strokeWeight(7);
    stroke(0,150,0);
    line(particles[0].x, particles[0].y,particles[0].x, particles[0].y-200);
    strokeWeight(10);
    stroke(0,100, 0);
    point(particles[0].x, particles[0].y-200);
  }


  if(go_down)
  {image(img, particles[0].x, particles[0].y+200 - 25, 50, 70);}
  if(go_down){
    strokeWeight(7);
    stroke(0,150,0);
    line(particles[0].x, particles[0].y,particles[0].x, particles[0].y+200);
    strokeWeight(10);
    stroke(0,100, 0);
    point(particles[0].x, particles[0].y+200);
  }


  if(go_left)
  {image(img, particles[0].x-200, particles[0].y - 70, 50, 70);}
  if(go_left){
    strokeWeight(7);
    stroke(0,150,0);
    line(particles[0].x, particles[0].y,particles[0].x-200, particles[0].y);
    strokeWeight(10);
    stroke(0,100, 0);
    point(particles[0].x-200, particles[0].y);
  }


  if(go_right)
  {image(img, particles[0].x+200, particles[0].y - 25, 50, 70);}
  if(go_right){
    strokeWeight(7);
    stroke(0,150,0);
    line(particles[0].x, particles[0].y,particles[0].x+200, particles[0].y);
    strokeWeight(10);
    stroke(0,100, 0);
    point(particles[0].x+200, particles[0].y);
  }
  strokeWeight(16);
  stroke(255,165, 0);
  point(eyes[2].x, eyes[2].y);
  point(eyes[3].x, eyes[3].y);
  point(eyes[4].x, eyes[4].y);
  point(eyes[5].x, eyes[5].y);
  fill(196, 13, 13);
  if (showSprings) fill(196, 13, 13, 100);
  strokeWeight(2);
  beginShape();
  for (let particle of particles) {
    vertex(particle.x, particle.y);
  }
  endShape(CLOSE);

  eyes[0].show();
  eyes[1].show();
  
  if (showSprings) {
    for (let spring of springs) {
      spring.show();
    }
  }

  if (mouseIsPressed) {
    eyes[6].lock();
    eyes[6].x = mouseX;
    eyes[6].y = mouseY;
    eyes[6].unlock();
  }
  if(go_up)
  {
    eyes[6].y = eyes[6].y-100;
    go_up=!go_up;
  }
  if(go_down)
  {
    eyes[6].y = eyes[6].y+100;
    go_down=!go_down;
  }
  if(go_left)
  {
    eyes[6].x = eyes[6].x-100;
    go_left=!go_left;
  }
  if(go_right)
  {
    eyes[6].x = eyes[6].x+100;
    go_right=!go_right;
  }

}