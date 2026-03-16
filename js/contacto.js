// JS exclusivo para la página de contacto

// Pillo el formulario y me quedo atento (listener) a cuando le den al botón de submit
document.getElementById('formContacto').addEventListener('submit', function (e) {
    // Esto evita que la página pegue el pantallazo y se recargue (magia negra JS)
    e.preventDefault();

    // Si el usuario no ha marcado el tic de la privacidad, cancelo el envío
    if (!document.getElementById('privacidad').checked) return;

    // Oculto el formulario entero dándole un display none para parecer que ya se ha mandado
    this.style.display = 'none';

    // Busco mi mensaje de éxito que estaba escondido y lo pongo visible
    const msg = document.getElementById('msgEnviado');
    msg.style.display = 'block';

    // Y pa rematar, hago que el navegador haga scroll suave (smooth) hasta el mensaje. Queda súper pro.
    msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
});