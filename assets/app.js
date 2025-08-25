const ctx = document.getElementById('studentChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['হিফজ', 'নাজেরা', 'ইফতা', 'আলিম'],
    datasets: [{
      label: 'শিক্ষার্থী সংখ্যা',
      data: [50, 30, 20, 40],
      backgroundColor: 'rgba(0, 100, 0, 0.7)'
    }]
  }
});
