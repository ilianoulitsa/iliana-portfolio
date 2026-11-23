/* ==========================================================
   Projects — to add work, add an entry here.
   cat:      branding | social | newsletter | print
   color:    the project's colour (card, index row, lightbox)
   ink:      text colour on top of it ("dark" for light colours)
   featured: shown as a big stacking card (keep ~6), with `desc`
   images:   first one is the cover
   ========================================================== */
const CATS = {
  branding:   "Brand Identity",
  social:     "Social Media",
  newsletter: "Newsletter",
  print:      "Print",
};

const L = "img/logos/", S = "img/social_media/", N = "img/newsletter/", F = "img/flyer/";

const PROJECTS = [
  { title: "Agates Winery", cat: "branding", color: "#7A1F3D", featured: true,
    desc: "Label design and identity for a Greek red wine.",
    images: [L + "ahatis/mockup_bottle.jpg", L + "ahatis/Mockup_bottle_wine_agates.jpg", L + "ahatis/logo_mockup_toixos.jpg"] },
  { title: "Little Garden", cat: "branding", color: "#2F6B4F", featured: true,
    desc: "Logo, signage and packaging.",
    images: [L + "little_garden/pinakida.jpg", L + "little_garden/mix.jpg", L + "little_garden/cups.jpg"] },
  { title: "Eco Berries", cat: "social", color: "#4A3B8F", featured: true,
    desc: "An ongoing social media campaign for organic berries and nuts.",
    images: [S + "1.eco/giveaway_blueberies.jpg", S + "1.eco/3+1_logoi_berries.jpg", S + "1.eco/afepsima_mirtilou_4.jpg",
      S + "1.eco/amugdala_wma_17_b.jpg", S + "1.eco/blackberries_j.jpg", S + "1.eco/blueberry_g.jpg",
      S + "1.eco/frozen_mix_berries.jpg", S + "1.eco/giveaway_amigdala_b.jpg", S + "1.eco/karidi_mualo.jpg",
      S + "1.eco/xartis_b.jpg", S + "1.eco/ximos_mirtilou_z.jpg"] },
  { title: "Diadrasi Theatre", cat: "branding", color: "#EE2A4F", featured: true,
    desc: "Logo and collateral for a theatre group.",
    images: [L + "diadrasi/mockup_skini.jpg", L + "diadrasi/mockup_tsanta_flyer.jpg", L + "diadrasi/theatro_mockup.jpg"] },
  { title: "Zen10", cat: "branding", color: "#F26A43", featured: true,
    desc: "Logo, packaging and carrier bags.",
    images: [L + "zen10/box.jpg", L + "zen10/bag.jpg", L + "zen10/fraoules_b.jpg"] },
  { title: "Lulumelon", cat: "newsletter", color: "#F28DB2", ink: "dark", featured: true,
    desc: "Seasonal email newsletters for a kids' fashion brand.",
    images: [N + "lulumelon/lulumelon_xmas_mockup.jpg", N + "lulumelon/lulumelon_cyber_monday_mockup.jpg", N + "lulumelon/lulumelon_mockup.jpg"] },

  { title: "TaskCode", cat: "branding", color: "#0E7C7B",
    images: [L + "taskcode/Business_Card_b.jpg", L + "taskcode/metal.jpg", L + "taskcode/wall.jpg"] },
  { title: "Pharmacy & Beauty", cat: "social", color: "#2C9396",
    images: [S + "2.farmakeio/organic_shop_bodywash_bathfoam.jpg", S + "2.farmakeio/aloe_colors_intothesun.jpg",
      S + "2.farmakeio/avgerinos_body_mist.jpg", S + "2.farmakeio/avgerinos_ekptosi.jpg", S + "2.farmakeio/avgerinos_primer.jpg",
      S + "2.farmakeio/lavish_care_foundation.jpg", S + "2.farmakeio/mesaudaskin_light_clear.jpg",
      S + "2.farmakeio/mesaude_skin_hydraware.jpg", S + "2.farmakeio/miss_kay_aromata.jpg",
      S + "2.farmakeio/natura_siberica_biome_cleanser.jpg", S + "2.farmakeio/rilastil_kremaxerion_lipstick.jpg",
      S + "2.farmakeio/youthlab_masks.jpg", S + "2.farmakeio/youthlab_vit_c.jpg"] },
  { title: "Asklipios Trifold", cat: "print", color: "#1E4FA3",
    images: [F + "asklipios/mockup_mesa.jpg", F + "asklipios/mockup_ola.jpg", F + "asklipios/mockup_piso.jpg"] },
  { title: "Sportswear", cat: "social", color: "#D7263D",
    images: [S + "5.athlitika/trending_now_converce.jpg", S + "5.athlitika/adidas_vs_pace.jpg", S + "5.athlitika/converse_gunaikeio.jpg",
      S + "5.athlitika/converse_paidika.jpg", S + "5.athlitika/game_set_match.jpg", S + "5.athlitika/Puma_ready.jpg",
      S + "5.athlitika/under_armour_gs_lockdown.jpg"] },
  { title: "Eco Newsletter", cat: "newsletter", color: "#7D8B2A",
    images: [N + "eco/xiroi_karpoi.jpg", N + "eco/berries_mockup.jpg", N + "eco/xristougeniatikes_suntages_mockup.jpg"] },
  { title: "Fashion Retail", cat: "social", color: "#E85C8A",
    images: [S + "6.rouxa/summer_sales_cc.jpg", S + "6.rouxa/kapela_oriz.jpg", S + "6.rouxa/key.jpg", S + "6.rouxa/magio_square.jpg",
      S + "6.rouxa/mayfair_karl_tzin_poukamiso.jpg", S + "6.rouxa/mayfair_pinko_mini_love_bag.jpg"] },
  { title: "Home Textiles", cat: "social", color: "#25A9B8",
    images: [S + "3.eidi_spitiou/palamaiki_paidiki_petseta_thalassis.jpg", S + "3.eidi_spitiou/guy_laroche_petsetes_thalassis.jpg",
      S + "3.eidi_spitiou/nef_nef_paploma_mono_will_dance.jpg", S + "3.eidi_spitiou/petsetes_b.jpg",
      S + "3.eidi_spitiou/rixtari_kanape_horizontal.jpg", S + "3.eidi_spitiou/summer_giveaway.jpg"] },
  { title: "Digital Markt", cat: "print", color: "#F59E0B", ink: "dark",
    images: [F + "digital_markt/mockup_b.jpg"] },
  { title: "Respawn Paintball", cat: "social", color: "#FF5A1F",
    images: [S + "7.paintball/respawn.jpg",
      S + "7.paintball/SnapInsta.to_488205702_1171420551595541_6270127727000922556_n.jpg",
      S + "7.paintball/SnapInsta.to_488961052_1177546350982961_2902190016765277787_n.jpg",
      S + "7.paintball/SnapInsta.to_489456913_1176814567722806_2446642293216048711_n.jpg",
      S + "7.paintball/SnapInsta.to_490022059_1179433497460913_5514216598474655233_n.jpg"] },
  { title: "Real Estate", cat: "social", color: "#1F9E8F",
    images: [S + "4.mesitiko/diafimisi_meta_katheto.jpg", S + "4.mesitiko/spiti_oneiron.jpg",
      S + "4.mesitiko/to_spiti_pou_anazitas_b.jpg", S + "4.mesitiko/Vanguard_xalandri.jpg"] },
  { title: "Comoprof Black Friday", cat: "social", color: "#2A2826",
    images: [S + "eidi_peripoiisis/comoprof_blackfriday_vafes_mallion.jpg", S + "eidi_peripoiisis/comoprof_blackfriday_avgerinos.jpg",
      S + "eidi_peripoiisis/comoprof_blackfriday_mixanes_kourematos.jpg", S + "eidi_peripoiisis/comoprof_blackfriday_sesouar_mallion.jpg"] },
  { title: "Pet Shop", cat: "social", color: "#8DB600", ink: "dark",
    images: [S + "petshop/skulotrofes.jpg", S + "petshop/gatotrofes.jpg", S + "petshop/paixnidia_skulou.jpg"] },
  { title: "Health Services", cat: "social", color: "#F08A24", ink: "dark",
    images: [S + "upiresies_ugeias/sixnes_erotiseis_a.jpg", S + "upiresies_ugeias/dorean_sunedria.jpg", S + "upiresies_ugeias/kuklos_ponou.jpg",
      S + "upiresies_ugeias/metakomizoume.jpg", S + "upiresies_ugeias/quiz_ponos_meta_kalokairi-01.jpg"] },
];

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const src = (p) => p.split("/").map(encodeURIComponent).join("/"); // '+' in file names
const inkOf = (p) => (p.ink === "dark" ? "#151413" : "#FFFFFF");
const vars = (p) => `--c:${p.color};--ink:${inkOf(p)}`;
const pad = (n) => String(n).padStart(2, "0");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ---------- reveal on scroll ---------- */
const io = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
  : null;
