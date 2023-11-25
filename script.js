var a = 10;
let b = 10;
// const d=20;
var c;
c=a+b;
console.log(c);
var e;
e=a-b;
console.log(e);
var d;
d = a*b
console.log(d);
var f;
f=a/b
console.log(f);

function add(){
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    var c=parseInt(a)+parseInt(b);
    document.getElementById("answer").value=c;
}
function subtraction(){
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    var c=parseInt(a)-parseInt(b);
    document.getElementById("answer").value=c;
}
function multiplication(){
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    var c=parseInt(a)*parseInt(b);
    document.getElementById("answer").value=c;
}
function divide(){
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    var c=parseInt(a)/parseInt(b);
    document.getElementById("answer").value=c;}