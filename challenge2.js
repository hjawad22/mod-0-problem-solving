// Given an array of strings, return only the words that begin with the letter "t".
// **overall goal** 

// for the code to loop through the array and only 
// give us ouputs of the elements in the array that begin with the letter 't' in them and 
// leave the rest of the elements out.

//  **pseudocode**
// I need to define an array of string elements that begin with the letter 't' and ones that start with different letters so we can test it.
// I need to create a loop that goes through the array using a 'for' statement.
// I can use the startsWith("t") method, to draw out the elements that start with 't'.
// Then console.log the array so that I can see the outputs of the elements that start with 't'.

//  **final solution**
var locations = ["tokyo","africa","fiji","thailand","turkey"];

for (var i = 0; i < locations.length; i++) {
    if (locations[i].startsWith("t")) {
    console.log(locations[i]);
    }
}