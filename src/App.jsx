import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Footer from "./components/Footer"
import ContactPage from "./components/ContactPage"
import AboutPage from "./components/AboutPage"

function App() {

  return (
    <div className="w-full h-full">
      
      <Navbar/>
      <LandingPage/>
     <ContactPage/>
      <AboutPage/>
      <Footer/>
      
     
    </div>
        
  )
}

export default App
