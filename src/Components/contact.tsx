import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import { Typography } from '@material-ui/core';
import Coloredline from './Coloredline';
import image2 from '../images/download.png'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow:1,
     
    },
    empty:{
        height:'40px'
    },
    navs: {
        height:'90px'
    },
    paper:{
      padding: theme.spacing(2),
      textAlign: 'center',
      height:'1000px',
      color: theme.palette.text.secondary,
    },
  }),
);


export function Contact() {
    const classes = useStyles();
    return (
 <div>
      <div className={classes.root}>
      <Grid container spacing={1}>
      
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
              <Grid container spacing={1}>
              <div>
              <iframe title="myFrame" src="https://docs.google.com/forms/d/e/1FAIpQLSeh6OUPvKf9rQczxZVs1nzx6JDEEJHzENGjz0JkKjggobaaQg/viewform?embedded=true" width="390" height="970">Loading…</iframe>
      </div>
      </Grid>
              </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper className={classes.root}>
          <Grid container spacing={1}>
          <div>
              <br/>
              <br/>
          <Typography variant="h3" color="inherit" align="left">
                           Find us
                </Typography>
                <br/>
                <br/>
                <Typography variant="subtitle1" color="inherit" align="left">
                           Address
                </Typography>
                <br/>
                <Typography variant="subtitle2" color="textSecondary" align="left">
                97, 17th B Main Road, 5TH Block KHB Colony Kormangala, Bangalore, Karnataka
560095, India
                </Typography>
                
        </div>
        

        <Grid item xs={4} sm={4}>
          <Paper className={classes.navs}>
          <br/>
        <br/>
          <Typography variant="subtitle1" color="inherit" align="left">
                           Email
                </Typography>
                
                
                <Typography variant="subtitle2" color="textSecondary" align="left">
                support@flipr.ai
                </Typography>
          
             </Paper>
        </Grid>
        <Grid item xs={8} sm={8}>
          <Paper className={classes.navs} >
          <br/>
        <br/>
          <Typography variant="subtitle1" color="inherit" align="left">
                           Phone
                </Typography>
                
                
                <Typography variant="subtitle2" color="textSecondary" align="left">
                9826603335
                </Typography>
          
             </Paper>
        </Grid>
        <a href='https://www.google.com/maps/dir/12.935386,77.6210036/flipr/@12.9353823,77.6188253,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bae15c6e5b05937:0x2d0581ebd3733892!2m2!1d77.621024!2d12.9353843'>
        <img src={image2} alt="map"/>
       </a>
      </Grid>

          </Paper>
        </Grid>
      </Grid>
    </div>
    <Coloredline/>
    <div>

    </div>
        </div>
        
    )
}