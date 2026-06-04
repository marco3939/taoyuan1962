/* 等待的天空 v9.4 — 主腳本 */

// === Cloudflare Web Analytics（訪客統計）===
// 使用說明：登入 Cloudflare → Web Analytics → 新增網站
//   https://marco3939.github.io/taoyuan1962/ → 複製 token 貼到下方即可啟用。
// token 為公開的網站識別碼，可安全寫在前端；留空則不載入、不影響網站。
const CF_BEACON_TOKEN = ''; // ← 把 Cloudflare 給的 token 貼在這對引號中間
(function loadCloudflareAnalytics() {
  if (!CF_BEACON_TOKEN) return;
  const s = document.createElement('script');
  s.defer = true;
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  s.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_BEACON_TOKEN }));
  (document.head || document.documentElement).appendChild(s);
})();

// === KPI 數字計數動畫 ===
function animateCounters() {
  const counters = document.querySelectorAll('.kpi-num');
  if (!counters.length) return;
  counters.forEach(el => {
    const target = parseFloat(el.dataset.target || el.textContent);
    if (isNaN(target)) return;
    const duration = 1800;
    const startTs = performance.now();
    const startVal = 0;
    const isInt = Number.isInteger(target);
    function tick(now) {
      const elapsed = now - startTs;
      const t = Math.min(1, elapsed / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      const val = startVal + (target - startVal) * ease;
      el.textContent = isInt ? Math.round(val).toLocaleString() : val.toFixed(1);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// === IntersectionObserver Reveal ===
function setupReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}

// === 觸發 KPI 計數一次 ===
function setupKPI() {
  const strip = document.querySelector('.kpi-strip');
  if (!strip) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounters();
        io.disconnect();
      }
    });
  }, { threshold: 0.3 });
  io.observe(strip);
}

// === 滾動偵測導覽列縮小 ===
function setupNav() {
  const nav = document.querySelector('.topnav');
  if (!nav) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 80);
    lastY = y;
  }, { passive: true });
}

// === 啟動 ===
document.addEventListener('DOMContentLoaded', () => {
  setupReveal();
  setupKPI();
  setupNav();
});
