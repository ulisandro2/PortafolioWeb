import React from 'react'
import styled from 'styled-components';

const CursoComponent = (props) => {

    const {img} = props.item;

  return (
    <Container>
    <div className='imgs'>
        <img src={img} />
    </div>
    </Container>
  )
}

const Container=styled.div`
  width: 80%;
  padding: 0.5rem 1rem 1rem 1rem;
  margin: 0 1rem;
  .imgs{  
   display: flex;
   align-items: center;
   gap: 1rem;

  img{
    width: 600px;
    overflow: hidden;
  }
}
  
`

export default CursoComponent