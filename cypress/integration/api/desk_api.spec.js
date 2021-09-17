/// <reference types="cypress" />

import { HEADERS, BODY } from '../../fixtures/dataApi/dataUtils'
import * as METHOD from '../../fixtures/dataApi/method.json'
/*
 using cypress for API testing
 assertions https://docs.cypress.io/guides/references/assertions
*/
describe("Context Test", () => {
  it("Case test API", () => {
    cy.request({
      method: METHOD.POST,
      url: "/commands",
      headers: HEADERS,
      body: BODY,
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      expect(response).property("body").to.contain({
        method: "set",
        status: "success",
      });
    });
  });
});
