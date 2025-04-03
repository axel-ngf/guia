## ❌ Método antiguo (React 17 y versiones anteriores):
```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```
## ✅ Método actual (React 18+):
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```




# Componentes en React
Los componentes son funciones o clases que devuelven elementos de UI.

## A. Componentes Funcionales (Recomendados hoy en día)
```jsx
function Saludo() {
  return <h1>¡Hola desde un componente!</h1>;
}

// Uso: <Saludo />
```
🔹 Con props:

```jsx
function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}
// Uso: <Saludo nombre="Carlos" />
```
## B. Componentes de Clase (Legacy)
```jsx
class Saludo extends React.Component {
  render() {
    return <h1>Hola, {this.props.nombre}</h1>;
  }
}
```
# Props (Propiedades)
Son datos que se pasan de un componente padre a un hijo.

Ejemplo básico
```jsx
Copy
function Usuario(props) {
  return <p>Nombre: {props.nombre}, Edad: {props.edad}</p>;
}

// Uso:
<Usuario nombre="Luis" edad={25} />
```
## Props avanzadas
🔹 Props con destructuring:

```jsx
Copy
function Usuario({ nombre, edad }) {
  return <p>Nombre: {nombre}, Edad: {edad}</p>;
}
```
🔹 Children (contenido entre etiquetas):

```jsx
Copy
function Caja({ children }) {
  return <div className="caja">{children}</div>;
}

// Uso:
<Caja>
  <h1>Título</h1>
  <p>Descripción...</p>
</Caja>
```
# Tipos de Componentes

| Tipo | Descripción | Ejemplo |
| ----------- | ----------- | ----------- |
| Presentaciones | Solo muestran UI |	```<Button />, <Card / >``` |
| Contenedores |	Manejan lógica y estado	| ```<UserList />``` |

# Flujo de Datos (Unidireccional)
Padre → Hijo: Viajan mediante props.

Hijo → Padre: Se usan funciones callback.

Ejemplo (Comunicación entre componentes)
```jsx
Copy
function Padre() {
  const handleClick = () => alert("Hijo notificado");
  return <Hijo onClick={handleClick} />;
}

function Hijo({ onClick }) {
  return <button onClick={onClick}>Presionar</button>;
}
```
## Buenas Prácticas

✅ Componentes pequeños y reutilizables.

✅ Evitar props excesivas (usar objetos o context).

✅ Usar PropTypes o TypeScript para validar props.

# Próximos Pasos (Avanzado)
Estado (useState, useReducer) → Manejo de datos dinámicos.

Efectos (useEffect) → Lógica asíncrona y side effects.

Context API → Estado global sin prop drilling.

Custom Hooks → Reutilizar lógica entre componentes.

Ejemplo Completo (Componente con JSX y Props)
```jsx
Copy
function TarjetaUsuario({ usuario }) {
  return (
    <div className="tarjeta">
      <h2>{usuario.nombre}</h2>
      <p>Edad: {usuario.edad}</p>
      <button onClick={() => alert(usuario.nombre)}>Saludar</button>
    </div>
  );
}

// Uso:
const usuario = { nombre: "Ana", edad: 30 };
<TarjetaUsuario usuario={usuario} />
```

# Tipos de Componentes en React
## A. Componentes funcionales (Recomendados)
Son funciones de JavaScript que retornan JSX. Se usan con hooks para manejar el estado y los efectos.

```jsx
import React from "react";

const Saludo = () => {
  return <h1>¡Hola, React!</h1>;
};

export default Saludo;
```
 Características:
- Más simples y fáciles de leer.
- Se recomienda su uso con hooks (useState, useEffect, etc.).
- Mejor rendimiento que los componentes de clase.

## B. Componentes de clase (Obsoletos)
Antes de React 16.8, los componentes de clase eran comunes, pero ahora se prefieren los funcionales con hooks.

```jsx
import React, { Component } from "react";

class Saludo extends Component {
  render() {
    return <h1>¡Hola, React!</h1>;
  }
}

export default Saludo;
```
📌 No recomendados en proyectos nuevos.

## Props (Propiedades)
Las props permiten pasar datos de un componente padre a un componente hijo.

```jsx
const Mensaje = ({ texto }) => {
  return <h2>{texto}</h2>;
};

