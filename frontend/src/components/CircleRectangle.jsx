/* eslint-disable react/prop-types */
import React from 'react';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ContentLabel from './ContentLabel';

function CircleRectangle(props) {
  const {
    size, color, site,
  } = props;
  const {
    title, link, snippet,
  } = site;
  const useStyles = makeStyles((theme) => ({
    circle: {
      backgroundColor: color,
      width: size,
      height: size,
      borderRadius: '50%',
      marginLeft: size * 0.1,
      marginTop: '10px',
    },
    link: {
      color: theme.palette.secondary.main,
    },
    text: {
      padding: '38px',
    },
    rectangle: {
      height: (size * 2.5),
      width: (size * 1.2),
      backgroundColor: '#ADC2B4',
      borderRadius: '15px',
    },
    labelBox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(0, 2, 0, 2),
    },
  }));
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Box position="relative" display="inline-flex">
        <div className={classes.rectangle}>
          <Box className={classes.circle} />

          {/* Title */}
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
          >
            <Typography variant="body1" component="div" align="center" className={classes.text}>
              <Link href={link} underline="always" target="_blank" className={classes.link}>
                {title.length > 70 ? `${title.substring(0, 70)}...` : title}
              </Link>
            </Typography>
          </Box>

          <br />
          {/* Content Label */}
          <Box
            className={classes.labelBox}
          >
            <ContentLabel isOpposite={site.is_opposite} />
          </Box>

          <br />
          <Box
            className={classes.labelBox}
          >
            <Typography variant="body1">
              {snippet.length > 125 ? `${snippet.substring(0, 125)}...` : snippet}
            </Typography>
          </Box>

        </div>
      </Box>
    </Grid>
  );
}

export default CircleRectangle;
