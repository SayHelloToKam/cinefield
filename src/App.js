import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import MovieDetails from './pages/MovieDetails';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  const apiKey=process.env.REACT_APP_APY_KEY;
  const baseUrl=process.env.REACT_APP_BASE_URL;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage apiKey={apiKey} baseUrl={baseUrl}/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/moviedetails/:movieid' element={<MovieDetails apiKey={apiKey} baseUrl={baseUrl}/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
