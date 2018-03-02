import React, { Component } from 'react';

class JobDetails extends Component {
  render() {
    return (
      <section id="job-details">
        <h2>Job Details</h2>
            <div>
              <h4>{this.props.data.title}</h4>
              <p>{this.props.data.description}</p>
            </div>
      </section>
    )
  }
}

export { JobDetails };
