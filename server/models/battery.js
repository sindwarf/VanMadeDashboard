/* eslint-disable no-multi-spaces */
exports.get = () => {
  const batteryData = {
    voltage: 13154, // mV
    current: 8324,  // mA
    temp: 26,       // C
    iPower: 340,     // watts
    consumed: 18984, // mAh
    soc: 99,         // %
    alarm: false,    // alarm condition active
  };
  return Promise.resolve(batteryData);
};
