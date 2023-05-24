const botonCalcularImporte = document.querySelector('#importeTotal')
botonCalcularImporte.onclick = function (){
    const cantidadEntradas = Number(document.querySelector('#cantidadEntradas').value);
    const tipoDeDescuento = document.querySelector('#inputDescuento').value;
    
    const precioEntrada = 200;
    const descuentoEstudiante = 0.20;
    const descuentoTraineee = 0.50;
    const descuentoJunior = 0.85;
    var descuentoFinal;

    switch (tipoDeDescuento) {
        case "Estudiante" :
            descuentoFinal = (cantidadEntradas * precioEntrada) * descuentoEstudiante;

            break;
        case "Trainee" :
                descuentoFinal =(cantidadEntradas * precioEntrada) * descuentoTraineee;
    
            break;
        case "Junior" :
                descuentoFinal = (cantidadEntradas * precioEntrada) * descuentoJunior;
        
            break;
    
        default:
            break;
    }
    document.querySelector('#final').value = "Total a Pagar:$" + descuentoFinal;

}

