
import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Machine } from './Machine';
import { MachineCollection } from '/imports/api/MachineCollection.js';
import { MachineForm } from './MachineForm';

export const App = () => {
  const machine = useTracker(() => MachineCollection.find({},{ sort:{ createdAt:-1}}).fetch());

const deleteTask = ()=>{}

  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>Welcome!</h1>
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
              onCheckboxClick={toggleChecked}
              onDeleteClick={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );

  return (

    <div>
      <h1>Welcome to Meteor!</h1>
      <MachineForm />

      <ul>
        {
          machine.map(machine => <machine
            key={task._id}
            task={task}
            onCheckboxClick={toggleChecked}
            onDeleteClick={deleteTask}/>
          )}

      </ul>

      <ul>
        {machine.map(machine => <Machine key={machine._id} machine={machine} onCheckboxClick={toggleChecked} />)}
      </ul>
    </div>
  )
}


const toggleChecked = ({ _id, isChecked }) => {
  MachineCollection.update(_id, {
    $set: {
      isChecked: !isChecked
    }
  })
};

const deleteMachine = ({ _id }) => TasksMachine.remove(_id);








