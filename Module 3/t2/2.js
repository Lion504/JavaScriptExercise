const targetElement = document.getElementById("target");

//const list = document.createElement("ul");

const items = ["First item", "Second item", "Third item"];
items.forEach(itemText => {
    const listItem = document.createElement("li");
    listItem.textContent = itemText;
    targetElement.appendChild(listItem);
});

//targetElement.appendChild(list);