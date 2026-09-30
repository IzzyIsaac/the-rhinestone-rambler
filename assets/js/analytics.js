// This site's own GA4 stream. Google Analytics is loaded only after a visitor opts in.
(() => {
  const measurementId = 'G-GVCBTM1FSR';
  const choiceKey = 'rhinestone-rambler-analytics-choice';
  let choice = null;
  let tagLoaded = false;

  try { choice = localStorage.getItem(choiceKey); } catch (_) { /* Storage may be unavailable. */ }

  function remember(value) {
    choice = value;
    try { localStorage.setItem(choiceKey, value); } catch (_) { /* Keep this-page choice only. */ }
  }

  function startAnalytics() {
    if (tagLoaded) {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
      return;
    }
    tagLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', measurementId);
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  function declineAnalytics() {
    if (tagLoaded) window.gtag('consent', 'update', { analytics_storage: 'denied' });
    // Remove this site's GA cookies when a visitor changes a previous choice.
    const host = location.hostname;
    const domains = [host, `.${host}`, '.therhinestonerambler.com'];
    for (const item of document.cookie.split(';')) {
      const name = item.trim().split('=')[0];
      if (!/^_ga(?:_|$)/.test(name)) continue;
      for (const domain of domains) {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
      }
    }
    // Unload an already running tag as soon as consent is withdrawn.
    if (tagLoaded) location.reload();
  }

  const panel = document.createElement('aside');
  panel.className = 'analytics-choice';
  panel.setAttribute('aria-label', 'Privacy choices');
  panel.hidden = true;
  panel.innerHTML = '<p><strong>Help us improve your visit?</strong><br>With your permission, we use Google Analytics to understand visits and which pages are useful. You can change this choice any time.</p><div class="analytics-actions"><button type="button" data-analytics-decline>Not now</button><button type="button" data-analytics-accept>Allow analytics</button></div>';
  document.body.appendChild(panel);

  const showChoices = () => {
    panel.hidden = false;
    panel.querySelector('[data-analytics-accept]').focus();
  };
  panel.querySelector('[data-analytics-accept]').addEventListener('click', () => {
    remember('granted');
    startAnalytics();
    panel.hidden = true;
  });
  panel.querySelector('[data-analytics-decline]').addEventListener('click', () => {
    remember('denied');
    declineAnalytics();
    panel.hidden = true;
  });
  document.querySelectorAll('[data-privacy-settings]').forEach((button) => {
    button.addEventListener('click', showChoices);
  });

  if (choice === 'granted') startAnalytics();
  else if (choice !== 'denied') showChoices();
})();
