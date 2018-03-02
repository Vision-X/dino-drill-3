import React, { Component } from 'react';
import { Header } from './Header.jsx';
import { JobDetails } from './JobDetails.jsx';
import { InputForm } from './InputForm.jsx';
import { Preview } from './Preview.jsx';
import { Footer } from './Footer.jsx';
import { Message } from './Message.jsx';
import { PreviewBtn } from './PreviewBtn';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataCopy: [],
      userInput: '',
      successText: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (event.target.id === 'preview-toggle') {
        event.target.nextSibling.classList.toggle('hidden')
        console.log("preview button was pressed");
    } else if (event.target.id === 'submit') {
        console.log("submit button was pressed");
    }
  }

  handleChange(event) {
    event.preventDefault();
    let targetField = event.target.id;
    if (targetField === 'application-text') {
      this.setState({userInput: event.target.value});
      console.log(this.state.userInput, 'userInput');
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit occurred");
    this.setState({successText: 'Your application was submitted'});
    this.setState({userInput: ''});
    event.target.reset();
  }

  componentDidMount() {
    let dataGrab = (response)=> {
      this.setState({dataCopy: response});
    };
    let apiURL = './listing.json';
    return fetch(apiURL)
          .then(response => response.json())
          .then(dataGrab)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobDetails data={this.state.dataCopy} />
          <InputForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <Message value={this.state.successText} />
          <PreviewBtn handleClick={this.handleClick} />
          <Preview handleChange={this.handleChange} value={this.state.userInput} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
