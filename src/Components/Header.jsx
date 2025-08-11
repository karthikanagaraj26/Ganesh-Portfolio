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
import { Link as ScrollLink } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({  once: true });
  }, []);

  const menuItems = [
    { label: 'Home', to: '/', type: 'route' },
    { label: 'Services', to: '/services', type: 'route' },
    { label: 'Education', to: '/education', type: 'route' },
    { label: 'Contact', to: '/contact',type:'route'}, 
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
            {menuItems.map((item, index) =>
              item.type === 'route' ? (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    sx={{
                      px: { md: 1, lg: 1.5, xl: 2 },
                      fontSize: { md: '0.9rem', lg: '1rem', xl: '1.1rem' },
                      fontWeight: 'normal',
                      color:
                        location.pathname === item.to ? 'blue' : '#000',
                      transition: 'color 0.3s',
                      '&:hover': { color: 'blue' },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ) : (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  <Typography
                    data-aos="zoom-in"
                   
                    sx={{
                      px: { md: 1, lg: 1.5, xl: 2 },
                      fontSize: { md: '0.9rem', lg: '1rem', xl: '1.1rem' },
                      fontWeight: 'normal',
                      color: '#000',
                      transition: 'color 0.3s',
                      '&:hover': { color: 'blue' },
                    }}
                  >
                    {item.label}
                  </Typography>
                </ScrollLink>
              )
            )}
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
                component={item.type === 'route' ? Link : 'div'}
                to={item.type === 'route' ? item.to : undefined}
                onClick={() => {
                  setDrawerOpen(false);
                  if (item.type === 'scroll') {
                    document
                      .getElementById(item.to)
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={{
                  '&:hover .nav-text': {
                    color: 'blue',
                  },
                }}
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      className="nav-text"
                      data-aos="zoom-in"
                      
                      sx={{
                        fontWeight: 'normal',
                        fontSize: '1rem',
                        color:
                          item.type === 'route' &&
                          location.pathname === item.to
                            ? 'blue'
                            : 'text.secondary',
                        transition: 'color 0.3s',
                      }}
                    >
                      {item.label}
                    </Typography>
                  }
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
