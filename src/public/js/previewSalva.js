const inputSalva = document.getElementById('inputSalva');
const preview = document.getElementById('previewSalva');
const btnSubmit = document.getElementById('btnSubmit');

// DESABILITO EL BOTON DE ENVIAR.
btnSubmit.disabled = true;

inputSalva.addEventListener('change', (e) => {
    const cantidadSalvaPantallas = e.target.files.length;
    let archivoNoValido = false;

    // COMPRUEBO SI DONDE VISUALIZO EL SALVAPANTALLAS YA ESTA MOSTRANDO UNO.
    if(preview.hasChildNodes){
        // QUIERO ELIMINAR TODOS LOS SALVAPANTALLAS QUE ESTOY MOSTRANDO.
        let numChilds = preview.childNodes.length;

        for(let i=0; i<numChilds; i++){
            preview.removeChild(preview.lastChild);
        }
    }

    // AÑADIR VALIDACION VARIAS IMAGENES.

    for(let i=0; i<cantidadSalvaPantallas; i++){
        const extensionArchivo = e.target.files[i].name.split('.')[1];
        const expReg = /png|jpeg|jpg/;

        // COMPRUEBO LA EXTENSION POR SI NO ES VALIDA LANZAR UN MENSAJE
        if(!expReg.test(extensionArchivo)){
            archivoNoValido = true;
            crearMensajeDeError(`LA EXTENSION ${extensionArchivo} NO ES VALIDA. INTRODUCE UNA VALIDA: png, jpeg, jpg`);
        }else {

            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[i]);

            reader.onload = () => {
                const img = document.createElement('img');

                img.style.width = '200px';
                img.style.height = '200px';
                img.setAttribute('class', 'mb-2');

                img.src = reader.result;
                
                preview.appendChild(img);
            }
        }
    }

    if(archivoNoValido){
        btnSubmit.disabled = true;
    }else {
        btnSubmit.disabled = false;
    }

});

function crearMensajeDeError(msg){
    const divMensajeError = document.getElementById('mensajeError');
    
    const divAlert = document.createElement('div');
    const spanMensaje = document.createElement('span');
    const botonCerrar = document.createElement('button');

    divAlert.setAttribute('class', 'alert alert-danger alert-dismissible fade show');
    divAlert.setAttribute('role', 'alert');

    botonCerrar.setAttribute('class', 'btn-close');
    botonCerrar.setAttribute('type', 'button');
    botonCerrar.setAttribute('data-bs-dismiss', 'alert');
    botonCerrar.setAttribute('aria-label', 'Close');

    spanMensaje.innerText = msg;

    divAlert.appendChild(spanMensaje);
    divAlert.appendChild(botonCerrar);

    divMensajeError.appendChild(divAlert);

    // DESPUES DE 10S QUIERO QUE SE ME CIERRE EL ALERT
    setTimeout(() => {
        divMensajeError.removeChild(divMensajeError.lastChild);
    }, 10000);
}
