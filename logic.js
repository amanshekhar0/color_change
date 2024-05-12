let startBtn = document.querySelector('.btn1'); 
let stopBtn = document.querySelector('.btn2'); 
let box = document.querySelector('.boxtext');
let colorChangeInterval; 

function generateRandomColor() {
    let hexChar = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        hexCode += hexChar[Math.floor(Math.random() * 16)];
    }
    return hexCode;
}

function changeBoxColor() {
    let randomColor = generateRandomColor();
    box.style.color = randomColor;
}

startBtn.addEventListener('click', function() {
    colorChangeInterval = setInterval(changeBoxColor, 500);
});

stopBtn.addEventListener('click', function() {
    clearInterval(colorChangeInterval);
});
