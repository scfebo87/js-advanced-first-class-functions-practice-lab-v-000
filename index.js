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
  array.sort(function(object1, object2) {
    return object1.revenue - object2.revenue;
  });
}