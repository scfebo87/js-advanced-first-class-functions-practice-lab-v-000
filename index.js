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
  sorted_array = array.slice(0); 
  sorted_array.sort(function(object1, object2) {
    return object1.revenue - object2.revenue;
  });
  return sorted_array; 
}

function driversByName(array) {
  sorted_array = array.slice(0); 
  sorted_array.sort(function(object1, object2) { 
    return 
}