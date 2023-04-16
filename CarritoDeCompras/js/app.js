// Array para guardar los productos del carrito
const carrito = [];

// Función para actualizar la tabla del carrito
function actualizarCarrito() {
  const tbody = document.getElementById("carrito");
  // Limpiamos la tabla antes de actualizarla
  tbody.innerHTML = "";

  // Recorremos el array del carrito para agregar cada producto a la tabla
  carrito.forEach((producto, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precio}</td>
      <td><button class="borrar-curso" data-index="${index}">Eliminar</button></td>
    `;
    tbody.appendChild(row);
  });
}

// Evento para agregar productos al carrito
document.querySelectorAll(".agregar-carrito").forEach((boton) => {
  boton.addEventListener("click", (evento) => {
    const producto = {
      nombre: evento.target.dataset.nombre,
      precio: evento.target.dataset.precio,
    };
    carrito.push(producto);
    actualizarCarrito();
  });
});

// Evento para borrar un producto del carrito
document.querySelector("#carrito").addEventListener("click", (evento) => {
  if (evento.target.classList.contains("borrar-curso")) {
    const index = evento.target.dataset.index;
    carrito.splice(index, 1);
    actualizarCarrito();
  }
});

// Evento para vaciar el carrito
document.querySelector("#vaciar-carrito").addEventListener("click", () => {
  carrito.splice(0, carrito.length);
  actualizarCarrito();
});