// Uso del componente
<Mensaje texto="¡Hola, esto es una prop!" />;
```
📌 Importante:
- Las props son inmutables (no se pueden modificar dentro del componente).
- Se pueden pasar como valores de texto, números, booleanos, objetos, funciones, etc.

## Estado (useState)
El estado permite a un componente guardar y actualizar datos dinámicamente.

```jsx
import React, { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
};

export default Contador;
```
📌 Importante:
- useState devuelve un array con dos elementos: el valor del estado y la función para actualizarlo.
- No puedes modificar el estado directamente, siempre usa la función setEstado().

## Ciclo de vida con useEffect
El useEffect se usa para ejecutar código cuando cambia el estado o al montar/desmontar un componente.

```jsx
import React, { useState, useEffect } from "react";

const Temporizador = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    return () => clearInterval(intervalo); // Limpieza del efecto
  }, []);

  return <h2>Tiempo: {segundos} segundos</h2>;
};

export default Temporizador;
```
📌 Importante:
- useEffect sin dependencias [] se ejecuta una sola vez.
- Si pones una variable en [], se ejecuta cuando cambia esa variable.
- Si devuelves una función en useEffect, React la ejecuta al desmontar el componente (cleanup).

## Comunicación entre Componentes
A veces, los componentes necesitan comunicarse entre sí.

🔸 A. De padre a hijo (Props)
El padre envía datos al hijo con props.

```jsx
const Hijo = ({ mensaje }) => <h2>{mensaje}</h2>;

const Padre = () => <Hijo mensaje="¡Hola desde el padre!" />;
```
🔸 B. De hijo a padre (Funciones como props)
El hijo puede enviar datos al padre mediante una función pasada como prop.

```jsx
const Hijo = ({ enviarMensaje }) => {
  return <button onClick={() => enviarMensaje("Hola, padre!")}>Enviar</button>;
};

const Padre = () => {
  const recibirMensaje = (mensaje) => {
    alert(mensaje);
  };

  return <Hijo enviarMensaje={recibirMensaje} />;
};
```
🔸 C. Comunicación entre hermanos (Context API o estado global)
Si dos componentes hermanos necesitan comunicarse, es mejor usar Context API o Redux.

```jsx
import React, { createContext, useContext, useState } from "react";

const Contexto = createContext();

const Proveedor = ({ children }) => {
  const [mensaje, setMensaje] = useState("Mensaje compartido");

  return (
    <Contexto.Provider value={{ mensaje, setMensaje }}>
      {children}
    </Contexto.Provider>
  );
};

const ComponenteA = () => {
  const { mensaje } = useContext(Contexto);
  return <h2>{mensaje}</h2>;
};

const ComponenteB = () => {
  const { setMensaje } = useContext(Contexto);
  return <button onClick={() => setMensaje("Nuevo mensaje!")}>Cambiar</button>;
};

const App = () => (
  <Proveedor>
    <ComponenteA />
    <ComponenteB />
  </Proveedor>
);
```
📌 Importante:
- Context API permite compartir datos sin "prop drilling".
- Útil para temas, autenticación, etc.

## Componentes Avanzados
🔸 A. Componentes de orden superior (HOC)
Son funciones que reciben un componente y devuelven un nuevo componente con funcionalidades adicionales.

```jsx
const withEstilos = (Componente) => {
  return (props) => <div style={{ color: "blue" }}><Componente {...props} /></div>;
};

const Mensaje = ({ texto }) => <h2>{texto}</h2>;

const MensajeAzul = withEstilos(Mensaje);
```
🔸 B. Render Props
Permiten compartir lógica entre componentes usando una función en las props.

```jsx
const ProveedorDatos = ({ render }) => {
  const datos = "Hola desde Render Props";
  return render(datos);
};

const App = () => (
  <ProveedorDatos render={(datos) => <h2>{datos}</h2>} />
);
```
🔸 C. Lazy Loading (Carga diferida)
Permite cargar componentes de forma dinámica para mejorar el rendimiento.

```jsx
import React, { lazy, Suspense } from "react";

