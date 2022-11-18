import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import MovieDetails from './pages/MovieDetails';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import ThemeContextProvider from './contexts/ThemeContext';
import { ThemeContext } from './contexts/ThemeContext';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


function App() {

  const apiKey=process.env.REACT_APP_APY_KEY;
  const baseUrl=process.env.REACT_APP_BASE_URL;

  const [darkMode,setDarkMode]=useState(true)

  return (
    
      <BrowserRouter>
        <ThemeContext.Provider value={{darkMode,setDarkMode}}>
          <Header apiKey={apiKey} baseUrl={baseUrl}/>
          <Routes>
            <Route path='/' element={<HomePage apiKey={apiKey} baseUrl={baseUrl}/>}/>
            <Route path='/aboutus' element={<About/>}/>
            <Route path='/contactus' element={<Contact/>}/>
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/moviedetails/:movieid' element={<MovieDetails apiKey={apiKey} baseUrl={baseUrl}/>}/>
          </Routes>
          <Footer />
        </ThemeContext.Provider>
      </BrowserRouter>

    
    
  );
}

export default App;
