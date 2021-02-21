import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Import app color scheme
import * as COLORS from '../constants/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: COLORS.MAIN_GREEN,
            contrastText: COLORS.MAIN_PURPLE,
        },
        secondary: {
            main: COLORS.MAIN_PURPLE
        }
    },
    typography: {
        fontFamily: 'Roboto Condensed'
    },
    overrides:{
       MuiGrid: {
            item: {
                margin: '-10px'
            }, 
            container: {
                marginLeft: '20px'
            }
       } 
    }
});

export default responsiveFontSizes(theme);