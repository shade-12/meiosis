import React from 'react';

// React components import
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LogoButton from './components/LogoButton';
import Popup from './pages/Popup';
import './App.css';


const useStyles = makeStyles(theme => ({
	box: {
    maxWidth: '100%',
    margin: '0 2rem 2rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // color: theme.palette.secondary.main
	},
  headline: {
    textTransform: 'uppercase',
    marginTop: '15px',
  },
  button: {
		color: 'white',
		textTransform: 'None',
    // padding: theme.spacing(1, 4),
    borderRadius: '8px',
    // backgroundColor: theme.palette.secondary.main
	}
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      {/* Logo */}
      {/* <LogoButton /> */}

      {/* Headline */}
      <p className={classes.headline}>
        <b>Making your research experience ab<i>cell</i>utely <i>c</i>t<i>ell</i>ar.</b>
      </p>

      <br />

      {/* <Popup /> */}
    </div>
  );
}

export default App;
