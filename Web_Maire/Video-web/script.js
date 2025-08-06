document.addEventListener('DOMContentLoaded', () => {
  const frameImage = document.getElementById('current-frame');
  const progressBar = document.querySelector('.progress-bar');
  
  // Configuración de frames
  const totalFrames = 82; // Ajusta según el número de frames que tengas
  const frameBasePath = 'Maire-intro-frames/ezgif-frame-';
  const frameExtension = '.jpg';
  
  // Variable para controlar si la animación está habilitada
  let animationEnabled = false;
  
  // Precargar frames para mejor rendimiento
  const frameImages = [];
  let framesLoaded = 0;
  
  function preloadFrames() {
    console.log('Iniciando precarga de frames...');
    
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `${frameBasePath}${frameNumber}${frameExtension}`;
      
      img.onload = () => {
        framesLoaded++;
        frameImages[i] = img.src;
        console.log(`Frame ${frameNumber} cargado. Total: ${framesLoaded}/${totalFrames}`);
        
        // Cuando se carguen todos los frames, habilitar la animación
        if (framesLoaded === totalFrames) {
          console.log('Todos los frames cargados. Habilitando animación...');
          enableScrollAnimation();
        }
      };
      
      img.onerror = () => {
        console.warn(`Frame ${frameNumber} no se pudo cargar: ${img.src}`);
        framesLoaded++;
        if (framesLoaded === totalFrames) {
          console.log('Precarga completada (algunos frames fallaron). Habilitando animación...');
          enableScrollAnimation();
        }
      };
    }
  }
  
  function enableScrollAnimation() {
    animationEnabled = true;
    console.log('Animación habilitada');
    updateFrame(); // Llamada inicial
  }
  
  function updateFrame() {
    if (!animationEnabled) return;
    
    // Calcular el progreso del scroll
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = Math.min(scrollTop / documentHeight, 1);
    
    // Calcular qué frame mostrar
    const currentFrameIndex = Math.floor(scrollProgress * (totalFrames - 1)) + 1;
    const clampedFrameIndex = Math.max(1, Math.min(currentFrameIndex, totalFrames));
    
    // Actualizar la imagen del frame
    const frameNumber = clampedFrameIndex.toString().padStart(3, '0');
    const newFrameSrc = `${frameBasePath}${frameNumber}${frameExtension}`;
    
    console.log(`Scroll: ${scrollProgress.toFixed(2)}, Frame: ${clampedFrameIndex}, Src: ${newFrameSrc}`);
    
    // Cambiar la imagen
    frameImage.src = newFrameSrc;
    
    // Actualizar barra de progreso
    progressBar.style.width = `${scrollProgress * 100}%`;
  }
  
  // Optimización para dispositivos móviles
  let ticking = false;
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateFrame();
        ticking = false;
      });
      ticking = true;
    }
  }
  
  // Event listener de scroll optimizado
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', updateFrame);
  
  // Inicializar
  preloadFrames();
  
  // Función de debug para verificar frames manualmente
  window.debugFrames = function() {
    console.log('Frames cargados:', framesLoaded);
    console.log('Animación habilitada:', animationEnabled);
    console.log('Total frames:', totalFrames);
    
    // Probar cargar el primer frame manualmente
    const testImg = new Image();
    testImg.src = `${frameBasePath}001${frameExtension}`;
    testImg.onload = () => console.log('✅ Primer frame se puede cargar');
    testImg.onerror = () => console.log('❌ No se puede cargar el primer frame:', testImg.src);
  };
  
  // Ejecutar debug automáticamente
  setTimeout(() => {
    window.debugFrames();
  }, 1000);
});