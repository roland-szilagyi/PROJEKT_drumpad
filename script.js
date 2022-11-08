// ----- BUTTONS ----- //

function btn1Play() {
    const btn1Sound = new Audio('./src/audio/kick.wav');
    btn1Sound.play();
}

function btn2Play() {
    const btn2Sound = new Audio('./src/audio/hat.wav');
    btn2Sound.play();
}

function btn3Play() {
    const btn3Sound = new Audio('./src/audio/perc.wav');
    btn3Sound.play();
}

// ----- EVENT LISTENERS ----- //

document.querySelector('.js-btn1')
    .addEventListener('onclick', btn1Play);

document.querySelector('.js-btn2')
    .addEventListener('click', btn2Play);

document.querySelector('.js-btn3')
    .addEventListener('click', btn3Play);