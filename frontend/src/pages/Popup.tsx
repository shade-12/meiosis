import React, { useEffect, useState } from 'react';

// Style components import
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Circle from '../components/Circle';
import LogoButton from '../components/LogoButton';

// Constants import
import theme from '../theme';
import { BABY_PINK, PASTEL_PINK } from '../constants/colors';

// Backend service
import fetchSites from '../services/fetchSites';


const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 3, 3, 3),
  },
  form: {
    width: '70%',
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
    backgroundColor: '#484B70',
  },
  buttonOutline: {
    border: '3px solid #484B70',
  },
}));

const CIRCLE_COLORS = [PASTEL_PINK, '#f0b0a8', BABY_PINK, '#F3C1B9'];

const ALIGN_ARR = ['end', 'end', 'start', 'start'];
const JUSTIFY_ARR = ['end', 'start', 'end', 'start'];

function Popup() {
  const classes = useStyles();
  const [inputURL, setInputURL] = useState('');
  const [citation, setCitation] = useState('');
  const [sites, setSites] = useState<any[]>([]);
  const [keywords, setKeywords] = useState<any[]>([]);
  const [showCit, setShowCit] = useState(false);

  useEffect(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      const currentURL = tabs[0].url;
      setInputURL(currentURL || '');
    });
  });

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

  const redirectToHome = () => {
    if (chrome.runtime.openOptionsPage) {
      // Set local storage
      localStorage.setItem('inputURL', inputURL);
      localStorage.setItem('keywords', JSON.stringify(keywords));
      localStorage.setItem('citation', citation);
      localStorage.setItem('sites', JSON.stringify(sites));
      chrome.runtime.openOptionsPage();
    }
  };

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

        <Button onClick={startMeiosis} className={classes.buttonOutline}>
          <Button className={classes.button}>
            <Typography variant="h6">
              Start Meiosis
            </Typography>
          </Button>
        </Button>

        <br />

        {
        keywords.length > 0
        && (
        <>
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
            <Grid container direction="row">
              {sites.map((site, i) => (
                <Circle
                  key={i}
                  color={CIRCLE_COLORS[i]}
                  size={160}
                  title={site.title}
                  url={site.link}
                  align={ALIGN_ARR[i]}
                  justify={JUSTIFY_ARR[i]}
                />
              ))}
            </Grid>
          </div>

          <br />
          <br />

          <Button onClick={redirectToHome} className={classes.buttonOutline}>
            <Button className={classes.button}>
              <Typography variant="h6">
                More Details
              </Typography>
            </Button>
          </Button>
        </>
        )
        }

      </Box>
    </ThemeProvider>
  );
}

export default Popup;
