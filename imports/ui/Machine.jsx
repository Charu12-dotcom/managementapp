import React from 'react';

export const Machine = ({ machine, onCheckboxClick, onDeleteClick }) => {
    return (
   


      <li>
        <input
          type="checkbox"
          checked={!!machine.isChecked}
          onClick={() => onCheckboxClick(machine)}
          readOnly
        />
        <span>{machine.title}</span>
        <button onClick={ () => onDeleteClick(machine) }>&times;</button>

      </li>
    );
  };
  