import restar from "./devolucion";

const montoVenta = document.querySelector("#monto-venta");
const efectivo = document.querySelector("#efectivo");
const form = document.querySelector("#devolucion-form");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseInt(montoVenta.value);
  const monto_cancelado = Number.parseInt(efectivo.value);

  div.innerHTML = "<p>" + restar(monto_cancelado,precio) + "</p>";
});
