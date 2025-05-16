let a= +prompt("Nhập điểm giữa kỳ");
let b= +prompt("nhập điểm thi cuối kì");
let averagescore= a * 0.4 + b * 0.6;
// xét điều kiện xếp học lực
if (averagescore >= 8.0){
    alert("Hoc sinh xếp loại giỏi");
} else if (averagescore>= 6.0 && averagescore < 8){
    alert("Học sinh xếp loại khá ");
}else if (averagescore >= 5.0 && averagescore <6.5 ){
    alert("Học sinh xếp hạng trung bình");

} else {
    alert("Học sinh xếp loại yếu");
}
    

