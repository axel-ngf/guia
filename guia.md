# 1. Tipos de datos
**String:** Es un tipo de dato que representa texto. Por ejemplo: "Hola Mundo".

**Number:** Representa números, ya sean enteros o decimales. Por ejemplo: 42 o 3.14.

**Boolean:** Representa un valor verdadero o falso. Solo puede ser true o false.

**Array:** Es una lista ordenada de valores, que pueden ser de cualquier tipo. Por ejemplo: [1, 2, 3] o ["a", "b", "c"].

**Object:** Es una colección de pares clave-valor, donde cada clave es única. Por ejemplo: { nombre: "Juan", edad: 30 }.

**Null:** Representa la ausencia intencional de cualquier valor. Es un valor asignado explícitamente.

**Undefined:** Representa una variable que ha sido declarada pero no se le ha asignado ningún valor.

# 2. Operadores y estructuras de control
**Operadores:** Son símbolos que te permiten realizar operaciones con variables y valores. Por ejemplo:

**Aritméticos:** +, -, *, /

**Comparación:** ==, ===, !=, !==, >, <

**Lógicos:** &&, ||, !

## Estructuras de control:
## if
Permite ejecutar un bloque de código si una condición es verdadera. Por ejemplo:

``` javascript
if (condición1) {
  // Código si condición1 es verdadera
} else if (condición2) {
  // Código si condición2 es verdadera
} else {
  // Código si ninguna condición es verdadera
}
```
### condiciones compuestas

Puedes combinar múltiples condiciones usando operadores lógicos como && (AND), || (OR) y ! (NOT).

``` javascript
if (edad >= 18 && tieneLicencia)
if (esEstudiante || esProfesor)

let esAdmin = false;
if (!esAdmin) {
  console.log("No tienes permisos de administrador.");
}
```

Aquí, como esAdmin es false, el ! lo convierte en true, por lo que se imprimirá "No tienes permisos de administrador.".

### if anidados

```javascript
if (edad >= 18) {
  if (tieneLicencia) {
  }
}
```
### operador ternario

```javascript
condición ? expresiónSiVerdadera : expresiónSiFalsa;

let edad = 18;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje); // "Mayor de edad
```
### Truthy y Falsy
En JavaScript, las condiciones no solo evalúan true o false, sino también valores "truthy" o "falsy".

Valores Falsy:
- false
- 0
- "" (cadena vacía)
- null
- undefined
- NaN

Valores Truthy:
Cualquier valor que no sea falsy es truthy.

```javascript
let nombre = "";

if (nombre) {
  console.log("Hola, " + nombre);
} else {
  console.log("No hay nombre.");
}
```
Aquí, como nombre es una cadena vacía (falsy), se imprimirá "No hay nombre.".


### if con funciones
Puedes usar if para controlar el flujo de una función.

```javascript
function esPositivo(numero) {
  if (numero > 0) {
    return "Positivo";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Cero";
  }
}

console.log(esPositivo(5)); // "Positivo"
```

### if con objetos y arrays
Puedes usar if para verificar propiedades de objetos o elementos de arrays.

Ejemplo con objetos:
```javascript
let usuario = {
  nombre: "Juan",
  edad: 25
};

if (usuario.edad >= 18) {
  console.log(usuario.nombre + " es mayor de edad.");
}
```

Ejemplo con arrays:

```javascript
let numeros = [1, 2, 3];

if (numeros.length > 0) {
  console.log("El array no está vacío.");
}
```
### if avanzado: Cortocircuito
Puedes usar el cortocircuito para simplificar condiciones.

Si la primera expresión es falsy, no evalúa la segunda expresión porque el resultado ya es false.

Si la primera expresión es truthy, evalúa la segunda expresión y devuelve su valor.

Ejemplo con &&:

``` javascript

let usuario = { nombre: "Ana" };

if (usuario && usuario.nombre) {
  console.log("Hola, " + usuario.nombre);
}
```

Si la primera expresión es truthy, no evalúa la segunda expresión porque el resultado ya es true.

Si la primera expresión es falsy, evalúa la segunda expresión y devuelve su valor.

Ejemplo con ||:

```javascript

let nombre = "";
let nombrePorDefecto = nombre || "Invitado";
console.log(nombrePorDefecto); // "Invitado"
```

### early return

consiste en verificar primero las condiciones negativas y salir de la función o bloque de código inmediatamente si no se cumplen. Esto reduce la necesidad de anidar if y hace que el código sea más legible.

```javascript
function verificarUsuario(usuario) {
  if (usuario) {
    if (usuario.edad >= 18) {
      if (usuario.tieneLicencia) {
        console.log("Puedes conducir.");
      } else {
        console.log("Necesitas una licencia.");
      }
    } else {
      console.log("Eres menor de edad.");
    }
  } else {
    console.log("Usuario no válido.");
  }
}

function verificarUsuario(usuario) {
  // Verificamos primero las condiciones negativas
  if (!usuario) {
    console.log("Usuario no válido.");
    return; // Salimos de la función
  }

  if (usuario.edad < 18) {
    console.log("Eres menor de edad.");
    return; // Salimos de la función
  }

  if (!usuario.tieneLicencia) {
    console.log("Necesitas una licencia.");
    return; // Salimos de la función
  }

  // Si todas las condiciones se cumplen
  console.log("Puedes conducir.");
}
```
Ventajas:
Menos anidación: El código es más plano y fácil de leer.

