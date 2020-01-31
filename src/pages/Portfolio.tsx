import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import Image1 from '../images/About-Us.png'
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Image2 from '../images/dots.png';
import Button from '@material-ui/core/Button'
import { Container } from '@material-ui/core';
import Coloredline from '../Components/Coloredline';
import { Footer } from '../Components/Footer';
import {CollegeCard} from '../Components/CollegeCard'
const theme = createMuiTheme();

theme.typography.h1 = {
    fontSize: '12vw!important',
    transform:'translatey(-66%)',
    fontWeight:'700!important',
    '@media (min-width:600px)': {
      fontSize: '15vw!important',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '12vw!important',
    }
  } as any;
const style1={
  height: '33px'
}
 

export default class Portfolio extends Component {
    render() {
      
        return (
            <div>
              <Container><Navbar/></Container>
                
                
                <img className='Image1' src={Image1} alt="main" />
               
                <Container fixed><div className='headig'>
                <ThemeProvider theme={theme}>
        <Typography variant="h1">Portfolio</Typography>
        
      </ThemeProvider></div>
      <div style={style1}></div>
      <div style={style1}></div>
      <div style={style1}></div>
     <img src={Image2} alt="dots"/>
     <div style={style1}></div>
     <div style={style1}></div>
      <Typography variant="h4">We partner with game changing companies<br/>
to help realize their vision.</Typography>
<div style={style1}></div>
      <div style={style1}></div>
      <div style={style1}></div>
      

<Button variant="contained"  className='buttn'>
  College
</Button>
<Button variant="contained" className='buttn'>
  Company
</Button>

<Coloredline/>
<CollegeCard/>
<Footer/>
</Container>
            </div>
        )
    }
}
