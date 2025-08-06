document.addEventListener('DOMContentLoaded', () => {
  const circulos = document.querySelectorAll('.circulo');
  const pantallaInicial = document.querySelector('.pantalla-inicial');
  const pantallaFinal = document.querySelector('.pantalla-final');
  let animado = false;

  window.addEventListener('scroll', () => {
    // El punto donde la animación termina (ajusta el 0.5 para más/menos scroll)
    const maxScroll = window.innerHeight * 0.5;
    const scroll = Math.min(window.scrollY, maxScroll);
    const progreso = scroll / maxScroll;
    const escala = 1 + progreso * 11;

    circulos.forEach(c => {
      c.style.transform = `scale(${escala})`;
      c.style.opacity = `${1 - progreso}`;
    });

    if (progreso >= 1 && !animado) {
      animado = true;
      document.body.classList.add('fondo-circulo');
      pantallaInicial.style.display = 'none';
      pantallaFinal.classList.add('visible');
      // Opcional: bloquea el scroll cuando termina la animación
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    }
  });

  pantallaFinal.addEventListener('click', () => {
    pantallaFinal.classList.remove('visible');
    pantallaInicial.style.display = 'flex';
    document.body.classList.remove('fondo-circulo');
    circulos.forEach(c => {
      c.style.transform = '';
      c.style.opacity = '';
    });
    animado = false;
    document.body.style.overflow = '';
    window.scrollTo(0, 0);
  });
});