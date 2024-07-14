const sommenu = new Audio('../sounds/sound.mp3');

document.addEventListener('DOMContentLoaded', () => {
    sommenu.play();
    const displayTime = 8000;
    setTimeout(function () {
        document.getElementById('transientPage').style.display = 'none';
        document.getElementById('transientPage').style.position = 'absolute';
        document.getElementById('transientPage').style.zIndex = '1';
    }, displayTime);

    const hoverbutton = new Audio('../sounds/hoverbutton.mp3');
    document.getElementById('newgame').addEventListener('mouseenter', () => {
        hoverbutton.play();
        hoverbutton.preload();
    });
    document.getElementById('taverna').addEventListener('mouseenter', () => {
        hoverbutton.play();
        hoverbutton.preload();
    });
    document.getElementById('options').addEventListener('mouseenter', () => {
        hoverbutton.play();
        hoverbutton.preload();
    });

    const somonline = new Audio('../sounds/clickonline.mp3');
    document.getElementById('save1').addEventListener('click', () => {
        somonline.play();
        setTimeout(() => {
            window.location.href = '../lapsusregnum/index.html';
        }, 1500);
    });

    document.getElementById('taverna').addEventListener('click', () => {
        somonline.play();
        setTimeout(() => {
            document.body.classList.add('fade-slide-out');
            window.location.href = '../tavern/index.html';
        }, 1500);
    });

    document.getElementById('options').addEventListener('click', () => {
        somonline.play();
    });
});

document.getElementById('newgame').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('botõesDoMenu').style.display = 'none';
    document.getElementById('slotsave').style.display = 'flex';
});