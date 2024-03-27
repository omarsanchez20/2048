document.addEventListener('DOMContentLoaded', function() {
    // Tu código JavaScript aquí
    var sound;

    // Función para inicializar el sonido
    function inicializarSonido() {
        sound = new Howl({
            src: ['../wwwroot/sounds/stranger-things.mp3'], // Ruta del archivo de audio
            autoplay: false, // No reproducir automáticamente al cargar
            loop: true, // Repetir el sonido
            volume: 0.5 // Volumen inicial
        });
    }

    // Función para activar el sonido
    function activarSonido() {
        sound.play();
    }

    // Función para desactivar el sonido
    function desactivarSonido() {
        sound.pause();
    }

    // Evento para activar el sonido cuando se hace clic en el botón correspondiente
    document.getElementById('activar-sonido').addEventListener('click', function() {
        activarSonido();
    });

    // Evento para desactivar el sonido cuando se hace clic en el botón correspondiente
    document.getElementById('desactivar-sonido').addEventListener('click', function() {
        desactivarSonido();
    });

    // Llamar a la función para inicializar el sonido
    inicializarSonido();
});