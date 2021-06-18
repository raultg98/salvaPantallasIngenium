const salvaPantallas = [];

fetch('/datos/salvaJSON.json')
.then(res => res.json())
.then(listaSalvaPantallas => {
    
    for(let i=0; i<listaSalvaPantallas.length; i++){
        salvaPantallas.push(listaSalvaPantallas[i].salvaPantallas);
    }
}).catch(e => { console.log(e); });

setTimeout(() => {
    const divPadre = document.getElementById('divPadre');
    const fragmento = document.createDocumentFragment();

    divPadre.setAttribute('class', 'd-flex justify-content-center flex-wrap');

    for(let i=0; i<salvaPantallas.length; i++){
        /**********     CREACION ELEMENTOS     **********/
        const divSalvaPantallas = document.createElement('div');
        const salva = document.createElement('img');
        const divHover = document.createElement('div');
        const icono = document.createElement('i');

        /**********     CLASES     **********/
        divSalvaPantallas.setAttribute('class', 'divSalvaPantallas m-2 ');
        salva.setAttribute('class', 'salva');
        divHover.setAttribute('class', 'divHover');
        icono.setAttribute('class', 'far fa-trash-alt text-white fs-1');

        /**********     VALORES     **********/
        salva.src = salvaPantallas[i];

        /**********     EVENTO     **********/
        divSalvaPantallas.addEventListener('mouseenter', () => {
            icono.addEventListener('click', () => {
                const formulario = document.getElementById('formulario');

                formulario.setAttribute('action', `/borrar/${i}`);

                formulario.submit();
            })
        });

        /**********     APPENDS     **********/
        divHover.appendChild(icono);

        divSalvaPantallas.appendChild(divHover);
        divSalvaPantallas.appendChild(salva);
        fragmento.appendChild(divSalvaPantallas);
    }

    divPadre.appendChild(fragmento);
}, 100 );