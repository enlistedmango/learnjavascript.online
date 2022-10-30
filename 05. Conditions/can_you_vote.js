// My Answer
// I was attempting to console log the output, when I should just be returning the output.
// I also called the wrong function. I should have used age, instead of canVote

// /**
//  * @param {number} age
//  */
//  function canVote(age) {
//     if (canVote >= 18) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

// // Sample usage - do not modify
// console.log(canVote(25)); // true
// console.log(canVote(18)); // true
// console.log(canVote(10)); // false


// Solution

/**
 * @param {number} age
 */
 function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false