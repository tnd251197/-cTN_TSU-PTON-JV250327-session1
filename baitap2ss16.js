function timGiaTrinhonhat (arr){
    if (arr.lenght===0){
    return "mãng rỗng " ;
}
let min = arr[0];
for (let i = 1;i < arr.lenght; i++){
    if (arr[i] < min ) {
        min = arr [i];
    }
}
return min;
}
const arr1 = [3,5,1,8,-3,7,8];
const arr2 =[7,12,6,9,20,56,89];
const arr3 =[];
const arr4 = [0,0,0,0,0,0];
// hiện ra màn hình
console.log ("min của mảng ar1 là:" + timGiaTrinhonhat (arr1));
console.log ("min của mảng ar2 là:" + timGiaTrinhonhat (arr2));
console.log ("min của mảng ar3 là:" + timGiaTrinhonhat (arr3));
console.log ("min của mảng ar4 là:" + timGiaTrinhonhat (arr4));