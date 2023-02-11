/* Burger menu */
const burger = document.getElementById('burger');
const resp = document.getElementById('resp');
const main = document.getElementById('main');

burger.addEventListener('click', () => {
    resp.classList.toggle('hidden');
    burger.classList.toggle('hidden');
});

/* Close button */
const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', () => {
    resp.classList.toggle('hidden');
    burger.classList.toggle('hidden');
});
