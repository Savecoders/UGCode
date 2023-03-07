---
draft: false
topic: "Arreglos y matrices"
title: "Iterrando arreglos uni-dimensionales"
difficulty: "Fácil"
image:
  {
    src: "https://www.nuntiumcomunicacion.com/wp-content/uploads/2021/06/analisis-contenido-blog.png",
    alt: "Iterrando arreglos uni-dimensionales",
  }
author: "Pablo Pincay Alvarez"
description: "manipulando arreglos uni-dimensionales"
publishDate: "2023-03-05 11:50"
---

Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:

```javascript
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

```

Al ejecutar el método debería devolver lo siguiente:

```javascript
const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```
