let input = prompt ("nhập vào chuỗi ký tự");
function isPalindrome(input) {
    let cleaned = input.trim().toLowerCase();
    let symmetrical = cleaned.split(``).reverse().join(``);
    return cleaned === symmetrical;
}
if (isPalindrome(input)){
    alert ("đối xứng");
}else{
    alert("không đối xứng");
}