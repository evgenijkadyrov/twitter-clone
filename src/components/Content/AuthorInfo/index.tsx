import { AuthorInfoWrapper, AuthorName, AuthorNickName, TweetCreatedAt } from './authorInfo.styled';

interface AuthorInfoProps {
	authorName: string;
	authorNickname: string | null;
	createdAt: string;
}
export const AuthorInfo = ({ authorName, authorNickname, createdAt }: AuthorInfoProps) => (
	<AuthorInfoWrapper>
		<AuthorName>{authorName}</AuthorName>
		<AuthorNickName>{authorNickname}</AuthorNickName>
		<TweetCreatedAt>{createdAt}</TweetCreatedAt>
	</AuthorInfoWrapper>
);
