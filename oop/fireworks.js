class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = Math.random() * Math.PI * 2;
    this.speed = random(2, 8);
    this.speedX = Math.cos(this.angle) * this.speed;
    this.speedY = Math.sin(this.angle) * this.speed;
    this.age = 0;
    this.maxAge = Math.floor(random(50, 100));
    this.delay = Math.floor(random(0, 6));
    this.history = [];
  }

  update() {
    if (this.age > this.delay) {
      const historyObject = {
        x: this.x,
        y: this.y,
        hue: this.age / this.maxAge,
        alpha: 1 - this.age / this.maxAge,
      };
      this.history.push(historyObject);
      this.speedY += gravity;
      this.x += this.speedX;
      this.y += this.speedY;
    }
    this.age++;
  }

  draw() {
    push();
    colorMode(HSB);
    strokeWeight(1);
    for (let object of this.history) {
      if (object.alpha > 0) {
        push();
        stroke(object.hue * 255, 255, 255, object.alpha * 100);
        translate(object.x, object.y);
        line(-4, -4, 4, 4);
        line(-4, 4, 4, -4);
        line(-4, 0, 4, 0);
        line(0, 4, 0, -4);
        // ellipse(object.x, object.y, 3);
        pop();
        object.hue += 0.02;
        object.alpha -= 0.02;
      } else {
        this.history.splice(this.history.indexOf(object), 1);
      }
    }
    // const hue = (this.age / this.maxAge) * 255;
    // fill(hue, 255, 255);
    // ellipse(this.x, this.y, 4);
    pop();
  }
}

let particles = [];
const gravity = 0.1;

function emitParticles(x, y) {
  for (let i = 0; i < 60; i++) {
    const particle = new Particle(x, y);
    particles.push(particle);
  }
}

function draw() {
  background(0, 0, 0);

  for (let particle of particles) {
    particle.update();
    particle.draw();

    if (particle.age > particle.maxAge) {
      particles.splice(particles.indexOf(particle), 1);
    }
  }
}

function mouseClicked() {
  emitParticles(mouseX, mouseY);
}
