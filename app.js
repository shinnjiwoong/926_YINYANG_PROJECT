window.onload = () => {};

window.addEventListener('mousemove', (event) => {
    moveFakeCursor(event.clientX, event.clientY);
});

function moveFakeCursor(posX, posY) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    let fakeCursor = document.querySelector('.fake-cursor');

    fakeCursor.style.top = `${height - posY}px`;
    fakeCursor.style.left = `${width - posX}px`;
}
