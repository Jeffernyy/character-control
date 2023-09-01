const contenedorSteve = document.getElementById('contenedor-steve')
const steve = document.getElementById('steve')
const cabeza = document.getElementById('cabeza')
const tronco = document.getElementById('tronco')
const brazoIzquierdo = document.getElementById('brazo-izquierdo')
const brazoDerecho = document.getElementById('brazo-derecho')
const piernaIzquierda = document.getElementById('pierna-izquierda')
const piernaDerecha = document.getElementById('pierna-derecha')
const todos = [cabeza, tronco, brazoIzquierdo, brazoDerecho, piernaIzquierda, piernaDerecha]

const sombra = document.getElementById('sombra')
window.addEventListener('keydown', (evento) => {
  if (evento.code == 'ShiftLeft') {
    cabeza.classList.add('cabeza--agachado')
    tronco.classList.add('tronco--agachado')
    brazoIzquierdo.classList.add('brazo-izquierdo--agachado')
    brazoDerecho.classList.add('brazo-derecho--agachado')
  }
})

window.addEventListener('keyup', (evento) => {
  if (evento.code == 'ShiftLeft') {
    cabeza.classList.remove('cabeza--agachado')
    tronco.classList.remove('tronco--agachado')
    brazoIzquierdo.classList.remove('brazo-izquierdo--agachado')
    brazoDerecho.classList.remove('brazo-derecho--agachado')
  }
})

let rotacionY = 0
let rotacionX = 0

window.addEventListener('keydown', (evento) => {
  if (evento.code == 'KeyS') {
    rotacionY = 0
    contenedorSteve.style.transform = `rotateX(${rotacionX}deg) rotateY(${rotacionY}deg)`
  }

  else if (evento.code == 'KeyD') {
    rotacionY = 90
    contenedorSteve.style.transform = `rotateX(${rotacionX}deg) rotateY(${rotacionY}deg)`
  }

  else if (evento.code == 'KeyW') {
    rotacionY = 180
    contenedorSteve.style.transform = `rotateX(${rotacionX}deg) rotateY(${rotacionY}deg)`
  }

  else if (evento.code == 'KeyA') {
    rotacionY = 270
    contenedorSteve.style.transform = `rotateX(${rotacionX}deg) rotateY(${rotacionY}deg)`
  }
  caminar()
})

window.addEventListener('keyup', (evento) => {
  parar()
})

function parar() {
  todos.forEach(element => {
    element.classList.add('quieto')
  });
}

function caminar() {
  todos.forEach(element => {
    element.classList.remove('quieto')
  })
}

window.addEventListener('keydown', (evento) => {
  if (evento.code == 'Space') {
    steve.style.transform = `translateY(-120px) `
    sombra.style.width = '100px'
    sombra.style.height = '100px'
    setTimeout(() => {
      steve.style.transform = `translateY(0px) `
      sombra.style.width = '140px'
      sombra.style.height = '140px'
    }, 400);

    setTimeout(() => {
      parar()
    }, 400);
  }
})

const main = document.getElementById('main')
let ubicacionX = 0
let ubicacionZ = 0
const distancia = 25

window.addEventListener('keydown', obtenerCoordenadas)
function obtenerCoordenadas(evento) {
  if (evento.code == 'KeyW') {
    ubicacionZ -= distancia
  } else if (evento.code == 'KeyS') {
    ubicacionZ += distancia
  } else if (evento.code == 'KeyA') {
    ubicacionX -= distancia
  } else if (evento.code == 'KeyD') {
    ubicacionX += distancia
  }
  movermeEnElPlano()
}

function movermeEnElPlano() {
  main.style.transform =
    `rotateX(-25deg)
    rotateY(-35deg)
    translateX(${ubicacionX}px)
    translateZ(${ubicacionZ}px) 
    `
}

const flecha = document.getElementById('flecha')
const letraW = document.getElementById('letraW')
const letraS = document.getElementById('letraS')
const letraA = document.getElementById('letraA')
const letraD = document.getElementById('letraD')

window.addEventListener('keydown', (evento) => {
  if (evento.code == 'KeyW') {
    flecha.style.transform = 'rotateZ(-59deg)'
    letraW.classList.add('coloreado')
  } else if (evento.code == 'KeyS') {
    flecha.style.transform = 'rotateZ(119.5deg)'
    letraS.classList.add('coloreado')
  } else if (evento.code == 'KeyA') {
    flecha.style.transform = 'rotateZ(-149deg)'
    letraA.classList.add('coloreado')
  } else if (evento.code == 'KeyD') {
    flecha.style.transform = 'rotateZ(30deg)'
    letraD.classList.add('coloreado')
  }
})

window.addEventListener('keyup', (evento) => {
  letraW.classList.remove('coloreado')
  letraS.classList.remove('coloreado')
  letraA.classList.remove('coloreado')
  letraD.classList.remove('coloreado')
})

window.addEventListener('keydown', (evento) => {
  if (evento.code == 'KeyG') {
    cabeza.classList.add('cabeza--epico')
    tronco.classList.add('tronco--epico')
    brazoIzquierdo.classList.add('brazo-izquierdo--epico')
    brazoDerecho.classList.add('brazo-derecho--epico')
    piernaIzquierda.classList.add('pierna-izquierda--epico')
    piernaDerecha.classList.add('pierna-derecha--epico')
  }
})

window.addEventListener('keyup', (evento) => {
  if (evento.code == 'KeyG') {
    cabeza.classList.remove('cabeza--epico')
    tronco.classList.remove('tronco--epico')
    brazoIzquierdo.classList.remove('brazo-izquierdo--epico')
    brazoDerecho.classList.remove('brazo-derecho--epico')
    piernaIzquierda.classList.remove('pierna-izquierda--epico')
    piernaDerecha.classList.remove('pierna-derecha--epico')
  }
})