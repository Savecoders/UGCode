---
draft: false
title: " Introducción a las Estructuras de Datos y Algoritmos Esenciales"
snippet: "Este artículo intenta enumerar las estructuras de datos integradas disponibles en JavaScript y las propiedades que tienen."
image: {
    src: "https://w10.naukri.com/mailers/2022/naukri-learning/what-is/What-is-Data-Structures-and-Algorithms.jpg",
    alt: "data structures & algorithms"
}
publishDate: "2023-01-09 16:39"
category: "Courses"
author: "Pablo Pincay Alvarez"
tags: [webdev, javascript, data structures, algorithms]
---

Una estructura de datos es una forma que tenemos de guardar elementos en el ordenador, de tal forma que podemos acceder, crear y eliminar datos de una forma eficiente dependiendo de cada caso. Por ejemplo una lista es una estructura de datos, y una cola también.

Normalmente cuando se explican las estructura de datos, se usa un lenguaje con punteros como C o Java para sus implementaciones, ya que es la manera más eficiente que existe.

Para este caso, voy a explicar las estructuras en Javascript, que, aunque no tiene punteros, nos sirve para saber cómo se crean sus implementaciones.

Vamos con las implementaciones de algunas estructuras básicas.

### Listas enlazadas

Una lista enlazada, es una tipo de lista de elementos en los que cada elemento tiene almacenado la dirección del siguiente elemento de la lista, de tal forma que si queremos acceder a un elemento en particular tenemos que empezar por el primer elemento para recorrer uno a uno hasta llegar al item deseado.

![linked list](https://i.imgur.com/upOnAAj.png)

#### Características

Insertar nodos por el inicio de la lista es inmediato
Buscar un elemento en la lista tiene complejidad 0(n)
Puede servir de base para implementar pilas y colas
Borrar el primer elemento de la lista también es inmediato
Si la lista no guarda el úlitmo elemento, insertar elementos por el final de la lista tiene complejidad O(n)

Empecemos por algo sencillo, una lista enlazada con una variable que nos diga qué nodo es el primer nodo de la lista. Con esto es suficiente para la lista porque teniendo el primer nodo si quieres recorrer la lista tan solo tienes que ir pasando de elemento en elemento accediendo a su valor next.

```javascript
class LinkedListItem {
  constructor(value, next) {
    this.value = value;
    this.next = next;  
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value) {
    const newItem = new LinkedListItem(value, this.head);
    this.head = newItem;
  }
}

```

Lo primero que hago es crear la clase LinkedListItem que será cada uno de los elementos de la lista que estamos creando. Dentro de esta clase, en el constructor, se define el propio valor que guardará cada elemento de la lista y un valor llamado next para acceder al siguiente valor.

Luego creo la clase LinkedList propiamente dicha, que simplemente guardará el primer item de la lista. También creo la función prepend ya que en este tipo de listas lo mejor es insertar nodos por la cabecera de la lista ya que es lo más óptimo.

La función prepend lo que hace es recibir el valor a guardar y con ese valor se crea un elemento de la clase LinkedListItem que hemos creado antes pasando el value y el elemento head que esté guardado en ese momento. Como insertamos por el principio de la lista, la idea es que el nuevo elemento que se crea tenga como valor next el primer nodo de la lista. Por último se hace que ahora el valor head pase a valer el nodo que hemos creado, así actualizamos el primer nodo de la lista.

Pasemos ahora a la función find que buscará y devolverá el item de la lista con un valor dado.

```javascript
find(value) {
  if (!this.head) {
    return null;
  }
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
}
```

Esta función lo primero que hace es comprobar si la lista es vacía, es decir, si no existe el primer elemento de la lista, el elemento head, en ese caso se devuelve null.

Luego se hace un loop while para recorrer la lista, para ello se selecciona el primer elemento de la lista, se mira si su valor es el que estamos buscando para devolverlo en ese caso y si no es el que buscamos pasamos al siguiente elemento cambiando currentNode por el elemento next que esté apuntando.

Para estos ejemplos estamos buscando los elementos dentro de la lista por su valor, lo suyo sería tener un parámetro id para hacer las búsquedas y que el parámetro value sea un objeto con el valor que quieres guardar.

También podemos crear una función deleteHead para borrar elementos por la cabecera, ya que es lo más óptimo en este tipo de listas.

```javascript
deleteHead() {
  if (this.head) {
    if (this.head.next) {
      const secondNode = this.head.next;
      this.head = secondNode;
    } else {
      this.head = null;
   }
  }
}

```

Lo primero es comprobar si la lista no tiene cabecera y por tanto está vacía, en ese caso no hacemos nada. Si la lista tiene items lo primero es ver si la cabecera tiene un parámetro next con valor, es decir, para ver si la lista tiene más de dos items. Si es ese caso entonces accedemos a ese segundo item para que sea la nueva cabecera. Si la lista solo tiene un item en ese caso hacemos que la cabecera valga null para que sea una lista vacía.

El código completo quedaría así:

```javascript
class LinkedListItem {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value) {
    const newItem = new LinkedListItem(value, this.head);
    this.head = newItem;
  }
  find(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }
  deleteHead() {
    if (this.head) {
      if (this.head.next) {
        const secondNode = this.head.next;
        this.head = secondNode;
      } else {
        this.head = null;
      }
    }
  }
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

```

También me he metido un método llamado print para poder imprimir por consola todos los elementos de la lista.

Y para usar la lista sería así:

```javascript
list = new LinkedList();
list.prepend("a");
list.prepend("b");
list.prepend("c");
console.log(list.find("b"));
list.print();

```
