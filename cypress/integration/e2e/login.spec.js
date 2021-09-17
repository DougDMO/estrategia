/// <reference types ="cypress"/>
// File that performs actions for certain test cases. The actions can be found on support/pages
import { clickSendButton } from '../../support/page/specificPage/index'

describe("Context Test", () => {

  before(() => {
  });

  it("Case test", () => {
    clickSendButton()
  });
});
