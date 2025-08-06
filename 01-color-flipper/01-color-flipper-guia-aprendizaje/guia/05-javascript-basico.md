# Fundamentos de JavaScript

JavaScript es un lenguaje de programación fundamental para el desarrollo web. En este archivo, exploraremos los conceptos básicos de JavaScript que son esenciales para el proyecto de cambio de color. A continuación, se presentan los temas clave que cubriremos:

## 1. Variables

Las variables son contenedores que almacenan datos. En JavaScript, puedes declarar variables utilizando `var`, `let` o `const`. 

- `var`: Se utiliza para declarar variables que pueden ser reasignadas y tienen un alcance global o de función.
- `let`: Se utiliza para declarar variables que pueden ser reasignadas y tienen un alcance de bloque.
- `const`: Se utiliza para declarar variables que no pueden ser reasignadas.

Ejemplo:
```javascript
let color = "red";
const pi = 3.14;
```

## 2. Tipos de Datos

JavaScript tiene varios tipos de datos, incluyendo:

- **Números**: Representan valores numéricos.
- **Cadenas**: Representan texto y se definen entre comillas.
- **Booleanos**: Representan valores de verdadero o falso.
- **Objetos**: Colecciones de propiedades y métodos.
- **Arreglos**: Listas ordenadas de valores.

Ejemplo:
```javascript
let numero = 10; // Número
let texto = "Hola, mundo"; // Cadena
let esVerdadero = true; // Booleano
let colores = ["rojo", "verde", "azul"]; // Arreglo
```

## 3. Funciones

Las funciones son bloques de código que se pueden reutilizar. Se pueden definir utilizando la palabra clave `function`.

Ejemplo:
```javascript
function cambiarColor(nuevoColor) {
    document.body.style.backgroundColor = nuevoColor;
}
```

## 4. Estructuras de Control

Las estructuras de control permiten tomar decisiones en el código. Las más comunes son:

- **Condicionales**: `if`, `else if`, `else` permiten ejecutar código basado en condiciones.
- **Bucles**: `for`, `while` permiten repetir un bloque de código varias veces.

Ejemplo:
```javascript
if (color === "rojo") {
    console.log("El color es rojo");
} else {
    console.log("El color no es rojo");
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## 5. Interacción con el DOM

JavaScript se utiliza para interactuar con el Document Object Model (DOM), lo que permite manipular el contenido y la estructura de la página web. Por ejemplo, puedes cambiar el color de fondo de la página utilizando:

```javascript
document.body.style.backgroundColor = "blue";
```

## Conclusión

Estos son los fundamentos de JavaScript que necesitarás para desarrollar el proyecto de cambio de color. A medida que avances, practicarás estos conceptos y aprenderás a aplicarlos en situaciones reales.