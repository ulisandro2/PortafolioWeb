import React from 'react'
import styled from 'styled-components'
import {MdWeb} from 'react-icons/md'
import Card from './Card'
import {SiJavascript} from 'react-icons/si'
import {DiReact} from 'react-icons/di'
import { Slide , Zoom } from "react-awesome-reveal";



const Certificate = () => {



  return (
    <ConatinerCertificate id='services'>
    <Slide direction='down'>
      <h4>My <span className='green'>Services/Courses</span></h4>
      </Slide>
       <Cards>
       <Slide direction='left'>
        <Card 
         Icon={<MdWeb/>}
        title={'Developer Web'}
        disc={'In this Web Development course I learned how to make a fully responsive website with HTML(+ Bootstrap), CSS(+SASS) , GIT and GITHUB. I can also optimize the SEO of my website and upload it to the server with a hosting either paid or free and a domain (Name of the page). '} >

        </Card>
        </Slide>

        <Zoom>

        <Card 
         Icon={<SiJavascript/>}
        title={'JavaScript'}
        disc={'In this JavaScript course I learned how to manage the DOM of my web page to give it interactive elements with events or cycles, data and object management with arrays and storage(+JSON), animation in the web interface with JS Frameworks.'} >

        </Card>
        </Zoom>


        <Slide direction='right'>
        <Card 
         Icon={<DiReact/>}
        title={'React Js '}
        disc={'In this React Js course I learned how to install, configure and use React to create excellent web applications with multiple advanced functions and a good circulation of the page (+ReactRouterDom). Excellent E-commerce with shopping carts, product details, checkout process and product database (+Firebase).'} >

        </Card>
     </Slide>
       </Cards>
    </ConatinerCertificate>
  )
}

const ConatinerCertificate=styled.div`
 width: 80%;
 max-width: 1280px;
 margin: 10px auto;
 padding:3rem 0;
 h4{
  font-size: 2rem;
 }
 @media screen and (max-width: 840px) {
  width: 90%;
  
 }

  h1{
    padding-top: 1rem;
    
  }
`
const Cards=styled.div`
  
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px , 1fr));
   margin-top: 4rem;
   gap: 1rem;



`


export default Certificate