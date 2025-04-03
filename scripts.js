/* tipo de datos */
// let lista=["lunes","martes","miércoles","jueves","viernes","sábado","domingo"];

// let mapeo=lista.map(e=>`${e} es un día de la semana`);
// console.log(mapeo);



// let numeros=[11,12,31,43,25];
// let a=numeros.filter(num => num>20);
// console.log(a);

// const productos = [
//     {
//         producto: "hamburgesa",
//         precio: 100
//     },
//     {
//         producto: "chuleta",
//         precio: 50
//     },
//     {
//         producto: "pizza",
//         precio: 200
//     },
//     {
//         producto: "papas fritas",
//         precio: 100
//     }
// ]
// const mostrarMenu = () => {
//     return productos.map(producto => `${producto.producto} $${producto.precio}`)
// }

// console.log(mostrarMenu());

// let mensaje =prompt("cual es tu nombre?",20);

// alert(`hola ${mensaje}`);

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }

//   let arr = [ 1, 2, 15 ];

//   arr.sort(compareNumeric);

//   alert(arr);




// console.log("hola");
// let numero="";
//   for (let i = 0; i <7; i++) {
//     numero=numero+"#";
//     console.log(numero);
//   }


// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i +" fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log(i +" fizz");
//   } else if (i % 5 === 0) {
//     console.log(i +" buzz");
//   }
//   //  console.log(i);
// }

// let tablero=" # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n";
// // console.log(tablero);


// let tablero2="";
// let filaA=" # # # #\n";
// let filaB="# # # # \n";
// let dimension=10;
// let ultimoCaracter=" ";

// for (let i = 0; i < dimension; i++) {
//   for (let j = 0; j < dimension; j++) {
//     if(ultimoCaracter===" "){
//       tablero2=tablero2+"#";
//       ultimoCaracter="#";
//     }else{
//       tablero2=tablero2+" ";
//       ultimoCaracter=" ";
//     }  
//   }
//   tablero2=tablero2+"\n";
//   if(ultimoCaracter===" "){
//     ultimoCaracter="#";
//   }else{
//     ultimoCaracter=" ";  
//   }
// }
// console.log(tablero2);

/* minimo */

// const minimo = (a, b) => {
//     if (a < b) return a;
//     if (a > b) return b;
//     return a;
//   };  

//   const minimo2 = (a, b) => Math.min(a, b);

//   console.log(minimo(10, 2));
//   console.log(minimo2(10, 20));


/* recursion */
// function esPar(n) {

//   let num = Math.abs(n);
//   if (num === 0) {
//     return true;
//   } else if (num === 1) {
//     return false;
//   }else {
//     return esPar(num - 2);
//   }
// }

// console.log(esPar(-34));

/* contando frijoles */

// function convertirCadenaAArray(cadena){
//     return cadena.split("");
//   }

//   const contarFrijoles = (cadena, caracter) => {  
//     let array = convertirCadenaAArray(cadena);
//     let contador = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === caracter) {
//         contador++;
//       }
//     }
//     return contador;
//   }

//   console.log(contarFrijoles("almohada", "o"));


// console.log([1,2,3,4,5].indexOf(5));
// console.log([1,2,3,4,5].lastIndexOf(2));

// consoloe.log(max[1,2,3,4,5]);


// function circulo(radio){
//   let angulo=Math.random()*Math.PI*2;
//   return {x:radio*Math.cos(angulo),y:radio*Math.sin(angulo)}  
// }

// console.log(circulo(10));

// console.log(Math.floor(Math.random()));
// console.log(Math.ceil(Math.random()));
// console.log(Math.round(3.44531315*100)/100);
// console.log(Math.ceil(3.44531315*100)/100);
// console.log(Math.floor(3.44531315*100)/100);



// function range(inicio, fin, step = 1) {
//   let array = [];
//   let resp = inicio
//   // console.log(resp);
//   if (step < 0) {
//     resp = fin;
//     while (resp >= inicio) {
//       array.push(resp);
//       resp -= Math.abs(step);
//       // console.log(resp);
//     }
//     return array;
//   } else {
//     while (resp <= fin) {
//       array.push(resp);
//       resp += step;
//       // console.log(resp);
//     }
//   }

//   // for (let i = inicio; i <= fin; i++) {
//   //   array.push(i);
//   // }
//   return array;
// }

// function sum(lista) {
//   let total = 0;
//   for (let i = 0; i < lista.length; i++) {
//     total = total + lista[i];
    
//   }

//   return total;

// }
// console.log(range(2, 5, -1));
// console.log(sum(range(1, 10, -2)));

/* ejercicio 1 */

// function isPar(numero) {
  
//   if (!numero) {
//     return "tiene que ser numero"
//   }

//   if (numero>0) {
//     return "positivo"
//   }else{
//    return "negativo" 
//   }
// }

// console.log(isPar(2));

/* ejercicio 2 */
/* Verificar si un año es bisiesto
Un año es bisiesto si es divisible por 4, pero no por 100, 
a menos que también sea divisible por 400. Escribe un programa que
 determine si un año es bisiesto */

//  function VerificarAño(año) {
//   if ((año%4===0 && año%100!==0)||(año%400===0)) {
//     return "año bisiesto"
//   } else {
//     return "año normal"
//   }
//  }

//  console.log(VerificarAño(1984));

/* ejercicio 3 */
/* Una tienda ofrece un 10% de descuento si el monto de compra es mayor a $100. 
Escribe un programa que calcule el total a pagar después del descuento. */

