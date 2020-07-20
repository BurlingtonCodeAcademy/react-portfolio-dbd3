import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  userParams
} from "react-router-dom";

import Footer from './Footer'
import Header from './Header' 
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Hobbies from './Hobbies'


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
        </Switch>
      <Footer/>
      </Router>
      
    </div>
  )
}

export default App;
