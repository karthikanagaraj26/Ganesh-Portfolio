import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

// Icons
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

// Decorative black image
import blackDecorativeImage from "../Images/13.png"; // 13.png

const organisations = [
  {
    icon: <SchoolIcon sx={{ fontSize: 40, color: "#6366f1", mb: 2 }} />,
    title: "Charter Member — Young Entrepreneur School",
    date: "Jun 2021 – Present",
    description:
      "Empowering businesses and communities through active leadership and entrepreneurial engagement.",
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 40, color: "#6366f1", mb: 2 }} />,
    title: "Member — Chamber of Commerce & Industries Thanjavur",
    date: "Jan 2017 – Present",
    description:
      "Promoting local economic growth and collaboration across industries in Thanjavur.",
  },
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 40, color: "#6366f1", mb: 2 }} />,
    title: "Past President — Rotary Club",
    date: "Jul 2014 – Present",
    description:
      "Leadership in community service, health, and education through global rotary initiatives.",
  },
];

const Organisation = () => {
  return (
    <Box data-aos="fade-up"
      sx={{
        py: 8,
        px: 3,
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
        marginBottom: 10,
        marginTop: {lg:5,md:-10},
      }}
    >
      {/* Yellow Circle — Top Left */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "20px", md: "40px" },
          left: { xs: "20px", md: "60px" },
          width: 30,
          height: 30,
          borderRadius: "50%",
          backgroundColor: "#FFD93D",
          zIndex: 1,
        }}
      />

      {/* Purple Circle — Top Right */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "60px", md: "70px",lg:500 },
          right: { xs: "20px", md: "70px" },
          width: 25,
          height: 25,
          borderRadius: "50%",
          backgroundColor: "#6C63FF",
          zIndex: 1,
        }}
      />

      {/* Center Decorative Image (Black) */}
      <Box 
        component="img"
        src={blackDecorativeImage}
        alt="Decorative Center"
        sx={{
          position: "absolute",
          top: -50,
          left: "65%",
         
          width: { xs: "60px", md: "80px",lg:'200px' },
          opacity: 1,
          zIndex: 0, 
        }}
      />

      {/* Heading */}
      <Typography
        variant="h4"
        align="center"
        fontWeight={550}
        fontFamily={"'Poppins', sans-serif"}
        mb={2}
        sx={{ textTransform: "uppercase", color: "#6C63FF", fontSize:{ lg:"2.5rem",md:'2rem',xs:'2rem',sm:'2rem'} }}
      >
        Organisation
      </Typography>

      {/* Decorative Line */}
     <Box
  sx={{
    width: { xs: '70px', sm: '70px', md: '100px', lg: '60px' },
    height: '4px',
    backgroundColor: '#6C63FF',
    margin: '0 auto',
    mb: 1.5,
    borderRadius: 2,
  }}
/>


      {/* Grid of Cards */}
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        spacing={4}
        mt={10}
     
      >
        {organisations.map((org, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.05 }}
              style={{ borderRadius: "16px" }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: 4,
                  textAlign: "center",
                  minHeight: 200,
                  transition: "transform 0.3s ease",
                  border: "1px solid #e0e0e0",
                  position: "relative",
                  zIndex: 2,
                  backgroundColor: "#fff",
                }}
              >
                {org.icon}
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ maxWidth: 280 }}
                >
                  {org.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  mb={1}
                >
                  {org.date}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ maxWidth: 280 }}
                >
                  {org.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Organisation;
