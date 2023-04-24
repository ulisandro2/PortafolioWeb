import React from 'react'
import styled from 'styled-components'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import Img2 from '../assets/Software Developer.jpg'
import Img3 from '../assets/cv.pdf'

const ProfComponents = () => {
  return (
    <ContainerProf>
        <Texts>
            <h4>Hello <span className='green'> I'am</span></h4>
            <h1 className='green'>Ulises Sanchez</h1>
            <h3>Front-End Developer </h3>
            <p>Hello, my name is Ulises Sanchez and I am a Fronted developer specialized in React js, finishing my CoderHouse fronted react development course more than 1 year ago. Currently I am also studying other technologies and specializing in the Backend to be FullStack. I have experience in freelance projects that I have in my profile. I am able to create pages with very good CSS functionality and styles (especially web e-commerce).
            I live in Argentina, Buenos Aires, and I am studying public accounting at the EAN University (Escuela Argentina De Negocios) in my second year.
            My goal is to be able to work in a position in the IT world where I can demonstrate my skills and grow professionally.
            
            </p>
            <button><a href={Img3} className='green' download='Cv-sanchezUlises'>Download CV</a></button>
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
     padding-top: 3rem;
     width: 90%;
     margin: 0 auto;
   @media screen and (max-width:840px) {
      width: 90%;
    
   }
   @media screen and (max-width:700px){
        flex-direction:column;
        
    }
  

`

const Texts = styled.div`


     flex: 1;
     h4{
        padding: 1rem 0 ;
        font-weight: 500;
     }
    
     h1{
        font-size: 2.4rem;
        font-family: 'Secular One', sans-serif;
        letter-spacing: 2px;
        
     }
     h3{
        font-weight: 500;
        font-size: 1.6rem;
        padding-bottom: 1.2rem;
        text-transform: capitalize;

     }
     p{
        font-weight: 300;
        font-size: 1rem;
        @media screen and (max-width:770) {
       p{
        font-size: 0.7rem;
       }    
  }
     }
     button{
        padding:0.5rem 0.8rem ;
        margin-top: 1rem;
        cursor: pointer;
        background-color: #1bddd3;
        border: none;
        color: white;
        font-weight: 300;
        font-size: 1.1rem;
        a{
            text-decoration:none;
            list-style: none;
            color: white;
        }
        filter: drop-shadow(0px 10px 10px #01be96 );
        :hover{
            filter: drop-shadow(0px 10px 10px #01be96 );
        }
     }


`
const Social = styled.div`
 margin: 1rem;
 display: flex;
 align-items: center;
 gap: 1rem;
  p{
    font-size: 1.2rem;
    @media screen and (max-width:690px){
        font-size: 0.7rem ;
        
    }
  }

  .social-icons{
    display: flex;
    align-items: center;
    gap: 1rem;
    span{
        width: 2.2rem;
        height: 2rem;
        clip-path: polygon(25% 0% , 75% 0%,100% 50% , 75% 100%, 25% 100% , 0% 50%);
        background-color: #1bddd3;
        position: relative;
        transition:transform 1200ms ease-in-out;
        :hover{
            transform: rotate(360deg);
        }
    }
    a{
        color: white;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

  }


`

const Img =styled.div`
   img{
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #1bddd3);
    transition: transform 400ms ease-in-out;
    @media screen and (max-width:790px){
        width: 20rem;
        
    }
    @media screen and (max-width:660px){
        width: 18rem;
        
    }
    @media screen and (max-width:700px){
        width: 100%;
        
    }
   }

`

export default ProfComponents