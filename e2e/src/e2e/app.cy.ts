import { getHome } from '../support/app.po';

describe('ngui-nx', () => {
    beforeEach(() => cy.visit('/'));

    it('should display home page', () => {
        // Custom command example, see `../support/commands.ts` file
        cy.login('my-email@something.com', 'myPassword');

        // Function helper example, see `../support/app.po.ts` file
        getHome().should('be.visible');
    });
});
