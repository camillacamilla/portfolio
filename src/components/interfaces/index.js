import React from 'react';

import { Grid, Paper, Typography, Container, Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// assets
import image from '../../assets/image/321comm.png'

import d6 from '../../assets/image/decision6.png'


const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: '#FFFAF7'
  },
  link: {
    color:'#4A4A4A'
  },
  camilla: {
    maxWidth: '100%'
  },
  img:{
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
  text:{
    padding: theme.spacing(2, 0)
  }
}));

export default function Interfaces(props) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container id="sectio2">
        <section >
          <div className={classes.content}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={0} xs={12} className={classes.paper}>
                  <Typography className={classes.title} component="h1" variant="h3">Interfaces</Typography>
                  <Typography className={classes.subtitle} variant="h5">#01  Interfaces for a SaaS Startup</Typography>
                  <Typography variant="body2">PROJECT: <b>321COMM</b></Typography>
                  <Typography variant="body2">ROLE: <b>UI Designer</b></Typography>
                  <Typography variant="body2">DATE: <b>December, 2017</b></Typography>
                  <Typography variant="body2">WEBSITE: <a target='__blank' className={classes.link}href="https://www.instagram.com/p/BhFKelhn2Sa/">www.instagram.com/p/BhFKelhn2Sa/</a></Typography>
                  <Typography variant="body2">THE CHALLENGE: Develop interfaces for chatbot based communication and advertising services. Startup based in Rio de Janeiro, Brazil.
                  </Typography>

                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <img className={classes.camilla} src={image} alt="Bradesco" />
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper elevation={0} xs={12} className={classes.paper}>
                  <Typography className={classes.subtitle} variant="h5">#02  Interface for a SaaS Startup</Typography>
                  <Typography variant="body2">PROJECT: <b>Decision6</b></Typography>
                  <Typography variant="body2">ROLE: <b>UI Designer</b></Typography>
                  <Typography variant="body2">DATE: <b>Outubro 2017</b></Typography>
                  <Typography variant="body2">WEBSITE: <a className={classes.link}href="http://www.decision6.com">www.decision6.com</a></Typography>
                  <Typography variant="body2">THE CHALLENGE: Decision6 is a storefront people flow analysis service that generates insights for market intelligence through a unique platform with intuitive dashboards.
                  </Typography>

                  <Typography className={classes.text} variant="body2">
                  Early on in the immersion was clear that the website was a digital version of the company's presentation. Also there wasn’t any call to action on the site, and this was something recurring on competitor’s website. The insights resulting from immersion build personas and the user journey.
                  </Typography>
                  <Typography variant="body2">Using with paper wireframes during a sprint and we tested the new user flow with selected users and stakeholders. We created high fidelity prototypes in Invision that allowed us some usability testing. Through the live tests we identified some points of attention, refined the prototype and understood that it would be important to improve the contact section by creating multiple opportunities through CTAs on all pages without making it repetitive. Other point of attention would be the simplified presentation of dashboards at the top of Home, linking to the exclusive page where the user who needs technical data will find the complete information.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <img className={classes.camilla} src={d6} alt="Decision6" />
                </Paper>
              </Grid>
            </Grid>

          </div>
        </section>
      </Container>
    </>
  );
}
