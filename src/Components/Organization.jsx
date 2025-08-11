import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
  useMediaQuery,
  ThemeProvider,
  useTheme,
  createTheme,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define custom breakpoints
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      phone: 0,
      sm: 576,
      tap: 768,
      md: 992,
      min: 992,
      laptop: 1220,
      computer: 1400,
      lg: 1400,
      xl: 1536,
    },
  },
});

const orgList = [
  {
    title: 'Young Entrepreneur School',
    role: 'CHARTER MEMBER',
    since: 'Jun 2021 – Present',
  },
  {
    title: 'Chamber of Commerce and Industries Thanjavur',
    role: 'MEMBER',
    since: 'Jan 2017 – Present',
  },
  {
    title: 'Rotary Club',
    role: 'PAST PRESIDENT',
    since: 'Jul 2014 – Present',
  },
];

function OrganizationInfo() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const muiTheme = useTheme();

  // Define media queries
  const isPhone = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between('tap', 'min'));

  // Determine heading variant
  let headingVariant = 'h3';
  if (isPhone) {
    headingVariant = 'h5';
  } else if (isTablet) {
    headingVariant = 'h4';
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        overflowX="hidden"
        sx={{
          py: 8,
          px: {
            xs: 2,
            phone: 2,
            tap: 3,
            min: 4,
            laptop: 6,
            computer: 8,
          },
          mb: 10,
          background: 'linear-gradient(to right, #ffffff, #ffffffff)',
          fontFamily: 'Montserrat',
          width: '100%',
        }}
      >
        {/* Heading */}
        <Box textAlign="center" data-aos="fade-down" data-aos-duration="1000">
          <Typography variant={headingVariant} fontWeight="bold" color="#1A2C5B">
            ORGANISATION
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
            Empowering businesses and communities through active leadership and
            entrepreneurial engagement.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={4} justifyContent="center" mt={6}>
          {orgList.map((org, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              min={4}
              laptop={4}
              computer={3}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Paper
                elevation={5}
                data-aos="flip-left"
                data-aos-duration="1500"
                data-aos-delay={index * 200}
                sx={{
                  width: 300,
                  height: 260,
                  p: 3,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #c3bbf1ff, #97e0ebff)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 15,
                  },
                }}
              >
                <BusinessIcon sx={{ fontSize: 48, color: '#1A2C5B', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" color="#00B4D8">
                  {org.title}
                </Typography>
                <Typography variant="body1" fontWeight={500} mt={1}>
                  {org.role}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={0.5}>
                  {org.since}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default OrganizationInfo;