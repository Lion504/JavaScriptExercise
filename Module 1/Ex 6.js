const choose = confirm("Should I calculate the square root?");
if (choose) {
  let num = prompt("Enter a number below:");
  if (num === null) {
    document.write(`You canceled calculate!`);
  } else if (num.trim() === ""){
      document.write(`It is empty!`);
  } else {
      let numInt = +num;
      let sRoot = Math.sqrt(numInt);
      document.write(`${numInt} Square Root = ${sRoot}`);
  }
} else{
  document.write(`The square root is not calculated.`)
}

