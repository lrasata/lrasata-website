import HeroBanner from "./components/HeroBanner.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Values from "./components/Values.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import DrawerAppBar from "./components/DrawerAppBar.jsx";

function App() {
  return (
    <>
      <DrawerAppBar />
      <HeroBanner />
      <AboutMe />
      <Values />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
