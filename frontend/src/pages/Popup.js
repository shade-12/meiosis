import React from 'react';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    container: {
		color: theme.palette.secondary.main,
		height: '82vh'
	},
    grow: {
        flexGrow: 1
	},
	chipContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	chip: {
		padding: '2rem',
		borderRadius: '50px'
	}
}));

function Popup() {
	const classes = useStyles();

	return (
		<Grid container alignItems="center" spacing={2} className={classes.container}>
            

		</Grid>
	);
}

export default Popup;