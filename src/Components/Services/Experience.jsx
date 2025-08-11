import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

// Images
import leftDecorImage from "../Images/7.png";
import rightDecorImage from "../Images/4.png";

// Icons
import RocketIcon from "@mui/icons-material/RocketLaunch";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import SchoolIcon from "@mui/icons-material/School";
import ShowChartIcon from "@mui/icons-material/ShowChart";

const experiences = [
  {
    title: "Founder — ARK Global Ventures",
    date: "Feb 2025 - Present",
    description:
      "Scaling aesthetic clinics, IT solutions, and digital marketing with a vision for innovation.",
    icon: <RocketIcon />,
  },
  {
    title: "Business Mentor — ARA Discoveries",
    date: "Aug 2024 - Present",
    description:
      "Guiding IT and marketing teams to deliver cutting-edge tech solutions.",
    icon: <EmojiObjectsIcon />,
  },
  {
    title: "Franchise Owner — Grohair & Gloskin",
    date: "May 2024 - Present",
    description:
      "Science-backed hair restoration and skin care for visible results.",
    icon: <FaceRetouchingNaturalIcon />,
  },
  {
    title: "Franchise Owner — Naturals Thanjavur",
    date: "Dec 2023 - Present",
    description:
      "Premium beauty and grooming services with exceptional client experience.",
    icon: <ContentCutIcon />,
  },
  {
    title: "Mentor — UClean Tamil Nadu",
    date: "Oct 2023 - Present",
    description:
      "Expanding tech-enabled laundry services and optimizing operations.",
    icon: <LocalLaundryServiceIcon />,
  },
  {
    title: "Passionate Agriculturist — GP Farms",
    date: "Sep 2015 - Present",
    description:
      "Sustainable farming and innovative agricultural growth practices.",
    icon: <AgricultureIcon />,
  },
  {
    title: "School Administrator — Morning Star",
    date: "Jun 2010 - Present",
    description:
      "15+ years of academic leadership and holistic student growth.",
    icon: <SchoolIcon />,
  },
  {
    title: "Part-time Stock Market Trader",
    date: "Jan 2010 - Present",
    description:
      "Specializing in F&O derivatives with risk-managed portfolio growth.",
    icon: <ShowChartIcon />,
  },
];

const ExperienceSection = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const bounceVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  };

  return (
    <Box data-aos="fade-down"
      sx={{
        py: isXs ? 4 : 8,
        px: isXs ? 2 : 3,
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
        mb: 5,
        mt: 0,
      }}
    >
      {/* Decorative Left Image */}
      <Box
        component="img"
        src={leftDecorImage}
        alt="Decorative Left"
        sx={{
          position: "absolute",
          top: { xs: "5%", md: "20%", lg: "10%" },
          left: { xs: "-20px", md: "-50px", lg: 20 },
          width: { xs: "70px", md: "130px", lg: "200px" },
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Purple Circle */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "20px", md: "70px" },
          right: { xs: "15px", md: "70px" },
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "#6C63FF",
          zIndex: 1,
        }}
      />

      {/* Decorative Right Image */}
      <Box 
        component="img"
        src={rightDecorImage}
        alt="Decorative Right"
        sx={{
          position: "absolute",
          bottom: { xs: "-20px", md: "40px" },
          right: { xs: "-30px", md: "40px" },
          width: { xs: "80px", md: "200px" },
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Heading */}
      <Typography
        variant="h4"
        align="center"
        fontWeight={550}
        fontFamily="'Poppins', sans-serif"
        mb={1}
        sx={{
          textTransform: "uppercase",
          color: "#6C63FF",
          fontSize: isXs ? "2rem" : isSm ? "2rem" : "2.5rem",
          mt: isXs ? 10 : 5,
          zIndex: 1,
          position: "relative",
        }}
      >
        Experience
      </Typography>

      {/* Underline */}
      <Box
        sx={{
          width: {md:"100px",xs:'60px',sm:'60px',lg:'60px'},
          height: "4px",
          backgroundColor: "#6366f1",
          margin: "0 auto",
          mb: 3,
          borderRadius: 2,
          zIndex: 1,
          position: "relative",
        }}
      />

      {/* Experience Cards */}
      <Grid
        container
        spacing={isXs ? 3 : 4}
        justifyContent="center"
        alignItems="stretch"
        sx={{ mt: isXs ? 2 : 5, zIndex: 1, position: "relative"}}
      >
        {experiences.map((exp, index) => (
          <Grid
            size
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={4}
            sx={{ display: "flex", justifyContent: "center", height: "100%",ml:{lg:2,md:2,sm:0} }}
          >
            <motion.div
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={bounceVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 1.0 },
              }}
              // style={{
              //   width: isXs ? "100%" : isSm ? "100%" : 300,
              //   height: "100%",
                
              // }}
            >
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: 3,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: {sm:'300px',xs:'250px'},
                  width:{sm:'250px',lg:'250px',md:'250px',xs:'200px'},
                  
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {React.cloneElement(exp.icon, {
                    sx: {
                      fontSize: isXs ? 30 : 40,
                      color: "#6366f1",
                    },
                  })}
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      fontSize:
                        isXs ? "15px" : isSm ? "16px" : isMd ? "17px" : "18px",
                    }}
                  >
                    {exp.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                    mb={1}
                    sx={{
                      fontSize:
                        isXs ? "11px" : isSm ? "12px" : isMd ? "13px" : "13.5px",
                    }}
                  >
                    {exp.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize:
                        isXs ? "13px" : isSm ? "14px" : isMd ? "14.5px" : "15px",
                    }}
                  >
                    {exp.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExperienceSection;
