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

/* Dark mode */
const darkMode = document.getElementById('darkMode');
const html = document.querySelector('html');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

if (darkMode !== null) {

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        lightIcon.classList.toggle('hidden');
        darkIcon.classList.toggle('hidden');
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    darkMode.addEventListener('click', () => {
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'light' : 'dark');
        html.classList.toggle('dark');
        current = localStorage.getItem('theme');
        lightIcon.classList.toggle('hidden');
        darkIcon.classList.toggle('hidden');
    });
}

