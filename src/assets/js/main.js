/* Topçular Yemek – etkileşimler (bağımlılıksız, ~3KB) */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const root = document.documentElement;

  /* Header gölgesi */
  const header = $('#site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 10);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobil menü */
  const toggle = $('#nav-toggle');
  if (toggle) {
    const setOpen = (open) => {
      root.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
    };
    toggle.addEventListener('click', () => setOpen(!root.classList.contains('nav-open')));
    $$('#main-nav a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && setOpen(false));
  }

  /* Scroll ile beliren öğeler */
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }),
      { rootMargin: '200px 0px 200px 0px', threshold: 0 }
    );
    reveals.forEach((el) => io.observe(el));
    requestAnimationFrame(() => {
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 250) {
          el.classList.add('in');
        }
      });
    });
    setTimeout(() => reveals.forEach((el) => el.classList.add('in')), 800);
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  /* İstatistik sayaç animasyonu */
  const statEls = $$('.stat strong');
  if (statEls.length && 'IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const target = e.target;
          statObserver.unobserve(target);
          const text = target.textContent.trim();
          const hasPlus = text.includes('+');
          const hasPercent = text.includes('%');
          const num = parseInt(text.replace(/[^0-9]/g, ''), 10);
          if (isNaN(num)) return;
          const dur = 1500;
          const startTime = performance.now();
          const step = (now) => {
            const progress = Math.min(1, (now - startTime) / dur);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(ease * num);
            const formatted = current >= 1000 ? current.toLocaleString('tr-TR') : current;
            target.textContent = (hasPercent ? '%' : '') + formatted + (hasPlus ? '+' : '');
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.3 }
    );
    statEls.forEach((el) => statObserver.observe(el));
  }

  /* Hero 3D kart eğim efekti */
  const heroVisual = $('.hero-visual');
  const heroImgWrap = $('.hero-img-wrap', heroVisual);
  if (heroVisual && heroImgWrap && window.matchMedia('(hover: hover) and (min-width: 960px)').matches) {
    heroVisual.addEventListener('mousemove', (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroImgWrap.style.transform = `perspective(1000px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-2px)`;
    });
    heroVisual.addEventListener('mouseleave', () => {
      heroImgWrap.style.transform = '';
    });
  }

  /* Menü sekmeleri (erişilebilir tablist) */
  const todayIdx = Math.max(0, new Date().getDay() - 1); // Pazar → Pazartesi
  $$('[data-tabs]').forEach((wrap) => {
    const tabs = $$('[role="tab"]', wrap);
    const select = (i, focus, shouldScroll = false) => {
      tabs.forEach((t, j) => {
        const on = i === j;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
        const panel = $('#' + t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (focus) tabs[i].focus();
      if (shouldScroll) {
        try {
          const list = wrap.querySelector('.tab-list');
          if (list) {
            const tabLeft = tabs[i].offsetLeft;
            const tabWidth = tabs[i].offsetWidth;
            list.scrollTo({ left: tabLeft - list.offsetWidth / 2 + tabWidth / 2, behavior: 'smooth' });
          }
        } catch (_) {}
      }
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i, false, true));
      t.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') select((i + 1) % tabs.length, true, true);
        if (e.key === 'ArrowLeft') select((i - 1 + tabs.length) % tabs.length, true, true);
      });
    });
    if (tabs[todayIdx]) select(todayIdx, false, false);
  });

  /* Hero: bugünün menüsü */
  const todayCard = $('[data-today-menu]');
  if (todayCard) {
    try {
      const days = JSON.parse(todayCard.dataset.todayMenu || '[]');
      const items = days[todayIdx] || days[0];
      if (items) $('ul', todayCard).innerHTML = items.map((t) => `<li>${t.replace(/</g, '&lt;')}</li>`).join('');
    } catch (_) {}
  }

  /* Teklif formu → WhatsApp */
  const form = $('#teklif');
  if (form) {
    const msg = $('#form-msg');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(form));
      const required = ['ad', 'tel', 'kisi'];
      let ok = true;
      required.forEach((n) => {
        const el = form.elements[n];
        const bad = !String(d[n] || '').trim();
        el.classList.toggle('invalid', bad);
        el.setAttribute('aria-invalid', bad);
        if (bad) ok = false;
      });
      if (!ok) {
        msg.className = 'form-msg err';
        msg.textContent = 'Lütfen yıldızlı (*) alanları doldurun.';
        return;
      }
      const text = [
        'Merhaba, toplu yemek teklifi almak istiyorum.',
        '',
        `• Ad Soyad: ${d.ad}`,
        d.firma ? `• Firma: ${d.firma}` : '',
        `• Telefon: ${d.tel}`,
        `• Günlük kişi sayısı: ${d.kisi}`,
        `• Hizmet: ${d.hizmet}`,
        `• Bölge: ${d.bolge}`,
        d.mesaj ? `• Not: ${d.mesaj}` : '',
      ].filter(Boolean).join('\n');
      msg.className = 'form-msg ok';
      msg.textContent = 'WhatsApp açılıyor… Mesajı göndermeyi unutmayın.';
      trackConversion('submit_quote_form', `${d.kisi} - ${d.hizmet} - ${d.bolge}`);
      window.open(`https://wa.me/${window.SITE.wa}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    });
  }

  /* Canlı Hızlı Teklif Hesaplayıcı */
  const calcCard = $('.calc-card');
  if (calcCard) {
    const summaryText = $('#calc-summary-text');
    const waBtn = $('#calc-wa-btn');
    const chips = $$('.calc-chip', calcCard);

    const state = {
      kisi: '20-50 Kişi',
      hizmet: '4 Çeşit Tabldot',
      bolge: 'Gebze Merkez',
    };

    const updateCalc = () => {
      if (summaryText) summaryText.textContent = `${state.kisi} · ${state.hizmet} · ${state.bolge}`;
      if (waBtn) {
        const msg = `Merhaba Topçular Yemek, ${state.kisi} için ${state.hizmet} toplu yemek teklifi almak istiyoruz. Bölge: ${state.bolge}. Bilgi ve fiyat alabilir miyiz?`;
        waBtn.href = `https://wa.me/${window.SITE.wa}?text=${encodeURIComponent(msg)}`;
      }
    };

    if (waBtn) {
      waBtn.addEventListener('click', () => {
        trackConversion('calculator_quote_whatsapp', `${state.kisi} - ${state.hizmet} - ${state.bolge}`);
      });
    }

    chips.forEach((btn) => {
      btn.addEventListener('click', () => {
        const groupEl = btn.closest('[data-group]');
        if (!groupEl) return;
        const group = groupEl.dataset.group;
        $$('.calc-chip', groupEl).forEach((s) => s.classList.remove('active'));
        btn.classList.add('active');
        state[group] = btn.dataset.val;
        updateCalc();
      });
    });
  }

  /* GA4 Dönüşüm ve Etkinlik Takibi */
  function trackConversion(action, label = '') {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'B2B_Conversion',
        event_label: label,
        lead_channel: action,
      });
      window.gtag('event', action, {
        event_label: label,
      });
    }
  }

  // Telefon tıklamaları
  $$('a[href^="tel:"]').forEach((a) => {
    a.addEventListener('click', () => {
      trackConversion('click_to_call', a.getAttribute('href') || '');
    });
  });

  // WhatsApp tıklamaları (harici linkler ve butonlar)
  $$('a[href*="wa.me"]').forEach((a) => {
    a.addEventListener('click', () => {
      trackConversion('click_to_whatsapp', a.textContent.trim() || 'WhatsApp');
    });
  });
})();



