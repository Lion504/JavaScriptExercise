const name = prompt("Hogwarts School of Witchcraft and Wizardr, enter your name below:");
function getRandom() {
  return Math.random() * 4 + 1;
}
if (3 < getRandom() && getRandom() <= 4){
  document.write(`${name} You are Gryffindor!`)
} else if (2 < getRandom() && getRandom() <= 3){
  document.write(`${name} You are Slytherin!`)
} else if (1 < getRandom() && getRandom() <= 2){
  document.write(`${name} You are Hufflepuff!`)
} else{
  document.write(`${name} You are Ravenclaw!`)
}
