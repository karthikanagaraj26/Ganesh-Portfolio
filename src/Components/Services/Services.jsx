import React, { useEffect } from 'react';
import {
  Grid,
  Typography,
  Paper,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F8F8F8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: 2, md: 5 },
        boxSizing: 'border-box',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Circles */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '20px', md: '40px' },
          left: { xs: '20px', md: '60px' },
          width: 30,
          height: 30,
          borderRadius: '50%',
          backgroundColor: '#FFD93D',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '500px', lg: '600px' },
          left: { xs: '250px', lg: '1200px' },
          width: 30,
          height: 30,
          borderRadius: '50%',
          backgroundColor: '#FFD93D',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '60px', md: '40px' },
          right: { xs: '20px', md: '60px' },
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: '#6C63FF',
          zIndex: 1,
        }}
      />
      <Section />
    </Box>
  );
};

const Section = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLaptopOrDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const services = [
    'Brand Consulting',
    'Educational Consulting',
    'Event Coordination',
    'Corporate Events',
    'Event Planning',
    'Advertising',
    'Brand Marketing',
    'Application Development',
    'Ad Design',
    'Leadership Development',
  ];

  const getGridItemProps = () => {
    if (isPhone) {
      return { xs: 12 };
    } else if (isTablet) {
      return { xs: 6 };
    } else {
      return { md: 3 }; // 4 per row
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        width: '100%',
        px: 2,
        fontFamily: "'Poppins', sans-serif",
        zIndex: 2,
      }}
    >
      <Grid item xs={12} md={10} lg={10} data-aos="fade-up">
        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            color: '#6C63FF',
            textAlign: 'center',
            fontSize: { md: '2rem', lg: '2.5rem' },
            mt: { xs: 4, md: 6, lg: -1 },
          }}
        >
          SERVICES
        </Typography>

        {/* Underline */}
        <Box
          sx={{
            width: '60px',
            height: '4px',
            backgroundColor: '#6C63FF',
            borderRadius: 2,
            mx: 'auto',
            mt: 1,
            mb: 3,
          }}
        />

        {/* Subheading */}
        <Typography
          variant="h6"
          sx={{
            color: '#333',
            maxWidth: '700px',
            textAlign: 'center',
            mx: 'auto',
            mb: 4,
            px: { xs: 2, md: 0 },
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          Helping Brands Grow Through Strategy and Innovation
        </Typography>

        {/* Services Grid */}
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => {
            const isLastTwo = isLaptopOrDesktop && index >= 8;
            return (
              <Grid
                item
                key={index}
                {...getGridItemProps()}
                sx={{
                  display: 'flex',
                  justifyContent: isLastTwo ? 'center' : 'flex-start',
                }}
              >
                <Paper
                  data-aos="fade-up"
                  elevation={1}
                  sx={{
                    width: '100%',
                    maxWidth: '250px',
                    minWidth: {lg:'250px',xs:'240px'},
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingLeft: 2,
                    borderLeft: '5px solid #6C63FF',
                    backgroundColor: '#ffffff',
                    fontSize: '16px',
                    borderRadius: '10px',
                    color: '#000',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  {service}
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
