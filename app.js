let canvas;
let ctx;
let isPainting = false;

window.addEventListener('DOMContentLoaded', () => {
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'multiply';

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
window.addEventListener('mousemove', (event) => {
    moveFakeCursor(event.clientX, event.clientY);
    drawPaint(event);
});

window.addEventListener('mousedown', () => {
    isPainting = true;
});

window.addEventListener('mouseup', () => {
    isPainting = false;
});

function moveFakeCursor(posX, posY) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    let fakeCursor = document.querySelector('.fake-cursor');

    fakeCursor.style.top = `${height - posY}px`;
    fakeCursor.style.left = `${width - posX}px`;
}

function drawPaint(event) {
    let ogX = event.offsetX;
    let ogY = event.offsetY;

    let fakeX = window.innerWidth - event.offsetX;
    let fakeY = window.innerHeight - event.offsetY;

    if (isPainting == true) {
        console.log('눌러');
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.ellipse(ogX, ogY, 20, 20, Math.PI / 4, 0, 2 * Math.PI);
        ctx.ellipse(fakeX, fakeY, 20, 20, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
    } else {
        console.log('떼었다');
    }
}
