// function sumRange(num) {
//     if (num === 1) return 1;
//     return num + sumRange(num - 1);
// }

// console.log(sumRange(5))

// function factorial(num) {
//     let total = 1;
//     for (let i = num; i > 0; i--) {
//         total *= i;
//     }
//     return total;
// }

// function factorialRecrusive(num) {
//     if(num === 1) return 1;
//     return num * factorial(num-1)
// }
// factorial(5);

///////////////////////////////////////////////////

//declare an array of size(numRows)
//generate row by row[0] = 1
//row[row.length - 1] = 1
//to generate the values between 1 and 1, look at the row above: i - 1
//rowAbove = pascalsTriangle[i-1]
//look at row above and add row [j] + rowAbove [j-1]

// var generate = function(numRows) {
//     let pascalsTriangle = newArray(numRows)

//     for (let i = 0; i < numRows; i++) {
//         let row = new Array(i + 1);
//         row[0] = 1;
//         row[row.length - 1] = 1;

//         for(let j = 1; j < row.length - 1; j++) {

//         }
//     }
// }

//////////////////////////////////////////////////////////////////////////

//find Odd Values
//pure recursion

// function collectOddValues(arr) {
//   let newArr = [];

//   if (arr.length === 0) {
//     return newArr;
//   }

//   if (arr[0] % 2 !== 0) {
//     newArr.push(arr[0]);
//   }

//   newArr = newArr.concat(collectOddValues(arr.slice(1)));
//   return newArr;
// }

// collectOddValues([1, 2, 3, 4, 5]);


// function factorial(x) {
//   if (x < 0) return 0;
//   if (x <= 1) return 1;
//   return x * factorial(x - 1);
// }

// console.log(factorial(4))
// // Otherwise, it returns the result of x multiplied by the factorial of x-1, which is calculated by calling 
// //the same function recursively. This recursive call continues until the base case (x <= 1) is reached, at 
// //which point the function will begin returning the calculated factorial.

// function sum(array) {
//   let sum = 1;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum * array[i];
//   }
//   return sum;
// }

// console.log(sum([1, 2, 3, 4, 5]));


// function reverse(str) {
//   if(str.length <= 1){
//     return str;
//   }
//   return reverse(str.slice(1)) + str[0];
// }

// console.log(reverse("anitram"))

// //palindrome

// function isPalindrome(str) {
//   if (str.length === 1) return true;
//   if (str.length === 2) return str[0] === str[1];
//   if (str[0] === str.slice[-1]) return isPalindrome(str.slice(1, -1))
//   return false;
// }



// //capitalizeWords

// function capitalizeWords(array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   res.push(array.slice(array.length - 1)[0].toUpperCase());
//   return res;

// }


//max

function maximum(arr){
  if(arr.length === 1){
    return arr[0];
  } 
  if(arr[0] > arr[1]){
    arr[1] = arr[0];
  }
    return maximum(arr.slice(1));
}

console.log(maximum([19, 11, 25, 4, 2, 15]));

//min

