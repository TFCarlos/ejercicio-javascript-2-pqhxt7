// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".

// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.

//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)

//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  addAllClasses();
  removeOdd();
  createList2();
}

// Agrega las clases element-n.
function addAllClasses() {
  // Nos quedamos <ul>
  let pointer = document.querySelector(".selected").parentElement.parentElement
    .childNodes;

  let counter = 1;
  for (var i = 0; i < pointer.length; i++) {
    if (pointer[i] instanceof HTMLLIElement) {
      // Del <li>, nos ubicamos en <span>.
      var li = pointer[i].children;
      // Agregamos la clase.
      li[0].classList.add("element-" + counter);
      counter++;
    }
  }
}

// Borrar Impares.
function removeOdd() {
  var liList = document.querySelectorAll("li");
  liList[1].remove();
  liList[3].remove();
}

// Crear lista2.
function createList2() {
  //Nos ubicamos en la lista2
  var list2 = document.getElementById("list2");
  console.log(list2);

  //Creamos los botones && clases
  let button1 = document.createElement("BUTTON");
  button1.classList.add("element-1");
  button1.innerHTML = "texto ejemplo 1";

  let button3 = document.createElement("BUTTON");
  button3.classList.add("element-3");
  button3.innerHTML = "texto ejemplo 3";

  let button5 = document.createElement("BUTTON");
  button5.classList.add("element-5");
  button5.innerHTML = "texto ejemplo 5";

  //Creamos li.
  let li1 = document.createElement("LI");
  let li3 = document.createElement("LI");
  let li5 = document.createElement("LI");

  //Agregamos
  li1.appendChild(button1);
  list2.appendChild(li1);

  li3.appendChild(button3);
  list2.appendChild(li3);

  li5.appendChild(button5);
  list2.appendChild(li5);
}
