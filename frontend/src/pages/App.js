import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// React components import
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LogoButton from '../components/LogoButton';
// import Home from './Home';
import Popup from './Popup';
// import About from './About';
// import Error from './Error';

// Contexts: To enable information-sharing between siblings
// import AppContext from '../contexts/AppContext';
// import useAppData from '../hooks/useAppData';

// Constant import
import * as ROUTES from '../constants/routes';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
	box: {
    maxWidth: '100%',
    margin: '0 2rem 2rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.secondary.main
	},
  headline: {
    textTransform: 'uppercase'
  },
  button: {
		color: 'white',
		textTransform: 'None',
    padding: theme.spacing(1, 4),
    borderRadius: '8px',
    backgroundColor: theme.palette.secondary.main
	}
}));

function App() {
  const classes = useStyles();
  // const appData = useAppData();

  return (
    // <AppContext.Provider value={appData}>
      <Router>
        <Box className={classes.box}>
          {/* Navigation bar */}
          <LogoButton />

          {/* Headline */}
          <Typography variant="h6" align="center" className={classes.headline}>
            <b>Making your research experience ab<i>cell</i>utely <i>c</i>t<i>ell</i>ar.</b>
          </Typography>

          <br />
          
          {/* Main pages: route-based rendering */}
          <Switch>
            {/* <Route
              exact
              path={ROUTES.HOME}
              render={() => <Home />}
            /> */}
            <Route
              exact
              path={ROUTES.POPUP}
              render={() => <Popup />}
            />
            {/* <Route
              exact
              path={ROUTES.ABOUT}
              render={() => <About />}
            />
            <Route component={Error} /> */}
          </Switch>
        </Box>
      </Router>
    // </AppContext.Provider>
  );
}

export default App;
