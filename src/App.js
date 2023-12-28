import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Hire from "./components/Hire/Hire";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Hire/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
