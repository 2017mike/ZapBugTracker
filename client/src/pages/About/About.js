import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import ContactForm from '../../components/ContactForm'

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 275,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  brand: {
    textTransform: 'uppercase',
    fontFamily: 'Days One',
    fontSize: '64px'
  },
  title: {
    marginBottom: '6vh',
    marginTop: '4vh',
  },
  herocontent: {
    padding: theme.spacing(4, 35, 6),
    marginRight: '2vh',
  },
  heroButtons: {
    marginTop: '7vh',
  },
  media: {
    height: 145,
  },
  profile: {
    borderRadius: 120,
    marginBottom: 12,
  },
  zapbrand: {
    maxHeight: '5vh',
  },
  padright: {
    marginRight: '2vh',
  },
  team: {
    marginRight: '2vh',
  }
}));

export default function About() {
  const classes = useStyles();

  // Modal: Open Contact Form
  const [openContact, setContactOpen] = useState(false);
  
  const handleContactOpen = () => {
    setContactOpen(true);
  };
  
  // eslint-disable-next-line
  const handleClose = () => {
    setContactOpen(false)
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container maxWidth="lg">
            <Card className={classes.herocontent}>
            <Typography component="h1" variant="h2" align="center" className={classes.title} color="textPrimary">
              About  <img src="https://i.imgur.com/Q0IAOwI.png" alt="" className={classes.zapbrand} />
            </Typography>
            <Typography variant="body1" align="left" color="textSecondary" paragraph>
              Zap is an app created to combine the project management and bug tracking aspects of app development. You can ask for help both within your group or ask the community. Our goal is to streamline the process of app development by giving you one place to manage projects and ask any and all questions related to development. Let's get Zapping!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>

                  <Link onClick={handleContactOpen}>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      >
                      Contact the ZAP team
                    </Button>
                  </Link>
                  <ContactForm 
                    open={openContact}
                    handleClose={() => setContactOpen(false)}
                  />

                </Grid>
              </Grid>
            </div>
            </Card>
          </Container>

        {/* End hero unit */}
        <Box m={3.2} />

      

        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
          >

            {[{ 
              name: 'Dia Seung', 
              url: 'https://i.imgur.com/uRDhPgJ.jpeg', 
              github: 'diaseu', 
              linkedin: 'dianaseung'
            }, {
              name: 'Michael Scharf',
              url: 'https://i.imgur.com/ZsTfgsV.png',
              github: '2017mike',
              linkedin: 'michael-scharf-398899111'
            }, {
              name: 'Sle Ahn',
              url: 'https://i.imgur.com/M7kQZ7q.jpeg',
              github: 'silentsonata92',
              linkedin: 'sle-ahn'
            }, {
              name: 'Jake Eckfeldt',
              url: 'https://i.imgur.com/pju3WaK.png',
              github: 'JEckfeldt',
              linkedin: 'JEckfeldt'
            }].map(column => (
              <>

                <Grid item xs={12} sm={6} md={3}>
                  <Card className={classes.team}>
                    <CardContent align='center'>
                      <img src={column.url} width="165" height="165" alt="" className={classes.profile} />

                      <Typography variant="h6" component="h3" align='center'>
                        {column.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component={'span'}>
                      </Typography>
                      <Button size="small" color="primary">
                        <Link href="https://www.linkedin.com/in/dianaseung/" target="_blank">
                          LinkedIn
                        </Link>
                      </Button>
                      <Button size="small" color="primary">
                        <Link href="https://github.com/diaseu" target="_blank" >
                          GitHub
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </>
            ))}

          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}