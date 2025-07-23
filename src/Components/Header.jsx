import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 200, once: true });
  }, []);

  const menuItems = [
    { label: 'Home', to: '/' },
    
    { label: 'Services', to: '/services' },
    { label: 'Education', to: '/education' },
    
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: '#fff',
          fontFamily: "'Poppins', sans-serif",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
          }}
        >
          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex' },
              gap: { md: 2, lg: 3, xl: 4 },
              alignItems: 'center',
            }}
          >
            {menuItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                style={{ textDecoration: 'none', }}
              >
                <Typography
                  data-aos="zoom-in"
                  data-aos-delay={index * 300}
                  sx={{
                    px: { md: 1, lg: 1.5, xl: 2 },
                    fontSize: { md: '0.9rem', lg: '1rem', xl: '1.1rem' },
                    fontWeight: 'normal',
                    color: location.pathname === item.to ? 'blue' : '#000',
                    transition: 'color 0.3s',
                    '&:hover': { color: 'blue' },
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Box>

          {/* Hamburger Icon */}
          <IconButton
            sx={{
              display: { xs: 'block', sm: 'block', md: 'none' },
              color: 'black',
            }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Spacer */}
      <Toolbar />

      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 240, pt: 6 }} role="presentation">

          <List>
            {menuItems.map((item, index) => (
              <ListItemButton
                key={item.to}
                component={Link}
                to={item.to}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: 'normal',
                      fontSize: '1rem',
                      color:
                        location.pathname === item.to
                          ? 'blue'
                          : 'text.secondary',
                      '&:hover': {
                        color: 'blue',
                      },
                    },
                    'data-aos': 'zoom-in',
                    'data-aos-delay': index * 300,
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
