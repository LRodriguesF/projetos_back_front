import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que estou na página inicial dos Correios", () => {
  cy.visit("https://www.correios.com.br/");
});

When("eu realizo uma busca pelo CEP {string}", (cep) => {
    cy.get('a.info-link').contains('Busca CEP ou Endereço').click() // clica no campo de busca
    cy.get('#endereco').type(cep); // insere o cep
    cy.get('#btn_pesquisar').click(); // clica no botão de pesquisa

});

Then("devo visualizar o logradouro {string}", (logradouro) => {
    cy.get('td[data-th="Logradouro/Nome"]').should("contain.text", logradouro); // resultado de sucesso do endereço
});

Then("devo visualizar a mensagem de erro {string}", (mensagem) => {
    cy.get('div#mensagem-resultado.mensagem').should("contain.text", mensagem); // mensagem de enderço inválido
});

