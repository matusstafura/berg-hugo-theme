const burger = document.getElementById('burger');
const resp = document.getElementById('resp');
burger.addEventListener('click', () => {
    resp.classList.toggle('hidden');
});