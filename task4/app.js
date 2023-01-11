// let array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
let array2 = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18];
// let isPrime = [];

function isPrime(n) {
    for (let i = 2; i < n; i++) {       
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < array2.length; i++) {
    console.log(isPrime(array2[i]));
}