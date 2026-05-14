// Esperamos a que todo el HTML cargue antes de ejecutar el JS
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FUNCIONALIDAD DEL MENÚ MÓVIL
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    // Escuchamos el clic en el ícono de la hamburguesa
    menuToggle.addEventListener('click', () => {
        // Alternamos la clase 'active' para mostrar/ocultar el menú en móviles
        navLinks.classList.toggle('active');
        
        // Cambiamos el ícono de hamburguesa a una 'X' al abrir, y viceversa
        const icon = menuToggle.querySelector('i');
        if(navLinks.classList.contains('active')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerramos el menú móvil automáticamente al hacer clic en cualquier enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 2. EFECTO SOMBRA EN EL HEADER AL HACER SCROLL
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        // Si bajamos más de 50px, agregamos una sombra
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
        } else {
            // Si volvemos arriba, la quitamos
            header.style.boxShadow = 'none';
        }
    });

});