Claridad: Cada condición se maneja por separado, lo que facilita entender el flujo del código.

Mantenimiento: Es más fácil agregar o modificar condiciones sin afectar el resto del código.

Sin early return:

```javascript
function validarFormulario(formulario) {
  if (formulario.nombre) {
    if (formulario.email) {
      if (formulario.contraseña) {
        console.log("Formulario válido.");
      } else {
        console.log("La contraseña es requerida.");
      }
    } else {
      console.log("El email es requerido.");
    }
  } else {
    console.log("El nombre es requerido.");
  }
}
```
Con early return:
```javascript

function validarFormulario(formulario) {
  if (!formulario.nombre) {
    console.log("El nombre es requerido.");
    return;
  }

  if (!formulario.email) {
    console.log("El email es requerido.");
    return;
  }

  if (!formulario.contraseña) {
    console.log("La contraseña es requerida.");
    return;
  }

  console.log("Formulario válido.");
}
```
### Alternativas al early return
Si el "early return" no es suficiente o no se adapta a tu caso, puedes usar otras técnicas para reducir la anidación:

a) Usar switch:
Útil cuando tienes múltiples condiciones basadas en el valor de una variable.

```javascript
switch (usuario.rol) {
  case "admin":
    console.log("Eres administrador.");
    break;
  case "usuario":
    console.log("Eres usuario normal.");
    break;
  default:
    console.log("Rol no válido.");
}
```

b) Usar objetos o mapas:
Útil para reemplazar múltiples if-else o switch.

```javascript
const roles = {
  admin: "Eres administrador.",
  usuario: "Eres usuario normal.",
};

console.log(roles[usuario.rol] || "Rol no válido.");
```
c) Encadenamiento opcional (?.):
Útil para evitar errores al acceder a propiedades de objetos anidados.

```javascript
if (usuario?.direccion?.ciudad === "Madrid") {
  console.log("Vives en Madrid.");
}
```

### switch: 
Es una estructura que permite ejecutar diferentes bloques de código dependiendo del valor de una variable. Por ejemplo:


```javascript
switch (dia) {
    case "Lunes":
        console.log("Es lunes");
        break;
    case "Martes":
        console.log("Es martes");
        break;
    default:
        console.log("No es lunes ni martes");
}
```
Puedes agrupar varios case para que ejecuten el mismo bloque de código. Esto es útil cuando varios valores deben tener el mismo comportamiento.
```javascript
let mes = 2;
let estacion;

switch (mes) {
  case 12:
  case 1:
  case 2:
    estacion = "Invierno";
    break;
  case 3:
  case 4:
  case 5:
    estacion = "Primavera";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "Verano";
    break;
  case 9:
  case 10:
  case 11:
    estacion = "Otoño";
    break;
  default:
    estacion = "Mes no válido";
}
console.log(estacion); // Salida: "Invierno"
```
## for
 Permite repetir un bloque de código un número específico de veces. Por ejemplo:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let frutas = ["Manzana", "Banana", "Cereza"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
```
### for con múltiples variables

```javascript

for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(`i: ${i}, j: ${j}`);
}

Salida:

i: 0, j: 10
i: 1, j: 9
i: 2, j: 8
i: 3, j: 7
i: 4, j: 6
```
### for con break y continue

- **break:** Termina el bucle inmediatamente.
- **continue:** Salta el resto del código en la iteración actual y pasa a la siguiente iteración.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);//0,1,2,3,4
}

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);//0,1,3,4
}
```

### for...of (ES6)
El bucle for...of es una variante de for que permite recorrer elementos de objetos iterables como arrays, strings, etc.

```javascript
let frutas = ["Manzana", "Banana", "Cereza"];

for (let fruta of frutas) {
  console.log(fruta);
}
```

### for...in
El bucle for...in se utiliza para recorrer las propiedades enumerables de un objeto.

```javascript
let persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Desarrollador"
};

for (let clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}

//nombre: Juan
// edad: 30
// profesion: Desarrollador
```

### for anidados
Puedes anidar bucles for para trabajar con estructuras de datos multidimensionales.

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
// i: 0, j: 0
// i: 0, j: 1
// i: 0, j: 2
// i: 1, j: 0
// i: 1, j: 1
// i: 1, j: 2
// i: 2, j: 0
// i: 2, j: 1
// i: 2, j: 2
```
### for con funciones
Puedes usar funciones dentro de un bucle for para realizar operaciones más complejas.
```javascript
function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(factorial(5)); // Salida: 120
```
## while

 Repite un bloque de código mientras una condición sea verdadera. 

 El bucle do...while es similar al while, pero con una diferencia clave: la condición se evalúa después de cada iteración. Esto garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es falsa desde el principio.Por ejemplo:

```javascript
let contador = 10;

// while
while (contador < 5) {
  console.log("While: " + contador);
  contador++;
}

// do...while
do {
  console.log("Do...While: " + contador);
  contador++;
} while (contador < 5);
```
### Uso de break y continue
Tanto en while como en do...while, puedes usar break para salir del bucle y continue para saltar a la siguiente iteración.

Ejemplo con break:
```javascript
let contador = 0;

while (contador < 10) {
  if (contador === 5) {
    break; // Sale del bucle cuando contador es 5
  }
  console.log(contador);
  contador++;
}

