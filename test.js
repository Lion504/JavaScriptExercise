//let test = "Welcome"
//test.toLowerCase()
//console.log(typeof test)
//console.log(test)
let strNum = "3"
let strFloat = "325.55"
//let num = (Number(strNum));
let n = +strNum;
console.log(n, strFloat)
console.log(typeof n)
console.log(typeof strFloat)

let y= 15;
if (y > 18) {
  console.log("you are adult");
}
else {
  console.log("too young");
}

let age = 18;
if (age >= 18) {
    console.log("You are an adult");
}

function calculate(operation){
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = "please enter a valid number";
    return
  }
  switch (operation){
    case '+' :
      result = num1+num2;
      break;
    case '-' :
      result = num1-num2;
      break;
    case '*' :
      result = num1*num2;
      break;
    case '/' :
      result = num1/num2;
      break;
  }

  document.getElementById("result").innerHTML = "result:" + result;
}

/*const button = document.querySelector("button");
button.addEventListener("click", function(){
  const button_click = prompt("click the button");
  button.textContent  = `Hello ${button_click}`;
  alert ("button clicked");
});*/

