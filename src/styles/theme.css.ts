import { defaultTheme, createTheme, type Theme } from '../tamia';
import { fonts } from './fonts.css';

export const colors = {
	bg: '#fff',
	base: '#3a3d40',
	light: '#94949e',
	border: '#3a3d40',
	primary: '#577290',
	hover: '#c45a8d',
	focus: '#c45a8d',
	selection: 'rgb(255,237,117)',
	selectionAlpha: 'rgba(255,237,117,0.25)',
};

export const theme = {
	...defaultTheme,
	baseFontSize: '1.125em',
	listMargin: '0',
	page: {
		textMaxWidth: '40rem',
		contentPaddingX: defaultTheme.space.m,
		contentPaddingY: '4vh',
		contentMaxWidth: '52rem',
	},
	colors,
	fonts: {
		base: [fonts.base, 'sans-serif'].join(', '),
		heading: [fonts.heading, 'serif'].join(', '),
		ui: [fonts.ui, 'sans-serif'].join(', '),
		code: [fonts.code, 'monospace'].join(', '),
	},
	fontSizes: {
		base: '1rem',
		xxxl: '3.2rem',
		xxl: '2.4rem',
		xl: '1.9rem',
		l: '1.4rem',
		m: '1rem',
		s: '0.9rem',
		xs: '0.75rem',
		mplus: '1.1rem', // TODO: Shall we remove or rename this?
		ui: '1.5rem', // UI font is very small
	},
	fontWeights: {
		base: '300',
		heading: '300',
		bold: '800',
	},
	lineHeights: {
		base: '1.5',
		small: '1.4',
		heading: '1.1',
		code: '1.3',
	},
	letterSpacings: {
		base: '0',
		heading: '0',
		menu: '0.1ch',
	},
	radii: {
		default: '2px',
		large: '3px',
	},
} as const satisfies Theme;

export const [themeClass, vars] = createTheme(theme);
