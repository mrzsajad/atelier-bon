/* آتلیه بُن — نسخهٔ نمونه
   پروژه‌ها، نام استودیو و عکس‌ها را از همین فایل عوض کنید. */

const PROJECTS = [
  {
    id: "trav",
    title: "خانهٔ تراورتن",
    type: "مسکونی",
    city: "لواسان",
    year: "۱۴۰۴",
    area: "۴۸۰ متر",
    status: "ساخته‌شده",
    client: "خصوصی",
    tone: "#6d645c",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=70",
    text: "حجمی از سنگ روشن که دور یک حیاط مرکزی نشسته است. نور ظهر از شکاف بام وارد می‌شود و عصر، سایهٔ رواق را روی کف می‌کشد."
  },
  {
    id: "saye",
    title: "گالری سایه",
    type: "فرهنگی",
    city: "تهران",
    year: "۱۴۰۳",
    area: "۹۲۰ متر",
    status: "ساخته‌شده",
    client: "مجموعهٔ خصوصی",
    tone: "#3e4a55",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=70",
    text: "گالری کوچکی در بافت شهری، با سقف بلند و نور شمال. دیوارها گچ دست‌ساز دارند تا اثر دیده شود، نه بنا."
  },
  {
    id: "ofogh",
    title: "ویلای افق",
    type: "مسکونی",
    city: "دماوند",
    year: "۱۴۰۳",
    area: "۶۱۰ متر",
    status: "ساخته‌شده",
    client: "خصوصی",
    tone: "#5c5348",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=70",
    text: "سه صفحهٔ افقی روی شیب. هر طبقه یک قاب به سمت دره است و باد از میان حیاط میانی عبور می‌کند."
  },
  {
    id: "noor",
    title: "آپارتمان نور",
    type: "داخلی",
    city: "الهیه",
    year: "۱۴۰۲",
    area: "۲۴۰ متر",
    status: "ساخته‌شده",
    client: "خصوصی",
    tone: "#4a4038",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=70",
    text: "بازسازی یک آپارتمان دههٔ پنجاه. تیغه‌ها کم شد، یک دیوار بلوط ماند، و نور غرب با پردهٔ کتان مهار شد."
  },
  {
    id: "ketab",
    title: "کتابخانهٔ حیاط",
    type: "فرهنگی",
    city: "کاشان",
    year: "۱۴۰۲",
    area: "۱۱۰۰ متر",
    status: "در حال اجرا",
    client: "شهرداری",
    tone: "#6a5a4a",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=70",
    text: "خواندن دور یک حوض. طاق‌ها نو نیستند؛ ادامهٔ همان سایه‌ای هستند که کوچه از قبل داشت."
  },
  {
    id: "ajor",
    title: "کافهٔ آجر",
    type: "تجاری",
    city: "اصفهان",
    year: "۱۴۰۴",
    area: "۱۸۰ متر",
    status: "ساخته‌شده",
    client: "خصوصی",
    tone: "#3f3a36",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=70",
    text: "یک قوس، یک پیشخوان بلند، و آجر محلی که بدون رنگ اضافه رها شده. شب، فقط یک خط نور گرم داخل طاق می‌ماند."
  },
  {
    id: "bad",
    title: "خانهٔ باد",
    type: "مسکونی",
    city: "هرمز",
    year: "۱۴۰۱",
    area: "۳۲۰ متر",
    status: "ساخته‌شده",
    client: "خصوصی",
    tone: "#5a6570",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=70",
    text: "دیوارهای ضخیم، حیاط کوچک، و بادگیری معاصر. رنگ خاک جزیره روی بدنهٔ بیرونی مانده است."
  },
  {
    id: "khat",
    title: "دفتر خط",
    type: "اداری",
    city: "تهران",
    year: "۱۴۰۳",
    area: "۷۴۰ متر",
    status: "ساخته‌شده",
    client: "نشر خصوصی",
    tone: "#4d463f",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=70",
    text: "دفتری برای یک نشر. قفسه‌ها سازه‌اند، میزها میان آن‌ها نشسته‌اند، و یک شکاف سقفی میز ویرایش را روشن می‌کند."
  },
  {
    id: "howz",
    title: "خانهٔ حوض",
    type: "مسکونی",
    city: "یزد",
    year: "۱۴۰۴",
    area: "۵۴۰ متر",
    status: "در حال اجرا",
    client: "خصوصی",
    tone: "#6b5e50",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=70",
    text: "حیاط در مرکز است. تابستان، آب و سایهٔ دیوار بلند دما را می‌گیرد. زمستان، اتاق جنوبی تمام آفتاب را برمی‌دارد."
  }
];

