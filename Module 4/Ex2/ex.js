document.getElementById("searchForm").addEventListener("submit", async function (event) {
    event.preventDefault(); 
    const query = document.getElementById("query").value.trim(); 
        if (!query) {
            alert("it's empty")
            return; 
        }

    const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(apiUrl); 
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
        }

        const data = await response.json(); 
        showResult(data); 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

function showResult(result){
    const resultBox = document.getElementById("result");
    result.innerHTML = "";

    if (result.length === 0){
        resultBox.innerHTML = "get empty";
        return;
    }

    result.forEach(items => { 
        const resultDiv = document.createElement("div");
        resultDiv.className = "result";

        const title = items.show.name || "Nothing here";
        const summary = items.show.summary || "Nothing here";
        const image = items.show.image?.medium || "Nothing here";

        resultDiv.innerHTML = `
        <img src="${image}" alt="${title}"
        <h3>${title}</h3>
        <p>${summary}</p>
        `;
        
        resultBox.appendChild(resultDiv);
    });

}
