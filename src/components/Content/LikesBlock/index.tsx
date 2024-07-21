import { memo } from 'react';
import { useSelector } from 'react-redux';
import likeIcon from '@assets/icons/like.svg';
import activeLike from '@assets/icons/like-fill.svg';
import lightLikeIcon from '@assets/icons/like-light.svg';

import { themeSelector } from '@/store/selectors';

import { LikeCount, LikeIcon, LikesBlock } from './likes.styled';

interface LikesProps {
	isLiked: boolean;
	countLikes: number;
	handleLikeClick: () => void;
}
export const Likes = memo(({ isLiked, countLikes, handleLikeClick }: LikesProps) => {
	const { isDarkTheme } = useSelector(themeSelector);
	const getLikeIconSrc = () => {
		if (isLiked) {
			return activeLike;
		}
		if (isDarkTheme) {
			return lightLikeIcon;
		}
		return likeIcon;
	};
	return (
		<LikesBlock>
			<LikeIcon src={getLikeIconSrc()} alt="Like" onClick={handleLikeClick} loading="lazy" />
			<LikeCount>{countLikes || 0}</LikeCount>
		</LikesBlock>
	);
});
