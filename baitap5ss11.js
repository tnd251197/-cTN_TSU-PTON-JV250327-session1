// tạo biến chưa cân nặng chiều cao 
let weight= prompt("Xin hãy nhập vào số cân nặng");
let height= prompt ("Xin hãy nhập vào chiều cao (m) ");
// tính chỉ số BMI
let BMI= weight / height**2;
console.log(BMI);
if(BMI < 18.5){
    alert("Cân nặng thấy(gầy)");
}else if(BMI >= 18.5 && BMI <= 24.9){
    alert("Bình thường");
}else if(BMI >= 25){
    alert("thừa cân");
}else if(BMI >=25 && BMI <= 29.9){
    alert("Tiền béo phì");
}else if(BMI >= 30 && BMI <= 34.9){
    alert("Béo phì độ 1 ");
}else if (BMI >= 35 && BMI <= 39.9){
    alert("Béo phì độ 2");
}else {
    alert("Béo phì loại 3");
}