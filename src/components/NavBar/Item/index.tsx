import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';

import { Paths } from '@/constants/routerPaths';
import { userSelector } from '@/store/selectors';

import { ItemProps } from './navBarItem.interface';
import { Icon, ListItem, StyledLink } from './navBarItem.styled';

export const Item = ({ link }: ItemProps) => {
	const { to, icon, activeIcon, title } = link;
	const match = useMatch({
		path: to,
		end: to.length === 1,
	});
	const { id } = useSelector(userSelector);

	const dest = to === Paths.PROFILE.toString() ? `${to}/${id}` : to;

	return (
		<ListItem>
			<StyledLink to={dest} $active={match}>
				<Icon src={match ? activeIcon : icon} alt={title} />
				{title}
			</StyledLink>
		</ListItem>
	);
};
