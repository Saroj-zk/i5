import { useEffect, RefObject } from 'react';

interface CanvasCtx {
  ctx: CanvasRenderingContext2D;
  w: number;
  h: number;
}

function setupCanvas(canvas: HTMLCanvasElement): CanvasCtx {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement!.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';
  const ctx = canvas.getContext('2d')!;
  ctx.scale(dpr, dpr);
  return { ctx, w: rect.width, h: rect.height };
}

// ── CARD 01: Orbital Price Rings ──────────────────────────────
export function useOrbitalCanvas(ref: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let ctx: CanvasRenderingContext2D, w: number, h: number;
    let time = 0;
    let rafId: number;

    const rings = [
      { r: 80, speed: 0.008, dots: 6, color: '19,195,143', width: 1.5 },
      { r: 140, speed: -0.005, dots: 10, color: '19,195,143', width: 1 },
      { r: 200, speed: 0.003, dots: 14, color: '19,195,143', width: 0.7 },
      { r: 260, speed: -0.002, dots: 18, color: '255,255,255', width: 0.4 },
    ];

    function resize() {
      const s = setupCanvas(canvas!);
      ctx = s.ctx; w = s.w; h = s.h;
    }

    function draw() {
      time += 1;
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.5, cy = h * 0.5;

      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 280);
      glow.addColorStop(0, 'rgba(19,195,143,0.06)');
      glow.addColorStop(0.5, 'rgba(19,195,143,0.02)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#fff';
      ctx.font = '700 28px Inter';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('$67,842', cx, cy - 8);
      ctx.fillStyle = 'rgba(19,195,143,0.9)';
      ctx.font = '500 13px "JetBrains Mono"';
      ctx.fillText('+2.34%', cx, cy + 18);

      const pulseR = 40 + Math.sin(time * 0.03) * 5;
      ctx.beginPath();
      ctx.arc(cx, cy, pulseR, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(19,195,143,0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();

      rings.forEach((ring) => {
        const angle = time * ring.speed;
        ctx.beginPath();
        ctx.arc(cx, cy, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${ring.color}, 0.08)`;
        ctx.lineWidth = ring.width;
        ctx.setLineDash([4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);

        for (let i = 0; i < ring.dots; i++) {
          const a = angle + (i / ring.dots) * Math.PI * 2;
          const x = cx + Math.cos(a) * ring.r;
          const y = cy + Math.sin(a) * ring.r;
          const size = 1.5 + Math.sin(time * 0.02 + i) * 0.8;
          const alpha = 0.3 + Math.sin(time * 0.015 + i * 0.5) * 0.2;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${ring.color}, ${alpha})`;
          ctx.fill();
        }

        const hx = cx + Math.cos(angle) * ring.r;
        const hy = cy + Math.sin(angle) * ring.r;
        ctx.beginPath(); ctx.arc(hx, hy, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(19,195,143,0.8)`; ctx.fill();
        ctx.beginPath(); ctx.arc(hx, hy, 10, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(19,195,143,0.12)'; ctx.fill();
      });

      rings.forEach(ring => {
        const ha = time * ring.speed;
        const hx = cx + Math.cos(ha) * ring.r;
        const hy = cy + Math.sin(ha) * ring.r;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(hx, hy);
        ctx.strokeStyle = 'rgba(19,195,143,0.04)';
        ctx.lineWidth = 0.5; ctx.stroke();
      });

      rafId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize); };
  }, [ref]);
}

// ── CARD 02: Radar Sweep Scanner ─────────────────────────────
export function useRadarCanvas(ref: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let ctx: CanvasRenderingContext2D, w: number, h: number;
    let angle = 0;
    let rafId: number;

    interface Token { x: number; y: number; alpha: number; life: number; age: number; label: string; size: number; }
    const tokens: Token[] = [];

    function spawnToken() {
      const a = Math.random() * Math.PI * 2;
      const r = 40 + Math.random() * 180;
      tokens.push({
        x: Math.cos(a) * r, y: Math.sin(a) * r,
        alpha: 1, life: 120 + Math.random() * 100, age: 0,
        label: ['PEPE','WIF','BONK','FLOKI','DOGE','SHIB','TURBO','MOG'][Math.floor(Math.random() * 8)],
        size: 3 + Math.random() * 3,
      });
    }
    for (let i = 0; i < 12; i++) spawnToken();

    function resize() {
      const s = setupCanvas(canvas!);
      ctx = s.ctx; w = s.w; h = s.h;
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.5, cy = h * 0.5;
      angle += 0.012;

      for (let i = 1; i <= 5; i++) {
        ctx.beginPath(); ctx.arc(cx, cy, i * 50, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(19,195,143,0.06)'; ctx.lineWidth = 0.5; ctx.stroke();
      }

      ctx.beginPath();
      ctx.moveTo(cx - 250, cy); ctx.lineTo(cx + 250, cy);
      ctx.moveTo(cx, cy - 250); ctx.lineTo(cx, cy + 250);
      ctx.strokeStyle = 'rgba(19,195,143,0.04)'; ctx.lineWidth = 0.5; ctx.stroke();

      const sweepLen = 0.8;
      for (let i = 0; i < 30; i++) {
        const a = angle - (i / 30) * sweepLen;
        const alpha = (1 - i / 30) * 0.12;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, 250, a, a + 0.03); ctx.closePath();
        ctx.fillStyle = `rgba(19,195,143,${alpha})`; ctx.fill();
      }

      const sx = cx + Math.cos(angle) * 250;
      const sy = cy + Math.sin(angle) * 250;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(sx, sy);
      ctx.strokeStyle = 'rgba(19,195,143,0.5)'; ctx.lineWidth = 1.5; ctx.stroke();

      ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(19,195,143,0.6)'; ctx.fill();

      tokens.forEach((t, idx) => {
        t.age++;
        if (t.age > t.life) { tokens.splice(idx, 1); spawnToken(); return; }
        const fadeIn = Math.min(t.age / 20, 1);
        const fadeOut = Math.max(1 - (t.age - t.life + 30) / 30, 0);
        t.alpha = fadeIn * fadeOut;
        const tx = cx + t.x, ty = cy + t.y;
        if (t.age < 30) {
          const pr = t.age * 1.2;
          ctx.beginPath(); ctx.arc(tx, ty, pr, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(19,195,143,${0.3 * (1 - t.age / 30)})`; ctx.lineWidth = 1; ctx.stroke();
        }
        ctx.beginPath(); ctx.arc(tx, ty, t.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(19,195,143,${t.alpha * 0.8})`; ctx.fill();
        if (t.alpha > 0.4) {
          ctx.font = '500 10px "JetBrains Mono"';
          ctx.fillStyle = `rgba(19,195,143,${t.alpha * 0.7})`;
          ctx.textAlign = 'left';
          ctx.fillText(t.label, tx + t.size + 6, ty + 4);
        }
      });

      rafId = requestAnimationFrame(draw);
    }

    resize(); draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize); };
  }, [ref]);
}

// ── CARD 03: Candlestick + Depth Chart ───────────────────────
export function useDepthCanvas(ref: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let ctx: CanvasRenderingContext2D, w: number, h: number;
    let time = 0;
    let rafId: number;

    interface Candle { o: number; c: number; h: number; l: number; }
    const candles: Candle[] = [];
    let price = 67500;
    for (let i = 0; i < 60; i++) {
      const open = price;
      const change = (Math.random() - 0.48) * 200;
      price += change;
      const close = price;
      candles.push({ o: open, c: close, h: Math.max(open, close) + Math.random() * 100, l: Math.min(open, close) - Math.random() * 100 });
    }

    function resize() { const s = setupCanvas(canvas!); ctx = s.ctx; w = s.w; h = s.h; }

    function draw() {
      time++;
      ctx.clearRect(0, 0, w, h);
      const chartH = h * 0.55, depthH = h * 0.35, chartY = 30, depthY = chartY + chartH + 30;
      let min = Infinity, max = -Infinity;
      candles.forEach(c => { min = Math.min(min, c.l); max = Math.max(max, c.h); });
      const range = max - min;

      ctx.strokeStyle = 'rgba(255,255,255,0.025)'; ctx.lineWidth = 0.5;
      for (let i = 0; i < 6; i++) {
        const gy = chartY + (chartH / 5) * i;
        ctx.beginPath(); ctx.moveTo(40, gy); ctx.lineTo(w - 20, gy); ctx.stroke();
      }

      const cw = (w - 80) / candles.length;
      candles.forEach((c, i) => {
        const x = 50 + i * cw;
        const bull = c.c > c.o;
        const color = bull ? 'rgba(19,195,143,' : 'rgba(239,68,68,';
        const wy1 = chartY + ((max - c.h) / range) * chartH;
        const wy2 = chartY + ((max - c.l) / range) * chartH;
        ctx.beginPath(); ctx.moveTo(x + cw/2, wy1); ctx.lineTo(x + cw/2, wy2);
        ctx.strokeStyle = color + '0.5)'; ctx.lineWidth = 1; ctx.stroke();
        const by1 = chartY + ((max - Math.max(c.o, c.c)) / range) * chartH;
        const by2 = chartY + ((max - Math.min(c.o, c.c)) / range) * chartH;
        ctx.fillStyle = color + (bull ? '0.7)' : '0.6)');
        ctx.fillRect(x + 1, by1, cw - 2, Math.max(by2 - by1, 1));
      });

      const last = candles[candles.length - 1];
      last.c += (Math.random() - 0.48) * 8;
      last.h = Math.max(last.h, last.c); last.l = Math.min(last.l, last.c);
      const priceY = chartY + ((max - last.c) / range) * chartH;
      ctx.beginPath(); ctx.setLineDash([3, 3]);
      ctx.moveTo(40, priceY); ctx.lineTo(w - 20, priceY);
      ctx.strokeStyle = 'rgba(19,195,143,0.35)'; ctx.lineWidth = 1; ctx.stroke(); ctx.setLineDash([]);

      // Depth chart
      const depthMid = w * 0.5;
      const bids: number[] = [], asks: number[] = [];
      let cumBid = 0, cumAsk = 0;
      for (let i = 0; i < 30; i++) {
        cumBid += 5 + Math.random() * 15 + Math.sin(time * 0.02 + i * 0.3) * 3;
        cumAsk += 5 + Math.random() * 15 + Math.cos(time * 0.02 + i * 0.3) * 3;
        bids.push(cumBid); asks.push(cumAsk);
      }
      const maxDepth = Math.max(bids[bids.length-1], asks[asks.length-1]);

      ctx.beginPath(); ctx.moveTo(depthMid, depthY + depthH);
      bids.forEach((v, i) => ctx.lineTo(depthMid - (i / 30) * (depthMid - 40), depthY + depthH - (v / maxDepth) * depthH));
      ctx.lineTo(40, depthY + depthH); ctx.closePath();
      const bidGrad = ctx.createLinearGradient(0, depthY, 0, depthY + depthH);
      bidGrad.addColorStop(0, 'rgba(19,195,143,0.15)'); bidGrad.addColorStop(1, 'rgba(19,195,143,0.02)');
      ctx.fillStyle = bidGrad; ctx.fill();

      ctx.beginPath(); ctx.moveTo(depthMid, depthY + depthH);
      asks.forEach((v, i) => ctx.lineTo(depthMid + (i / 30) * (w - depthMid - 20), depthY + depthH - (v / maxDepth) * depthH));
      ctx.lineTo(w - 20, depthY + depthH); ctx.closePath();
      const askGrad = ctx.createLinearGradient(0, depthY, 0, depthY + depthH);
      askGrad.addColorStop(0, 'rgba(239,68,68,0.12)'); askGrad.addColorStop(1, 'rgba(239,68,68,0.01)');
      ctx.fillStyle = askGrad; ctx.fill();

      rafId = requestAnimationFrame(draw);
    }

    resize(); draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize); };
  }, [ref]);
}

// ── CARD 04: Neural Network ───────────────────────────────────
export function useNeuralCanvas(ref: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let ctx: CanvasRenderingContext2D, w: number, h: number;
    let time = 0;
    let rafId: number;

    interface Node { x: number; y: number; layer: number; idx: number; pulse: number; }
    interface Edge { from: Node; to: Node; signal: number; speed: number; }
    const layers = [3, 5, 7, 5, 3];
    let nodes: Node[] = [], edges: Edge[] = [];

    function buildNetwork() {
      nodes = []; edges = [];
      const layerSpacing = w / (layers.length + 1);
      layers.forEach((count, li) => {
        const x = layerSpacing * (li + 1);
        const nodeSpacing = h / (count + 1);
        for (let ni = 0; ni < count; ni++) {
          const node: Node = { x, y: nodeSpacing * (ni + 1), layer: li, idx: ni, pulse: Math.random() * Math.PI * 2 };
          nodes.push(node);
          if (li > 0) {
            nodes.filter(n => n.layer === li - 1).forEach(pn => {
              if (Math.random() > 0.3) edges.push({ from: pn, to: node, signal: Math.random() * Math.PI * 2, speed: 0.5 + Math.random() * 1.5 });
            });
          }
        }
      });
    }

    function resize() { const s = setupCanvas(canvas!); ctx = s.ctx; w = s.w; h = s.h; buildNetwork(); }

    function draw() {
      time++;
      ctx.clearRect(0, 0, w, h);
      edges.forEach(e => {
        e.signal += 0.02;
        const progress = (Math.sin(e.signal * e.speed) + 1) / 2;
        ctx.beginPath(); ctx.moveTo(e.from.x, e.from.y); ctx.lineTo(e.to.x, e.to.y);
        ctx.strokeStyle = `rgba(19,195,143,${0.03 + progress * 0.08})`; ctx.lineWidth = 0.5; ctx.stroke();
        const sx = e.from.x + (e.to.x - e.from.x) * progress;
        const sy = e.from.y + (e.to.y - e.from.y) * progress;
        ctx.beginPath(); ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(19,195,143,${0.2 + progress * 0.4})`; ctx.fill();
      });
      nodes.forEach(n => {
        const pulse = Math.sin(time * 0.02 + n.pulse) * 0.3 + 0.7;
        const r = n.layer === 2 ? 6 : (n.layer === 0 || n.layer === layers.length - 1) ? 4 : 5;
        ctx.beginPath(); ctx.arc(n.x, n.y, r + 10, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(19,195,143,${0.03 * pulse})`; ctx.fill();
        ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(19,195,143,${0.15 + pulse * 0.25})`; ctx.fill();
        ctx.strokeStyle = `rgba(19,195,143,${0.2 + pulse * 0.3})`; ctx.lineWidth = 1; ctx.stroke();
        ctx.beginPath(); ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(19,195,143,${0.4 + pulse * 0.4})`; ctx.fill();
      });
      ctx.font = '10px "JetBrains Mono"';
      ctx.fillStyle = `rgba(19,195,143,${0.3 + Math.sin(time * 0.03) * 0.15})`;
      ctx.textAlign = 'center';
      ctx.fillText('● PROCESSING', w * 0.5, h - 20);
      rafId = requestAnimationFrame(draw);
    }

    resize(); draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize); };
  }, [ref]);
}

// ── CARD 05: Signal Pulse Matrix ─────────────────────────────
export function useSignalCanvas(ref: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let ctx: CanvasRenderingContext2D, w: number, h: number;
    let time = 0;
    let rafId: number;

    interface Dot { x: number; y: number; baseAlpha: number; alpha: number; targetAlpha: number; size: number; }
    interface Pulse { x: number; y: number; radius: number; maxRadius: number; speed: number; alpha: number; }
    const cols = 40, rows = 25;
    let dots: Dot[] = [];
    const pulses: Pulse[] = [];
    let pulseInterval: ReturnType<typeof setInterval>;

    function buildGrid() {
      dots = [];
      const spacingX = w / (cols + 1);
      const spacingY = h / (rows + 1);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ x: spacingX * (c + 1), y: spacingY * (r + 1), baseAlpha: 0.06, alpha: 0.06, targetAlpha: 0.06, size: 1.5 });
        }
      }
    }

    function firePulse() {
      pulses.push({ x: 50 + Math.random() * (w - 100), y: 50 + Math.random() * (h - 100), radius: 0, maxRadius: 200 + Math.random() * 150, speed: 2 + Math.random() * 2, alpha: 0.6 });
    }

    function resize() { const s = setupCanvas(canvas!); ctx = s.ctx; w = s.w; h = s.h; buildGrid(); }

    function draw() {
      time++;
      ctx.clearRect(0, 0, w, h);
      pulses.forEach((p, idx) => {
        p.radius += p.speed;
        p.alpha = 0.6 * (1 - p.radius / p.maxRadius);
        if (p.radius > p.maxRadius) { pulses.splice(idx, 1); return; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(19,195,143,${Math.max(0, p.alpha * 0.3)})`; ctx.lineWidth = 1.5; ctx.stroke();
        dots.forEach(d => {
          const dist = Math.sqrt((d.x - p.x) ** 2 + (d.y - p.y) ** 2);
          if (Math.abs(dist - p.radius) < 30) d.targetAlpha = Math.min(0.8, d.baseAlpha + (1 - Math.abs(dist - p.radius) / 30) * p.alpha * 0.7);
        });
      });
      dots.forEach(d => {
        d.alpha += (d.targetAlpha - d.alpha) * 0.08;
        d.targetAlpha += (d.baseAlpha - d.targetAlpha) * 0.02;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.size + (d.alpha > 0.15 ? d.alpha * 1.5 : 0), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(19,195,143,${d.alpha})`; ctx.fill();
      });
      for (let i = 0; i < 3; i++) {
        const scanY = ((time * 0.5 + i * h / 3) % h);
        ctx.beginPath(); ctx.moveTo(0, scanY); ctx.lineTo(w, scanY);
        ctx.strokeStyle = 'rgba(19,195,143,0.03)'; ctx.lineWidth = 1; ctx.stroke();
      }
      rafId = requestAnimationFrame(draw);
    }

    resize();
    pulseInterval = setInterval(firePulse, 1200);
    for (let i = 0; i < 3; i++) firePulse();
    draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(rafId); clearInterval(pulseInterval); window.removeEventListener('resize', resize); };
  }, [ref]);
}
