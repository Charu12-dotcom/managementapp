import { Meteor } from 'meteor/meteor';
import { MachineCollection } from '/imports/api/MachineCollection';
//import '../imports/api/machine.js';

const insertMachine = (machine) => MachineCollection.insert({'title': machine});

Meteor.startup(() => {
  if (MachineCollection.find().count() === 0) {
    [
      "HSense HS15", 
      "Airsense AS16", 
      "CombiSense CS18", 
      "CO2Sense CS18", 
      "PEMSense PEM18", 
      "HydrogenSense HY20"
    ].forEach(insertMachine)
  }
});

