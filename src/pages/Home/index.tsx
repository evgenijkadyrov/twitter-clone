import React from 'react';

import Google from '@/assets/icons/google-icon.svg';
import HomeImage from '@/assets/images/big-picture.png';
import IconImage from '@/assets/images/twitter.svg';

import {
	Button,
	ButtonIcon,
	ButtonText,
	Column,
	Icon,
	Image,
	Row,
	Section,
	StyledLink,
	SubTitle,
	Text,
	Title,
	WrapperForButtonContent,
} from './home.styled';

export const Home = () => (
	<Section>
		<Row>
			<Image src={HomeImage as string} alt="HomeImage" />
			<Column>
				<Icon src={IconImage as string} alt="Icon_twitter" />
				<Title> Happening now</Title>
				<SubTitle>Join Twitter Today</SubTitle>

				<Button type="button">
					<WrapperForButtonContent>
						<ButtonIcon src={Google as string} alt="googleIcon" />
						<ButtonText>Sign up with Google</ButtonText>
					</WrapperForButtonContent>
				</Button>
				<Button type="button">
					<WrapperForButtonContent>
						<ButtonText>Sign up with email</ButtonText>
					</WrapperForButtonContent>
				</Button>
				<Text>
					By singing up you agree to the <StyledLink to="#">Terms of Service</StyledLink> and{' '}
					<StyledLink to="#">Privacy Policy</StyledLink>, including{' '}
					<StyledLink to="#">Cookie Use</StyledLink> .
				</Text>
				<div>
					Already have an account?<StyledLink to="login"> Log in?</StyledLink>
				</div>
			</Column>
		</Row>
	</Section>
);
