document.addEventListener("DOMContentLoaded", function () {
    // Get the UL element to display the data
    const categoryList = document.getElementById("category-list");

    // Fetch the JSON data from a separate file
    fetch("./data.json")
        .then(response => response.json())
        .then(jsonData => {
            // Loop through the JSON data and create list items
            jsonData.forEach((item, index) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<div class="li-${index}"><img class="icon" src=${item.icon}></img><span 
                class="category category-${index}">${item.category}</span> <span
                class="outof"> / 100</span><span class="score">${item.score}</span></div>`;
                categoryList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error fetching JSON data:", error);
        });
});