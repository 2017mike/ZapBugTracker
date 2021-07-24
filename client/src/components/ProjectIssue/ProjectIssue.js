import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import IssueDetail from '../IssueDetail'
import IssueAPI from '../../utils/IssueAPI'
import {
  Route,
  Link,
  useParams
} from "react-router-dom";


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 12,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  secondary: {
    fontSize: 11,
    textAlign: 'right',
  },
  priority: {
    fontSize: 13,
    textAlign: 'center',
    marginRight: 10,
    fontWeight: '800'
  },
  center: {
    flexDirection: "column",
    justifyContent: "center",
    verticalAlign: 'center',
  },
});

const ProjectIssue = props => {
  const classes = useStyles();

  const [priorities, setPriorities] = useState([]);

  const obj = {
    Medium: "yellow",
    High: "red",
    Low: "blue"
  }

  useEffect(() => {
    // console.clear();
    // console.log(props)
    // console.log(props.id);
    IssueAPI.getById(`${props.id}`)
      .then((res) => {
        // console.log('this is our useEffect', res);
        setPriorities(props.priority)
        // if res.data.priority = 'High'
      })
      .catch(e => console.error(e))
  }
  // eslint-disable-next-line
    , [])

  return (

    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <IssueDetail />

          <Grid item className={classes.center} xs={12}>
            <Icon className={classes.priority} style={{ color: obj[props.priority] }} >radio_button_unchecked</Icon>

            {props.title}

          </Grid>
        </Grid>
      </CardContent>
    </Card>

  )
}

export default ProjectIssue