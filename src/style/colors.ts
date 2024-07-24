const white = '#FFFFFF';
const black = '#000000';

const darkBackground = '#092441';
const lightBackground = '#FFFFFF';

const grey: GreyColor = {
	50: '#EFF3F4',
	100: '#E4EAED',
	400: '#B3B8BB',
	700: '#666666',
};

const blue: BlueColor = {
	50: '#8EB2DB',
	100: '#67B4E3',
	300: '#1DA1F2',
	400: '#4D90D9',
	600: '#187CBA',
};

const red = '#E7182E';
const yellow = '#D8AE17';
const green = '#16CD4A';

const transparent = 'transparent';
interface ColorsInter {
	white: string;
	black: string;
	lightBackground: string;
	grey: GreyColor;
	blue: BlueColor;
	darkBackground: string;
	red: string;
	yellow: string;
	green: string;
	transparent: string;
}
export const Colors: ColorsInter = {
	white,
	black,
	lightBackground,
	grey,
	blue,
	darkBackground,
	red,
	yellow,
	green,
	transparent,
};
export interface GreyColor {
	50: string;
	100: string;
	400: string;
	700: string;
}
export interface BlueColor {
	50: string;
	100: string;
	300: string;
	400: string;
	600: string;
}
