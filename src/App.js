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
import {Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />

      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Biography" component={Biography} />
        <Route exact path="/Interios" component={Interios} />
        <Route exact path="/Events" component={Events} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Inspirations" component={Inspirations} />
        <Route path="/Default" component={Default} />
      </Switch>
      
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
