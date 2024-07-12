import { FC } from 'react';
import { TopBlock } from '@components/Content/TopBlock';
import { UserCommonInfo } from '@components/Content/UserCommonInfo';

import { Content } from './content.styled';

export const ContentBlock: FC = () => (
	<Content>
		<TopBlock />
		<UserCommonInfo />
		{/*            <div>Subcriptions */}

		{/*                <div> */}
		{/*                    <span> 67 </span> */}
		{/*                    <span>Following</span> */}
		{/*                </div> */}
		{/*                <div> */}
		{/*                    <span> 74 </span> */}
		{/*                    <span>Followers</span> */}
		{/*                </div> */}

		{/*            </div> */}
		{/*            <div>Create Tweets */}

		{/*                <img src={Icon as string} alt={'image'}/> */}
		{/*                <textarea/> */}
		{/*                <button>Sent</button> */}
		{/*            </div> */}
		{/* <div>Tweets</div> */}
	</Content>
);
