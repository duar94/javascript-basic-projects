// Fichero: js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const lottieWrapper = document.getElementById('lottie-wrapper');
    const textOverlay = document.getElementById('text-overlay');
    let lottiePlayer;

    // --- Configuración ---
    const DESKTOP_BREAKPOINT = 768; // Ancho en píxeles para cambiar a la versión de escritorio
    const ANIMATION_PATH_HORIZONTAL = 'animations/Animacion_hero_h.json';
    const ANIMATION_PATH_VERTICAL = 'animations/Animacion_Hero_v.json';
    
    // El fotograma donde la animación de los círculos termina (según los archivos JSON)
    const ANIMATION_END_FRAME = 40; 
    
    // El fotograma donde el texto debe empezar a aparecer para un efecto suave
    const TEXT_FADE_IN_START_FRAME = 30;

    function setupLottie() {
        // Limpia cualquier reproductor anterior para evitar duplicados al redimensionar
        lottieWrapper.innerHTML = '';
        
        // Crea un nuevo elemento lottie-player
        lottiePlayer = document.createElement('lottie-player');
        
        // Elige la ruta del archivo de animación según el ancho de la ventana
        const animationPath = window.innerWidth >= DESKTOP_BREAKPOINT 
            ? ANIMATION_PATH_HORIZONTAL 
            : ANIMATION_PATH_VERTICAL;

        // Asigna los atributos necesarios al elemento
        lottiePlayer.setAttribute('id', 'lottie-scroll-player');
        lottiePlayer.setAttribute('src', animationPath);
        lottieWrapper.appendChild(lottiePlayer);

        // Espera a que el reproductor esté listo para configurar la interactividad
        lottiePlayer.addEventListener('ready', () => {
            // Configura la interactividad para el modo "scroll"
            LottieInteractivity.create({
                player: '#lottie-scroll-player',
                mode: 'scroll',
                actions: [
                    {
                        // La animación se ejecutará durante el primer 100% de scroll (100vh)
                        visibility: [0, 1.0],
                        type: 'seek',
                        // Mapea el scroll a los fotogramas 0 a 40 de la animación
                        frames: [0, ANIMATION_END_FRAME],
                    },
                ],
            });

            // Escucha el evento 'frame' para sincronizar la opacidad del texto
            lottiePlayer.addEventListener('frame', (e) => {
                const currentFrame = Math.round(e.detail.frame);
                if (currentFrame >= TEXT_FADE_IN_START_FRAME) {
                    textOverlay.style.opacity = '1';
                } else {
                    textOverlay.style.opacity = '0';
                }
            });
        });
    }

    // --- Ejecución y Eventos ---
    // Configuración inicial al cargar la página
    setupLottie();

    // Vuelve a configurar Lottie si el usuario redimensiona la ventana
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            setupLottie();
        }, 250); // Un pequeño retardo para no sobrecargar el navegador
    });
});
// Fichero: js/script.js (Mejorado para depuración)

document.addEventListener('DOMContentLoaded', () => {
    // ... (el resto del código es igual)

    // ... dentro de la función setupLottie()

        lottiePlayer.addEventListener('ready', () => {
            LottieInteractivity.create({
                // ... (configuración de interactividad igual)
            });

            // Escucha el evento 'frame' para sincronizar la opacidad del texto
            lottiePlayer.addEventListener('frame', (e) => {
                const currentFrame = Math.round(e.detail.frame);
                
                // ¡AÑADIDO PARA DEPURAR! Revisa la consola de tu navegador (F12)
                console.log('Current Frame:', currentFrame);

                if (currentFrame >= TEXT_FADE_IN_START_FRAME) {
                    textOverlay.style.opacity = '1';
                } else {
                    textOverlay.style.opacity = '0';
                }
            });
        });
    // ...
});