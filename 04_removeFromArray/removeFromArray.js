const removeFromArray = function(arr, ...elementsToRemove) {
    // Create a new array without the specified elements
    const filteredArray = arr.filter(function(item) {
      // Include the item in the new array only if it's not in elementsToRemove
      return !elementsToRemove.includes(item);
    });
    
    // Return the new array without the specified elements
    return filteredArray;
  };
  
  // Do not edit below this line
  module.exports = removeFromArray;
  