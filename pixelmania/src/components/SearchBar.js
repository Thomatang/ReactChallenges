import React, { Component } from "react";
import axios from 'axios';
import { Col, Row, Form, FormControl, Button } from "react-bootstrap";
import LoremPixel from './LoremPixel';
import ImageList from './ImageList';

class SearchBar extends Component {
  constructor(props) {
    super(props); // super is used to call a method from the parent class Component

    this.state = {
      input: 0,
      numbers: []
    };
  }

  checkInput = event => {
    if (isNaN(event.target.value)) {
      return console.log("error");
    }

    if (event.target.value < 100) {
      this.handleChange(event.target.value);
    } else {
      this.handleChange(100);
    }
  };

  getRandomInt(min, max) {
    let randomInt = Math.floor(Math.random() * (max - min)) + min;
    return randomInt;
  }

  handleChange = (input) => {
     let randomNumbers = [];
    for (let i = 0; i < input; i++) {
      randomNumbers.push(this.getRandomInt(0, 1080));
    }
    console.log(randomNumbers)
    this.setState({ input: Number(input), numbers: randomNumbers });
    
  };

  render() {
    return <div>
        <Form horizontal>
          <Row>
            <Col lg={6}>How many images do you want to summon?</Col>
            <Col lg={4}>
              <input onChange={this.checkInput} placeholder="Enter a number..." type="number" />
            </Col>

            <Col lg={2}>
              
            </Col>
          </Row>
        </Form>

        <ImageList numbers={this.state.numbers} />
      </div>;
  }
}

export default SearchBar;

