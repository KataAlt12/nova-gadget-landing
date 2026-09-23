/* ═══════════════════════════════════════════════════════════
   TEMPLATE « SITE IMMERSIF » — content.js
   ► L'UNIQUE FICHIER À RÉÉCRIRE pour produire un nouveau site.
   Renommer en content.js dans le projet cible. La partie
   « injection » en bas de fichier est le moteur de remplissage :
   la copier TELLE QUELLE, ne réécrire que window.SITE_CONTENT.

   Schéma narratif (rôle de conversion de chaque bloc) :
   1. ACCROCHE       — hook : promesse + identité en 3 secondes
   2. POSITIONNEMENT — positioning : ce que je fais, pour qui, où
   3. DÉMARCHE       — manifesto : pourquoi moi (différenciation)
   4. PREUVE         — proof : réalisations (masonry) OU features (bento)
   5. DEVISE         — motto : 3 mots-clés géants + légendes
   6-7. PROCESSUS    — universes : « X en 3 étapes » + visuels posés
   8. PREUVE SOCIALE — testimonial : un client parle
   9. OBJECTIONS     — objections : « Pas de… Juste… »
   10. CONVERSION    — contact : e-mail + réassurance
   ═══════════════════════════════════════════════════════════ */

window.SITE_CONTENT = {

  brand: {
    name: 'Nova Gadgets',
    title: 'Nova Gadgets — Gadgets électroniques, Casablanca',
    description: 'Gadgets électroniques tendance, testés et sélectionnés pour vous — livrés partout au Maroc.',
    kicker: 'NOVA GADGETS — GADGETS ÉLECTRONIQUES, CASABLANCA',
    copyright: '© 2026 — CASABLANCA, MAROC',
    signature: 'FAITE AVEC ⚡ ET BEAUCOUP DE CAFÉ',
    socials: [
      { label: 'INSTAGRAM ↗', url: 'https://www.instagram.com/novagadgets' },
      { label: 'TIKTOK ↗', url: 'https://www.tiktok.com/@novagadgets' }
    ]
  },

  /* 2 ancres + CTA du header — un mot chacun, CAPS */
  nav: { proof: 'GADGETS', universes: 'PROCESSUS', cta: 'COMMANDER' },

  /* 1 · ACCROCHE — « line1 / line2a [image qui naît et devient
     plein écran] line2b ». Total line2a+line2b : court (nowrap). */
  hook: {
    line1: 'Des objets connectés,',
    line2a: 'avant tout',
    line2b: 'le monde.',
    image: 'images/hero.jpg',
    imageAlt: 'Smartphone, montre connectée et écouteurs sans fil posés à plat',
    floaters: [
      'images/floater-1.jpg',
      'images/floater-2.jpg',
      'images/floater-3.jpg',
      'images/floater-4.jpg',
      'images/floater-5.jpg',
      'images/floater-6.jpg',
      'images/floater-7.jpg',
      'images/floater-8.jpg',
      'images/floater-9.jpg',
      'images/floater-10.jpg'
    ]
  },

  /* 2 · POSITIONNEMENT — ≤ 42 caractères (affiché nowrap, en blanc
     sur l'image plein écran) */
  positioning: 'Gadgets tech, sélectionnés pour vous.',

  /* 3 · DÉMARCHE — [[…]] = ce qu'entoure l'ovale dessiné :
     2 à 3 MOTS MAXIMUM, JAMAIS une phrase entière (l'ovale est un tracé
     à la main : au-delà de 3 mots il s'étire et cesse d'être lisible). */
  manifesto: {
    text: 'Nova Gadgets repère et teste les objets connectés qui comptent, avant tout le monde. Notre sélection : uniquement des gadgets [[qui valent vraiment]] le coup.'
  },

  /* 4 · PREUVE — layout: 'masonry' (8 photos de réalisations)
     ou 'bento' (4 features illustrées : big, tall, tall, big) */
  proof: {
    layout: 'masonry',
    kicker: 'SÉLECTION DU MOMENT',
    title: 'Nos gadgets phares',
    sub: 'Huit objets connectés qu’on a testés et adoptés.',
    meta: 'HUIT GADGETS — ÉDITION 2026',
    /* — layout 'masonry' : exactement 8 items — */
    projects: [
      { img: 'images/product-1.jpg', title: 'Écouteurs sans fil ANC', meta: 'AUDIO — 2026' },
      { img: 'images/product-2.jpg', title: 'Montre connectée sport', meta: 'WEARABLE — 2026' },
      { img: 'images/product-3.jpg', title: 'Lampe LED connectée', meta: 'MAISON — 2025' },
      { img: 'images/product-4.jpg', title: 'Chargeur sans fil rapide', meta: 'ACCESSOIRE — 2026' },
      { img: 'images/product-5.jpg', title: 'Enceinte portable', meta: 'AUDIO — 2025' },
      { img: 'images/product-6.jpg', title: 'Drone caméra compact', meta: 'CAMÉRA — 2026' },
      { img: 'images/product-7.jpg', title: 'Clavier mécanique compact', meta: 'BUREAU — 2025' },
      { img: 'images/product-8.jpg', title: 'Casque VR immersif', meta: 'GAMING — 2026' }
    ],
    /* — layout 'bento' : non utilisé (layout masonry) — */
    features: [
      { size: 'big',  illu: 'illustrations/fe-1.svg', title: 'Pilier 1', meta: 'SPEC — DÉTAIL — DÉTAIL' },
      { size: 'tall', illu: 'illustrations/fe-2.svg', title: 'Pilier 2', meta: 'SPEC — DÉTAIL' },
      { size: 'tall', illu: 'illustrations/fe-3.svg', title: 'Pilier 3', meta: 'SPEC — DÉTAIL' },
      { size: 'big',  illu: 'illustrations/fe-4.svg', title: 'Pilier 4', meta: 'SPEC — DÉTAIL' }
    ]
  },

  /* 5 · DEVISE — 3 mots (train horizontal scrubé), hint d'une ligne */
  motto: {
    kicker: 'CE QUI GUIDE CHAQUE SÉLECTION',
    words: [
      { word: 'Testé', hint: 'Chaque gadget passe entre nos mains avant votre commande.' },
      { word: 'Rapide', hint: 'Expédié sous 24 h, livré partout au Maroc.' },
      { word: 'Garanti', hint: 'Satisfait ou remboursé, sans discussion.' }
    ]
  },

  /* 6-7 · PROCESSUS — « introA introB [visuel] introC » puis les étapes.
     Scène 100 % TYPOGRAPHIQUE : compteur géant, aucune image.
     SEULE `image` est utilisée — c'est le visuel du zoom d'intro,
     1800×1200 (3:2), celui que le rideau de lames vient couper. */
  universes: {
    introA: 'Un',
    introB: 'gadget,',
    introC: '3 étapes.',
    cta: 'Commander →',
    image: 'images/universes.jpg',
    items: [
      { name: 'Je choisis', meta: 'ÉTAPE — 01', desc: 'Je parcours la sélection et je trouve le gadget qui me correspond.' },
      { name: 'Je commande', meta: 'ÉTAPE — 02', desc: 'Paiement sécurisé, confirmation immédiate par e-mail.' },
      { name: 'Je reçois', meta: 'ÉTAPE — 03', desc: 'Livraison sous 24 à 48 h, partout au Maroc.' }
    ]
  },

  /* 8 · PREUVE SOCIALE — un avis client, court et crédible.
     figure et kicker INVENTÉS (aucune donnée client fournie) — à valider
     avant mise en ligne. */
  testimonial: {
    kicker: 'CLIENTE, CASABLANCA',
    figure: '+24',
    unit: 'h',
    quote: 'Ma montre est arrivée le lendemain, parfaitement emballée, et elle fonctionne toujours aussi bien un an après.',
    author: 'SALMA B. — CLIENTE NOVA GADGETS'
  },

  /* 9 · OBJECTIONS — 3 freins + la chute (pill = mot entouré) */
  objections: {
    items: [
      'Pas de gadget qui finit au fond d’un tiroir.',
      'Pas de livraison qui traîne des semaines.',
      'Pas de service client injoignable.'
    ],
    finale: 'Juste des objets qui',
    pill: 'servent vraiment.'
  },

  /* 10 · CONVERSION */
  contact: {
    kicker: 'UNE QUESTION AVANT DE COMMANDER ?',
    email: 'contact@novagadgets.com',
    reassurance: 'RÉPONSE SOUS 24 H — LIVRAISON PARTOUT AU MAROC'
  },

  /* traînée sous la souris (finale) — 20 visuels, petits formats mixtes */
  trail: [
    'images/trail-1.jpg', 'images/trail-2.jpg',
    'images/trail-3.jpg', 'images/trail-4.jpg',
    'images/trail-5.jpg', 'images/trail-6.jpg',
    'images/trail-7.jpg', 'images/trail-8.jpg',
    'images/trail-9.jpg', 'images/trail-10.jpg',
    'images/trail-11.jpg', 'images/trail-12.jpg',
    'images/trail-13.jpg', 'images/trail-14.jpg',
    'images/trail-15.jpg', 'images/trail-16.jpg',
    'images/trail-17.jpg', 'images/trail-18.jpg',
    'images/trail-19.jpg', 'images/trail-20.jpg'
  ]
};

