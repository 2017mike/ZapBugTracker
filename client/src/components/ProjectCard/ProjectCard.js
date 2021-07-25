import './ProjectCard.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Spacer from '../Spacer';

const useStyles = makeStyles({
  root: {
    minWidth: 175,
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    height: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
  },
  pos: {
    fontSize: 13,
    marginBottom: 12,
  },
});

const ProjectCard = props => {
  const classes = useStyles();

  return (
    <Card className="root">
      <CardContent>
        <Typography color="textSecondary" >
          Project
        </Typography>
        <Typography >
          {props.title}
        </Typography>
        
        <Typography className="description" color="textSecondary"  >
          {props.description}
        </Typography>
      <CardActions>
        <Spacer y={2}/>
        <div className= 'chip'>
        <Chip
          icon={<FaceIcon />}
          size='small'
          className='ownerName'
          label={props.owner}
        />
        </div>

      </CardActions>
      </CardContent>
    </Card>
  )
}

export default ProjectCard