# Manipulación del DOM con JavaScript

La manipulación del DOM (Document Object Model) es una parte fundamental del desarrollo web, ya que permite interactuar y modificar la estructura de una página web de manera dinámica. En este archivo, exploraremos cómo utilizar JavaScript para manipular el DOM en el contexto de nuestro proyecto de cambio de color.

## ¿Qué es el DOM?

El DOM es una representación estructurada de un documento HTML. Cada elemento del HTML se convierte en un objeto que puede ser manipulado mediante JavaScript. Esto incluye elementos como `<div>`, `<p>`, `<button>`, y otros.

## Accediendo a Elementos del DOM

Para manipular elementos del DOM, primero necesitamos acceder a ellos. Esto se puede hacer utilizando métodos como:

- `document.getElementById(id)`: Accede a un elemento por su ID.
- `document.querySelector(selector)`: Accede al primer elemento que coincide con el selector CSS proporcionado.
- `document.querySelectorAll(selector)`: Accede a todos los elementos que coinciden con el selector CSS.

### Ejemplo

En nuestro proyecto, accedemos al botón y al elemento que muestra el color actual de la siguiente manera:

```javascript
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
```

## Modificando Elementos del DOM

Una vez que hemos accedido a un elemento, podemos modificar sus propiedades. Algunas de las propiedades más comunes que podemos cambiar son:

- `style`: Permite cambiar los estilos CSS del elemento.
- `textContent`: Cambia el texto dentro del elemento.
- `classList`: Permite agregar, eliminar o alternar clases CSS.

### Ejemplo

En nuestro proyecto, cambiamos el color de fondo de la página y el texto que muestra el color actual de la siguiente manera:

```javascript
document.body.style.backgroundColor = newColor;
color.textContent = newColor;
```

## Creando y Eliminando Elementos

También podemos crear nuevos elementos y eliminarlos del DOM. Para crear un nuevo elemento, utilizamos `document.createElement(tagName)`, y para eliminar un elemento, utilizamos `element.remove()`.

### Ejemplo de Creación

```javascript
const newElement = document.createElement("div");
newElement.textContent = "Este es un nuevo elemento";
document.body.appendChild(newElement);
```

### Ejemplo de Eliminación

```javascript
const elementToRemove = document.getElementById("elementId");
elementToRemove.remove();
```

## Conclusión

La manipulación del DOM es esencial para crear aplicaciones web interactivas. En nuestro proyecto de cambio de color, utilizamos JavaScript para acceder y modificar elementos del DOM, lo que nos permite cambiar dinámicamente el color de fondo y mostrar el color actual al usuario. A medida que avances en el desarrollo, experimentarás más con estas técnicas para crear experiencias de usuario más ricas y dinámicas.