document.addEventListener("DOMContentLoaded", function() {
  const pestañas = document.querySelectorAll('.pestana');
  const contenidoPestanas = document.querySelectorAll('.pestanas');

  // Agregar evento de clic a cada botón
  pestañas.forEach((pestana) => {
    pestana.addEventListener('click', () => {
      const contenidoPestana = document.querySelector(`#${pestana.dataset.pestanas}`);

      // Eliminar clase activa de todos los botones y contenidos
      pestañas.forEach((p) => p.classList.remove('activa'));
      contenidoPestanas.forEach((c) => c.classList.remove('activa'));

      // Agregar clase activa al botón y contenido seleccionados
      pestana.classList.add('activa');
      contenidoPestana.classList.add('activa');
    });
  });

  // Activar la primera pestaña al cargar la página
  pestañas[0].classList.add('activa');
  contenidoPestanas[0].classList.add('activa');
});