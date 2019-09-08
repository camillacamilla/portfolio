import React from 'react';

import { Grid, Paper, Typography, Container, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Done from '@material-ui/icons/Done';

// assets
import workshop from '../../assets/image/workshop.png'

import usertest from '../../assets/image/usertest.png'


const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: '#FFFAF7'
  },
  link: {
    color: '#4A4A4A'
  },
  camilla: {
    maxWidth: '100%'
  },
  img: {
    maxWidth: 64,
    margin: 5
  },
  paper: {
    padding: theme.spacing(3, 2),
    backgroundColor: '#FFFAF7',
    color: '#4A4A4A'
  },
  title: {
    fontWeight: 800,
    padding: theme.spacing(1, 0),
    fontSize: 32,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4, 0),
      fontSize: 52,
    },
  },
  subtitle: {
    fontWeight: 800,
    padding: theme.spacing(1, 0),
    fontSize: 18,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4, 0),
    },
  },
  text: {
    padding: theme.spacing(2, 0)
  },
  gutters:{
    paddingTop: 0,
    paddingBottom: 0
  }
}));

export default function Methodologies(props) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container id="sectio3">
        <section >
          <div className={classes.content}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={0} xs={12} className={classes.paper}>
                  <Typography className={classes.title} component="h2" variant="h4">Methodologies</Typography>
                  <Typography className={classes.subtitle} variant="h5">#01  Workshops</Typography>
                  <Typography variant="body2">PROJECT: <b>Health insurance website user’s area</b></Typography>
                  <Typography variant="body2">ROLE: <b>Facilitator</b></Typography>
                  <Typography variant="body2">DATE: <b>April, 2019</b></Typography>
                  <Typography variant="body2">THE CHALLENGE: To let the squad and stakeholders on the same level of knowledge of product on the first sprint of this agile project.
                  </Typography>
                  <Typography className={classes.text} variant="body2">Alignment workshop / Product vision workshops / product strategy workshop /  brainstorming sessions</Typography>

                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <img className={classes.camilla} src={workshop} alt="workshop" />
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper elevation={0} xs={12} className={classes.paper}>
                  <Typography className={classes.title} variant="h5">#02  User Tests</Typography>
                  <Typography variant="body2">PROJECT: <b>Health insurance website user’s area</b></Typography>
                  <Typography variant="body2">ROLE: <b>Moderator / data visualization</b></Typography>
                  <Typography variant="body2">DATE: <b>May, 2019</b></Typography>
                  <Typography variant="body2">THE CHALLENGE: Decision6 is a storefront people flow analysis service that generates insights for market intelligence through a unique platform with intuitive dashboards.
                  </Typography>

                  <Typography className={classes.text} variant="body2">
                    THE CHALLENGE: Find out if the proposed hypothesis makes the task easier for the user to perform actions such as changing password, email. In addition to check if switching between holder and dependent is intuitive.
                  </Typography>
                  <Typography variant="body2">For the application of the tests we used the internal public, and the planning was lined to fit in 01 sprint, since the recruitment, consolidation and implementation of the results. Usability testing in context moderated by UX Designers.  For this test we recruited a group of people (24-46 years old), with different levels of affinity with technology, as well as various health plans. The sample profiles were crossed with personas designed to assess consistency of behaviors at the specific moment of the experiment, in accordance with the V.U.C.A. * concept.
                  </Typography>
                  <Typography className={classes.text} variant="body2">Test Application:</Typography>
                  <List dense={true}>
                    <ListItem className={classes.gutters}>
                      <ListItemIcon>
                        <Done />
                      </ListItemIcon>
                      <ListItemText primary="Individual tests with moderator" />
                    </ListItem>
                    <ListItem className={classes.gutters}>
                      <ListItemIcon>
                        <Done />
                      </ListItemIcon>
                      <ListItemText primary="Time allowed for the test: 20 minutes (setting, assignment, application / performance and post-test with open questions)" />
                    </ListItem>
                    <ListItem className={classes.gutters}>
                      <ListItemIcon>
                        <Done />
                      </ListItemIcon>
                      <ListItemText primary="Planned time for each task: 30 seconds." />
                    </ListItem>
                    <ListItem className={classes.gutters}>
                      <ListItemIcon>
                        <Done />
                      </ListItemIcon>
                      <ListItemText primary="Location: the participant's familiar environment, not controlled in order to test usability in the user's natural environment at the time they make use of the service." />
                    </ListItem>
                    <ListItem className={classes.gutters}>
                      <ListItemIcon>
                        <Done />
                      </ListItemIcon>
                      <ListItemText primary="Participant permission for video and sound capture;" />
                    </ListItem>
                    <ListItem className={classes.gutters}>
                      <ListItemIcon>
                        <Done />
                      </ListItemIcon>
                      <ListItemText primary="Held in 2 days." />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <img className={classes.camilla} src={usertest} alt="usertest" />
                </Paper>
              </Grid>
            </Grid>

          </div>
        </section>
      </Container>
    </>
  );
}
