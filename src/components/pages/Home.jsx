import React, { useState } from 'react';
import { Container, Button, Grid2 as Grid, Card, Box } from '@mui/material';
import "../../../src/index.css";
import vector from "../../assets/vector.png";
import featureData from "../../FeatureData.json";
import homeData from "../../HomeData.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import idea from "../../assets/idea-removebg-preview.png";
import teamData from "../../TeamData.json";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Facebook, Instagram, Twitter, LinkedIn, Phone, Mail, WatchLater } from '@mui/icons-material';


function Home() {
  const [isBackground, setIsBackground] = useState(null);
  const [counterOn, setCounterOn] = useState(false);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 1
    }
  }

  return (
    <div className='home_section'>
      <div className='home_container'>
        <Container>
          <Grid container spacing={12}>
            <Grid item size={6}>
              <h4 style={{ paddingTop: '100px', lineHeight: '1.5' }}>Software Development & Consultancy</h4>
              <h1 style={{ fontSize: '35px' }}> BUSINESS INNOVATION THROUGH TECHNOLOGY </h1>
              <p style={{ paddingTop: '15px', opacity: '0.7', lineHeight: '1.5' }}>
                Leading Business Evolution with Tailored and Innovative Software Solutions for Sustainable Growth </p>
              <Link to={"/"}>
                <Button variant='contained'
                  sx={{
                    borderRadius: '10px',
                    marginTop: '30px',
                    marginRight: '20px',
                    backgroundColor: '#FE6021'
                  }}> Get's Started </Button>
              </Link>
              <Link to={"/about"}>
                <Button variant='outlined'
                  sx={{
                    borderRadius: '10px',
                    marginTop: '30px',
                    color: '#ffff',
                    borderColor: '#ffff',
                  }}> Read More </Button>
              </Link>
            </Grid>
            <Grid item size={6} >
              <img src={vector} alt="vector-img" />
            </Grid>
          </Grid>
        </Container>
      </div>


      {/*---------------- FEATURES SECTION ----------------*/}

      <div className='home_obj'>
        <Container>
          <Grid container spacing={3}>
            {featureData.map((data, index) => (
              <Grid item key={index}>
                <Card sx={{
                  maxWidth: 360,
                  padding: "40px 30px 70px",
                  textAlign: "center",
                  position: "relative",
                  top: "-60px",
                  '&:hover': {
                    color: "#ffff",
                    backgroundColor: "#1976D2",
                    transition: ".5s ease",
                  },
                }}>
                  <Grid><img src={data.img} alt="feature-img" className='feature_icon' /></Grid>
                  <Grid><h2 style={{ paddingBottom: "15px" }}> {data.title} </h2></Grid>
                  <Grid>
                    <p style={{ opacity: "0.8", lineHeight: "1.5" }} className='feature_des'> {data.description} </p>
                  </Grid>
                </Card>
                <div className='overlay'></div>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={3} sx={{ paddingTop: "40px" }}>
            <Grid item size={5}>
              <img src={idea} alt="idea-img" />
            </Grid>
            <Grid item size={7}>
              <h4 style={{ color: "#1976D2" }}> Software Development & Services </h4>
              <h1 style={{ padding: "20px 0 30px 0" }}> Your Reliable Partner for IT Services Dedicated to Your Success </h1>
              <p style={{ lineHeight: 1.5, opacity: 0.8, paddingBottom: 30 }}> At Zidio, we're your trusted IT services partner, ensuring your success with reliable solutions tailored to your business needs. Count on us for robust software development, comprehensive IT support, and cutting-edge technology solutions that empower your business to thrive. </p>
              <Grid container spacing={3}>
                <Grid item size={6} sx={{ display: "flex", minWidth: 250, alignItems: "center" }}>
                  <img src="../../../public/images/about-icon1.png" className="about_img" />
                  <h4> Cost Effective <br />
                    Solutions </h4>
                </Grid>
                <Grid item size={6} sx={{ display: "flex", minWidth: 250, alignItems: "center" }}>
                  <img src="../../../public/images/about-icon2.png" className='about_img' />
                  <h4> Expert and Dedicated <br />
                    Team Members </h4>
                </Grid>
                <Grid item size={6} sx={{ display: "flex", minWidth: 250, alignItems: "center" }}>
                  <img src="../../../public/images/about-icon3.png" className='about_img' />
                  <h4> 24/7 Free <br />
                    Technical Support </h4>
                </Grid>
                <Grid item size={6} sx={{ display: "flex", maxWidth: 270, alignItems: "center" }}>
                  <img src="../../../public/images/about-icon4.png" className='about_img' />
                  <h4> 100% Customer Satisfaction </h4>
                </Grid>
              </Grid>
              <Link to={"/about"}>
                <Button variant='contained'
                  sx={{ marginTop: "35px", zIndex: "1", position: "relative", overflow: "hidden", transition: "1s all ease" }} className='btn'
                > About More </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>


      {/*------------- SERVICES SECTION -------------- */}

      <div className='home_cards'>
        <Container>
          <div style={{ color: "#ffff" }}>
            <h4 style={{ opacity: "0.8" }}> IT Support For Business </h4>
            <h1> What we are Offering </h1>
          </div>
          <div className='home_card_item'>
            <Slider {...settings}>
              {homeData.map((data) => (
                <Grid item>
                  <Card sx={{ maxWidth: 370, minHeight: 340, textAlign: "center" }}>
                    <Grid
                      sx={{
                        backgroundColor: '#FE6021',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: "15px 0"
                      }}
                    >
                      <img src={data.icon} alt="home-icon" className='home_card_icon' />
                    </Grid>
                    <Grid
                      sx={{
                        backgroundColor: '#ffff',
                        padding: '25px 10px 0',
                      }}
                    >
                      <h3>{data.title}</h3>
                      <p style={{ minHeight: '100px' }}>{data.description}</p>
                      <Link to={"/services"}>
                        <Button
                          variant='contained'
                          sx={{
                            textTransform: "none", marginTop: '10px'
                          }}>
                          Read More
                        </Button>
                      </Link>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Slider>
          </div>
        </Container>
      </div>


      {/*-------------- TEAM SECTION------------------*/}

      <div style={{ backgroundColor: "#F3F7FD", paddingTop: 100 }}>
        <Container>
          <h4 style={{ color: "#1976D2" }}> Dedicated Team </h4>
          <h1> Meet Our Dedicated Member <br />
            For Any Enquery </h1>
          <Grid container spacing={3} sx={{ padding: '100px 0 50px 0' }}>
            {teamData.map((member, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Card className='team_card' sx={{
                  padding: '20px', fontWeight: 'bold', textAlign: "center", backgroundColor: "#F3F7FD", boxShadow: "none",
                  '&:hover': {
                    backgroundColor: "#ffff",
                    borderRadius: "10px",
                    transition: ".5s ease",
                    '.team_bg': {
                      transform: "rotate(45deg)",
                      transition: ".5s ease"
                    },
                  },
                }}
                  onMouseEnter={() => setIsBackground(index)}
                  onMouseLeave={() => setIsBackground(null)}
                >
                  <Grid>
                    <img src={member.bgImg} alt="bgBlobimg" className='team_bg' />
                    <img src={member.img} alt="team-image" className='team_img' />
                  </Grid>

                  <Grid >
                    <h3 className='service-card-title'> {member.title} </h3>
                    <p style={{ opacity: 0.8, paddingTop: "10px" }}> {member.description} </p>
                  </Grid>
                  {isBackground === index && (
                    <Box sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#FE6021",
                      gap: "5px",
                      padding: "20px",
                      transition: ".5s ease"
                    }}>
                      <Facebook />
                      <Instagram />
                      <Twitter />
                      <LinkedIn />
                    </Box>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>


      {/*--------------- WORKING PROCESS ----------------*/}

      <div style={{ backgroundColor: "#00A3FF", textAlign: "center", padding: "80px 0 100px 0" }}>
        <Container>
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <Grid container spacing={10} sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <h1> {counterOn && <CountUp start={0} end={10} duration={3} />}K +</h1>
                <p style={{ fontWeight: "bold", paddingTop: "10px", opacity: 0.8 }}> HAPPY CUSTOMERS </p>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <h1> {counterOn && <CountUp start={0} end={20} duration={3} />}K +</h1>
                <p style={{ fontWeight: "bold", paddingTop: "10px", opacity: 0.8 }}> WORKS COMPLETED </p>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <h1> {counterOn && <CountUp start={0} end={99} duration={3} />} +</h1>
                <p style={{ fontWeight: "bold", paddingTop: "10px", opacity: 0.8 }}> EXPERT MEMBERS </p>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <h1> {counterOn && <CountUp start={0} end={100} duration={3} />} %</h1>
                <p style={{ fontWeight: "bold", paddingTop: "10px", opacity: 0.8 }}> SATISFACTION RATES </p>
              </Grid>
            </Grid>
          </ScrollTrigger>

          <h4 style={{ marginTop: "150px", paddingBottom: "10px", opacity: 0.8 }}> Working Process </h4>
          <h1> We Follow the Easy Working Steps </h1>
          <Grid container spacing={2}>
            <Grid item size={4}>
              <img src="../../../public/images/process-1.png" className='process_img' />
              <h3> Start a Project </h3>
              <p style={{ opacity: 0.8 }}> Kick off your project with a clear understanding of your goals and requirements, setting the foundation for success. </p>
            </Grid>
            <Grid item size={4}>
              <img src="../../../public/images/process-2.png" className='process_img' />
              <h3> Project Analysis </h3>
              <p style={{ opacity: 0.8 }}> Conduct a thorough analysis to create a tailored strategy, ensuring all aspects align with your business objectives.</p>
            </Grid>
            <Grid item size={4}>
              <img src="../../../public/images/process-3.png" className='process_img' />
              <h3> Deliver to Success </h3>
              <p style={{ opacity: 0.8 }}> Execute and deliver the project with precision, ensuring it meets your expectation and drives your success. </p>
            </Grid>
          </Grid>
        </Container>
      </div>


      {/*------------- TESTIMONIAL CAROUSEL --------------*/}

      <div className='testi'>
        <div style={{
          backgroundColor: "#F3F7FD", alignItems: "center", textAlign: "center", padding: "100px 0 120px 0"
        }}>
          <Container>
            <h4 style={{ color: "#1976D2" }}> Testimonial </h4>
            <h1> Customer’s Awesome Feedback <br />
              About Our Services
            </h1>
            <div style={{ paddingTop: "40px" }}>
              <Carousel
                autoPlay={true}
                autoPlaySpeed={2000}
                infinite={true}
                responsive={responsive}
              >
                <div className="custom-carousel-item">
                  <img src="../../../public/images/p1.jpeg" className='carousel_img' />
                  <p> Zidio exceeded our expectations. Their team was professional, responsive, and delivered a high-quality solution that perfectly aligned with our needs. We couldn’t be happier with the results.  </p>
                  <h3 className='name'> Mr. Ranjan Kumar Senapati</h3>
                </div>
                <div className="custom-carousel-item">
                  <img src="../../../public/images/p2.jpg" className='carousel_img' />
                  <p> Working with Zidio was a game-changer for our business. Their expertise and attention to detail ensured that our project was not only completed on time but also surpassed our initial vision.  </p>
                  <h3 className='name'> Mr. Suraj Adhikari </h3>
                </div>
                <div className="custom-carousel-item">
                  <img src="../../../public/images/p3.jpg" className='carousel_img' />
                  <p> The team at Zidio is exceptional. From start to finish, they demonstrated a deep understanding of our goals and provided invaluable guidance throughout the process. We highly recommend their services.  </p>
                  <h3 className='name'> David </h3>
                </div>
                <div className="custom-carousel-item">
                  <img src="../../../public/images/p4.jpg" className='carousel_img' />
                  <p> Zidio’s commitment to excellence is unmatched. Their seamless working process and expert leadership delivered a final product that truly sets our business apart. We’re thrilled with the outcome.  </p>
                  <h3 className='name'> Andy Tessa </h3>
                </div>
              </Carousel>
            </div>
          </Container>
        </div>
        <hr style={{ color: "#1976D2", }} />


        {/*-------------- ENQUIRY SECTION ----------------*/}

        <div style={{ backgroundColor: "#F3F7FD" }}>
          <Container>
            <Grid container spacing={4} sx={{ padding: "100px 0" }}>
              <Grid item size={4} className='enquiry'>
                <Phone fontSize='large' color='primary' />
                <div className='enquiry_content'>
                  <p>Call us Any Time</p>
                  <h4 style={{ fontWeight: "bold" }}>+91 8455807965</h4>
                </div>
              </Grid>
              <Grid item size={4} className='enquiry'>
                <Mail fontSize='large' color='primary' />
                <div className='enquiry_content'>
                  <p>Send E-Mail</p>
                  <h4 style={{ fontWeight: "bold" }}> support@zidio.in </h4>
                </div>
              </Grid>
              <Grid item size={4} className='enquiry'>
                <WatchLater fontSize='large' color='primary' />
                <div className='enquiry_content'>
                  <p>Opening Hours</p>
                  <h4 style={{ fontWeight: "bold" }}> Mon - Fri (9.00 - 5.30) </h4>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </div >
  )
}

export default Home