import React, { Component } from 'react';

class InputForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} id="application-input">
        <label>Apply Here: </label>
        <textarea onChange={this.props.handleChange} id="application-text" rows="8" cols="100"></textarea>
        <input id="submit" type="submit" value="Submit" />
      </form>
    )
  }
}

export { InputForm };
