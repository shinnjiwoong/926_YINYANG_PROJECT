let canvas;
let ctx;
let isPainting = false;
let lineWidth = 20;

window.addEventListener('DOMContentLoaded', () => {
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'multiply';

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    changeBGColors();
    changeLineWidth();
    downloadImg();
});
window.addEventListener('mousemove', (event) => {
    moveFakeCursor(event.clientX, event.clientY);
    drawPaint(event, lineWidth);
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

function drawPaint(event, lineWidth) {
    let ogX = event.clientX;
    let ogY = event.clientY;

    let fakeX = window.innerWidth - event.clientX;
    let fakeY = window.innerHeight - event.clientY;

    if (isPainting == true) {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.ellipse(ogX, ogY, lineWidth, lineWidth, Math.PI / 4, 0, 2 * Math.PI);
        ctx.ellipse(fakeX, fakeY, lineWidth, lineWidth, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
    } else {
    }
}

function changeBGColors() {
    const colorChangeBtn = document.querySelector('#color-change-btn');
    const bgWrappers = document.querySelectorAll('.bg-wrapper div');

    colorChangeBtn.addEventListener('click', () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        let oppR = 255 - r;
        let oppG = 255 - g;
        let oppB = 255 - b;

        bgWrappers[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        bgWrappers[1].style.backgroundColor = `rgb(${oppR}, ${oppG}, ${oppB})`;
    });
}

function changeLineWidth() {
    const plus = document.querySelector('#plus');
    const minus = document.querySelector('#minus');

    plus.addEventListener('click', () => {
        lineWidth += 5;
    });

    minus.addEventListener('click', () => {
        if (lineWidth > 5) {
            lineWidth -= 5;
        }
    });
}

async function downloadImg() {
    const downloadBtn = document.querySelector('.btn.download');
    const screenshotWrapper = document.querySelector('.screenshot-wrapper');
    const leftBg = document.querySelector('.left');

    downloadBtn.addEventListener('click', async (event) => {
        let tempCanvas = await html2canvas(screenshotWrapper);
        let imgUrl = tempCanvas.toDataURL();

        downloadBtn.href = imgUrl;
    });
}