Salida:

0
1
2
3
4
```
Ejemplo con continue:
```javascript
let contador = 0;

while (contador < 5) {
  contador++;
  if (contador === 3) {
    continue; // Salta la iteración cuando contador es 3
  }
  console.log(contador);
}
Salida:

Copy
1
2
4
5
```
**map:** Es un método de los arrays que permite transformar cada elemento del array. Por ejemplo:

```javascript
const numeros = [1, 2, 3];
const dobles = numeros.map(num => num * 2);
console.log(dobles); // [2, 4, 6]
```
**filter:** Filtra los elementos de un array que cumplen una condición. Por ejemplo:
```javascript

const numeros = [1, 2, 3, 4];
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]
```
**reduce:** Reduce un array a un único valor aplicando una función acumuladora. Por ejemplo:

```javascript
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // 10
```
# 3. Funciones y scope
## Funciones

### Declaración de función (Function Declaration)
 Son bloques de código que puedes llamar para ejecutar una tarea específica. Por ejemplo:

```javascript
function saludar(nombre) {
    console.log("Hola, " + nombre);
}
saludar("Juan"); // "Hola, Juan"
```

### Expresión de función (Function Expression)

Una función también puede ser asignada a una variable. Esto se llama expresión de función.

Sintaxis:
```javascript
const nombreDeLaFuncion = function(parametro1, parametro2) {
  // Código a ejecutar
  return resultado; // Opcional
};

const sumar = (a, b) => a + b;
console.log(sumar(2, 3)); // Salida: 5
```
### Parámetros y argumentos
Parámetros: Son las variables que se definen en la declaración de la función.

Argumentos: Son los valores que se pasan a la función cuando se invoca.

```javascript

function saludar(nombre, edad) { // nombre y edad son parámetros
  console.log(`Hola, ${nombre}. Tienes ${edad} años.`);
}

saludar("Juan", 30); // "Juan" y 30 son argumentos

Salida:
Hola, Juan. Tienes 30 años.
```

### Valores por defecto en parámetros
Puedes asignar valores por defecto a los parámetros en caso de que no se pasen argumentos.

Ejemplo:
```javascript
function saludar(nombre = "Invitado", edad = 18) {
  console.log(`Hola, ${nombre}. Tienes ${edad} años.`);
}

saludar(); // Salida: "Hola, Invitado. Tienes 18 años."
```
### Funciones que devuelven valores
Una función puede devolver un valor usando la palabra clave return. Si no se usa return, la función devuelve undefined.

Ejemplo:
```javascript

function multiplicar(a, b) {
  return a * b;
}

let resultado = multiplicar(3, 4);
console.log(resultado); // Salida: 12
```
### Funciones como ciudadanos de primera clase
En JavaScript, las funciones son ciudadanos de primera clase, lo que significa que pueden ser:

Asignadas a variables.

Pasadas como argumentos a otras funciones.

Devueltas por otras funciones.

Ejemplo de función como argumento:
``` javascript

function ejecutarFuncion(funcion) {
  funcion();
}

ejecutarFuncion(() => console.log("Hola")); // Salida: "Hola"
```
Ejemplo de función que devuelve otra función:
```javascript

function crearSaludo(mensaje) {
  return function(nombre) {
    return `${mensaje}, ${nombre}`;
  };
}

const saludar = crearSaludo("Hola");
console.log(saludar("Juan")); // Salida: "Hola, Juan"
```
### Funciones anónimas
Una función anónima es una función sin nombre. Se usa comúnmente como argumento de otra función o en expresiones de función.

Ejemplo:
``` javascript

setTimeout(function() {
  console.log("Esto es una función anónima");
}, 1000);
```
### Funciones recursivas
Una función recursiva es una función que se llama a sí misma. Es útil para resolver problemas que pueden dividirse en subproblemas más pequeños.

Ejemplo (factorial):
``` javascript

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Salida: 120
```
### Funciones de orden superior
Una función de orden superior es una función que recibe otra función como argumento o devuelve una función.

Ejemplo (map):
``` javascript

const numeros = [1, 2, 3, 4];
const duplicados = numeros.map((numero) => numero * 2);

console.log(duplicados); // Salida: [2, 4, 6, 8]
```
### Closures
Un closure es una función que "recuerda" el entorno en el que fue creada, incluso después de que ese entorno haya desaparecido.

Ejemplo:
```javascript

function crearContador() {
  let contador = 0;
  return function() {
    contador++;
    return contador;
  };
}

const contador = crearContador();
console.log(contador()); // Salida: 1
console.log(contador()); // Salida: 2
```
### Funciones generadoras (Generators)
Las funciones generadoras son funciones especiales que pueden pausar y reanudar su ejecución. Se definen con function* y usan yield para devolver valores.

Ejemplo:
```javascript

function* generador() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generador();
console.log(gen.next().value); // Salida: 1
console.log(gen.next().value); // Salida: 2
console.log(gen.next().value); // Salida: 3
```
### Funciones asíncronas (Async/Await)
Las funciones asíncronas permiten trabajar con código asíncrono de manera más legible. Se definen con async y usan await para esperar a que una promesa se resuelva.

Ejemplo:
```javascript

async function obtenerDatos() {
  const respuesta = await fetch("https://api.ejemplo.com/datos");
  const datos = await respuesta.json();
  return datos;
}

