import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import MovieDetails from './pages/MovieDetails';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ContextReducer from './contexts';
// import { ThemeContext } from './contexts/ThemeContext';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import MyFavorites from './pages/MyFavorites';


function App() {

  const apiKey=process.env.REACT_APP_APY_KEY;
  const baseUrl=process.env.REACT_APP_BASE_URL;
  const serverUrl=process.env.REACT_APP_SERVER_URL;



  return (
    
      <BrowserRouter>
        <ContextReducer>
              <Header apiKey={apiKey} baseUrl={baseUrl}/>
              <Routes>
                <Route path='/' element={<HomePage apiKey={apiKey} baseUrl={baseUrl}/>}/>
                <Route path='/aboutus' element={<About/>}/>
                <Route path='/contactus' element={<Contact/>}/>
                <Route path='/signup' element={<SignUp serverUrl={serverUrl} />} />
                <Route path='/signin' element={<SignIn serverUrl={serverUrl} />} />
                <Route path='/myfavorites' element={<MyFavorites />} />
                <Route path='/moviedetails/:movieid' element={<MovieDetails apiKey={apiKey} baseUrl={baseUrl}/>}/>
              </Routes>
              <Footer />
        </ContextReducer>
      </BrowserRouter>

    
    
  );
}

export default App;
