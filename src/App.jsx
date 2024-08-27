/* eslint-disable no-unused-vars */
import './App.css';
import React from 'react';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import About from './Components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const router = createBrowserRouter([
      {
        path : "/",
        element:<><Navbar/> <Main/></>
      },
      {
        path: "/about",
        element:<> <Navbar/> <About/></>
      },
      {
        path: "/projects",
        element:<> <Navbar/> <Projects/></>
      },
      {
        path: "/contact",
        element:<> <Navbar/> <Contact/></>
      }
  ])
  return (
    <>
    
    <RouterProvider router={router} />
    <Footer/>
    </>
  )
}

export default App;
