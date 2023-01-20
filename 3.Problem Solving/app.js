// function sum(a, b) {
//     return a + b
// };

// console.log(sum(2, 5))


////////////////////////////////////////


//make object to return at end
//loop over string
//if the char is a number/letter and key in object, add one to count
//if the char is a number/letter and not in object, add it and set value to 1
//if character is something else (space, period, etc) don't do anything
//return object at end

// function charCount(str) {
//     let result = {};

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();

//         if (result[char] > 0) {
//             result[char]++
//         }

//         else {
//             result[char] = 1;
//         };
//     }

//     return result;

// }
// console.log(charCount("hello"))




//////////////////////////////////////////////



// function same(arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }

//         console.log(arr2);
//         arr2.splice(correctIndex , 1)
//     }
//     return true;
// }


//////////////////////////////////////////////////



// function anagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     const result = {};
//     for (let i=0;i<str1.length;i++) {
//         let char = str1[i];
//         result[char] = result[char] ? result[char] += 1 : result[char] = 1;
//     }

//     for (let i=0;i<str2.length;i++) {
//         let char = str2[i];
//         if (!result[char]) {
//             return false;
//         }
//         else {
//             result[char] = -1;
//         }
//     }
//     return true;
// }

// console.log(anagram('martina','djsdsfsss'));



////////////////////////////////////////////////////



//sumzero1 

// function sumZero(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; i++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

//sumzero2-refactor
// function sumZeroRefactored(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     while(left < right){
//         let sum = arr[left] + arr[right];
//         if(sum === 0) {
//             return [arr[left]] , [arr[right]];
//         } else if(sum > 0) {
//             right--;
//         } else {
//             left++;
//         }
//     }
// }

// sumZeroRefactored([-4, -3, -2, -1, 0, 1, 2, 5]);

// function countUniqueValues(arr) {
//     var i = 0;
//     for(var j = 1; j < arr.length; j++) {
//        if( arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//        }
//        console.log(i, j);
//     }
// }

// countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]);


//////////////////////////////////////////////////////////////


//write a function called maxSubarraySum which accepts an array of integers and a number called n. 
//the calculate should calculate the maximum sum of n consecutive elements in the array

function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
        console.log(temp, max);
    }
    return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3); 