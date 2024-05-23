const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArr = [];
const mouse = {
  x: undefined,
  y: undefined,
};

let hue = 0;

document.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;

  for (let i = 0; i < 2; i++) {
    particlesArr.push(new Particle());
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 5 - 2.5;
    this.speedY = Math.random() * 5 - 2.5;
    this.color = `hsl(${hue}, 100%, 50%)`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x + 7 >= innerWidth || this.x - 7 <= 0) {
      this.speedX = -this.speedX;
    }

    if (this.y + 7 >= innerHeight || this.y - 7 <= 0) {
      this.speedY = -this.speedY;
    }

    if (this.size > 1) this.size -= 0.015;
  }

  draw() {
    ctx.beginPath();

    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();

    ctx.closePath();
  }
}

function handleParticles() {
  for (let i = 0; i < particlesArr.length; i++) {
    const elem = particlesArr[i];

    elem.update();
    elem.draw();

    for (let j = i + 1; j < particlesArr.length; j++) {
      const dx = particlesArr[i].x - particlesArr[j].x;
      const dy = particlesArr[i].y - particlesArr[j].y;

      const dis = Math.sqrt(dx * dx + dy * dy);
      if (dis < 80) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = particlesArr[i].color;
        ctx.moveTo(particlesArr[i].x, particlesArr[i].y);
        ctx.lineTo(particlesArr[j].x, particlesArr[j].y);
        ctx.stroke();
      }
    }
    if (elem.size <= 1) {
      particlesArr.splice(i, 1);
      i--;
    }
  }
}

handleParticles();

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  hue += 0.3;
  requestAnimationFrame(animate);
}

animate();
