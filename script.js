document.addEventListener("DOMContentLoaded", () => {
    const stats = {
        "হিফজ বিভাগ": 120,
        "আলিম বিভাগ": 80,
        "দাওরায়ে হাদিস": 40
    };
    let container = document.getElementById("student-stats");
    let html = "<ul>";
    for (let dept in stats) {
        html += `<li>${dept}: ${stats[dept]} জন</li>`;
    }
    html += "</ul>";
    container.innerHTML = html;
});