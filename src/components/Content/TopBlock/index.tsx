import { useSelector } from 'react-redux';
import ProfileBackground from '@assets/images/home-background.jpg';

import { NUMBER_OF_TWEETS } from '@/constants/textConstant';
import { userSelector } from '@/store/selectors';

import { BlockName, ImageBackground, TweetsCount } from './topBlock.styled';

export const TopBlock = () => {
	const { name } = useSelector(userSelector);
	return (
		<>
			<BlockName> {name}</BlockName>
			<TweetsCount> {NUMBER_OF_TWEETS}</TweetsCount>
			<ImageBackground background_url={ProfileBackground} />
		</>
	);
};
