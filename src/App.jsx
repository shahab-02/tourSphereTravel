import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Footer from "./components/Footer"
import ContactPage from "./components/ContactPage"
import AboutPage from "./components/AboutPage"
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsConditions from "./components/TermsConditions"
import SelfGuidedTours from "./components/TravelServices/SelfGuidedTours"
import Card from "./components/TravelServices/Card"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="w-full h-full">
      <Navbar/>
      <Outlet/>
      <Footer/>
     
    </div>
        
  )
}

export default App
