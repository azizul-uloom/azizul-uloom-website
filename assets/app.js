document.addEventListener('DOMContentLoaded', () => {
  // === Mobile Menu Toggle ===
  const menuToggle = document.getElementById('menuToggle');
  const siteMenu = document.getElementById('site-menu');

  if (menuToggle && siteMenu) {
    menuToggle.addEventListener('click', () => {
      siteMenu.classList.toggle('active');

      // Accessibility update
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !expanded);
    });
  }

  // === Chart Initialization ===
  const bar = document.getElementById('barChart');
  const pie = document.getElementById('pieChart');

  if (bar || pie) {
    const labels = ['হিফজ', 'কিরাআত', 'কিতাব বিভাগ', 'দাওরায়ে হাদিস'];
    const data = [120, 90, 140, 60]; // <-- আপনার ডেটা এখানে পরিবর্তন করুন

    if (bar) {
      new Chart(bar, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'শিক্ষার্থীর সংখ্যা',
            data,
            backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#9c27b0']
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } }
        }
      });
    }

    if (pie) {
      new Chart(pie, {
        type: 'pie',
        data: {
          labels,
          datasets: [{
            data,
            backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#9c27b0']
          }]
        },
        options: { responsive: true }
      });
    }
  }
});
