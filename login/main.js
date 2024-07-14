const sommenu = new Audio('../sounds/sound.mp3');
document.addEventListener('DOMContentLoaded', () => {
sommenu.play();
});

const hoversom = new Audio('../sounds/hoverbutton.mp3')
document.getElementById('button').addEventListener('mouseenter', () => {
    hoversom.play();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const messageElement = document.getElementById('message');

const validUsername = 'cayodka';
const validPassword = 'Manancial24!';

if (username === validUsername && password === validPassword) {
const somcerto = new Audio('../sounds/correct.mp3')
somcerto.play();
messageElement.style.color = 'green';
messageElement.textContent = 'Login bem-sucedido!';
setTimeout(() => {
window.location.href = '../index.html';
}, 1500);
} else {
const somerrado = new Audio('../sounds/errado.mp3')
somerrado.play();
messageElement.style.color = 'red';
messageElement.textContent = 'Usuário ou senha incorretos.';
}
});