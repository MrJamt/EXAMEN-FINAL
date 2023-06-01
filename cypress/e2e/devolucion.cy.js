
describe("Sumador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#monto-venta").type(5);
    cy.get("#efectivo").type(10);
    cy.get("#cambio-button").click();
    cy.get("#resultado-div").should("contain", "5");
  });
});
