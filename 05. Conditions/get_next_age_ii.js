// My solution...
// Partially working
// /**
//  * @param {string} age
//  */
//  export function getNextAge(age) {
//     if (age = "NaN") {
//         return 0;
//     }
//     return (age) + 1;
// }


// Working Solution

/**
 * @param {string} age
 */
 export function getNextAge(age) {
    if (age === "") {
        return 0;
    }
    
    return Number.parseInt(age, 10) + 1;
}