import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const NavBar = () => {
  
    const [bar , setBar] = useState(false);


  return (
    <ContainerNav bar={bar}>
      <Logo>
        {/* <span></span> */}
        <h1>Portafolio </h1>
      </Logo>
      <div className='nav'>
        <span><a href='#home'>Home</a></span>
        <span><a href='#services'>Services</a></span>
        <span><a href='#skills'>Skills</a></span>
        <span><a href='#projects'>Projects</a></span>
        <span><a href='#certificado'>Certificates</a></span>
        <span><a href='#'>Accountant</a></span>
        <span><a href='#footer'>Contact Me</a></span>
        

      </div>
    <div onClick={()=> setBar(!bar)}
      className='bars'>
        <div className='bar'></div>
    </div>
    
    </ContainerNav>
  )
}

const ContainerNav = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     width: 80%;
     margin: 0 auto;
     padding: 1.5rem 0 ;
     max-width: 1280px;
     @media(max-width:763px) {
        width: 90%;
        
     }

     @media(max-width:800px) {

     .nav{
      position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #1bddd3;
    top: 0;
    right: 0;
    bottom:0;
    left: 0;
    height: ${props => props.bar ? "100vh" : 0 };
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    gap: 2rem;
    z-index: 99;
    font-weight: 700;
    
    transition: height 400ms ease-in-out ;
    overflow: hidden;
     }

        .bars{
            width:30px ;
            height: 30px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            .bar{
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : '#fff'};
                transition: all 400ms ease-in-out;
                :before, :after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color:#fff ;
                    position: absolute;

                }
                :before{
                    transform: ${props => props.bar ? 'rotate(45deg)' : 'translateY(10px)'};
                    transition: all 400ms ease-in-out;
                }
                :after{
                    transform: ${props => props.bar ? 'rotate(-45deg)' : 'translateY(-10px)'};
                    transition: all 400ms ease-in-out;
                }
            }
        }
        
     }

     span{
    margin-left: 1rem;
    a{
        color: #fff;
        text-decoration: none;
        font-weight: 400;
        position: relative;
        
        :before{
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;
            height: 2px;
            background-color: #fff;
            transform: scale(0);
            transform-origin: left;
            transition: transform 400ms ease-in-out;
        }
        :hover:before{
             transform: scale(1);
             transform-origin: right;
        }
        :hover{
            opacity: 0.8;
        }
    }
  }
     
`

const Logo = styled.div`
     display: flex;
     align-items: center;
     gap: 0.5rem;
     span{
        font-size: 1.8rem;
        color: green;
     }

     h1{
        font-weight: 600;
        font-size: 1.2rem;
     }

`






export default NavBar