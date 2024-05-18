function getPositives(arr)
{
    const positiveArrays = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            positiveArrays.push(arr[i]);
        }
    }

    return positiveArrays;
}

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var arr2 = getPositives(arr);
console.log(arr2); //should return: [10,12,5,90,0,1]