function activateIcon(icon) {
    // Remover la clase 'active' de todos los íconos
    document.querySelectorAll('.bottom-navbar-icon').forEach(function(icon) {
        icon.classList.remove('active');
    });

    // Agregar la clase 'active' al ícono clickeado
    icon.classList.add('active');
    // Agregar animaciones al hacer clic
    icon.classList.add('clicked');
    setTimeout(() => {
        icon.classList.remove('clicked');
        icon.classList.add('bounce');
        setTimeout(() => icon.classList.remove('bounce'), 1000);
    }, 200);
}
