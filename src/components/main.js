import React from 'react';
import LandingPage from './landing'
import Resume from './resume'
import AboutMe from './aboutme'
import Contact from './contact'
import { Switch, Route } from 'react-router-dom';
import App from '../App.js'

const Main = () => (
   <Switch>
     <Route exact path="/" component={LandingPage} />  //Home page
     <Route path="/resume" component={Resume} />
     <Route path="/aboutme" component={AboutMe} />
     <Route path="/contact" component={Contact} />
   </Switch>
)

export default Main;
