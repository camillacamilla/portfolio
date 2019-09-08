import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Icon } from '@iconify/react';
import linkedinBox from '@iconify/icons-mdi/linkedin-box';
import behanceIcon from '@iconify/icons-mdi/behance';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  linkdin: {
    marginRight: -2,
    [theme.breakpoints.up('sm')]: {
      marginRight: -12,
    },

  },
  behance: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  button: {
    margin: theme.spacing(1),
    textDecoration: 'none',
    color: '#4A4A4A',
    fontSize: 8,
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
      margin: theme.spacing(1),
      textDecoration: 'none',
      color: '#4A4A4A',
    },
  },
  menu: {
    backgroundColor: '#FFFAF7'
  }

}));


export default function Header(props) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar elevation={0}>
        <Toolbar className={classes.menu}>
          < AnchorLink className={classes.button} href='#sectio1'>UX CASES</AnchorLink>
          < AnchorLink className={classes.button} href='#sectio2'>INTERFACES</AnchorLink>
          < AnchorLink className={classes.button} href='#sectio3'>METHODOLOGIES</AnchorLink>

          <IconButton target='_blank' href="https://www.behance.net/CamillaCamilla" className={classes.behance} aria-label="behance">
            <Icon icon={behanceIcon} />
          </IconButton>
          <IconButton target='_blank' href="https://www.linkedin.com/in/camillamoura/?locale=en_US" className={classes.linkdin} aria-label="Linkdin">
            <Icon icon={linkedinBox} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div id="hero"></div>
    </>)
}
