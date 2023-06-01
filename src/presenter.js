import restar from "./devolucion";
import fraccionar from "./fraccionar";

const montoVenta = document.querySelector("#monto-venta");
const efectivo = document.querySelector("#efectivo");
const form = document.querySelector("#devolucion-form");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  let monto_de_venta = Number.parseInt(montoVenta.value);
  let monto_cancelado = Number.parseInt(efectivo.value);

  if(monto_de_venta.value!=undefined && monto_cancelado.value!=undefined)
  {
    div.innerHTML = "Ingresa ambos datos";
  }
  else
  {
    div.innerHTML = "<p>" + restar(monto_cancelado,monto_de_venta) + "</p>";
  }
  div.innerHTML += "El monto fraccionado del monto cancelado es: " + fraccionar(monto_cancelado);
});
