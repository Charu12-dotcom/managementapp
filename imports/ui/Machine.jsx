import React from 'react';
import Button from 'react-bootstrap/Button'

export default class Machine extends React.Component {

  toggleChecked() {
      MachineCollection.update(this.props._id, {
          $set: {
              isChecked: !this.props.isChecked
          }
      })
  }

  handleClick() {
      MachineCollection.remove(this.props._id)
  }

  render() {
      return (
          <li>
              <input
                  type="checkbox"
                  checked={!!this.props.isChecked}
                  onClick={() => this.toggleChecked()}
                  readOnly
              />
              <span>{this.props.text}</span>
              <button onClick={() => this.handleClick()}>&times;</button>
          </li>
      )
  }
}


export const Machine = ({ machine, onClickMachine, onDeleteClick }) => {
  return (
    <li>
      <span>{machine.title}</span>
      <Button onClick={(e) => onClickMachine(machine)} variant="primary">Test starten</Button>
      <Button variant="danger" onClick={(e) => onDeleteClick(machine)}>&times;</Button>
    </li>
  );
};
