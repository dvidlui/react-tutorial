import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initalState = {
      name: '',
      job: '',
    };

    this.state = this.initalState;
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initalState);
  }

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <h1>Add a New Character</h1>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={this.handleChange} />
        <label>Job</label>
        <input type="text" name="job" value={job} onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
