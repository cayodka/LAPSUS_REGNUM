const xp= new Audio('../sound/xp.mp3')
const som1 = new Audio('../sound/fire.mp3');
const audio0 = new Audio('../sound/audio1.mp3');
const audio1 = new Audio('../sound/sound2.mp3');
const audio2 = new Audio('../sound/sound4.mp3');
const som3 = new Audio('../sound/potion.mp3');


//      //      //      //Para carregar o som quando iniciar a pagina//     //      //      //
document.addEventListener('DOMContentLoaded', () => {
    new Audio('../sound/sound.mp3').play();
    
});
//      //      //      //      //      //      //      //      //      //      //      //  



// parte da espada//        //      //      //      //      //      //      //      //      //
document.getElementById('armor').addEventListener('click', () => {
    setTimeout(() => { 
        som1.play();
    }, 300);
});
let contador1 = 0;
armor.addEventListener('click', () => {
    contador1++;
    xp.play();
    
    if (contador1 === 1) {
        window.alert(`Você recebeu ${contador1} espada.`);
    } else {
        window.alert(`Você recebeu ${contador1} espada.`);
    }
});
//          //          //          //      //      //      //      //      //      //      //




//      //      //      //Parte da potion//     //      //      //      //      //          //
let contador2 = 0;
potion.addEventListener('click', () => {
    contador2++;
    xp.play();
    
    if (contador2 === 1) {
        window.alert(`Você recebeu ${contador2} poção.`);
    } else {
        window.alert(`Você recebeu ${contador2} poção.`);
    }
    });
    document.getElementById('potion').addEventListener('click', () => {
        som3.play();
    });
//      //      //      //      //          //      //      //      //      //      //      //


//      //      //      //      //Parte do bartender//      //      //      //      //      //
document.getElementById('bartender').addEventListener('click', () => {
    audio0.play();
    audio0.preload = 'auto';
});
//      //      //      //      //      //      //      //      //      //      //      //      //
