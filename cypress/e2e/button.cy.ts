describe('test button', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('[data-testid=already-have-account]').find('[data-testid=login]').click();

		cy.get("input[name='phoneOrEmail']").type('test1@test.com');

		cy.get("input[name='password']").type('123456');

		cy.get('button').contains('Log in').click();
		cy.wait(2000);
	});
	it('should login successfully', () => {
		cy.contains('Tweet')
			.trigger('mouseover')
			.should('have.css', 'background-color', 'rgb(77, 144, 217)')
			.trigger('mouseout')
			.should('have.css', 'background-color', 'rgb(77, 144, 217)');
	});
});
