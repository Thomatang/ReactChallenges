import React, {Component} from 'react';


class LoremPixel extends Component {
  render() {
    return <img src={this.props.imageSrc} width="200" height="200"/>
  }
}

export default LoremPixel;