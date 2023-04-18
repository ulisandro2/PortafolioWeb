import React from 'react'
import styled from 'styled-components'
import SlideProjects from './SlideProjects'

const Projects = () => {
  return (
    <Container>
        <h1>My <span className='green'>Projects</span></h1>
   
   <Slide>
      <SlideProjects/>
   </Slide>

    </Container>
  )
}

const Container=styled.div`
   width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0 ;
  text-align: center;
  @media screen and (max-width:840px) {
    width: 90%;
    
  }

  h1{
    font-size: 1.8rem;
  }

`

const Slide=styled.div`
`


export default Projects