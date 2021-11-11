const row1 = document.querySelector(".hider");
const row2 = document.querySelector(".hider");
const icon = doucument.querySelector(".fa-circle");

function showrow2() {
    row1.classList.add("effect");
    row2.classList.remove("effect");
    icon.style.color = "red";

}

function showrow1() {
    row2.classList.add("effect");
    row1.classList.remove("effect");
}