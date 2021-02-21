import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Import app color scheme
import * as COLORS from './constants/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.MAIN_GREEN,
    },
    secondary: {
      main: COLORS.MAIN_PURPLE,
    },
    background: {
      paper: '#FFE9E5',
    },
  },
  typography: {
    fontFamily: 'Roboto Condensed',
  },
  overrides: {
    MuiGrid: {
      item: {
        margin: '-10px',
      },
      container: {
        marginLeft: '24px',
      },
    },
  },
});

export default responsiveFontSizes(theme);
