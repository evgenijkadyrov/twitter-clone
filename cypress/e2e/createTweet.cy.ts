describe('create tweet', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('[data-testid=already-have-account]').find('[data-testid=login]').click();

		cy.get("input[name='phoneOrEmail']")
			.type('test1@test.com')
			.should('have.value', 'test1@test.com');

		cy.get("input[name='password']").type('123456').should('have.value', '123456');

		cy.get('button').contains('Log in').click();
		cy.wait(3000);
	});

	it("should enter 'test tweet' in the textarea", () => {
		cy.get('[data-testid=textarea-create-tweet]')
			.type('test tweet')
			.should('have.value', 'test tweet');
		cy.contains('Sent').click();
		cy.window().its('store').invoke('getState').its('notification.success').should('not.be.null');
	});
});
