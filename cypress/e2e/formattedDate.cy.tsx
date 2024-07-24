import React from 'react';
import { mount } from 'cypress/react18';
import { Button } from '@components/ui/Button';
import { TypeButton } from '@components/ui/Button/button.interface';

describe('Button component', () => {
	it('uses custom text for the button label', () => {
		cy.mount(<Button type={TypeButton.button}>Click me!</Button>);
		cy.get('button').should('contains.text', 'Click me!');
	});

	// it('renders with custom props', () => {
	//     mount(
	//         <Button width="200px" color="secondary" onClick={() => {}} disabled type={TypeButton.button}>
	//     Custom Button
	//     </Button>
	// );
	//
	//     cy.get('button').should('have.css', 'width', '200px');
	//     cy.get('button').should('have.css', 'background-color', 'rgb(108, 117, 125)');
	//     cy.get('button').should('be.disabled');
	//     cy.contains('Custom Button').should('exist');
	// });
	//
	// it('calls the onClick event handler', () => {
	//     const onClick = cy.stub().as('onClick');
	//
	//     mount(<Button onClick={onClick} type={TypeButton.button}>Click me</Button>);
	//
	//     cy.get('button').click();
	//     cy.get('@onClick').should('be.called');
	// });
});
