import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MachineCollection } from '/imports/api/MachineCollection';
import { ModalTitle } from 'react-bootstrap';


export const MachineAdd = () => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    var text =this.refs.machine.value.trim();

    console.log(e)
    console.log(e.target)
    console.log(e.target.elements)
    console.log(e.target.elements['title'].value)
    let title = e.target.elements['HSense HS15'].value
    let cpu = e.target.elements['H1/103'].value
    let Operatingsystem = e.target.elements['Win10 IoT 2019 LTSC'].value
    let PCname = e.target.elements['HS15-055'].value
    let Networkaddress = e.target.elements['172.17.25.55'].value
    let Harddisk = e.target.elements['SATADOM-ML3SE4 32G'].value
    let HNet01type = e.target.elements['HNet01-0810 1.1'].value
    let Serialnumber = e.target.elements['180226'].value
    let COAnumber = e.target.elements['02219-115-386-778'].value
    let Workgroup = e.target.elements['MS'].value
    let Subnetmask = e.target.elements['255.255.0.0'].value
    let Serial1number = e.target.elements['YCA12101190090023'].value
    let SubnetIOboardtype = e.target.elements[''].value


    /*if (!title) return;*/



    MachineCollection.insert({
      title: title.trim(),
      complete: false,
    
      createdAt: new Date()
    });
    this.refs.machine.value="";
  }

    /*setText("");*/
  };

render(){
  return (
    <Form onSubmit={this.handleSubmit.bind(this)}>
      <Form.Group>
        <Form.Label>Machine Select</Form.Label>
        <Form.Control as="select">

          <option>"HSense HS15"</option>
          <option>"Airsense AS16"</option>
          <option> "CombiSense CS18"</option>
          <option>"CO2Sense CS18"</option>
          <option>"PEMSense PEM18"</option>
          <option>"HydrogenSense HY20"</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Add New Machine</Form.Label>
        <Form.Control
          type="text"
          ref="machine"
          name=""
          placeholder="Type to add new machine"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>CPU</Form.Label>
        <Form.Control
          type="text"
          ref="machine"
          name="H1/103"
          placeholder="Type to add new machine"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Operating System</Form.Label>
        <Form.Control
          type="text"
          ref="machine"
          name="Win10 IoT 2019 LTSC"
          placeholder="Type to add new machine"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>PC Name</Form.Label>
        <Form.Control
          type="text"
          ref="machine"
          name="HS15-055"
          placeholder="Type to add new machine"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Network address</Form.Label>
        <Form.Control
          type="text"
          ref="machine"
          name="172.17.25.55"
          placeholder="Type to add new machine"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Hard disk</Form.Label>
        <Form.Control
          type="text"
          ref="machine"
          name="SATADOM-ML3SE4 32G5"
          placeholder="Type to add new machine"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>HNet01 type</Form.Label>
        <Form.Control
          type="text"
          ref="machine"
          name="HS15-055"
          placeholder="Type to add new machine"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Serial number</Form.Label>
        <Form.Control
          type="text"
          ref="machine"
          name="180226"
          placeholder="Type to add new machine"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>COA number</Form.Label>
        <Form.Control
          type="text"
          ref="machine"
          name="02219-115-386-778"
          placeholder="Type to add new machine"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Workgroup</Form.Label>
        <Form.Control
          type="text"
          ref="machine"
          name="MS"
          placeholder="Type to add new machine"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Subnet mask</Form.Label>
        <Form.Control
          type="text"
          ref="machine"
          name="255.255.0.0"
          placeholder="Type to add new machine"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Serial number</Form.Label>
        <Form.Control
          type="text"
          ref="machine"
          name="YCA12101190090023"
          placeholder="Type to add new machine"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>I/O board type</Form.Label>
        <Form.Control
          type="text"
          ref="machine"
          name=""
          placeholder="Type to add new machine"
        />
      </Form.Group>

      <Button type="submit">Add Componenets</Button>
    </Form>

  );
};

export const MachineEdit = () => {
  const [showMachineEdit, setshowMachineEdit] = useState("");


  function MachineEdit({ Machine, onSaveMachine }) {
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");

    const saveMachine = (e) => {
      e.preventDefault();
      onSaveMachine({ desc: desc, date: date });

      setDesc("");
      setDate("");
    };
    return (
      <div className="card">

        <form>
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name="desc"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <label htmlFor="date">Date</label>
          <input
            type="text"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <div className="text-right">
            <button className="button dark" onClick={saveMachine}>
              Save
            </button>
          </div>
        </form>
      </div>

    );
  };
};