obtenerDatos().then(datos => console.log(datos));
```
## Arrow functions
 Son una forma más corta de escribir funciones, introducidas en ES6. Por ejemplo:

```javascript
const saludar = (nombre) => {
    console.log("Hola, " + nombre);
};
saludar("Juan"); // "Hola, Juan"
```
### this en arrow functions
Uno de los aspectos más importantes de las arrow functions es cómo manejan el valor de this. A diferencia de las funciones tradicionales, las arrow functions no tienen su propio this. En su lugar, heredan el valor de this del contexto en el que fueron definidas (esto se conoce como lexical scoping).

Ejemplo comparativo:
```javascript
// Función tradicional
const obj1 = {
  valor: 42,
  metodo: function() {
    console.log(this.valor); // `this` se refiere a obj1
  }
};

obj1.metodo(); // Salida: 42

// Arrow function
const obj2 = {
  valor: 42,
  metodo: () => {
    console.log(this.valor); // `this` no se refiere a obj2, sino al contexto exterior
  }
};

obj2.metodo(); // Salida: undefined (si el contexto exterior no tiene `valor`)
```
En el caso de obj2, this no se refiere al objeto obj2, sino al contexto en el que se definió la arrow function (por ejemplo, el ámbito global o el de otra función).

### Arrow functions y el objeto arguments
Las arrow functions no tienen su propio objeto arguments. Si intentas acceder a arguments dentro de una arrow function, se referirá al objeto arguments del contexto exterior (si existe).

Ejemplo:
```javascript
function funcionTradicional() {
  console.log(arguments); // Muestra los argumentos pasados a la función
}

const arrowFunction = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};

funcionTradicional(1, 2, 3); // Salida: [1, 2, 3]
arrowFunction(1, 2, 3); // Error
```
Si necesitas acceder a los argumentos en una arrow function, puedes usar el rest parameter (...args):

```javascript

const arrowFunction = (...args) => {
  console.log(args); // Muestra los argumentos como un array
};

arrowFunction(1, 2, 3); // Salida: [1, 2, 3]
```
### Arrow functions como métodos de objetos
Aunque puedes usar arrow functions como métodos de objetos, no es recomendable debido a su manejo de this. Como mencionamos antes, las arrow functions no tienen su propio this, por lo que no pueden acceder a las propiedades del objeto correctamente.

Ejemplo:
```javascript
const obj = {
  valor: 42,
  metodoTradicional: function() {
    console.log(this.valor); // `this` se refiere a obj
  },
  metodoArrow: () => {
    console.log(this.valor); // `this` no se refiere a obj
  }
};

obj.metodoTradicional(); // Salida: 42
obj.metodoArrow(); // Salida: undefined
```
### Arrow functions y constructores
Las arrow functions no pueden ser usadas como constructores. Si intentas usar new con una arrow function, obtendrás un error.

Ejemplo:
```javascript
const FuncionTradicional = function() {
  this.valor = 42;
};

const ArrowFunction = () => {
  this.valor = 42; // Error: Arrow functions no pueden ser constructores
};

const obj1 = new FuncionTradicional(); // Funciona
console.log(obj1.valor); // Salida: 42

const obj2 = new ArrowFunction(); // TypeError: ArrowFunction is not a constructor
```
### Arrow functions y métodos de prototipos
Las arrow functions no son adecuadas para definir métodos en prototipos debido a su manejo de this. Si defines un método de prototipo con una arrow function, this no se referirá a la instancia del objeto.

Ejemplo:
```javascript
function Persona(nombre) {
  this.nombre = nombre;
}

// Método tradicional
Persona.prototype.saludarTradicional = function() {
  console.log(`Hola, soy ${this.nombre}`);
};

// Método con arrow function
Persona.prototype.saludarArrow = () => {
  console.log(`Hola, soy ${this.nombre}`); // `this` no se refiere a la instancia
};

const persona = new Persona("Juan");
persona.saludarTradicional(); // Salida: "Hola, soy Juan"
persona.saludarArrow(); // Salida: "Hola, soy undefined"
```
### Arrow functions y call, apply, bind
Las arrow functions no pueden cambiar su valor de this usando call, apply o bind. Como this está ligado al contexto léxico, estos métodos no tienen efecto.

Ejemplo:
```javascript
const obj = { valor: 42 };

const funcionTradicional = function() {
  console.log(this.valor);
};

const arrowFunction = () => {
  console.log(this.valor);
};

funcionTradicional.call(obj); // Salida: 42
arrowFunction.call(obj); // Salida: undefined (no cambia `this`)
```
### Arrow functions y super
Las arrow functions no tienen su propio super. Si intentas usar super dentro de una arrow function, se referirá al super del contexto exterior.

Ejemplo:
```javascript
class Padre {
  constructor() {
    this.valor = 42;
  }
}

class Hijo extends Padre {
  metodoTradicional() {
    console.log(super.valor); // Accede al `valor` del padre
  }

  metodoArrow = () => {
    console.log(super.valor); // Error: `super` no está definido
  };
}

const hijo = new Hijo();
hijo.metodoTradicional(); // Salida: 42
hijo.metodoArrow(); // Error
```
### Arrow functions y yield
Las arrow functions no pueden ser usadas como generadoras. No puedes usar yield dentro de una arrow function.

Ejemplo:
```javascript
function* generadoraTradicional() {
  yield 1;
  yield 2;
}

