/* Hero video shader: the footage, and under the cursor its own gold line drawing. */
(function () {
  const VERT = `
    attribute vec2 aPos;
    varying vec2 vUv;
    void main() {
      vUv = aPos * 0.5 + 0.5;
      gl_Position = vec4(aPos, 0.0, 1.0);
    }
  `;

  const FRAG = `
    precision highp float;
    uniform sampler2D uVideo;
    uniform sampler2D uMask;
    uniform vec2 uRes;
    uniform vec2 uVidRes;
    uniform float uTime;
    uniform float uIntro;
    varying vec2 vUv;

    const vec3 GOLD = vec3(0.902, 0.812, 0.624);
    const vec3 INK = vec3(0.035, 0.031, 0.027);

    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
    }
    vec2 cover(vec2 uv) {
      float rs = uRes.x / uRes.y;
      float ri = uVidRes.x / uVidRes.y;
      vec2 s = rs > ri ? vec2(1.0, ri / rs) : vec2(rs / ri, 1.0);
      return (uv - 0.5) * s + 0.5;
    }
    float luma(vec2 uv) { return dot(texture2D(uVideo, uv).rgb, vec3(0.299, 0.587, 0.114)); }

    void main() {
      vec2 uv = vUv;
      float n = noise(uv * vec2(7.0, 4.0) + uTime * 0.12);
      float m = texture2D(uMask, uv).r;
      float mask = smoothstep(0.3, 0.62, m + (n - 0.5) * 0.42);

      vec2 vuv = cover(uv + (n - 0.5) * 0.012 * m);
      vuv = (vuv - 0.5) * (1.0 - 0.07 * (1.0 - uIntro)) + 0.5;

      vec3 src = texture2D(uVideo, vuv).rgb;
      float l = dot(src, vec3(0.299, 0.587, 0.114));
      vec3 film = mix(vec3(l), src, 0.32) * vec3(1.06, 0.98, 0.86);
      film = pow(film, vec3(1.08)) * 0.92;

      vec2 px = 1.3 / uVidRes;
      float tl = luma(vuv + px * vec2(-1.0, 1.0));
      float tc = luma(vuv + px * vec2(0.0, 1.0));
      float tr = luma(vuv + px * vec2(1.0, 1.0));
      float ml = luma(vuv + px * vec2(-1.0, 0.0));
      float mr = luma(vuv + px * vec2(1.0, 0.0));
      float bl = luma(vuv + px * vec2(-1.0, -1.0));
      float bc = luma(vuv + px * vec2(0.0, -1.0));
      float br = luma(vuv + px * vec2(1.0, -1.0));
      float gx = -tl - 2.0 * ml - bl + tr + 2.0 * mr + br;
      float gy = -tl - 2.0 * tc - tr + bl + 2.0 * bc + br;
      float edge = smoothstep(0.1, 0.42, length(vec2(gx, gy)));

      vec2 g = fract(uv * uRes / 46.0);
      float grid = (step(g.x, 0.025) + step(g.y, 0.025)) * 0.07;
      vec3 plan = INK + GOLD * (edge * 0.95 + grid) + GOLD * l * 0.05;

      vec3 col = mix(film, plan, mask);
      float rim = smoothstep(0.0, 0.5, mask) * smoothstep(1.0, 0.5, mask);
      col += GOLD * rim * 0.35;

      float vig = smoothstep(1.15, 0.25, length((uv - 0.5) * vec2(1.25, 1.0)));
      col *= mix(0.5, 1.0, vig);
      col += (hash(uv * uRes + fract(uTime * 7.0) * 91.0) - 0.5) * 0.045;
      col *= smoothstep(0.0, 0.6, uIntro);
      gl_FragColor = vec4(col, 1.0);
    }
  `;

  function compile(gl, type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  }

  function texture(gl) {
    const t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([8, 7, 6, 255]));
    return t;
  }

  function start({ video, canvas, surface }) {
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, preserveDrawingBuffer: false });
    if (!gl) return null;
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const u = {};
    ["uVideo", "uMask", "uRes", "uVidRes", "uTime", "uIntro"].forEach((k) => { u[k] = gl.getUniformLocation(prog, k); });
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    const videoTex = texture(gl);
    const maskTex = texture(gl);
    gl.uniform1i(u.uVideo, 0);
    gl.uniform1i(u.uMask, 1);

    const mask = document.createElement("canvas");
    const mctx = mask.getContext("2d");
    const pointer = { x: 0.5, y: 0.5, lx: 0.5, ly: 0.5, active: false, last: 0 };
    const state = { intro: 0, running: true, visible: true };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      const mw = 320;
      const mh = Math.max(1, Math.round((mw * canvas.clientHeight) / Math.max(1, canvas.clientWidth)));
      if (mask.width !== mw || mask.height !== mh) {
        mask.width = mw;
        mask.height = mh;
        mctx.fillStyle = "#000";
        mctx.fillRect(0, 0, mw, mh);
      }
    };
    new ResizeObserver(resize).observe(canvas);
    resize();

    surface.addEventListener("pointermove", (e) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = (e.clientX - r.left) / r.width;
      pointer.y = (e.clientY - r.top) / r.height;
      if (!pointer.active) {
        pointer.lx = pointer.x;
        pointer.ly = pointer.y;
      }
      pointer.active = true;
      pointer.last = performance.now();
    });
    surface.addEventListener("pointerleave", () => { pointer.active = false; });
    new IntersectionObserver(([entry]) => { state.visible = entry.isIntersecting; }).observe(canvas);

    const paint = (now) => {
      const w = mask.width;
      const h = mask.height;
      mctx.globalCompositeOperation = "source-over";
      mctx.fillStyle = "rgba(0,0,0,0.028)";
      mctx.fillRect(0, 0, w, h);
      let tx = pointer.x;
      let ty = pointer.y;
      const idle = !pointer.active || now - pointer.last > 2600;
      if (idle) {
        const t = now / 1000;
        tx = 0.5 + Math.sin(t * 0.37) * 0.3 + Math.sin(t * 0.91) * 0.06;
        ty = 0.45 + Math.cos(t * 0.29) * 0.18;
      }
      const dx = tx - pointer.lx;
      const dy = ty - pointer.ly;
      const dist = Math.hypot(dx * w, dy * h);
      const steps = Math.min(24, Math.max(1, Math.ceil(dist / 4)));
      const radius = (idle ? 0.24 : 0.22) * Math.max(w, h) * 0.5 + Math.min(34, dist * 0.45);
      mctx.globalCompositeOperation = "lighter";
      for (let i = 1; i <= steps; i += 1) {
        const k = i / steps;
        const x = (pointer.lx + dx * k) * w;
        const y = (pointer.ly + dy * k) * h;
        const grad = mctx.createRadialGradient(x, y, 0, x, y, radius);
        const a = idle ? 0.05 : 0.12;
        grad.addColorStop(0, `rgba(255,255,255,${a})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        mctx.fillStyle = grad;
        mctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
      }
      pointer.lx = tx;
      pointer.ly = ty;
    };

    const frame = (now) => {
      requestAnimationFrame(frame);
      if (!state.visible || document.hidden) return;
      resize();
      paint(now);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, videoTex);
      if (video.readyState >= 2) {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
        gl.uniform2f(u.uVidRes, video.videoWidth || 1280, video.videoHeight || 720);
      } else {
        gl.uniform2f(u.uVidRes, 1280, 720);
      }
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, maskTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, mask);
      gl.uniform2f(u.uRes, canvas.width, canvas.height);
      gl.uniform1f(u.uTime, now / 1000);
      gl.uniform1f(u.uIntro, state.intro);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    requestAnimationFrame(frame);
    return state;
  }

  window.HeroGL = { start };
})();
