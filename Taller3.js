//let triangulo =  l + l + l
//let area =  (b * h) / 2

//triangulo
document.getElementById("BtnPerimetro").addEventListener("click", CalcularPerimetro);
document.getElementById("BtnArea").addEventListener("click", CalcularArea)

//Circulo

document.getElementById("BtnPerimetroCirculo").addEventListener("click", CalcularPerimetroCirculo);
document.getElementById("BtnAreaCirculo").addEventListener("click", CalcularAreaCirculo)

//Cuadrado

document.getElementById("BtnPerimetroCuadrado").addEventListener("click", CalcularPerimetroCuadrado);
document.getElementById("BtnAreaCuadrado").addEventListener("click", CalcularAreaCuadrado);

//Rectangulo

document.getElementById("BtnPerimetroRectangulo").addEventListener("click", CalcularPerimetroRectangulo);
document.getElementById("BtnAreaRectangulo").addEventListener("click", CalcularAreaRectangulo);

//Prestamo

document.getElementById("BtnPrestamo").addEventListener("click", Prestamo);


// Calcular perimetro y area de un trinagulo
function CalcularPerimetro(){

    lado = parseInt(document.getElementById('valor_1').value);
    resultado = lado * lado * lado
    contenido = document.getElementById('contenido')
    contenido.innerHTML = 'Resultado: ' + resultado;
}

function CalcularArea(){
    base = parseInt(document.getElementById('valor_2').value)
    altura = parseInt(document.getElementById('valor_3').value)
    resultado = (base * altura) / 2 
    contenido = document.getElementById('contenido')
    contenido.innerHTML = 'Resultado: ' + resultado;

}

// Calcular Perimetro y area de un circulo

function CalcularPerimetroCirculo(){
        diametro = parseInt(document.getElementById('valor_4').value);
        resultado = diametro * Math.PI
        contenido = document.getElementById('contenido1')
        contenido.innerHTML = 'Resultado: ' + resultado;

}

function CalcularAreaCirculo(){
        x = parseInt(document.getElementById('valor_5').value);
        resultado = Math.PI * Math.pow(x, 2)
        contenido = document.getElementById('contenido1')
        contenido.innerHTML = 'Resultado: ' + resultado;

}

// Calcular el perimetro de un cuadrado

function CalcularPerimetroCuadrado(){
    perimetro = parseInt(document.getElementById('valor_6').value);
    resultado = 4 *  perimetro
    contenido = document.getElementById('contenido2')
    contenido.innerHTML = 'Resultado: ' + resultado;

}

function CalcularAreaCuadrado(){
    x = parseInt(document.getElementById('valor_7').value);
    resultado =  Math.pow(x, 2)
    contenido = document.getElementById('contenido2')
    contenido.innerHTML = 'Resultado: ' + resultado;

}

// Calcular el perimetro de un Rectangulo

function CalcularPerimetroRectangulo(){
    a = parseInt(document.getElementById('valor_8').value);
    b = parseInt(document.getElementById('valor_9').value);
    resultado = (2 * a) + (2 * b)
    contenido = document.getElementById('contenido3')
    contenido.innerHTML = 'Resultado: ' + resultado;

}

function CalcularAreaRectangulo(){
    a = parseInt(document.getElementById('valor_10').value);
    b = parseInt(document.getElementById('valor_11').value);
    resultado = b * a
    contenido = document.getElementById('contenido3')
    contenido.innerHTML = 'Resultado: ' + resultado;

}

function Prestamo(){
    valor_prestamo = parseInt(document.getElementById('valor_12').value);
    valor_tasa_interes = parseInt(document.getElementById('valor_13').value);
    tiempo = parseInt(document.getElementById('valor_14').value);
    x =  (1 + Math.pow(valor_tasa_interes, tiempo) - 1)
    resultado = (valor_prestamo * x)

   
   // while (valor_prestamo) {
    /**    console.log('imprimir el valor de prestamo: ' + valor_prestamo)
    resultado = ((valor_prestamo) * (1 + Math.pow(valor_tasa_interes, tiempo) - 1))
    tiempo = tiempo + 1

 */    // if (valor_prestamo < 0) {
    //   
      //  break
    //}
  //  value = window.prompt('insert de control: ')
    // console.log(value)

    contenido = document.getElementById('contenido4')
    contenido.innerHTML = 'Resultado_tasa_interes: ' + resultado + ' Resultado de tiempo: ' + tiempo;
//}
}

// Ejercicio de prestamo

/*
let mes = 0
let prestamo = 10000000
let interes  = 0.015
let abono = 500000
let deuda = (prestamo * interes ) + prestamo - abono 

console.log(deuda)


while (prestamo) {
    console.log('imprimir el valor de prestamo: ' + prestamo)

    deuda = (prestamo * interes ) + prestamo - abono 
    prestamo = deuda 
    mes = mes + 1

    if (prestamo < 0) {
       
        break
    }
    value = window.prompt('insert de control: ')
    // console.log(value)
}
console.log('ya sali del ciclo while')
console.log("Terminas en el mes :" + mes)
*/
