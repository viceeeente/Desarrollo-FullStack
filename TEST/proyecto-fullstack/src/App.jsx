import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/HomePage/HomePage';  
import ConsolePage from './pages/Consoles/Consoles';
import PcPage from './pages/PC/PC';
import Games from './pages/Games/Games';
import './App.css';

function App() {
  return (
      <Router>
      <div className="app">
        <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/consolas" element={<ConsolePage />}/>
            <Route path='/pc' element={<PcPage/>}></Route>
            <Route path='/games' element={<Games/>}></Route>
          </Routes>  
        <Footer/>
      </div>
    </Router>
  );
}

export default App;