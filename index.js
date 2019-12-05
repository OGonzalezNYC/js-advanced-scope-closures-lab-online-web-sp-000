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

