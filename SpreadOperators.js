/*
    Spread Operators
*/

let arrayone = [1, 2, 3],
    arraytow = [4, 5],
    customArray = [1,2,3,...arraytow,...arrayone];

let allarrays = [...arrayone, ...arraytow];
console.log(customArray);



