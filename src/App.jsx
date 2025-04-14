import HeroBanner from "./components/HeroBanner.jsx";
import AboutMe from "./components/AboutMe.jsx";
import {Container} from "@mui/material";
import Values from "./components/Values.jsx";

function App() {

  return (
      <Container maxWidth="xl">
        <HeroBanner />
        <AboutMe />
          <Values />
      </Container>

  )
}

export default App
