import React, { Component } from 'react';
import gdino from './g-dino';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={gdino} alt="Dinosaur Logo" />
      </header>
    )
  }
}

export { Header };
