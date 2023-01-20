function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(5))


function factorial(num) {
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
}

function factorialRecrusive(num) {
    if(num === 1) return 1;
    return num * factorial(num-1)
}
factorial(5);