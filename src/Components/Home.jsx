import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Typography, Button, useTheme } from '@mui/material';
import image from '../Images/1.jpg'; // Ensure this path is correct for your project

function Home() {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <Box
      id="home"
      sx={{
        overflowX: 'hidden',
        backgroundImage: 'linear-gradient(135deg, #1A2C5B 0%, #00B4D8 100%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2, // Default for extra-small screens (phones)
        py: 6,
        [theme.breakpoints.up('sm')]: { // For screens >=600px(small tablets)
          flexDirection: 'column',
          px: 3, // Slightly more padding for small tablets
        },
        [theme.breakpoints.up('md')]: { // For screens >= 900px(tablets in landscape or small laptops)
          flexDirection: 'row',
          px: 5,
          py: 8,
        },
        [theme.breakpoints.up(1024)]: { // Custom breakpoint for 1024px and above (targeting your specified range)
          px: 8, // Increase padding for larger laptops/desktops
        },
        [theme.breakpoints.up(1220)]: { // Laptop (1220px to 1399px)
          px: 10,
        },
        [theme.breakpoints.up(1440)]: { // Computer (1440px and up, adjusting for your specific range)
          px: 12, // Further increase padding for very large screens
        },
        mx: 'auto',
        maxWidth: '95vw',
      }}
    >
      <Box data-aos="fade-right" sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
        <Typography
          sx={{
            color: '#00d5ffff',
            mb: 1,
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: {
              xs: '0.9rem', // Phone
              sm: '1rem', // Small Tablet
              md: '1.1rem', // Tablet
              [theme.breakpoints.up(992)]: '1.2rem', // Min Laptop
              [theme.breakpoints.up(1220)]: '1.3rem', // Laptop
              [theme.breakpoints.up(1400)]: '1.4rem', // Computer
            },
          }}
        >
          Welcome
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontFamily: 'Montserrat',
            mb: 2,
            lineHeight: 1.2,
            fontSize: {
              xs: '1.6rem', // Phone
              sm: '1.8rem', // Small Tablet
              md: '2rem', // Tablet
              [theme.breakpoints.up(992)]: '2.2rem', // Min Laptop
              [theme.breakpoints.up(1220)]: '2.4rem', // Laptop
              [theme.breakpoints.up(1400)]: '2.6rem', // Computer
            },
          }}
        >
          Ganesh Prabhu <br /> Arivanantham
        </Typography>

        <Typography
          sx={{
            fontWeight: 500,
            fontFamily: 'Montserrat',
            mb: 2,
            fontSize: {
              xs: '1rem', // Phone
              sm: '1.1rem', // Small Tablet
              md: '1.2rem', // Tablet
              [theme.breakpoints.up(992)]: '1.3rem', // Min Laptop
              [theme.breakpoints.up(1220)]: '1.35rem', // Laptop
              [theme.breakpoints.up(1400)]: '1.4rem', // Computer
            },
          }}
        >
          Product Manager | Digital Transformation Strategist | Business Analyst
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Montserrat',
            mb: 3,
            fontSize: {
              xs: '0.9rem', // Phone
              sm: '1rem', // Small Tablet
              md: '1.05rem', // Tablet
              [theme.breakpoints.up(992)]: '1.1rem', // Min Laptop
              [theme.breakpoints.up(1220)]: '1.15rem', // Laptop
              [theme.breakpoints.up(1400)]: '1.2rem', // Computer
            },
          }}
        >
          Empowering education, clinics & franchises with automation, strategy & growth.
        </Typography>
         <Button
          variant="contained"
          sx={{
            background: 'white',
            color: 'black',
            textTransform: 'none',
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
            px: {
              xs: 2, // Phone
              sm: 3, // Small Tablet
              md: 4, // Tablet
              [theme.breakpoints.up(992)]: 5, // Min Laptop
            },
            py: {
              xs: 1, // Phone
              sm: 1.2, // Small Tablet
              md: 1.4, // Tablet
              [theme.breakpoints.up(992)]: 1.5, // Min Laptop
            },
            '&:hover': {
              backgroundColor: '#0095B6',
            },
          }}
        >
          
          Let's Connect
        </Button>
      </Box>

      <Box
        data-aos="fade-left"
        data-aos-duration="4000"
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          mt: { xs: 4, md: 0 },
        }}
      >
        {/* Top shape */}
        <Box
          sx={{
            position: 'absolute',
            width: '50%',
            height: '50%',
            background: 'linear-gradient(135deg, #032143ff 0%, #5dcde6ff 100%)',
            borderRadius: 3,
            top: {
              xs: '-90px', // Phone
              sm: '-30px', // Small Tablet
              md: '-40px', // Tablet
              [theme.breakpoints.up(992)]: '10px', // Min Laptop
              [theme.breakpoints.up(1024)]: '0px', // Adjustment for 1024px and up
              [theme.breakpoints.up(1220)]: '0px', // Laptop
              [theme.breakpoints.up(1440)]: '0px', // Computer
            },
            right: {
              xs: '5px', // Phone
              sm: '20px', // Small Tablet
              md: '15px', // Tablet
              [theme.breakpoints.up(992)]: '10px', // Min Laptop
              [theme.breakpoints.up(1024)]: '20px', // Adjustment for 1024px and up
              [theme.breakpoints.up(1220)]: '20px', // Laptop
              [theme.breakpoints.up(1440)]: '30px', // Computer
            },
            zIndex: 1,
          }}
        />

        {/* Image */}
        <Box
          component="img"
          src={image}
          alt="Profile"
          sx={{
            width: {
              xs: '80%', // Phone
              sm: '75%', // Small Tablet
              md: '70%', // Tablet
              [theme.breakpoints.up(992)]: '65%', // Min Laptop
              [theme.breakpoints.up(1024)]: '60%', // Adjustment for 1024px and up
              [theme.breakpoints.up(1220)]: '55%', // Laptop
              [theme.breakpoints.up(1440)]: '50%', // Computer
            },
            borderRadius: 2,
            boxShadow: 3,
            ml: { xs: 0, md: 5 },
            position: 'relative',
            zIndex: 2,
          }}
        />

        {/* Bottom shape */}
        <Box
          sx={{
            position: 'absolute',
            width: '50%',
            height: '50%',
            background: 'linear-gradient(135deg, #032143ff 0%, #5dcde6ff 100%)',
            borderRadius: 3,
            top: {
              xs: '85px', // Phone
              sm: '180px', // Small Tablet
              md: '210px', // Tablet
              [theme.breakpoints.up(992)]: '230px', // Min Laptop
              [theme.breakpoints.up(1024)]: '250px', // Adjustment for 1024px and up
              [theme.breakpoints.up(1220)]: '260px', // Laptop
              [theme.breakpoints.up(1440)]: '270px', // Computer
            },
            right: {
              xs: '160px', // Phone
              sm: '205px', // Small Tablet
              md: '200px', // Tablet
              [theme.breakpoints.up(992)]: '210px', // Min Laptop
              [theme.breakpoints.up(1024)]: '220px', // Adjustment for 1024px and up
              [theme.breakpoints.up(1220)]: '230px', // Laptop
              [theme.breakpoints.up(1440)]: '240px', // Computer
            },
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );
}

export default Home;