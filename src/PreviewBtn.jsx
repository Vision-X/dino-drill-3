import React, { Component } from 'react';

class PreviewBtn extends Component {
  render() {
    return (
       <button onClick={this.props.handleClick} id="preview-toggle">Show Preview</button>
    )
  }
}

export { PreviewBtn };
