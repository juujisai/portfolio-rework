const canvas2 = document.getElementById('canvas2')

const c = canvas2.getContext('2d')

// let width = window.innerWidth
// let height = window.innerHeight


canvas2.width = width
canvas2.height = height

const mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove', (e) => {
  mouse.x = e.pageX
  mouse.y = e.pageY
})




window.addEventListener('resize', () => {
  width = window.innerWidth
  height = window.innerHeight


  canvas2.width = width
  canvas2.height = height
  init2()
})


class Circle2 {
  constructor(x, y, dx, dy, r, color = 'red') {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.prevR = r
    this.color = color
  }

  draw() {
    c.beginPath()
    c.fillStyle = this.color
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
    c.fill()
    // c.stroke()
    c.closePath()

  }

  update() {

    // if (this.y >= canvas.height - this.r) {
    //   this.dy = -this.dy

    // } else {
    //   this.dy++
    // }



    if (this.x > width - this.r) {
      this.dx = -this.dx
    }

    if (this.y > height - this.r) {
      this.dy = -this.dy
    }

    if (this.x < 0 + this.r) {
      this.dx = -this.dx
    }

    if (this.y < 0 + this.r) {
      this.dy = -this.dy

    }




    if (Math.sqrt((this.x - mouse.x) * (this.x - mouse.x) + (this.y - mouse.y) * (this.y - mouse.y)) < 50) {
      this.r = this.r + 2
    } else if (Math.sqrt((this.x - mouse.x) * (this.x - mouse.x) + (this.y - mouse.y) * (this.y - mouse.y)) >= 50 && this.r > this.prevR) {
      this.r--
    }


    // this.dy = this.dy * friction
    // this.dy *= friction

    this.y += this.dy
    this.x += this.dx
    this.draw()
  }

}

let friction = .999
let colors = ['#41aea9', '#0f3057', '#008891', '#e8ffff', '#a6f6f1']



let circles = []
const init2 = () => {
  circles = []
  for (let i = 0; i < 2000; i++) {
    let dx = (Math.random() * 4 - 2)
    let dy = (Math.random() * 4 - 2)
    let r = Math.floor(Math.random() * (25 - 15) + 15)
    let x = Math.random() * (canvas.width - 2 * r) + r
    let y = Math.random() * (canvas.height - 2 * r) + r
    circles.push(new Circle2(x, y, dx, dy, r, colors[Math.floor(Math.random() * 5)]))
  }


}


class Circle3 {
  constructor(x, y, r, color = 'red') {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color
  }

  draw() {
    c.beginPath()
    c.fillStyle = this.color
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
    c.fill()
    // c.stroke()
    c.closePath()

  }
}



const animate2 = () => {

  requestAnimationFrame(animate2)
  c.clearRect(0, 0, canvas.width, canvas.height)
  circles.forEach(one => one.update())

  new Circle3(0, height, width / 2, 'red')

}


init2()
animate2()


setTimeout(() => { canvas2.style.opacity = 1 }, 5000)