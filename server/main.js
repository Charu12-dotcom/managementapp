import { Meteor } from 'meteor/meteor';
import { MachineCollection } from '/imports/api/MachineCollection';
import { WritesCollection } from '/imports/api/WritesCollection';
import { Accounts } from 'meteor/accounts-base';
const insertMachine = (machine) => MachineCollection.insert({ 'title': machine });

const insertTask = (machineText, user) =>
    MchineCollection.insert({
        text: machineText,
        userId: user._id,
        createdAt: new Date(),
    });
const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        Accounts.createUser({
            username: SEED_USERNAME,
            password: SEED_PASSWORD,
        });
    }

});

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