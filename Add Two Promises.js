/*
PROBLEM STATEMENT
  Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. 
  The returned promise should resolve with the sum of the two numbers.
*/
// SOLUTION
  var addTwoPromises = async function(promise1, promise2) {
    // Wait for both promises to resolve
    const value1 = await promise1;
    const value2 = await promise2;
    
    // Return their sum
    return value1 + value2;
};
