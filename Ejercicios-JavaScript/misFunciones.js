/**
 * Convierte unidades ingresadas por el usuario
 * @method convertirUnidades
 * @param {string} unidad -Unidad ingresada: metro, pie, pulgada, yarda. 
 * @param {number} valor - Valor numerico ingresado por el usuario.
 */

let cambiarUnidades = (id,valor) => {
    let metro, pulgada,yarda, pie;
    
    if(valor.includes(",")){
        valor = valor.replace(",",".");
    }

    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
        metro =" ";
        pulgada = " ";
        pie = " ";
        yarda = " ";
    }else if(id=="metro"){
        metro = valor;
        pulgada = 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09316*valor;
    }else if(id=="pulgada"){
        pulgada = valor;
        metro = 0.0254*valor;
        pie = 0.083333*valor;
        yarda = 0.0277778*valor;
    }else if(id=="pie"){
        pie = valor;
        pulgada = 12*valor;
        metro = 0.3048*valor;
        yarda = 0.33333*valor;
    }else if(id=="yarda"){
        yarda = valor;
        pulgada = 36*valor;
        pie = 3*valor;
        metro = 0.9144*valor;
    }

        document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
        document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
        document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
        document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
};

/**
 * Convierte grados a radianes y viceversa
 * @method convertirGR
 * @param {string} id - Grados o radianes
 * @param {number} valor - Valor numerico ingresado por el usuario.
 */

let convertirGR = (id, valor) => {
    let cantGrados, cantRadienes;
    if(id=="grados"){
        cantGrados = valor;
        cantRadienes = cantGrados*Math.PI/180;
        document.getElementById("radianes").value = cantRadienes;
    }else{
        cantRadienes = valor;
        cantGrados = cantRadienes*180/Math.PI;
        document.getElementById("grados").value = cantGrados;
    }
};


let mostrarOcultarDiv = (id)=>{
//    if(id=="mostrarDiv"){
//        document.getElementsByName("unDiv")[0].style.display = "block";
//    }else{
//        document.getElementsByName("unDiv")[0].style.display = "none";
//    }

    const mostrar = id == "mostrarDiv" ? "block" : "none";
    document.getElementsByName("unDiv")[0].style.display = mostrar;
};

let sumar = () => {
  let sum1 = document.getElementById("nums1").value;
  let sum2 = document.getElementById("nums2").value;

  document.getElementById("totals").innerHTML = Number(sum1) + Number(sum2);
    if(isNaN(sum1) || isNaN(sum2)){
        alert("Valor invalido");
    }
};

let restar = () => {
    let rest1 = document.getElementById("numr1").value;
    let rest2 = document.getElementById("numr2").value;

    document.getElementById("totalR").innerHTML = Number(rest1) - Number(rest2);
    if(isNaN(rest1) || isNaN(rest2)){
        alert("Valor invalido");
    }
}

let multi = () => {
    let mult1 = document.getElementById("numm1").value;
    let mult2 = document.getElementById("numm2").value;

    document.getElementById("totalM").innerHTML = Number(mult1) * Number(mult2);
    if(isNaN(mult1) || isNaN(mult2)){
        alert("Valor invalido");
    }
}

let div = () => {
    let div1 = document.getElementById("numd1").value;
    let div2 = document.getElementById("numd2").value;

    document.getElementById("totalD").innerHTML = Number(div1) / Number(div2);
    if(isNaN(div1) || isNaN(div2)){
        alert("Valor invalido");
    }
    if(Number(div2)==0){
        alert("No se puede dividir por cero");
    }
}