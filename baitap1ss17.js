const text =document.getElementById(`text`);
const hideBtn =document.getElementById(`hideBtn`);
const showBtn =document.getElementById(`showBtn`);
hideBtn.addEventListener("click", function(event) {
    text.style.display ="none";
});

showBtn.addEventListener(`click`, function(event){
    text.style.display = "block";
});
