import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import MainApp from './MainApp.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <MainApp/>
      </HashRouter>
    );
  }
}

export default App;
