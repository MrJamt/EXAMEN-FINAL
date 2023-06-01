
describe("Devolucion", () => {
  it("Muestra la resta entre lo que pagó el cliente y el cambio esperado", () => {
    cy.visit("/");
    cy.get("#monto-venta").type(5);
    cy.get("#efectivo").type(10);
    cy.get("#cambio-button").click();
    cy.get("#resultado-div").should("contain", "5");
  });
  it("Si se ingresa un valor nulo, mostrara un mensaje de advertencia", () => {
    cy.visit("/");
    cy.get("#efectivo").type(10);
    cy.get("#cambio-button").click();
    cy.get("#resultado-div").should("contain", "Ingresa ambos datos");
  });
});
