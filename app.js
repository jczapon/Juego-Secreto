let numeroSecreto = 0;
let intentos = 0; // lo inicializamos en 1
let listaNumerosSorteados = []; // array inicializado en vacío
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto /*parametros*/){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
    console.log(numeroSecreto);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el Número correcto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}, felicidades!!!!!!!!`);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        // el ususario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor :( intenta nuevamente');
        } else{
            asignarTextoElemento('p','El número secreto es mayor :( intenta nuevamente');
        }
        intentos++;
       limpiarCaja();
    }
return;
}


function condicionesIniciales(){
    asignarTextoElemento('H1', 'Juego del Número secreto');
asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

function reiniciarJuego(){
    //impiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el numero aleatorio nuevamente
    //inicializar intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

function limpiarCaja() {
    document.querySelector('#ValorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros, pregunta, 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los Números posibles');
    } else {
    //si el numero generado esta incluido en la lista

    if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();

/*//ejercicios Resolucion Desafio 3
//1..Crea una función que calcule el índice de masa corporal (IMC) 
//de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(altura, pero){
    var imc = peso /(altura *altura);
    return imc;
}
 //2..Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function valorFactorial(numero){
    if(numero === 0 || numero === 1){
        return 1;
    }else{
        return numero * valorFactorial(numero - 1);
    }
}
//ejemplo de uso
let numero  = 5;
let resultado = valorFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

//3..Crea una función que convierta un valor en dólares, pasado como parámetro, y 
//devuelva el valor equivalente en reales. Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresAReales(dolares){
    var cotizacionDolar = 4.80;
    var reales = dolares * cotizacionDolar;
    return reales;
}
//Ejemplo de uso
let valorEnDolar = 50;
let ValorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares es R$ ${ValorEnReales}`);

//4..Crea una función que muestre en pantalla el área y el perímetro de una sala 
//rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaYPerimetroRectangular(altura, anchura){
    var area = altura * anchura;
    var perimetro = 2 * (altura+anchura);
    console.log("Área: " + area);
    console.log("Perimetro: " + perimetro);
}
//ejemplo de uso
let altura = 3;
let anchura = 5;
calcularAreaYPerimetroRectangular(anchura, altura);

//5//Crea una función que muestre en pantalla el área y el perímetro de una 
//sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaYPerimetroCircular(radio){
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Área;" + area);
    console.log("perimetro: " + perimetro);
}
//ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);

//6 Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function mostrarTablaDeMultiplicar(numero){
    for(var i = 1; i <= 10; i++){
        var resultado = numero * i;
        console.log(numero + " x " + i + " = "+ resultado);
    }
}
//ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);*/


/*
//1.Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo(){
    console.log('Hola Mundo');
return;
}
holaMundo();
//2.Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function mostrarNombre(){
    let nombre = prompt('Ingrese su nombre');
    console.log('¡Hola ' + nombre + '!')
return;
}
mostrarNombre();

//3.Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function duplicarNumero(numero){
    let numeroNuevo = parseInt(prompt('Ingresa un numero'));
    alert(numeroNuevo*2);
    return;
}
duplicarNumero();

//4.Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioNumeros(){
    let numeroUno = parseInt(prompt('Ingresa tu primer número'));
    console.log(numeroUno)
    let numeroDos = parseInt(prompt('Ingresa tu segundo número'));
    console.log(numeroDos)
    let numeroTres = parseInt(prompt('Ingresa tu tercer número'));
    console.log(numeroTres)
    let resultadoPromedio = (numeroDos + numeroDos + numeroTres) / 3;
    console.log(typeof(resultadoPromedio));
    alert(`El promedio de ${numeroUno}, ${numeroDos} y ${numeroTres} es ${resultadoPromedio}`);
    return;
}
promedioNumeros();

function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let promedio = calcularPromedio(4, 7, 10);
  console.log(promedio);

  //5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
  function dosNumeros(a, b){
    return a > b ? a : b;
  }

  let numeroMayor = dosNumeros(16, 6);
  console.log(numeroMayor);

  //6.Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.

  function multiplicacion2(numero){
    return numero*numero;
  }

  let multPorSiMismo = multiplicacion2(4);
  console.log(multPorSiMismo);*/
  /*
  //1.Crea una lista vacía llamada "listaGenerica".
  let listaGenerica = [];
  //2.crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
  let lenguajesDeProgramacion = ["JavaScript","c","C++","Kotlin","Python"];

  //3.Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
  lenguajesDeProgramacion.push("java");
  lenguajesDeProgramacion.push("Ruby");
  lenguajesDeProgramacion.push("GoLang");
  //lenguajesDeProgramacion.push('Java', 'rudy', 'GoLang');
  //4.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
  function mostrarlista(){
    console.log(lenguajesDeProgramacion);
  }
mostrarlista();

  //5.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

  //6.Crea una función que calcule el promedio de los elementos en una lista de números.
  //7.Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
  //8.Crea una función que devuelva la suma de todos los elementos en una lista.
  //9.Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
  //10.Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
  //11.Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

*/