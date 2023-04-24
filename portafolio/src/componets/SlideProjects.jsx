import React from 'react'
import Slider from 'react-slick';
import Project from './Project';



const data = [
  
  {img:'https://i.ibb.co/k8N0C31/malala.png' , 
    disc:'Malala Jujuy Hostel is my first project and my first freelance experience as a web developer. It is made with HTML with CSS and a little bit of JavaScript, it also uses Bootstrap and SEO improvements. ',
    deploy:'https://malalajujuyhostel.com/',
    github:'https://github.com/ulisandro2/Malala-Jujuy-Hostel--main'
    
  
  },
   


  {img:'https://i.ibb.co/V2Zy7qj/marba.png', 
   disc:'Marbasi is a project similar to Malala with the technologies, only this is a single tab. It is my second freelance project for a company.',
   deploy:'https://ulisandro2.github.io/marba-/',
   github:'https://github.com/ulisandro2/marba-'
  },

  {img:'https://i.ibb.co/4dSwDwQ/Captura-React.png' , 
   disc:'Project made with React to pass a React Js course, this app has a product catalog, a detail, a shopping cart with purchase order, navigation between components and animation with dark/white mode.',
   deploy:'https://gamerstoreapp.ga/',
    github:'https://github.com/ulisandro2/ecommerse-sanchez/tree/main/app-sanchez'
  },

  {img:'https://i.ibb.co/bBWQhW7/Captura-Moon.png' , 
   disc:'Ecommerce project with React on the sale of womens clothing with all the functions of an e-commerce page. This project was for two, which meant working as a team for the first time.',
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