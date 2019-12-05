function produceDrivingRange(blockRange) {
  return function(start, stop) {
    let startNumber = parseInt(start.slice(0, 2));
    let stopNumber = parseInt(stop.slice(0, 2));
    let distance = (stopNumber - startNumber);
    if (distance <= blockRange) {
      return `within range by ${ blockRange - distance}`
    } else {
      return `${distance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercentage) {
  return function(fare) {
    return fare * tipPercentage;
  }
}

function createDriver() {
  
  return class Driver {
    let driverId = 0;
    constructor() {
      id = ++driverId;
    }
  }
}