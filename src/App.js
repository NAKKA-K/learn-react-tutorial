import React, { Component } from 'react';
import logo from './logo.svg';
import './asset/App.css';
import './asset/button.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Body text={this.props.text}/>
        <Footer />
      </div>
    );
  }
}

class Body extends Component {
  render() {
    return (
      <div>
        <button className="button">{this.props.text}</button>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <h2>My Footer</h2>
    );
  }
}

export default App;
