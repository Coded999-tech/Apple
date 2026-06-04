let x = 0
let y = 20
let z = 0
let bool = true
let autoRotateId = null

const cube = document.querySelector('.cube')

const updateTransform = () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
}

const stopAutoRotation = () => {
    if (autoRotateId !== null) {
        clearInterval(autoRotateId)
        autoRotateId = null
    }
}

const addControl = (selector, delta) => {
    const button = document.querySelector(selector)
    if (!button) return

    button.addEventListener('click', (event) => {
        event.preventDefault()
        stopAutoRotation()
        x += delta.x || 0
        y += delta.y || 0
        z += delta.z || 0
        updateTransform()
    })
}

addControl('.top-x-control', { x: 20 })
addControl('.bottom-x-control', { x: -20 })
addControl('.left-y-control', { y: -20 })
addControl('.right-y-control', { y: 20 })
addControl('.top-z-control', { z: 20 })
addControl('.bottom-z-control', { z: -20 })

document.querySelectorAll('.controls a').forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault()
    })
})

const playPause = () => {
    autoRotateId = setInterval(() => {
        y += 1
        updateTransform()
    }, 100)
}

playPause()
document.querySelector('.controls').addEventListener('mouseover', () => {
    if (autoRotateId !== null) {
        stopAutoRotation()
    }
})

const imagePaths = [
    './images/pictures/blue.jpg',
    './images/pictures/blue-2.jpg',
    './images/pictures/blue-3.jpg',
    './images/pictures/blue-4.jpg',
    './images/pictures/blue-5.jpg'
]

const slideshowDivs = () => {
    imagePaths.forEach((src, index) => {
        const div = document.createElement('div')

        div.style.backgroundImage = `url(${src})`

        if (index === 0) div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    })
}
slideshowDivs()

const divs = document.querySelectorAll('.slideshow div')
let a = 1

const slideshow = () => {
    if (divs.length <= 1) return

    setInterval(() => {
        a++
        const div = document.querySelector('.slideshow .change')

        div.classList.remove('change')
        if (a < divs.length) {
            div.nextElementSibling.classList.add('change')
        } else {
            divs[0].classList.add('change')
            a = 1
        }
    }, 2000)
}
slideshow()