const MATERIALS = [
  { name: "تراورتن", place: "عباس‌آباد", tone: "#cbbba4", ratioW: 340, image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?auto=format&fit=crop&w=1200&q=70" },
  { name: "آجر قزاقی", place: "یزد", tone: "#8d4a3a", ratioW: 260, image: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=1200&q=70" },
  { name: "بتن اکسپوز", place: "کارگاه", tone: "#8a8a86", ratioW: 420, image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=70" },
  { name: "بلوط", place: "داخل", tone: "#a67c52", ratioW: 300, image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?auto=format&fit=crop&w=1200&q=70" },
  { name: "گچ آهکی", place: "کاشان", tone: "#d9d3c7", ratioW: 240, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=70" },
  { name: "مس کهنه", place: "جزئیات", tone: "#8a6a45", ratioW: 360, image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=70" }
];

const WIDTHS = [300, 470, 230, 390, 560, 250, 420, 210, 340];
const ARROW = `<svg class="row-go" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>`;

const reduce = document.documentElement.classList.contains("reduce-motion");
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const strips = [];
let activeId = PROJECTS[0].id;
let openId = null;
let filter = "همه";
let viewerReturn = null;
let menuReturn = null;

const heroBoard = document.getElementById("hero-board");
const materialBoard = document.getElementById("material-board");
const list = document.getElementById("project-list");
const filtersEl = document.getElementById("filters");
const countEl = document.getElementById("project-count");
const emptyEl = document.getElementById("empty");
const indexImg = document.getElementById("index-img");
const indexKicker = document.getElementById("index-kicker");
const indexTitle = document.getElementById("index-caption-title");
const indexOpen = document.getElementById("index-open");
const viewer = document.getElementById("viewer");
const menu = document.getElementById("nav-overlay");
const header = document.querySelector(".header");
const main = document.getElementById("main");
const footer = document.querySelector(".footer");
const skip = document.querySelector(".skip");
const datum = document.getElementById("datum");
const notch = document.getElementById("datum-notch");
const hero = document.querySelector(".stage");
const instNo = document.getElementById("inst-no");
const instTitle = document.getElementById("inst-title");
const pauseBtn = document.getElementById("pause");
const progress = document.getElementById("progress");
const loader = document.getElementById("loader");
const loadPct = document.getElementById("load-pct");

class Filmstrip {
  constructor(row, { speed, direction, index }) {
    this.row = row;
    this.track = row.querySelector(".track");
    this.group = row.querySelector(".group");
    this.speed = speed;
    this.direction = direction;
    this.index = index;
    this.offset = 0;
    this.vx = 0;
    this.gliding = false;
    this.dragging = false;
    this.pending = false;
    this.hover = false;
    this.suppressClick = false;
    this.moved = 0;
    this.width = 1;
    this.seeded = false;
    this.samples = [];
    this.onDown = this.onDown.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onUp = this.onUp.bind(this);
    this.onClick = this.onClick.bind(this);
    this.bind();
    this.measure();
  }

  bind() {
    this.row.addEventListener("pointerenter", () => {
      if (canHover) this.hover = true;
    });
    this.row.addEventListener("pointerleave", () => {
      this.hover = false;
      this.pending = false;
      this.dragging = false;
      this.row.classList.remove("is-dragging");
    });
    this.row.addEventListener("focusin", (e) => {
      this.hover = true;
      const frame = e.target.closest?.(".frame");
      if (!frame || !e.target.matches(":focus-visible")) return;
      this.center(frame);
    });
    this.row.addEventListener("focusout", (e) => {
      if (!this.row.contains(e.relatedTarget)) this.hover = false;
    });
    this.row.addEventListener("pointerdown", this.onDown);
    this.row.addEventListener("pointermove", this.onMove, { passive: false });
    this.row.addEventListener("pointerup", this.onUp);
    this.row.addEventListener("pointercancel", this.onUp);
    this.row.addEventListener("click", this.onClick, true);
    this.row.addEventListener("dragstart", (e) => e.preventDefault());
  }

  measure() {
    const w = this.group.getBoundingClientRect().width;
    if (w > 8) {
      this.width = w;
      if (!this.seeded) {
        this.offset = ((this.index + 1) * w) / 2.7;
        this.seeded = true;
        this.render();
      }
    }
  }

  wrap(v) {
    const w = this.width || 1;
    v %= w;
    if (v < 0) v += w;
    return v;
  }

  render() {
    this.offset = this.wrap(this.offset);
    this.track.style.transform = `translate3d(${-this.offset}px,0,0)`;
  }

  center(frame) {
    this.measure();
    const rowW = this.row.getBoundingClientRect().width;
    const frameW = frame.getBoundingClientRect().width;
    this.offset = this.wrap(frame.offsetLeft - (rowW - frameW) / 2);
    this.gliding = false;
    this.render();
  }

  onDown(e) {
    if (e.button !== undefined && e.button !== 0) return;
    this.pending = true;
    this.dragging = false;
    this.moved = 0;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.lastX = e.clientX;
    this.lastT = performance.now();
    this.samples = [];
  }

  onMove(e) {
    if (!this.pending && !this.dragging) return;
    const dx = e.clientX - this.lastX;
    if (!this.dragging) {
      const adx = Math.abs(e.clientX - this.startX);
      const ady = Math.abs(e.clientY - this.startY);
      if (adx < 8 && ady < 8) return;
      if (ady > adx) {
        this.pending = false;
        return;
      }
      this.dragging = true;
      this.row.classList.add("is-dragging");
      this.gliding = false;
      if (this.row.setPointerCapture) this.row.setPointerCapture(e.pointerId);
    }
    e.preventDefault();
    this.offset -= dx;
    this.moved += Math.abs(dx);
    const now = performance.now();
    const dt = Math.max(8, now - this.lastT);
    this.samples.push((-dx / dt) * 1000);
    if (this.samples.length > 5) this.samples.shift();
    this.lastX = e.clientX;
    this.lastT = now;
    this.render();
  }

  onUp() {
    if (this.moved > 8) this.suppressClick = true;
    if (this.dragging && this.samples.length) {
      const avg = this.samples.reduce((a, b) => a + b, 0) / this.samples.length;
      const clamped = Math.max(-2200, Math.min(2200, avg));
      this.vx = Math.abs(clamped) < 80 ? 0 : clamped;
      this.gliding = this.vx !== 0;
    }
    this.dragging = false;
    this.pending = false;
    this.row.classList.remove("is-dragging");
  }

  onClick(e) {
    if (!this.suppressClick) return;
    e.preventDefault();
    e.stopPropagation();
    this.suppressClick = false;
  }

  update(dt) {
    if (reduce || this.dragging) return;
    const hold = document.body.classList.contains("is-viewer-open") || document.body.classList.contains("is-paused");
    if (hold) {
      this.gliding = false;
      return;
    }
    if (this.gliding) {
      this.offset += this.vx * dt;
      this.vx *= Math.exp(-2.4 * dt);
      if (Math.abs(this.vx) < 12) {
        this.vx = 0;
        this.gliding = false;
      }
      this.render();
      return;
    }
    if (!this.hover) {
      this.offset += this.direction * this.speed * dt;
      this.render();
    }
  }
}

function fa(n) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

function cycle(list, count, shift) {
  const out = [];
  for (let i = 0; i < count; i += 1) out.push(list[(i + shift) % list.length]);
  return out;
}

function frameButton(project, index, width, eager) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "frame";
  btn.dataset.id = project.id;
  btn.style.setProperty("--w", `${width}px`);
  btn.style.background = project.tone;
  btn.setAttribute("aria-label", `${project.title}، ${project.city}، ${project.type}، ${project.year}`);
  const no = String(index + 1).padStart(2, "0");
  btn.innerHTML = `
    <span class="frame-media">
      <img src="${project.image}" alt="" draggable="false" decoding="async" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'}>
    </span>
    <span class="frame-meta">
      <span class="frame-no">${no}</span>
      <span class="frame-title">${project.title}</span>
    </span>`;
  return btn;
}

function materialFigure(item, width) {
  const fig = document.createElement("figure");
  fig.className = "frame frame-mat";
  fig.style.setProperty("--w", `${width}px`);
  fig.style.background = item.tone;
  fig.innerHTML = `
    <span class="frame-media"><img src="${item.image}" alt="" draggable="false" decoding="async" loading="lazy"></span>
    <figcaption><span>${item.name}</span><small>${item.place}</small></figcaption>`;
  return fig;
}

function mountStrip(board, { size, speed, direction, index, nodes }) {
  const row = document.createElement("div");
  row.className = "row";
  row.dataset.size = size;
  const track = document.createElement("div");
  track.className = "track";
  const group = document.createElement("div");
  group.className = "group";
  nodes.forEach((node) => group.append(node));
  const clone = group.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  clone.querySelectorAll("button").forEach((b) => { b.tabIndex = -1; });
  clone.querySelectorAll("img").forEach((img) => {
    img.loading = "lazy";
    img.removeAttribute("fetchpriority");
  });
  track.append(group, clone);
  row.append(track);
  board.append(row);
  strips.push(new Filmstrip(row, { speed, direction, index }));
}

function buildHero() {
  if (reduce) {
    heroBoard.classList.add("is-grid");
    PROJECTS.forEach((project, i) => heroBoard.append(frameButton(project, i, 320, i < 2)));
    return;
  }
  const specs = [
    { size: "a", speed: 54, direction: 1, shift: 0 },
    { size: "b", speed: 96, direction: -1, shift: 3 },
    { size: "c", speed: 42, direction: 1, shift: 5 },
    { size: "d", speed: 78, direction: -1, shift: 1 }
  ];
  specs.forEach((spec, rowIndex) => {
    const items = cycle(PROJECTS, 12, spec.shift);
    const nodes = items.map((project, i) => frameButton(
      project,
      PROJECTS.indexOf(project),
      WIDTHS[(i + spec.shift) % WIDTHS.length],
      rowIndex === 0 && i < 3
    ));
    mountStrip(heroBoard, { ...spec, index: rowIndex, nodes });
  });
}

function buildMaterials() {
  if (reduce) {
    materialBoard.classList.add("is-grid");
    MATERIALS.forEach((item) => materialBoard.append(materialFigure(item, item.ratioW)));
    return;
  }
  const specs = [
    { size: "m", speed: 46, direction: -1, shift: 0 },
    { size: "n", speed: 70, direction: 1, shift: 2 }
  ];
  specs.forEach((spec, rowIndex) => {
    const items = cycle(MATERIALS, 10, spec.shift);
    const nodes = items.map((item, i) => materialFigure(item, [280, 420, 240, 360, 500, 220][(i + spec.shift) % 6]));
    mountStrip(materialBoard, { ...spec, index: rowIndex + 3, nodes });
  });
}

function visibleProjects() {
  if (filter === "همه") return PROJECTS;
  return PROJECTS.filter((p) => p.type === filter);
}

function setActive(id) {
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return;
  activeId = id;
  document.querySelectorAll(".project-row").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.id === id);
    if (el.dataset.id === id) el.setAttribute("aria-current", "true");
    else el.removeAttribute("aria-current");
  });
  const index = PROJECTS.indexOf(project);
  indexKicker.textContent = `${String(index + 1).padStart(2, "0")} — ${project.type}`;
  indexTitle.textContent = project.title;
  indexOpen.setAttribute("aria-label", `باز کردن پروندهٔ ${project.title}`);
  if (indexImg.dataset.id === id) return;
  indexImg.dataset.id = id;
  indexImg.style.opacity = "0";
  let swapped = false;
  const swap = () => {
    if (swapped || activeId !== id) return;
    swapped = true;
    indexImg.src = project.image;
    requestAnimationFrame(() => { indexImg.style.opacity = "1"; });
  };
  const next = new Image();
  next.onload = swap;
  next.onerror = swap;
  next.src = project.image;
  if (next.complete) swap();
}

function renderFilters() {
  const types = ["همه", ...new Set(PROJECTS.map((p) => p.type))];
  types.forEach((type) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter";
    btn.textContent = type;
    btn.setAttribute("aria-pressed", String(type === filter));
    btn.addEventListener("click", () => {
      filter = type;
      [...filtersEl.children].forEach((child) => {
        child.setAttribute("aria-pressed", String(child === btn));
      });
      const items = visibleProjects();
      if (!items.some((p) => p.id === activeId) && items[0]) setActive(items[0].id);
      renderList();
    });
    filtersEl.append(btn);
  });
}

function renderList() {
  list.replaceChildren();
  const items = visibleProjects();
  countEl.textContent = `${fa(items.length)} پروژه`;
  emptyEl.hidden = items.length > 0;
  items.forEach((project) => {
    const li = document.createElement("li");
    const index = PROJECTS.indexOf(project);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "project-row";
    btn.dataset.id = project.id;
    if (project.id === activeId) {
      btn.classList.add("is-active");
      btn.setAttribute("aria-current", "true");
    }
    btn.innerHTML = `
      <span class="row-no">${String(index + 1).padStart(2, "0")}</span>
      <span>
        <span class="row-title">${project.title}</span>
        <span class="row-sub">${project.city} · ${project.type} · ${project.year}</span>
      </span>
      ${ARROW}`;
    btn.addEventListener("pointerenter", () => setActive(project.id));
    btn.addEventListener("focus", () => setActive(project.id));
    btn.addEventListener("click", () => applyOpen(project.id, "push"));
    li.append(btn);
    list.append(li);
  });
}

function fillViewer(project) {
  const index = PROJECTS.indexOf(project);
  const fields = {
    no: `${String(index + 1).padStart(2, "0")} / ${String(PROJECTS.length).padStart(2, "0")}`,
    title: project.title,
    text: project.text,
    city: project.city,
    year: project.year,
    area: project.area,
    status: project.status,
    type: project.type,
    client: project.client
  };
  Object.entries(fields).forEach(([key, value]) => {
    const node = viewer.querySelector(`[data-field="${key}"]`);
    if (node) node.textContent = value;
  });
  const img = viewer.querySelector(".viewer-img");
  img.src = project.image;
  img.alt = `تصویر پروژهٔ ${project.title} در ${project.city}`;
  img.style.animation = "none";
  void img.offsetWidth;
  img.style.animation = "";
}

function syncInert() {
  const menuOn = menu.classList.contains("is-open");
  const viewOn = viewer.classList.contains("is-open");
  const lock = menuOn || viewOn;
  document.body.classList.toggle("is-locked", lock);
  main.inert = lock;
  footer.inert = lock;
  header.inert = lock;
  skip.inert = lock;
  menu.inert = !menuOn;
  viewer.inert = !viewOn;
}

function applyOpen(id, mode) {
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return;
  const wasOpen = viewer.classList.contains("is-open");
  if (!wasOpen) viewerReturn = document.activeElement;
  openId = id;
  fillViewer(project);
  setActive(id);
  viewer.classList.add("is-open");
  viewer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-viewer-open");
  syncInert();
  if (mode === "push") {
    history.pushState({ project: id, pushed: true }, "", `#project-${id}`);
  } else if (mode === "replace") {
    history.replaceState({ project: id, pushed: Boolean(history.state?.pushed) }, "", `#project-${id}`);
  }
  if (!wasOpen) viewer.querySelector(".viewer-close").focus({ preventScroll: true });
}

function applyClose() {
  if (!viewer.classList.contains("is-open")) return;
  viewer.classList.remove("is-open");
  viewer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-viewer-open");
  openId = null;
  syncInert();
  if (viewerReturn && typeof viewerReturn.focus === "function") {
    viewerReturn.focus({ preventScroll: true });
  }
}

function requestClose() {
  if (history.state?.pushed) {
    history.back();
    return;
  }
  if (location.hash.startsWith("#project-")) {
    history.replaceState(null, "", `${location.pathname}${location.search}`);
  }
  applyClose();
}

function idFromHash() {
  const match = location.hash.match(/^#project-([a-z0-9-]+)$/);
  if (!match) return null;
  return PROJECTS.some((p) => p.id === match[1]) ? match[1] : null;
}

function neighbor(dir) {
  const index = PROJECTS.findIndex((p) => p.id === openId);
  if (index < 0) return;
  const next = (index + dir + PROJECTS.length) % PROJECTS.length;
  applyOpen(PROJECTS[next].id, history.state?.pushed ? "replace" : "replace");
}

function focusable(container) {
  return [...container.querySelectorAll("a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex='-1'])")]
    .filter((el) => el.getClientRects().length > 0);
}

function trapFocus(container, event) {
  if (event.key !== "Tab") return;
  const nodes = focusable(container);
  if (!nodes.length) return;
  const first = nodes[0];
  const last = nodes[nodes.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function openMenu() {
  menuReturn = document.activeElement;
  menu.classList.add("is-open");
  menu.setAttribute("aria-hidden", "false");
  document.querySelector(".nav-toggle").setAttribute("aria-expanded", "true");
  syncInert();
  const first = menu.querySelector("nav a");
  if (first) first.focus({ preventScroll: true });
}

function closeMenu() {
  if (!menu.classList.contains("is-open")) return;
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  document.querySelector(".nav-toggle").setAttribute("aria-expanded", "false");
  syncInert();
  if (menuReturn && typeof menuReturn.focus === "function") menuReturn.focus({ preventScroll: true });
}

function setInstrument(id) {
  if (instTitle.dataset.id === id) return;
  instTitle.dataset.id = id || "";
  if (!id) {
    instNo.textContent = "—";
    instTitle.textContent = "روی یک قاب بایستید";
    return;
  }
  const project = PROJECTS.find((p) => p.id === id);
  const index = PROJECTS.indexOf(project);
  instNo.textContent = String(index + 1).padStart(2, "0");
  instTitle.textContent = `${project.title} — ${project.city}، ${project.type}، ${project.year}`;
}

function bindHero() {
  heroBoard.addEventListener("click", (e) => {
    const frame = e.target.closest(".frame");
    if (!frame || !frame.dataset.id) return;
    applyOpen(frame.dataset.id, "push");
  });
  hero.addEventListener("pointerover", (e) => {
    const frame = e.target.closest?.(".frame");
    if (frame?.dataset.id) setInstrument(frame.dataset.id);
  });
  if (!canHover) return;
  let hot = null;
  hero.addEventListener("pointermove", (e) => {
    const rect = hero.getBoundingClientRect();
    datum.classList.add("is-on");
    datum.style.transform = `translate3d(${e.clientX - rect.left}px,0,0)`;
    notch.style.top = `${e.clientY - rect.top}px`;
    const frame = e.target.closest?.(".frame");
    if (hot && hot !== frame) {
      hot.style.removeProperty("--rx");
      hot.style.removeProperty("--ry");
    }
    hot = frame || null;
    if (!frame) return;
    const box = frame.getBoundingClientRect();
    const x = (e.clientX - box.left) / box.width - 0.5;
    const y = (e.clientY - box.top) / box.height - 0.5;
    frame.style.setProperty("--ry", `${(-x * 10).toFixed(2)}deg`);
    frame.style.setProperty("--rx", `${(y * 8).toFixed(2)}deg`);
  });
  hero.addEventListener("pointerleave", () => {
    datum.classList.remove("is-on");
    setInstrument(null);
    if (hot) {
      hot.style.removeProperty("--rx");
      hot.style.removeProperty("--ry");
      hot = null;
    }
  });
}

function bindChrome() {
  pauseBtn.addEventListener("click", () => {
    const on = document.body.classList.toggle("is-paused");
    pauseBtn.setAttribute("aria-pressed", String(on));
    pauseBtn.textContent = on ? "ادامهٔ حرکت" : "توقف حرکت";
  });
  document.querySelector(".nav-toggle").addEventListener("click", openMenu);
  document.getElementById("nav-close").addEventListener("click", closeMenu);
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  indexOpen.addEventListener("click", () => applyOpen(activeId, "push"));
  viewer.querySelector(".viewer-close").addEventListener("click", requestClose);
  document.getElementById("viewer-prev").addEventListener("click", () => neighbor(-1));
  document.getElementById("viewer-next").addEventListener("click", () => neighbor(1));
  list.addEventListener("keydown", (e) => {
    const buttons = [...list.querySelectorAll(".project-row")];
    const index = buttons.indexOf(document.activeElement);
    if (e.key === "ArrowDown" && index >= 0 && index < buttons.length - 1) {
      e.preventDefault();
      buttons[index + 1].focus();
    }
    if (e.key === "ArrowUp" && index > 0) {
      e.preventDefault();
      buttons[index - 1].focus();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (viewer.classList.contains("is-open")) requestClose();
      else if (menu.classList.contains("is-open")) closeMenu();
    }
    if (viewer.classList.contains("is-open")) {
      trapFocus(viewer, e);
      if (e.key === "ArrowLeft") { e.preventDefault(); neighbor(1); }
      if (e.key === "ArrowRight") { e.preventDefault(); neighbor(-1); }
    } else if (menu.classList.contains("is-open")) {
      trapFocus(menu, e);
    }
  });
  window.addEventListener("popstate", () => {
    const id = idFromHash();
    if (id) applyOpen(id, "none");
    else applyClose();
  });
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement)) return;
    img.closest(".frame, .index-visual, .viewer-media")?.classList.add("is-fallback");
  }, true);

  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const clock = document.getElementById("clock");
  const renderClock = () => {
    const time = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Tehran",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23"
    }).format(new Date());
    clock.textContent = time;
    clock.setAttribute("aria-label", `ساعت تهران ${time}`);
  };
  renderClock();
  setInterval(renderClock, 30000);
  document.getElementById("year").textContent = new Intl.DateTimeFormat("fa-IR-u-ca-persian", { year: "numeric" }).format(new Date());

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    });
  }, { threshold: 0.18 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  if (reduce) document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));

  let resizeT = 0;
  window.addEventListener("resize", () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => strips.forEach((strip) => strip.measure()), 120);
  });
}

