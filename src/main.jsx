import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import SelfGuidedTours from './components/TravelServices/SelfGuidedTours.jsx'


// Method 1 to create routes    

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>, 
//     children: [
//       {
//         path: "",
//         element: <LandingPage/>
//       },{
//         path: "about",
//         element: <AboutPage/>
//       }
//       ,{
//         path: "contact",
//         element: <ContactPage/>
//       }
//     ]
//   }
// ])


// Method 2 to create routes

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<App />}> 
      <Route path="" element={<LandingPage />}/>
      <Route path="about" element={<AboutPage />}/>
      <Route path="contact" element={<ContactPage />}/>
      <Route path="travelServices" element={<SelfGuidedTours/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
