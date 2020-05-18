import React from 'react';
import './App.css';
import Home from './Pages/Home';

import Biography from './Pages/Biography';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import Default from './Pages/Default';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom';
import OwnersContainer from './components/Owners/OwnersContainer';

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />

      <Switch >
        <Route exact path="/" component={Home} />
        
        <Route exact path="/Biography" component={Biography} />
        
        <Route exact path="/Events" component={Events} />
        <Route path="/owners" render={() => <OwnersContainer title="Content Creator" />  } />
        <Route exact path="/Contact" component={Contact} />
        <Route path="/Default" component={Default} />
      </Switch>
      
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
