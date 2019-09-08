import React from 'react';

import { Grid, Paper, Typography, Container, Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// assets
import image from '../../assets/image/bs-mobile.png'
import image2 from '../../assets/image/bs-mobile-2.png'

import nicephotos from '../../assets/image/nicephotos.png'
import heatmap from '../../assets/image/heatmap.png'


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
  title:{
    fontWeight: 800,
    padding: theme.spacing(4, 0)
  },
  text:{
    padding: theme.spacing(2, 0)
  }
}));

export default function SectionOne(props) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container id="sectio1">
        <section >
          <div className={classes.content}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={0} xs={12} className={classes.paper}>
                  <Typography className={classes.title} component="h1" variant="h3">UX Cases</Typography>
                  <Typography className={classes.title} variant="h5">#01 Disruptive experiences in an Agile environment</Typography>
                  <Typography variant="body2">PROJECT: <b>Health insurance website user’s area</b></Typography>
                  <Typography variant="body2">ROLE: <b>UX UI Senior Designer</b></Typography>
                  <Typography variant="body2">DATE: <b>April 2019</b></Typography>
                  <Typography variant="body2">WEBSITE: <a target='__blank' className={classes.link}href="https://www.bradescoseguros.com.br">www.bradescoseguros.com.br</a></Typography>
                  <Typography variant="body2">PROTOTYPE: <a className={classes.link} target="_blank" href="https://projects.invisionapp.com/share/DZTOPHCX3JW#/screens/373432895">at Invision</a></Typography>
                  <Typography variant="body2">THE CHALLENGE: Develop the health insurance website's user area considering an omni-channel experience focuses on each customer interaction and their overall experience with the products and brand Bradesco Seguros, the largest insurance company in Latin America.
                  </Typography>

                  <Typography className={classes.text} variant="body2">
                  The main goal is increase the user’s engagement on digital solutions without redesign the services in order to decrease the incoming calls at clients assistance services and their high costs. Understand the user flow offline and online was the key to propose a humanize experience driven.
                  </Typography>

                  <Typography variant="body2">
                  It’s a massive project, the user’s area has 42 services, up to 26 different profiles, attending 3,4 million insured people developed by a squad of 9 multidisciplinary professionals. Being a designer in an agile environment brings  challenges and valuable achievements with every sprint. The gain of working alongside developers enriches design deliverables. </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <img className={classes.camilla} src={image2} alt="Bradesco" />
                  <img className={classes.camilla} src={image} alt="Bradesco" />
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper elevation={0} xs={12} className={classes.paper}>
                  <Typography className={classes.title} variant="h5">#02 Increase acquisition with a minor improvement</Typography>
                  <Typography variant="body2">PROJECT: <b>Nicephotos</b></Typography>
                  <Typography variant="body2">ROLE: <b>UX Designer</b></Typography>
                  <Typography variant="body2">DATE: <b>June 2018</b></Typography>
                  <Typography variant="body2">WEBSITE: <a className={classes.link}href="www.nicephotos.com.br">www.nicephotos.com.br</a></Typography>
                  <Typography variant="body2">THE CHALLENGE: Nicephotos is in the top 3 largest e-commerce solutions for imaging. The best selling product is photo development. The site is a complex html4-based online sales service, in parallel to the html5 migration project, we prioritize the best-selling product landing pages to initiate user experience improvements.
                  </Typography>

                  <Typography className={classes.text} variant="body2">
                  The first point of attention to be improved was purchase CTA, as it was located in the coldest area of the heat map. Through ux research, data analysis and surveys with users, Nicephotos owners and collaborators we collect rich data that generate  insights to prioritization the features to be improved. By running a Design Sprint the squad was able to develop a design solution with a minor impact over the website structure. An A / B test with the proposed template for upsell page had such a good performance that impact the global sales by increasing it on 8% over the last month. This positive result turned the proposal into a new interface template for all upsell pages.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <img className={classes.camilla} src={nicephotos} alt="nicephotos" />
                  <img className={classes.camilla} src={heatmap} alt="heatmap" />
                </Paper>
              </Grid>
            </Grid>

          </div>
        </section>
      </Container>
    </>
  );
}
