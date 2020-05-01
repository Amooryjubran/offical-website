import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Biography from './Pages/Biography';
import Interios from './Pages/Interios';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import Inspirations from './Pages/Inspirations';
import Default from './Pages/Default';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />

      <Home />
      <Blog/>
      <Biography/>
      <Interios/>
      <Events/>
      <Contact/>
      <Inspirations/>
      <Default/>
      
    </div>
  );
}

export default App;
