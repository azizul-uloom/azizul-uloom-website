
document.addEventListener('DOMContentLoaded', () => {
  const bar = document.getElementById('barChart');
  const pie = document.getElementById('pieChart');
  if (bar || pie) {
    const labels = ['হিফজ', 'কিরাআত', 'কিতাব বিভাগ', 'দাওরায়ে হাদিস'];
    const data = [120, 90, 140, 60]; // <-- আপনার ডেটা এখানে বদলান

    if (bar) {
      new Chart(bar, {
        type: 'bar',
        data: { labels, datasets: [{ label: 'শিক্ষার্থীর সংখ্যা', data }] },
        options: { responsive: true, plugins:{ legend:{ display:false } } }
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
});
