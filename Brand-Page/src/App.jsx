import './App.css'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {

  return (
    <div className='flex flex-col items-center'>
       <div>
        <Navbar/>
       </div>
       <div>
        <HeroSection/>
       </div>
       <div>
        <Footer/>
       </div>
    </div>
  )
}

export default App
