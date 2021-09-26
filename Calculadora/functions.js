var componentA;
var componentB;
var operation;

function init() {
    var result = document.getElementById("result");
    var clear = document.getElementById("clear");
    var plus = document.getElementById("plus");
    var minus = document.getElementById("minus");
    var rate = document.getElementById("rate");
    var product = document.getElementById("product");
    var equals = document.getElementById("equals");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var zero = document.getElementById("zero");

    one.onclick = function (e){
        result.textContent = result.textContent + "1";
    }
    two.onclick = function (e){
        result.textContent = result.textContent + "2";
    }
    three.onclick = function (e){
        result.textContent = result.textContent + "3";
    }
    four.onclick = function (e){
        result.textContent = result.textContent + "4";
    }
    five.onclick = function (e){
        result.textContent = result.textContent + "5";
    }
    six.onclick = function (e){
        result.textContent = result.textContent + "6";
    }
    seven.onclick = function (e){
        result.textContent = result.textContent + "7";
    }
    eight.onclick = function (e){
        result.textContent = result.textContent + "8";
    }
    nine.onclick = function (e){
        result.textContent = result.textContent + "9";
    }
    zero.onclick = function (e){
        result.textContent = result.textContent + "0";
    }

    clear.onclick = function (e){
        reset();
    }
    plus.onclick = function (e) {
        componentA = result.textContent;
        operation = "+";
        blank();
    }
    minus.onclick = function (e) {
        componentA = result.textContent;
        operation = "-";
        blank();
    }
    product.onclick = function (e) {
        componentA = result.textContent;
        operation = "*";
        blank();
    }
    rate.onclick = function (e) {
        componentA = result.textContent;
        operation = "/";
        blank();
    }
    equals.onclick = function (e) {
        componentB = result.textContent;
        resolve();
    }
}
 function blank(){
    result.textContent = "";
 }
 function reset(){
    result.textContent = "";
    componentA = 0;
     componentB = 0;
     operation = "";
 }
 function resolve(){
    var res = 0;
    switch (operation){
        case "+":
            res = parseFloat(componentA) + parseFloat(componentB);
            break;
        case "-":
            res = parseFloat(componentA) - parseFloat(componentB);
            break;
        case "*":
            res = parseFloat(componentA) * parseFloat(componentB);
            break;
        case "/":
            res = parseFloat(componentA) / parseFloat(componentB);
            break;
    }
    reset();
    result.textContent = res;
 }