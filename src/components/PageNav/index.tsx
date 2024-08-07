import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import backArrow from '@assets/icons/left.svg';
import lightLeft from '@assets/icons/left-light.svg';

import { useAppDispatch } from '@/store';
import { themeSelector } from '@/store/selectors';
import { themeActions } from '@/store/themeSlice';

import {
	BackIcon,
	DarkThemeRadioButton,
	Header,
	LightThemeRadioButton,
	ThemeToggler,
	Title,
} from './pageNav.styled';

export const PageNav = () => {
	const { isDarkTheme } = useSelector(themeSelector);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleClick = (e: SyntheticEvent) => {
		const target = e.target as HTMLInputElement;
		if (target.value === isDarkTheme.toString()) {
			return;
		}
		dispatch(themeActions.toggleTheme());
	};
	const backClickHandler = (): void => {
		navigate(-1);
	};
	return (
		<Header>
			<BackIcon
				src={isDarkTheme ? lightLeft : backArrow}
				alt="back"
				onClick={backClickHandler}
				loading="lazy"
			/>
			<Title>Home</Title>
			<ThemeToggler data-testid="toggle">
				<LightThemeRadioButton
					type="radio"
					name="theme"
					onClick={handleClick}
					value="false"
					defaultChecked={!isDarkTheme}
				/>
				<DarkThemeRadioButton
					type="radio"
					name="theme"
					onClick={handleClick}
					value="true"
					defaultChecked={isDarkTheme}
				/>
			</ThemeToggler>
		</Header>
	);
};
