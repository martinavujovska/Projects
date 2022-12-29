// let a = [1, 5, 7, 2];
// let b = [];

// for(i = 0; i < a.length; i++){
//      b[i] = a[i]
// }

// console.log(a);
// console.log(b);

// let arr = [1, 5, 7, 2];
// let emptyArr = [...arr];
// console.log(arr);
// console.log(emptyArr);

// let max = 37;
// let min = 1;

// let randomNum = Math.random() * (max - min) + min;

// if(max <= 37) {
//      console.log(randomNum);
// }

// console.log(randomNum);



let arr = [];
let edinica = false;
let trieset7 = false;
let counter = [];

for (let i = 0; i < 37; i++) {
    counter.push(0)
}
for (let i = 0; arr.length < 10000; i++) {
    let r = Math.floor(Math.random() * 37) + 1;
    arr.push(r);
    if (r > 37 || r < 1) {
        console.log("Greska !");
        console.log(r);
        break;
    }
    if (r === 1) {
        edinica = true;
    }
    if (r === 37) {
        trieset7 = true;
    }
    counter[r - 1]++;
}

console.log(counter);




console.log(arr);
console.log(edinica);
console.log(trieset7);

// let number = 37;
// let counter = [];

// for(timesRepeated of arr){
//      if(timesRepeated == number){
//           counter++
//      }
// };

// console.log(counter);