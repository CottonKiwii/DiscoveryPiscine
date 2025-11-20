let nbr1 = document.getElementById("nbr1");
let nbr2 = document.getElementById("nbr2");
let op = document.getElementById("operator").value;


document.getElementById("calculate").addEventListener("click", () => {
	if (op === "+") {
		alert(nbr1 + nbr2);
	}
})

