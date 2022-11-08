// ----- EVENT LISTENERS ----- //
document.querySelector('.js-btn1')
    .addEventListener('mousedown', btn1);

document.querySelector('.js-btn2')
    .addEventListener('mousedown', btn2);

document.querySelector('.js-btn3')
    .addEventListener('mousedown', btn3);

// ----- BUTTONS ----- //

function btn1() {
    const btn1Sound = new Audio('./src/audio/kick.wav');
    btn1Sound.play()
}

function btn2() {
    const btn2Sound = new Audio('./src/audio/hat.wav');
    btn2Sound.play()
}

function btn3() {
    const btn3Sound = new Audio('./src/audio/perc.wav');
    btn3Sound.play()
}