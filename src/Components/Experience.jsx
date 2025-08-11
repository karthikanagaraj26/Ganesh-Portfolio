import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Typography, Grid, useTheme, Divider } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';

const experiencePoints = [
  { id: 1, title: 'Founder — ARK Global Ventures Sdn. Bhd. (Malaysia)', description: 'Scaling aesthetic clinics, IT solutions, and digital marketing with a vision for innovation and premium service.' },
  { id: 2, title: 'Business Mentor — ARA Discoveries Pvt. Ltd.', description: 'Guiding product-based IT and digital marketing teams to deliver cutting-edge tech solutions and foster growth.' },
  { id: 3, title: 'Franchise Owner — Advanced Grohair & Gloskin Clinics', description: 'Leading advanced hair restoration and skin wellness clinics focused on science-backed, results-driven care.' },
  { id: 4, title: 'Franchise Owner — Naturals Salon, Thanjavur', description: 'Delivering premium beauty and grooming services with a focus on exceptional client experiences.' },
  { id: 5, title: 'Mentor — Master Franchise, UClean Tamil Nadu', description: 'Strategically expanding tech-enabled laundry services and mentoring operational efficiency across franchises.' },
  { id: 6, title: 'Passionate Agriculturist — GP Farms', description: 'Promoting sustainable farming, innovative techniques, and community-driven agricultural growth.' },
  { id: 7, title: 'School Administrator — Morning Star Matriculation School', description: 'Over 15 years leading academic and operational excellence, empowering holistic student growth.' },
  { id: 8, title: 'Part-time Stock Market Trader', description: 'Specializing in F&O derivatives with a strategic, risk-managed approach to portfolio growth.' },
];

const customMargins = [
  { mt: { md: 0 } },
  { mt: { md: 10 } },
  { mt: { md: 0 } },
  { mt: { md: 10 } },
  { mt: { md: 0 } },
  { mt: { md: 10 } },
  { mt: { md: 0 } },
  { mt: { md: 10 } },
];

const Experience = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const lineColor = '#1A2C5B';
  const boxTitleColor = '#0060a0ff';
  const boxDescriptionColor = '#000000ff';
  const sectionSubtitleColor = theme.palette.text.secondary;

  const customLineStyles = [
    { backgroundColor: "#000000ff", height: "2px", width: "50%", ml: 45 },
    { backgroundColor: "#000000ff", height: "2px", width: "20%" },
    { backgroundColor: "#000000ff", height: "2px", width: "50%", ml: 45 },
    { backgroundColor: "#000000ff", height: "2px", width: "20%" },
    { backgroundColor: "#000000ff", height: "2px", width: "50%", ml: 45 },
    { backgroundColor: "#000000ff", height: "2px", width: "20%" },
    { backgroundColor: "#000000ff", height: "2px", width: "50%", ml: 45 },
    { backgroundColor: "#000000ff", height: "2px", width: "20%" },
  ];

  const customIconStyles = [
    { right: 0, left: 541 },
    { right: 541 },
    { right: 0, left: 541 },
    { right: 541 },
    { right: 0, left: 541 },
    { right: 541 },
    { right: 0, left: 541 },
    { right: 541 },
  ];

  return (
    <Box
      id="experience"
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
        position: 'relative',
        mt: 10,
        fontFamily: "Montserrat",
      }}
    >
      {/* Linear Gradient Heading */}
      <Box textAlign="center" data-aos="fade-down" data-aos-duration="1000">
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            background: 'linear-gradient(to right,#1A2C5B, #1A2C5B)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            fontFamily: 'Montserrat',
          }}
        >
          EXPERIENCE
        </Typography>
        <Divider
          sx={{
            width: 80,
            height: 4,
            mx: 'auto',
            my: 2,
            borderRadius: 2,
            background: 'linear-gradient(to right, #43c2f9, #1A2C5B)',
          }}
        />
        <Typography
          variant="subtitle1"
          align="center"
          mb={6}
          maxWidth="700px"
          mx="auto"
          mt={3}
          data-aos="fade-up"
          data-aos-duration="2500"
          sx={{ color: sectionSubtitleColor }}
        >
          A diverse journey across leadership, entrepreneurship, and strategic growth.
        </Typography>
      </Box>

      {/* Vertical Timeline Line */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '200px',
          bottom: '50px',
          width: '3px',
          backgroundColor: lineColor,
          transform: 'translateX(-50%)',
          zIndex: 0,
          display: { xs: 'none', md: 'block' },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '200px',
          bottom: '50px',
          width: '3px',
          backgroundColor: 'black',
          transform: 'translateX(-50%)',
          zIndex: 0,
          display: { xs: 'block', md: 'none' },
        }}
      />

      {/* Experience Cards */}
      <Grid container spacing={0} justifyContent="center" alignItems="stretch">
        {experiencePoints.map((point, index) => {
          const isEven = index % 2 === 0;
          const aosType = isEven ? 'fade-up-right' : 'fade-up-left';
          const aosDelay = index * 150;

          return (
            <Grid
              item
              xs={12}
              md={6}
              key={point.id}
              data-aos={aosType}
              data-aos-delay={aosDelay}
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: {
                  xs: 'center',
                  md: isEven ? 'flex-end' : 'flex-start',
                },
                alignItems: 'center',
                py: { xs: 2, md: 4 },
                pr: {
                  xs: 0,
                  md: isEven ? 7 : 0,
                },
                pl: {
                  xs: 0,
                  md: !isEven ? 7 : 0,
                },
                mt: customMargins[index],
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '450px',
                  background: 'linear-gradient(135deg, #a3aaf2ff, #ffffffff)', // 🌸 Linear gradient for all cards
                  borderRadius: 2,
                  p: 3,
                  boxShadow: 3,
                  textAlign: 'left',
                  zIndex: 2,
                }}
              >
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, color: boxTitleColor }}>
                  {point.title}
                </Typography>
                <Typography variant="body2" sx={{ color: boxDescriptionColor }}>
                  {point.description}
                </Typography>
              </Box>

              {/* Horizontal Line */}
              <Box
                sx={{
                  position: "absolute",
                  left: "10%",
                  transform: "translateX(-50%)",
                  height: "2px",
                  ...customLineStyles[index],
                  borderRadius: "2px",
                  display: { xs: "none", md: "block" },
                }}
              />

              {/* Dot - Desktop */}
              <FiberManualRecord
                sx={{
                  position: "absolute",
                  fontSize: 25,
                  color: customLineStyles[index].backgroundColor,
                  ...customIconStyles[index],
                  display: { xs: "none", md: "block" },
                }}
              />

              {/* Dot - Mobile */}
              <FiberManualRecord
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: "calc(50% - 12px)",
                  fontSize: 25,
                  color: lineColor,
                  display: { xs: "block", md: "none" },
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Experience;
