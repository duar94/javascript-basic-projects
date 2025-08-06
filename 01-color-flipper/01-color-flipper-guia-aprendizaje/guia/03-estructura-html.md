# Estructura HTML del Proyecto Color Flipper

En este documento, se detalla la estructura HTML del proyecto "Color Flipper". A continuación, se explican las diferentes partes del código HTML y su función en la aplicación.

## 1. Estructura Básica

Cada archivo HTML comienza con una declaración de tipo de documento y una estructura básica que incluye las etiquetas `<html>`, `<head>`, y `<body>`. A continuación se muestra un ejemplo de la estructura básica utilizada en el proyecto:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color Flipper || Simple</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
    <!-- Contenido aquí -->
</body>
</html>
```

### Desglose de las Secciones

- **`<!DOCTYPE html>`**: Indica que el documento es un archivo HTML5.
- **`<html lang="en">`**: Define el inicio del documento HTML y establece el idioma como inglés.
- **`<head>`**: Contiene metadatos sobre el documento, como el conjunto de caracteres y el título de la página.
- **`<body>`**: Contiene el contenido visible de la página.

## 2. Contenido del Cuerpo

Dentro del `<body>`, se organiza el contenido de la aplicación. En el proyecto "Color Flipper", se incluye un contenedor principal que alberga un título, un botón y un párrafo que muestra el color actual. Aquí hay un ejemplo:

```html
<div class="container">
    <h1>Color flipper</h1>
    <button class="btn" id="btn">Cambiar color</button>
    <p>Color actual: <span class="color">#FFFFFF</span></p>
</div>
```

### Desglose del Contenido

- **`<div class="container">`**: Un contenedor que agrupa el contenido y aplica estilos.
- **`<h1>`**: El título principal de la aplicación.
- **`<button>`**: Un botón que, al hacer clic, cambiará el color de fondo.
- **`<p>`**: Un párrafo que muestra el color actual, con un `<span>` que se actualizará dinámicamente.

## 3. Inclusión de Scripts

Al final del archivo HTML, se incluye el script de JavaScript que controla la lógica de la aplicación. Esto se hace mediante la etiqueta `<script>`:

```html
<script src="app.js"></script>
```

Esto asegura que el script se cargue después de que el contenido del cuerpo haya sido procesado, permitiendo que los elementos del DOM estén disponibles para la manipulación.

## Conclusión

La estructura HTML del proyecto "Color Flipper" es sencilla y está diseñada para ser fácil de entender y modificar. Cada parte del código tiene un propósito específico que contribuye a la funcionalidad general de la aplicación. A medida que avances en el desarrollo, podrás agregar más elementos y características a esta estructura básica.