const generadoraArrow = () => {
  yield 1; // SyntaxError: Unexpected token 'yield'
};
```
## Closures
 Es una función que recuerda el entorno en el que fue creada, incluso si ese entorno ya no existe. Por ejemplo:

```javascript
function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    };
}
const contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2
```
 
Un closure es una función que "recuerda" el entorno en el que fue creada, incluso después de que ese entorno haya desaparecido. En otras palabras, un closure permite que una función acceda a variables de su ámbito léxico (el ámbito en el que fue definida) incluso cuando se ejecuta fuera de ese ámbito.

Ejemplo básico:
```javascript
function crearContador() {
  let contador = 0; // Variable en el ámbito de crearContador

  return function() {
    contador++; // Accede a la variable contador
    return contador;
  };
}

const contador = crearContador();
console.log(contador()); // Salida: 1
console.log(contador()); // Salida: 2
```
En este ejemplo:

La función crearContador define una variable contador.

Devuelve una función que incrementa y devuelve contador.

Aunque crearContador ya terminó de ejecutarse, la función devuelta recuerda la variable contador y puede seguir accediendo a ella. Esto es un closure.

Los closures funcionan gracias a la cadena de ámbitos (scope chain) en JavaScript. Cuando una función se define, captura una referencia a su ámbito léxico (las variables disponibles en el lugar donde se definió). Esta referencia se mantiene incluso si la función se ejecuta en un ámbito diferente.

Ejemplo:
```javascript
function exterior() {
  let mensaje = "Hola";

  function interior() {
    console.log(mensaje); // Accede a la variable mensaje del ámbito exterior
  }

  return interior;
}

const funcionInterior = exterior();
funcionInterior(); // Salida: "Hola"
```
Aquí, funcionInterior es un closure porque recuerda el ámbito de exterior y puede acceder a la variable mensaje.


- Closures y bucles
Un error común es crear closures dentro de bucles sin tener en cuenta cómo se capturan las variables. Por ejemplo:

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // ¿Qué imprime?
  }, 1000);
}
Salida:
4
4
4
```
Esto ocurre porque var no tiene ámbito de bloque, y todas las funciones setTimeout comparten la misma variable i. Para solucionarlo, puedes usar let (que tiene ámbito de bloque) o crear un nuevo ámbito con una IIFE (Immediately Invoked Function Expression):

```javascript

for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // Ahora imprime 1, 2, 3
  }, 1000);
}
```
- Closures y memoria
Los closures pueden causar fugas de memoria si no se usan correctamente, ya que mantienen referencias a variables que podrían no ser necesarias. Por ejemplo:

```javascript

function crearClosure() {
  let datosGrandes = new Array(1000000).fill("Datos"); // Un array grande
  return function() {
    console.log("Closure ejecutado");
  };
}

const closure = crearClosure();
```
// Aunque no usamos datosGrandes, el closure mantiene una referencia a él
Para evitar esto, puedes liberar manualmente las referencias cuando ya no sean necesarias:

```javascript

closure = null; // Libera la referencia
```
- Closures y módulos
Los closures son la base de los módulos en JavaScript. Puedes usar closures para crear patrones de módulos que encapsulan variables y funciones privadas.

Ejemplo:
```javascript

const modulo = (function() {
  let contador = 0; // Variable privada

  return {
    incrementar: function() {
      contador++;
    },
    obtenerContador: function() {
      return contador;
    }
  };
})();

modulo.incrementar();
console.log(modulo.obtenerContador()); // Salida: 1
```
Aquí, contador es una variable privada a la que solo se puede acceder a través de los métodos incrementar y obtenerContador.

**Los closures son extremadamente útiles en la programación.** Aquí te explico algunos de sus usos más comunes:

- Manejo de estado privado
Los closures permiten crear variables privadas que solo pueden ser accedidas o modificadas por funciones específicas.

Ejemplo:
```javascript

function crearContador() {
  let contador = 0; // Variable privada

  return {
    incrementar: function() {
      contador++;
    },
    obtenerContador: function() {
      return contador;
    }
  };
}

const contador = crearContador();
contador.incrementar();
console.log(contador.obtenerContador()); // Salida: 1
```
- Funciones de orden superior
Las funciones que devuelven otras funciones (funciones de orden superior) a menudo usan closures para recordar el estado.

Ejemplo:
```javascript

function crearMultiplicador(factor) {
  return function(numero) {
    return numero * factor;
  };
}

const duplicar = crearMultiplicador(2);
console.log(duplicar(5)); // Salida: 10
```
- Callbacks y eventos
Los closures son fundamentales en el manejo de callbacks y eventos, ya que permiten que las funciones recuerden el contexto en el que fueron creadas.

Ejemplo:
```javascript
function configurarBoton() {
  let contador = 0;

  document.getElementById("miBoton").addEventListener("click", function() {
    contador++;
    console.log(`Botón clickeado ${contador} veces`);
  });
}

configurarBoton();
```
- Currying
El currying es una técnica en la que una función con múltiples argumentos se transforma en una secuencia de funciones que toman un solo argumento. Los closures son esenciales para implementar currying.

Ejemplo:
```javascript

function sumar(a) {
  return function(b) {
    return a + b;
  };
}

const sumar5 = sumar(5);
console.log(sumar5(3)); // Salida: 8
```
- Memoización
La memoización es una técnica de optimización que almacena los resultados de funciones costosas para evitar cálculos repetidos. Los closures son útiles para implementar memoización.

