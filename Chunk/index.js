// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size


// Solution 1
// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         const last = chunked[chunked.length -1];

//         if (!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }


// Solution 2
function chunk(array, size) {
    const chunked = [];
    let index = 0;
    
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
  }
  module.exports = chunk;