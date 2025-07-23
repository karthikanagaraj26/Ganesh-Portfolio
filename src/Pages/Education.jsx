import React from 'react'
import EducationSection from '../Components/Education/Education'
import Organisation from '../Components/Education/Organisation'
import SkillSection from '../Components/Education/Skills'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Education() {
  return (
    <div>
        <Header/>
      <EducationSection/>
      <SkillSection/>
      <Organisation/>
      <Footer/>

    </div>
  )
}

export default Education
