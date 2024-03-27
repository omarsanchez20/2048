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

// Función para redirigir al Home
function redirectToHome() {
    window.open('../Views/home.html', '_blank');
}

// Función para redirigir al Juego
function redirectToGame() {
    window.open('../Views/index.html', '_blank');
}

function loadChartPartialView() {
    // Obtiene el contenido de ranking.html usando Fetch API o similar
    fetch('../Views/ranking.html')
      .then(response => response.text())
      .then(data => {
        // Actualiza el contenido del cuerpo modal con los datos obtenidos
        document.getElementById('chartModal').querySelector('.modal-body').innerHTML = data;
        // Muestra el modal
        const chartModal = new bootstrap.Modal(document.getElementById('chartModal'));
        chartModal.show();
      })
      .catch(error => {
        console.error('Error al obtener ranking.html:', error);
        // Maneja errores potenciales aquí (por ejemplo, muestra un mensaje de error)
      });
  }v