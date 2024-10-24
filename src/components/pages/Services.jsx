import React, { useState } from 'react';
import { Container, Button, Grid2 as Grid, Card, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import serviceData from "../../ServiceData";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import emailjs from 'emailjs-com';


function Services() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_3r4o12r',
      'template_c53470o',
      { email },
      'w7ncNUCq8sIzjcPvG'
    )
      .then((result) => {
        console.log(result.text);
        alert('Subscription successful!');
      }, (error) => {
        console.log(error.text);
        alert('Subscription failed. Please try again.');
      });

    setEmail(''); // Reset email input after sending
  };

  return (
    <div className='services-section'>

      <div className='services'>
        <Container>
          <h1 className='service-head'> Our Services </h1>
          <Link to={"/"}>
            <Button variant='outlined' className='service-btn'
              sx={{
                textTransform: 'none',
                color: '#ffff',
                borderColor: '#ffff'
              }}>
              Home <KeyboardArrowRightIcon /> Services
            </Button>
          </Link>
        </Container>

      </div>

      <div className='service-card-section'>
        <h3 className='service-card-qn'> What We Provides ? </h3>
        <h1 className='service-card-ans'> Provide Interective IT Solution & Business Services </h1>
        <Grid container spacing={3} sx={{ alignItems: "center", justifyContent: "center" }}>
          {serviceData.map((data, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card sx={{
                maxWidth: 270, textAlign: "center", padding: "30px 20px", height: "280px",
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: '#ffff',
                  transform: 'scale(1.08)',   // used to enlarge the cards
                  transition: 'transform 0.7s ease, backgroundColor 0.7s ease'   // to ensure smooth transition
                },
              }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Grid>
                  <img src={data.img} alt="services-image" className='services-card-img' />
                </Grid>

                <Grid >
                  <h3 className='service-card-title'> {data.title} </h3>
                  {data.description}
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className='service-bottom-section'>
        <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className='subscribe-text'>
            <h1> Get Latest Update from ZIDIO <br />
              Stay Connect with Us </h1>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              variant='outlined'
              label='Enter Your E-Mail'
              type='email'
              value={email}
              onChange={handleChange}
              sx={{
                "& .MuiInputLabel-root": {  /* class name, applied to label component */
                  color: "#00194C",
                },
                "& .MuiOutlinedInput-root": {
                  color: "#00194C",
                  fieldset: {   /* create a custom border around the text field */
                    border: "2px solid #00194C",
                    opacity: "0.5"
                  },
                  "&:hover fieldset": {
                    border: "2px solid #00194C",
                  },
                  "&.Mui-focused fieldset": {
                    border: "2px solid #00194C",
                  }
                }

              }}
            />
            <Button variant='contained' onClick={sendEmail} sx={{ textTransform: 'none', height: "55px" }}> Subscribe </Button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Services