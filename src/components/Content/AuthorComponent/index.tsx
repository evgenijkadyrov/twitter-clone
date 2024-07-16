import { AuthorInfo, AuthorName, AuthorNickName, TweetCreatedAt } from './authorInfo.styled';

export const AuthorInfoComponent = ({
	authorName,
	authorNickname,
	createdAt,
}: {
	authorName: string;
	authorNickname: string | null;
	createdAt: string;
}) => (
	<AuthorInfo>
		<AuthorName>{authorName}</AuthorName>
		<AuthorNickName>{authorNickname}</AuthorNickName>
		<TweetCreatedAt>{createdAt}</TweetCreatedAt>
	</AuthorInfo>
);
