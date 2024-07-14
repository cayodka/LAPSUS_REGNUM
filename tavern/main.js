const som1 = new Audio('./sound/door.mp3');
const som2 = new Audio('./sound/sound.mp3');


//      //      //      //Para carregar o som quando iniciar a pagina//     //      //      //
document.addEventListener('DOMContentLoaded', () => {
        som2.play();
});
//      //      //      //      //      //      //      //      //      //      //      //  


//  //  //  //  //  //  //  // função da porta//    //      //      //      //      //      //
document.getElementById('porta').addEventListener('click', () => {
    som1.play();
});

document.getElementById('porta').addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = './DentroTaberna/index.html';
    }, 2000);
});
//      //      //      //      //      //      //      //      //      //      //      //  