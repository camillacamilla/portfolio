import React from 'react';

import { Grid, Paper, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import camilla from '../../assets/image/camilla.jpeg'


const useStyles = makeStyles(theme => ({
  content: {
    paddingTop: 80,
    flexGrow: 1,
    backgroundColor: '#FFFAF7'
  },
  camilla: {
    maxWidth: '100%'
  },
  paper: {
    padding: theme.spacing(3, 2),
    backgroundColor: '#FFFAF7',
    color: '#4A4A4A'
  },
  title:{
    padding: theme.spacing(4, 0)
  },
  text:{
    padding: theme.spacing(2, 0)
  }
}));

export default function Hero(props) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container>
        <section id="sectio1">
          <div className={classes.content}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Paper elevation='0' className={classes.paper}>
                <Typography className={classes.title} variant="h2">CamillaCamilla</Typography>
                <Typography className={classes.title} variant="h5">UX / UI Desinger</Typography>
                  <Typography className={classes.text} variant="body1">Over the last years helping companies to create and reimagine experiences for digital products by researching, discovering, co-creating, prototyping, testing and re-evaluating in an Agile environment.</Typography>
                  <Typography className={classes.text} variant="body1">
                    I am Camilla Sun-born, First of Her Name, Queen of the Karaoke, Breaker of Bad Flows and Unhelpful Wireframes, Mother of Prototypes and User Tests.</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation='0' className={classes.paper}>
                  <img className={classes.camilla} src={camilla} alt="Camilla Camilla" />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </section>
      </Container>
    </>
  );
}
