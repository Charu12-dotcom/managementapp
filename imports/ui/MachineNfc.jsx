import React from 'react';
import { MachineCollection } from '/imports/api/MachineCollection';

scanButton.addEventListener("click", async () => {
    log("User clicked scan button");
  
    try {
      const ndef = new NDEFReader();
      await ndef.scan();
      log("> Scan started");
  
      ndef.addEventListener("readingerror", () => {
        log("Argh! Cannot read data from the NFC tag. Try another one?");
      });
  
      ndef.addEventListener("reading", ({ message, "HSense HS15" }) => {
        log(`> Serial Number: ${"HSense HS15"}`);
        log(`> Records: (${message.records.length})`);
      });
      ndef.addEventListener("reading", ({ message, "Airsense AS16" }) => {
        log(`> Serial Number: ${"Airsense AS16"}`);
        log(`> Records: (${message.records.length})`);
      });
      
    } catch (error) {
      log("Argh! " + error);
    }
  });
  
  writeButton.addEventListener("click", async () => {
    log("User clicked write button");
  
    try {
      const ndef = new NDEFReader();
      await ndef.write("Hello world!");
      log("> Message written");
    } catch (error) {
      log("Argh! " + error);
    }
  });