Ejemplo:
```javascript

function memoizar(funcion) {
  const cache = {};

  return function(...args) {
    const clave = JSON.stringify(args);
    if (cache[clave]) {
      return cache[clave];
    }
    const resultado = funcion(...args);
    cache[clave] = resultado;
    return resultado;
  };
}

const factorial = memoizar(function(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5)); // Salida: 120
```
## Scope
 Se refiere al alcance de una variable. Las variables pueden ser globales (accesibles en todo el código) o locales (accesibles solo dentro de una función o bloque).

# 4. Manejo de objetos y arrays
**Object.keys():** Devuelve un array con las claves de un objeto. Por ejemplo:

```javascript
const persona = { nombre: "Juan", edad: 30 };
console.log(Object.keys(persona)); // ["nombre", "edad"]
```
**Object.values():** Devuelve un array con los valores de un objeto. Por ejemplo:

```javascript
const persona = { nombre: "Juan", edad: 30 };
console.log(Object.values(persona)); // ["Juan", 30]
```

**Spread/Rest operator:**

**Spread:** Permite expandir elementos de un array o propiedades de un objeto. Por ejemplo:

```javascript
const numeros = [1, 2, 3];
const nuevosNumeros = [...numeros, 4, 5]; // [1, 2, 3, 4, 5]
```
**Rest:** Permite capturar múltiples argumentos en una función como un array. Por ejemplo:

```javascript
function sumar(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}
console.log(sumar(1, 2, 3)); // 6
```
##
1. Object.keys()
¿Qué es Object.keys()?
Object.keys() es un método que devuelve un array con las claves (propiedades enumerables) de un objeto.

Sintaxis:
javascript
Copy
Object.keys(objeto);
Ejemplo básico:
javascript
Copy
const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Desarrollador"
};

const claves = Object.keys(persona);
console.log(claves); // Salida: ["nombre", "edad", "profesion"]
Usos comunes:
Recorrer las propiedades de un objeto:

javascript
Copy
claves.forEach(clave => {
  console.log(`${clave}: ${persona[clave]}`);
});
Verificar si un objeto tiene propiedades:

javascript
Copy
if (Object.keys(persona).length === 0) {
  console.log("El objeto está vacío");
}
2. Object.values()
¿Qué es Object.values()?
Object.values() es un método que devuelve un array con los valores de las propiedades enumerables de un objeto.

Sintaxis:
javascript
Copy
Object.values(objeto);
Ejemplo básico:
javascript
Copy
const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Desarrollador"
};

const valores = Object.values(persona);
console.log(valores); // Salida: ["Juan", 30, "Desarrollador"]
Usos comunes:
Recorrer los valores de un objeto:

javascript
Copy
valores.forEach(valor => {
  console.log(valor);
});
Sumar valores numéricos de un objeto:

javascript
Copy
const total = Object.values(persona).reduce((acc, valor) => {
  if (typeof valor === "number") {
    return acc + valor;
  }
  return acc;
}, 0);
console.log(total); // Salida: 30
3. Operador Spread (...)
¿Qué es el operador spread?
El operador spread (...) permite "expandir" un iterable (como un array o un objeto) en lugares donde se esperan múltiples elementos o pares clave-valor.

Sintaxis:
javascript
Copy
...iterable;
Ejemplos:
a) Con arrays:
Copiar un array:

javascript
Copy
const numeros = [1, 2, 3];
const copiaNumeros = [...numeros];
console.log(copiaNumeros); // Salida: [1, 2, 3]
Concatenar arrays:

javascript
Copy
const masNumeros = [4, 5, 6];
const todosLosNumeros = [...numeros, ...masNumeros];
console.log(todosLosNumeros); // Salida: [1, 2, 3, 4, 5, 6]
b) Con objetos:
Copiar un objeto:

javascript
Copy
const persona = { nombre: "Juan", edad: 30 };
const copiaPersona = { ...persona };
console.log(copiaPersona); // Salida: { nombre: "Juan", edad: 30 }
Combinar objetos:

javascript
Copy
const detalles = { profesion: "Desarrollador" };
const personaCompleta = { ...persona, ...detalles };
console.log(personaCompleta); // Salida: { nombre: "Juan", edad: 30, profesion: "Desarrollador" }
c) En llamadas a funciones:
Pasar elementos de un array como argumentos:

javascript
Copy
function sumar(a, b, c) {
  return a + b + c;
}
const numeros = [1, 2, 3];
console.log(sumar(...numeros)); // Salida: 6
4. Operador Rest (...)
¿Qué es el operador rest?
El operador rest (...) permite representar un número indefinido de argumentos como un array. Se usa en la definición de funciones para capturar todos los argumentos restantes.

Sintaxis:
javascript
Copy
function nombreFuncion(...args) {
  // args es un array con todos los argumentos
}
Ejemplos:
a) En funciones:
Capturar todos los argumentos:

javascript
Copy
function sumar(...numeros) {
  return numeros.reduce((acc, num) => acc + num, 0);
}
console.log(sumar(1, 2, 3, 4)); // Salida: 10
b) En desestructuración:
Capturar elementos restantes de un array:

