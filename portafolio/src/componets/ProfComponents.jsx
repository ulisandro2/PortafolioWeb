import React from 'react'
import styled from 'styled-components'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import Img2 from '../assets/Software Developer.jpg'

const ProfComponents = () => {
  return (
    <ContainerProf>
        <Texts>
            <h4>Hello <span className='green'> I'am</span></h4>
            <h1>Ulises Sanchez</h1>
            <h3>Front-End Developer </h3>
            <p>Hello, my name is Ulises Sanchez and I am a Fronted developer specialized in React js, finishing my CoderHouse fronted react development course more than 1 year ago. Currently I am also studying other technologies and specializing in the Backend to be FullStack. I have experience in freelance projects that I have in my profile. I am able to create pages with very good CSS functionality and styles (especially web e-commerce).
            I live in Argentina, Buenos Aires, and I am studying public accounting at the EAN University (Escuela Argentina De Negocios) in my second year.
            My goal is to be able to work in a position in the IT world where I can demonstrate my skills and grow professionally.</p>
            <button>Let's talk</button>
            <Social>
                <p>Check out my</p>
                <div className='social-icons'>
                    <span><a href='#'><FaLinkedinIn/></a></span>
                    <span><a href='#'><BsGithub/></a></span>
                </div>
            </Social>
        </Texts>
        <Img>
            <img src={Img2}></img>
        </Img>
        
    </ContainerProf>
  )
}

const ContainerProf=styled.div`

     display: flex;
     gap: 2rem;
     padding: 3rem;


`

const Texts = styled.div`

     flex: 1;
     h4{
        padding: 1rem 0 ;
        font-weight: 500;
     }
     h1{
        font-size: 2rem;
        font-family: 'Secular One', sans-serif;
     }
`
const Social = styled.div`
`

const Img =styled.div`


`

export default ProfComponents