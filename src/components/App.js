import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import MasterHead from './MasterHead';
import About from './About';
import Service from './Service';
import Portfolio from './Portfolio';
import More from './More';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MasterHead />
        <About />
        <Service />
        <Portfolio />
        <More />
        <Contact />
      </div>
    );
  }
}

export default App;
