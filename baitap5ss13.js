let number = [];
let soLe = 0;
let soChan = 0;
let length = Math.floor(Math.random()*11)+10;
for ( let i = 0; i < length; i++){
let random = Math.floor(Math.random()*100);    
number.push(random);
}
for ( let i = 0; i < length; i++){
if (number[i] % 2 ===0){
    soChan += number[i];
}else
soLe += number[i];}
alert (soChan);
alert(soLe);