import React from 'react'
import Slider from 'react-slick';
import Project from './Project';



const data = [
  
  {img:'https://i.ibb.co/k8N0C31/malala.png' , 
    disc:'Malala Jujuy Hostel es mi primer proyecto y mi primera experiencia freelancer como desarrollador web. Esta hecha con HTML con CSS y un poquito de JavaScript , tambien utilize Bootstrap y mejoras de Seo. ',
    deploy:'https://malalajujuyhostel.com/',
    github:'https://github.com/ulisandro2/Malala-Jujuy-Hostel--main'
    
  
  },
   


  {img:'https://i.ibb.co/V2Zy7qj/marba.png', 
   disc:'Marbasi es un proyecto similar a Malala con las tecnologias , solo que esta es una sola pestaña. Es mi segundo proyecto freelance para una empresa.',
   deploy:'https://ulisandro2.github.io/marba-/',
   github:'https://github.com/ulisandro2/marba-'
  },

  {img:'https://i.ibb.co/4dSwDwQ/Captura-React.png' , 
   disc:'Proyecto hecho con React para aprobar un curso de React Js , esta app tiene un catalogo de productos , un detalle , un carrito de compras con orden de compra , navegacion entre componenetes y animacion con modo oscuro/blanco.',
   deploy:'https://gamerstoreapp.ga/',
    github:'https://github.com/ulisandro2/ecommerse-sanchez/tree/main/app-sanchez'
  },

  {img:'https://i.ibb.co/bBWQhW7/Captura-Moon.png' , 
   disc:'Proyecto e-commerse con React sobre venta de ropa femenina con todas las funciones de una pagina e-commerse. Este proyecto fue de a dos lo que significo trabajar en equipo por primera vez.',
   deploy:'https://moonproyecto.netlify.app/',
    github:'https://github.com/ulisandro2/moon2'
  }


]

const SlideProjects = () => {

    var settings = {
        className:'center',
        centerModer:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
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

let sliderProject = '';
sliderProject = data.map((item, i) => (
  <Project item={item} key={i}/>
))

  return (
    <Slider {...settings}>
     {sliderProject}

    </Slider>
  )
}

export default SlideProjects