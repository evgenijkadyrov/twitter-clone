import likeIcon from '@assets/icons/like.svg';
import activeLike from '@assets/icons/like-fill.svg';

import { LikeCount, LikeIcon, LikesBlock } from './likes.styled';

export const LikesComponent = ({
	isLiked,
	countLikes,
	handleLikeClick,
}: {
	isLiked: boolean;
	countLikes: number;
	handleLikeClick: () => void;
}) => (
	<LikesBlock>
		<LikeIcon
			src={isLiked ? activeLike : likeIcon}
			alt="Like"
			onClick={handleLikeClick}
			loading="lazy"
		/>
		<LikeCount>{countLikes || 0}</LikeCount>
	</LikesBlock>
);
