let year = prompt("Leap Year Checker, enter a year:");
let yearInt = +year
if ((yearInt % 4 === 0 && yearInt % 100 !== 0) || (yearInt % 400 === 0)){
  document.write(`${yearInt} is a leap year!`)
} else{
  document.write(`${yearInt} is not a leap year!`)
}
