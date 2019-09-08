import React from 'react';

import { Grid, Paper, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// assets
import camilla from '../../assets/image/camilla.jpeg'
import photoshop from '../../assets/image/photoshop.svg'
import xd from '../../assets/image/xd.png'
import sketch from '../../assets/image/sketch.png'
import zeplin from '../../assets/image/zeplin.png'
import axure from '../../assets/image/axure.png'
import html5 from '../../assets/image/html.png'
import css from '../../assets/image/css.png'
import user_test from '../../assets/image/user-test.png'
import github from '../../assets/image/git.png'
import workshop from '../../assets/image/workshop_icon.png'
import invision from '../../assets/image/invision.png'
import refinamento from '../../assets/image/refinamento.png'


const useStyles = makeStyles(theme => ({
  content: {
    paddingTop: 80,
    flexGrow: 1,
    backgroundColor: '#FFFAF7'
  },
  camilla: {
    maxWidth: '100%'
  },
  img: {
    maxWidth: 20,
    margin: 'auto 5px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 64,
      margin: 'auto 20px',
    },
  },
  paper: {
    padding: theme.spacing(3, 2),
    backgroundColor: '#FFFAF7',
    color: '#4A4A4A'
  },
  title: {
    fontWeight: 800,
    padding: theme.spacing(4, 0)
  },
  text: {
    padding: theme.spacing(2, 0)
  }
}));

export default function Hero(props) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container>
        <section>
          <div className={classes.content}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Paper xs={12} sm={6} elevation={0} className={classes.paper}>
                  <Typography className={classes.title} component="h1" variant="h3">CamillaCamilla</Typography>
                  <Typography className={classes.title} variant="h5">UX / UI Desinger</Typography>
                  <Typography className={classes.text} variant="body1">Over the last years helping companies to create and reimagine experiences for digital products by researching, discovering, co-creating, prototyping, testing and re-evaluating in an Agile environment.</Typography>
                  <Typography className={classes.text} variant="body1">
                    I am Camilla Sun-born, First of Her Name, Queen of the Karaoke, Breaker of Bad Flows and Unhelpful Wireframes, Mother of Prototypes and User Tests.</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper xs={12} sm={6} elevation={0} className={classes.paper}>
                  <img className={classes.camilla} src={camilla} alt="Camilla Camilla" />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <Typography className={classes.title} variant="h5">Desinger Tookit</Typography>
                <img className={classes.img} alt="workshop" src={workshop} />
                <img className={classes.img} alt="axure" src={axure} />
                <img className={classes.img} alt="sketch" src={sketch} />
                <img className={classes.img} alt="XD" src={xd} />
                <img className={classes.img} alt="photoshop" src={photoshop} />
                <img className={classes.img} alt="invision" src={invision} />
                <img className={classes.img} alt="user_test" src={user_test} />
                <img className={classes.img} alt="zeplin" src={zeplin} />
                <img className={classes.img} alt="html5" src={html5} />
                <img className={classes.img} alt="css" src={css} />
                <img className={classes.img} alt="github" src={github} />
                <img className={classes.img} alt="refinamento" src={refinamento} />
                <Typography className={classes.text} variant="body2">Skills as workshop facilitator, develop user flows and wireframes, created prototypes; run user tests and HTML / CSS working knowledge.</Typography>
              </Grid>
            </Grid>

          </div>
        </section>
      </Container>
    </>
  );
}