const ComponentePesado = lazy(() => import("./ComponentePesado"));

const App = () => (
  <Suspense fallback={<h2>Cargando...</h2>}>
    <ComponentePesado />
  </Suspense>
);
```

# Creación de la tienda (store)
Zustand usa un hook personalizado para manejar el estado.
Aquí tienes un ejemplo de un contador global:

```jsx
import { create } from "zustand";

// Creamos la tienda (store)
const useStore = create((set) => ({
  contador: 0,
  incrementar: () => set((state) => ({ contador: state.contador + 1 })),
  decrementar: () => set((state) => ({ contador: state.contador - 1 })),
  resetear: () => set({ contador: 0 }),
}));

export default useStore;
```
📌 Explicación:

create() define el estado global.

set() permite actualizar el estado.

incrementar, decrementar y resetear son funciones que modifican el estado.

## Uso en Componentes
📌 Ejemplo con un Contador Global
```jsx
import React from "react";
import useStore from "./store"; // Importamos la tienda

const Contador = () => {
  const { contador, incrementar, decrementar, resetear } = useStore();

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>➕ Incrementar</button>
      <button onClick={decrementar}>➖ Decrementar</button>
      <button onClick={resetear}>🔄 Resetear</button>
    </div>
  );
};

export default Contador;
```
✅ Ventajas de Zustand
- No necesitas Provider. Los componentes acceden directamente al store.
- Más rápido y eficiente que Redux y Context API.
- Código más limpio y fácil de entender.

## Estado Global con Objetos y Listas
Puedes manejar listas, objetos y más con Zustand.

📌 Ejemplo: Lista de Tareas (To-Do List)
```jsx
import { create } from "zustand";

// Definir la tienda (store)
const useToDoStore = create((set) => ({
  tareas: [],
  agregarTarea: (tarea) =>
    set((state) => ({ tareas: [...state.tareas, tarea] })),
  eliminarTarea: (id) =>
    set((state) => ({ tareas: state.tareas.filter((t) => t.id !== id) })),
}));

export default useToDoStore;
```
📌 Uso en el componente
```jsx
import React, { useState } from "react";
import useToDoStore from "./todoStore";

