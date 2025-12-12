/**
 * Ejercicio 1 la cosecha parrilla
 */


function ejercicio1() {
    let personas = parseInt(document.querySelector("#e1 #nump").value);
    let respuesta = document.querySelector("#e1 #respuesta");

    if (isNaN(personas) || personas <= 0) {
        respuesta.textContent = "¡Ingrese un número válido!";
        return;
    }

    let costo = 0;

    if (personas <= 200) {
        costo = personas * 25000;
    } else if (personas <= 300) {
        costo = personas * 18500;
    } else {
        costo = personas * 16000;
    }

    respuesta.textContent = "$ " + costo;
}


/**
 * Ejercicio 2  Arturo calle 
 */


function ejercicio2() {
    let precio = parseInt(document.querySelector("#e2 #nump").value);
    let respuesta = document.querySelector("#e2 #respuesta");

    if (isNaN(precio) || precio <= 0) {
        respuesta.textContent = "¡Ingrese un precio válido!";
        return;
    }

    let porcentaje = precio > 125000 ? 0.35 : 0.10;
    let descuento = precio * porcentaje;
    let total = precio - descuento;

    respuesta.innerHTML =
        "Descuento: $ " + descuento + "<br>" +
        "Porcentaje: " + porcentaje + " %" + "<br>" +
        "Total a pagar: $ " + total;
}
/**
 * Ejercicio 3 IN-N-OUT BURGUER
 */
function ejercicio3() {

    let cantidad = parseInt(document.querySelector("#e3 #nump").value);

    // Obtener tipo de hamburguesa
    let tipoHamburguesa = document.querySelector("#e3 #tipoHamb").value;

    // Obtener tipo de pago
    let tipoPago = document.querySelector("#e3 #tipoPago").value;

    let respuesta = document.querySelector("#e3 #respuesta");

    // VALIDACIÓN
    if (isNaN(cantidad) || cantidad <= 0) {
        respuesta.textContent = "¡Ingrese una cantidad válida!";
        return;
    }

    // PRECIOS
    let precioUnit = 0;

    if (tipoHamburguesa === "sencilla") {
        precioUnit = 20000;
    } else if (tipoHamburguesa === "doble") {
        precioUnit = 25000;
    } else if (tipoHamburguesa === "triple") {
        precioUnit = 28000;
    }

    // CALCULOS
    let totalSinCargo = precioUnit * cantidad;

    let cargo = 0;
    if (tipoPago === "tarjeta") {
        cargo = totalSinCargo * 0.07; // 7%
    }

    let totalPagar = totalSinCargo + cargo;

    // RESPUESTA
    respuesta.innerHTML =
        "Precio Unit.: $ " + precioUnit + "<br>" +
        "Cantidad: " + cantidad + "<br>" +
        "Tipo de pago: " + tipoPago + "<br>" +
        "Total sin cargo: $ " + totalSinCargo + "<br>" +
        "El cargo es: $ " + cargo + "<br>" +
        "Total a pagar es: $ " + totalPagar;
}

/**
 * Ejercicio 4 
 */
function ejercicio4() {
    let peso = parseFloat(document.getElementById("peso4").value);
    let zona = parseInt(document.getElementById("zona4").value);
    let res = document.getElementById("respuesta4");

    // Tabla de costos por zona
    let costos = {
        1: 210,
        2: 180,
        3: 220,
        4: 340,
        5: 370
    };

    // Validar peso
    if (peso > 85) {
        res.textContent = `El paquete con peso de ${peso} kg excede el peso permitido`;
        return;
    }

    // Validar zona
    if (!costos[zona]) {
        res.textContent = "¡Zona no válida!";
        return;
    }

    // Convertir kg a gramos
    let gramos = peso * 1000;

    // Calcular total
    let total = gramos * costos[zona];

    res.textContent = `Valor: $ ${total}`;
}
/**
 * Ejercicio 5 Asociacion de panaderos "Fedepanela"
 */
function ejercicio5() {
    let tipo = document.getElementById("tipoPanela5").value;
    let tam = document.getElementById("tamano5").value;
    let precio = parseFloat(document.getElementById("precio5").value);
    let kilos = parseFloat(document.getElementById("kilos5").value);
    let res = document.getElementById("respuesta5");

    if (precio <= 0 || kilos <= 0) {
        res.textContent = "¡Ingrese valores válidos!";
        return;
    }

    let precioFinal = precio;

    if (tipo === "P1") {
        if (tam === "1") {
            precioFinal += 1200;
        } else {
            precioFinal += 830;
        }
    } else if (tipo === "P2") {
        if (tam === "1") {
            precioFinal -= 540;
        } else {
            precioFinal -= 350;
        }
    }

    let ganancia = precioFinal * kilos;

    res.textContent = `La ganancia es: $ ${ganancia}`;
}
/**
 * Ejercicio 6 Audifonos
 */
function ejercicio6() {
    let cantidad = parseInt(document.getElementById("cantidad6").value);
    let res = document.getElementById("respuesta6");

    if (cantidad <= 0) {
        res.textContent = "¡Ingrese una cantidad válida!";
        return;
    }

    let precioUnitario;

    if (cantidad >= 1000) {
        precioUnitario = 49850;
    } else {
        precioUnitario = 71290;
    }

    let total = cantidad * precioUnitario;

    res.textContent = `Total a pagar es: $ ${total}`;
}
/**
 * Ejercicio 7 horas trabajadas 
 */
