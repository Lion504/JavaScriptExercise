let candidates = [];

// Function to get a positive integer input
function getPositiveInteger(message) {
    while (true) {
        let input = prompt(message);
        if (input === null) {
            alert("User canceled!");
            return null; // If user cancels, exit
        }

        input = input.trim();
        let number = Number(input);

        if (Number.isInteger(number) && number > 0) {
            return number; // Return valid positive integer
        } else {
            alert("Please enter a valid positive number.");
        }
    }
}

// Function to get candidate names
function getCandidates(num) {
    for (let i = 0; i < num; i++) {
        while (true) {
            let name = prompt(`Enter name for candidate ${i + 1}:`);
            if (name === null) {
                alert("User canceled!");
                return null; // If user cancels, exit
            }

            name = name.trim();
            if (name !== "") {
                candidates.push({ name: name, votes: 0 });
                break; // Name is valid, proceed to next candidate
            } else {
                alert("Please enter a valid name.");
            }
        }
    }
    return true; // Indicate that candidates were successfully collected
}

// Function to collect votes from voters
function getVotes(numVoters) {
    for (let i = 0; i < numVoters; i++) {
        let vote = prompt(`Voter ${i + 1}, enter the name of your candidate:`);
        if (vote === null) {
            alert("User canceled!");
            break; // Stop voting if user cancels
        }

        vote = vote.trim();
        let found = false;

        for (let candidate of candidates) {
            if (candidate.name.toLowerCase() === vote.toLowerCase()) {
                candidate.votes += 1;
                found = true;
                break;
            }
        }

        if (!found) {
            alert("Invalid candidate name. Vote not counted.");
        }
    }
}

// Function to determine and print the winner
function findWinner() {
    if (candidates.length === 0) {
        console.log("No candidates found!");
        return;
    }

    // Sort candidates by votes in descending order
    candidates.sort((a, b) => b.votes - a.votes);
    let highestVotes = candidates[0].votes;

    // Find all candidates with the highest number of votes (in case of a tie)
    let winners = candidates.filter(candidate => candidate.votes === highestVotes);

    if (winners.length === 1) {
        console.log(`The winner is ${winners[0].name} with ${winners[0].votes} vote(s).`);
    } else {
        let winnerNames = winners.map(candidate => candidate.name).join(", ");
        console.log(`It's a tie between: ${winnerNames} with ${highestVotes} vote(s) each.`);
    }

    console.log("Results:");
    candidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} vote(s)`);
    });
}

// Main function to run the voting process
function main() {
    let numCandidates = getPositiveInteger("Enter the number of candidates:");
    if (numCandidates === null) return;

    let collected = getCandidates(numCandidates);
    if (collected === null) return;

    let numVoters = getPositiveInteger("Enter the number of voters:");
    if (numVoters === null) return;

    getVotes(numVoters);
    findWinner();
}

// Run the program
main();
