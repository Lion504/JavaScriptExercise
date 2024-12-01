'use strict';
const names = ['John', 'Paul', 'Jones'];

const targetElement = document.getElementById("target");

for (let i = 0; i < names.length; i++){
    const items = document.createElement("li");
    items.textContent = names[i];
    targetElement.appendChild(items);
}