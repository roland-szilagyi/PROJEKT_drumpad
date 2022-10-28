let btn1Sound = new Audio('./FX.wav');

// BUTTONS
document.querySelector('.btn1')
    addEventListener('click', btn1Play)

function btn1Play() {
    btn1Sound.play();
}