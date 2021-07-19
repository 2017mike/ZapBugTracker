import './Project.css';
import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import FaceIcon from '@material-ui/icons/Face';
import AddIcon from '@material-ui/icons/Add';
import Issue from '../../components/Issue'
import CommunityIssue from '../../components/CommunityIssue'
import ProjectIssue from '../../components/ProjectIssue'
import ProjectIssueModal from '../../components/ProjectIssueModal'
import ProjectCard from '../../components/ProjectCard'
import Spacer from '../../components/Spacer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  mb: {
    marginBottom: 20,
  },
  issueleft: {
    paddingRight: 20,
  },
  issueright: {
    paddingLeft: 20,
    borderLeft: '1px solid #ccc',
  },
  issuerightchip: {
    marginBottom: 20,
    borderLeft: '1px solid #ccc',
  },
  projectcard: {
    marginRight: 20,
    marginBottom: 20,
  },
  column: {
    marginRight: 20,
    marginBottom: 20,
  },
  right: {
    textAlign: 'right',
  },
  columntest: {
    backgroundColor: '#ddd'
  }, 
});



const Project = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return(
    <>
      <Grid container>
        <Grid className={classes.columngrid} item xs={11}>
          <Typography className={classes.mb} variant="h3" component="h2">
                Project: Gantt Museum
          </Typography>
        </Grid>
        <Grid className={classes.columngrid} item xs={1}>
          <div className={classes.editbtn}>
            <Chip
              clickable
              label="Edit Project"
              variant="outlined"
              size='small'
            />
          </div>
        </Grid>
        <Grid className={classes.columngrid} item xs={12}>
          <div className={classes.column}>
            <Card className={classes.columntest}>
              <CardContent>
                
                <Typography variant="p" component="p">
                  The Gantt Museum (Baltimore, MD) aims to redesign its website. The museum contains the world's largest collection of gantt charts created by project managers from around the world. The Museum has begun digitizing and cataloging each piece and would like to display them on their website, along with other pertinent Museum information and content.
                </Typography>
                
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className={classes.columngrid} item xs={4}>
          <div className={classes.column}>
            <Card className={classes.columntest}>
              <CardContent>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography className={classes.mb} variant="h5" component="h5">
                      Open
                    </Typography>
                  </Grid>
                  <Grid className={classes.right} item xs={6}>
                    <Chip
                      icon={<AddIcon />}
                      clickable
                      className={classes.addbtn}
                      label="Add Issue"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                
              
                <Link onClick={handleClickOpen}>
                  <Issue />
                </Link>
                <ProjectIssueModal 
                  open={open}
                  handleClose={handleClose}
                />

                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />

              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid className={classes.columngrid} item xs={4}>
          <div className={classes.column}>
            <Card className={classes.columntest}>
            <CardContent>
              <Grid container>
                <Grid item xs={6}>
                  <Typography className={classes.mb} variant="h5" component="h5">
                    In Progress
                  </Typography>
                </Grid>
                <Grid className={classes.right} item xs={6}>
                  <Chip
                    icon={<AddIcon />}
                    clickable
                    className={classes.addbtn}
                    label="Add Issue"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Issue />
              <Issue />
              <Issue />
              <Issue />
              
            </CardContent>
          </Card>
          </div>
        </Grid>
        <Grid className={classes.columngrid} item xs={4}>
          <div className={classes.column}>
            <Card className={classes.columntest}>
              <CardContent>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography className={classes.mb} variant="h5" component="h5">
                      Closed
                    </Typography>
                  </Grid>
                  <Grid className={classes.right} item xs={6}>
                    <Chip
                      icon={<AddIcon />}
                      clickable
                      className={classes.addbtn}
                      label="Add Issue"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />

              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Project