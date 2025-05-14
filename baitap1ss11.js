// mời người dùng nhập vào năm bất kì
let year= +prompt("nhập vào năm bất kì!");
// xét điều điện để ra năm nhuần hay không nhuần.
while(true){
    if(year % 4 === 0 && year % 100!== 0){
        alert(`${year} năm nhuần `);
    }else {
        alert(`${year} năm không nhuần` );
    }break;}
        
    
   