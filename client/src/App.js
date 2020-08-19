import React from 'react';
import './style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import ContactInfo from './components/ContactInfo';

// To push to Heroku us git push heroku master
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} /> {/* When adding a new page, make sure you put the route inside the switch or else the component will appear in every page*/}
          <Route path='/about' component={About} />
          <Route path='/experience' component={Experience} />
          <Route path='/projects' component={Projects} />
          <Route path='/hobbies' component={Hobbies} />
          <Route path='/contact' component={ContactInfo}/>
        </Switch>
        <Footer />
      </Router>

    </div>
  )
}

export default App;
