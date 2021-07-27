import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProjectIssue from '../../components/ProjectIssue'
import CommunityIssueCard from '../../components/CommunityIssueCard'
import CommunityIssueModal from '../../components/CommunityIssueModal'
import ProjectCard from '../../components/ProjectCard'
import ProjectIssueModal from '../../components/ProjectIssueModal'
import Spacer from '../../components/Spacer'
import UserAPI from '../../utils/UserAPI'
import IssueAPI from '../../utils/IssueAPI'
import Box from '@material-ui/core/Box';
// eslint-disable-next-line
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  projectcard: {
    padding: 10,
  },
  right: {
    textAlign: 'right',
  }
})

const Dashboard = () => {
  const classes = useStyles();

  // ===================== Modals =====================
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // Open Modal Individually
  // status = Modal status if open or closed
  const [status, setStatus] = useState(false);
  const [openIssue, setIssueOpen] = useState(false);

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

  const [communityissue, setCommunityIssue] = useState(false);
  const handleCommunityIssueOpen = _id => {
    let issues = issueState

    issues = issues.map(issue => {
      if (_id === issue._id) {
        issue.openCommunity = !issue.openCommunity
      }
      return issue
    })

    const project = communityissue.project
    project.issues = issues
    setCommunityIssue({ project })
  }

  const handleClose = () => {
    setOpen(false);
    setStatus(false)
    setCommunityIssue(false)
  };

  // Get Info


  const [projectState, setProjectState] = useState([])
  const [issueState, setIssueState] = useState([])
  const [projectIssueState, setProjectIssueState] = useState([])

  const [myid, setMyId] = useState('');


  useEffect(() => {
    IssueAPI.getAll()
      .then(({ data: issues }) => {
        issues.map(issue => ({
          ...issue,
          isOpen: false,
          openCommunity: false
        }))
        issues.reverse()
        setIssueState(issues)
        console.clear()
      })
      .catch(err => console.log(err))
    //gets the users info including their issues
    UserAPI.me()
      .then(res => {
        // console.log('this is res in Dashboard', res)
        const project = res.data
        project.issues = res.data.issues.map(issues => ({
          ...issues,
          isOpen: false,
          openCommunity: false
        }))
        project.projects.reverse()
        project.issues.reverse()
        setStatus({ project })
        setCommunityIssue({ project })
        setProjectIssueState(project.issues)
        setProjectState(res.data.projects)
        setMyId(res.data._id)
        console.clear()
      })
      .catch(err => console.log('useEffect UserAPI.me err', err))
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

        {projectState.slice(0, 5).map((projectData) => (
          <Grid className={classes.projectcard} item xs={12} sm={4} md={4} lg={2}>
            {/* <Link to={`/projects/${id}`}> */}
            <Link to={`/project/${projectData._id}`}>
              <ProjectCard
                key={projectData._id}
                title={projectData.title}
                description={projectData.description}
                owner={projectData.owner.name}
              />
            </Link>
          </Grid>
        ))}
        
      </Grid>
      <Spacer y={4} />
      <Grid container>
        <Grid item xs={12} lg={8} md={7} sm={7}>

          <Grid container>
          {/* Project Issues */}
            <Grid item xs={12} lg={8} md={7} sm={7}>
              <Typography variant="h6" component="h2">
                Project Issues
              </Typography>
            </Grid>
          </Grid>
          <Spacer y={1} />

          {projectIssueState.filter(issue => issue.status === 'Open').slice(0, 8).map(issueData => (
            <>
              <Link onClick={() => handleIssueOpen(issueData._id)}>
                <ProjectIssue
                  key={issueData.id}
                  id={issueData._id}
                  title={issueData.title}
                  priority={issueData.priority}
                  status={issueData.status}
                  date={issueData.createdAt}
                  author={issueData.author.name}
                  project={issueData.pid}
                  // date={issueData._id.getTimestamp}
                />
              </Link>

              {/* See Project Page for how to call ProjectIssueModals properly */}
              <ProjectIssueModal 
                id={issueData._id}
                title={issueData.title}
                body={issueData.body}
                author={issueData.author.name}
                status={issueData.status}
                isPublic={issueData.isPublic}
                date={issueData.createdAt}
                replies={issueData.replies}
                // authorusername={issueData.author.username}
                priority={issueData.priority}
                open={issueData.isOpen}
                handleClose={() => handleIssueOpen(issueData._id)}
              />
            </>
          ))}
          
        </Grid>
        <Box m={2}/>
        {/* Community Issues */}
        <Grid item xs={12} lg={3} md={4} sm={4}>
          <Typography variant="h6" component="h2">
            Help Answer Others' Issues
          </Typography>
          <Spacer y={1} />
          {issueState.filter(issue => issue.isPublic === true && issue.status !== 'Closed' && issue.author._id !== myid).slice(0, 8).map(issueData => (
            <>
              <Link onClick={() => handleCommunityIssueOpen(issueData._id)}>
                <CommunityIssueCard
                  key={issueData.id}
                  id={issueData._id}
                  title={issueData.title}
                  body={issueData.body}
                  status={issueData.status}
                  date={issueData.createdAt}
                  author={issueData.author.name}
                  replycount={issueData.replies.length}
                />
              </Link>

              <CommunityIssueModal
                id={issueData._id}
                title={issueData.title}
                body={issueData.body}
                status={issueData.status}
                date={issueData.createdAt}
                author={issueData.author.name}
                replies={issueData.replies}
                open={issueData.openCommunity}
                handleClose={() => handleCommunityIssueOpen(issueData._id)}
              />
            </>
          ))}

          <Spacer y={1} />
          

        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard