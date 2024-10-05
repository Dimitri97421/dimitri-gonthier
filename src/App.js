import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './composants/Header'
import Footer from './composants/Footer'
import Home from './routes/Home';
import Projects from './routes/Projects'
import Skills from './routes/Skills'
import BackgroundParticles from './composants/BackgroundParticles';
import LoaderComponent from './composants/LoaderComponent';
import ChatBot from './composants/ChatBot';

function App() {
  
  
  const [isOrange, setIsBleu] = useState(true);
  const gradientBleu = 'linear-gradient(to right, #0f4b5b, #136a8a, #267871)';
  const gradientOrange = 'linear-gradient(to right, #e74c3c, #f39c12)';

  const colorChange = () => {
    setIsBleu(!isOrange);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1375);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoaderComponent />
      ) : (
      <Router>
        <Header colorChange={colorChange} currentColor={isOrange ? gradientOrange : gradientBleu}/>
        <main className='main' style={{background: isOrange ? gradientOrange : gradientBleu}}>
          <BackgroundParticles/>
          <ChatBot/>
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/projects" Component={Projects} />
            <Route path="/skills" Component={Skills} />
            <Route path="*" Component={() => <Navigate to="/" />} />
          </Routes>
        </main>
        <Footer/>
      </Router>)}
    </div>
  );
}

export default App;