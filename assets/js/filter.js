document.addEventListener("DOMContentLoaded", function() {

    function getQueryParam(param) {
        let urlParams = new URLSearchParams(window.location.search);
     
        return urlParams.get(param);
    }

    let word = getQueryParam("word");
    let titleElement = document.getElementById("word-title");
    let listElement = document.getElementById("filtered-pages");

    // If no word is provided, hide the list completely
    if (!word) {
        if (titleElement) titleElement.innerText = "";
        if (listElement) listElement.style.display = "none";
        return;
    }

    // Set the word in the title
    if (titleElement) titleElement.innerText = ` ${word} ,    تظهر في `;

    let listItems = document.querySelectorAll("#filtered-pages li");
    let hasResults = false;

    listItems.forEach(li => {
        let tags = li.dataset.tags.split(",");
        if (!tags.includes(word)) {
            li.style.display = "none";
        } else {
            hasResults = true;
        }
    });

    // If no matching results, hide the list completely
    if (!hasResults && listElement) {
        listElement.innerHTML = "<li>No pages found with this tag.</li>";
    } else if (listElement) {
        listElement.style.display = "block"; // Show filtered results
    }
});
