document.addEventListener('DOMContentLoaded', () => {
  const circulo = document.querySelector('.circulo-central');
  const minSize = 200; // px
//   const maxSize = 5000; // px
  function getMaxSize() {
    return Math.max(window.innerWidth, window.innerHeight) * 1.2; // 1.2 para cubrir bordes
  }

    function actualizarCirculo() {
        const maxSize = getMaxSize();
        const maxScroll = window.innerHeight; // Ajusta el rango de scroll
        const scroll = Math.max(0, Math.min(window.scrollY, maxScroll));
        const progreso = scroll / maxScroll;
        const size = minSize + (maxSize - minSize) * progreso;
        circulo.style.width = size + 'px';
        circulo.style.height = size + 'px';
    }

  window.addEventListener('scroll', actualizarCirculo);
  window.addEventListener('resize', actualizarCirculo);
  actualizarCirculo();
});