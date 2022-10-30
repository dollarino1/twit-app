import { createTheme } from "@mui/material"
import { enUS } from "@mui/material/locale"

const defaultTheme = createTheme({});
export const themeSettings = () => ({
	spacing: 8,
	mixins: {
		toolbar: {
			height: 84
		},
	},
	palette: {
		primary: {
			main: '#407BFF',
			// dark: '#3055AD',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#99D13C',
			light: '#EFFCDA',
			dark: '#82af37',
			contrastText: '#ffffff',
		},
		error: {
			main: '#EB5757',
			contrastText: '#ffffff',
		},
		success: {
			main: '#99D13C',
			contrastText: '#ffffff',
		},
		text: {
			primary: '#333333',
			hint: '#6D778E'
		},
		background: {
			default: '#fff',
			paper: '#fff'
		},
		divider: '#D1D5DF',
		grey: {
			900: '#2E323A',
			500: '#9A9BB2'
		}
	},
	typography: {
		button: {
			textTransform: 'none',
			fontSize: '1rem',
		},
		subtitle1: {
			color: '#333333',
			fontFamily: '"FuturaPT", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: '1.25rem',
			fontWeight: 400,
		},
		subtitle2: {
			// color: '#333333',
			fontSize: '1.25rem',
			fontWeight: 500,
		},
		h1: {
			color: '#333333',
			fontSize: '4rem',
			fontWeight: 600,
			fontFamily: '"FuturaPT", "Roboto", "Helvetica", "Arial", sans-serif',
		},
        h2: {
			color: '#333333',
			fontSize: '3.295rem',
			lineHeight: '59px',
			fontFamily: '"FuturaPT", "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            [defaultTheme.breakpoints.down('sm')]: {
				fontSize: '32px',
				lineHeight: '41px'
            }
        },
        h4: {
            color: '#333333',
            fontFamily: '"FuturaPT", "Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '2rem',
            fontWeight: 400,
        },
        h3: {
            color: '#333333',
            fontFamily: '"FuturaPT", "Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '2.286rem',
            lineHeight: "41px",
            fontWeight: 400,

        },
        h5: {
            color: '#333333',
            fontFamily: '"FuturaPT", "Roboto", "Helvetica", "Arial", sans-serif',
        },
		h6: {
			color: '#333333',
			fontSize: '1.57rem',
			fontWeight: 400,
			fontFamily: '"FuturaPT", "Roboto", "Helvetica", "Arial", sans-serif',
		},
		body2: {
			color: '#333333',
			fontSize: '1rem',
			lineHeight: '1.15rem'
		},
		caption: {
			color: '#6D778E',
			fontSize: '0.875rem',
			fontWeight: 400
		},
	},

});
export default createTheme(themeSettings(), enUS);

