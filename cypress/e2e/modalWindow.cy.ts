describe('test button', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('[data-testid=already-have-account]').find('[data-testid=login]').click();

		cy.get("input[name='phoneOrEmail']").type('test1@test.com');

		cy.get("input[name='password']").type('123456');

		cy.get('button').contains('Log in').click();
		cy.wait(2000);
	});

	it('should open modal window', () => {
		cy.visit('/profile/zVTR4UOhZxdNLPxFY6eZambsyfj2');
		cy.contains('Tweet').click();
		cy.get("div[data-testid='modal-window']").should('exist');
	});
});
