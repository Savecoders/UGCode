---
draft: false
title: "Como convertirse en un maestro iterrando Arrays"
snippet: "Este post es una guia para convertirse en un maestro de los arrays en js"
image: {
    src: "https://res.cloudinary.com/practicaldev/image/fetch/s--uOf-ZZBx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ofsfitt66qun2bw0vvtz.jpg",
    alt: "frontend master"
}
publishDate: "2022-11-07 15:39"
category: "Tutorials"
author: "Ricardo Villamar"
tags: [astro, javascript, frontend]
---
Los arrays son estrucuras de datos bastante usadas en js, recorrerlos o iterarlos es bastante sencillo, a continuacíon algunas maneras que puedes usar en tus proyectos.

Los arrays de ejemplo para todos los casos seran los siguientes:

```javascript
const arrayPaises = ["Bolivia","Ecuador","Francia","Brasil","Holanda"];
const arrayPrimos = [2,3,5,7,11,13];
const arrayPersona = [
  {
    nombre: "Carlos",
    edad: 23
  },
  {
    nombre:"Susana",
    edad: 33
  },
  {
    nombre:"Pedro",
    edad:28
  }
];
```

### 1.Usando un ciclo for tradicional

```javascript
const recorreArray = (arr) => {
  for(let i=0; i<=arr.length-1; i++){
  console.log(arr[i]);
  }
}

recorreArray(arrayPaises);
recorreArray(arrayPrimos);
recorreArray(arrayPersona);
```

### 2. Usando un while tradicional

```javascript
const recorreArray = arr => {
  let i = 0;
  while(i<=arr.length-1){
    console.log(arr[i])
    i++;
  }

}

recorreArray(arrayPaises);
recorreArray(arrayPrimos);
recorreArray(arrayPersona);

```

### 3. Usando un do...while tradicional

```javascript
const recorreArray = arr => {
  let i = 0;
  do{
    console.log(arr[i])
    i++;
  }while(i<=arr.length-1);

}

recorreArray(arrayPaises);
recorreArray(arrayPrimos);
recorreArray(arrayPersona);

```

### 4. Usando un for...of

```javascript
const recorreArray = arr => {
  for(const item of arr){
    console.log(item);
  }
}
```

### 5. Usando la función forEach()

```javascript
const recorreArray = arr => arr.forEach(item => {
  console.log(item);
});

recorreArray(arrayPaises);
recorreArray(arrayPrimos);
recorreArray(arrayPersona);

```
