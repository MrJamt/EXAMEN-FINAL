import restar from "./devolucion.js";
import fraccionar from "./fraccionar";

describe("Devolucion", () => {
  it("deberia restar dos numeros", () => {
    expect(restar(3, 2)).toEqual(1);
  });
  it("si se ingresa uno deberia devolver moneda de ", () => {
    expect(fraccionar(1)).toEqual(1);
  });
});
