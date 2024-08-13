import { useEffect, useState } from 'react';
import { ButtonRegistrationBlock } from '@components/ButtonRegistrationBlock';
import { LoadingSpinner } from '@components/ui/LoadingSpinner';

import HomeImage from '@/assets/images/big-picture.webp';
import IconImage from '@/assets/images/twitter.svg';
import { FOOTER_LINKS } from '@/constants/footerLinks';

import {
	Column,
	Icon,
	ImageCustom,
	List,
	ListItem,
	LoaderWrapper,
	Row,
	Section,
	StyledLink,
	SubTitle,
	Text,
	Title,
} from './home.styled';

export const Home = () => {
	const [isLoading, setIsLoading] = useState(true);

	const cacheImages = async (srcArray: string[]): Promise<void> => {
		const promises = srcArray.map(
			(src) =>
				new Promise<void>((resolve, reject) => {
					const img = new Image();
					img.src = src;
					img.onload = () => resolve();
					img.onerror = () => reject();
				})
		);
		await Promise.all(promises);
		setIsLoading(false);
	};
	useEffect(() => {
		cacheImages([HomeImage]).catch((error) => console.error('Error caching images:', error));
	}, []);
	if (isLoading) {
		return (
			<LoaderWrapper>
				<LoadingSpinner />
			</LoaderWrapper>
		);
	}
	return (
		<Section>
			<Row>
				<ImageCustom src={HomeImage} alt="HomeImage" />
				<Column data-testid="registration">
					<Icon src={IconImage} alt="Icon_twitter" />
					<Title> Happening now</Title>
					<SubTitle>Join Twitter Today</SubTitle>
					<ButtonRegistrationBlock data-testid="registration-block" />
					<Text>
						By singing up you agree to the <StyledLink to="#">Terms of Service</StyledLink> and{' '}
						<StyledLink to="#">Privacy Policy</StyledLink>, including{' '}
						<StyledLink to="#">Cookie Use</StyledLink> .
					</Text>
					<Text data-testid="already-have-account">
						Already have an account?
						<StyledLink data-testid="login" to="login">
							{' '}
							Log in?
						</StyledLink>
					</Text>
				</Column>
			</Row>
			<List>
				{FOOTER_LINKS.map((link) => (
					<ListItem key={link.id}> {link.name}</ListItem>
				))}
			</List>
		</Section>
	);
};
