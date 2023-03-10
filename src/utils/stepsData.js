export default function getStepsData() {
  return {
    title: "Como usar la plataforma para mejorar y practicar programacion",
    items: [
      {
        title:
          'Paso #1: <span class="font-medium">Iniciar Sesión / Login </span>',
        description:
          "Dirigirse a la pagina de inicio y hacer click en el boton de iniciar sesion, luego de esto se le redireccionara a la pagina de login, donde debera ingresar sus credenciales. ",
        icon: "tabler:user",
      },
      {
        title: 'Paso #2: <span class="font-medium">Ejercicios / Challenge</em>',
        description:
          "Una vez que se haya logueado, iniciado sesión se le redireccionara a la sesión de Challenge, donde se le mostraran los ejercicios disponibles para practicar.",
        icon: "tabler:package",
      },
      {
        title: 'Paso #3: <span class="font-medium">Practicar</span>',
        description:
          "Segun el listado de los ejercicios, debera seleccionar el que desee practicar, una vez seleccionado, se le mostrara el ejercicio, las instrucciones y ejemplos del codigo que debera realizar para poder resolverlo.",
        icon: "tabler:paint",
      },
      {
        title: "Listo! a continuar",
        icon: "tabler:check",
      },
    ],
  };
}
