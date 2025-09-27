import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';  
import ConsolePage from './pages/Consoles';
import Footer from './pages/Footer';
import './App.css';

function App() {
  return (
      <Router>
      <div className="app">
        <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/consolas" element={<ConsolePage />}/>
          </Routes>  
        <Footer/>
      </div>
    </Router>
  );
}

export default App;