const reveal = (el) => (io ? io.observe(el) : el.classList.add("is-in"));

/* ==========================================================
   FEATURED — sticky stacking cards
   ========================================================== */
const featured = PROJECTS.map((p, i) => ({ p, i })).filter((x) => x.p.featured);
$("#feat-count").textContent = `${pad(featured.length)} projects`;
const stack = $("#stack");
stack.innerHTML = featured.map(({ p, i }, n) => `
  <article class="feat" style="${vars(p)};--n:${n}" data-i="${i}">
    <div class="feat__inner">
      <div class="feat__text">
        <span class="feat__num">${pad(n + 1)} / ${pad(featured.length)}</span>
        <div>
          <p class="feat__cat">${CATS[p.cat]}</p>
          <h3 class="feat__title">${esc(p.title)}</h3>
          <p class="feat__desc">${esc(p.desc || "")}</p>
          <button class="feat__btn" data-open="${i}">View project <span>${p.images.length} images →</span></button>
        </div>
      </div>
      <button class="feat__collage" data-open="${i}" aria-label="Open ${esc(p.title)}">
        ${p.images.slice(0, 3).map((im, k) => `<img class="c${k}" src="${src(im)}" alt="" loading="lazy" decoding="async">`).join("")}
      </button>
    </div>
  </article>`).join("");

