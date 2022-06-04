import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  return (
   <>
  <Header/>
   <Navbar/>
   <About/>
   <Experience/>
   <Portfolio/>
   <Testimonials/>
   <Contact/>
   
<Footer/>

   </>
  );
}

export default App;
