import React from 'react';
import { Link } from 'react-router-dom';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as MeiosisLogo } from '../assets/meiosis-logo.svg';

// Constants import
import { HOME } from '../constants/routes';


const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: '4rem',
        height: '4rem',
        
    }
}));

function LogoButton() {
    const classes = useStyles();

    return (
        <Link to={HOME} className={classes.root}>
            {/* Logo Image */}
            <MeiosisLogo className={classes.logo} />

            {/* Spacing */}
            &nbsp;&nbsp;

            {/* Logo Text */}
            <Typography variant="h4"><b>Meiosis</b></Typography>
        </Link>
    );
}

export default LogoButton;