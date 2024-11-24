let nums = [];

for (let i = 0; i < 5;) {
    let input = prompt(`Enter ${i + 1} number below: `);
    input = input.trim();

    if (input === "") {
        alert(`Empty input, try again!`);
        continue;
    }
    let num = Number(input);

    if (!isNaN(num)) {
        nums.push(num);
        i++;
    } else {
        console.log(`Invalid number, try again!`);
    }
}

console.log("Number in reverse order: ");
for (let i = nums.length - 1; i >= 0; i--){
    console.log(nums[i]);
}