const ToDoList = () => {
  const { tareas, agregarTarea, eliminarTarea } = useToDoStore();
  const [nuevaTarea, setNuevaTarea] = useState("");

  return (
    <div>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <button
        onClick={() => {
          agregarTarea({ id: Date.now(), texto: nuevaTarea });
          setNuevaTarea("");
        }}
      >
        ➕ Agregar
      </button>

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.texto}{" "}
            <button onClick={() => eliminarTarea(tarea.id)}>❌ Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
```
## Middleware en Zustand
Zustand soporta middlewares como persistencia en localStorage.

📌 Ejemplo: Guardar el estado en LocalStorage
```jsx
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Estado persistente
const useStore = create(
  persist(
    (set) => ({
      contador: 0,
      incrementar: () => set((state) => ({ contador: state.contador + 1 })),
      resetear: () => set({ contador: 0 }),
    }),
    { name: "contador-storage" } // Guarda en localStorage
  )
);

export default useStore;
```
👉 Ahora, el estado se guarda y persiste al recargar la página.



# combinando Props con Destructuring y Children en React
Aquí tienes un ejemplo que combina el uso de destructuring de props con el uso de children en un componente React:

```jsx
import React from 'react';

// Componente Card que usa destructuring de props y children
const Card = ({ title, backgroundColor = 'white', children }) => {
  return (
    <div style={{
      backgroundColor,
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      margin: '10px'
    }}>
      {title && <h2>{title}</h2>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

// Componente principal que usa el componente Card
const App = () => {
  return (
    <div>
      <Card title="Tarjeta con título" backgroundColor="#f0f0f0">
        <p>Este es el contenido children de la primera tarjeta.</p>
        <button onClick={() => alert('Click!')}>Botón ejemplo</button>
      </Card>
      
      <Card>
        <p>Esta tarjeta no tiene título definido.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Card>
    </div>
  );
};

export default App;
```
Explicación:

Destructuring de props: En el componente Card, estamos extrayendo directamente title, backgroundColor (con valor por defecto 'white') y children de las props.

Children: El contenido que se pasa entre las etiquetas de apertura y cierre de `<Card>` se recibe automáticamente en la prop children.

Uso flexible:

En la primera Card pasamos título, color de fondo y children

En la segunda solo pasamos children (el título es opcional gracias a la verificación con &&)



## patrón `{title && <h2>{title}</h2>}` en React

Este es un patrón muy común en React que combina el operador lógico AND (&&) con JSX para renderizado condicional. Te explico cómo funciona:

**¿Qué hace exactamente?**

Esta expresión significa: "Si title existe (es truthy), entonces renderiza el `<h2>` con el título, de lo contrario no renderices nada".

 **Desglose detallado:**

Evaluación de la condición:

Primero React evalúa la parte izquierda del && (title en este caso)

Si title es null, undefined, false, 0, o una cadena vacía "", la expresión completa se evalúa como falsa

Comportamiento del operador &&:

En JavaScript, A && B retorna A si A es falsy

Retorna B si A es truthy

React no renderiza valores falsy (como false, null o undefined)

Ejemplo práctico:

```jsx
// Si title existe:
title = "Mi título"  // truthy
{title && <h2>{title}</h2>} → Renderiza: <h2>Mi título</h2>

// Si title no existe:
title = null  // falsy
{title && <h2>{title}</h2>} → No renderiza nada
```
**¿Por qué usar este patrón?**

Más limpio que el ternario:

- Alternativa con ternario: `{title ? <h2>{title}</h2> : null}`

- El operador && es más conciso cuando solo necesitas el caso "verdadero"

Evita renderizado innecesario:

- No crea un elemento vacío si la condición no se cumple

Muy común en React:

- Es un patrón estándar que todos los desarrolladores React reconocen

Casos de uso típicos:

Mostrar elementos opcionales:

```jsx
{isLoggedIn && <UserProfile />}
```
Renderizado condicional de datos:

```jsx
{product.price && <p>Precio: ${product.price}</p>}
```
Protección contra valores undefined:

```jsx
{user.address?.city && <p>Ciudad: {user.address.city}</p>}
```
Precauciones:
Cuidado con valores que podrían ser 0:

0 es falsy, por lo que no se renderizaría

Solución: `{title !== undefined && <h2>{title}</h2>}`

No usar para alternar entre dos elementos:

Para alternativas usa el operador ternario:

```jsx
{isLoading ? <Spinner /> : <Content />}
```
Este patrón es una herramienta fundamental en el desarrollo con React que te permite crear interfaces más dinámicas y limpias.

# Destructuring vs Props en React
Puedes usar destructuring siempre si así lo prefieres, de hecho es la práctica recomendada en la mayoría de casos. No hay necesidad de alternar entre ambos enfoques a menos que tengas razones específicas para hacerlo.

Por qué preferir destructuring siempre:
- Código más limpio: Elimina la repetición de props.

- Mejor legibilidad: Ves inmediatamente qué props usa el componente

- TypeScript/PropTypes: Facilita la documentación de tipos

- Valores por defecto: Puedes asignarlos directamente en el destructuring

Ejemplo comparativo:

Sin destructuring (menos recomendado):
```jsx
function Component(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {props.children}
    </div>
  );
}
```
Con destructuring (recomendado):
```jsx
function Component({ title, description, children }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );
}
```
Casos excepcionales donde podrías evitar destructuring:

Componentes que pasan todas las props:

```jsx
function Wrapper(props) {
  // Pasa todas las props al hijo sin modificarlas
  return <ChildComponent {...props} />;
}
```
Cuando necesitas el objeto props completo:

```jsx
function Button(props) {
  // Necesitas props para spread y también items individuales
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
}
```
Componentes de orden superior (HOCs):

```jsx
function withLogging(WrappedComponent) {
  return function LoggedComponent(props) {
    console.log('Props:', props);
    return <WrappedComponent {...props} />;
  };
}
```
Buenas prácticas con destructuring:

Para props opcionales, usa valores por defecto:

```jsx
function Component({ title = 'Título predeterminado', children }) {
  // ...
}
```
Puedes anidar destructuring:

```jsx
function UserCard({ user: { name, email }, children }) {
  // ...
}
```
Renombrar props al desestructurar:

```jsx
function Component({ title: headerText, children }) {
  // Usa headerText en lugar de title
}
```
Conclusión: Puedes (y probablemente deberías) usar destructuring en el 95% de los casos. Solo en situaciones muy específicas donde necesites manipular el objeto props completo tendría sentido no desestructurar inmediatamente.


# Casos de Uso de Destructuring Anidado y Renombrado en React
Los ejemplos 2 y 3 que mencioné son patrones avanzados pero bastante comunes en escenarios específicos. Vamos a analizar cada caso:

## Destructuring Anidado (Caso 2)
Cuándo se usa:

```jsx
function UserCard({ user: { name, email }, children }) {
  // Aquí usamos directamente name y email
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      {children}
    </div>
  );
}
```
Por qué es común:

Cuando trabajas con objetos complejos que vienen en props

Especialmente útil con datos de APIs que tienen estructuras anidadas

Evita tener que hacer user.name, user.email en todo el componente

Ejemplo práctico:

```jsx
// Uso del componente
<UserCard user={{ name: "María", email: "maria@ejemplo.com" }}>
  <button>Contactar</button>
</UserCard>
```
Ventajas:

Código más limpio al evitar repetir el nombre del objeto padre

Hace explícitas las propiedades que realmente usa el componente

## Renombrado de Props (Caso 3)
Cuándo se usa:

```jsx
function ProductCard({ name: productName, price: productPrice }) {
  return (
    <div>
      <h3>{productName}</h3>
      <p>Precio: ${productPrice}</p>
    </div>
  );
}
```
Por qué es común:

Cuando recibes props con nombres genéricos que podrían causar conflictos

Para dar más contexto semántico dentro del componente

Cuando trabajas con múltiples fuentes de datos que usan diferentes convenciones de nombres

Ejemplo práctico:

```jsx
// Supongamos que recibes datos de dos APIs diferentes
function UserProfile({ 
  user: { name: userName }, 
  account: { name: accountName } 
}) {
  // Evita conflicto entre user.name y account.name
  return (
    <div>
      <h2>Usuario: {userName}</h2>
      <p>Cuenta: {accountName}</p>
    </div>
  );
}
```
Ventajas:

Evita colisiones de nombres

Hace el código más auto-documentado

Permite adaptarte a diferentes convenciones de nombres sin modificar los datos originales

¿Qué tan comunes son estos patrones?

Patrón	Frecuencia	Casos típicos de uso
Destructuring anidado	Muy común (60-70% de componentes complejos)	Componentes que reciben objetos de datos (usuarios, productos, etc.)
Renombrado de props	Moderadamente común (30-40% de componentes)	Componentes que agregan lógica a datos crudos, HOCs, componentes que combinan múltiples fuentes de datos
Ejemplo combinando ambos patrones:
```jsx
function OrderSummary({
  order: { 
    id: orderId, 
    items: orderItems,
    total: orderTotal 
  },
  user: { name: userName },
  onComplete: handleComplete
}) {
  return (
    <div>
      <h2>Orden #{orderId} para {userName}</h2>
      <ul>
        {orderItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>Total: ${orderTotal}</p>
      <button onClick={handleComplete}>
        Completar orden
      </button>
    </div>
  );
}
```
Por qué este ejemplo es bueno:

Anida el destructuring para order y user

Renombra id a orderId para mayor claridad

Renombra onComplete a handleComplete (convención para handlers)

Mantiene el código limpio y autoexplicativo


# ¿Qué son los Hooks en React?
Los hooks son funciones especiales que te permiten usar características de React (como el estado o el ciclo de vida) sin escribir clases.

En lugar de hacer esto con clases:

```jsx
class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Contador: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Aumentar
        </button>
      </div>
    );
  }
}
```
🔽 Con hooks, es mucho más fácil 🔽

```jsx
import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  );
}
```
✅ Mismo resultado, menos código.

# 📌 Hooks Principales
## 1️⃣ useState (Estado)
Guarda y actualiza valores en el estado del componente.

```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Aumentar</button>
```


## 2️⃣ useEffect (Efectos y Ciclo de Vida)
Ejecuta código cuando el componente se monta, actualiza o desmonta.

```jsx
useEffect(() => {
  console.log("El componente se montó o actualizó");

  return () => {
    console.log("El componente se desmontó");
  };
}, []);
```
📌 Ejemplo: Llamar a una API cuando el componente se monta

```jsx
useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```
## 3️⃣ useContext (Contexto Global)
Permite compartir datos entre componentes sin pasar props.

```jsx
const TemaContext = React.createContext();

