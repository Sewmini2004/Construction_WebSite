import React from 'react';
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/frontend/Home.jsx';
import About from './components/frontend/About.jsx';
import Services from './components/frontend/Services.jsx';
import Projects from './components/frontend/Projects.jsx';
import Blogs from './components/frontend/Blogs.jsx';
import Contact from './components/frontend/Contact.jsx';
import './assets/css/style.scss';
import Login from './components/backend/Login.jsx';
import Dashbord from './components/backend/Dashbord.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashbord />} />
        </Routes>
    </BrowserRouter>
    <ToastContainer position="top-center" autoClose={5000} />      
    </>
  )
}

export default App
