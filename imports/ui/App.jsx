
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useTracker } from 'meteor/react-meteor-data';
import { Machine } from './Machine';
import { MachineCollection } from '/imports/api/MachineCollection.js';
import { MachineAdd } from './MachineAdd';
import { NotizenWrite } from './NotizenWrite';
import { withTracker } from 'meteor/react-meteor-data';
import { WritesCollection } from "../api/WritesCollection";
import { Navbar, Nav, Container } from 'react-bootstrap';





export const App = () => {
  return (
    <Router>
      <div className="app">
        <Navigation/>
        <header>
          <div className="app-bar">
            <div className="app-header">
              <h1>Management App!</h1>
            </div>
          </div>

        </header>
      </div>

      <Switch>
        <Route path="/add">
          <MachineAdd />
        </Route>
        <Route path="/write">
          <WriteApp />
          <NotizenWrite />
        </Route>
        <Route path="/">
          <MachineApp />
        </Route>


      </Switch>

    </Router>


  )
}





const MachineApp = () => {
  const machine = useTracker(() => MachineCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  const deleteMachine = (machine) => MachineCollection.remove(machine._id);
  const onClickMachine = (machine) => {

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
class WriteComponent extends React.Component {
  render() {
    return (
      <div>
        <NotizenWrite />

        <pre>DB Stuff: {JSON.stringify(this.props, null, ' ')} </pre>



      </div>
    );
  }
}

const WriteApp = withTracker(() => {
  return {
    writes: WritesCollection.find({}).fetch()
  }
})(WriteComponent);

export default WriteComponent;












