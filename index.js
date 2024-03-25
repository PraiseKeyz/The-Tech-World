var output = document.getElementById("hInput");

/*function myFunction() {
 //  output.innerHTML = 1;
 var buttonClick = document.getElementById('button').value;

 if (buttonClick === "4") {
     output.innerHTML = 1;  
}
else if(buttonClick === "2") {
    output.innerHTML = 2;
}
};*/

function myFunction1() {
    output.innerHTML += 1;
}
function myFunction2() {
    output.innerHTML += 2;
}
function myFunction3() {
    output.innerHTML += 3;
}
function myFunction4() {
    output.innerHTML += 4;
}
function myFunction5() {
    output.innerHTML += 5;
}
function myFunction6() {
    output.innerHTML += 6;
}
function myFunction7() {
    output.innerHTML += 7;
}
function myFunction8() {
    output.innerHTML += 8;
}
function myFunction9() {
    output.innerHTML += 9;
}
function myFunction0() {
    output.innerHTML += 0;
}
function myFunctionA() {
    output.innerHTML = "";
}
function myFunctionC() {
    output.innerHTML += "%";
}
function myFunctionD() {
    output.innerHTML += '.';
}
function myFunctionE() {
    var result = eval(output.innerHTML);
     output.innerText = result;
}
function myFunctionF() {
    output.innerHTML += "+";
}
function myFunctionG() {
    output.innerHTML += "-";
}
function myFunctionH() {
    output.innerHTML += "*";
}
function myFunctionJ() {
    output.innerHTML += "/";
}
function myFunctionB() {
    output.innerHTML = toString().slice(-1, -1);
   output.style.height = "100px"
}

