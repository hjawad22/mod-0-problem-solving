// 1. Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!" 
//  **overall goal** 
// for the code to loop through and arrange the elements of the array in alphabetical order 
// and those locations and give us an output of `The next place I want to vist is ${location}`.

//  **pseudocode**
// I need to define an array of travel destinations that begin with different letters so that we can test it.
// I need the sort() method to alphabetize the elements in the array.
// I need to create a loop that goes through the array using a 'for' statement.
// I need to use interpolation to create a string statement so that the output is different cities in the string statement.
// Then console.log a string statement that says `The next place I want to vist is ${locations}`.


// **final solution**. 
var travelLocations = ["Spain","Italy","France","Russia"];

for (var i = 0; i < travelLocations.length; i++) {
    travelLocations.sort();
    if (travelLocations[i]) {
    console.log (`The next place I want to vist is ${travelLocations[i]}.`);
    }
}