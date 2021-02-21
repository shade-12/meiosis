/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

// Style components import
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CircleRectangle from '../components/CircleRectangle';
import LogoButton from '../components/LogoButton';

// Constants import
import theme from '../theme';
import {
  BABY_PINK, PASTEL_PINK, DEEP_CHAMPAGNE, GOLD_CRAYOLA,
} from '../constants/colors';

// Backend service
import fetchSites from '../services/fetchSites';


const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflowX: 'hidden',
    padding: theme.spacing(0, 3, 3, 3),
  },
  form: {
    width: '30%',
  },
  textfield: {
    borderRadius: '10px',
    color: theme.palette.secondary.main,
    backgroundColor: 'white',
    width: '100%',
  },
  button: {
    color: 'white',
    textTransform: 'none',
    padding: theme.spacing(1, 4),
    backgroundColor: theme.palette.secondary.main,
  },
  buttonCitation: {
    color: 'white',
    textTransform: 'none',
    padding: theme.spacing(1, 4),
    backgroundColor: theme.palette.secondary.main,
  },
  buttonOutline: {
    border: '3px solid #484B70',
    marginLeft: '2%',
    marginTop: '-0.5%',
  },
  rectangle: {
    height: '400px',
    backgroundColor: 'red',
  },
}));

const REC_SITES = [
  {
    title: 'Why the vegan diet is not always green',
    url: 'https://www.bbc.com/future/article/20200211-why-the-vegan-diet-is-not-always-green',
  },
  {
    title: 'VEGANISM IS ‘SINGLE BIGGEST WAY’ TO REDUCE OUR ENVIRONMENTAL IMPACT, STUDY FINDS',
    url: 'https://www.independent.co.uk/life-style/health-and-families/veganism-environmental-impact-planet-reduced-plant-based-diet-humans-study-a8378631.html',
  },
  {
    title: 'Why Going Vegan Is One of the Best Things You Can Do for the Environment',
    url: 'https://www.forksoverknives.com/wellness/vegan-diet-helps-environmental-sustainability/',
  },
  {
    title: 'Is a vegan diet better for the environment?',
    url: 'https://www.bbcgoodfood.com/howto/guide/vegan-diet-better-environment#:~:text=Studies%20show%20that%20vegan%20diets,because%20they%20only%20ate%20fruit!',
  },
];

const CIRCLE_COLORS = [PASTEL_PINK, DEEP_CHAMPAGNE, BABY_PINK, GOLD_CRAYOLA];

const ALIGN_ARR = ['end', 'end', 'start', 'start'];
const JUSTIFY_ARR = ['end', 'start', 'end', 'start'];

function Options(props:any) {
  const classes = useStyles();
  const [inputURL, setInputURL] = useState(props.inputURL);
  const [results, setResults] = useState(props.results);

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputURL(event.target.value);
  };

  const startMeiosis = () => {
    fetchSites(props.inputURL).then((res) => {
      console.log(res);
      // Save result array to 'results' state
    });
  };

  const generateCitation = () => {};

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box className={classes.root}>

        <div>
          <LogoButton />
        </div>

        <br />

        {/* Headline */}
        <Typography variant="h6" align="center">
          <b>
            MAKING YOUR RESEARCH EXPERIENCE AB
            <i>CELL</i>
            UTELY&nbsp;
            <i>C</i>
            T
            <i>ELL</i>
            AR
          </b>
        </Typography>

        <br />

        <Typography variant="h6" align="center">
          The following websites discuss similar topics as your current one:
        </Typography>

        <br />

        <Grid container direction="row" justify="center">
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              value={props.inputURL}
              onChange={handleChange}
              InputProps={{
                style: {
                  fontSize: 20,
                  padding: '0.5rem',
                },
              }}
              className={classes.textfield}
            />
          </form>

          <Button onClick={generateCitation} className={classes.buttonOutline}>
            <Button className={classes.button}>
              <Typography variant="h6">
                Generate Citation
              </Typography>
            </Button>
          </Button>

        </Grid>

        <br />
        <br />

        <div>
          <Grid container direction="row" spacing={10}>
            {REC_SITES.map((site, i) => (
              <CircleRectangle
                key={i}
                color={CIRCLE_COLORS[i]}
                size={180}
                title={site.title}
                url={site.url}
              />
            ))}
          </Grid>
        </div>

        <br />
        <br />

        <Grid container style={{ width: '55vw' }}>
          <Typography variant="h4" paragraph>
            <b>Keywords</b>
          </Typography>
        </Grid>

        <br />

        <Grid container style={{ width: '55vw' }}>
          <Typography variant="h4" paragraph>
            <b>Guide</b>
          </Typography>
          <Typography variant="h6">
            The content of each recommended site is analyzed and compared with
            the content of input website to provide  information about the content
            similarity between a recommended site content and the input website content.
          </Typography>
        </Grid>

        <br />
        <br />
        <br />
        <br />

        <Button onClick={startMeiosis} className={classes.buttonOutline}>
          <Button className={classes.button}>
            <Typography variant="h6">
              Undergo Meiosis Again
            </Typography>
          </Button>
        </Button>

      </Box>
    </ThemeProvider>
  );
}

export default Options;
