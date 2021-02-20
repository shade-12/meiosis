import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// React components import
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
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


const useStyles = makeStyles({
	box: {
    maxWidth: '100%',
    margin: '0 2rem 2rem 2rem'
	}
});

function App() {
  const classes = useStyles();
  // const appData = useAppData();

  return (
    // <AppContext.Provider value={appData}>
      <Router>
        {/* Navigation bar */}
        <LogoButton />

        {/* Main pages: route-based rendering */}
        <Box className={classes.box}>
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
