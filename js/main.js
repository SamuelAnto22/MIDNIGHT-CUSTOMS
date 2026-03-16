// Mi archivo JS principal. Esto se carga en todas las páginas para no repetir código por todas partes
// El DOMContentLoaded es para asegurarme de que el HTML y todo está cargado antes de meterle mano con JS, si no a veces da error.
document.addEventListener('DOMContentLoaded', () => {

    // --- El rollo del menú del móvil (el botón de las rayitas / hamburguesa) ---
    // Aquí pillo el botón para abrir el menú buscando por su clase
    const botonMenu = document.querySelector('.boton-menu');
    // Esto es todo el bloque del menú de enlaces
    const menuPrincipal = document.querySelector('.navegacion-principal');

    // Compruebo si existe el botón, porque a lo mejor en alguna página no lo he puesto y me peta el JS
    if (botonMenu) {
        // Le meto un evento para que cuando alguien haga click haga esta función
        botonMenu.addEventListener('click', () => {
            // Miro a ver si está abierto leyendo esto del aria-expanded (que es para accesibilidad, lo leí en un tutorial)
            const estaAbierto = botonMenu.getAttribute('aria-expanded') === 'true';
            // Le doy el valor contrario, si estaba abierto lo pongo false, si estaba cerrado true
            botonMenu.setAttribute('aria-expanded', !estaAbierto);
            // Esto es magia de la buena: le mete o le quita la clase 'activo' al menú, que en CSS lo hace aparecer o desaparecer
            menuPrincipal.classList.toggle('activo');

            // Si acabamos de abrir el menú...
            if (!estaAbierto) {
                // Busco el primer enlace que pille dentro del menú
                const primerEnlace = menuPrincipal.querySelector('a');
                // Y le meto el focus para que si alguien usa el teclado por tabulador, vaya directo ahí (accesibilidad a tope)
                if (primerEnlace) primerEnlace.focus();
            }
        });
    }

    // --- Para que se pueda cerrar el menú pulsando la tecla Escape del teclado ---
    // Atento a cualquier tecla que se pulse en toda la página
    document.addEventListener('keydown', (evento) => {
        // Si la tecla es el 'Escape' y encima el menú está abierto (tiene la clase 'activo')
        if (evento.key === 'Escape' && menuPrincipal.classList.contains('activo')) {
            // Le digo a lo de accesibilidad que ya está cerrado
            botonMenu.setAttribute('aria-expanded', 'false');
            // Le quito la clase para ocultarlo
            menuPrincipal.classList.remove('activo');
            // Vuelvo a poner el foco en el botón del menú
            botonMenu.focus();
        }
    });

    // --- Pintar/marcar en qué página estamos en el menú de navegación (para que se quede el texto iluminado) ---
    // Saco el nombre de la página leyendo la URL del navegador y cortando lo del final. Si es la raíz pongo index.html por defecto
    const paginaActual = location.pathname.split('/').pop() || 'index.html';
    // Pillo todos los enlaces (<a>) que están dentro de mi nav
    const enlacesNav = document.querySelectorAll('.navegacion-principal a');

    // Les doy una vuelta con un forEach
    enlacesNav.forEach(enlace => {
        // Si el href del enlace donde estoy coincide con la página actual de la URL
        if (enlace.getAttribute('href') === paginaActual) {
            // Le meto la clase chula 'activo' que en CSS le da color o la subraya
            enlace.classList.add('activo');
            // Esto también es para lectores de pantalla
            enlace.setAttribute('aria-current', 'page');
        } else {
            // Si no me coincide, se la quito, por si acaso se quedó puesta de antes
            enlace.classList.remove('activo');
            enlace.removeAttribute('aria-current');
        }
    });

    // --- El truquito de la pantalla de carga (Loader negro) ---
    // Busco el div gigante negro de carga
    const pantallaCarga = document.getElementById('loader');
    // Compuebo que exista en esta página
    if (pantallaCarga) {
        // Le digo al código: "espérate 1.2 segundos y luego haz esto" para que se aprecie la animación y quede guay
        setTimeout(() => {
            // Le añado esta clase para que empiece a desvanecerse (en CSS le puse que opacity baje a 0)
            pantallaCarga.classList.add('desvaneciendo');
            // Y luego pongo otro timeout dentro para esperar a que termine la animación de desaparecer
            setTimeout(() => {
                // Cuando terminan los 800ms lo desaparezco totalmente con display none para que no moleste clickando cosas por debajo
                pantallaCarga.style.display = 'none';
            }, 800); // 800ms de espera
        }, 1200); // 1.2s de espera
    }
});
