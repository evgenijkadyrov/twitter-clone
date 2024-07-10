import { FC } from 'react';

import logo from '@/assets/images/twitter.svg';
import { NAV_LINKS } from '@/constants/navLinks';

import { Item } from './Item';
import { List, Logo, Nav } from './navBar.styled';

export const NavBar: FC = () => (
	<Nav>
		<Logo src={logo} alt="logo" loading="lazy" />
		<List>
			{NAV_LINKS.map((link) => (
				<Item key={link.id} link={link} />
			))}
		</List>
	</Nav>
);
