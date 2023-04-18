import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
  
    const {title , disc,Icon} = props;


  return (
    <ContainerCard>
       <span className='green'>{Icon}</span>
        <h1>{title}</h1>
        <p>{disc}</p>
    </ContainerCard>
  )
}

const ContainerCard= styled.div`
   width: 100%;
   background:linear-gradient(159deg, rgb(45,45,58) 0% , rgb(43,43,53) 100%); ;
   padding: 1rem;
   text-align: center;
   span{
    font-size: 4rem;
    color: #01be96;
   }
   h1{
    font-size: 1.4rem;
    padding-bottom: 1rem;
   }
   p{
    font-size: 1rem;

   }

`

export default Card