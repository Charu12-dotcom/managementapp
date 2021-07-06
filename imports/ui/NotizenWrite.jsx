
import React, { Component } from 'react';
import { MachineCollection } from '/imports/api/MachineCollection';
import { WritesCollection } from '/imports/api/WritesCollection';

export class NotizenWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: props.event,
      isUpdating: props.isUpdating

    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      machine: nextProps.machine,
      isUpdating: nextProps.isUpdating
    });
  }

  handleChange = (machine) => {
    const field = machine.target.name;
    const newEvent = Object.assign({}, this.state.event, { [field]: machine.target.value });
    if (!this.props.isUpdating) {
      Events.insert({
        title,
        description,
        date
      });
    } else {
      de
      Events.update(this.state.event._id, {
        $set: {
          title,
          description,
          date
        }
      });

      // it then sets flag back to false
      this.setState({
        isUpdating: false
      })
    }

    const newEvent1 = {
      title: "",
      description: "",
      date: ""
    }

    this.setState({
      event: newEvent
    })
  }





  handleSubmit = (event) => {
    event.preventDefault();

    const { machinemodel, description, date } = this.state;

    //event.target.elemts

    WritesCollection.insert({ machinemodel: "name", description: "", date: new Date() });
    this.setState({ machinemodel: "name", description: "", date: new Date() })




  }
  renderSubmitButton() {
    if (this.state.isUpdating) {
      return (<button type="submit" className="btn btn-primary">Update This Event</button>);
    }
    return (<button type="submit" className="btn btn-primary">Add Event</button>);
  }

  render() {
    const { machine } = this.state;
    return (
      
        <div className="text-center">
          <h4>Notizen Write</h4>

          <hr />



          <div className="list-group" style={{ margin: "0 500px" }}>
            <form onSubmit={this.handleSubmit}>

              <div className="form-group">
                <label>Machine Models</label>

                <select className="form-control"


                  type="text"
                  className="form-control"
                  placeholder="Enter machine "
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                >
                  <option>"HSense HS15"</option>
                  <option>"Airsense AS16"</option>
                  <option> "CombiSense CS18"</option>
                  <option>"CO2Sense CS18"</option>
                  <option>"PEMSense PEM18"</option>
                  <option>"HydrogenSense HY20"</option>
                </select>
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
                <label>Date:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter date in the format mm.dd.yyyy"
                  name="date"
                  
                  onChange={this.handleChange}
                />
              </div>

              {this.renderSubmitButton()}
            </form>
          </div>
        </div >

        );
  }
}

 