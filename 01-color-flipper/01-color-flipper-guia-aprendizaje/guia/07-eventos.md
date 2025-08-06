# Gestión de Eventos en JavaScript

En este documento, exploraremos cómo manejar eventos en JavaScript, lo cual es fundamental para crear aplicaciones interactivas. Los eventos son acciones que ocurren en el navegador, como clics de mouse, teclas presionadas, movimientos del mouse, entre otros. A continuación, se detallan los conceptos clave sobre la gestión de eventos.

## 1. ¿Qué son los eventos?

Los eventos son acciones que pueden ser detectadas por el navegador. Por ejemplo, cuando un usuario hace clic en un botón, se genera un evento de clic. JavaScript permite a los desarrolladores escuchar y responder a estos eventos.

## 2. Escuchar eventos

Para responder a un evento, primero debemos "escuchar" el evento en un elemento específico del DOM. Esto se hace utilizando el método `addEventListener()`. Este método toma dos argumentos: el tipo de evento que queremos escuchar y una función que se ejecutará cuando ocurra el evento.

### Ejemplo:

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    alert("¡Botón clickeado!");
});
```

En este ejemplo, cuando el botón con el ID `btn` es clickeado, se mostrará una alerta.

## 3. Tipos de eventos comunes

Algunos de los eventos más comunes que puedes manejar son:

- `click`: Se activa cuando un elemento es clickeado.
- `mouseover`: Se activa cuando el mouse se mueve sobre un elemento.
- `mouseout`: Se activa cuando el mouse sale de un elemento.
- `keydown`: Se activa cuando una tecla es presionada.
- `keyup`: Se activa cuando una tecla es liberada.

## 4. Pasar parámetros a la función del evento

A veces, es posible que desees pasar parámetros a la función que maneja el evento. Esto se puede hacer utilizando una función anónima o una función de flecha.

### Ejemplo:

```javascript
btn.addEventListener("click", function() {
    cambiarColor("red");
});

function cambiarColor(color) {
    document.body.style.backgroundColor = color;
}
```

En este caso, al hacer clic en el botón, el color de fondo cambiará a rojo.

## 5. Remover eventos

Si en algún momento necesitas dejar de escuchar un evento, puedes usar el método `removeEventListener()`. Para esto, debes pasar la misma función que usaste para agregar el evento.

### Ejemplo:

```javascript
function manejarClick() {
    alert("¡Botón clickeado!");
}

btn.addEventListener("click", manejarClick);

// Para remover el evento
btn.removeEventListener("click", manejarClick);
```

## 6. Conclusión

La gestión de eventos es una parte esencial del desarrollo web interactivo. Al aprender a escuchar y responder a eventos, puedes crear aplicaciones más dinámicas y atractivas para los usuarios. En el siguiente documento, exploraremos cómo generar números aleatorios, que se utilizarán para seleccionar colores aleatorios en nuestra aplicación de cambio de color.