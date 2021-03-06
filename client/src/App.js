import React, { Component } from "react";


class Form extends Component {
  // Setting the component's initial state
  state = {
    topic: "",
    startYear: "",
    endYear: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({
      topic: "",
      startYear: "",
      endYear: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.topic}
            name="topic"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Topic"
          />
          <input
            value={this.state.startYear}
            name="startYear"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Start Year"
          />
          <input
            value={this.state.endYear}
            name="endYear"
            onChange={this.handleInputChange}
            type="text"
            placeholder="End Year"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
