const canvas = document.getElementById('canvas')

let height = window.innerHeight
let width = document.body.clientWidth


canvas.width = width
canvas.height = height


const ctx = canvas.getContext('2d')

window.addEventListener('resize', () => {
  height = window.innerHeight
  width = window.innerWidth
  canvas.width = width
  canvas.height = height
  init()
})



let radius = 30;


class Circle {
  constructor(x, y, dx = 0, dy = 0, r = 5, fill = '', stroke = '') {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = 15;
    this.fill = fill;
    this.stroke = stroke
    this.increasing = true
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fillStyle = this.fill;
    ctx.strokeStyle = this.stroke
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }

  update() {
    // if (this.r <= 25) {
    //   this.increasing = true
    // }
    if (this.r >= 4000) {
      this.increasing = false
    }

    if (this.increasing) {
      this.r += 2

    } else {
      // this.r += -.1
      this.r = this.r
    }

    if (this.x >= width / 2 - radius && this.x < width / 2 + radius && this.y <= height / 2 - radius) {

      this.dx = 1
      this.dy = 0

    }

    if (this.x >= width / 2 + radius && this.y >= height / 2 - radius && this.y < height / 2 + radius) {
      this.dx = 0
      this.dy = 1
    }
    if (this.x > width / 2 - radius && this.x <= width / 2 + radius && this.y >= height / 2 + radius) {
      this.dx = -1
      this.dy = 0
    }
    if (this.x <= width / 2 - radius && this.y > height / 2 - radius && this.y <= height / 2 + radius) {
      this.dx = 0
      this.dy = -1
    }





    this.x += this.dx
    this.y += this.dy

    this.draw()
  }


}


let circle = []

let dx = 0;
let dy = 0;

// const colorArray = ['#d9e4dd', '#fbf7f0', '#cdc9c3', '#555555']
const colorArray = ['#555555', '#cdc9c3', '#fbf7f0', '#d9e4dd']



const init = () => {
  circle = []
  circle3 = new Circle(width / 2 - radius, height / 2 - radius, dx, dy, radius, '#555555', 'black')
  circle1 = new Circle(width / 2 + radius, height / 2 - radius, dx, dy, radius, '#cdc9c3', 'black')
  circle2 = new Circle(width / 2 + radius, height / 2 + radius, dx, dy, radius, '#d9e4dd', 'black')
  circle4 = new Circle(width / 2 - radius, height / 2 + radius, dx, dy, radius, '#fbf7f0', 'black')

  circle = [circle1, circle2, circle3, circle4]
}


const animate = () => {
  requestAnimationFrame(animate)

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillRect(0, 0, canvas.width, canvas.height)


  circle.forEach(item => item.update())
  // circle.forEach(item => item.update())

  ctx.fillStyle = '#ddd'


}



init()
animate()


