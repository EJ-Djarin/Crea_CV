document.getElementById('datos-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const datos = {
    nombre: this.nombre.value,
    correo: this.correo.value,
    telefono: this.telefono.value,
    grado: this.grado.value,
    institucion: this.institucion.value,
    equipo: this.equipo.value,
    resolucion: this.resolucion.value
  };

  localStorage.setItem('cvDatos', JSON.stringify(datos));
  window.location.href = 'crear.html';
});