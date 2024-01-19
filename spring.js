class Spring extends VerletSpring2D {
  constructor(a, b, strength) {
    let length = dist(a.x, a.y, b.x , b.y);
    super(a, b, length * 1,0.01);
    physics.addSpring(this);
  }

  show() {
    strokeWeight(2);
    stroke(0,200);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}