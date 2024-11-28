document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseover", function () {
            const dropdownContent = this.querySelector(".dropdown-content");
            dropdownContent.style.display = "block";
        });

        dropdown.addEventListener("mouseout", function () {
            const dropdownContent = this.querySelector(".dropdown-content");
            dropdownContent.style.display = "none";
        });
    });
});