function ejercicio7() {
    let horas = parseFloat(document.getElementById("horas7").value);
    let tarifa = parseFloat(document.getElementById("tarifa7").value);
    let res = document.getElementById("respuesta7");

    if (horas <= 0 || tarifa <= 0) {
        res.textContent = "¡Ingrese valores válidos!";
        return;
    }

    let salario;

    if (horas > 40) {
        let horasExtras = horas - 40;
        let pagoNormal = 40 * tarifa;
        let pagoExtra = horasExtras * (tarifa * 1.5);
        salario = pagoNormal + pagoExtra;
    } else {
        salario = horas * tarifa;
    }

    res.textContent = `Salario del trabajador es: $ ${salario}`;
}
/**
 * Ejercicio 8
 */
function ejercicio8() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    let resultado;

    if (num1 > num2 && num1 > num3) {
        resultado = num1;
    } else if (num2 > num1 && num2 > num3) {
        resultado = num2;
    } else {
        resultado = num3;
    }

    document.getElementById("resultado").innerHTML =
        "El número mayor es: " + resultado;
}
/**
 * Ejercicio 9
 */

function ejercicio9(){
    let diametro = document.getElementById("diam").value;      
    let grosor = document.getElementById("gsr").value;

    let mensaje = "";

    if (diametro > 1.4){
        mensaje += ("La rueda es para un vehiculo grande");        
    } else if (diametro <= 1.4 && diametro > 0.8){
        mensaje += ("La rueda es para un vehiculo mediano");
    } else {
        mensaje += ("La rueda es para un vehiculo pequeño");       
    }

    if ((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {
        mensaje += ("El grosor para esta rueda es inferior al recomendado");
    }

    document.getElementById("respuesta").innerHTML = mensaje;
}
/**
 * ejercicio 10
 */

function ejercicio10(){
    let num4 = parseInt(document.getElementById("num4").value);
  
    if (num4 % 2 === 0) {
        resultado = "El número " + num4 + " es PAR.";
    } else {
        resultado = "El número " + num4 + " es IMPAR.";
    }

    document.getElementById("respuesta2").innerHTML = resultado;
}
/**
 * ejercicio 11
 */

function ejercicio11(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let mensaje2 = "";

    let IMC = peso / (altura * altura);

        if (IMC < 16) {
            mensaje2 = "Criterio de ingreso en hospital";
        } else if (IMC >= 16 && IMC < 17) {
            mensaje2 = "Infrapeso";
        } else if (IMC >= 17 && IMC < 18) {
            mensaje2 = "Bajo peso";
        } else if (IMC >= 18 && IMC < 25) {
            mensaje2 = "Peso normal";
        } else if (IMC >= 25 && IMC < 30) {
            mensaje2 = "Sobrepeso (Obesidad de grado I)";
        } else if (IMC >= 30 && IMC < 35) {
            mensaje2 = "Sobrepeso crónico (Obesidad de grado II)";
        } else if (IMC >= 35 && IMC < 40) {
            mensaje2 = "Sobrepeso crónico (Obesidad de grado III)";
        } else {
            mensaje2 = "Obesidad mórbida (Obesidad de grado IV)";
        }

        document.getElementById("respuesta3").innerHTML = mensaje2;
    }    
    /**
     * ejercicio 12
     */

    function ejercicio12(){
        let temperatura = parseFloat(document.getElementById("temperatura").value);

        let mensaje3 = "";

        if (temperatura < 0) {
            mensaje3 = "Clima helado";
        } else if (temperatura >= 0 && temperatura < 10) {
            mensaje3 = "Clima muy frío";
        } else if (temperatura >= 10 && temperatura < 20) {
            mensaje3 = "Clima frío";
        } else if (temperatura >= 20 && temperatura < 30) {
            mensaje3 = "Normal";
        } else if (temperatura >= 30 && temperatura < 40) {
            mensaje3 = "Hace calor";
        } else {
            mensaje3 = "Hace mucho calor";
        }

        document.getElementById("respuesta4").innerHTML = mensaje3;
    }
    /**
     * ejercicio 13 
     */

    function ejercicio13(){
        let lado1 = parseFloat(document.getElementById("lado1").value);
        let lado2 = parseFloat(document.getElementById("lado2").value);
        let lado3 = parseFloat(document.getElementById("lado3").value);
        
        let mensaje4 = "";
        
        let iguales = 0;


        if (lado1 === lado2) iguales++;
        if (lado1 === lado3) iguales++;
        if (lado2 === lado3) iguales++;


        if (iguales === 3) {
            mensaje4 = "Es un triangulo equilátero";
        } else if (iguales === 1) {
            mensaje4 = "Es un triángulo isósceles";
        } else {
            mensaje4 = "Es un triangulo escaleno";
        }

        document.getElementById("respuesta5").innerHTML = mensaje4;
    }
    

/**
 * Ejercicio 14
 */

function ejercicio14() {
    let nivel = parseInt(document.getElementById("nivel14").value);
    let respuesta = document.getElementById("respuesta14");
    let mensaje = "";

    switch (nivel) {
        case 1:
            mensaje = "Riesgo biológico";
            break;
        case 2:
            mensaje = "Riesgo químico";
            break;
        case 3:
            mensaje = "Riesgo físico";
            break;
        case 4:
            mensaje = "Riesgo ergonómico";
            break;
        case 5:
            mensaje = "Riesgo psicosocial";
            break;
        default:
            mensaje = "Nivel de riesgo no válido.";
    }

    respuesta.textContent = mensaje;
}
