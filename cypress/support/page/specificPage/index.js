// file for the actions that are requested in the test cases
/// <reference types ="cypress"/>

import * as EXAMPLE from "../../../fixtures/example.json"
import { INPUT_NAME, BUTTON_SEND } from './elements'

export function clickSendButton() {
  cy.get(INPUT_NAME).type(EXAMPLE.name)
  cy.get(BUTTON_SEND).click()
}
