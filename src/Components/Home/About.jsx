import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, useMediaQuery } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import WebIcon from "@mui/icons-material/Web";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import SupportIcon from "@mui/icons-material/SupportAgent";
import image from "../Images/11.png"; // Yellow decorative (left)
import image1 from "../Images/10.png"; // Purple droplets (right)
import image2 from "../Images/5.png";  // Decorative (bottom center)

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:960px)");
  const isMiniLaptop = useMediaQuery("(max-width:1024px)");
  const isDesktop = useMediaQuery("(min-width:1025px)");

  const services = [
    {
      title: "My Journey",
      description: "Started young, supporting my parents in running our school.",
      sub1: "Learned to understand people deeply — their needs, challenges & potential.",
      sub2: `Became Administrator at Morning Star Matriculation School, managing:`,
      des2: `• 2,000+ students\n• 2,000+ parents\n• 100+ staffLed`,
      des3: 'entirely through people skills, gut instinct & doing what’s right — this experience shaped my leadership foundation.',
      icon: <DesignServicesIcon sx={{ fontSize: 50 }} />,
    },
    {
      title: "Where I Am Today",
      description: `Founder & CEO of ARK Global Ventures, Malaysia, scaling:`,
      des1: `• Aesthetic clinics\n• IT services\n• Digital marketing`,
      sub1: "Principal at Morning Star Matriculation School, continuing to guide the next generation.",
      sub2: "Investor & mentor for brands like ARA Discoveries, UClean Tamil Nadu, and others — empowering founders to build self-sustaining businesses.",
      icon: <WebIcon sx={{ fontSize: 50 }} />,
    },
    {
      title: "What Drives Me",
      description: ` Helping people rise and become leaders.`,
      sub1: " Turning daily chaos into smooth, stress-free systems.",
      sub2: " Watching businesses confidently expand — from one branch to many.",
      sub3: " Building businesses that give freedom, not stress.",
      icon: <DevicesOtherIcon sx={{ fontSize: 50 }} />,
    },
    {
      title: "What I Can Help You With",
      description: ` Streamlining daily operations`,
      sub1: ' Expanding franchises & multi-branch growth',
      sub2: ' CRM, automation & digital marketing',
      sub3: ' Leadership development & team empowerment',
      icon: <SupportIcon sx={{ fontSize: 50 }} />,
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#ffffff",
        textAlign: "center",
        py: 5,
        px: 2,
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
        mt: { md: 5, lg: 5, ms: "auto", xs: "auto" },
      }}
    >
      {/* Decorative Images */}
      <Box
        component="img"
        src={image}
        alt="Decorative Yellow"
        sx={{
          position: "absolute",
          top: { xs: "10px", md: "40px" },
          left: 10,
          width: { xs: 50, md: 80, lg: 80 },
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src={image1}
        alt="Decorative Purple"
        sx={{
          position: "absolute",
          top: { xs: "20px", md: "30px" },
          right: 20,
          width: { xs: 60, md: 90 },
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src={image2}
        alt="Bottom Decorative"
        sx={{
          position: "absolute",
          bottom: -10,
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: 70, md: 100 },
          zIndex: 0,
        }}
      />

      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          color: "#6C63FF",
          fontWeight: 600,
          mb: 1,
          textTransform: "uppercase",
          letterSpacing: 1,
          position: "relative",
          zIndex: 1,
          fontSize:{xs:'2rem',lg:'2.5rem',md:'2rem',sm:'2rem'}
        }}
        data-aos="fade-up"
      >
        About Me
      </Typography>

      {/* Underline */}
      <Box
        sx={{
          width: "70px",
          height: "4px",
          backgroundColor: "#6C63FF",
          margin: "0 auto",
          mb: 1.5,
          borderRadius: 2,
          position: "relative",
          zIndex: 1,
        }}
        data-aos="fade-up"
      />

      {/* Subheading */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 400,
          mb: 2,
          width: "100%",
          maxWidth: "650px",
          mx: "auto",
          position: "relative",
          zIndex: 1,
        }}
        data-aos="fade-up"
      >
        My Story is about Empowering People, Creating Systems that work, and
        helping businesses grow confidently. Here’s a look at my Journey.
      </Typography>

      {/* Services Cards Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          py: 4,
          px: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <Box
              key={index}
              sx={{
                flex: "1 1 100%",
                maxWidth: isMobile
                  ? "100%"
                  : isTablet || isMiniLaptop
                  ? "47%"
                  : "22%",
                cursor: "pointer",
                mb: 15,
              }}
              data-aos="fade-up"
              onClick={() => setActiveIndex(index)}
            >
              <Paper
                elevation={isActive ? 8 : 2}
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  textAlign: "center",
                  backgroundColor: isActive ? "#6C63FF" : "#ffffff",
                  color: isActive ? "#fff" : "#000",
                  transition: "all 0.3s",
                  height: "90%",
                  minHeight: 300,
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                  whiteSpace: "pre-line",
                }}
              >
                <Box sx={{ mb: 1, color: isActive ? "#fff" : "#6C63FF" }}>
                  {service.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "left" }}>
                  {service.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "left", ml: 5, mt: 1 }}
                >
                  {service.des1}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "left", mt: 2 }}
                >
                  {service.sub1}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "left", mt: 2 }}
                >
                  {service.sub2}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "left", mt: 1 }}
                >
                  {service.sub3}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "left", ml: 3, mt: 1 }}
                >
                  {service.des2}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "left", mt: 1 }}
                >
                  {service.des3}
                </Typography>
              </Paper>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default About;
