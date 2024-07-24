describe('signUp test', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('div[data-testid=registration]').find('[data-testid=registration-by-email]').click();

		cy.url().should('include', '/registration');
	});

	it('validate email', () => {
		cy.get('button').should('be.disabled');

		cy.get("input[name='name']").type('mi{enter}').should('have.value', 'mi');

		cy.get("input[name='email']").focus();

		cy.contains('Name must contain at least 3 character');
		cy.get("input[name='name']").focus();

		cy.contains('Email is required');
		cy.get('button').should('be.disabled');
	});

	it('validate phone', () => {
		cy.get('button').should('be.disabled');

		cy.get("input[name='phoneNumber']")
			.type('testgmail.com{enter}')
			.should('have.value', 'testgmail.com');

		cy.get("input[name='password']").focus();

		cy.contains('Phone is invalid');

		cy.get('button').should('be.disabled');
	});

	it('signUp', () => {
		cy.get('button').should('be.disabled');

		cy.get("input[name='name']").type('mike{enter}').should('have.value', 'mike');

		cy.get("input[name='email']")
			.type('test4@test.com{enter}')
			.should('have.value', 'test4@test.com');

		cy.get("input[name='phoneNumber']")
			.type('375444544545{enter}')
			.should('have.value', '375444544545');

		cy.get("input[name='password']").type('test22{enter}').should('have.value', 'test22');

		cy.get("select[name='month']").select('February').should('have.value', 'February');
		cy.get("select[name='year']").select('2024').should('have.value', '2024');
		cy.get("select[name='day']").select('16').should('have.value', '16');

		cy.get('button').should('not.be.disabled').click();

		cy.wait(2000);
	});
});
