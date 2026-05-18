(function () {
  const h2 = document.querySelector('.hero h2');
  if (!h2) return;

  function fit() {
    h2.style.fontSize = '';
    const w = h2.parentElement.getBoundingClientRect().width;
    if (w === 0) return;
    let lo = 8, hi = 500;
    while (hi - lo > 0.25) {
      const mid = (lo + hi) / 2;
      h2.style.fontSize = mid + 'px';
      if (h2.scrollWidth <= w) lo = mid;
      else hi = mid;
    }
    h2.style.fontSize = lo + 'px';
  }

  new ResizeObserver(fit).observe(h2.parentElement);
  fit();
})();
