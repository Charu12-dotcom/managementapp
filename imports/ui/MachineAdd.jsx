import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MachineCollection } from '/imports/api/MachineCollection';
import { ModalTitle } from 'react-bootstrap';


export const MachineAdd = ({user}) => {
  const [title, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
   
    console.log(e)
    console.log(e.target)
    console.log(e.target.elements)
    console.log(e.target.elements['title'].value)
    let title = e.target.elements['HSense HS15'].value
    let PressureGaugePRU = e.target.elements[1195210].value
    let PressureGaugeLDS = e.target.elements[120470].value
    let BypassPump = e.target.elements[104344703].value
    let PrevacuumPump = e.target.elements[22097558].value
    let SamplePump = e.target.elements[2.16021452].value
    let LeakDetektor = e.target.elements[90001487149].value
    let CommunicationModule= e.target.elements[90001486149].value
    let COAnumber = e.target.elements['02219-115-386-778'].value
    let Workgroup = e.target.elements['MS'].value
    let Subnetmask = e.target.elements['255.255.0.0'].value
    let Serial1number = e.target.elements['YCA12101190090023'].value
    let SubnetIOboardtype = e.target.elements[''].value


    if (!title) return;



    MachineCollection.insert({
      title: title.trim(),
      

      createdAt: new Date()
      
    });
    
  }

  setText("");
};


return (
  <Form className="new-machine" onSubmit={this.addmachine}>
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
      <Form.Label>Pressure Gauge PRU</Form.Label>
      <Form.Control
        type="text"
        ref="machine"
        name="H1/103"
        placeholder="Type to add new machine"
      />
    </Form.Group>
    <Form.Group>
      <Form.Label> Pressure Gauge LDS</Form.Label>
      <Form.Control
        type="text"
        ref="machine"
        name="Win10 IoT 2019 LTSC"
        placeholder="Type to add new machine"
      />
    </Form.Group>
    <Form.Group>
      <Form.Label> Bypass Pump</Form.Label>
      <Form.Control
        type="text"
        ref="machine"
        name="HS15-055"
        placeholder="Type to add new machine"
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Prevacuum Pump</Form.Label>
      <Form.Control
        type="text"
        ref="machine"
        name="172.17.25.55"
        placeholder="Type to add new machine"
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Leak Detektor</Form.Label>
      <Form.Control
        type="text"
        ref="machine"
        name="SATADOM-ML3SE4 32G5"
        placeholder="Type to add new machine"
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Sample Pump</Form.Label>
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
      onChange={(e) => setText(e.target.value)}
    </Form.Group>

    <Button type="submit">Add Componenets</Button>
  </Form>

);



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
