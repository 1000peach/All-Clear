import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainFrame from './login/MainFrame';
import ServiceFrame from './service/ServiceFrame';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <Router>
            <Route exact path="/" component={MainFrame}/>
          </Router>
          <Router>
            <Route exact path="/service" component={ServiceFrame}/>
          </Router>
      </div> 
    )
  }
}

export default App;