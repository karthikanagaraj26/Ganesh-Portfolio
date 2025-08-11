import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Grid,
  Typography,
  Box,
  Paper,
  Divider,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const skillCards = [
  {
    icon: <WorkIcon sx={{ color: '#fff', fontSize: 30 }} />,
    title: 'CRM & Workflow Tools',
    description: 'Zoho, Salesforce, etc.',
    bgColor: '#43c2f9ff',
  },
  {
    icon: <CampaignIcon sx={{ color: '#fff', fontSize: 30 }} />,
    title: 'Marketing Platforms',
    description: 'Google Ads, Facebook Business, MailChimp',
    bgColor: '#43c2f9ff',
  },
  {
    icon: <SettingsSuggestIcon sx={{ color: '#fff', fontSize: 30 }} />,
    title: 'Automation',
    description: 'Zapier, Integromat, custom scripts',
    bgColor: '#43c2f9ff',
  },
];

export default function ExpertsSection() {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease-out-cubic' });
  }, []);

  return (
    <Box mb={{ md: 20 }} sx={{ px: { xs: 2, md: 10 }, py: 10, backgroundColor: '#fff', minHeight: '100vh', fontFamily: "Montserrat" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left side: Heading and description */}
        <Grid item xs={12} md={6}>
          <Box textAlign={{ xs: 'center', md: 'left' }} data-aos="fade-right" data-aos-duration="1000" mb={10}>
            <Typography variant="h3" fontWeight="bold" color="#1A2C5B">
              SKILL
            </Typography>
            <Divider
              sx={{
                width: 80,
                height: 4,
                mx: { xs: 'auto', md: 0 },
                my: 2,
                borderRadius: 2,
                background: 'linear-gradient(to right, #43c2f9, #1A2C5B)',
              }}
            />
            <Typography
              variant="body1"
              color="text.secondary"
              maxWidth={400}
              mt={2}
            >
              Empowering businesses and communities through active leadership and
              entrepreneurial engagement.
            </Typography>
          </Box>
        </Grid>

        {/* Right side: Cards */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={4} ml={{ md: 5, lg: 20 }}>
            {/* First two cards */}
            <Grid item xs={12} sm={6}>
              {skillCards.slice(0, 2).map((card, index) => (
                <Paper
                  key={index}
                  elevation={3}
                  data-aos="zoom-in"
                  data-aos-duration="3500"
                  data-aos-delay={index * 300}
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    p: 3,
                    mb: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(to bottom,  #e59ebeff, #f82c2cff)',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 15,
                    },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: card.bgColor,
                      borderRadius: 2,
                      width: 50,
                      height: 50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Typography fontWeight={700} variant="subtitle1">{card.title}</Typography>
                  <Box sx={{ width: 40, height: 2, backgroundColor: '#43c2f9ff', my: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </Paper>
              ))}
            </Grid>

            {/* Third card */}
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={3}
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-delay="600"
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  p: 3,
                  mb: { xs: 20, sm: 1 },
                  mt: { md: 10, lg: 10 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(to bottom, #e59ebeff, #f82c2cff)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 15,
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: skillCards[2].bgColor,
                    borderRadius: 2,
                    width: 50,
                    height: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  {skillCards[2].icon}
                </Box>
                <Typography fontWeight={700} variant="subtitle1">{skillCards[2].title}</Typography>
                <Box sx={{ width: 40, height: 2, backgroundColor: '#43c2f9ff', my: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  {skillCards[2].description}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
