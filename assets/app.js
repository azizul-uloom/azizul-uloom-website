document.addEventListener('DOMContentLoaded', () => {
  /* ===== Mobile menu FIRST (always runs) ===== */
  const toggleBtn = document.getElementById('menuToggle');
  const menu      = document.getElementById('site-menu');
  const brand     = document.querySelector('.brand');

  if (toggleBtn && menu) {
    const closeMenu = () => {
      menu.classList.remove('show');
      toggleBtn.setAttribute('aria-expanded', 'false');
    };
    const openMenu = () => {
      menu.classList.add('show');
      toggleBtn.setAttribute('aria-expanded', 'true');
    };
    const toggleMenu = () => {
      const isOpen = menu.classList.contains('show');
      isOpen ? closeMenu() : openMenu();
    };

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!menu.classList.contains('show')) return;
      const inside = menu.contains(e.target) || toggleBtn.contains(e.target) || (brand && brand.contains(e.target));
      if (!inside) closeMenu();
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

    // Close after link click
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    // Reset on desktop resize
    const mq = window.matchMedia('(min-width: 769px)');
    const handleMQ = (ev) => { if (ev.matches) closeMenu(); };
    if (mq.addEventListener) mq.addEventListener('change', handleMQ); else mq.addListener(handleMQ);
  }

  /* ===== Charts (guarded so errors can't break menu) ===== */
  try {
    const bar = document.getElementById('barChart');
    const pie = document.getElementById('pieChart');
    const hasChartLib = typeof window.Chart === 'function';

    if (hasChartLib && (bar || pie)) {
      const labels = ['হিফজ', 'কিরাআত', 'কিতাব বিভাগ', 'দাওরায়ে হাদিস'];
      const data   = [120, 90, 140, 60]; // <-- আপনার ডেটা এখানে বদলান

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
  } catch (err) {
    console.warn('Chart init skipped:', err);
  }
});
