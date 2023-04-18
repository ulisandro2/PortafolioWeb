import React from 'react'
import styled from 'styled-components'
import {MdWeb} from 'react-icons/md'
import Card from './Card'
import {SiJavascript} from 'react-icons/si'
import {DiReact} from 'react-icons/di'



const Certificate = () => {



  return (
    <ConatinerCertificate>
      <h4>My <span className='green'>Certificates</span></h4>
       <Cards>
        <Card 
         Icon={<MdWeb/>}
        title={'Developer Web'}
        disc={'En este curso de Desarrollo Web aprendi como hacer una pagina web totalmente responsive con HTML(+ Bootstrap), CSS(+SASS) , GIT Y GITHUB. Tambien puedo optimizar el SEO de mi pagina web y subirla al servidor con un hosting ya sea pago o gratuito y un dominio(Nombre de la pagina) '} >

        </Card>

        <Card 
         Icon={<SiJavascript/>}
        title={'JavaScript'}
        disc={'En este curso de JavaScript aprendi como manejar el DOM de mi pagina web para darle elementos interactivos con eventos o ciclos , manejo de datos y objetos con arrays y storage(+JSON) , animacion en la interfaz web con Frameworks de JS   '} >

        </Card>

        <Card 
         Icon={<DiReact/>}
        title={'React Js '}
        disc={'En este curso de React Js aprendi como instalar , configurar y utilizar React para la creacion de excelentes aplicaciones web con multiples funciones avanzadas y una buena circulacion de la pagina(+ReactRouterDom). Excelentes E-commerse con Carritos de compras , detalles de producto , proceso de compra y base de datos de los productos(+Firebase).  '} >

        </Card>

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