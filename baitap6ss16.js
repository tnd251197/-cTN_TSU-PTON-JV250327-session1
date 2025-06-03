const arr1 = [1,2,3,4,5,6];
const arr2 = [10,20,30,40,50];
const arr3 = [1,3,5,7,9];
function calculateSum (arr){
const sum = arr.reduce ((total, num) => total + num,0);
console.log(sum);
}
calculateSum(arr1);
calculateSum(arr2);
calculateSum(arr3);