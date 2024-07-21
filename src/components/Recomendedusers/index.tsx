import { TypeButton } from '@components/ui/Button/button.interface';
import { UserNameBlock } from '@components/ui/userNameBlock';

import { Button } from '@/components/ui/Button';
import { UserWithFollow } from '@/store/userSlice';

import { TitleForRecommended } from './recomended.styled';

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
			user.id === userId ? { ...user, follow: !user.follow } : user
		);
		setUsersByRecommendation(usersWithFollowing);
	};
	return (
		<>
			<TitleForRecommended>You might like</TitleForRecommended>
			{usersByRecommendation.map(({ name, nickname, id, avatarImage, follow }) => (
				<UserNameBlock id={id} name={name} avatarImage={avatarImage} nickname={nickname} key={id}>
					<Button
						type={TypeButton.button}
						color={follow ? 'disabled' : 'primary'}
						width="30%"
						onClick={handleChangeSubscribe(id)}
					>
						{follow ? 'Unfollow' : 'Follow'}
					</Button>
				</UserNameBlock>
			))}
		</>
	);
};