// function descuento(monto) {
//   if (monto<=0) {
//     return "el valor debe ser positivo"
//   }

//   if (monto>1000) {
//     return monto*=0.9
//   } else {
//     return monto
//   }
  
// }

// console.log(descuento(1001));

/* ejercicio 4 */
/* Escribe un programa que verifique si un número está en el 
rango de 10 a 20 (inclusive). */


// function verificarNumero(numero) {
//   if (numero>=10 && numero<=20) {
//     console.log("esta dentro del rango");
//     return    
//   }
//   console.log("no esta dentro del rango");
// }

// verificarNumero(12)

/* ejercicio 5 */
/* Escribe un programa que valide un formulario con los siguientes campos:

Nombre: no puede estar vacío.
Edad: debe ser un número mayor o igual a 18.
Email: debe contener un "@". */

// let nombre="juan"
// let edad=18
// let email="juan.casa"
// function validarFormulario(){
// if (!nombre) {
//   console.log("el nombre no puede estar vacio");
//   return  
// }

// if(edad<18){
//   console.log("tiene que ser mayor de edad");
//   return
// }
// if (!email.includes("@")) {
//   console.log("tiene que contener un @");
//   return
// }
// console.log("todo bien");

// }

// validarFormulario()

/* ejercicio 6 */
/* Escribe un programa que genere un número aleatorio entre 1 y 10, y 
le pida al usuario que lo adivine. Muestra un mensaje indicando si adivinó o no */

// function generarNumeroAleatorio(numeroAdivinado,min,max) {
//   let numeroAleatorio = Math.floor(Math.random()*((max-min)+1))+min;
//   console.log(numeroAleatorio);
//   if (numeroAleatorio===numeroAdivinado) {
//     console.log("adivinado");
    
//   } else {
//     console.log("error");
    
//   }
  
// }

// generarNumeroAleatorio(8,1,10)

/* ejercicio 7 */
/* Escribe un programa que simule el juego de piedra, papel o tijera. 
El usuario ingresa su elección, y el programa genera una elección 
aleatoria para la computadora. Luego, determina el ganador. */

// let opciones = ["piedra", "papel", "tijera"];
// let eleccionUsuario = "piedra";
// let eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

// console.log("Computadora eligió: " + eleccionComputadora);

// if (eleccionUsuario === eleccionComputadora) {
//   console.log("Empate.");
// } else if (
//   (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
//   (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
//   (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
// ) {
//   console.log("¡Ganaste!");
// } else {
//   console.log("Perdiste.");
// }

// let numeros = [1, 2, 3, 4];
// let suma = numeros.reduce(function(acumulador, numero) {
//   return acumulador + numero;
// }, 0);
// console.log(suma); 
/* ejercicio 8 */
// const gifts1 = [3, 1, 2, 3, 4, 2, 5]
// const preparedGifts1 = prepareGifts(gifts1)
// console.log(preparedGifts1) // [1, 2, 3, 4, 5]

// const gifts2 = [6, 5, 5, 5, 5]
// const preparedGifts2 = prepareGifts(gifts2)
// console.log(preparedGifts2) // [5, 6]

// const gifts3 = []
// const preparedGifts3 = prepareGifts(gifts3)
// console.log(preparedGifts3) // []


// function prepareGifts(gifts) {

//   if(gifts.length===0){
//     return []
//   }

//   let arr=gifts.sort((a, b) => a - b);

//     return arr.filter((item, index) => item !== arr[index + 1]);
  
  
// }

/* ejercicio 9 */

// createFrame(['midu', 'madeval', 'educalvolpz'])

// // // Resultado esperado:
// // ***************
// // * midu        *
// // * madeval     *
// // * educalvolpz *
// // ***************

// createFrame(['midu'])

// // // Resultado esperado:
// // ********
// // * midu *
// // ********

// createFrame(['a', 'bb', 'ccc'])

// // // Resultado esperado:
// // *******
// // * a   *
// // * bb  *
// // * ccc *
// // *******

// createFrame(['a', 'bb', 'ccc', 'dddd'])

// function createFrame(arr) {
//   let max=arr[0].length;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length>max) {
//       max=arr[i].length;
//     }
    
//   }
 
//     console.log("*".repeat(max+4));
//     // console.log("* "+arr[0]+(" ".repeat(max-arr[0].length))+" *");
//     for (let j = 0; j < arr.length; j++) {
//       console.log("* "+arr[j]+(" ".repeat(max-arr[j].length))+" *");
//     }
//     console.log("*".repeat(max+4));
    
  
  
// }
/* function createFrame(names) {
  if (names.length===0) {
    return "*"
  }
  let max = names[0].length;
  for (let i = 1; i < names.length; i++) {
    if (names[i].length > max) {
      max = names[i].length;
    }

  }

  let resp=[]
  resp.push("*".repeat(max + 4));
  for (let j = 0; j < names.length; j++) {
    resp.push("* " + names[j] + (" ".repeat(max - names[j].length)) + " *");
  }
  resp.push("*".repeat(max + 4));

  console.log(resp.join("\n"));
  
  return resp
} */

  function acabanEnA(words) {

    const ultimaLetra=words.every(word => word.endsWith("a"))
    // for (const i of words) {
    //   console.log(i.endsWith("a"));  
    // }
    
    
    return ultimaLetra
  }


  console.log(acabanEnA(['casa', 'asa', 'taza']));
  console.log(acabanEnA(['casa', 'asa', 'taza', 'coche']));
   