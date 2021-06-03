const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Code
let ismouseDown = false;
let coords = []

canvas.addEventListener('mousedown', (e) => {
   ismouseDown = true
})

canvas.addEventListener('mouseup', (e) => {
   ismouseDown = false
   ctx.beginPath()
   coords.push('mouseup')
})

ctx.lineWidth = 10 * 2

canvas.addEventListener('mousemove', (e) => {
   if (ismouseDown) {
      coords.push([e.clientX, e.clientY])

      ctx.lineTo(e.clientX, e.clientY)
      ctx.stroke()


      ctx.beginPath()
      ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(e.clientX, e.clientY)
   }
})

function save() {
   localStorage.setItem('coords', JSON.stringify(coords))
}

function clear() {
   ctx.fillStyle = 'white'
   ctx.fillRect(0, 0, canvas.width, canvas.height)

   ctx.beginPath()
   ctx.fillStyle = 'black'
}

function replay() {
   let timer = setInterval(() => {
      if (!coords.length) {
         clearInterval(timer)
         ctx.beginPath()
         return
      }
      let crd = coords.shift();
      let e = { clientX: crd[0], clientY: crd[1] }

      ctx.lineTo(e.clientX, e.clientY)
      ctx.stroke()


      ctx.beginPath()
      ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(e.clientX, e.clientY)



   }, 20)
}


document.addEventListener('keydown', (e) => {
   if (e.keyCode === 83) {
      // Save
      save()
      console.log('Saved!');
   }
   else if (e.keyCode === 82) {
      // Replay
      coords = JSON.parse(localStorage.getItem('coords'))
      clear()
      replay()
      console.log('Replaying...');
   }
   else if (e.keyCode === 67) {
      // clear
      clear()
      console.log('Cleared');
   }
})