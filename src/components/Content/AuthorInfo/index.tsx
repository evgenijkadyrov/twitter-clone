import { AuthorInfoWrapper, AuthorName, AuthorNickName, TweetCreatedAt } from './authorInfo.styled';

interface AuthorInfoProps {
	authorName: string;
	authorNickname: string | null;
	createdAt: string;
}
export const AuthorInfo = ({ authorName, authorNickname, createdAt }: AuthorInfoProps) => (
	<AuthorInfoWrapper>
		<AuthorName>{authorName}</AuthorName>
		<TweetCreatedAt>{createdAt}</TweetCreatedAt>
		<AuthorNickName>{authorNickname}</AuthorNickName>
	</AuthorInfoWrapper>
);
