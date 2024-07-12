import { ButtonRegistrationBlock } from '@components/ButtonRegistrationBlock';

import HomeImage from '@/assets/images/big-picture.png';
import IconImage from '@/assets/images/twitter.svg';
import { FOOTER_LINKS } from '@/constants/footerLinks';

import {
	Column,
	Icon,
	Image,
	List,
	ListItem,
	Row,
	Section,
	StyledLink,
	SubTitle,
	Text,
	Title,
} from './home.styled';

export const Home = () => (
	<Section>
		<Row>
			<Image src={HomeImage} alt="HomeImage" />
			<Column>
				<Icon src={IconImage} alt="Icon_twitter" />
				<Title> Happening now</Title>
				<SubTitle>Join Twitter Today</SubTitle>
				<ButtonRegistrationBlock />
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
		<List>
			{FOOTER_LINKS.map((link) => (
				<ListItem key={link.id}> {link.name}</ListItem>
			))}
		</List>
	</Section>
);
