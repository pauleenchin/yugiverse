import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Nopage from './pages/Nopage';
import Layout from './Layout';
import Yugidex from './pages/Yugidex';
import Forums from './pages/Forums';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="yugidex" element={<Yugidex />} />
          <Route path="forums" element={<Forums />} />
          <Route path="*" element={<Nopage />} />

        </Route>
        
      </Routes>
    </BrowserRouter>

  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);