function App() {
  return (
    <TemaContext.Provider value="dark">
      <MiComponente />
    </TemaContext.Provider>
  );
}

function MiComponente() {
  const tema = useContext(TemaContext);
  return <p>El tema es {tema}</p>;
}
```
## 4️⃣ useRef (Referencias a elementos)
Permite acceder a un elemento HTML sin causar re-render.

```jsx
const inputRef = useRef(null);

<button onClick={() => inputRef.current.focus()}>Focus</button>
<input ref={inputRef} />
```
## 5️⃣ useReducer (Estado Complejo)
Alternativa a useState, útil para estados más complejos.

```jsx
function reducer(state, action) {
  if (action.type === "incrementar") return { count: state.count + 1 };
  return state;
}

const [state, dispatch] = useReducer(reducer, { count: 0 });

<button onClick={() => dispatch({ type: "incrementar" })}>Aumentar</button>
```
# 📌 Hooks Avanzados
## 6️⃣ useMemo (Memorizar Cálculos)
Optimiza cálculos pesados para que no se recalculen en cada render.

```jsx
const resultado = useMemo(() => calcularValor(algo), [algo]);
```
## 7️⃣ useCallback (Memorizar Funciones)
Evita que las funciones cambien de referencia en cada render.

```jsx
const miFuncion = useCallback(() => hacerAlgo(valor), [valor]);
```
## 🎯 Resumen
|Hook	|¿Para qué sirve?|
|-|-|
|useState	|Manejo de estado|
|useEffect	|Código al montar/actualizar|
|useContext	|Compartir datos sin props|
|useRef	|Acceder a elementos HTML|
|useReducer	|Estado complejo|
|useMemo	|Optimizar cálculos|
|useCallback	|Optimizar funciones|
---

# ¿Qué pasa con los otros hooks cuando usas Zustand?

| Hook de React |¿Sigue siendo necesario con Zustand?	| Explicación |
|-|-| -|
|useState|	❌ No	|Zustand ya gestiona el estado global.|
|useReducer|	❌ No	|Zustand maneja lógica compleja de estado sin useReducer.|
|useContext|	❌ No	|No necesitas useContext para compartir estado.|
|useEffect|	✅ Sí	|Se usa para efectos secundarios (ej. fetch de datos).|
|useRef|	✅ Sí	|Para referencias a elementos del DOM.|
|useMemo / useCallback	|✅ Sí	|Para optimización de rendimiento en cálculos y funciones.|

 ✅ Conclusión: Zustand elimina la necesidad de useState, useReducer y useContext, pero aún necesitarás hooks como useEffect y useRef para efectos secundarios y referencias al DOM.

---
## 📌 Comparación: React Hooks vs. Zustand vs. TanStack Query
|Hook de React	|Alternativa con Zustand	|Alternativa con TanStack Query|
|-|-|-|
|useState	|✅ Zustand (useStore) para estado global	|❌ No aplica|
|useEffect	|❌ Evitar si es para estado global (usar Zustand)	|✅ Prefetching de datos|
|useContext	|✅ Zustand para compartir datos	|❌ No aplica|
|useReducer	|✅ Zustand (set)	|❌ No aplica|
|useMemo	|✅ Zustand (computed values)	|✅ TanStack Query (select)|
|useCallback	|✅ Zustand (actions)	|❌ No aplica|

✅ Zustand → Para estado global y acciones.
✅ TanStack Query → Para obtener y almacenar datos asíncronos (API, base de datos).

## 🎣 1️⃣ useState → Zustand
📌 En vez de manejar estado local con useState, úsalo con Zustand si el estado es global.

Ejemplo con useState (React)
```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Aumentar</button>
```
Ejemplo con Zustand
```jsx
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));

