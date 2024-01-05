const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
      return 'ERROR';
    }
  
    // Ensure start is less than or equal to end
    if (start > end) {
      [start, end] = [end, start]; // Swap values if needed
    }
  
    // Calculate the sum using the arithmetic series formula
    const numCount = end - start + 1;
    const sum = (numCount * (start + end)) / 2;
  
    return sum;
  };
  
  module.exports = sumAll;
  