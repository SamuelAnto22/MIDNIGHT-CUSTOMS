// JS de la página Nosotros (solo para el rollo del vídeo)

// Pillo las capas HTML involucradas en mi invento del vídeo
const wrapper = document.getElementById('videoWrapper');
const video = document.getElementById('videoPromo');
const overlay = document.getElementById('videoOverlay');

function reproducirVideo() {
    // Enseño el vídeo principal y escondo mi botón custom gigante
    video.style.display = 'block';
    overlay.style.display = 'none';

    // Le doy al play (ahora que ya he subido el video al proyecto, ya funciona guay)
    video.play().catch(error => {
        console.log("Algo petó cargando el vídeo:", error);
        // Si por lo que sea el navegador bloquea el play, vuelvo a enseñar el overlay
        video.style.display = 'none';
        overlay.style.display = 'flex';
    });
}

// Cuando clicas con el ratón en la foto con el play, llamo a la función de arriba
wrapper.addEventListener('click', reproducirVideo);

// Esto es cosas que pide Sonia, accesibilidad: si navegan con el tabulador y dan al enter o espacio, arranca igual
wrapper.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        reproducirVideo();
    }
});