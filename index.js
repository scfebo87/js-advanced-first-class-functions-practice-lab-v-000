function logDriverNames(array) {
  return array.forEach(function(element) { 
    console.log(element.name) });
}

function logDriversByHometown(array, location) { 
  array.forEach(function(element) { 
    if (element.hometown === location) {
      console.log(element.name); }
  });
}

function driversByRevenue(array) { 
  return array.sort()