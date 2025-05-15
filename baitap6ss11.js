// tạo biến nhập 2 số a và b
let a= +prompt("Mời bạn nhập vào số a");
let b= +prompt("Mời bạn nhập vào số b");
let operation= prompt("Mời bạn nhập vào các phép tính (+,-,*,/)");
let i= a+b;
let j= a-b;
let k= a*b;
let g= a/b;
// câu điều kiện
switch (operation) {
case "+": 
    alert ("kết quả của phép tính là: a+b="+i);
    break;
case "-": 
    alert ("kết quả của phép tính là: a-b="+j);
    break;
case "*": 
    alert ("kết quả của phép tính là: a*b="+k);
    break;
case "/": 
    alert ("kết quả của phép tính là: a/b="+g);
    break;
    default:
        alert("chúng tôi chưa có phép tính này");
}

