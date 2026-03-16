// Lógica del carrusel de proyectos, porque hacer cada proyecto en un HTML diferente y no usar React duele un poco
(function () {
        // Pillo todas las fotos gigantes del carrusel
        const diapositivas = document.querySelectorAll('.carrusel-diapositiva');
        // Este div es para meter los puntitos de abajo luego
        const contenedorInd = document.getElementById('carruselIndicadores');
        // Y aquí pillo las fotos pequeñas que están debajo
        const miniaturas = document.querySelectorAll('#carruselMiniaturas img');

        // Los botones de pasar foto
        const btnAnterior = document.getElementById('btnAnterior');
        const btnSiguiente = document.getElementById('btnSiguiente');

        // Aquí guardo por qué foto voy (empiezo en la 0, que es la primera en informática)
        let indiceActual = 0;
        // Esto es para el temporizador que pasa la foto sola
        let intervalo;

        // Con este bucle genero los puntitos mágicamente por cada foto que haya
        diapositivas.forEach((_, i) => {
                const btn = document.createElement('button');
                // A la primera le pongo la clase activa para que se vea iluminada
                if (i === 0) btn.classList.add('activa');

                // Si clican en el puntito, me voy a esa foto concreta
                btn.addEventListener('click', () => irA(i));
                contenedorInd.appendChild(btn);
        });

        // Función que hace la magia de cambiar todo (foto grande, miniatura y puntito)
        function irA(indice) {
                // Primero limpio todo lo 'activo' de la imagen en la que estaba antes
                diapositivas[indiceActual].classList.remove('activa');
                contenedorInd.children[indiceActual].classList.remove('activa');
                miniaturas[indiceActual].classList.remove('activa');

                // Hago una movida matemática para que no me de error si paso de la última foto (modulo)
                indiceActual = (indice + diapositivas.length) % diapositivas.length;

                // Y le pongo el 'activo' a las nuevas para que se muestren
                diapositivas[indiceActual].classList.add('activa');
                contenedorInd.children[indiceActual].classList.add('activa');
                miniaturas[indiceActual].classList.add('activa');
        }

        // Funciones chorra para sumar 1 o restar 1
        function siguiente() { irA(indiceActual + 1); }
        function anterior() { irA(indiceActual - 1); }

        // Al clicar los botones de pasar, le digo que pase de foto y reinicie el reloj para que no pase dos de golpe
        btnSiguiente.addEventListener('click', () => { siguiente(); reiniciarIntervalo(); });
        btnAnterior.addEventListener('click', () => { anterior(); reiniciarIntervalo(); });

        // Si pinchan una foto pequeña, voy a esa foto grande y reinicio el reloj
        miniaturas.forEach((img, i) => {
                img.addEventListener('click', () => { irA(i); reiniciarIntervalo(); });
        });

        // Lo arranco para que cada 4 segundacos cambie la fotito
        function iniciarIntervalo() { intervalo = setInterval(siguiente, 4000); }

        // Esta sirve para apagar el reloj y volverlo a encender cuando clico yo a mano
        function reiniciarIntervalo() { clearInterval(intervalo); iniciarIntervalo(); }

        // Ejecuto el encendido inicial
        iniciarIntervalo();
})();