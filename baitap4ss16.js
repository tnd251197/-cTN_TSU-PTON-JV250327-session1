let number = +prompt ("Nhập vào số bất kì ");
function isEven (number){
    if (number % 2 === 0 ){
        return "số chẳn";

    }else {
        return "số lẽ";
    }
}
alert (isEven(number));