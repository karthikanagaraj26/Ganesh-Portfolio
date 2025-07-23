import { Box } from '@mui/material'
import React from 'react'
import ExperienceSection from '../Components/Services/Experience'
import Section from '../Components/Services/Services'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Services() {
  return (
    <Box>
        <Header/>
      <Section/>
      <ExperienceSection/>
      <Footer/>
    </Box>
  )
}

export default Services
