import { memo } from 'react';
import likeIcon from '@assets/icons/like.svg';
import activeLike from '@assets/icons/like-fill.svg';

import { LikeCount, LikeIcon, LikesBlock } from './likes.styled';

interface LikesProps {
	isLiked: boolean;
	countLikes: number;
	handleLikeClick: () => void;
}
export const Likes = memo(({ isLiked, countLikes, handleLikeClick }: LikesProps) => (
	<LikesBlock>
		<LikeIcon
			src={isLiked ? activeLike : likeIcon}
			alt="Like"
			onClick={handleLikeClick}
			loading="lazy"
		/>
		<LikeCount>{countLikes || 0}</LikeCount>
	</LikesBlock>
));
