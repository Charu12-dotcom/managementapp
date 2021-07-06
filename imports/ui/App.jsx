
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useTracker } from 'meteor/react-meteor-data';
import { Machine } from './Machine';
import { MachineCollection } from '/imports/api/MachineCollection.js';
import { MachineAdd } from './MachineAdd';
import { NotizenWrite } from './NotizenWrite';
import { withTracker } from 'meteor/react-meteor-data';
import { WritesCollection } from "../api/WritesCollection";
/*import { Navbar, Nav, Container } from 'react-bootstrap';*/
import { Dropdown } from 'react-bootstrap';
import { LoginForm } from './LoginForm';







export const App = () => {
  const [hideCompleted, setHideCompleted] = useState(false)

  const tasks = useTracker(() => TasksCollection.find(hideCompleted ? { isChecked: { $ne: true } } : {}, { sort: { createdAT: -1 } }).fetch())

  const pendingTasksTitle = useTracker(() => TasksCollection.find({ isChecked: { $ne: true } }).count())

  const user = useTracker(() => Meteor.user());
  const machine = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  return (

  

          <div>
          <header>
            <div className="app-bar">
              <div className="app-header">
                <h1>Management App!</h1>
              </div>
            </div>

          </header>
          <MachineAdd />
          <div className="main">
        {user ? (
          <Fragment>

            <TaskForm />
            <div className="filter">
              <button onClick={() => setHideCompleted(!hideCompleted)}>
                {hideCompleted ? 'Show All' : 'Hide Completed'}
              </button>
            </div>

            <ul className="tasks">
              {tasks.map(task => <Task key={task._id} _id={task._id} isChecked={task.isChecked} text={task.text} />)}
            </ul>
          </Fragment>
        ) : (
          <LoginForm />
        )}

     

          
          



          <Switch>
            <Route exact path="/" component={Home}>
              <MachineAdd />
            </Route>
            <Route path="/add" component={AddMachine}></Route>
            <AddMachine />


            <Route path="/write" component={WriteNotizen}>
              <WriteApp />
              <NotizenWrite />
            </Route>
            <Route path="/" component={Aboutus}>
              <MachineApp />
            </Route>


          </Switch>
          </div >
    </div>
  );
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
      <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary btn-sm"
            id="dropdown-basic">
            Language
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
            <Dropdown.Item href="#" >Arabic</Dropdown.Item>
            <Dropdown.Item href="#">English</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
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











