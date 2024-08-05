import React from 'react';
import { mount } from 'cypress/react18';
import { Button } from '@components/ui/Button';
import { TypeButton } from '@components/ui/Button/button.interface';

describe('Button component', () => {
	it('uses custom text for the button label', () => {
		cy.mount(<Button type={TypeButton.button}>Click me!</Button>);
		cy.get('button').should('contains.text', 'Click me!');
	});
});
