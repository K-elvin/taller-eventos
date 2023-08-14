document.getElementById('miDiv').addEventListener('click', function() {
    alert('Hola! Soy el div');
  });
  window.onload = function() {
    alert('Hola!');
};
function saludar(event) {
  alert("¡Hola! Has hecho clic en el botón.");
  event.stopPropagation(); // Detiene la propagación del evento
}