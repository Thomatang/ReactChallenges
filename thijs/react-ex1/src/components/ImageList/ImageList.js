import React, { Component } from 'react';
import Image from './Image/Image'

class ImageList extends Component {
  render() {
    console.log(this.props.amount);
    return this.props.numbers.map((number, index) => {
      return <Image
              key={index}
              imageSrc={`https://picsum.photos/200/300?image=${number}`}/>
    });
  }
}

export default ImageList;
