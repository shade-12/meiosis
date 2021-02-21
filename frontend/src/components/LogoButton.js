import React from 'react';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as MeiosisLogo } from '../assets/meiosis-logo.svg';

// Constants import
import { WHITE,  MAIN_PURPLE} from '../constants/colors';


const useStyles = makeStyles(theme => ({
    root: {
        color: WHITE,
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: theme.spacing(2, 0, 1, 0),
        width: '100vw',
        height: '90px',
        backgroundColor: MAIN_PURPLE
    },
    logo: {
        width: '4rem',
        height: '4rem'
    }
}));

function LogoButton() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* Logo Image */}
            <MeiosisLogo className={classes.logo} />

            {/* Spacing */}
            &nbsp;&nbsp;

            {/* Logo Text */}
            <Typography variant="h2"><b>Meiosis</b></Typography>
        </div>
    );
}

export default LogoButton;