javascript
Copy
const [primero, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(primero); // Salida: 1
console.log(segundo); // Salida: 2
console.log(resto); // Salida: [3, 4, 5]
Capturar propiedades restantes de un objeto:

javascript
Copy
const persona = { nombre: "Juan", edad: 30, profesion: "Desarrollador" };
const { nombre, ...detalles } = persona;
console.log(nombre); // Salida: "Juan"
console.log(detalles); // Salida: { edad: 30, profesion: "Desarrollador" }
5. Conceptos avanzados
a) Object.keys() y Object.values() con objetos complejos:
Puedes usar estos métodos con objetos anidados o que contienen funciones.

javascript
Copy
const objetoComplejo = {
  nombre: "Juan",
  edad: 30,
  saludar() {
    console.log("Hola");
  }
};
console.log(Object.keys(objetoComplejo)); // Salida: ["nombre", "edad", "saludar"]
console.log(Object.values(objetoComplejo)); // Salida: ["Juan", 30, [Function: saludar]]
b) Spread y rest con objetos dinámicos:
Puedes combinar spread y rest para manipular objetos dinámicamente.

javascript
Copy
const persona = { nombre: "Juan", edad: 30 };
const nuevosDatos = { profesion: "Desarrollador", ciudad: "Madrid" };
const personaActualizada = { ...persona, ...nuevosDatos };
console.log(personaActualizada); // Salida: { nombre: "Juan", edad: 30, profesion: "Desarrollador", ciudad: "Madrid" }
c) Spread y rest en funciones variádicas:
Las funciones variádicas son aquellas que aceptan un número variable de argumentos. El operador rest es perfecto para esto.

javascript
Copy
function concatenar(...strings) {
  return strings.join(" ");
}
console.log(concatenar("Hola", "mundo", "!")); // Salida: "Hola mundo !"
6. Usos comunes
a) Manipulación de objetos y arrays:
Copiar, combinar o extraer propiedades de objetos y arrays.

Ejemplo:

javascript
Copy
const usuario = { nombre: "Ana", edad: 25 };
const usuarioConEmail = { ...usuario, email: "ana@example.com" };
console.log(usuarioConEmail);
b) Funciones flexibles:
Crear funciones que acepten un número variable de argumentos.

Ejemplo:

javascript
Copy
function logear(...mensajes) {
  mensajes.forEach(mensaje => console.log(mensaje));
}
logear("Error", "Código 404", "Recurso no encontrado");
c) Desestructuración avanzada:
Extraer valores específicos de arrays u objetos y capturar el resto.

Ejemplo:

javascript
Copy
const [primero, ...resto] = [1, 2, 3, 4];
console.log(primero); // 1
console.log(resto); // [2, 3, 4]

## arrays
 JavaScript proporciona una gran cantidad de métodos para trabajar con arrays. Aquí te explico algunos de los más comunes:

- **push y pop**

push: Añade uno o más elementos al final del array.

pop: Elimina y devuelve el último elemento del array.

Ejemplo:
```javascript

let frutas = ["Manzana", "Banana"];
frutas.push("Cereza"); // Añade "Cereza" al final
console.log(frutas); // Salida: ["Manzana", "Banana", "Cereza"]

let ultimaFruta = frutas.pop(); // Elimina "Cereza"
console.log(ultimaFruta); // Salida: "Cereza"
```
- **shift y unshift**

shift: Elimina y devuelve el primer elemento del array.

unshift: Añade uno o más elementos al principio del array.

Ejemplo:
```javascript

let frutas = ["Manzana", "Banana"];
frutas.unshift("Cereza"); // Añade "Cereza" al principio
console.log(frutas); // Salida: ["Cereza", "Manzana", "Banana"]

let primeraFruta = frutas.shift(); // Elimina "Cereza"
console.log(primeraFruta); // Salida: "Cereza"
```
- **slice y splice**

slice: Devuelve una copia de una parte del array.

splice: Cambia el contenido de un array eliminando, reemplazando o añadiendo elementos.

Ejemplo:
```javascript

let frutas = ["Manzana", "Banana", "Cereza", "Durazno"];
let subArray = frutas.slice(1, 3); // Devuelve ["Banana", "Cereza"]
console.log(subArray);

frutas.splice(1, 2, "Kiwi", "Mango"); // Elimina 2 elementos desde el índice 1 y añade "Kiwi" y "Mango"
console.log(frutas); // Salida: ["Manzana", "Kiwi", "Mango", "Durazno"]
```
- **concat**

Combina dos o más arrays.

Ejemplo:
```javascript

let frutas1 = ["Manzana", "Banana"];
let frutas2 = ["Cereza", "Durazno"];
let todasLasFrutas = frutas1.concat(frutas2);
console.log(todasLasFrutas); // Salida: ["Manzana", "Banana", "Cereza", "Durazno"]
```
- **forEach**

Ejecuta una función para cada elemento del array.

Ejemplo:
```javascript

let numeros = [1, 2, 3];
numeros.forEach(function(numero) {
  console.log(numero);
});
// Salida:
// 1
// 2
// 3
```
- **map**

Crea un nuevo array aplicando una función a cada elemento del array original.

Ejemplo:
```javascript

let numeros = [1, 2, 3];
let cuadrados = numeros.map(function(numero) {
  return numero * numero;
});
console.log(cuadrados); // Salida: [1, 4, 9]
``` 
- **filter**

Crea un nuevo array con los elementos que cumplen una condición.

