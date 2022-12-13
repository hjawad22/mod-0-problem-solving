// 1. Given an array of strings, return only the strings that
//  have exactly 4 characters.
// **overall goal** 
// for the code to loop through and only 
// give us ouputs of the elements in the array 
// that have 3 character in them and leave the rest of the elements out.

//  **pseudocode**
// I need to define an array with string elements ones with 4 characters and ones with less/more character so we can test it.
// I need to create a loop that goes through the array using a 'for' statement.
// I could use the .length method and an if statement to make sure I am drawing out the ones with 4 characters.
// Then console.log the array so that I can see the outputs of the elements with 4 characters.


 //   **final solution**. 
 var names = ["Jo","Ash","Jhon","Kate","Dream","Dave"];

 for (var i = 0; i < names.length; i++) {
    if (names[i].length === 4) {
    console.log(names[i]);
    }
 }