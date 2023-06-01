import restar from "./devolucion.js";
import fraccionar from "./fraccionar";

describe("Devolucion", () => {
  it("deberia restar dos numeros", () => {
    expect(restar(3, 2)).toEqual(1);
  });
  it("si se ingresa uno deberia devolver moneda de ", () => {
    expect(fraccionar(1)).toEqual([1]);
  });
  it("si se ingresa 13 deberia devolver las monedas 1 2 5 5", () => {
    expect(fraccionar(13)).toEqual([1,2,5,5]);
  });
});
