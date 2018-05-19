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
        <LikeButton />
        <Footer />
      </div>
    );
  }
}

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      count: 999,
      liked: false
    }
  }

  styles(){
    return {
      container: {
        fontFamily: "helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif", fontSize: 11
      },
      like: {
        display: "inline-block",
        background: "#3b5998",
        padding: "0px 5px",
        rderRadius: 2,
        color: "#ffffff",
        cursor: "pointer",
        float: "left",
        height: 20,
        lineHeight: "20px"
      },
      likeHover: {
        background: "#444"
      },
      counterBefore: {
        display: "block",
        float: "left",
        width: 6,
        height: 6,
        background: "#fafafa",
        marginLeft: "-12px",
        borderRight: 10,
        transform: "rotate(45deg)",
        WebkitTransform: "rotate(45deg)",
        marginTop: 6,
        borderLeft: "1px solid #aaa",
        borderBottom: "1px solid #aaa"
      },
      counter: {
        display: "block",
        background: "#fafafa",
        boxSizing: "border-box",
        border: "1px solid #aaa",
        float: "left",
        padding: "0px 8px",
        borderRadius: 2,
        marginLeft: 8,
        height: 20,
        lineHeight: "20px"
      }
    };
  }

  onMouseEnter(){
    this.setState({hovered: true});
  }

  onMouseLeave(){
    this.setState({hovered: false});
  }

  onClick(){
    this.setState({
      count: this.state.count + (this.state.liked ? -1 : 1),
      liked: !this.state.liked
    });
  }

  render() {
    const styles = this.styles();
    const likeStyle = this.state.hovered ? {...styles.like, ...styles.likeHover} : styles.like;
    return (
      <span style={styles.container}>
        <span style={likeStyle}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
          onClick={this.onClick.bind(this)}>いいね!</span>
        <span style={styles.counter}>
          <span style={styles.counterBefore}>{" "}</span>{this.state.count}
        </span>
      </span>
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
