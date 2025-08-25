document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  if (document.getElementById("studentChart")) {
    const ctx = document.getElementById("studentChart").getContext("2d");
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['হিফজ', 'আলিম', 'ফাযিল'],
        datasets: [{
          label: 'শিক্ষার্থী সংখ্যা',
          data: [50, 30, 20],
          backgroundColor: ['#4caf50', '#2196f3', '#ff9800']
        }]
      }
    });
  }
});
