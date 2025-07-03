function toggleMenu() {
    document.getElementById("overlay").style.width = "100%";
}

function closeMenu() {
    document.getElementById("overlay").style.width = "0%";
}


document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementsByClassName("close")[0];

    

    // Modal oynani yopish
    closeModalBtn.onclick = function () {
        modal.style.display = "none";
    }

    // Modal tashqarisiga bosilganda modal oynani yopish
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});