// JavaScript para el menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
const menuItems = document.getElementById('menuItems');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuItems.classList.toggle('active');
});

// Cerrar menú al hacer clic en un elemento
document.querySelectorAll('.menu-items > div').forEach(item => {
    item.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        menuItems.classList.remove('active');
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !menuItems.contains(e.target)) {
        menuToggle.classList.remove('active');
        menuItems.classList.remove('active');
    }
});

// ==========================================
// Script para la transición entre pantallas
// ==========================================

// Variables para el control de transición
let isInSecondScreen = false;
let isTransitioning = false;
const body = document.body;
const circulos = document.querySelector('.circulos');
const pantallaFinal = document.querySelector('.pantalla-final');

// Función para ir a la segunda pantalla
function goToSecondScreen() {
    if (isInSecondScreen || isTransitioning) return;
    
    console.log('Activando segunda pantalla...');
    isTransitioning = true;
    isInSecondScreen = true;
    
    // Cambiar a segunda pantalla
    circulos.classList.add('hidden');
    body.classList.add('scroll-active');
    
    setTimeout(() => {
        pantallaFinal.classList.add('visible');
        isTransitioning = false;
        console.log('Segunda pantalla activada');
    }, 100);
}

// Función para volver a la primera pantalla
function goToFirstScreen() {
    if (!isInSecondScreen || isTransitioning) return;
    
    console.log('Volviendo a primera pantalla...');
    isTransitioning = true;
    isInSecondScreen = false;
    
    // Volver a primera pantalla
    pantallaFinal.classList.remove('visible');
    
    setTimeout(() => {
        body.classList.remove('scroll-active');
        circulos.classList.remove('hidden');
        isTransitioning = false;
        console.log('Primera pantalla activada');
    }, 100);
}

// ==========================================
// Event Listeners para navegación
// ==========================================

// Detectar wheel (scroll del mouse)
window.addEventListener('wheel', (e) => {
    if (isTransitioning) {
        e.preventDefault();
        return;
    }
    
    if (e.deltaY > 30 && !isInSecondScreen) {
        // Scroll hacia abajo - ir a segunda pantalla
        e.preventDefault();
        goToSecondScreen();
    } else if (e.deltaY < -30 && isInSecondScreen) {
        // Scroll hacia arriba - volver a primera pantalla
        e.preventDefault();
        goToFirstScreen();
    }
}, { passive: false });

// Touch events para dispositivos móviles
let touchStartY = 0;
let touchEndY = 0;
let isTouching = false;

window.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
    isTouching = true;
});

window.addEventListener('touchmove', (e) => {
    if (isTransitioning || !isTouching) return;
    
    // Prevenir scroll nativo en primera pantalla
    if (!isInSecondScreen) {
        e.preventDefault();
    }
}, { passive: false });

window.addEventListener('touchend', (e) => {
    if (!isTouching || isTransitioning) return;
    
    touchEndY = e.changedTouches[0].screenY;
    const touchDiff = touchStartY - touchEndY;
    const threshold = 50;
    
    if (Math.abs(touchDiff) > threshold) {
        if (touchDiff > 0 && !isInSecondScreen) {
            // Swipe hacia arriba - ir a segunda pantalla
            goToSecondScreen();
        } else if (touchDiff < 0 && isInSecondScreen) {
            // Swipe hacia abajo - volver a primera pantalla
            goToFirstScreen();
        }
    }
    
    isTouching = false;
});

// Detectar teclas de navegación
window.addEventListener('keydown', (e) => {
    if (isTransitioning) return;
    
    if ((e.key === 'ArrowDown' || e.key === ' ') && !isInSecondScreen) {
        // Flecha abajo o espacio - ir a segunda pantalla
        e.preventDefault();
        goToSecondScreen();
    } else if (e.key === 'ArrowUp' && isInSecondScreen) {
        // Flecha arriba - volver a primera pantalla
        e.preventDefault();
        goToFirstScreen();
    } else if (e.key === 'Escape' && isInSecondScreen) {
        // Tecla Escape - volver a primera pantalla
        e.preventDefault();
        goToFirstScreen();
    }
});

// Prevenir scroll tradicional en primera pantalla
window.addEventListener('scroll', (e) => {
    if (!isInSecondScreen) {
        window.scrollTo(0, 0);
    }
});

// ==========================================
// Funciones de inicialización y utilidad
// ==========================================

// Función para verificar que los elementos existen
function checkElements() {
    if (!circulos) {
        console.error('Elemento .circulos no encontrado');
        return false;
    }
    if (!pantallaFinal) {
        console.error('Elemento .pantalla-final no encontrado');
        return false;
    }
    return true;
}

// Manejar resize de ventana
window.addEventListener('resize', () => {
    if (!isInSecondScreen) {
        window.scrollTo(0, 0);
    }
});

// Prevenir comportamientos por defecto del navegador
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// ==========================================
// Inicialización del documento
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, inicializando...');
    
    // Verificar que los elementos existen
    if (!checkElements()) {
        console.error('Error: Elementos requeridos no encontrados');
        return;
    }
    
    // Inicializar estado
    window.scrollTo(0, 0);
    isInSecondScreen = false;
    isTransitioning = false;
    
    // Asegurar que empezamos en la primera pantalla
    body.classList.remove('scroll-active');
    circulos.classList.remove('hidden');
    pantallaFinal.classList.remove('visible');
    
    console.log('Inicialización completada');
    
    // Opcional: Agregar indicador visual de navegación
    addNavigationHint();
});

// ==========================================
// Funciones opcionales de mejora UX
// ==========================================

// Agregar indicador visual de navegación (opcional)
function addNavigationHint() {
    // Crear indicador de scroll
    const scrollHint = document.createElement('div');
    scrollHint.className = 'scroll-hint';
    scrollHint.innerHTML = '↓';
    scrollHint.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        color: #D1CFC0;
        font-size: 2rem;
        opacity: 0.7;
        animation: bounce 2s infinite;
        z-index: 1000;
        pointer-events: none;
        transition: opacity 0.1s ease;
    `;
    
    // Agregar animación CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateX(-50%) translateY(0);
            }
            40% {
                transform: translateX(-50%) translateY(-10px);
            }
            60% {
                transform: translateX(-50%) translateY(-5px);
            }
        }
        
        .scroll-hint.hidden {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(scrollHint);
    
    // Ocultar indicador en segunda pantalla
    const observer = new MutationObserver(() => {
        if (isInSecondScreen) {
            scrollHint.classList.add('hidden');
        } else {
            scrollHint.classList.remove('hidden');
        }
    });
    
    // Observar cambios en el body
    observer.observe(body, { attributes: true, attributeFilter: ['class'] });
}

// Debug: Función para testing (remover en producción)
window.debugTransition = {
    goToSecond: goToSecondScreen,
    goToFirst: goToFirstScreen,
    getState: () => ({
        isInSecondScreen,
        isTransitioning
    })
};