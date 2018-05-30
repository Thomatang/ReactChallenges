import React, { Component } from 'react';
import ImageList from './../components/ImageList/ImageList';
import './App.css';

class App extends Component {
  state = {
    input: 0,
    numbers: []
  }

  checkInput = ( event ) => {
    if(isNaN(event.target.value)) {
      return console.log('error')
    }

    if(event.target.value < 100) {
      this.handleChange(event.target.value)
    } else {
      this.handleChange(100);
    }
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  handleChange = ( input ) => {
    var randNumbers =  [];
    for (var i = 0; i < input; i++) {
      randNumbers.push(this.getRandomInt(0, 100));
    }
    console.log(randNumbers);
    this.setState({input: Number(input), numbers: randNumbers});
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.input}</p>
        <input
          type="text"
          value={this.state.input}
          onChange={this.checkInput}/>
        <br/>
        <ImageList
          className="ImageList"
          numbers={this.state.numbers}/>
      </div>
    );
  }
}

export default App;
