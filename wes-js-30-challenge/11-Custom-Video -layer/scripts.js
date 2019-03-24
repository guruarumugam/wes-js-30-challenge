const player = document.querySelector('.player')
const viewer = player.querySelector('.viewer')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')

function togglePlay() {
    viewer[ viewer.paused ? 'play' : 'pause']();
}

function updateToggleButton() {
    toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function skip() {
    viewer.currentTime += parseFloat(this.dataset.skip)
}


viewer.addEventListener('click', togglePlay)
viewer.addEventListener('play', updateToggleButton)
viewer.addEventListener('pause', updateToggleButton)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip))