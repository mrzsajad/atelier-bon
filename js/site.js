/* آتلیه بُن — پروژه‌ها، متن‌ها و عکس‌ها را از همین فایل عوض کنید. */

const PROJECTS = [
  { id: "trav", title: "خانهٔ تراورتن", type: "مسکونی", city: "لواسان", year: "۱۴۰۴", area: "۴۸۰ متر",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=72",
    text: "حجمی از سنگ روشن که دور یک حیاط مرکزی نشسته است. نور ظهر از شکاف بام وارد می‌شود و عصر، سایهٔ رواق را روی کف می‌کشد." },
  { id: "saye", title: "گالری سایه", type: "فرهنگی", city: "تهران", year: "۱۴۰۳", area: "۹۲۰ متر",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=72",
    text: "گالری کوچکی در بافت شهری، با سقف بلند و نور شمال. دیوارها گچ دست‌ساز دارند تا اثر دیده شود، نه بنا." },
  { id: "ofogh", title: "ویلای افق", type: "مسکونی", city: "دماوند", year: "۱۴۰۳", area: "۶۱۰ متر",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=72",
    text: "سه صفحهٔ افقی روی شیب. هر طبقه یک قاب به سمت دره است و باد از میان حیاط میانی عبور می‌کند." },
  { id: "noor", title: "آپارتمان نور", type: "داخلی", city: "الهیه", year: "۱۴۰۲", area: "۲۴۰ متر",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=72",
    text: "بازسازی یک آپارتمان دههٔ پنجاه. تیغه‌ها کم شد، یک دیوار بلوط ماند، و نور غرب با پردهٔ کتان مهار شد." },
  { id: "ketab", title: "کتابخانهٔ حیاط", type: "فرهنگی", city: "کاشان", year: "۱۴۰۲", area: "۱۱۰۰ متر",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=72",
    text: "خواندن دور یک حوض. طاق‌ها نو نیستند؛ ادامهٔ همان سایه‌ای هستند که کوچه از قبل داشت." },
  { id: "ajor", title: "کافهٔ آجر", type: "تجاری", city: "اصفهان", year: "۱۴۰۴", area: "۱۸۰ متر",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=72",
    text: "یک قوس، یک پیشخوان بلند، و آجر محلی که بدون رنگ اضافه رها شده. شب، فقط یک خط نور گرم داخل طاق می‌ماند." },
  { id: "bad", title: "خانهٔ باد", type: "مسکونی", city: "هرمز", year: "۱۴۰۱", area: "۳۲۰ متر",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=72",
    text: "دیوارهای ضخیم، حیاط کوچک، و بادگیری معاصر. رنگ خاک جزیره روی بدنهٔ بیرونی مانده است." },
  { id: "khat", title: "دفتر خط", type: "اداری", city: "تهران", year: "۱۴۰۳", area: "۷۴۰ متر",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=72",
    text: "دفتری برای یک نشر. قفسه‌ها سازه‌اند، میزها میان آن‌ها نشسته‌اند، و یک شکاف سقفی میز ویرایش را روشن می‌کند." },
  { id: "howz", title: "خانهٔ حوض", type: "مسکونی", city: "یزد", year: "۱۴۰۴", area: "۵۴۰ متر",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=72",
    text: "حیاط در مرکز است. تابستان، آب و سایهٔ دیوار بلند دما را می‌گیرد. زمستان، اتاق جنوبی تمام آفتاب را برمی‌دارد." }
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const root = document.documentElement;
const reduce = root.classList.contains("reduce-motion");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const animate = !reduce && Boolean(window.gsap && window.ScrollTrigger);
const pad2 = (n) => String(n).padStart(2, "0");
window.__bonBooted = true;
if (!animate) root.classList.remove("js-anim");

const header = $(".header");
const menu = $("#menu");
const menuBtn = $(".menu-btn");
const viewer = $("#viewer");
const main = $("#main");
let lenis = null;
let openId = null;
let viewerReturn = null;

function lockScroll(on) {
  document.body.classList.toggle("is-locked", on);
  if (lenis) on ? lenis.stop() : lenis.start();
  main.inert = on;
  $(".footer").inert = on;
}

/* Works */
function buildWorks() {
  const track = $("#works-track");
  PROJECTS.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "work";
    btn.dataset.cursor = "view";
    btn.setAttribute("aria-label", `${p.title}، ${p.city}، ${p.type}، ${p.year}. مشاهدهٔ پروژه`);
    btn.innerHTML = `
      <span class="work-media"><img src="${p.image}" alt="" loading="lazy" decoding="async" draggable="false"></span>
      <span class="work-meta">
        <span><span class="work-title">${p.title}</span><span class="work-sub">${p.city} · ${p.type} · ${p.year}</span></span>
        <span class="work-no latin">${pad2(i + 1)}</span>
      </span>`;
    btn.addEventListener("click", () => openViewer(p.id, true));
    track.append(btn);
  });
  $("#works-total").textContent = pad2(PROJECTS.length);
}

