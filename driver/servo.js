'use strict';

const Gpio = require('pigpio').Gpio;

class moto {
  constructor() { //构造函数
    this.motoV = new Gpio(9, { mode: Gpio.OUTPUT });
    this.motoH = new Gpio(10, { mode: Gpio.OUTPUT });
  }
  start() {
    let pulseWidth = 1000,
      increment = 100;

    setInterval(function() {
      motoV.servoWrite(pulseWidth);

      pulseWidth += increment;
      if (pulseWidth >= 2000) {
        increment = -100;
      } else if (pulseWidth <= 1000) {
        increment = 100;
      }
    }, 1000);

  }
}
module.exports.moto = moto;
// var Gpio = require('../').Gpio,
//   motor = new Gpio(10, {mode: Gpio.OUTPUT}),
//   pulseWidth = 1000,
//   increment = 100;

// setInterval(function () {
//   motor.servoWrite(pulseWidth);

//   pulseWidth += increment;
//   if (pulseWidth >= 2000) {
//     increment = -100;
//   } else if (pulseWidth <= 1000) {
//     increment = 100;
//   }
// }, 1000);
