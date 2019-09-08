import React from 'react';

import { Grid, Paper, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// assets
import camilla from '../../assets/image/camillacamilla.png'



const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: '#4A4A4A'
  },
  camilla: {
    maxWidth: '100%'
  },
  img: {
    maxWidth: 64,
    margin: 5
  },
  paper: {
    padding: theme.spacing(0, 15),
    backgroundColor: '#4A4A4A',
    color: '#FFFAF7'
  },
  title: {
    padding: theme.spacing(4, 0)
  },
  text: {
    padding: theme.spacing(2, 0)
  },
  textFooter:{
    padding: theme.spacing(4, 0),
    textAlign: 'center'
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />

      <div className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper xs={12} sm={6} elevation={0} className={classes.paper}>
              <Typography className={classes.title} variant="h5">I hope you enjoy this selection as I’m enjoying this journey. </Typography>
              <Typography className={classes.text} variant="body1">Regarding the confidentiality agreements signed, this presentation aims to discuss the methodologies and design processes adopted and not the disclosure of strategic brand data.</Typography>
              <Typography className={classes.title} variant="h5">
                If you feel like I'll be glad to talk about the projects. Please be free to contact me: camouramilla@gmail.com</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper xs={12} sm={6} elevation={0} className={classes.paper}>
              <img className={classes.camilla} src={camilla} alt="Camilla Camilla" />
            </Paper>
          </Grid>

        </Grid>

      </div>
      <Container>
        <section>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={12}>
              <Typography className={classes.textFooter} variant="body2">ALL VISUALS ARE PROTECTED UNDER COPYRIGHT ACT @ 2019 CAMILLA MOURA</Typography>
            </Grid>
          </Grid>
        </section>
      </Container>
    </>
  );
}
