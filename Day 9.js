/*
  PROBLEM STATEMENT
    Write a function argumentsLength that returns the count of arguments passed to it.
     
    Example 1:
    
    Input: args = [5]
    Output: 1
    Explanation:
    argumentsLength(5); // 1
    
    One value was passed to the function so it should return 1.
    Example 2:
    
    Input: args = [{}, null, "3"]
    Output: 3
    Explanation: 
    argumentsLength({}, null, "3"); // 3
    
    Three values were passed to the function so it should return 3.
     
    
    Constraints:
    
    args is a valid JSON array
    0 <= args.length <= 100
*/
// SOLUTION
var argumentsLength = function(...args) {
    // The rest parameter (...args) collects all arguments into an array
    // We simply return the length of that array
    return args.length;
};
