function sumArray(arr) {
    var sum = 0;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }

    return sum;
}

var array_of_numbers = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = sumArray(array_of_numbers);
console.log("Sum is:", sum);