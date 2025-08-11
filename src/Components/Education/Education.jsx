import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";
import image from '../Images/12.png'; // Decorative image

const educationData = [
  {
    institute: "Tamil Nadu Teacher Education University, Chennai",
    degree: "Master of Education (MEd) in Computer Science",
    duration: "Jul 2020 - Jun 2022",
  },
  {
    institute: "Sri Krishna Institute of Technology",
    degree: "Bachelor of Engineering (BE) in Computer Science",
    duration: "Aug 2005 - Apr 2009",
  },
 
 
];

const EducationSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        py: 8,
        px: 2,
        backgroundColor: "#f8fafc",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
        mt: 2,
        
      }}
    >
      {/* Background Dots */}
      <Box
  sx={{
    position: "absolute",
    top:{ lg:390,md:390,xs:800},
    left: 0,
    width: "50%",
    height: "50%",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover", // or 'contain' depending on preference
    
    opacity: 0.05, // subtle background look
    zIndex: 0,
  }}
/>
<Box
        sx={{
          position: 'absolute',
          top: { xs: '20px', md: '40px',lg:'600px' },
          left: { xs: '20px', md: '60px',lg:'1200px' },
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
          top: { xs: '20px', md: '40px',lg:'100px' },
          left: { xs: '20px', md: '60px',lg:'100px' },
          width: 30,
          height: 30,
          borderRadius: '50%',
          backgroundColor: '#FFD93D',
          zIndex: 1,
        }}
      />

      {/* Purple Decorative Circle */}
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



      {/* Heading */}
      <Box data-aos="fade-down" sx={{ textAlign: "center", mb: 6, position: "relative", zIndex: 1,  
    
      }}>
        <Typography  color="#6C63FF" fontWeight={550}sx={{fontSize:{md:'2.5rem',lg:'2.5rem',sm:'2rem',xs:'2rem'}}}>
          EDUCATION
        </Typography>
        <Box
          sx={{
            width: {lg:"60px",sm:'60px',xs:'60px',md:'100px'},
            height: "4px",
            backgroundColor: "#6C63FF",
            margin: "0 auto",
            mb: 1.5,
            borderRadius: 2,
            mt:1
          }}
        />
        <Typography
          variant="h6"
          fontWeight={500}
          mt={2}
          sx={{ maxWidth: 600, mx: "auto" }}
        >
          My Academic Qualifications and Achievements
        </Typography>
      </Box>

      {/* Education Grid */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        position="relative"
        zIndex={1}
        
      >
        {educationData.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={6} lg={3} sx={{ display: "flex" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.05 }}
              style={{ width: "100%" }}
            >
              <Card
                elevation={0}
                sx={{
                  borderRadius: 4,
                  textAlign: "center",
                  backgroundColor: "#fff",
                  width: {xs:'250px',md:'470px',lg:'500px'},
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  height: {xs:'300px'},
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: "#6C63FF",
                    width: 56,
                    height: 56,
                    mx: "auto",
                    mt: 2,
                  }}
                >
                  <SchoolIcon sx={{ color: "white" }} />
                </Avatar>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, width: { md: 450 } }}
                  >
                    {item.degree}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {item.institute}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" mt={1}>
                    {item.duration}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      
      
    </Box>
  );
};

export default EducationSection;
