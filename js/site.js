/* دکوراچین — پروژه‌ها، متن‌ها و عکس‌ها را از همین فایل عوض کنید. */

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

/* Works — each project is a scene; the backdrop takes the tone of its material. */
const TONES = {
  trav: "#2a241c", saye: "#1c1d20", ofogh: "#18211f", noor: "#2a1f17", ketab: "#241b14",
  ajor: "#2f1a13", bad: "#2b2116", khat: "#1b1d1b", howz: "#16202a"
};
const ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>';

function buildWorks() {
  const wrap = $("#scenes");
  const ticks = $("#works-ticks");
  PROJECTS.forEach((p, i) => {
    const scene = document.createElement("article");
    scene.className = "scene";
    scene.setAttribute("aria-label", `${p.title}، ${p.city}`);
    scene.innerHTML = `
      <button type="button" class="scene-media" data-cursor="view" aria-label="مشاهدهٔ پروژهٔ ${p.title}">
        <img src="${p.image}" alt="" ${i > 1 ? 'loading="lazy"' : ""} decoding="async" draggable="false">
        <span class="scene-dim"></span>
      </button>
      <span class="scene-frame" aria-hidden="true"><i class="fc fc-tr"></i><i class="fc fc-bl"></i></span>
      <span class="scene-slit" aria-hidden="true"></span>
      <div class="scene-info">
        <p class="scene-no" aria-hidden="true">${pad2(i + 1)}</p>
        <h3 class="scene-title"><span class="line"><span>${p.title}</span></span></h3>
        <p class="scene-meta"><span>${p.city}</span><span>${p.type}</span><span>${p.year}</span><span>${p.area}</span></p>
        <p class="scene-text">${p.text}</p>
        <button type="button" class="scene-cta">مشاهدهٔ پروژه ${ARROW}</button>
      </div>`;
    scene.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => openViewer(p.id, true)));
    wrap.append(scene);
    ticks.append(document.createElement("i"));
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

  const mPin = $(".manifesto-pin");
  const mSteps = $$(".m-step");
  const mMarks = $$(".m-progress li");
  const mTl = gsap.timeline({
    defaults: { ease: "none" },
    onUpdate: () => {
      const i = Math.min(3, Math.max(0, Math.floor(mTl.time() - 0.05)));
      mMarks.forEach((li, j) => li.classList.toggle("is-on", j === i));
    },
    scrollTrigger: { trigger: ".manifesto", start: "top top", end: "bottom bottom", scrub: 1 }
  });
  gsap.set([...mSteps, ".m-final"], { visibility: "visible" });
  gsap.set(".m-word", { autoAlpha: 0, scale: 1.35, filter: "blur(18px)" });
  gsap.set(".m-cap", { autoAlpha: 0, y: 30 });
  gsap.set(".m-slogan .line > span", { yPercent: 110 });
  gsap.set(".m-underline", { scaleX: 0 });
  gsap.set([".m-trio > *", ".m-sign"], { autoAlpha: 0, y: 20 });
  mSteps.forEach((step, i) => {
    const word = $(".m-word", step);
    const cap = $(".m-cap", step);
    const last = i === mSteps.length - 1;
    mTl
      .to(word, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.42, ease: "power2.out" }, i + 0.02)
      .to(cap, { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" }, i + 0.3)
      .to(cap, { autoAlpha: 0, y: -20, duration: 0.15 }, i + 0.78)
      .to(word, last
        ? { autoAlpha: 0, scale: 1.25, filter: "blur(24px)", duration: 0.3, ease: "power1.in" }
        : { autoAlpha: 0, scale: 0.82, y: -40, filter: "blur(8px)", duration: 0.25, ease: "power2.in" }, i + 0.78);
  });
  if (!finePointer) mTl.fromTo(mPin, { "--lx": "10%", "--ly": "30%" }, { "--lx": "90%", "--ly": "70%", duration: 0.9 }, 1);
  mTl
    .to(".m-slogan .line > span", { yPercent: 0, duration: 0.35, stagger: 0.1, ease: "power3.out" }, 3.05)
    .to(".m-underline", { scaleX: 1, duration: 0.3, ease: "power2.inOut" }, 3.4)
    .to(".m-trio > *", { autoAlpha: 1, y: 0, duration: 0.2, stagger: 0.04 }, 3.45)
    .to(".m-sign", { autoAlpha: 1, y: 0, duration: 0.2 }, 3.6)
    .to({}, { duration: 0.25 });

  if (finePointer) {
    const lightWord = $(".m-light");
    mPin.addEventListener("pointermove", (e) => {
      mPin.style.setProperty("--mx", ((e.clientX / window.innerWidth) * 2 - 1).toFixed(3));
      mPin.style.setProperty("--my", ((e.clientY / window.innerHeight) * 2 - 1).toFixed(3));
      const r = lightWord.getBoundingClientRect();
      if (r.width) {
        mPin.style.setProperty("--lx", `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
        mPin.style.setProperty("--ly", `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
      }
    });
  }

  const pin = $(".works-pin");
  const scenes = $$(".scene");
  const ticks = $$("#works-ticks i");
  const nowEl = $("#works-now");
  const lead = 0.5;
  const sceneTl = gsap.timeline({
    defaults: { ease: "none" },
    onUpdate: () => {
      const t = sceneTl.time() - lead;
      const idx = Math.min(scenes.length - 1, Math.max(0, Math.floor(t + 0.02)));
      nowEl.textContent = pad2(idx + 1);
      ticks.forEach((tick, j) => tick.style.setProperty("--f", Math.min(1, Math.max(0, t - j + 0.3)).toFixed(3)));
    },
    scrollTrigger: {
      trigger: ".works",
      start: "top top",
      end: () => `+=${window.innerHeight * (scenes.length * 0.95 + 0.6)}`,
      pin,
      scrub: 1.2,
      invalidateOnRefresh: true
    }
  });
  sceneTl.to(".works-intro", { autoAlpha: 0, scale: 0.9, filter: "blur(6px)", duration: 0.5, ease: "power1.in" }, 0.25);
  scenes.forEach((scene, i) => {
    const at = lead + i;
    const media = $(".scene-media", scene);
    const img = $("img", scene);
    const slit = $(".scene-slit", scene);
    const title = $(".scene-title .line > span", scene);
    const rest = $$(".scene-no, .scene-meta, .scene-text, .scene-cta", scene);
    const frame = $(".scene-frame", scene);
    const corners = $$(".fc", scene);
    gsap.set(corners, { scale: 0, autoAlpha: 0 });
    sceneTl
      .to(corners, { scale: 1, autoAlpha: 1, duration: 0.3, stagger: 0.08, ease: "power3.out" }, at + 0.42)
      .fromTo(slit, { scaleY: 0, autoAlpha: 1 }, { scaleY: 1, duration: 0.2, ease: "power2.out" }, at - 0.12)
      .fromTo(media, { clipPath: "inset(0% 50% 0% 50%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.55, ease: "power3.inOut" }, at + 0.06)
      .to(slit, { autoAlpha: 0, duration: 0.25 }, at + 0.2)
      .fromTo(img, { scale: 1.4 }, { scale: 1, duration: 0.9, ease: "power2.out" }, at + 0.06)
      .to(pin, { backgroundColor: TONES[PROJECTS[i].id] || "#0b0a09", duration: 0.5 }, at)
      .fromTo(title, { yPercent: 115 }, { yPercent: 0, duration: 0.4, ease: "power3.out" }, at + 0.28)
      .fromTo(rest, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.32, stagger: 0.05, ease: "power2.out" }, at + 0.34);
    if (i < scenes.length - 1) {
      const out = at + 1;
      sceneTl
        .to(rest, { autoAlpha: 0, y: -30, duration: 0.2, stagger: 0.02 }, out - 0.06)
        .to(title, { yPercent: -115, duration: 0.25, ease: "power2.in" }, out - 0.06)
        .to(media, { scale: 0.86, duration: 0.6, ease: "power2.inOut" }, out)
        .to(frame, { scale: 0.86, autoAlpha: 0, duration: 0.5, ease: "power2.inOut" }, out)
        .to($(".scene-dim", scene), { opacity: 0.72, duration: 0.6 }, out)
        .set(scene, { pointerEvents: "none", visibility: "hidden" }, out + 0.62);
    }
  });
  sceneTl.to({}, { duration: 0.35 });

  if (finePointer) {
    const imgs = $$(".scene-media img", pin);
    const drift = (mx, my) => {
      pin.style.setProperty("--mx", mx.toFixed(3));
      pin.style.setProperty("--my", my.toFixed(3));
      gsap.to(imgs, { x: mx * -18, y: my * -12, duration: 1.2, ease: "power3.out", overwrite: "auto" });
    };
    pin.addEventListener("pointermove", (e) => drift((e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1));
    pin.addEventListener("pointerleave", () => drift(0, 0));
  }

  $$(".split").forEach((el) => {
    const parts = splitWords(el, "wm");
    gsap.from(parts, { yPercent: 105, duration: 1.3, stagger: 0.05, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 82%" } });
  });
  $$(".sep").forEach((el) => {
    gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%" } })
      .from($$("i", el), { scaleX: 0, duration: 1.6, ease: "expo.out" })
      .from($$("b", el), { scale: 0, rotate: 225, duration: 1.1, ease: "back.out(2)" }, 0.2)
      .from($$("span", el), { autoAlpha: 0, letterSpacing: "1.2em", duration: 1.2, ease: "power3.out" }, 0.3);
  });
  const quote = $(".passage-quote");
  if (quote) {
    splitWords(quote, "pw");
    const words = $$(".pw, em", quote);
    gsap.fromTo(words, { opacity: 0.12, filter: "blur(4px)" }, {
      opacity: 1, filter: "blur(0px)", stagger: 0.1, ease: "none",
      scrollTrigger: { trigger: quote, start: "top 80%", end: "bottom 45%", scrub: 1 }
    });
  }
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
  const walls = $$(".b-wall");
  const roof = $(".b-roof");
  const notes = $$(".b-notes text");
  const pen = $(".b-pen");
  const lengths = new Map(paths.map((p) => [p, p.getTotalLength()]));
  const lamps = $$(".b-lamp");
  const halo = $(".b-halo");
  const stepsEl = $$("#steps li");
  const meterBar = $("#meter-bar");
  const meterNo = $("#meter-no");
  const clamp = (v) => Math.min(1, Math.max(0, v));
  const groups = [0, 1, 2, 3].map((s) => paths.filter((p) => Number(p.dataset.step) === s));
  const drawBuild = (p) => {
    const f = p * 4;
    let tip = null;
    groups.forEach((group, s) => {
      group.forEach((path, i) => {
        const local = clamp((f - s - (i / group.length) * 0.5) / 0.6);
        path.style.setProperty("--d", (1 - local).toFixed(4));
        if (local > 0 && local < 1) tip = [path, local];
      });
    });
    if (tip) {
      const pt = tip[0].getPointAtLength(lengths.get(tip[0]) * tip[1]);
      pen.setAttribute("cx", pt.x.toFixed(1));
      pen.setAttribute("cy", pt.y.toFixed(1));
    }
    pen.style.setProperty("--o", tip ? 1 : 0);
    notes.forEach((t) => t.style.setProperty("--o", clamp((f - Number(t.dataset.step) - 0.45) / 0.3).toFixed(3)));
    walls.forEach((w, i) => w.style.setProperty("--s", clamp((f - 1.3 - i * 0.12) / 0.6).toFixed(4)));
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
