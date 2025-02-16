/**
 *  Components
 */
import Header from "./components/Header"
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";

const App = () => {

  return (
    <>
      <Header />
        <main>
            <Hero />
            <About />
            <Skill />
            <Experience />
        </main>
    </>
  )
}

export default App;
