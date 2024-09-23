const Button = Array.from(document.querySelectorAll(".button"));
const Num = document.getElementById("Number");

function ChangeCount(event){
    const UpdownData = event.target.dataset.updown;
    if (UpdownData ==="Up"){
        Num.textContent++;
    }
    else{
        Num.textContent--;
    }
}

Button.forEach(element => {
    element.addEventListener("click",ChangeCount)
});