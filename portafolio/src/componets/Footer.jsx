import React,{useRef} from 'react'
import styled from 'styled-components'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import { AiFillMail, AiFillPhone, AiOutlineArrowUp, AiOutlineMail } from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { MdAlternateEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fade, Slide , Zoom } from "react-awesome-reveal";



const Footer = () => {

  const notify = () => toast.success("Message sent, I will answer you as soon as possible");
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f4llepg', 'template_uoat4gq', form.current, 'NrOieklgUpLbUJwIc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  const scrollUp = () => {
    window.scroll({
      top:0,
      behavior:'smooth'
    })
  }
  
  return (
    <Container id='footer'>
      <Profile>
        <h1>Portfolio</h1>
        <div className='address'>
          <h1>Address:</h1>
          <Slide direction='left'>
          <p>Libertad 1910 , Vicente Lopez / Buenos Aires</p>
          </Slide>
        </div>
        <div className='links'>
          <h1>Contact me directly:</h1>
          <Slide direction='left'>
          <div>
            <span><AiFillPhone/></span>
            <a href='tel:+541151399129 '>+54 9 11 5139-9129</a>
          </div>
          </Slide>
          <Slide direction='left'>
           <div>
          <span><AiOutlineMail/></span>
          <a href='sanchezulises952@gmail.com'>sanchezulises952@gmai.com</a>
          </div>
          </Slide>
        </div>
        <div className='profiles'>
            <h1>Check my profiles</h1>
            <Zoom>
           <div className='icons'>
            <span><a href='https://www.linkedin.com/in/ulises-sanchez-b6b935238/'><FaLinkedinIn/></a></span>
            <span><a href='https://github.com/ulisandro2'><BsGithub/></a></span>
            </div> 
            </Zoom>
        </div>

        <Fade>
        <ArrowUp onClick={scrollUp}><AiOutlineArrowUp/></ArrowUp></Fade>
      </Profile>
      <Form>
      

        <form ref={form} onSubmit={sendEmail}>
          <div className='name'>
            <span><CgProfile/></span>
            <input type='text' name='user_name' placeholder='Fullname...'></input>
          </div>
          <div className='email'>
            <span><MdAlternateEmail/></span>
            <input type='email' name='user_email' placeholder='Email...'></input>
          </div>
          <div className='name'>
            <span><AiFillMail/></span>
            <textarea cols='30' rows='10' name='message' placeholder='Message...'></textarea>
          </div>
          <button value='Send' onClick={notify} >Submit</button>
        </form>
       
      </Form>
      <ToastContainer/>
      
    </Container>
  )
}

const Container =styled.div`
   margin-top: 2rem;
   position: relative;
   padding: 2rem 0;
   width: 80%;
   max-width: 1280px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   @media(max-width:840px) {
    width: 90%;
    
   }
   @media(max-width:650px) {
    flex-direction: column;
    gap: 3rem;
    
   }

`

const Profile =styled.div`
flex: 1;
  .address{
    padding: 1rem 0;
  }

  h1{
    font-size: 1.2rem;
  }

  p{
    width: 60%;
    padding-top: 0.5rem;
    @media(max-width:650px) {
    width: 100%;
   }
  }

  .links{
    h1{
      font-size: 1.2rem;
      margin-bottom: .5rem;
    }
    
    div{
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a{
        text-decoration: none;
        color: white;
        :hover{
          color: red;
        }
      }
    }

  }


  .profiles{
       h1{
        font-size: 1.2rem;
        padding: 1rem;
       }

       .icons{
        display: flex;
        align-items: center;
        span{
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: black;
          width: 2rem;
          height: 2rem;
          margin-right: 0.5rem;
          border-radius:50px ;

          :hover{
            background-color: red;
          }
         a{
          margin-top:0.2rem;
          color: white;
         
        
        }


        } 
      
      }


  }

`

const Form =styled.div`
  flex: 1;
  h1{
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form{
    background-color: black;
    padding: 0.8rem;
    border-radius: 5px;
    .name , .email , .message{
      display: flex;
      border: 1px solid gray;
      margin-bottom: .5rem;
      input, textarea{
        width: 100%;
        border: none;
        outline: none;
        color: white;
        background-color: transparent;
        padding: 1rem 0.5rem;

      }
      span{
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

 button{
   width: 5rem;
   height: 1.5rem;
   background-color:#1bddd3;
   border: none;
   border-radius: 5px;
  cursor: pointer;

 }



`

const ArrowUp = styled.div`
 width: 2rem;
 height: 2rem;
 background-color: #1bddd3;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 font-size: 1.3rem;
 font-weight: 700;
 margin-top:2rem ;
display: flex;
@media(max-width:650px) {
    position: absolute;
    right: 3rem;
    top:16rem;
   }
`

export default Footer