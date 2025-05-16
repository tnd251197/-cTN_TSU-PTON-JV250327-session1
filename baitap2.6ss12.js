// giải phương trình bậc 1
let a = +prompt("nhập số a :");
let b = +prompt ("nhập số b");
// xét điều kiện 
 if ( a===0 ) {
    if ( b === 0){
         alert("phương trình có vô số nghiệm");
     }else{
        alert("Phương trình vô nghiệm");
     }
    }else{
   let x = -b / a;
   alert("Phương trình có nghiệm là x: " + x);
     }
    