/* Viewer */
function fillViewer(p) {
  const i = PROJECTS.indexOf(p);
  const fields = { no: `${pad2(i + 1)} / ${pad2(PROJECTS.length)}`, title: p.title, text: p.text, city: p.city, year: p.year, area: p.area, type: p.type };
  Object.entries(fields).forEach(([k, v]) => { const el = viewer.querySelector(`[data-field="${k}"]`); if (el) el.textContent = v; });
  const img = $(".viewer-img", viewer);
  img.src = p.image.replace("w=1200", "w=1800");
  img.alt = `تصویر پروژهٔ ${p.title} در ${p.city}`;
}

function openViewer(id, push) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  if (!openId) viewerReturn = document.activeElement;
  openId = id;
  fillViewer(p);
  viewer.classList.add("is-open");
  viewer.setAttribute("aria-hidden", "false");
  lockScroll(true);
  header.inert = true;
  if (push) history.pushState({ project: id, pushed: true }, "", `#project-${id}`);
  else history.replaceState({ project: id, pushed: Boolean(history.state?.pushed) }, "", `#project-${id}`);
  requestAnimationFrame(() => $(".viewer-close", viewer).focus({ preventScroll: true }));
}

function closeViewer() {
  if (!openId) return;
  openId = null;
  viewer.classList.remove("is-open");
  viewer.setAttribute("aria-hidden", "true");
  lockScroll(false);
  header.inert = false;
  viewerReturn?.focus?.({ preventScroll: true });
}

function requestClose() {
  if (history.state?.pushed) history.back();
  else {
    history.replaceState(null, "", location.pathname + location.search);
    closeViewer();
  }
}

function step(dir) {
  const i = PROJECTS.findIndex((p) => p.id === openId);
  if (i < 0) return;
  openViewer(PROJECTS[(i + dir + PROJECTS.length) % PROJECTS.length].id, false);
}

function trap(container, e) {
  if (e.key !== "Tab") return;
  const nodes = $$("a[href], button:not([disabled]), input, textarea", container).filter((n) => n.getClientRects().length);
  if (!nodes.length) return;
  const first = nodes[0];
  const last = nodes[nodes.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* Menu */
function setMenu(open) {
  menu.classList.toggle("is-open", open);
  menu.setAttribute("aria-hidden", String(!open));
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "بستن منو" : "منو");
  lockScroll(open);
  if (open) $("a", menu)?.focus({ preventScroll: true });
}

function bindChrome() {
  menuBtn.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
  $$("a[href^='#']").forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = $(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      if (menu.classList.contains("is-open")) setMenu(false);
      if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.6 });
      else target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    });
  });
  $(".viewer-close").addEventListener("click", requestClose);
  $("#viewer-prev").addEventListener("click", () => step(-1));
  $("#viewer-next").addEventListener("click", () => step(1));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (openId) requestClose();
      else if (menu.classList.contains("is-open")) { setMenu(false); menuBtn.focus(); }
    }
    if (openId) {
      trap(viewer, e);
      if (e.key === "ArrowLeft") step(1);
      if (e.key === "ArrowRight") step(-1);
    } else if (menu.classList.contains("is-open")) {
      trap(menu, e);
    }
  });
  window.addEventListener("popstate", () => {
    const m = location.hash.match(/^#project-([a-z]+)$/);
    if (m) openViewer(m[1], false);
    else closeViewer();
  });

  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-hidden", y > 200 && y > lastY && !menu.classList.contains("is-open"));
    header.classList.toggle("is-solid", y > window.innerHeight * 0.9);
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}

