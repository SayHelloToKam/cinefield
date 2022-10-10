import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {

  const apiKey="3f610188b35cc35e6b698811da73891a";
  const baseUrl ="https://api.themoviedb.org/3"

  return (
    <div className="App">
      <Header />
      <HomePage apiKey={apiKey} baseUrl={baseUrl}/>
      <Footer />

     
    </div>
  );
}

export default App;
