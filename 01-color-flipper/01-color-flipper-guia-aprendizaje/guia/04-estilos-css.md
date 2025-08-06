# Estilos CSS en el Proyecto Color Flipper

En este archivo, exploraremos los estilos CSS utilizados en el proyecto "Color Flipper". Los estilos son fundamentales para definir la apariencia visual de la aplicación y mejorar la experiencia del usuario. A continuación, se describen los principales aspectos de los estilos CSS implementados.

## 1. Estructura de los Estilos

Los estilos CSS se encuentran en el archivo `styles.css`, que se vincula a los archivos HTML del proyecto. Este archivo contiene reglas que afectan a diferentes elementos de la interfaz de usuario.

## 2. Fuentes

Se utiliza la fuente "Roboto" de Google Fonts para proporcionar un aspecto moderno y legible. La importación de la fuente se realiza al inicio del archivo CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
```

## 3. Estilos Globales

Se definen estilos globales para asegurar una presentación coherente en toda la aplicación. Esto incluye la configuración de márgenes, padding y el modelo de caja:

```css
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

## 4. Estilos del Cuerpo

El cuerpo de la aplicación tiene un fondo claro y se centra en la pantalla. Se aplican estilos para mejorar la legibilidad:

```css
body {
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f1f5f8;
  transition: background-color 0.5s ease;
  line-height: 1.5;
}
```

## 5. Contenedor Principal

El contenedor principal de la aplicación está diseñado para ser atractivo y centrado. Se aplican bordes redondeados y sombras para darle un efecto de profundidad:

```css
.container {
  text-align: center;
  background: #ffffff;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

## 6. Botones

Los botones tienen un diseño moderno con transiciones suaves al pasar el mouse. Esto mejora la interactividad:

```css
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
```

## 7. Colores

Los colores de fondo y del texto se cambian dinámicamente mediante JavaScript, lo que permite una experiencia interactiva. Los estilos CSS iniciales establecen un color de texto predeterminado:

```css
.color {
  font-weight: bold;
  color: #007bff;
  font-size: 1.2em;
}
```

## 8. Conclusión

Los estilos CSS son esenciales para la presentación de la aplicación "Color Flipper". A través de la utilización de fuentes, colores, y diseño responsivo, se logra una interfaz atractiva y funcional. A medida que avances en el proyecto, puedes experimentar con diferentes estilos y efectos para personalizar aún más la apariencia de la aplicación.