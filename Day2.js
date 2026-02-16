//PROBLEM
/*Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).*/



/*A counter function in JS is created using closure where an inner function remembers and updates a variable from its outer scope.*/

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count=n-1;
    return function() {
        count++;
        return count;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

//HOW IT WORK?
/*createCounter() runs once,
count stays in memory,
Inner function remembers count,
This concept is called closure.*/