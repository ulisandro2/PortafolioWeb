import styled from 'styled-components'
import NavBar from './componets/NavBar'
import ProfComponents from './componets/ProfComponents'
import Certificate from './componets/Certificate'
import Skills from './componets/Skills'
import Projects from './componets/Projects'
import Cursos from './componets/Cursos'
import Footer from './componets/Footer'




function App() {
  

  return (
    <Container>
     <Banner>
     
       <NavBar/>
       
       <ProfComponents/>
       
     </Banner> 
     <Certificate/>
     <SkillBackground>
        <Skills/> 
     </SkillBackground>
      <Projects/>
     <CursosBackground>
      <Cursos/>
      </CursosBackground> 
      <Footer/>
    </Container>
  )
}

const Container = styled.div`

`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45,45,58) 0% , rgb(43,43,53) 100%);
  height:100vh ;
  @media screen and (max-width:1200px){
        height: 100%;
        padding-bottom: 1rem;
      }
`


const SkillBackground=styled.div`
  background: linear-gradient(159deg, rgb(45,45,58) 0% , rgb(43,43,53) 100%);

`
const CursosBackground=styled.div`
  background: linear-gradient(159deg, rgb(45,45,58) 0% , rgb(43,43,53) 100%);

`


export default App
