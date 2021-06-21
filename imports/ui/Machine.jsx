import React from 'react';
import Button from 'react-bootstrap/Button'

export const Machine = ({ machine, onClickMachine, onDeleteClick }) => {
  return (
    <li>
      <span>{machine.title}</span>
      <Button onClick={(e) => onClickMachine(machine)} variant="primary">Test starten</Button>
      <Button variant="danger" onClick={(e) => onDeleteClick(machine)}>&times;</Button>
    </li>
  );
};
