document.addEventListener('DOMContentLoaded', () => {
  const datos = JSON.parse(localStorage.getItem('cvDatos')) || {};
  const estilo = localStorage.getItem('cvEstilo') || 'clasico';
  const contenedor = document.getElementById('cv-preview');

  if (!datos.nombre) {
    contenedor.innerHTML = '<p>No hay datos cargados.</p>';
    return;
  }

  contenedor.innerHTML = `
    <div class="cv ${estilo}">
      <h2>${datos.nombre}</h2>
      <p><strong>Correo:</strong> ${datos.correo}</p>
      <p><strong>Teléfono:</strong> ${datos.telefono}</p>

      <h3>Educación</h3>
      <p>${datos.grado} - ${datos.institucion}</p>

      <h3>Habilidades Blandas</h3>
      <ul>
        <li>Trabajo en equipo: ${datos.equipo}</li>
        <li>Resolución de problemas: ${datos.resolucion}</li>
      </ul>
    </div>
  `;

  document.getElementById('descargar').addEventListener('click', () => {
    import('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js')
      .then(() => {
        const elemento = document.getElementById('cv-preview');
        html2pdf().from(elemento).save('curriculum.pdf');
      });
  });
});
