const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const courseCards = document.querySelectorAll(".course-card");

function filtrarCursos() {
    const filtro = searchInput.value.trim().toLowerCase();

    courseCards.forEach(card => {
        const categoria = card.getAttribute("data-categoria").toLowerCase();
        if (categoria.includes(filtro) || filtro === "") {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
}

// Filtra ao clicar no botão
searchButton.addEventListener("click", filtrarCursos);

// Filtra ao pressionar Enter
searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        filtrarCursos();
    }
});

