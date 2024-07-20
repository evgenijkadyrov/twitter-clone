import defaultAvatar from '@/assets/images/avatar.png';
import { Button } from '@/components/Button';
import { Avatar } from '@/components/SearchBar/SearchInput/searchInput.styled';
import { UserWithFollow } from '@/store/userSlice';

import { ProfileInfo, Row, SubTitle, TitleForRecommended, TitleProfile } from './recomended.styled';

interface RecommendedUsersProps {
	usersByRecommendation: UserWithFollow[];
	setUsersByRecommendation: (user: UserWithFollow[]) => void;
}

export const RecommendedUsers = ({
	usersByRecommendation,
	setUsersByRecommendation,
}: RecommendedUsersProps) => {
	const handleChangeSubscribe = (userId: string | null) => () => {
		const usersWithFollowing = usersByRecommendation.map((user) =>
			user.id === userId
				? {
						...user,
						follow: !user.follow,
					}
				: user
		);
		setUsersByRecommendation(usersWithFollowing);
	};
	return (
		<>
			<TitleForRecommended>You might like</TitleForRecommended>
			{usersByRecommendation.map(({ name, nickname, id, avatarImage, follow }) => (
				<Row key={id}>
					<Avatar background_url={avatarImage || defaultAvatar} />
					<ProfileInfo>
						<TitleProfile>{name}</TitleProfile>
						<SubTitle>{nickname}</SubTitle>
					</ProfileInfo>
					<Button
						type="button"
						color={follow ? 'disabled' : 'primary'}
						width="30%"
						onClick={handleChangeSubscribe(id)}
					>
						{follow ? 'Unfollow' : 'Follow'}
					</Button>
				</Row>
			))}
		</>
	);
};
