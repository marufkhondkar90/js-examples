// change text
function changeText(){
    document.getElementById('cText').innerHTML = 'Dhaka';
}

// fontsize
function fontSize(){
    document.getElementById("fSize").style.fontSize="60px";
}

// color change
function color(){
    document.getElementById("color").style.color="brown";
}
// light off & on
function onLight(){
    document.getElementById("light").src="images/on.png";
}
function offLight(){
    document.getElementById("light").src="images/off.png";
}

// alert
function myAlert(){
    alert("safety first");
}

// alert function
function alertShow(){
    alert("welcome to web");
}

// display hide and block
function displayHide(){
    document.getElementById("tHide").style.display="none";
}
function displayShow(){
    document.getElementById("tHide").style.display="block";
}

// show date
function showDate(){
    document.getElementById("s_date").innerHTML = Date();
}

// repeat
function myRepeat(){
    var store1 = "hello, ";
    document.getElementById("repeat").innerHTML = store1.repeat(5);
}

// total result
function result(){
    document.getElementById("result").innerHTML = 52 + 29;
}

// Addition
var x = 11;
var y = 1;
var z = x + y;
function myAddition(){
    document.getElementById("var_addi").innerHTML = z;
}

// Multiplication
var a = 11;
var b = 10;
var c = a * b;
function myMultiplication(){
    document.getElementById("var_multi").innerHTML = c;
}

// division
var f = 99;
var g = 5;
var h = f / g;
function division(){
    document.getElementById("division").innerHTML = h;
}

// exponentiation
var d = 6;
var e = d**6;
function exponentiation(){
    document.getElementById("exponentiation").innerHTML = e;
}

// pre increment
var aa = 5;
var bb = ++aa;
function increment(){
    document.getElementById("increment").innerHTML = bb;
}

// Post increment ++
var cc = 7;
var dd = cc++;
function pIncrement(){
    document.getElementById("pIncrement").innerHTML = cc;
}

// Pre decrement
var decrement1 = 15;
var decrement2 = --decrement1;
function preDecrement(){
    document.getElementById("pre_decrement").innerHTML = decrement2;
}

// Post decrement
var decrement3 = 15;
var decrement4 = decrement1--;
function postDecrement(){
    document.getElementById("post_decrement").innerHTML = decrement4;
}

// increment +
let number1 = 15;
    number1 += 5;
function mydemo1(){
    document.getElementById("demo1").innerHTML = number1;
}

// Decrement -
let number2 = 15;
    number2 -= 5;
function mydemo2(){
    document.getElementById("demo2").innerHTML = number2;
}


// Multiplication *
let number3 = 15;
    number3 *= 5;
function mydemo3(){
    document.getElementById("demo3").innerHTML = number3;
}


// Division /
let number4 = 15;
    number4 /= 5;
function mydemo5(){
    document.getElementById("demo5").innerHTML = number4;
}

// Modulus *
let number5 = 15;
    number5 %= 5;
function mydemo4(){
    document.getElementById("demo4").innerHTML = number5;
}

// hover over
 document.getElementById('hover').onmouseover = function() {
    this.style.backgroundColor = 'yellow';
  };

  // hover out

   document.getElementById('out').onmouseout = function() {
    this.style.backgroundColor = 'lightblue';
  };