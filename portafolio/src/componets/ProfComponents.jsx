import React from 'react'
import styled from 'styled-components'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import Img2 from '../assets/gamerstore.mp4'
import Img3 from '../assets/CV-.pdf'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const ProfComponents = () => {

 const [text] = useTypewriter({
    words:['Front-End Developer','Developer Web','and Future Accountant'],
    loop:true,
    typeSpeed:240,
    delaySpeed:600,
    deleteSpeed:200,
 })
  return (
    <ContainerProf id='home'>
        <Texts>
            <h4>Hello <span className='green'> I'am</span></h4>
            <h1 className='green'>Ulises Sanchez</h1>
            <h3>{text}<Cursor cursorBlinking="false" cursorColor='white'  /> </h3>
            <p>Hello my name is Ulises Sanchez, I live in Argentina Buenos Aires, I'm 20 years old and I'm a Frontend Developer specialized in React Js , although I also have a Full Stack project with Node and Express. I finished a 6 months programming course at Coder House where I learned multiple technologies to create web pages. Currently I am also studying some technologies to specialize in Backend (My goal is to be FullStack) like express and MySql. I have experience as a freelance web developer where I have created 2 projects with HTML , CSS and JavaScript , with domain and hosting , with SEO configuration , managed with Git and GitHub , and fully responsive for all devices. All this I also applied to 2 projects but containing React where what stands out is that they are 2 e-commerce websites with a product catalog , a detail , shopping cart , purchase orders and connected to a Firebase database(!!!! These projects are generic not real !!!). I am also studying at the university EAN (Escuela Argentina de Negocios) the career of Public Accountant , I am currently in the second year of the career with the desire to continue acquiring knowledge. My goal is to find an IT job where I can demonstrate my skills and knowledge, I would like to have a team and gain experience and grow professionally. Although I also accept freelance jobs of all kinds, I have experience in creating and managing projects.
            
            </p>
            <button><a href={Img3} className='green' download='Cv-sanchezUlises'>Download CV</a></button>
            <Social>
                <p>Check out my</p>
                <div className='social-icons'>
                    <span><a href='https://www.linkedin.com/in/ulises-sanchez-b6b935238/'><FaLinkedinIn/></a></span>
                    <span><a href='https://github.com/ulisandro2'><BsGithub/></a></span>
                </div>
            </Social>
            <h4>See my payment gateway in Full stack project !!!!</h4>
            <Img>
            <video width='600px' height='360px' controls autoPlay>
                <source src={Img2} type='video/mp4'></source>
                <source src={Img2} type='video/ogg'></source>
                Your browser does not support HTML5

            </video>
        </Img>
        </Texts>
        
        
    </ContainerProf>
  )
}

const ContainerProf=styled.div`

     display: flex;
     gap: 2rem;
     padding-top: 7rem;
     width: 90%;
     margin: 0 auto;
   @media screen and (max-width:840px) {
      width: 90%;
    
   }
   @media screen and (max-width:840px){
        flex-direction:column;
        
    }
   @media screen and (max-width: 600px) {
         video{
           width: 100%;
         }
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
    width: 60rem;
    height: 20rem;
    filter: drop-shadow(0px 10px 10px #1bddd3);
    transition: transform 400ms ease-in-out;
    @media screen and (max-width:790px){
        width: 20rem;
        
    }
    @media screen and (max-width:660px){
        width: 18rem;
        
    }
    @media screen and (max-width:840px){
        width: 100%;
        img{
            width: 16rem;
        }
    }
    @media screen and (max-width:960px){
        
        width: 20rem;
    }
   }

`

export default ProfComponents