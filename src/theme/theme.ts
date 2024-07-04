import { DefaultTheme } from 'styled-components';

import { Colors } from './colors';
import { FontSizes, FontWeights } from './fonts';

export const LightTheme: DefaultTheme = {
	backgroundColor: Colors.lightBackground,
	textColor: Colors.black,
	shadowColor: Colors.grey,
	border: Colors.lightGrey,
	button: {
		backgroundColor: {
			primary: Colors.blue,
			hover: Colors.blueForHover,
			disabled: Colors.blueDisabled,
		},
		textColor: {
			primary: Colors.white,
			outline: Colors.black,
		},
		border: {
			primary: Colors.lightGrey,
			hover: Colors.black,
		},
	},
	input: {
		backgroundColor: {
			primary: Colors.transparent,
			search: Colors.greyForNotification,
		},
		textColor: {
			primary: Colors.black,
		},
		border: {
			primary: Colors.lightGrey,
			focused: Colors.black,
		},
		placeholder: {
			primary: Colors.darkGrey,
		},
	},
	select: {
		backgroundColor: {
			primary: Colors.white,
		},
		textColor: {
			primary: Colors.black,
			disabled: Colors.darkGrey,
		},
		border: {
			primary: Colors.lightGrey,
			focused: Colors.black,
		},
	},
	notification: {
		border: {
			error: Colors.red,
			success: Colors.green,
			warning: Colors.yellow,
		},
		color: {
			primary: Colors.black,
		},
		backgroundColor: {
			primary: Colors.white,
		},
		shadow: {
			primary: Colors.grey,
		},
	},
	links: {
		backgroundColor: {
			hover: Colors.greyForNotification,
		},
	},
	fontColors: {
		blue: Colors.blue,
		grey: Colors.darkGrey,
		red: Colors.red,
	},
	backgroundColors: {
		blue: Colors.blue,
		sidebar: Colors.white,
	},
	fontWeights: {
		regular: FontWeights.regular,
		semiBold: FontWeights.semiBold,
		medium: FontWeights.medium,
		bold: FontWeights.bold,
	},
	fontSize: {
		f64: FontSizes.f64,
		f42: FontSizes.f42,
		f35: FontSizes.f35,
		f24: FontSizes.f24,
		f20: FontSizes.f20,
		f18: FontSizes.f18,
		f16: FontSizes.f16,
		f15: FontSizes.f15,
		f14: FontSizes.f14,
		f12: FontSizes.f12,
	},
};

export const DarkTheme: DefaultTheme = {
	backgroundColor: Colors.darkBackground,
	textColor: Colors.white,
	shadowColor: Colors.grey,
	border: Colors.lightGrey,
	button: {
		backgroundColor: {
			primary: Colors.blue,
			hover: Colors.blueForHover,
			disabled: Colors.blueDisabled,
		},
		textColor: {
			primary: Colors.white,
			outline: Colors.white,
		},
		border: {
			primary: Colors.lightGrey,
			hover: Colors.blue,
		},
	},
	input: {
		backgroundColor: {
			primary: Colors.blueForInput,
			search: Colors.blueForInput,
		},
		textColor: {
			primary: Colors.white,
		},
		border: {
			primary: Colors.lightGrey,
			focused: Colors.black,
		},
		placeholder: {
			primary: Colors.darkGrey,
		},
	},
	select: {
		backgroundColor: {
			primary: Colors.white,
		},
		textColor: {
			primary: Colors.white,
			disabled: Colors.darkGrey,
		},
		border: {
			primary: Colors.lightGrey,
			focused: Colors.blue,
			hover: Colors.blue,
		},
	},
	notification: {
		border: {
			error: Colors.red,
			success: Colors.green,
			warning: Colors.yellow,
		},
		color: {
			primary: Colors.white,
		},
		backgroundColor: {
			primary: Colors.darkBackground,
		},
		shadow: {
			primary: Colors.grey,
		},
	},
	links: {
		backgroundColor: {
			hover: Colors.blueForLinks,
		},
	},
	fontColors: {
		blue: Colors.blue,
		grey: Colors.darkGrey,
		red: Colors.red,
		white: Colors.white,
	},
	backgroundColors: {
		blue: Colors.blue,
		light: Colors.greyForNotification,
		sidebar: Colors.darkBackground,
	},
	fontWeights: {
		regular: FontWeights.regular,
		semiBold: FontWeights.semiBold,
		medium: FontWeights.medium,
		bold: FontWeights.bold,
	},
	fontSize: {
		f64: FontSizes.f64,
		f42: FontSizes.f42,
		f35: FontSizes.f35,
		f32: FontSizes.f32,
		f24: FontSizes.f24,
		f20: FontSizes.f20,
		f18: FontSizes.f18,
		f16: FontSizes.f16,
		f15: FontSizes.f15,
		f14: FontSizes.f14,
		f12: FontSizes.f12,
		f10: FontSizes.f10,
	},
};
