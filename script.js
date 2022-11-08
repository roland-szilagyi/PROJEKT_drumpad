document.querySelector('.js-btn1')
    .addEventListener('click', btn1Play)

function btn1Play() {
    const btn1Sound = new Audio('./snare.wav');
    btn1Sound.play();
}

