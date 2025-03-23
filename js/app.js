// document.querySelector('link[rel="stylesheet"]').setAttribute('href', 'css/style2.css');

/*selecciona el primer elemento <link> que tiene el atributo rel igual a 
"stylesheet", y luego cambia el valor de su atributo href a "css/style2.css", 
lo que hace que se cargue un nuevo archivo de estilos.
*/

function menuHamburguesa(){
    document.getElementById('menu-hamburguesa').click();
    return;
}



// function cambiarArchivoCSS(estilo){
//     let estiloSeleccionado = document.getElementById(estilo);
//     console.log(estiloSeleccionado);


//     if(estiloSeleccionado == 'footer__enlace__link2'){
//         document.querySelector('link[rel="stylesheet"]').setAttribute('href', 'css/style2.css');
//     }
//     else if(estiloSeleccionado == 'footer__enlace__link3'){
//         document.querySelector('link[rel="stylesheet"]').setAttribute('href', 'css/style3.css');
//     }
//     else if(estiloSeleccionado == 'footer__enlace__link4'){
//         document.querySelector('link[rel="stylesheet"]').setAttribute('href', 'css/style4.css');
//     }
//     else{
//         document.querySelector('link[rel="stylesheet"]').setAttribute('href', 'css/style.css');
        
//     }

// }



function cambiarArchivoCSS(estilo, event) {
    // Prevenir la acción por defecto de hacer clic en el enlace
    event.preventDefault();

    // Cambiar el archivo CSS actual por el nuevo.
    let link = document.getElementById('stylesheet__link');
    link.setAttribute('href', 'css/' + estilo);
}

