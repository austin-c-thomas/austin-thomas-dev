import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        height: '50px',
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: '5rem',
      },
    },
    MuiInputBase: {
      root: {
        color: '#fff',
        fontSize: '1.4rem',
        
      }
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.09)',
      },
    },
    MuiFormLabel: {
      root: {
        color: 'rgba(180, 180, 180)',
      },
    },
  },
});

export default theme;
