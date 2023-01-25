//linear search

function linearSearch(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// console.log(linearSearch([34, 56, 1, 2], 40))

//o(n)


//binary search
//only sorted arrays

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);

    while (arr[middle] != elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return - 1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 5));

//o(log n)

//naive string search
//loop over the longer string first
//loop over the shorter string
//if the characters don't match, break out of the inner loop
//if the characters do match, keep going
//if inner room completed and finds a match, incerement the count of matches
//return

function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                break; //break and start at 0 again
            }
            if (j === short.length - 1) {
                count++;
            }
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol"));

////////////////

//bubble sort

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([37, 45, 29, 8]))


//selection sort

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
    }
    return arr;
}

selectionSort([34, 22, 10, 19, 17])


//insertion sort

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
        console.log(arr)
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 4])

//merge sort

console.log("merge sort")

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++
    }
    return results
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
    // mergeSort()
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));

//o(n log n) - time
//o(n) - space  

//quick sort
console.log("quick sort");

// function quickSort(arr, left = 0, right = arr.length - 1){
//     let pivotIndex = pivot(arr, left, right)
//     //left
//     quickSort(arr, left, pivotIndex - 1);
//     //right
//     quickSort(arr, pivotIndex+1, right);

//     //continue code at home
// }

// quickSort([4, 6, 9, 1, 2, 5, 3])


//radix sort

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}


function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length:10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets);
        nums = [].concat(...digitBuckets);
        console.log(nums);
    }
}

console.log(radixSort([9852, 2467, 345, 2345, 23, 12]));