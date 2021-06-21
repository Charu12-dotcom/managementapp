
import React, { Component } from 'react';

class AddMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Machine: "",
      description: "",
      date: ""
    }
  }

  handleChange = (machine) => {
    const field = machine.target.name;

    
    this.setState({
      [field]: machine.target.value
    })
  }

  handleSubmit = (machine => {
    mashine.preventDefault();

    
    alert("Will be Saved in a little bit :)")
  }

  render() {
    return (
      <div>
        <div className="text-center">
          <h4>Machine Sync</h4>
        </div>
        <hr />

        <div className="jumbotron" style={{ margin: "0 500px" }}>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter machine title"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter machine description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Event Date:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter date in the format mm.dd.yyyy"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">Add Machine</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMachine;