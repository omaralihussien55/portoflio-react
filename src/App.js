import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import UseAnimationFrame from './components/header/UseAnimationFrame';
import Header from './components/header/Header';
import OurServices from './components/pages/OurServices';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Footer from './components/pages/Footer';

function App() {
  return (
    <div className="App">
           <NavBar />
           <Header />
           <div className='w-[90%] mx-auto p-2 '>
           <OurServices/>
           <Projects/>
           <About />
           <Contact />
          
           </div>
           <Footer />

    </div>
  );
}

export default App;
