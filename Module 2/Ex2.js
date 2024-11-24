let participants = [];

let jointNumInput = prompt("Enter participants number: ");
jointNumInput = jointNumInput.trim();
if(jointNumInput === "") {
    alert("Please enter a number!");
}
let jointNum = Number(jointNumInput);

for (let i = 0; i < jointNum;) {
    let participantName = prompt(`Enter ${i + 1} participant name: `);
    participantName = participantName.trim();

    if(participantName === "") {
        alert("Please enter a name!");
        continue;
    }

    if (!isNaN(participantName)) {
        alert("Please enter a name");
        continue;
    }

    participants.push(participantName);
    i++;
}

console.log("Participants list:");
for (let j = 0; j < participants.length; j++) {
    console.log(participants[j]);
}