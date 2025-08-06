# Conceptos Básicos

En este documento, cubriremos los conceptos fundamentales de HTML, CSS y JavaScript que son esenciales para entender y desarrollar el proyecto de cambio de color. Estos conceptos son la base sobre la cual se construirá la aplicación y son cruciales para su correcto funcionamiento.

## HTML (HyperText Markup Language)

HTML es el lenguaje de marcado utilizado para estructurar el contenido en la web. A continuación, se presentan algunos conceptos básicos:

- **Etiquetas**: HTML utiliza etiquetas para definir elementos. Por ejemplo, `<h1>` se utiliza para encabezados, `<p>` para párrafos y `<div>` para contenedores.
- **Atributos**: Las etiquetas pueden tener atributos que proporcionan información adicional. Por ejemplo, `<img src="imagen.jpg" alt="Descripción de la imagen">`.
- **Estructura básica**: Un documento HTML comienza con la declaración `<!DOCTYPE html>` y contiene elementos como `<html>`, `<head>` y `<body>`.

## CSS (Cascading Style Sheets)

CSS es el lenguaje utilizado para describir la presentación de un documento HTML. Aquí hay algunos conceptos clave:

- **Selectores**: Los selectores se utilizan para seleccionar elementos HTML que se desean estilizar. Por ejemplo, `h1` selecciona todos los encabezados de nivel 1.
- **Propiedades y valores**: CSS se compone de propiedades y valores. Por ejemplo, `color: red;` establece el color del texto en rojo.
- **Modelo de caja**: Cada elemento en HTML se considera una caja que tiene márgenes, bordes, relleno y contenido.

## JavaScript

JavaScript es un lenguaje de programación que permite agregar interactividad a las páginas web. Algunos conceptos básicos incluyen:

- **Variables**: Se utilizan para almacenar datos. Por ejemplo, `let color = "red";`.
- **Funciones**: Las funciones son bloques de código que se pueden ejecutar cuando se les llama. Por ejemplo:
  ```javascript
  function cambiarColor() {
      document.body.style.backgroundColor = "blue";
  }
  ```
- **Eventos**: JavaScript puede responder a eventos, como clics de botones. Por ejemplo:
  ```javascript
  const btn = document.getElementById("btn");
  btn.addEventListener("click", cambiarColor);
  ```

## Conclusión

Comprender estos conceptos básicos de HTML, CSS y JavaScript es fundamental para desarrollar la aplicación de cambio de color. A medida que avances en el proyecto, aplicarás estos conocimientos para crear una experiencia interactiva y visualmente atractiva.