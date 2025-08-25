document.addEventListener('DOMContentLoaded', () => {
  /* ===== Charts (kept as v2) ===== */
  const bar = document.getElementById('barChart');
  const pie = document.getElementById('pieChart');

  if (bar || pie) {
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

  /* ===== Smart, consistent mobile menu ===== */
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
      const clickedInside = menu.contains(e.target) || toggleBtn.contains(e.target) || (brand && brand.contains(e.target));
      if (!clickedInside) closeMenu();
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Close after selecting a link (for single-page navigation feel)
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => closeMenu());
    });

    // Reset when moving to desktop
    const mq = window.matchMedia('(min-width: 769px)');
    const handleMQ = (ev) => { if (ev.matches) closeMenu(); };
    mq.addEventListener ? mq.addEventListener('change', handleMQ) : mq.addListener(handleMQ);
  }
});
