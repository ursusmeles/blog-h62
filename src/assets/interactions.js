const toggle = document.querySelector('#theme-toggle');
if (toggle) {
  const sync = () => toggle.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
  sync();
  toggle.removeAttribute('data-pending');
  toggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    sync();
    try { localStorage.setItem('helio-theme-pref', next); } catch {}
  });
}
for (const share of document.querySelectorAll('share-actions')) {
  const copy = share.querySelector('[data-copy-trigger]');
  const input = share.querySelector('[data-copy-target]');
  const status = share.querySelector('[data-share-status]');
  let feedbackTimer;
  const feedback = (message) => {
    clearTimeout(feedbackTimer);
    status.textContent = message;
    feedbackTimer = setTimeout(() => { status.textContent = ''; }, 2500);
  };
  if (copy && input && status) {
    copy.removeAttribute('data-pending');
    copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(input.value);
        feedback('Skopiowano link.');
      } catch {
        input.focus(); input.select();
        feedback('Skopiuj zaznaczony link ręcznie.');
      }
    });
  }
  const shareButton = share.querySelector('[data-share-button]');
  if (navigator.share && shareButton && status) {
    shareButton.removeAttribute('data-pending');
    share.querySelector('[data-share-button]').addEventListener('click', async () => {
      try { await navigator.share({title: share.dataset.title, text: share.dataset.text, url: share.dataset.url}); }
      catch (error) { if (error.name !== 'AbortError') feedback('Nie udało się udostępnić. Skopiuj link.'); }
    });
  }
}