function Contador() {
  const { count, increase } = useStore();

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increase}>Aumentar</button>
    </div>
  );
}
```
✅ Ventaja: Estado global, sin necesidad de useContext.

## 🎣 2️⃣ useEffect → TanStack Query
📌 useEffect se usa mucho para obtener datos. ¡Mejor usa TanStack Query!

Ejemplo con useEffect (React)
```jsx
const [data, setData] = useState([]);

useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((data) => setData(data.results));
}, []);
```
Ejemplo con TanStack Query
```jsx
import { useQuery } from "@tanstack/react-query";

async function fetchPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  return res.json();
}

function ListaPokemon() {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
  });

  if (isLoading) return <p>Cargando...</p>;

  return (
    <ul>
      {data.results.map((poke) => (
        <li key={poke.name}>{poke.name}</li>
      ))}
    </ul>
  );
}
```
✅ Ventaja: Automáticamente cachea y revalida los datos.

## 🎣 3️⃣ useContext → Zustand
📌 Si usas useContext para estado global, es mejor usar Zustand.

Ejemplo con useContext (React)
```jsx
const TemaContext = React.createContext();

function App() {
  return (
    <TemaContext.Provider value="dark">
      <MiComponente />
    </TemaContext.Provider>
  );
}

function MiComponente() {
  const tema = useContext(TemaContext);
  return <p>El tema es {tema}</p>;
}
```
Ejemplo con Zustand
```jsx
const useTemaStore = create((set) => ({
  tema: "dark",
  cambiarTema: () =>
    set((state) => ({ tema: state.tema === "dark" ? "light" : "dark" })),
}));

