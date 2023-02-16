/// <reference types="cypress" />

describe("Social Icons | CodeLabz", () => {
  it("Check connect buttons", function () {
    cy.visit("/profile");
    cy.get("[data-testId=FacebookIcon]").should("exist");
    cy.get("[data-testId=LinkedInIcon]").should("exist");
    cy.get("[data-testId=GithubIcon]").should("exist");
    cy.get("[data-testId=TwitterIcon]").should("exist");
    cy.get("[data-testId=LinkIcon]").should("exist");
  });
});
