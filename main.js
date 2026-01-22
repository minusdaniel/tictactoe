const tavola1 = document.querySelectorAll(".cell");
const stato = document.getElementById("status");
//problema 1
let turno = "X";
//problema 4
let acceso = true;
//problema 2
let tavola2 = ["", "", "", "", "", "", "", "", ""];
//problema 3
let combinazioni = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]
];
for (let i = 0; i < tavola1.length; i++) {
    tavola1[i].addEventListener("click",()=>giuoca(i));
}
function giuoca(index) {
    if (tavola2[index] != "" || !acceso) return;
    tavola2[index] = turno;
    tavola1[index].textContent = turno;
    controlloVittoria();
}
//problema 3
function controlloVittoria() {
for (let i = 0; i < combinazioni.length; i++) {
    let a = combinazioni[i][0];
    let b = combinazioni[i][1];
    let c = combinazioni[i][2];
    if (tavola2[a] && tavola2[a] === tavola2[b] && tavola2[a] === tavola2[c]) {
        stato.textContent = "Ha vinto " + tavola2[a] + "!";
        acceso = false;
        return;
    }
}
if (!tavola2.includes("")) {
    stato.textContent = "Pareggio!";
    acceso = false;
    return;
}
if (turno === "X") {
turno = "O";
} else {
turno = "X";
}
stato.textContent = "Turno di: " + turno;
}
function reset() {
    tavola2 = ["", "", "", "", "", "", "", "", ""];
    turno = "X";
    acceso = true;
    stato.textContent = "Turno di: X";
    tavola1.forEach(cell => cell.textContent = "");
    for (let i = 0; i < tavola1.length; i++) {
        tavola1[i].textContent = "";
    }
}