function MiComponente() {
  const { tema, cambiarTema } = useTemaStore();

  return (
    <div>
      <p>El tema es {tema}</p>
      <button onClick={cambiarTema}>Cambiar Tema</button>
    </div>
  );
}
```
✅ Ventaja: Menos boilerplate, no necesitas useContext.

## 🎣 4️⃣ useReducer → Zustand
📌 useReducer se usa para estados complejos, pero Zustand es más simple.

Ejemplo con useReducer (React)
```jsx
function reducer(state, action) {
  if (action.type === "incrementar") return { count: state.count + 1 };
  return state;
}

const [state, dispatch] = useReducer(reducer, { count: 0 });

<button onClick={() => dispatch({ type: "incrementar" })}>Aumentar</button>
```
Ejemplo con Zustand
```jsx
const useStore = create((set) => ({
  count: 0,
  aumentar: () => set((state) => ({ count: state.count + 1 })),
}));

<button onClick={() => useStore.getState().aumentar()}>Aumentar</button>
```
✅ Ventaja: No necesitas escribir reducers.

## 🎣 5️⃣ useMemo → TanStack Query
📌 useMemo se usa para evitar cálculos innecesarios. TanStack Query lo hace mejor.

Ejemplo con useMemo (React)
```jsx
const usuariosFiltrados = useMemo(() => {
  return usuarios.filter((u) => u.edad > 18);
}, [usuarios]);
```
Ejemplo con TanStack Query (select para filtrar)
```jsx
const { data: usuarios } = useQuery({
  queryKey: ["usuarios"],
  queryFn: fetchUsuarios,
  select: (data) => data.filter((u) => u.edad > 18),
});
```
✅ Ventaja: Optimización automática.

## 🎣 6️⃣ useCallback → Zustand
📌 Si usas useCallback para evitar recrear funciones, Zustand lo maneja automáticamente.

Ejemplo con useCallback (React)
```jsx
const handleClick = useCallback(() => {
  console.log("Clickeado");
}, []);
```
Ejemplo con Zustand (No necesitas useCallback)
```jsx
const useStore = create((set) => ({
  handleClick: () => console.log("Clickeado"),
}));

