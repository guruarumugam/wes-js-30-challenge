'use strict'

const keys = [65, 83, 68, 70, 71, 72, 74, 75, 76]
const keygroup = document.querySelectorAll('.key')

function addClass(keyValue){
    const nodebox = document.querySelector(`div[data-key="${keyValue}"]`)
    nodebox.classList.add("playing")
}

function playSound(keyValue){
    const audiobox = document.querySelector(`audio[data-key="${keyValue}"]`)
    audiobox.currentTime = 0
    audiobox.play()
}

function removeClass(e) {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove("playing")
}

window.addEventListener('keydown', (event) => {
    const keyValue = event.keyCode

    if(! keys.includes(keyValue)) return

    addClass(keyValue)
    playSound(keyValue)
})

keygroup.forEach(key => key.addEventListener('transitionend',removeClass))