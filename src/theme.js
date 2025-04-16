import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Fira Code", "Source Code Pro", monospace',
        h1: {
            fontWeight: 700,
            fontSize: '2rem',
        },
        h2: {
            fontWeight: 600,
            fontSize: '1.5rem',
        },
        body1: {
            fontSize: '1rem',
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#8B5E3C', // warm brown
        },
        secondary: {
            main: '#A47551', // lighter brown accent
        },
        background: {
            default: '#FDF8F4', // off-white warm
            paper: '#FFFFFF',
        },
        text: {
            primary: '#3E2C23', // deep brown for contrast
            secondary: '#6E4E37',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    padding: '8px 16px',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    boxShadow: '0 4px 14px rgba(139, 94, 60, 0.1)',
                },
            },
        },
    },
});

export default theme;
