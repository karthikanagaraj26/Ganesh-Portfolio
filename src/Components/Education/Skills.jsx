import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  Paper,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../Images/1.png";
import bgImage from "../Images/3.jpg";

import SettingsIcon from "@mui/icons-material/Settings";
import CampaignIcon from "@mui/icons-material/Campaign";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

const SkillSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2500, once: true });
  }, []);

  const theme = useTheme();

  const skills = [
    {
      title: "CRM & Workflow Tools",
      tools: "Zoho, Salesforce, etc.",
      icon: <SettingsIcon sx={{ fontSize: 40, color: "#6C63FF", mr: 2 }} />,
    },
    {
      title: "Marketing Platforms",
      tools: "Google Ads, Facebook Business, MailChimp",
      icon: <CampaignIcon sx={{ fontSize: 40, color: "#6C63FF", mr: 2 }} />,
    },
    {
      title: "Automation",
      tools: "Zapier, Integromat, custom",
      icon: (
        <AutoAwesomeMotionIcon sx={{ fontSize: 40, color: "#6C63FF", mr: 2 }} />
      ),
    },
  ];

  const handleClickRefresh = () => {
    AOS.refresh();
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 10 },
        px: 2,
        minHeight: "70vh",
        fontFamily: "'Poppins', sans-serif",
        mb: 1,
        
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
          zIndex: 0,
          
        }}
      />

      {/* Container */}
      <Grid container spacing={2} sx={{ padding: 4, position: "relative" }}>
        {/* Left Column */}
        <Grid size={{ xs: 12, lg: 6 }}>
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              pl: { xs: 0, sm: 2 ,lg:7},
            }}
          >
            <Typography
              variant="h4"
              fontWeight={550}
              sx={{ color: "#6C63FF", mb: 0, fontSize: { md: "2.5rem" } }}
              data-aos="fade-up"
            >
              SKILLS
            </Typography>

        <Box
    sx={{
      display: "inline-block",
      width: "50px",
      height: "4px",
      backgroundColor: "#6C63FF",
      borderRadius: 2,
      mt:'2px',
      ml:{md:5,lg:5} // small spacing between text and line
    }}
  />
            <Typography
              variant="h6"
              sx={{
                color: "#333",
                mb: 4,
                lineHeight: 1.6,
                textAlign: { xs: "center", md: "left" },
                width: { xs: "90%", sm: "80%", md: "450px" },
                mx: { xs: "auto", md: 0 },
                mt:2
                
              }}
              data-aos="fade-up"
            >
              Empowering businesses and communities through strategic leadership
              and entrepreneurial engagement.
            </Typography>
          </Box>

          {/* Skill Cards */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              ml: { xs: 0, sm: 3, md: 0 ,lg:7},
              mt: { md: 5 },
            }}
          >
            <Grid container direction="column" spacing={3}>
              {skills.map((skill, index) => (
                <Grid
                  key={index}
                  size={12}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Paper
                    elevation={2}
                    onClick={handleClickRefresh}
                    sx={{
                      p: 2,
                      display: "flex",
                      alignItems: "flex-start",
                      borderLeft: "5px solid #6C63FF",
                      borderRadius: "10px",
                      backgroundColor: "#fff",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                      maxWidth: 400,
                      width: "100%",
                      cursor: "pointer",
                      transition: "transform 0.5s ease, box-shadow 0.5s ease",
                      "&:hover": {
                        transform: "scale(1.0)",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    {skill.icon}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        gutterBottom
                      >
                        {skill.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.tools}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid size={{ xs: 12, lg: 6 }} data-aos="fade-down">
          <Box
            sx={{
              borderRadius: "30px",
              display: "flex",
              justifyContent: "center",
              zIndex: 1,
              p: 3,
              position: "relative",
              mt:{lg:-5}
            }}
          >
           <Box
  component="img"
  src={image}
  alt="Profile"
  sx={{
    width: { xs: "160%", sm: "100%", md: "80%" ,lg:'100%'},
    maxWidth: "none",
    height: "auto",


    mx: { xs: "auto", md: "inherit" }, // center on mobile
  }}
/>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillSection;
