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
    const select = (i, focus) => {
      tabs.forEach((t, j) => {
        const on = i === j;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
        $('#' + t.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) tabs[i].focus();
      try {
        tabs[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } catch (_) {}
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') select((i + 1) % tabs.length, true);
        if (e.key === 'ArrowLeft') select((i - 1 + tabs.length) % tabs.length, true);
      });
    });
    if (tabs[todayIdx]) select(todayIdx);
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

  /* Ücretsiz Numune Tadım Seferi Formu -> WhatsApp */
  const sampleForm = $('#sample-form');
  if (sampleForm) {
    const note = $('#sample-note');
    sampleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const firma = (sampleForm.elements['firma']?.value || '').trim();
      const yetkili = (sampleForm.elements['yetkili']?.value || '').trim();
      const bolge = sampleForm.elements['bolge']?.value || 'Gebze';
      if (!firma || !yetkili) {
        if (note) {
          note.className = 'sample-note err';
          note.textContent = 'Lütfen firma adınızı ve yetkili telefon bilginizi yazın.';
        }
        return;
      }
      const msg = [
        'Merhaba Topçular Yemek, fabrikamız için 1 günlük 4 çeşit ÜCRETSİZ SICAK NUMUNE tadım menüsü talep ediyoruz.',
        '',
        `• Firma / Fabrika: ${firma}`,
        `• Yetkili & İletişim: ${yetkili}`,
        `• Lokasyon / OSB: ${bolge}`,
        '',
        'Tadım menüsü ve servis detayları için bilgi alabilir miyiz?',
      ].join('\n');
      if (note) {
        note.className = 'sample-note ok';
        note.textContent = 'Tadım talebiniz oluşturuldu, WhatsApp açılıyor…';
      }
      window.open(`https://wa.me/${window.SITE.wa}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    });
  }
})();


