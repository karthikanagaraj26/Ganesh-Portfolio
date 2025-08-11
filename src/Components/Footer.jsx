import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Chip,
  Divider,
  Link,
  useTheme,
  Grid,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link as RouterLink } from "react-router-dom";

import image2 from "../Components/Images/8.png";
import image3 from "../Components/Images/14.png";

export default function FooterSection() {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  const hoverChipStyle = (theme) => ({
    backgroundColor: "transparent",
    border: "none",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "17px",
    px: 2,
    py: 1,
    boxShadow: "none",
    transition: "all 0.3s ease",
    "& .MuiChip-icon": {
      color: "#ffffff",
      transition: "color 0.3s ease",
    },
    [theme.breakpoints.down(575)]: {
      fontSize: "12px",
      "& .MuiChip-icon": {
        fontSize: "18px",
      },
    },
    "&:hover": {
      backgroundColor: "#ffffff !important",
      color: "#6C63FF",
      "& .MuiChip-icon": {
        color: "#6C63FF",
      },
    },
  });

  const infoChipStyle = (theme) => ({
    backgroundColor: "transparent",
    border: "none",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "17px",
    px: 2,
    py: 1,
    boxShadow: "none",
    ".MuiChip-icon": {
      color: "#ffffff",
      fontSize: "22px",
    },
    [theme.breakpoints.down(575)]: {
      fontSize: "12px",
      ".MuiChip-icon": {
        fontSize: "18px",
      },
    },
  });

  return (
    <Box
      id="contact"
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #5b2be0 0%, #6228d7 100%)",
        minHeight: "350px",
        fontFamily: "'Poppins', sans-serif",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Decorative Images */}
      <Box
        component="img"
        src={image2}
        alt="Floating Top Right"
        sx={{
          position: "absolute",
          bottom: "70%",
          right: "8%",
          width: { xs: 50, sm: 70, md: 90 },
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src={image3}
        alt="Floating Bottom Left"
        sx={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
          width: { xs: 40, sm: 60, md: 50, lg: 90 },
          zIndex: 0,
        }}
      />

      {/* Vertical Dots */}
      <Box
        sx={{
          position: "absolute",
          top: "8%",
          left: "2%",
          height: "90px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <Box
            key={`dot-${i}`}
            sx={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          />
        ))}
      </Box>

      {/* Main Layout */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          textAlign:{xs:'center'},
          ml:{lg:11,md:2},
          mt:{lg:3,md:3}
        }}
      >
        {/* LEFT SIDE */}
        <Box
          data-aos="fade-right"
          sx={{
            flex: 1,
            pr: 2,
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            mt: 4,
            ml: { xs: 0, md: 5, lg: "100px" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            color="#ffffff"
            sx={{
              textAlign: { xs: "center", md: "left" },
              ml: { md: 3, xs: 2 },
            }}
          >
            Let’s Work Together.
          </Typography>
          <Divider
            sx={{
              my: 1,
              borderColor: "#ffffff",
              width: { xs: "50%", sm: "60%", md: "50%", lg: "40%" },
              borderBottomWidth: 2,
              ml: { xs: 0, sm: 2, md: 3 },
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              gap: 1,
              mt: 1,
              ml:2
            }}
          >
            <Chip
              icon={<EmailIcon />}
              label="business@gp10.co"
              variant="outlined"
              sx={infoChipStyle(theme)}
            />
            <Chip
              icon={<LocationOnIcon />}
              label="Thanjavur Tamil nadu , India"
              variant="outlined"
              sx={infoChipStyle(theme)}
            />
          </Box>

          {/* SOCIAL ICONS */}
          <Box
            sx={{
              mt: 2,
              width: "100%",
              maxWidth: "500px",
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              flexWrap: "nowrap",
              ml:{lg:1}
            }}
          >
            <Chip
              icon={<LinkedInIcon />}
              label="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/ganeshprabhuarivanantham/"
              clickable
              target="_blank"
              sx={hoverChipStyle(theme)}
            />
            <Chip
              icon={<FacebookIcon />}
              label="Facebook"
              component="a"
              href="https://www.facebook.com/ganesh.prabhu.arivanantham"
              clickable
              target="_blank"
              sx={hoverChipStyle(theme)}
            />
            <Chip
              icon={<InstagramIcon />}
              label="Instagram"
              component="a"
              href="https://www.instagram.com/ganesh_prabhu_a/"
              clickable
              target="_blank"
              sx={hoverChipStyle(theme) }
            />
          
          </Box>

          {/* PHONE VIEW ONLY - 2 ROWS */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              gap: 1,
              alignItems: "center",
              mt: 2,
              width: "100%",
              
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                width: "120%",
                justifyContent: "center",
              }}
            >
              <Chip
                icon={<LinkedInIcon />}
                label="LinkedIn"
                component="a"
                href="https://www.linkedin.com/in/ganeshprabhuarivanantham/"
                clickable
                target="_blank"
                sx={{ ...hoverChipStyle(theme), width: "48%" }}
              />
              <Chip
                icon={<FacebookIcon />}
                label="Facebook"
                component="a"
                href="https://www.facebook.com/share/16NczAZW6o/"
                clickable
                target="_blank"
                sx={{ ...hoverChipStyle(theme), width: "48%" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                width: "120%",
                
                justifyContent: "center",
              }}
            >
              <Chip
                icon={<InstagramIcon />}
                label="Instagram"
                component="a"
                href="https://www.instagram.com/ganesh_prabhu_a/"
                clickable
                target="_blank"
                sx={{ ...hoverChipStyle(theme), width: "48%",ml:2 }}
              />
              
              
            </Box>
          </Box>
        </Box>

        {/* RIGHT SIDE MENUS */}
        <Box
          data-aos="fade-left"
          sx={{
            flex: 1,
            mt: { xs: 4, md: 7,lg:10 },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            mr: { xs: 0, md: 10 },
            ml: { xs: 1, md: 25, lg: 30 },
            width: { xs: "100%", md: 300 },
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              display: {
                xs: "grid",
                sm: "flex",
                md: "flex",
              },
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "none",
              },
              flexDirection: {
                sm: "row",
                md: "column",
              },
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "flex-start",
              },
              alignItems: {
                xs: "center",
                sm: "center",
                md: "flex-start",
              },
              gap: 1,
              mt: { lg: -3 },
            }}
          >
            {["home", "services", "education", "contact"].map((section) => (
              <Link
                key={section}
                component={RouterLink}
                to={section === "home" ? "/" : `/${section}`}
                underline="none"
                color="#ffffff"
                sx={{
                  fontSize: { xs: "15px", sm: "16px", md: "18px" },
                  fontWeight: 500,
                  pr: 2,
                  pl: { lg: 10 },
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  transition: "all 0.3s ease",
                  "&::before": {
                    content: '"•"',
                    display: "inline-block",
                    mr: 1,
                    color: "#ffffff",
                    fontSize: "20px",
                  },
                  "&:hover": {
                    color: "#ffffff",
                    pl: { lg: 11 }, // slight move left effect
                  },
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ mt: "auto", textAlign: "center" }}>
        <Divider
          sx={{
            borderColor: "#ffffff",
            borderBottomWidth: 1.5,
            mb: 2,
            mt: 2,
            width: "100%",
          }}
        />
        <Typography
          variant="body2"
          color="#ffffff"
          fontFamily="'Poppins', sans-serif"
          mb={1}
        >
          © 2025 Ganesh Prabhu Arivanantham. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
