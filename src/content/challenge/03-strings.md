---
draft: false
topic: "Strings y cadenas de texto"
title: "Strings"
difficulty: "Fácil"
image:
  {
    src: "https://lp2m.uma.ac.id/wp-content/uploads/2022/04/analisis.jpg",
    alt: "Iterrando arreglos uni-dimensionales",
  }
author: "Pablo Pincay Alvarez"
description: "manipulando strings/cadenas de texto"
publishDate: "2023-03-05 08:50"
---

Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _delante de la palabra, por ejemplo_playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

```javascript
const carta = 'bici coche balón _playstation bici coche peluche'
```

Al ejecutar el método debería devolver lo siguiente:

```javascript
const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/

```
