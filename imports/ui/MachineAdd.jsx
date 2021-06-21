import React, { useState } from 'react';
import { MachineCollection } from '/imports/api/MachineCollection';


export const MachineAdd = () => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    MachineCollection.insert({
      text: text.trim(),
      createdAt: new Date()
    });

    setText("");
  };


  return (
    <form className="machine-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type to add new machine"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add Machine</button>
    </form>
  );
};
