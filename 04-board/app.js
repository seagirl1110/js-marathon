const board = document.querySelector('#board')
const colors = ['#ff66cc', '#ffb31a', '#4d79ff', '#0047b3', '#ffaa00', '#00e6e6', '#cc9966']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()

    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}