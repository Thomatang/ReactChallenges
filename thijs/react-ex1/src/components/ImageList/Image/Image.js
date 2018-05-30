import React, { Component } from 'react';

class Image extends Component {
  render() {
    return <img src={this.props.imageSrc} width="200" height="200" />
  }
};

export default Image;
