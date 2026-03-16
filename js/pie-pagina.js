// Este archivo JS lo hice para no tener que copiar el mismo footer en todos los HTMLs porque me daba pereza
/**
 * pie-pagina.js
 * Básicamente esto mete el footer en todas las páginas por arte de magia usando JS
 * Así si tengo que cambiar un enlace del footer, solo lo cambio aquí y pum, en todas las páginas cambiado
 */

// Esto es una movida que se llama IIFE (función que se autoejecuta) para que no haya problemas con variables repetidas
(function () {
    // Guardo todo el tocho de HTML de mi footer en una variable usando las comillas raras estas (backticks)
    const plantillaPie = `
    <!-- Uso la etiqueta footer porque Sonia nos dijo que hay que usar etiquetas semánticas -->
    <footer class="pie-pagina">
        <!-- Contenedor del logo, le pongo colores con var() del CSS -->
        <div class="logo-pie">
            <span style="color:var(--color1); margin-right: 5px;">Midnight</span><span
                style="color:var(--color2);">Customs</span>
        </div>
        
        <!-- Los enlaces rápidos para abajo del todo, en modo menú -->
        <nav class="nav-pie" aria-label="Enlaces rápidos">
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="servicios.html">Servicios</a></li>
                <li><a href="proyectos.html">Proyectos</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
        
        <!-- Y aquí los iconos de las redes sociales. Copié los SVGs de internet para que no pesen como imágenes -->
        <div class="redes-sociales">
            <ul>
                <!-- Instagram -->
                <li><a href="#" aria-label="Síguenos en Instagram" title="Instagram">
                    <!-- Código gigante inentendible de SVG que dibuja el logo de Insta -->
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </a></li>
                <!-- YouTube -->
                <li><a href="#" aria-label="Síguenos en YouTube" title="YouTube">
                    <!-- Mismo rollo pero para el icono de YouTube -->
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                </a></li>
                <!-- Twitter/X -->
                <li><a href="#" aria-label="Síguenos en Twitter X" title="Twitter X">
                    <!-- Icono de Twitter -->
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                </a></li>
            </ul>
        </div>
        
        <!-- Lo que va abajo del todo indicando que esto es un curro de clase -->
        <div class="fondo-pie">
            <p>&copy; 2026 Midnight Customs. Proyecto académico por 2º DAW. Todos los derechos reservados.</p>
        </div>
    </footer>`;

    // Con esto inyecto/encasqueto el pedazo de HTML que he creado justo antes de que se cierre el body del HTML
    document.body.insertAdjacentHTML('beforeend', plantillaPie);
})();
