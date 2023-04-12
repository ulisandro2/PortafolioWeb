import styled from 'styled-components'
import NavBar from './componets/NavBar'
import ProfComponents from './componets/ProfComponents'


function App() {
  

  return (
    <Container>
     <Banner>
       <NavBar/>
       <ProfComponents/>
     </Banner>  

    </Container>
  )
}

const Container = styled.div`

`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45,45,58) 0% , rgb(43,43,53) 100%);
`

export default App
