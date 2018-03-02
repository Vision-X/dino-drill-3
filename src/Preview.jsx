import React, { Component } from 'react';

class Preview extends Component {
  render() {
    return (
      <section onChange={this.props.handleChange} id="application-preview"
        className="hidden">{this.props.value}</section>
    )
  }
}

export { Preview };
