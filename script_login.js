let ingresado = false;

document.getElementById('btn_enviar').addEventListener('click', function() {
  let valorInput = document.getElementById('input_email').value;
  ingresado=true;
  sessionStorage.setItem('usuario', valorInput);
});

