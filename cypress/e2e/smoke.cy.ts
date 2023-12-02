describe("smoke tests", () => {
  it("should render", () => {
    cy.visitAndCheck("/");
  });
});
