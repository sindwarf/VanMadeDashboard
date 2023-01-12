const db = require('../database');
/* eslint-disable no-multi-spaces */
exports.get = () => (db.getRecentBatteryData());
  // const batteryData = {
  //   date: Date.now(),
  //   voltage: 13443, // mV
  //   current: 10035,  // mA
  //   temp: 26,       // C
  //   iPower: 340,     // watts
  //   consumed: 18984, // mAh
  //   soc: 94,         // %
  //   alarm: false,    // alarm condition active
  // };
  // return Promise.resolve(batteryData);

