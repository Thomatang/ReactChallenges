import React, { Component } from "react";
import LoremPixel from './LoremPixel';

class ImageList extends Component {
  render() {
    console.log(this.props.numbers);

    return this.props.numbers.map((number, index)=> {
      return <LoremPixel key={index} 
      imageSrc={`https://picsum.photos/200/300?image=${number}`} />;
    })
  }
}

export default ImageList;
