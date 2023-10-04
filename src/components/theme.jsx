import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#856B5B',  // An earthy brown color
    },
    secondary: {
      main: '#f5f0e6',  // A soft beige color
    },
    background: {
      default: '#f5f0e6'  // Default background color
    }
  },
  typography: {
    fontFamily: 'Georgia, serif',
    h1: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '0.875rem',
    },
  },
  spacing: 4,  // Adjust spacing as required
});

export default theme;