// earlier cards shrink & dim as the next one slides over them
const feats = $$(".feat", stack);
function stackFx() {
  const vh = innerHeight;
  feats.forEach((card, k) => {
    const next = feats[k + 1];
    if (!next) return;
    const top = next.getBoundingClientRect().top;
    const start = vh, end = card.getBoundingClientRect().top + 40;
    const t = Math.min(1, Math.max(0, (start - top) / (start - end)));
    card.style.setProperty("--t", t.toFixed(3));
  });
}
if (!reduceMotion) {
  let ticking = false;
  addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(() => { stackFx(); ticking = false; }); }
  }, { passive: true });
  addEventListener("resize", stackFx);
  stackFx();
}

// gentle parallax tilt of the collage following the mouse
if (canHover && !reduceMotion) {
  feats.forEach((card) => {
    const col = $(".feat__collage", card);
    col.addEventListener("mousemove", (e) => {
      const r = col.getBoundingClientRect();
      col.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
      col.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    });
    col.addEventListener("mouseleave", () => { col.style.setProperty("--mx", 0); col.style.setProperty("--my", 0); });
  });
}

/* ==========================================================
   INDEX — list with colour fill + cursor-following preview
   ========================================================== */
const rows = $("#rows");
rows.innerHTML = PROJECTS.map((p, i) => `
  <li class="row" data-cat="${p.cat}" data-i="${i}" style="${vars(p)}">
    <button class="row__btn" data-open="${i}">
      <span class="row__num">${pad(i + 1)}</span>
      <img class="row__thumb" src="${src(p.images[0])}" alt="" loading="lazy" decoding="async">
      <span class="row__title">${esc(p.title)}</span>
      <span class="row__cat">${CATS[p.cat]}</span>
      <span class="row__count">${p.images.length} ${p.images.length > 1 ? "images" : "image"}</span>
      <span class="row__arrow" aria-hidden="true">→</span>
    </button>
  </li>`).join("");
$$(".row", rows).forEach(reveal);

// filters
$$(".filter").forEach((btn) => btn.addEventListener("click", () => setFilter(btn.dataset.filter)));
function setFilter(f) {
  $$(".filter").forEach((b) => b.classList.toggle("is-active", b.dataset.filter === f));
  rows.classList.add("is-switching");
  setTimeout(() => {
    let n = 0;
    $$(".row", rows).forEach((row) => {
      const show = f === "all" || row.dataset.cat === f;
      row.hidden = !show;
      if (show) { row.classList.add("is-in"); $(".row__num", row).textContent = pad(++n); }
    });
    rows.classList.remove("is-switching");
  }, 200);
}
// the coloured words in the intro jump to a filtered index
$$("[data-jump]").forEach((a) => a.addEventListener("click", () => setFilter(a.dataset.jump)));