<button onClick={useStore.getState().handleClick}>Click</button>
```
✅ Ventaja: No necesitas useCallback.

🎯 Conclusión: ¿Cuándo usar Zustand o TanStack Query?
- 📌 Zustand → Para manejar estado global (mejor que useState y useContext).
- 📌 TanStack Query → Para manejar datos externos (mejor que useEffect).

- 🔹 Si tu estado es local y simple → useState está bien.
- 🔹 Si necesitas compartir estado global → Usa Zustand.
- 🔹 Si obtienes datos de una API → Usa TanStack Query.
---
# 🚀 ¿Cuándo useState es reemplazado por Zustand o TanStack Query?
|Caso de uso	|Antes: useState	|Ahora: Zustand / TanStack|
|-|-|-|
|Estado local en un solo componente.|	✅ useState	|✅ Se puede seguir usando.|
|Estado global (ej. tema oscuro, usuario autenticado).|	⚠ useState + useContext|	✅ Zustand.|
|Datos de API externa (fetch).	|⚠ useState + useEffect	|✅ TanStack Query.|
|Datos de API que se actualizan frecuentemente.|	⚠ useState con useEffect manualmente.|	✅ TanStack Query con caché y refetch automático.|
|Estado complejo (tipo useReducer).|	⚠ useReducer|	✅ Zustand.|

🎯 Reglas simples para recordar

1️⃣ Usa useState si el estado es simple y solo lo usa un componente.

2️⃣ Usa Zustand si el estado se comparte entre varios componentes (estado global).

3️⃣ Usa TanStack Query para datos de API en lugar de useState + useEffect.

🔹 Ejemplo:
- Si tienes un contador dentro de un solo botón, usa useState.
- Si el contador debe ser global y usarse en varias partes de la app, usa Zustand.
- Si el contador viene de una API, usa TanStack Query.

## 🔥 Ejemplo práctico comparando las 3 formas
### 1️⃣ Usando useState (Solo local)
```jsx
import { useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Contador: {count}
    </button>
  );
}
```
✔ Se usa solo dentro de este componente.

❌ Si otro componente necesita el mismo contador, hay que pasarlo como prop.

### 2️⃣ Usando Zustand (Estado Global)
```jsx
import { create } from "zustand";

// Store global
const useStore = create((set) => ({
  count: 0,
  incrementar: () => set((state) => ({ count: state.count + 1 })),
}));

export default function Contador() {
  const { count, incrementar } = useStore();

  return (
    <button onClick={incrementar}>
      Contador: {count}
    </button>
  );
}
```
✔ Varios componentes pueden acceder al estado sin props.

✔ Si tienes otro componente en la app, también tendrá el mismo valor de count.

### 3️⃣ Usando TanStack Query (Datos desde una API)
```jsx
import { useQuery } from "@tanstack/react-query";

export default function ContadorAPI() {
  const { data, isLoading } = useQuery({
    queryKey: ["contador"],
    queryFn: async () => {
      const res = await fetch("https://api.example.com/contador");
      return res.json();
    },
  });

  if (isLoading) return <p>Cargando...</p>;

  return <p>Contador desde API: {data.count}</p>;
}
```
✔ No usa useState, porque los datos vienen de una API.

✔ Caché automático, evita hacer fetch innecesarios.

✔ Se vuelve a actualizar si la API cambia.

### 🏆 Conclusión

🔹 ¿El estado es solo para este componente? Usa useState.

🔹 ¿Varios componentes necesitan el mismo estado? Usa Zustand.

🔹 ¿Los datos vienen de una API? Usa TanStack Query.



| Herramienta |	¿Para qué la usamos? |	Ejemplo en el código |
| --- | --- | --- |
|useState	|Estado local del input de búsqueda.|	const [search, setSearch] = useState("");|
|Zustand|	Estado global para favoritos.|	const { favoritos, agregarFavorito } = usePokemonStore();|
|TanStack Query	|Fetch de datos desde la API.|	useQuery({ queryKey: ["pokemon", search], queryFn: async () => {...} })|

- ✅ useState = Para manejar el input de búsqueda.
- ✅ Zustand = Para compartir los favoritos en toda la app.
- ✅ TanStack Query = Para traer datos de la API sin usar useEffect.