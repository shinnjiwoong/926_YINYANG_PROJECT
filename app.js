let isPainting = false;

window.onload = () => {
    const canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

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
}
