import React, { useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  
} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import image from '../Images/2.png';
import image2 from '../Images/6.png';
import image3 from '../Images/5.png';
import curvedArrow from '../Images/9.png';

const Herosection = () => {
  

  const isPhone = useMediaQuery('(max-width:575px)');
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:991px)');
  const isMinDevice = useMediaQuery('(min-width:992px) and (max-width:1199px)');
  const isLaptop = useMediaQuery('(min-width:1220px) and (max-width:1399px)');
  const isComputer = useMediaQuery('(min-width:1400px)');
  const isSmallScreen = isPhone || isTablet;

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <Box
      sx={{
        minHeight: {lg:'50vh',md:'45vh'},
        background: 'linear-gradient(135deg, #5b2be0 0%, #6228d7 100%)',
        color: '#fff',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        pt: isSmallScreen ? 9 :-5,

      }}
    >
      {/* 🔹 Floating Decorative Image 2 */}
      <Box
        component="img"
        src={image2}
        alt="Floating image 2"
        data-aos="fade-left"
        data-aos-delay="200"
        sx={{
          position: 'absolute',
          bottom: '70%',
          right: '8%',
          width: { xs: 50, sm: 70, md: 90 },
          zIndex: 0,
        }}
      />

      {/* 🔹 Floating Decorative Image 3 */}
      <Box
        component="img"
        src={image3}
        alt="Floating image 3"
        data-aos="fade-up"
        data-aos-delay="400"
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '5%',
          width: { xs: 40, sm: 60, md: 50, lg: 90 },
          zIndex: 0,
        }}
      />

      {/* ✅ Curved Arrow (Responsive Positioning) */}
     <Box
  className="arw"
  component="img"
  src={curvedArrow}
  alt="Curved Arrow"
  data-aos="fade-down"
  data-aos-delay="300"
  sx={{
    display: {
      xs: 'none',
      sm: 'none',
      md: 'none',
      lg: 'block', // visible only on lg (1200px) and above
    },
    position: 'absolute',
    top: { xs: '2%', sm: '3%', md: '8%', lg: '10%' },
    left: {
      xs: '79%',
      sm: '70%',
      md: '50%',
      lg: '40%',
    },
    right: {
      xs: 'unset',
      sm: 'unset',
      md: '40%',
    },
    transform: {
      xs: 'translateX(-50%)',
      sm: 'translateX(-50%)',
      md: 'none',
    },
    width: {
      xs: 100,
      sm: 150,
      md: 150,
      lg: 200,
      xl: 220,
    },
    zIndex: 1,
  }}
/>


      {/* 👉 Right bottom dotted line */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '8%',
          right: '2%',
          height: '90px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 1,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <Box
            key={`right-dot-${i}`}
            sx={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'white',
            }}
          />
        ))}
      </Box>

      {/* 👉 Left top dotted line */}
      <Box
        sx={{
          position: 'absolute',
          top: '8%',
          left: '2%',
          height: '90px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 1,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <Box
            key={`left-dot-${i}`}
            sx={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'white',
            }}
          />
        ))}
      </Box>

      {/* 🔹 Main Grid Content */}
      <Box sx={{ px: { xs: 1, md: 5 } }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          direction={isSmallScreen ? 'column' : 'row'}
        >
          {/* 🔸 Left Text Section */}
          <Grid
            size
            xs={12}
            md={6}
            data-aos="fade-right"
            textAlign={{lg:'left',sm:'center',xs:'center',md:'left'}}
            sx={{
             ml:{lg:-8,md:3,sx:1,xs:-1},
              
              mb: isLaptop || isComputer ? 15 : 0,
              zIndex: 2,
              mt:{ xs:3,md:5,lg:15,sm:10}
            }}
          >
           <Box ml={0.5}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                lineHeight: 1.2,
                mt: 2,
                fontSize: isPhone
                  ? '2rem'
                  : isTablet
                  ? '2.5rem'
                  : isMinDevice
                  ? '2.7rem'
                  : '3rem',
              }}
            >
              Ganesh Prabhu
            </Typography>
            <Typography ml={0.5}
              variant="h4"
              fontWeight={600}
              sx={{
                fontSize: isPhone
                  ? '1.3rem'
                  : isTablet
                  ? '1.7rem'
                  : isMinDevice
                  ? '1.8rem'
                  : '2rem',
              }}
            >
              Arivanantham
            </Typography>
            </Box>
            <Typography
              sx={{
                mt: 4,
                mb: 3,
                maxWidth: {lg:400,xs:250,sm:400},
                fontWeight: 400,
                ml:{xs:1},
                fontSize: isPhone
                  ? '1rem'
                  : isTablet
                  ? '1.2rem'
                  : '1.3rem',
              }}
            >
              Product Manager | Digital Transformation Strategist | Business Analyst
            </Typography>
            <Typography
              sx={{
                mt: 3,
                mb: 3,
                maxWidth: {lg:400,xs:250,sm:400},
                ml:{xs:1},
                fontSize: isPhone
                  ? '1rem'
                  : isTablet
                  ? '1.2rem'
                  : '1.3rem',
              }}
            >
              Empowering education, clinics and franchises through automation, strategy & growth.
            </Typography>
          </Grid>

          {/* 🔸 Right Image Section */}
          <Grid
            item
            xs={12}
            md={6}
            data-aos="fade-left"
            sx={{
              display: 'flex',
              justifyContent: isSmallScreen ? 'center' : 'flex-start',
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                borderRadius: '30px',
                overflow: 'hidden',
                maxWidth: isSmallScreen ? '100%' : '100%',
                mt: {xs:-5,md:10},
                ml: !isSmallScreen
                  ? isLaptop
                    ? '50px'
                    : isComputer
                    ? '90px'
                    : '-10px'
                  : 0,
              }}
            >
              <Box
                component="img"
                src={image}
                alt="Profile"
                sx={{
                  width: {lg:'100%'},
                  height: {
                    xs: '300px',
                    sm: '500px',
                    md: '440px',
                    lg:  '520px',
                    xl: '600px',
                  },
                  objectFit: 'cover',
                  objectPosition: 'top',
                  borderRadius: '20px',
                  display: 'block',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Herosection;
