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

    setInterval(() => {
      console.log(pulseWidth);
      
      this.motoV.servoWrite(pulseWidth);
      this.motoH.servoWrite(pulseWidth);

      pulseWidth += increment;
      if (pulseWidth >= 2000) {
        increment = -100;
      } else if (pulseWidth <= 1000) {
        increment = 100;
      }
    }, 1000);

  }
}

exports.moto = moto;