function bindForm() {
  const form = $("#contact-form");
  const summary = $("#form-summary");
  const success = $("#form-success");
  const setError = (id, msg) => {
    const input = $(`#${id}`);
    $(`#${id}-error`).textContent = msg;
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    if (msg) input.setAttribute("aria-describedby", `${id}-error`);
    else input.removeAttribute("aria-describedby");
    return !msg;
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = [
      setError("name", form.name.value.trim() ? "" : "نام را بنویسید."),
      setError("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value.trim()) ? "" : "ایمیل معتبر بنویسید."),
      setError("message", form.message.value.trim() ? "" : "چند خط دربارهٔ پروژه بنویسید.")
    ].every(Boolean);
    if (!ok) {
      summary.textContent = "چند مورد را کامل کنید.";
      $("[aria-invalid='true']", form)?.focus();
      return;
    }
    summary.textContent = "";
    form.hidden = true;
    success.hidden = false;
    $("#form-reset").focus();
  });
  $("#form-reset").addEventListener("click", () => {
    form.reset();
    ["name", "email", "message"].forEach((id) => setError(id, ""));
    success.hidden = true;
    form.hidden = false;
    form.name.focus();
  });
}

/* Cursor + magnetic */
function bindCursor() {
  if (!finePointer || reduce) return;
  root.classList.add("has-cursor");
  const cursor = $(".cursor");
  const dot = $(".cursor-dot");
  const ring = $(".cursor-ring");
  let x = -100, y = -100, rx = -100, ry = -100;
  window.addEventListener("pointermove", (e) => { x = e.clientX; y = e.clientY; }, { passive: true });
  document.addEventListener("pointerover", (e) => {
    const view = e.target.closest?.("[data-cursor='view']");
    const link = !view && e.target.closest?.("a, button, input, textarea, label");
    cursor.classList.toggle("is-view", Boolean(view));
    cursor.classList.toggle("is-link", Boolean(link));
  });
  document.addEventListener("pointerleave", () => { x = y = -100; });
  const loop = () => {
    rx += (x - rx) * 0.16;
    ry += (y - ry) * 0.16;
    dot.style.transform = `translate3d(${x}px,${y}px,0)`;
    ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
    requestAnimationFrame(loop);
  };
  loop();

  $$(".magnetic").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const mx = (e.clientX - r.left - r.width / 2) * 0.3;
      const my = (e.clientY - r.top - r.height / 2) * 0.4;
      el.style.transform = `translate(${mx}px, ${my}px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transition = "transform 0.7s cubic-bezier(0.22,1,0.36,1)";
      el.style.transform = "";
      setTimeout(() => { el.style.transition = ""; }, 700);
    });
  });
}

/* Hero video + shader */
function startHero() {
  const video = $("#hero-video");
  const state = { intro: animate ? 0 : 1 };
  if (reduce) {
    video.removeAttribute("autoplay");
    video.pause();
    return state;
  }
  video.play().catch(() => {});
  try {
    const gl = window.HeroGL?.start({ video, canvas: $("#hero-gl"), surface: $(".hero-pin") });
    if (gl) {
      gl.intro = state.intro;
      root.classList.add("has-gl");
      return gl;
    }
  } catch (err) {
    console.warn("Hero shader unavailable; showing plain video.", err);
  }
  return state;
}

function splitWords(el, cls) {
  const out = [];
  [...el.childNodes].forEach((node) => {
    if (node.nodeType !== Node.TEXT_NODE) return;
    const frag = document.createDocumentFragment();
    node.textContent.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) { frag.append(part); return; }
      const outer = document.createElement("span");
      outer.className = cls;
      if (cls === "wm") {
        const inner = document.createElement("span");
        inner.textContent = part;
        outer.append(inner);
        out.push(inner);
      } else {
        outer.textContent = part;
        out.push(outer);
      }
      frag.append(outer);
    });
    node.replaceWith(frag);
  });
  return out;
}

/* Motion */
function startMotion(gl) {
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  const mobile = window.matchMedia("(max-width: 900px)").matches;

  if (window.Lenis) {
    lenis = new window.Lenis({ lerp: 0.085, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    root.classList.add("lenis");
  }

  const frame = $(".hero-frame");
  gsap.set(frame, { "--clip-y": "0%", "--clip-x": "0%", "--clip-r": "0px", "--zoom": 1.16 });
  if (lenis) lenis.stop();

  const intro = gsap.timeline({ delay: 0.2 });
  intro
    .to(".curtain-line", { scaleX: 1, duration: 1, ease: "power3.inOut" })
    .to(".curtain-mark", { opacity: 1, letterSpacing: "0.55em", duration: 0.8, ease: "power2.out" }, "-=0.5")
    .to([".curtain-mark", ".curtain-line"], { opacity: 0, duration: 0.35 }, "+=0.1")
    .addLabel("open", "-=0.2")
    .call(() => lenis?.start(), null, "open+=0.5")
    .call(() => $(".curtain")?.remove(), null, "open+=1.5")
    .to(".curtain-top", { yPercent: -100, duration: 1.5, ease: "expo.inOut" }, "open")
    .to(".curtain-bottom", { yPercent: 100, duration: 1.5, ease: "expo.inOut" }, "<")
    .to(gl, { intro: 1, duration: 2.4, ease: "power2.out" }, "<0.15")
    .to(frame, { "--zoom": 1, duration: 3.2, ease: "power3.out" }, "<")
    .fromTo(".hero-title .line > span", { yPercent: 110, y: 0 }, { yPercent: 0, duration: 1.5, stagger: 0.14, ease: "expo.out" }, "-=2.3")
    .to([".header", ".hero-eyebrow", ".hero-coord", ".hero-hint", ".hero-scroll"], { opacity: 1, duration: 1.1, stagger: 0.08, ease: "power2.out" }, "-=1.1");

  gsap.timeline({ scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom bottom", scrub: 1 } })
    .to(frame, { "--clip-y": mobile ? "10%" : "13%", "--clip-x": mobile ? "5%" : "17%", "--clip-r": "26px", ease: "none", duration: 1 }, 0)
    .to(".hero-copy", { yPercent: -30, autoAlpha: 0, ease: "none", duration: 0.4 }, 0)
    .to([".hero-hint", ".hero-scroll", ".hero-coord"], { autoAlpha: 0, duration: 0.15 }, 0)
    .fromTo(".hero-after", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.3 }, 0.42)
    .to(".hero-after", { autoAlpha: 0, y: -30, duration: 0.2 }, 0.85);

  const words = splitWords($("#manifesto-text"), "w");
  gsap.to(words, {
    opacity: 1,
    stagger: 0.06,
    ease: "none",
    scrollTrigger: { trigger: "#manifesto-text", start: "top 82%", end: "bottom 50%", scrub: true }
  });

  const track = $("#works-track");
  const cards = $$(".work", track);
  const pin = $(".works-pin");
  const distance = () => {
    const cs = getComputedStyle(pin);
    const column = cs.flexDirection.startsWith("column");
    const before = parseFloat(cs.paddingInlineStart) + (column ? 0 : $(".works-head").offsetWidth + parseFloat(cs.columnGap || 0));
    return Math.max(0, track.offsetWidth + before - pin.clientWidth);
  };
  const nowEl = $("#works-now");
  gsap.to(mobile ? track : [$(".works-head"), track], {
    x: () => distance(),
    ease: "none",
    scrollTrigger: {
      trigger: ".works",
      start: "top top",
      end: () => `+=${distance() + window.innerHeight * 0.4}`,
      pin: ".works-pin",
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        nowEl.textContent = pad2(Math.min(PROJECTS.length, Math.round(self.progress * (PROJECTS.length - 1)) + 1));
        const vw = window.innerWidth;
        cards.forEach((card) => {
          const r = card.getBoundingClientRect();
          const off = ((r.left + r.width / 2 - vw / 2) / vw) * -10;
          card.style.setProperty("--px", `${off.toFixed(2)}%`);
        });
      }
    }
  });
  gsap.from(cards, { yPercent: 18, autoAlpha: 0, duration: 1.4, stagger: 0.08, ease: "expo.out", scrollTrigger: { trigger: ".works", start: "top 70%" } });

  $$(".split").forEach((el) => {
    const parts = splitWords(el, "wm");
    gsap.from(parts, { yPercent: 105, duration: 1.3, stagger: 0.05, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 82%" } });
  });
  $$(".fade-up").forEach((el) => {
    gsap.to(el, { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
  });
  $$(".reveal-window").forEach((el) => {
    gsap.to(el, { clipPath: "inset(0% 0% 0% 0%)", ease: "none", scrollTrigger: { trigger: el, start: "top 90%", end: "center 50%", scrub: 1 } });
    const img = $("img", el);
    gsap.fromTo(img, { "--py": "-12%" }, { "--py": "0%", ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
  });
  $$("[data-count]").forEach((el) => {
    const counter = { v: 0 };
    gsap.to(counter, {
      v: Number(el.dataset.count),
      duration: 2.2,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
      onUpdate: () => { el.textContent = pad2(Math.round(counter.v)); }
    });
  });

  const paths = $$(".b-ink path");
  const wall = $(".b-wall");
  const roof = $(".b-roof");
  const lamps = $$(".b-lamp");
  const halo = $(".b-halo");
  const stepsEl = $$("#steps li");
  const meterBar = $("#meter-bar");
  const meterNo = $("#meter-no");
  const clamp = (v) => Math.min(1, Math.max(0, v));
  const groups = [0, 1, 2, 3].map((s) => paths.filter((p) => Number(p.dataset.step) === s));
  const drawBuild = (p) => {
    const f = p * 4;
    groups.forEach((group, s) => {
      group.forEach((path, i) => {
        const local = clamp((f - s - (i / group.length) * 0.5) / 0.6);
        path.style.setProperty("--d", (1 - local).toFixed(4));
      });
    });
    wall.style.setProperty("--s", clamp((f - 1.3) / 0.7).toFixed(4));
    roof.style.setProperty("--s", clamp((f - 2.3) / 0.6).toFixed(4));
    lamps.forEach((lamp, i) => lamp.style.setProperty("--o", clamp((f - 3.2 - i * 0.12) / 0.4).toFixed(4)));
    halo.style.setProperty("--o", clamp((f - 3.4) / 0.5).toFixed(4));
    const active = Math.min(3, Math.floor(f));
    stepsEl.forEach((li, i) => li.classList.toggle("is-on", i === active));
    meterBar.style.transform = `scaleX(${p.toFixed(4)})`;
    meterNo.textContent = pad2(active + 1);
  };
  drawBuild(0);
  ScrollTrigger.create({
    trigger: mobile ? ".process-stage" : ".process",
    start: mobile ? "top 85%" : "top top",
    end: mobile ? "bottom 25%" : "bottom bottom",
    scrub: true,
    onUpdate: (self) => drawBuild(self.progress)
  });

  [$(".hero"), ...$$("main [data-theme]")].forEach((sec) => {
    ScrollTrigger.create({
      trigger: sec,
      start: "top 55%",
      end: "bottom 55%",
      onToggle: (self) => { if (self.isActive) root.dataset.theme = sec.dataset.theme || "dark"; }
    });
  });

  window.addEventListener("load", () => ScrollTrigger.refresh());
}

function init() {
  buildWorks();
  bindChrome();
  bindForm();
  bindCursor();
  const gl = startHero();
  if (animate) startMotion(gl);
  else root.classList.remove("js-anim");
  const m = location.hash.match(/^#project-([a-z]+)$/);
  if (m) openViewer(m[1], false);
}

init();
