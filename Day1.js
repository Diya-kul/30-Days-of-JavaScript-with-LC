 /*  Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 */


/*  Any arguments could be passed to the function but it should still always return "Hello World".    */

var createHelloWorld = function() {
    
    return function(...args) {
         return "Hello World";
    }
};


