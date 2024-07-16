import { DefaultTheme } from 'styled-components';

import { Colors } from './colors';
import { FontSizes, FontWeights } from './fonts';

export const LightTheme: DefaultTheme = {
	backgroundColor: Colors.lightBackground,
	textColor: Colors.black,
	shadowColor: Colors.grey[400],
	border: Colors.grey[100],
	button: {
		backgroundColor: {
			primary: Colors.blue[400],
			hover: Colors.blue[600],
			disabled: Colors.grey[400],
		},
		textColor: {
			primary: Colors.white,
			outline: Colors.black,
		},
		border: {
			primary: Colors.grey[100],
			hover: Colors.black,
		},
	},
	input: {
		backgroundColor: {
			primary: Colors.transparent,
			search: Colors.grey[100],
		},
		textColor: {
			primary: Colors.black,
		},
		border: {
			primary: Colors.grey[100],
			focused: Colors.black,
		},
		placeholder: {
			primary: Colors.grey[700],
		},
	},
	select: {
		backgroundColor: {
			primary: Colors.white,
		},
		textColor: {
			primary: Colors.black,
			disabled: Colors.grey[700],
		},
		border: {
			primary: Colors.grey[100],
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
			primary: Colors.grey[400],
		},
	},
	links: {
		backgroundColor: {
			hover: Colors.grey[400],
		},
	},
	fontColors: {
		blue: Colors.blue[300],
		grey: Colors.grey[700],
		red: Colors.red,
	},
	backgroundColors: {
		blue: Colors.blue[300],
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
	shadowColor: Colors.grey[400],
	border: Colors.grey[100],
	button: {
		backgroundColor: {
			primary: Colors.blue[300],
			hover: Colors.blue[600],
			disabled: Colors.blue[100],
		},
		textColor: {
			primary: Colors.white,
			outline: Colors.white,
		},
		border: {
			primary: Colors.grey[100],
			hover: Colors.blue[300],
		},
	},
	input: {
		backgroundColor: {
			primary: Colors.blue[400],
			search: Colors.grey[100],
		},
		textColor: {
			primary: Colors.white,
		},
		border: {
			primary: Colors.grey[100],
			focused: Colors.black,
		},
		placeholder: {
			primary: Colors.grey[700],
		},
	},
	select: {
		backgroundColor: {
			primary: Colors.white,
		},
		textColor: {
			primary: Colors.white,
			disabled: Colors.grey[700],
		},
		border: {
			primary: Colors.grey[100],
			focused: Colors.blue[300],
			hover: Colors.blue[300],
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
			primary: Colors.grey[400],
		},
	},
	links: {
		backgroundColor: {
			hover: Colors.blue[50],
		},
	},
	fontColors: {
		blue: Colors.blue[300],
		grey: Colors.grey[700],
		red: Colors.red,
		white: Colors.white,
	},
	backgroundColors: {
		blue: Colors.blue[300],
		light: Colors.grey[400],
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
