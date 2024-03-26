// Obtener una imagen aleatoria de Unsplash relacionada con paisajes de todo el mundo
function setBackgroundImage() {
    fetch('https://source.unsplash.com/1600x900/?landscape')
    .then(response => {
        document.querySelector('.background-animation').style.backgroundImage = `url(${response.url})`;
    })
    .catch(error => console.error('Error fetching background image:', error));
}

// Establecer una nueva imagen de fondo cada 10 segundos
setInterval(setBackgroundImage, 10000);

// Cargar una imagen de fondo al cargar la página
setBackgroundImage();
