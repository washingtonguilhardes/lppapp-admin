import React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles'


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gap: theme.spacing(3),
    [theme.breakpoints.between(1024, 1300)]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
    [theme.breakpoints.between('sm', 1023)]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.down(426)]: {
      gridTemplateColumns: '1fr',
    }
  }
}))

const SuggestionContainer: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
}

export default SuggestionContainer;