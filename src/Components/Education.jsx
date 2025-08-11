import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Grid, Typography, Box, Paper, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const educationList = [
  {
    institute: 'Tamil Nadu Teacher Education University, Chennai',
    degree: 'Master of Education - MEd, Computer Science',
    duration: 'Jul 2020 - Jun 2022',
  },
  {
    institute: 'Tamil Nadu Teacher Education University, Chennai',
    degree: 'Bachelor of Education - BEd, Computer Science',
    duration: 'Jul 2018 - Jun 2020',
  },
  {
    institute: 'University of Madras',
    degree: 'Diploma of Education, Diploma in School Education',
    duration: 'Sep 2010 - Aug 2011',
  },
  {
    institute: 'Sri Krishna Institute Of Technology',
    degree: 'Bachelor of Engineering - BE, Computer Science',
    duration: 'Aug 2005 - Apr 2009',
  },
];

export default function Education() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Box
      sx={{
        mt: 2,
        backgroundColor: '#ffffffff',
        py: 10,
        minHeight: '100vh',
        fontFamily: 'Montserrat',
      }}
    >
      {/* Heading */}
      <Box textAlign="center" data-aos="fade-down" data-aos-duration="1000">
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            background: 'linear-gradient(to right, #00B4D8, #1A2C5B)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
          EDUCATION
        </Typography>
        <Divider
          sx={{
            width: 80,
            height: 4,
            mx: 'auto',
            my: 2,
            borderRadius: 2,
            background: 'linear-gradient(to right, #00B4D8, #1A2C5B)',
          }}
        />
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth={600}
          mx="auto"
          mt={2}
        >
          My Academic Qualifications and Achievements
        </Typography>
      </Box>

      {/* Diamond Cards */}
      <Grid container spacing={6} justifyContent="center" mt={5}>
        {educationList.map((edu, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box
              sx={{
                transform: 'rotate(45deg)',
                width: 250,
                height: 250,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              data-aos="flip-up"
              data-aos-duration="1000"
              data-aos-delay="3200"
            >
              <Paper
                elevation={6}
                sx={{
                  transform: 'rotate(-45deg)',
                  p: 3,
                  width: '100%',
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: 3,
                  background: 'linear-gradient(to bottom, #eca0a0ff, #ffffffff)',
                  color: '#000000ff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(-45deg) translateY(-5px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#e865f7ff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <SchoolIcon sx={{ color: 'white', fontSize: 30 }} />
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    gutterBottom
                    sx={{
                      fontSize: { xs: '1rem', md: '1.05rem', lg: '1.1rem' },
                    }}
                  >
                    {edu.institute}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#0400ffff',
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    }}
                  >
                    {edu.degree}
                  </Typography>
                </Box>

                <Typography color="#000000ff" mt={1}>
                  {edu.duration}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
