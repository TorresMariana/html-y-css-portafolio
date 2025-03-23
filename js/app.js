// document.querySelector('link[rel="stylesheet"]').setAttribute('href', 'css/style2.css');

/*selecciona el primer elemento <link> que tiene el atributo rel igual a 
"stylesheet", y luego cambia el valor de su atributo href a "css/style2.css", 
lo que hace que se cargue un nuevo archivo de estilos.
*/

function menuHamburguesa(){
    document.getElementById('menu-hamburguesa').click();
    return;
}






document.addEventListener('DOMContentLoaded', function(){
    function cambiarArchivoCSS(estilo, event) {
        // Prevenir la acción por defecto de hacer clic en el enlace
        event.preventDefault();

        // Guardar la selección en localStorage
        localStorage.setItem('selectedStyle', estilo);
        // console.log(estilo);

        // Cambiar el archivo CSS actual por el nuevo.
        let link = document.getElementById('stylesheet__link');
        link.setAttribute('href', 'css/' + estilo);
    }
    window.cambiarArchivoCSS = cambiarArchivoCSS;

    // Al cargar la página, aplicar el estilo guardado en localStorage
    // Revisar si hay un estilo guardado en localStorage
    let estiloGuardado = localStorage.getItem('selectedStyle');
    console.log(estiloGuardado);
    if (estiloGuardado) {
        let link = document.getElementById('stylesheet__link');
        if (link) {
            // Cambiar el archivo CSS según lo guardado
            link.setAttribute('href', 'css/' + estiloGuardado);
        }
    }
});


