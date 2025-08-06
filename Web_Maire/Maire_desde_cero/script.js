
// JavaScript para el menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
const menuItems = document.getElementById('menuItems');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuItems.classList.toggle('active');
});

// Cerrar menú al hacer clic en un elemento
document.querySelectorAll('.menu-items > div').forEach(item => {
    item.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        menuItems.classList.remove('active');
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !menuItems.contains(e.target)) {
        menuToggle.classList.remove('active');
        menuItems.classList.remove('active');
    }
});
