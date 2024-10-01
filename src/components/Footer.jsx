import React from 'react';
import './Footer.css';
import { Container, Grid2 as Grid, TextField, Button } from '@mui/material';
import logoMv from '../assets/logo-mv.png';
import {Link} from 'react-router-dom';
import FitbitIcon from '@mui/icons-material/Fitbit';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Facebook, Twitter, LinkedIn, YouTube } from '@mui/icons-material';

function Footer() {
  return (
    <footer className='foot'>
        <Container>
            <Grid container spacing={2}>   
                <Grid item size={4}>
                    <img src={logoMv} alt="zidio-logo" className='foot-brand-logo' />
                    <p className='foot-brand-text'> At Zidio Development, we specialize in innovative software solutions. Our team is dedicated to delivering high-quality projects, fostering professional growth, and driving technological advancement. </p>
                    <Button variant='outlined'> Discover More<KeyboardDoubleArrowRightIcon /></Button>
                </Grid>
                <Grid item size={2}>
                    <h3 className='foot-list-head'> Company </h3>
                    <ul className='foot-list-items'>
                        <Link to={"/about"} className='foot-list-item'><li><FitbitIcon fontSize="smaller" sx={{ marginRight: '8px', color: '#1976D2' }}/> About </li></Link>
                        <Link to={"/team"} className='foot-list-item'><li><FitbitIcon fontSize="smaller" sx={{ marginRight: '8px', color: '#1976D2' }}/> Our Team </li></Link>
                        <Link to={"/contact"} className='foot-list-item'><li><FitbitIcon fontSize="smaller" sx={{ marginRight: '8px', color: '#1976D2' }}/> Contact </li></Link>
                        <Link to={"/careers"} className='foot-list-item'><li><FitbitIcon fontSize="smaller" sx={{ marginRight: '8px', color: '#1976D2' }}/> Careers </li></Link>
                    </ul>
                </Grid>
                <Grid item size={2}>
                    <h3 className='foot-list-head'> Our Services </h3>
                    <ul className='foot-list-items'>
                        <Link to={"/services"} className='foot-list-item'><li><FitbitIcon fontSize="smaller" sx={{ marginRight: '8px', color: '#1976D2' }}/> IT Solutions  </li></Link>
                        <Link to={"/services"} className='foot-list-item'><li><FitbitIcon fontSize="smaller" sx={{ marginRight: '8px', color: '#1976D2' }}/> Cyber Security </li></Link>
                        <Link to={"/services"} className='foot-list-item'><li><FitbitIcon fontSize="smaller" sx={{ marginRight: '8px', color: '#1976D2' }}/> Digital Marketing </li></Link>
                        <Link to={"/services"} className='foot-list-item'><li><FitbitIcon fontSize="smaller" sx={{ marginRight: '8px', color: '#1976D2' }}/> Machine Learning </li></Link>
                        <Link to={"/services"} className='foot-list-item'><li><FitbitIcon fontSize="smaller" sx={{ marginRight: '8px', color: '#1976D2' }}/> Cloud Services </li></Link>
                    </ul>
                </Grid>
                <Grid item size={4}>
                    <h3 className='foot-list-head'> Newsletter </h3>
                    <p className='foot-list-para'> Subscribe to Latest Newsletter </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <TextField 
                    variant='outlined'
                    label="Enter Your E-Mail" 
                    sx = {{
                        "& .MuiInputLabel-root": {
                            color: "white",
                            opacity: "0.5"
                        },
                        fieldset: {
                            border: "2px solid white",
                            opacity: "0.5"
                        },
                    }} />
                    <Button variant='contained'> Subscribe </Button>
                    </div>
                    
                    <p className='contact-head'> Follow Us </p>
                    <ul className='contact-list-icons'>
                        <Link to={"https://www.facebook.com/people/Zidio-Development/61556709391417/"} className='contact-list-icon'><li> <Facebook /> </li></Link>
                        <Link to={"https://x.com/zidioDev"} className='contact-list-icon'><li> <Twitter /> </li></Link>
                        <Link to={"https://www.linkedin.com/company/zidio-development/posts/?feedView=all"} className='contact-list-icon'><li> <LinkedIn /> </li></Link>
                        <Link to={"https://www.youtube.com/channel/UCvxJRddqZowVyN6AXjylnMg"} className='contact-list-icon'><li> <YouTube /> </li></Link>
                    </ul>
                </Grid>
            </Grid>
            <hr className='hline'/>
            <div><p className='copyright-text'> © 2024 @ Zidio Development. </p></div>
        </Container> 
    </footer>    
  )
}

export default Footer