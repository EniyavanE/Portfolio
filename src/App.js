import image from './Images/pexels.jpg';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Navbar/Nav';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${image})` }}>
    <Home/>
    <Nav />
    <About />
    <Experience />
    <Services />
    <Testimonial />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
