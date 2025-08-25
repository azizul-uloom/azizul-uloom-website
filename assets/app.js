document.addEventListener('DOMContentLoaded', () => {
  // Chart rendering (bar & pie)
  const bar = document.getElementById('barChart');
  const pie = document.getElementById('pieChart');
  if (bar || pie) {
    const labels = ['হিফজ', 'কিরাআত', 'কিতাব বিভাগ', 'দাওরায়ে হাদিস'];
    const data = [120, 90, 140, 60]; // <-- নিজের ডেটা এখানে দিন

    if (bar) {
      new Chart(bar, {
        type: 'bar',
        data: { labels, datasets: [{ label: 'শিক্ষার্থীর সংখ্যা', data }] },
        options: { responsive: true, plugins: { legend: { display: false } } }
      });
    }
    if (pie) {
      new Chart(pie, {
        type: 'pie',
        data: { labels, datasets: [{ data }] },
        options: { responsive: true }
      });
    }
  }

  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }
});