// cursor-following preview (desktop only)
const peek = $("#peek"), peekImg = $("img", peek);
if (canHover) {
  let x = innerWidth / 2, y = innerHeight / 2, px = x, py = y, vx = 0, active = null, cycle = null, k = 0;
  const loop = () => {
    const nx = px + (x - px) * 0.18, ny = py + (y - py) * 0.18;
    vx = nx - px; px = nx; py = ny;
    const rot = reduceMotion ? 0 : Math.max(-12, Math.min(12, vx * 0.6));
    peek.style.transform = `translate(${px}px, ${py}px) translate(-50%, -50%) rotate(${rot}deg)`;
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
  addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; }, { passive: true });

  $$(".row", rows).forEach((row) => {
    row.addEventListener("mouseenter", () => {
      const p = PROJECTS[+row.dataset.i];
      active = p; k = 0;
      peek.style.setProperty("--c", p.color);
      peekImg.src = src(p.images[0]);
      peek.classList.add("is-on");
      clearInterval(cycle);
      if (p.images.length > 1 && !reduceMotion) {
        cycle = setInterval(() => {
          k = (k + 1) % active.images.length;
          peekImg.src = src(active.images[k]);
        }, 900);
      }
    });
    row.addEventListener("mouseleave", () => {
      peek.classList.remove("is-on");
      clearInterval(cycle);
    });
  });
}

/* ==========================================================
   LIGHTBOX — takes the project's colour
   ========================================================== */
const lb = $("#lightbox"), lbImg = $("#lb-img"), lbThumbs = $("#lb-thumbs");
let cur = null, idx = 0, lastFocus = null;

function show(i) {
  idx = (i + cur.images.length) % cur.images.length;
  lbImg.src = src(cur.images[idx]);
  lbImg.alt = `${cur.title} — image ${idx + 1} of ${cur.images.length}`;
  $("#lb-count").textContent = `${idx + 1} / ${cur.images.length}`;
  $$("button", lbThumbs).forEach((b, j) => b.classList.toggle("is-active", j === idx));
  const active = lbThumbs.children[idx];
  if (active) active.scrollIntoView({ block: "nearest", inline: "center" });
  new Image().src = src(cur.images[(idx + 1) % cur.images.length]);
}

function open(p) {
  cur = p; lastFocus = document.activeElement;
  lb.style.cssText = vars(p);
  $("#lb-title").textContent = p.title;
  $("#lb-cat").textContent = "— " + CATS[p.cat];
  const multi = p.images.length > 1;
  $("#lb-prev").hidden = $("#lb-next").hidden = lbThumbs.hidden = !multi;
  lbThumbs.innerHTML = p.images.map((im, j) =>
    `<button aria-label="Image ${j + 1}"><img src="${src(im)}" alt="" loading="lazy"></button>`).join("");
  $$("button", lbThumbs).forEach((b, j) => b.addEventListener("click", () => show(j)));
  lb.hidden = false;
  document.body.classList.add("no-scroll");
  peek.classList.remove("is-on");
  show(0);
  $("#lb-close").focus();
}

function close() {
  lb.hidden = true;
  document.body.classList.remove("no-scroll");
  lbImg.removeAttribute("src");
  if (lastFocus) lastFocus.focus();
}

document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-open]");
  if (t) open(PROJECTS[+t.dataset.open]);
});
$("#lb-close").addEventListener("click", close);
$("#lb-prev").addEventListener("click", () => show(idx - 1));
$("#lb-next").addEventListener("click", () => show(idx + 1));
lb.addEventListener("click", (e) => { if (e.target === lb || e.target.classList.contains("lightbox__stage")) close(); });
document.addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") close();
  else if (e.key === "ArrowLeft" && cur.images.length > 1) show(idx - 1);
  else if (e.key === "ArrowRight" && cur.images.length > 1) show(idx + 1);
  else if (e.key === "Tab") {
    const f = $$("button:not([hidden])", lb).filter((b) => b.offsetParent !== null);
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
});
let tx = null;
lb.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", (e) => {
  if (tx === null || cur.images.length < 2) return;
  const dx = e.changedTouches[0].clientX - tx;
  if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
  tx = null;
});

/* ---------- misc ---------- */
$$(".fade").forEach(reveal);

const navLinks = $$(".nav a");
if (io) {
  const navIO = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle("is-current", a.hash === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  ["work", "index", "about", "contact"].forEach((id) => navIO.observe(document.getElementById(id)));
}

const form = $("#contact-form");
const status = $(".form__status", form);
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = $("button[type=submit]", form);
  btn.disabled = true;
  status.className = "form__status";
  status.textContent = "Sending…";
  try {
    const res = await fetch(form.action.replace("formsubmit.co/", "formsubmit.co/ajax/"), {
      method: "POST", body: new FormData(form), headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(res.status);
    form.reset();
    status.classList.add("ok");
    status.textContent = "Thank you — I'll get back to you soon.";
  } catch {
    status.classList.add("err");
    status.innerHTML = 'Something went wrong. Please email me directly at <a href="mailto:iliana.anastasiadou7@gmail.com">iliana.anastasiadou7@gmail.com</a>.';
  } finally {
    btn.disabled = false;
  }
});

$("#year").textContent = new Date().getFullYear();
