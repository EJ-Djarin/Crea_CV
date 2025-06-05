document.getElementById('estilo-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const estiloSeleccionado = this.estilo.value;
  localStorage.setItem('cvEstilo', estiloSeleccionado);
  window.location.href = 'visualizar.html';
});