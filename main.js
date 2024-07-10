const sommenu = new Audio('../sounds/sound.mp3');

document.addEventListener('DOMContentLoaded', () => {
    sommenu.play();
});

const sombuttons = new Audio('../sounds/somclick.mp3')

document.getElementById('botõesDoMenu').addEventListener('click', () => {
    sombuttons.play();
});

document.getElementById('botõesDoMenu').addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = './tavern/index.html';
    }, 1000);
});