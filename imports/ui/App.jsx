
import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Machine } from './Machine';
import { MachineCollection } from '/imports/api/MachineCollection.js';
import { MachineForm } from './MachineForm';

export const App = () => {
  const machine = useTracker(() => MachineCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  const deleteMachine =  (machine) => MachineCollection.remove(machine._id);
  const onClickMachine = (machine) => {
    /** TOD */
    alert(machine.title)
  }

  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>Management App!</h1>
          </div>
        </div>
      </header>

      <div className="main">
        {/*<TaskForm />*/}

        <ul className="machine">
          {machine.map(machine => (
            <Machine
              key={machine._id}
              machine={machine}
              onClickMachine={onClickMachine}
              onDeleteClick={deleteMachine}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}











