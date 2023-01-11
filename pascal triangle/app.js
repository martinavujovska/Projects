function pascals(numRows) {
    // if the number of rows in the triangle is 0, we return an empty array
    if(numRows === 0) return [];
    // we return two dimensional array
    if(numRows === 1) return [[1]];
    let result = []; // initializing an array which is returned at the end
    for(let row = 1; row <= numRows; row++){ //outer foor loop will account for each row. increment from 1 until it equals numRows
        let arr = []; // initializing array that will store the value of each row we're in and will end up getting pushed to the result array
        for(let col = 0; col < row; col++){ // inner for loop keeps track of the column we're on, so it increments from 0 until it reacher the value of row. number row we're on equals
            // the number of columns in that row
            if(col === 0 || col === row - 1){ // we want to check if we're in the first or last column, so if col equals 0, or col equals row-1, then we want to push 1 into the array
                arr.push(1); 
            } else {
                arr.push((result[row-2] [col-1] + result[row-2] [col]));
            }
        }
        result.push(arr); // push the sum of two values to arr. the first value is the element in the array thats one column to the left, and two rows up. the second value is the element in the array that's in the same column
        //two rows up. 
    }
    return result;
}

console.log(pascals(5));
