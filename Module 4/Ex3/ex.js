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

function showResult(results){
    const article = document.getElementById("results");
    article.innerHTML = "";

    if (results.length === 0){
        article.innerHTML = "<p>get empty</p>";
        return;
    }

    results.forEach(items => { 
        const resultDiv = document.createElement("div");
        resultDiv.className = "result";

        const title = items.show.name || "Nothing here";
        const detail = items.show.url || "#";
        const summary = items.show.summary || "Nothing here";
        const image = items.show.image?.medium || "Nothing here";

        resultDiv.innerHTML = `
        <div class="result-item">
            <img src="${image}" alt="${title}">
            <h2>${title}</h2>
            <a href="${detail}" target="_blank" rel="noopener noreferrer">View Details</a>
            <div>${summary}</div>
        </div>
        `;
        
        article.appendChild(resultDiv);
    });

}
