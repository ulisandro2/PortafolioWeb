import React from 'react'
import styled from 'styled-components'
import {AiFillGithub} from 'react-icons/ai'
import {SiNetlify} from 'react-icons/si'

const Project = (props) => {

    const {img, disc,deploy, github} = props.item
  return (
    <ContainerProject className='project'>
        <img src={img} alt='project'/>
        <div className='disc'>
            <h1 className='green'>Descripction</h1>
            <p>{disc}</p>
            <a href={github}><AiFillGithub/></a>
            <a href={deploy}><SiNetlify/></a>
        </div>

    </ContainerProject>
  )
}

const ContainerProject=styled.div`
  height: 12rem;
  background-color: #4e5156;
  margin: 0 1rem;
  padding: 0 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  img{
    width: 100%;
    height: 100%;
    margin-top: 5px;
    padding-bottom: 10px;
    object-fit: cover;
    transition:transform 400ms ease-in-out;
  }

  .disc{
    position: absolute;
    right: 0;
    left: 0;
    bottom: -1000px;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgba(1.40,1.80,1.90,2), rgba(0.40,0.80,0,1));
    transition:all 400ms ease-in-out;
    margin: 1rem;
    border-radius: 5px;

    h1{
    font-size: 1rem;
  }

  p{
    width: 95%;
    font-size: 0.7rem;
    }
    a{
        margin-left: 0.4rem;
        color: red;
        text-decoration: none;
        list-style: none;
        font-size: 1.4rem;
    }
  }


:hover > img{
    transform: scale(1.3);

}

:hover > .disc{
    bottom: 0;
}

  

`

export default Project