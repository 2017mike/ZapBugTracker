import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProjectIssue from '../../components/ProjectIssue'
import CommunityIssueCard from '../../components/CommunityIssueCard'
import ProjectCard from '../../components/ProjectCard'
import ProjectIssueModal from '../../components/ProjectIssueModal'
import Spacer from '../../components/Spacer'
import UserAPI from '../../utils/UserAPI'
// eslint-disable-next-line
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  projectcard: {
    marginRight: 20,
    marginBottom: 20,
  },
  right: {
    textAlign: 'right',
  }
})

const Dashboard = () => {
  const classes = useStyles();

  // Modals

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Open Modal Individually
  const [status, setStatus] = useState({ isLoading: true });
  const { isLoading, project, err } = status;

  const handleIssueOpen = _id => {
    let issues = status.project.issues

    issues = issues.map(issue => {
      if (_id === issue._id) {
        issue.isOpen = !issue.isOpen
      }
      return issue
    })
    const project = status.project
    project.issues = issues
    setStatus({ project })
  }

  // Get Info

  const [projectState, setProjectState] = useState([])
  const [issueState, setIssueState] = useState([])

  useEffect(() => {
    UserAPI.me()
      .then(data => {
        setProjectState(data.data.projects)
        setIssueState(data.data.issues)
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line
  }, [])



  return(
    <>
      <h1>Dashboard</h1>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2">
            My Projects
          </Typography>
        </Grid>

        {projectState.map((projectData) => (
          <Grid className={classes.projectcard} item xs={12} sm={4} lg={2}>
            {/* <Link to={`/projects/${id}`}> */}
            <Link to={`/project/${projectData._id}`}>
              <ProjectCard
                key={projectData._id}
                title={projectData.title}
                description={projectData.description}
                author={projectData.owner.name}
              />
            </Link>
          </Grid>
        ))}
        
      </Grid>
      <Spacer y={4} />
      <Grid container>
        <Grid item xs={12} lg={8}>
          <Grid container>
            <Grid item xs={12} lg={8} md={6} sm={6}>
              <Typography variant="h6" component="h2">
                Project Issues
              </Typography>
            </Grid>
            <Grid item className={classes.right} xs={12} lg={4} md={6} sm={6}>
              <Button size="small" variant="contained" href="#contained-buttons">
                My Issues
              </Button>
              <Button size="small" variant="contained" href="#contained-buttons">
                Recently Updated
              </Button>
            </Grid>
          </Grid>
          <Spacer y={1} />

          {issueState.map((issueData) => (
            <>
              <Link onClick={handleClickOpen}>
                <ProjectIssue
                  key={issueData.id}
                  title={issueData.title}
                  body={issueData.body}
                  status={issueData.status}
                  priority={issueData.priority}
                  id={issueData._id}
                  author={issueData.author.username}
                />
              </Link>

              {/* See Project Page for how to call ProjectIssueModals properly */}
              {/* <ProjectIssueModal 
                id={issueData._id}
                title={issueData.title}
                body={issueData.body}
                author={issueData.author.name}
                // authorusername={issueData.author.username}
                status={issueData.status}
                priority={issueData.priority}
                open={open}
                handleClose={handleClose}
              /> */}
            </>
          ))}
          
        </Grid>
        <Spacer x={2} />
        <Grid item xs={12} lg={3}>
          <Typography variant="h6" component="h2">
            Help Answer Others' Issues
          </Typography>
          <CommunityIssueCard />
          <Spacer y={1} />
          

        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard