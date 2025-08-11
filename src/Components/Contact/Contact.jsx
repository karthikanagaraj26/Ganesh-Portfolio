import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Chip,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AOS from "aos";
import "aos/dist/aos.css";
import image2 from "../Images/6.png";
import image3 from "../Images/5.png";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const theme = useTheme();
  const isPhone = useMediaQuery("(max-width:575px)");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:991px)");

  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    time: new Date().toLocaleString(),
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const socialIcons = [
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ganeshprabhuarivanantham/",
    },
    {
      icon: <FacebookIcon />,
      label: "Facebook",
      link: "https://www.facebook.com/share/16NczAZW6o/",
    },
    {
      icon: <InstagramIcon />,
      label: "Instagram",
      link: "https://www.instagram.com/ganesh_prabhu_a/",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mgzuppo", 
        "template_s2tpuyr", 
        formRef.current,
        "VDlSCc2kgMbOtg_fj" 
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          time: new Date().toLocaleString(),
        });
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <Box
      id="contact"
      sx={{
        px: isPhone ? 2 : isTablet ? 5 : 10,
        py: 8,
        background: "linear-gradient(135deg, #5b2be0 0%, #6228d7 100%)",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        textAlign: isPhone || isTablet ? "center" : "left",
        height: { lg: "70.8vh", sm: "100%", md: "100%" },
        overflow: "hidden",
      }}
    >
      {/* Floating images */}
      <Box
        component="img"
        src={image2}
        alt="Floating image 2"
        data-aos="fade-left"
        data-aos-delay="200"
        sx={{
          position: "absolute",
          bottom: { lg: "80%", xs: "78%" },
          left: { lg: "50%", xs: "69%", sm: "80%" },
          width: { xs: 50, sm: 70, md: 90 },
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src={image3}
        alt="Floating image 3"
        data-aos="fade-up"
        data-aos-delay="400"
        sx={{
          position: "absolute",
          bottom: { lg: "15%", xs: "15%" },
          left: "5%",
          width: { xs: 40, sm: 60, md: 50, lg: 90 },
          zIndex: 0,
        }}
      />

      {/* Dot decorations */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "2%",
          height: "90px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 0,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <Box
            key={`left-dot-${i}`}
            sx={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "5%",
          right: "2%",
          height: "90px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 0,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <Box
            key={`right-dot-${i}`}
            sx={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
          />
        ))}
      </Box>

      {/* Grid content */}
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        mt={2}
        justifyContent={isPhone || isTablet ? "center" : "space-between"}
      >
        {/* Left info section */}
        <Grid size={{xs:12,md:6}} data-aos="fade-right">
          <Box sx={{ ml: { lg: 13 }, mt: 3 }}>
            <Typography variant="h4" fontWeight="bold" color="#ffffff">
              Let’s work together
            </Typography>
            <Divider
              sx={{
                my: 1,
                borderColor: "#ffffff",
                width: { xs: "60%", sm: "60%", md: "50%", lg: "65%" },
                borderBottomWidth: 2,
                mt: 2,
                mx: isPhone || isTablet ? "auto" : 0,
              }}
            />
            <Box
              display="flex"
              flexDirection="column"
              gap={1}
              mt={{ lg: 5, xs: 4 }}
              alignItems={isPhone || isTablet ? "center" : "flex-start"}
              sx={{ width: isPhone || isTablet ? "100%" : "100%" }}
            >
              <Chip
                icon={<EmailIcon  color="#ffffff"/>}
                label="business@gp10.co"
                variant="outlined"
                sx={{
                  border: "none",
                  color: "#ffffff",
                  fontSize: { lg: "130%", xs: "70%", sm: "130%" },
                }}
              />
              <Box mt={{ lg: 3, xs: 2 }}>
                <Chip
                  icon={<LocationOnIcon color="#ffffff" />}
                  label="Thanjavur Tamil nadu, India"
                  variant="outlined"
                  sx={{
                    border: "none",
                    color: "#ffffff",
                    fontSize: "120%",
                  }}
                />
              </Box>
            </Box>

            {/* Social Icons */}
            <Box
              display="flex"
              flexDirection="column"
              gap={2.5}
              ml={-1}
              mt={5}
              alignItems={isPhone || isTablet ? "center" : "flex-start"}
            >
              <Box display="flex" gap={1.5}>
                {[socialIcons[0], socialIcons[1]].map((item) => (
                  <Chip
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    component="a"
                    href={item.link}
                    clickable
                    sx={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#ffffff",
                      fontWeight: 600,
                      fontSize: isPhone ? "14px" : "17px",
                      px: 2,
                      py: 1,
                      ml: { lg: -1 },
                      boxShadow: "none",
                      transition: "all 0.3s ease",
                      "& .MuiChip-icon": {
                        color: "#ffffff",
                        fontSize: isPhone ? "18px" : undefined,
                        transition: "color 0.3s ease",
                      },
                      "&:hover": {
                        backgroundColor: "#ffffff !important",
                        color: "#6C63FF",
                        "& .MuiChip-icon": {
                          color: "#6C63FF",
                        },
                      },
                    }}
                  />
                ))}
              </Box>
              <Chip
                icon={<InstagramIcon />}
                label="Instagram"
                component="a"
                href={socialIcons[2].link}
                clickable
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: isPhone ? "14px" : "17px",
                  px: { xs: 1, sm: 2, md: 5, lg: 1 },
                  py: 1,
                  ml: { sm: -0.1, xs: 0.1 },
                  mr: { md: -6, lg: 1, xs: 2 },
                  boxShadow: "none",
                  transition: "all 0.3s ease",
                  "& .MuiChip-icon": {
                    color: "#ffffff",
                    fontSize: isPhone ? "18px" : undefined,
                    transition: "color 0.3s ease",
                  },
                  "&:hover": {
                    backgroundColor: "#ffffff !important",
                    color: "#6C63FF",
                    "& .MuiChip-icon": {
                      color: "#6C63FF",
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Right form section */}
        <Grid size={{xs:12,md:6}} data-aos="fade-left">
          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            display="flex"
            flexDirection="column"
            gap={2}
            sx={{
              width: { lg: "80%", sm: "100%", xs: "100%" },
              mx: isPhone || isTablet ? "auto" : 0,
              alignItems: isPhone || isTablet ? "center" : "flex-start",
              mt: 3,
              mr: { lg: 40, sm: 30 },
            }}
          >
            <TextField
              name="name"
              fullWidth
              variant="filled"
              label="Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              sx={{ backgroundColor: "#f2f2f2", borderRadius: 2 }}
            />
            <TextField
              name="email"
              fullWidth
              variant="filled"
              label="Email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              sx={{ backgroundColor: "#f2f2f2", borderRadius: 2 }}
            />
            <TextField
              name="message"
              fullWidth
              variant="filled"
              multiline
              rows={5}
              label="Type your message here"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              sx={{ backgroundColor: "#f2f2f2", borderRadius: 2 }}
            />
            <input type="hidden" name="time" value={formData.time} />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#000000ff",
                borderRadius: 20,
                color: "#ffffff",
                fontWeight: "bold",
                width: "150px",
                alignSelf: isPhone || isTablet ? "center" : "flex-start",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer */}
      <Divider sx={{ mt: 17, bgcolor: "#ffffff" }} />
      <Typography variant="body2" align="center" color="#ffffff" mt={2}>
        © 2025 Ganesh Prabhu Arivanantham. All rights reserved.
      </Typography>
    </Box>
  );
}
