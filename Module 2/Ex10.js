let candidates = [];

function getInteger(candidateNum) {
    let number;
    do {
        let input = prompt(candidateNum);
        if (input === null) {
            alert("User cancled!")
            return null;
        }
        input = input.trim();
        number = Number(input);
    } while (input === "" || isNaN(number) || number <= 0 || !Number.isInteger(number));
    return number;
}

function getCandidates(num){
    for (let i = 1; i <= num; i++){
        let name;
        do {
            name = prompt(`Enter ${i} candidate name: `);
            if (name === null){
                alert("User cancled!");
                return null;
            }
            name = name.trim();
        } while (name === "");
        candidates.push({
            name: name,
            votes: 0
        });
    }
}

function getVotes(numVoters){
    for (let i = 1; i <= numVoters; i++){
        let vote = prompt(`Voter ${i}, enter your vote for a candidate: `);
        if (vote === null){
            alert("User cancled!");
            break;
        }
        vote = vote.trim();
        if (vote === ""){
            continue;
        }
        let found = false;
        for (let candidate of candidates){
            if (candidate.name.toLowerCase() === vote.toLowerCase()){
                candidate.votes += 1;
                found = true;
                break;
            }
        } return candidate.votes;
        if (!found){
            continue;
        }
    }
}

function findWinner(){
    if (candidates.length === 0){
        console.log("No candidates found!");
        return;
    }
    let candidates = [...candidates].sort((a,b) => {
        return b.votes - a.votes;
    });
    let highestVotes = sortedCandidates[0].votes;
    let winners = sortedCandidates.filter(candidate => candidate.votes === highestVotes);

    if (winners.length === 1){
        console.log(`The winner is ${winners[0].name} with ${winners[0].votes} votes`);
    } else {
        let winnerNames = winners.map(candidate => candidate.name).join(",");
        console.log(`It's a tie between: ${winnerNames} with ${highestVotes} votes`);
    }

    console.log("Results:");
    for (let candidate of sortedCandidates) {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    }
}

function main() {
    let numCandidates = getInteger("Enter the number of candidates:");
    if (numCandidates === null) return;

    let collected = getCandidates(numCandidates);
    if (collected === null) return;

    let numVotes = getVotes(numCandidates);
    if (numVotes === null) return;

    getVotes(numVotes);

    findWinner();
}

main();