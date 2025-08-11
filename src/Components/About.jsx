import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Typography, Divider } from '@mui/material';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const sections = [
    {
      title: 'My Journey',
      content: [
        { type: 'text', value: 'Started young, supporting my parents in running our school.' },
        { type: 'text', value: 'Learned to understand people deeply — their needs, challenges & potential.' },
        { type: 'text', value: 'Became Administrator at Morning Star Matriculation School, managing:' },
        { type: 'bullet', value: '2,000+ students' },
        { type: 'bullet', value: '2,000+ parents' },
        { type: 'bullet', value: '100+ staff' },
        { type: 'text', value: 'Led entirely through people skills, gut instinct & doing what’s right — this experience shaped my leadership foundation.' },
      ],
    },
    {
      title: 'Where I Am Today',
      content: [
        { type: 'text', value: 'Founder & CEO of ARK Global Ventures, Malaysia, scaling:' },
        { type: 'bullet', value: 'Aesthetic clinics' },
        { type: 'bullet', value: 'IT services' },
        { type: 'bullet', value: 'Digital marketing' },
        { type: 'text', value: 'Principal at Morning Star Matriculation School, continuing to guide the next generation.' },
        { type: 'text', value: 'Investor & mentor for brands like ARA Discoveries, UClean Tamil Nadu, and others — empowering founders to build self-sustaining businesses.' },
      ],
    },
    {
      title: 'What Drives Me',
      content: [
        { type: 'text', value: 'Helping people rise and become leaders.' },
        { type: 'text', value: 'Turning daily chaos into smooth, stress-free systems.' },
        { type: 'text', value: 'Watching businesses confidently expand — from one branch to many.' },
        { type: 'text', value: 'Building businesses that give freedom, not stress.' },
      ],
    },
    {
      title: 'What I Can Help You With',
      content: [
        { type: 'text', value: 'Streamlining daily operations' },
        { type: 'text', value: 'Expanding franchises & multi-branch growth' },
        { type: 'text', value: 'CRM, automation & digital marketing' },
        { type: 'text', value: 'Leadership development & team empowerment' },
      ],
    },
  ];

  return (
    <Box
      id="about"
      overflow="hidden"
      sx={{ px: { xs: 2, sm: 3, md: 5 }, py: 8, mt: 10, fontFamily: 'Montserrat' }}
    >
      {/* ✅ Updated Heading Section */}
      <Box textAlign="center" data-aos="fade-down" data-aos-duration="1000">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: '#1A2C5B',
          }}
        >
          ABOUT ME
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
          My story is about empowering people, creating systems that work, and helping businesses grow confidently. Here’s a look into my journey.
        </Typography>
      </Box>

      {/* Content Boxes */}
      <Box
        sx={{
          display: { xs: 'block', sm: 'flex' },
          overflowX: { xs: 'visible', sm: 'auto' },
          gap: 3,
          pb: { xs: 0, sm: 2 },
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
        }}
      >
        {sections.map((section, idx) => (
          <Box
            key={idx}
            data-aos="fade-up"
            data-aos-duration="4000"
            sx={{
              flex: { sm: '0 0 auto' },
              width: {
                xs: '100%',
                sm: '70%',
                md: '50%',
                lg: '35%',
                xl: '25%',
              },
              background: 'linear-gradient(135deg, #eedcf1ff 0%)',
              borderRadius: 3,
              p: 3,
              mb: { xs: 3, sm: 0 },
              boxShadow: 5,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                color: '#6b08a0ff',
              }}
            >
              {section.title}
            </Typography>

            {section.content.map((item, itemIdx) => (
              <Box
                key={itemIdx}
                sx={{
                  mb: item.type === 'bullet' ? 1.5 : 1,
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                {item.type === 'bullet' && (
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: '#6b08a0ff',
                      mr: 1.5,
                      mt: '0.6em',
                      flexShrink: 0,
                    }}
                  />
                )}

                <Typography
                  sx={{
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' },
                    color: '#2d0448ff',
                    ml: item.type === 'bullet' ? 0 : 'calc(6px + 1.5 * 8px)',
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default About;
