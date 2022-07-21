import React, { Component } from 'react';
import './phone.css';
import Image from 'react-bootstrap/Image';
export default class Phone extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <Image  className='phone' src={this.props.url}></Image>
    )
  }
}
