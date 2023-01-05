// let numbers = [1, 5, 7, 4, 3];
// let sortedNumbers = [];

// while (numbers.length > 0) {
//     let smallestNumber = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < smallestNumber) {
//             smallestNumber = numbers[i];
//         }
//     }

//     numbers.splice(numbers.indexOf(smallestNumber), 1);

//     sortedNumbers.push(smallestNumber);
// }

// console.log(sortedNumbers); 

///////////////////////////////////////////////////////////////////////////////

// let a = 3;
// let b = 5;
// let c;

// c = a; // 3
// a = b; // 5
// b = c //3

// console.log(a);
// console.log(b);

///////////////////////////////////////////////////////////////////////////////

// let arr = [];
// arr.push(0);
// arr.push(1);
// for (let i = 2; i <= 10; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2]
// }

// console.log(arr);

///////////////////////////////////////////////////////////////////////////////

// let arr = [1, 2, 8, 12, 16, 17, 21, 40, 47];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         count++;
//         console.log(arr[i]);
//     }
// }

// console.log(count);

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
let same = true;

if (arr1.length != arr2.length) {
    console.log("diff");
} else {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log("same")
        }
    }
}
















