import React from 'react'
import styled from 'styled-components'
import SliderComp from './SliderComp'

const Skills = () => {
  return (
    <ContainerProjects id='skills'>
    <h1>My  <span className='green'>Skills</span></h1>

    <Slide>
        <SliderComp/>
    </Slide>
    </ContainerProjects>
  )
}

const ContainerProjects=styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0 ;
  text-align: center;

  h1{
    font-size: 1.8rem;
  }

`

const Slide=styled.div`
`

export default Skills