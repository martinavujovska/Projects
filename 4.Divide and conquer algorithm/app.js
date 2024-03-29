function search(arr, val) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
} 

//time complexity O(n)
 

function search(array, val){
    let min = 0;
    let max = array.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if(array[middle] < val) {
            min = middle + 1;
        }
        else if(array[middle] > val) {
            max = middle - 1;
        }
    }
    return -1;
}