import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Grid, Stack, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const points = [
  "Brand Consulting",
  "Educational Consulting",
  "Event Coordination",
  "Corporate Events",
  "Event Planning",
  "Advertising",
  "Brand Marketing",
  "Application Development",
  "Ad Design",
  "Leadership Development"
];

// Split into 5 + 5
const leftPoints = points.slice(0, 5);
const rightPoints = points.slice(5, 10);

const ServicePoint = ({ title, animation }) => (
  <Stack
    direction="row"
    spacing={3}
    alignItems="center"
    sx={{ mb: 4 }}
    data-aos={animation}
  >
    <CheckCircleIcon sx={{ color: "#37af04ff", fontSize: "35px" }} />
    <Typography
      variant="h5"
      sx={{ fontFamily: "Montserrat", fontWeight: "medium" }}
    >
      {title}
    </Typography>
  </Stack>
);

const Services = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 3000
    });
  }, []);

  return (
    <Box
      id="services"
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
        fontFamily: "Montserrat"
      }}
    >
      {/* Gradient Heading */}
      <Box textAlign="center" data-aos="fade-down" data-aos-duration="1000">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            background: 'linear-gradient(to right, #1291aaff, #1A2C5B)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            fontFamily: 'Montserrat'
          }}
        >
          SERVICES
        </Typography>
        <Divider
          sx={{
            width: 80,
            height: 4,
            mx: 'auto',
            my: 2,
            borderRadius: 2,
            background: 'linear-gradient(to right, #00B4D8, #1A2C5B)'
          }}
        />
        <Typography
          variant="subtitle1"
          color="text.secondary"
          align="center"
          mb={6}
          sx={{ maxWidth: 500, mx: "auto" }}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          We provide a wide range of services to help elevate your brand, events, and business growth.
        </Typography>
      </Box>

      {/* Service List */}
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} md={6}>
          {leftPoints.map((point, index) => (
            <ServicePoint key={index} title={point} animation="zoom-in-right" />
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          {rightPoints.map((point, index) => (
            <ServicePoint key={index} title={point} animation="zoom-in-left" />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
