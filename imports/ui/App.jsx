
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useTracker } from 'meteor/react-meteor-data';
import { Machine } from './Machine';
import { MachineCollection } from '/imports/api/MachineCollection.js';
import { MachineAdd } from './MachineAdd';

export const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <div className="app-bar">
            <div className="app-header">
              <h1>Management App!</h1>
            </div>
          </div>
        </header>


        <Switch>
          <Route path="/add">
            <MachineAdd />
          </Route>
          <Route path="/">
            <MachineApp />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

const MachineApp = () => {
  const machine = useTracker(() => MachineCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  const deleteMachine = (machine) => MachineCollection.remove(machine._id);
  const onClickMachine = (machine) => {
    /** TOD */
    alert(machine.title)
  }

  return (
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

  );
}











