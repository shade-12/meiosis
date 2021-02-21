import React from 'react';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Circle(props) {
    const { size, color, title, url} = props;
    const useStyles = makeStyles(theme => ({
        circle: {
            backgroundColor: color, 
            width: size,
            height: size,
            borderRadius: '50%',
            marginLeft: size*0.1,
            marginTop: '10px', 
        },
        link: {
            color: theme.palette.secondary.main
        },
        text: {
            padding: '20px', 
        },
        rectangle: {
            height: (size*2.5),
            width: (size*1.2),
            backgroundColor: '#ADC2B4',
            borderRadius: '15px'
            //opacity: '0.5'
        }
    }));    
    const classes = useStyles();

    return (
        <Grid item xs={3}>
            <Box position="relative" display="inline-flex">
                <div className={classes.rectangle}>
                    <Box className={classes.circle}></Box>
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            //display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                        <Typography variant="body2" component="div" align="center" className={classes.text}>
                            <Link href={url} underline="always" target="_blank" className={classes.link}>
                                {title.length > 70 ? title.substring(0, 70) + '...' : title}
                            </Link>
                        </Typography>
                    </Box>
                </div>
            </Box>
        </Grid>
    );
}

export default Circle;