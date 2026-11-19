

// API calls are asynchronous

async function getCatFact() {
    const url = "https://catfact.ninja/fact";

    const response = fetch(url);

    console.log(response);
}