import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <p id="message" value={this.props.value}>&nbsp;{this.props.value}</p>
    )
  }
}

export { Message };
