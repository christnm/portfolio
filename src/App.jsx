import { Hero, ExperienceSection, ContactSection}  from "./pages";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {

  return (
    <>
      <ParallaxProvider>
        <Hero />
        <ExperienceSection />
        <ContactSection />
      </ParallaxProvider>
    </>
  );
}

export default App;
