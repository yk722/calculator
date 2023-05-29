var calculation = "";

displayCalc();

function displayCalc() {
    const displayElement = document.querySelector(".display");
    if (calculation=="") {
        displayElement.innerHTML = Number(calculation);
    } else {
        displayElement.innerHTML = calculation;
    }

}

function updateCalc(value) {
    calculation += value;
    displayCalc();
}

function clearCalc() {
    calculation = "";
    displayCalc();
    console.log("clear");
}

function calc() {
    calculation = eval(calculation);
    displayCalc();
}

function percentageCalc() {
    console.log(calculation);
    calculation = Number(calculation)/100;
    console.log(calculation);
    displayCalc();
}