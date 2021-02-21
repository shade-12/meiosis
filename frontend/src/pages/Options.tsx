/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

// Style components import
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CircleRectangle from '../components/CircleRectangle';
import ContentLabel from '../components/ContentLabel';
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
  chipContainer: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
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

const CIRCLE_COLORS = [PASTEL_PINK, DEEP_CHAMPAGNE, BABY_PINK, GOLD_CRAYOLA];

function Options() {
  const classes = useStyles();
  const [inputURL, setInputURL] = useState<any>(localStorage.getItem('inputURL'));
  const [citation, setCitation] = useState<any>(localStorage.getItem('citation'));
  const [sites, setSites] = useState<any>(JSON.parse(localStorage.getItem('sites') || '[]'));
  const [keywords, setKeywords] = useState<any>(JSON.parse(localStorage.getItem('keywords') || '[]'));
  const [showCit, setShowCit] = useState(false);

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputURL(event.target.value);
  };

  const startMeiosis = () => {
    fetchSites(inputURL).then((res) => {
      console.log(res);
      setCitation(res.citation);
      setSites(res.body.sites);
      setKeywords(res.keywords);
    });
  };

  const generateCitation = () => setShowCit(true);

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

        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            value={inputURL}
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

        <br />
        {showCit
          ? (
            <Typography variant="body1" align="center" paragraph>
              {citation}
            </Typography>
          ) : (
            <Button onClick={generateCitation} className={classes.buttonOutline}>
              <Button className={classes.button}>
                <Typography variant="h6">
                  Generate Citation
                </Typography>
              </Button>
            </Button>
          )}

        <br />
        <br />

        <div>
          <Grid container direction="row" spacing={10}>
            {sites.map((site: { title: any; link: any; }, i: number) => (
              <CircleRectangle
                key={i}
                color={CIRCLE_COLORS[i]}
                size={180}
                site={site}
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

          <Grid item container className={classes.chipContainer}>
            {keywords.map((kw: React.ReactNode, i: number) => <Chip key={i} label={<Typography variant="body1">{kw}</Typography>} style={{ backgroundColor: 'white' }} />)}
          </Grid>
        </Grid>

        <br />
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

          <Grid item container direction="row" alignItems="center">
            <ContentLabel isOpposite />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Typography variant="h6">
              Conflicting content found in the recommnded website content.
            </Typography>
          </Grid>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <Grid item container direction="row" alignItems="center">
            <ContentLabel />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Typography variant="h6">
              No conflicting content found in the recommnded website content.
            </Typography>
          </Grid>
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