Ejemplo:
```javascript

let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});
console.log(pares); // Salida: [2, 4]
```
- **reduce**

Reduce el array a un solo valor aplicando una función acumuladora.

Ejemplo:
```javascript

let numeros = [1, 2, 3, 4];
let suma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(suma); // Salida: 10
```
### Conceptos avanzados de arrays
- Arrays multidimensionales

Un array puede contener otros arrays, lo que permite crear estructuras multidimensionales.

Ejemplo:
```javascript
Copy
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matriz[1][2]); // Salida: 6
```
- Arrays dispersos

Un array disperso es un array en el que no todos los índices tienen valores asignados.

Ejemplo:
```javascript

let disperso = [];
disperso[5] = "Hola";
console.log(disperso); // Salida: [ <5 empty items>, "Hola" ]
```
- Arrays y objetos iterables

Los arrays son objetos iterables, lo que significa que puedes usar bucles for...of para recorrerlos.

Ejemplo:
```javascript

let frutas = ["Manzana", "Banana", "Cereza"];
for (let fruta of frutas) {
  console.log(fruta);
}
// Salida:
// Manzana
// Banana
// Cereza
```
- Desestructuración de arrays

La desestructuración permite extraer valores de un array en variables individuales.

Ejemplo:
```javascript

let frutas = ["Manzana", "Banana", "Cereza"];
let [primera, segunda] = frutas;
console.log(primera); // Salida: "Manzana"
console.log(segunda); // Salida: "Banana"
```
- Operador spread (...)

El operador spread permite expandir un array en lugares donde se esperan múltiples elementos.

Ejemplo:
```javascript

let frutas = ["Manzana", "Banana"];
let masFrutas = ["Cereza", ...frutas, "Durazno"];
console.log(masFrutas); // Salida: ["Cereza", "Manzana", "Banana", "Durazno"]
```
### Usos comunes de arrays
Los arrays son fundamentales en la programación y se utilizan en una gran variedad de situaciones:

- Almacenamiento de datos

Los arrays son ideales para almacenar colecciones de datos, como listas de usuarios, productos, etc.

Ejemplo:
```javascript

let usuarios = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Ana", edad: 25 }
];
```
- Manipulación de datos

Puedes usar métodos como map, filter, y reduce para transformar y manipular datos.

Ejemplo:
```javascript

let edades = usuarios.map(usuario => usuario.edad);
console.log(edades); // Salida: [30, 25]
```
- Iteración 

Los arrays son perfectos para iterar sobre una colección de elementos.

Ejemplo:
```javascript

usuarios.forEach(usuario => {
  console.log(`${usuario.nombre} tiene ${usuario.edad} años`);
});
```
- Implementación de estructuras de datos

Los arrays se utilizan para implementar otras estructuras de datos como pilas, colas y listas enlazadas.

Ejemplo de pila:
```javascript
let pila = [];
pila.push(1); // Añadir
pila.push(2);
console.log(pila.pop()); // Eliminar y obtener el último elemento
```
- Algoritmos de ordenación y búsqueda

Los arrays son la base para algoritmos como la búsqueda binaria o la ordenación rápida (quicksort).

Ejemplo de ordenación:
```javascript
let numeros = [3, 1, 4, 1, 5, 9];
numeros.sort((a, b) => a - b);
console.log(numeros); // Salida: [1, 1, 3, 4, 5, 9]
```
## cortocircuito

- Acceso seguro a propiedades anidadas:

Supongamos que tienes un objeto usuario que puede no estar definido o no tener ciertas propiedades. Usamos && para evitar errores:

```javascript

let usuario = { perfil: { nombre: "Carlos" } };

let nombreUsuario = usuario && usuario.perfil && usuario.perfil.nombre;
console.log(nombreUsuario); // "Carlos"
```
Con encadenamiento opcional (disponible en ES2020), esto se simplifica aún más:

```javascript

let nombreUsuario = usuario?.perfil?.nombre;
console.log(nombreUsuario); // "Carlos"
```
- Asignación de valores por defecto:

Si tienes una variable que puede ser null, undefined o una cadena vacía, puedes usar || para asignar un valor por defecto:

```javascript

let nombre = "";
let nombreAMostrar = nombre || "Invitado";
console.log(nombreAMostrar); // "Invitado"
```
- Ejecución condicional de funciones:

Puedes usar && para ejecutar una función solo si una condición es verdadera:

```javascript

let usuario = { nombre: "Ana" };

usuario && usuario.nombre && console.log("Hola, " + usuario.nombre);
```
Aquí, console.log solo se ejecuta si usuario y usuario.nombre son truthy.

### Ejemplos adicionales
- Uso de && para renderizado condicional (en frameworks como React):
```javascript

let mostrarMensaje = true;

return (
  <div>
    {mostrarMensaje && <p>Este es un mensaje importante.</p>}
  </div>
);
```
Si mostrarMensaje es true, se renderiza el mensaje. Si es false, no se renderiza nada.

- Uso de || para valores por defecto en funciones:
```javascript

function saludar(nombre) {
  nombre = nombre || "Invitado";
  console.log("Hola, " + nombre);
}

saludar(); // "Hola, Invitado"
saludar("Ana"); // "Hola, Ana"
```
- Resumen

&&: Útil para verificar múltiples condiciones y acceder a propiedades de manera segura.

||: Útil para asignar valores por defecto cuando una variable es falsy.

