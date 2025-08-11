import React from 'react'
import EducationSection from '../Components/Education/Education'
import Organisation from '../Components/Education/Organisation'
import SkillSection from '../Components/Education/Skills'
import Header from '../Components/Header'

import FooterSection from '../Components/Footer'

function Education() {
  return (
    <div>
        <Header/>
      <EducationSection/>
      <SkillSection/>
      <Organisation/>
     
      <FooterSection />
     

    </div>
  )
}

export default Education
