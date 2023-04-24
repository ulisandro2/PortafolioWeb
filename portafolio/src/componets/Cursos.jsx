import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components'
import CursoComponent from './CursoComponent';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import { useRef } from 'react';


let cursos = [ 
    {img:'https://i.ibb.co/0ndjNsQ/DsWeb.png'},
    {img:'https://i.ibb.co/hL9Q8tr/Js.png'},
    {img:'https://i.ibb.co/y0Fv3bT/React.png'},
    {img:'https://i.ibb.co/xF4PLn3/Carrera.png'},
]


const Cursos = () => {


  const arrowRef = useRef(null)

    let cursos2 = ""
    cursos2 = cursos.map((item,i) =>
      <CursoComponent item={item} key={i}/>
    )

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows:false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
    <Container id='certificado' >
        <span className='green'>Cursos</span>
        <h1>Certificates</h1>
        <Certificados>
            <Slider ref={arrowRef} {...settings}>
                {cursos2}
            </Slider>
            <Buttons>
            <button onClick={()=> arrowRef.current.slickPrev()}><IoIosArrowBack/></button>
            <button onClick={()=> arrowRef.current.slickNext()}><IoIosArrowForward/></button>
            </Buttons>
        </Certificados>
    </Container>
  )
}

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0 ;
   h1{
     padding-top: 1rem;
     text-transform: capitalize;
   }
   span{
    font-weight: 700;
    text-transform: uppercase;
   }

   .slick-dots{
    text-align: left;
    margin-left: 1rem;
   }

   .slick-dots li button::before{
    content: "";
   }

   .slick-dots li button{
    width: 9px;
    height: 4px;
    background: black;
    padding: 0.1rem;
    transition: all 400ms ease-in-out;
    border-radius:30px ;
   }


   .slick-dots li.slick-active button{
    background: #1bddd3;
    width: 15px;
   }

   .slick-dots li{
    margin: 0;
   }



`




const Certificados =styled.div`
        margin-top:2rem ;
        position: relative;
`

const Buttons =styled.div`

   position: absolute;
   right: 0.7rem;
   bottom: -1rem;

   button{
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #1bddd3;
    cursor: pointer;
    font-size: 1.3rem;
    
   }


`

export default Cursos