let usuario = sessionStorage.getItem('usuario')

if(usuario){
    document.getElementById('text_login').textContent=usuario;
}

