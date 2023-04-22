import React from 'react'
import Slider from 'react-slick'
import {DiReact} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {BsGit} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {SiSass} from 'react-icons/si'
import {SiMicrosoftexcel} from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'

import styled from 'styled-components';


const SliderComp = () => {
  
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <ContainerSl>
    <Slider {...settings}> 
    
         <div><span className='green'><DiReact/></span></div>
         <div><span className='green'><AiFillHtml5/></span></div>
         <div><span className='green'><DiCss3/></span></div>
         <div><span className='green'><AiFillGithub/></span></div>
         <div><span className='green'><SiJavascript/></span></div>
         <div><span className='green'><SiBootstrap/></span></div>
         <div><span className='green'><FaNodeJs/></span></div>
         <div><span className='green'><BsGit/></span></div>
         <div><span className='green'><SiSass/></span></div>
         <div><span className='green'><SiMicrosoftexcel/></span></div>
         <div><span className='green'><SiFirebase/></span></div>
        
           
    </Slider>
    </ContainerSl>  
  )
}

const ContainerSl=styled.div`
 span{
    font-size: 2.7rem;
 }
 `


export default SliderComp