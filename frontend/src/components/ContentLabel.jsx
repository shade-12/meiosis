/* eslint-disable react/prop-types */
import React from 'react';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';


const LABEL_CONTENT = [
  {
    text: 'CONFLICTING CONTENT',
    color: '#95757D',
  },
  {
    text: 'SIMILAR CONTENT',
    color: '#6A6DA0',
  },
];

function ContentLabel(props) {
  const {
    isOpposite,
  } = props;
  const label = isOpposite ? LABEL_CONTENT[0] : LABEL_CONTENT[1];

  const useStyles = makeStyles({
    container: {
      backgroundColor: label.color,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      width: '150px',
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h6" align="center"><b>{label.text}</b></Typography>
    </div>
  );
}

export default ContentLabel;
