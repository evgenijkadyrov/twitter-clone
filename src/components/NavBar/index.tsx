import { NAV_LINKS } from '@/constants/navLinks';

import { Item } from './Item';
import { List, NavList } from './navBar.styled';

export const NavBar = () => (
	<NavList>
		<List>
			{NAV_LINKS.map((link) => (
				<Item key={link.id} link={link} />
			))}
		</List>
	</NavList>
);
