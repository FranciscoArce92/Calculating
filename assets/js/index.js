const calcular = () => {
    // Selectores
    let cantidad = document.querySelector("#cantidad"),
    precio = document.querySelector("#precio").innerHTML,    
    detalleTotal = document.querySelector("#total"),
    color = document.querySelector("#color"),
    detalleCantidad = document.querySelector("#detalle-cantidad"), 
    detalleColor = document.querySelector("#detalle-color");     
    
    precio = precio.replaceAll(".", "");
    let total = (Number(cantidad.value) * Number(precio));

    detalleTotal.innerHTML = separadorMiles(total, ".");
    detalleCantidad.innerHTML = cantidad.value;
    detalleColor.style.backgroundColor = color.value;
}

function separadorMiles(val,sep) {
    var sRegExp = new RegExp('(-?[0-9]+)([0-9]{3})'),
    sValue=val+'';

    if (sep === undefined) {sep='.';}
    while(sRegExp.test(sValue)) {
        sValue = sValue.replace(sRegExp, '$1'+sep+'$2');
    }
    return sValue;
}