function bindForm() {
  const form = document.getElementById("contact-form");
  const summary = document.getElementById("form-summary");
  const success = document.getElementById("form-success");
  const setError = (id, message) => {
    const input = document.getElementById(id);
    const error = document.getElementById(`${id}-error`);
    error.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
    if (message) input.setAttribute("aria-describedby", `${id}-error`);
    else input.removeAttribute("aria-describedby");
    return !message;
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const okName = setError("name", name ? "" : "نام را بنویسید.");
    const okEmail = setError("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "ایمیل معتبر بنویسید.");
    const okMessage = setError("message", message ? "" : "چند خط دربارهٔ پروژه بنویسید.");
    if (!okName || !okEmail || !okMessage) {
      summary.textContent = "چند مورد را کامل کنید.";
      form.querySelector("[aria-invalid='true']")?.focus();
      return;
    }
    summary.textContent = "";
    form.hidden = true;
    success.hidden = false;
    document.getElementById("form-reset").focus();
  });
  document.getElementById("form-reset").addEventListener("click", () => {
    form.reset();
    ["name", "email", "message"].forEach((id) => setError(id, ""));
    summary.textContent = "";
    success.hidden = true;
    form.hidden = false;
    form.name.focus();
  });
}

function startWash() {
  const canvas = document.getElementById("wash");
  if (!canvas || reduce) return;
  const ctx = canvas.getContext("2d");
  const stage = canvas.parentElement;
  const palette = [
    [46, 224, 208],
    [214, 96, 255],
    [255, 176, 72],
    [90, 150, 255],
    [255, 84, 140]
  ];
  const orbs = [
    { x: 0.12, y: 0.22, r: 0.46, c: 0, s: 0.07 },
    { x: 0.82, y: 0.18, r: 0.4, c: 1, s: 0.05 },
    { x: 0.58, y: 0.78, r: 0.5, c: 2, s: 0.06 },
    { x: 0.28, y: 0.62, r: 0.34, c: 3, s: 0.08 }
  ];
  const dots = Array.from({ length: 70 }, (_, i) => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.00035,
    vy: (Math.random() - 0.5) * 0.00035,
    rad: 2.2 + Math.random() * 3.2,
    c: i % palette.length,
    a: 0.45 + Math.random() * 0.5,
    life: 1
  }));
  let px = 0.5;
  let py = 0.4;
  let tx = 0.5;
  let ty = 0.4;
  stage.addEventListener("pointermove", (e) => {
    const rect = stage.getBoundingClientRect();
    tx = (e.clientX - rect.left) / rect.width;
    ty = (e.clientY - rect.top) / rect.height;
    for (let n = 0; n < 8; n += 1) {
      const ang = Math.random() * Math.PI * 2;
      const sp = 0.002 + Math.random() * 0.006;
      dots.push({
        x: tx,
        y: ty,
        vx: Math.cos(ang) * sp,
        vy: Math.sin(ang) * sp,
        rad: 2 + Math.random() * 3.5,
        c: (n + dots.length) % palette.length,
        a: 0.95,
        life: 0.98
      });
    }
    if (dots.length > 240) dots.splice(0, dots.length - 240);
  });
  const draw = (now) => {
    const dpr = Math.min(1.5, window.devicePixelRatio || 1);
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    const pw = Math.floor(w * dpr);
    const ph = Math.floor(h * dpr);
    if (canvas.width !== pw || canvas.height !== ph) {
      canvas.width = pw;
      canvas.height = ph;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = "source-over";
    px += (tx - px) * 0.08;
    py += (ty - py) * 0.08;
    const t = now / 1000;
    for (const orb of orbs) {
      const x = (orb.x + Math.sin(t * orb.s + orb.c) * 0.1) * w;
      const y = (orb.y + Math.cos(t * orb.s * 0.8 + orb.c) * 0.08) * h;
      const rad = orb.r * Math.max(w, h);
      const [r, g, b] = palette[orb.c];
      const grad = ctx.createRadialGradient(x, y, 0, x, y, rad);
      grad.addColorStop(0, `rgba(${r},${g},${b},0.85)`);
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, rad, 0, Math.PI * 2);
      ctx.fill();
    }
    const bloom = Math.max(w, h) * 0.34;
    const [cr, cg, cb] = palette[0];
    const [mr, mg, mb] = palette[1];
    const cursor = ctx.createRadialGradient(px * w, py * h, 0, px * w, py * h, bloom);
    cursor.addColorStop(0, `rgba(${cr},${cg},${cb},0.42)`);
    cursor.addColorStop(0.35, `rgba(${mr},${mg},${mb},0.16)`);
    cursor.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = cursor;
    ctx.fillRect(0, 0, w, h);
    for (let i = dots.length - 1; i >= 0; i -= 1) {
      const d = dots[i];
      d.x += d.vx;
      d.y += d.vy;
      d.vx *= 0.985;
      d.vy *= 0.985;
      if (d.life < 1) d.life -= 0.012;
      if (d.life <= 0) {
        dots.splice(i, 1);
        continue;
      }
      if (d.x < -0.04) d.x = 1.04;
      if (d.x > 1.04) d.x = -0.04;
      if (d.y < -0.04) d.y = 1.04;
      if (d.y > 1.04) d.y = -0.04;
      const [r, g, b] = palette[d.c];
      ctx.fillStyle = `rgba(${r},${g},${b},${d.a * d.life})`;
      ctx.beginPath();
      ctx.arc(d.x * w, d.y * h, d.rad, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
    requestAnimationFrame(draw);
  };
  requestAnimationFrame(draw);
}

function startLoop() {
  if (reduce) return;
  let last = performance.now();
  let raf = 0;
  const tick = (now) => {
    const dt = Math.min(0.034, (now - last) / 1000);
    last = now;
    strips.forEach((strip) => strip.update(dt));
    raf = requestAnimationFrame(tick);
  };
  const start = () => {
    last = performance.now();
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(tick);
  };
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else start();
  });
  start();
}

function armLoader() {
  const started = performance.now();
  let pct = 0;
  let revealed = false;
  const timer = reduce ? null : setInterval(() => {
    pct = Math.min(96, pct + 1 + Math.random() * 5);
    loadPct.textContent = String(Math.floor(pct)).padStart(2, "0");
  }, 45);
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    if (timer) clearInterval(timer);
    loadPct.textContent = "100";
    const wait = reduce ? 0 : Math.max(0, 1300 - (performance.now() - started));
    setTimeout(() => {
      document.body.classList.add("is-ready");
      loader.inert = true;
      loader.setAttribute("aria-hidden", "true");
      const id = idFromHash();
      if (id) applyOpen(id, "replace");
    }, wait);
  };
  if (document.readyState === "complete") reveal();
  else window.addEventListener("load", reveal);
  setTimeout(reveal, 2800);
}

buildHero();
buildMaterials();
renderFilters();
renderList();
setActive(PROJECTS[0].id);
bindHero();
bindChrome();
bindForm();
syncInert();
startWash();
startLoop();
armLoader();
