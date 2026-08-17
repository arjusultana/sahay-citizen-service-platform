// Sahay 

document.addEventListener('DOMContentLoaded', function () {

  // Date/time 
  const dateTimeEl = document.getElementById('date-time');
  function updateDateTime() {
    if (!dateTimeEl) return;
    const now = new Date();
    dateTimeEl.textContent =
      now.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }) +
      ' · ' +
      now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }
  updateDateTime();
  setInterval(updateDateTime, 30000);

  // Dark mode toggle
  const darkToggle = document.getElementById('darkToggle');
  if (darkToggle) {
    darkToggle.addEventListener('change', function () {
      document.documentElement.classList.toggle('dark');
    });
  }

  // Directory preview: category filter 
  const dirChips = document.querySelectorAll('.dir-chip');
  const dirItems = document.querySelectorAll('.dir-item');
  dirChips.forEach(chip => {
    chip.addEventListener('click', function () {
      dirChips.forEach(c => c.classList.remove('bg-teal', 'text-white'));
      dirChips.forEach(c => c.classList.add('bg-white', 'dark:bg-white/10', 'text-ink/70', 'dark:text-paper/70'));
      chip.classList.remove('bg-white', 'dark:bg-white/10', 'text-ink/70', 'dark:text-paper/70');
      chip.classList.add('bg-teal', 'text-white');

      const filter = chip.getAttribute('data-filter');
      dirItems.forEach(item => {
        const match = filter === 'all' || item.getAttribute('data-category') === filter;
        item.style.display = match ? 'flex' : 'none';
      });
    });
  });

  // Directory preview: live search
  const dirSearch = document.getElementById('dirSearch');
  if (dirSearch) {
    dirSearch.addEventListener('input', function () {
      const q = dirSearch.value.toLowerCase();
      dirItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? 'flex' : 'none';
      });
    });
  }

  // Directory preview: favorite toggle
  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const isFav = btn.textContent === '♥';
      btn.textContent = isFav ? '♡' : '♥';
      btn.classList.toggle('text-gold', !isFav);
      btn.classList.toggle('text-ink/30', isFav);
    });
  });

  // Directory preview: copy number
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const number = btn.getAttribute('data-number');
      navigator.clipboard?.writeText(number);
      const icon = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i>';
      setTimeout(() => { btn.innerHTML = icon; }, 1200);
    });
  });

  // Password show/hide (login page)
  const pwToggle = document.getElementById('pwToggle');
  const pwInput = document.getElementById('pw');
  if (pwToggle && pwInput) {
    pwToggle.addEventListener('click', function () {
      pwInput.type = pwInput.type === 'password' ? 'text' : 'password';
      pwToggle.classList.toggle('fa-eye');
      pwToggle.classList.toggle('fa-eye-slash');
    });
  }

});