import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import { Typography } from '@material-ui/core';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import{ AiFillFacebook } from 'react-icons/ai'
import Coloredline from './Coloredline';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow:1,
     
    },
    empty:{
        height:'40px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      height:'200px',
      color: theme.palette.text.secondary,
    },
    follow: {
        padding: theme.spacing(2),
        textAlign: 'left',
        
        color: theme.palette.text.secondary,
    },
    navs: {
        padding: theme.spacing(0),
        textAlign: 'left',
        height:'150px',
        color: theme.palette.text.secondary,
      },
  }),
);


export function Footer() {
    const classes = useStyles();
    return (
 <div>
   <Coloredline/>
      <div className={classes.root}>
      <Grid container spacing={1}>
      
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
              <Grid container spacing={1}>
      
        <Grid item xs={6} sm={6}>
          <Paper className={classes.navs}>
          <Typography variant="h6" color="textSecondary">Discover</Typography>
          <div className={classes.empty}></div>
                <Link to="/Portfolio"><Typography variant="caption" color="textSecondary">Portfolio</Typography></Link>
            <br/>
                <Link to="/Team"><Typography variant="caption" color="textSecondary">Team</Typography></Link>
            <br/>
                <Link to="/Reach"><Typography variant="caption" color="textSecondary">Reach</Typography></Link>
          
             </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.navs} ><Typography variant="h6" color="textSecondary">Connect</Typography>
          <div className={classes.empty}></div>
                <Typography variant="caption" color="textSecondary">support@flipr.ai</Typography>
            <br/>
                <Typography variant="caption" color="textSecondary">9826603335</Typography>
          
             </Paper>
        </Grid>
      </Grid>
              </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          <Grid container spacing={1}>
      
      <Grid item xs={2} sm={3}>
        <Paper className={classes.navs}>
        <Typography variant="h6" color="textSecondary">Follow</Typography>
        <br/>
     <a href="http://www.linkedin.com/company/fliprindia">   
        
 <FaLinkedin style={{
  color: '#202724'}} size={50}/>
</a>

<br/>
<a href="https://www.facebook.com/fliprindia">
<AiFillFacebook style={{
color: '#202724',paddingTop:"2px"}} size={50}/>
</a>
<br/>
<a href="https://www.twitter.com/flipr_india">
<FaTwitterSquare style={{
color: '#202724',paddingTop:"6px"}} size={50}/>

        </a>
           </Paper>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Paper className={classes.navs} ><Typography variant="h6" color="textSecondary">@</Typography>
        <br/>
        <Typography variant="caption" color="textSecondary">Linkedin</Typography>
<br/>
<br/>
<br/>
<Typography variant="caption" color="textSecondary">Facebook</Typography>
<br/>
<br/>
<br/>
<Typography variant="caption" color="textSecondary">Twitter</Typography>
        
           </Paper>
      </Grid>
    </Grid>

          </Paper>
        </Grid>
      </Grid>
    </div>
    <Coloredline/>
    <div>

    </div>
    <br/>
    <Typography variant="caption" color="textSecondary">© 2020 Flipr innovation labs. All Rights Reserved</Typography>
    <br/>
    <br/>
    <br/>
        </div>
        
    )
}
