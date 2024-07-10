import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';

import { NavLink } from '@/constants/navLinks';
import { userSelector } from '@/store/selectors';

import { Icon, ListItem, StyledLink } from './navBarItem.styled';

interface ItemProps {
	link: NavLink;
}
export const Item = ({ link }: ItemProps) => {
	const { to, icon, activeIcon, title } = link;
	const match = useMatch({
		path: to,
		end: to.length === 1,
	});
	const { id } = useSelector(userSelector);

	const dest = to === '/profile' ? `${to}/${id}` : to;

	return (
		<ListItem>
			<StyledLink to={dest} $active={match}>
				<Icon src={match ? activeIcon : icon} alt={title} />
				{title}
			</StyledLink>
		</ListItem>
	);
};
