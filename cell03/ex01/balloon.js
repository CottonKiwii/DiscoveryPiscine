let balloon = document.getElementById("balloon");

balloon.style.backgroundColor = "red";

balloon.addEventListener("click", () => {
    balloon.style.height = (balloon.offsetHeight + 10) + "px";
    balloon.style.width = (balloon.offsetWidth + 10) + "px";
    if (balloon.offsetHeight > 420 || balloon.offsetWidth > 420) {
        balloon.style.height = "200px";
        balloon.style.width = "200px";
    }
    if (balloon.style.backgroundColor === "red")
        balloon.style.backgroundColor = "green";
    else if (balloon.style.backgroundColor === "green")
        balloon.style.backgroundColor = "blue";
    else
         balloon.style.backgroundColor = "red";
})

balloon.addEventListener("mouseleave", () => {
    balloon.style.height = (balloon.offsetHeight - 5) + "px";
    balloon.style.width = (balloon.offsetWidth - 5) + "px";
    if (balloon.offsetHeight < 200 || balloon.offsetWidth < 200) {
        balloon.style.height = "200px";
        balloon.style.width = "200px";
        return ;
    }
    if (balloon.style.backgroundColor === "red")
        balloon.style.backgroundColor = "blue";
    else if (balloon.style.backgroundColor === "blue")
        balloon.style.backgroundColor = "green";
    else
         balloon.style.backgroundColor = "red";
})