import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Icon } from '@iconify/react';
import linkedinBox from '@iconify/icons-mdi/linkedin-box';


const useStyles = makeStyles(theme => ({
  linkdin: {
    marginLeft: 'auto',
    marginRight: -12,

  },
  button: {
    margin: theme.spacing(1),
    textDecoration: 'none',
    color: '#4A4A4A'
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
          <IconButton target='_blank' href="https://www.linkedin.com/in/camillamoura/?locale=en_US" className={classes.linkdin} aria-label="Linkdin">
            <Icon icon={linkedinBox} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div id="hero"></div>
    </>)
}
