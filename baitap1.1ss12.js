// khai báo biến a và b
let a= +prompt("Xin hãy nhập số a");
let b= +prompt("Xin hãy nhập vào số b");
// kiểm tra a chia hết cho b không
if (a % b === 0 ){
    alert(`${a} chia hết cho ${b}`)
}else
alert(`${a} không chia hết cho ${b}`);