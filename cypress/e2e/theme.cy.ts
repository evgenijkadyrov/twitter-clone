import { themeActions } from '@/store/themeSlice';
import { User, userActions } from '@/store/userSlice';

describe('theme test', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('theme should be false', () => {
		cy.window()
			.its('store')
			.invoke('getState')
			.its('theme')
			.its('isDarkTheme')
			.should('be.equal', false);
	});

	it('theme should change', () => {
		cy.window().its('store').invoke('dispatch', themeActions.toggleTheme());

		cy.window()
			.its('store')
			.invoke('getState')
			.its('theme')
			.its('isDarkTheme')
			.should('be.equal', true);
	});

	it('theme should change onclick', () => {
		const user: User = {
			name: 'white',
			phoneNumber: '232545565',
			email: 'test1@test.com',
			id: 'zVTR4UOhZxdNLPxFY6eZambsyfj2',
			token:
				'eyJhbGciOiJSUzI1NiIsImtpZCI6IjBjYjQyNzQyYWU1OGY0ZGE0NjdiY2RhZWE0Yjk1YTI5ZmJhMGM1ZjkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdHdpdHRlci1jbG9uZS15YXVoZW4iLCJhdWQiOiJ0d2l0dGVyLWNsb25lLXlhdWhlbiIsImF1dGhfdGltZSI6MTcyMTY2MTAwMCwidXNlcl9pZCI6InpWVFI0VU9oWnhkTkxQeEZZNmVaYW1ic3lmajIiLCJzdWIiOiJ6VlRSNFVPaFp4ZE5MUHhGWTZlWmFtYnN5ZmoyIiwiaWF0IjoxNzIxNjYxMDAwLCJleHAiOjE3MjE2NjQ2MDAsImVtYWlsIjoidGVzdDFAdGVzdC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdDFAdGVzdC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.UbLaYDAmVYWWk59pDxvjRa-L0WwXOQmVV2ooqe2dLPDQv1RcrCnMxZl5TV5tihBIVB9G5iy66Wg3QpD4UGzCM9X4sodTaxU3Fvlv8KZQ4PwJbX7L2RIhE0tQpiNOm_05EdQ7qfVGPypUNeMTb-awSwf_4ho2eqjoC9jgmpPAEPpgHXkVv77vSYK3XpCkHW17ezF2vxDJFbB2cUx8Oe1tjIY2k_rUL7XvLfSQOMUR2QQg9cTEcTNL-rTIhQKrFiP7hsJSqgmKzuZZJNTcS_QLGa981d2VX0dTnqoP1T-Rg9rxi0jA4HirfDi2LcD_MKLQIG7nxwgxk7HzzpW1kNBeFA',
			birthDate: '--',
			description: 'cool day!',
			avatarImage:
				'https://firebasestorage.googleapis.com/v0/b/twitter-clone-yauhen.appspot.com/o/images%2Favatar-with-a-young-face-pictures-of-men-vector-46356732.jpg?alt=media&token=5ee2aab7-870d-4540-9678-a26387f8c69c',
		};

		cy.window().its('store').invoke('dispatch', userActions.fetchUser(user));
		cy.wait(2000);
		cy.contains('Home').click();
		cy.get("input[type='radio']").eq(1).click();

		cy.window()
			.its('store')
			.invoke('getState')
			.its('theme')
			.its('isDarkTheme')
			.should('be.equal', true);
	});
});