/* ═══════════════════════════════════════════════════════════
   INJECTION — NE PAS MODIFIER (remplit le DOM avant app.js)
   ═══════════════════════════════════════════════════════════ */
(() => {
  const C = window.SITE_CONTENT;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const set = (sel, txt) => { const el = $(sel); if (el) el.textContent = txt; };

  document.title = C.brand.title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', C.brand.description);

  // chrome
  set('.loader-wordmark', C.brand.name);
  set('.dock-wordmark', C.brand.name);
  set('.dock-link[href="#travaux"]', C.nav.proof);
  set('.dock-link[href="#explorer"]', C.nav.universes);
  set('.dock-cta', C.nav.cta);

  // 1 · accroche
  set('#heroKicker', C.brand.kicker);
  set('#heroLine1', C.hook.line1);
  const hls = $$('#heroLine2 .hl');
  if (hls.length === 2) { hls[0].textContent = C.hook.line2a; hls[1].textContent = C.hook.line2b; }
  const g1 = $('#grow1 img');
  if (g1) { g1.src = C.hook.image; g1.alt = C.hook.imageAlt; }
  $$('.floaters .fl img').forEach((img, i) => { if (C.hook.floaters[i]) img.src = C.hook.floaters[i]; });

  // 2 · positionnement (un span par mot)
  const intro = $('#spotIntro');
  if (intro) intro.innerHTML = C.positioning.split(' ').map((w) => `<span>${w}</span>`).join(' ');

  // 3 · démarche
  const fill = $('#fillText');
  if (fill) {
    fill.innerHTML = C.manifesto.text.replace(
      /\[\[(.+?)\]\]/,
      '<span class="boxed" id="boxedPhrase">$1<svg class="box-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="boxPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>'
    );
  }

  // 4 · preuve : masonry (8 photos) ou bento (4 features big/tall/tall/big)
  const head = $$('.coll-head > *');
  if (head.length === 4) {
    head[0].textContent = C.proof.kicker;
    head[1].textContent = C.proof.title;
    head[2].textContent = C.proof.sub;
    head[3].textContent = C.proof.meta;
  }
  const grid = $('#collGrid');
  if (grid && C.proof.layout === 'bento') {
    grid.className = 'bento-grid';
    grid.innerHTML = C.proof.features.map((f) =>
      `<figure class="card${f.size ? ' b-' + f.size : ''}"><div class="card-img"><img src="${f.illu}" alt="${f.title}"></div><figcaption>${f.title}<span class="mono">${f.meta}</span></figcaption></figure>`
    ).join('');
  } else if (grid) {
    grid.className = 'coll-grid';
    const SPEEDS = [-0.05, 0.06, -0.028, 0.085];
    grid.innerHTML = SPEEDS.map((s, ci) =>
      `<div class="col" data-pspeed="${s}">` +
      C.proof.projects.slice(ci * 2, ci * 2 + 2).map((p) =>
        `<figure class="card"><div class="card-img"><img src="${p.img}" alt="${p.title} — ${p.meta}"></div><figcaption>${p.title}<span class="mono">${p.meta}</span></figcaption></figure>`
      ).join('') + '</div>'
    ).join('');
  }

  // 5 · devise (train de mots-clés)
  set('#mottoKicker', C.motto.kicker);
  const mtrack = $('#mottoTrack');
  if (mtrack) mtrack.innerHTML = C.motto.words.map((w) => `<span class="mw">${w.word}</span>`).join('');

  // 6-7 · processus immersif (visuels posés un à un)
  set('#nw1', C.universes.introA);
  set('#nw2', C.universes.introB);
  set('#nw3', C.universes.introC);
  const g2 = $('#grow2 img');
  if (g2) g2.src = C.universes.image || (C.universes.items[0] || {}).img || g2.src;
  const psteps = $('#psteps');
  if (psteps) {
    psteps.innerHTML = C.universes.items.map((u) =>
      `<div class="pstep"><span class="pstep-meta mono ash">${u.meta}</span><h3>${u.name}</h3><p>${u.desc || ''}</p></div>`
    ).join('');
  }
  const sCta = $('#stepsCtaLink');
  if (sCta) sCta.childNodes[0].textContent = C.universes.cta;

  // 8 · preuve sociale — le chiffre qui frappe
  set('#figKicker', C.testimonial.kicker || '');
  const figM = String(C.testimonial.figure || '').trim().match(/^([^\d.,+-]*[+\u2212-]?)\s*(-?[\d.,]+)/);
  set('#figPre', figM ? figM[1] : '');
  set('#figVal', figM ? figM[2] : '');
  set('#figUnit', C.testimonial.unit || '');
  set('#quoteText', C.testimonial.quote);
  set('#quoteAuthor', C.testimonial.author);

  // 9 · objections
  C.objections.items.forEach((t, i) => set('#fs' + (i + 1), t));
  const fs4 = $('#fs4');
  if (fs4) {
    fs4.innerHTML = `${C.objections.finale} <span class="pill" id="pillPhrase">${C.objections.pill}<svg class="pill-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="pillPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>`;
  }
  $$('#trail img').forEach((img, i) => { img.src = C.trail[i % C.trail.length]; });

  // 10 · conversion
  set('.footer-kicker', C.contact.kicker);
  const mail = $('.footer-mail');
  if (mail) { mail.href = 'mailto:' + C.contact.email; mail.querySelector('.footer-mail-text').textContent = C.contact.email; }
  set('.footer-reassurance', C.contact.reassurance);
  const fname = $('#footerName');
  if (fname) { fname.textContent = C.brand.name; fname.setAttribute('aria-label', C.brand.name); }
  const bottom = $$('.footer-bottom > p');
  if (bottom.length === 3) {
    bottom[0].textContent = C.brand.copyright;
    bottom[1].innerHTML = C.brand.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join('&nbsp;&nbsp;&nbsp;');
    bottom[2].textContent = C.brand.signature;
  }
})();
