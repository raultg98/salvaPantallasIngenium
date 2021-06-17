const boton = document.getElementById('btnSubmit');
const contenedor = document.getElementById('contenedor-carga');
const cargaLetras = document.getElementById('carga-letras');

boton.addEventListener('click', () => {
    contenedor.style.visibility = '';
    contenedor.style.opacity = '0.9';
    cargaLetras.innerText = 'GUARDANDO SALVAPANTALLAS';
});

window.onload = function(){
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
    cargaLetras.innerText = '';
}