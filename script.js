document.getElementById("toggleList").addEventListener("click", function() {
    let lostItems = document.getElementById("lostItems");
    lostItems.classList.toggle("hidden");
});

function showDetails(item, description) {
    document.getElementById("detailsText").innerText = `${item}: ${description}`;
    document.getElementById("detailsPopup").classList.remove("hidden");
}

function closeDetails() {
    document.getElementById("detailsPopup").classList.add("hidden");
}

function filterItems() {
    let search = document.getElementById("searchBar").value.toLowerCase();
    let items = document.querySelectorAll("#itemList li");
    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(search) ? "" : "none";
    });
}
