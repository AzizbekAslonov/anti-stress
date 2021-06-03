const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')

const colors = [
   'magenta', 'black', 'blue', 'yellow', 'chartreuse', 'seagreen',
   'peru', 'turquoise', 'orangered', 'aqua', 'blueviolet', 'cyan',
   'yellowgreen', 'aquamarine', 'hotpink', 'forestgreen', 'royalblue'
]

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// #1 bo'yalgan to'rtburchak

// rangi
// ctx.fillStyle = 'magenta'
// x, y, width, height
// ctx.fillRect(50, 50, 100, 50)

// #2 bo'yalmagan to'rtburchak

// border color
// ctx.strokeStyle = 'red'
// border weight
// ctx.lineWidth = 3
// ctx.strokeRect(100 + 50 + 10, 50, 100, 50)


// #3 Kurug
let arcParams =
   [canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI, true]
// x, y, radius, bosh. burchak, oxir. burchak, soat strelkasiga qarshimi?
// ctx.arc(...arcParams)

// ctx.fill()

// #4 Uchburchak

// ctx.scale(2, 2)
// ctx.rotate(6.283185307179586)

// ctx.strokeStyle = 'red'
// ctx.lineWidth = 2
// ctx.beginPath()
// ctx.moveTo(300, 300)
// ctx.lineTo(300 / 2, 300 + 200)
// ctx.lineTo(150 * 3, 300 + 200)
// ctx.closePath()
// ctx.lineTo(25, 100)


// ctx.stroke()


// #5 Text
let grad = ctx.createLinearGradient(0, 0, 240, 0)
grad.addColorStop('0', 'magenta')
grad.addColorStop('0.5', 'blue')
grad.addColorStop('1', 'red')

ctx.fillStyle = grad

ctx.font = '30px Georgia text'
// ctx.textAlign = 'center'
ctx.fillText('Hello World!', 50, 70)