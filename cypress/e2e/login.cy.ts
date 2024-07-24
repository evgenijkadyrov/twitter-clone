describe('signIn test', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('[data-testid=already-have-account]').find('[data-testid=login]').click();

		cy.url().should('include', '/login');
	});

	it('should login successfully', () => {
		cy.get('button').should('be.disabled');

		cy.get("input[name='phoneOrEmail']")
			.type('test1@test.com')
			.should('have.value', 'test1@test.com');

		cy.get("input[name='password']").type('123456').should('have.value', '123456');

		cy.get('button').contains('Log in').click();
		cy.wait(1000);
		cy.window().its('store').invoke('getState').its('notification.success').should('not.be.null');
	});

	it('should validate email', () => {
		cy.get('button').should('be.disabled');

		cy.get("input[name='phoneOrEmail']").focus();

		cy.get("input[name='password']").focus();
		cy.contains('Email / Phone is required');
		cy.get("input[name='phoneOrEmail']").focus();
		cy.contains('Password must contain at least 6 character');

		cy.get('button').should('be.disabled');
	});
});
