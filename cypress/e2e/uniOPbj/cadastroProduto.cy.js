describe("Checkout de Produto", () => {
  beforeEach("Fazer login", () => {
    cy.visit("https://www.saucedemo.com");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });
  it("deve realizar checkout de um produto", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type("John");
    cy.get('[data-test="lastName"]').type("Doe");
    cy.get('[data-test="postalCode"]').type("12345");
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="finish"]').click();

    cy.get('[data-test="back-to-products"]').click();
  });
});
