import './Me.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ProjectIssue from '../../components/ProjectIssue'
import Spacer from '../../components/Spacer';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  right: {
    textAlign: 'right',
  }
});

const Me = () => {
  const classes = useStyles();

  return (
    <>
      <h1 align="left">My Issues</h1>
      <Grid container>
        <Grid item xs={12} md={6} sm={6}>
          <Typography variant="h6" component="h2">
            Issues Reported By Me
          </Typography>
        </Grid>
        <Grid item className={classes.right} xs={12} md={6} sm={6}>
          <Button size="small" variant="contained" href="#sort-project">
            Sort by Project
          </Button>
          <Button size="small" variant="contained" href="#sort-project">
            Sort by Recent
          </Button>
        </Grid>
      </Grid>
      <Spacer y={1} />

      <div>
        <Grid container>
          <Grid item xs={12}>
            <h1>Put Project Issues Here</h1>
          </Grid>

        </Grid>     
      </div>
    </>
  )
}

export default Me