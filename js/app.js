/* louise.ivan creator vault — app logic
   Sections: aggregates, stat cards, bars, timeline, graph view, table, playbook, nav */

const NICHE_COLORS = {
  'Lifestyle / Personal':'#4cc2ff','Shitpost / Humor':'#ffd166','Founder Story':'#a78bfa',
  'AI / Tech':'#4ade80','GM / Community':'#f472b6','Crypto / Ryder':'#fb923c',
  'Fundraising':'#22d3ee','Builder Takes':'#f87171'
};
const fmt = n => n>=1e6 ? (n/1e6).toFixed(1)+'M' : n>=1e3 ? (n/1e3).toFixed(1)+'K' : String(n);
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- aggregates ---------- */
const byNiche = {};
const METRIC = DATA.filter(d=>d.ok);
METRIC.forEach(d=>{
  const a = byNiche[d.niche] || (byNiche[d.niche]={n:0,v:0,s:0,sh:0,l:0,c:0,views:[]});
  a.n++; a.v+=d.views; a.s+=d.saves; a.sh+=d.shares; a.l+=d.likes; a.c+=d.comments; a.views.push(d.views);
});
Object.values(byNiche).forEach(a=>{
  a.views.sort((x,y)=>x-y);
  a.med = a.views[Math.floor(a.views.length/2)];
  a.avg = Math.round(a.v/a.n);
  a.saveRate = a.s/Math.max(a.v,1)*1000;
});
const byHook = {};
METRIC.forEach(d=>{
  const a = byHook[d.hook] || (byHook[d.hook]={n:0,v:0,s:0});
  a.n++; a.v+=d.views; a.s+=d.saves;
});
Object.values(byHook).forEach(a=>{a.avg=Math.round(a.v/a.n); a.saveRate=a.s/Math.max(a.v,1)*1000;});
const totals = METRIC.reduce((t,d)=>({v:t.v+d.views,s:t.s+d.saves,sh:t.sh+d.shares,l:t.l+d.likes,c:t.c+d.comments}),{v:0,s:0,sh:0,l:0,c:0});

/* ---------- stat cards + sidebar ---------- */
const profClicks = METRIC.reduce((a,d)=>a+(d.fol||0),0);
const engTotal = totals.l+totals.c+totals.sh+totals.s+profClicks;
const noteCount = DATA.filter(d=>d.type==='NOTE').length;
const threadCount = DATA.filter(d=>d.type==='THREAD').length;
document.getElementById('statcards').innerHTML = [
  ['Posts analyzed', DATA.length, 'full year via Typefully'],
  ['With metrics', METRIC.length, 'X analytics joins'],
  ['Total impressions', fmt(totals.v), 'metrics window'],
  ['Likes', fmt(totals.l), 'weight 0.5 in the ranker'],
  ['Replies earned', fmt(totals.c), 'weight 13.5 in the ranker'],
  ['Reposts + quotes', fmt(totals.sh), 'weight 1.0 · distribution'],
  ['Bookmarks', fmt(totals.s), 'authority signal'],
  ['Profile clicks', fmt(profClicks), 'weight 12 in the ranker'],
  ['Engagement rate', (engTotal/Math.max(totals.v,1)*100).toFixed(1)+'%', 'engagements / impressions'],
  ['Note tweets', noteCount, 'longform, the 10x format'],
  ['Threads', threadCount, 'multi-post drops'],
  ['Followers', '8,694', 'at export time']
].map(([k,v,d])=>`<div class="card"><div class="k">${k}</div><div class="v">${v}</div><div class="d">${d}</div></div>`).join('');

document.getElementById('sidemeta').innerHTML =
  '<div class="row"><span>posts</span><b>'+DATA.length+'</b></div>'+
  '<div class="row"><span>niches</span><b>'+Object.keys(byNiche).length+'</b></div>'+
  '<div class="row"><span>views</span><b>'+fmt(totals.v)+'</b></div>'+
  '<div class="row"><span>posts thru</span><b>2026-07-21</b></div>'+'<div class="row"><span>metrics thru</span><b>2026-07-21</b></div>';

/* ---------- bars ---------- */
function bars(el, rows, colorFn, valFmt){
  const max = Math.max(...rows.map(r=>r[1]));
  document.getElementById(el).innerHTML = rows.map(([k,v])=>
    `<div class="brow"><div class="lbl">${k}</div><div class="trk"><div class="fill" style="width:${Math.max(v/max*100,1)}%;background:${colorFn(k)}"></div></div><div class="num">${valFmt(v)}</div></div>`
  ).join('');
}
const nc = k => NICHE_COLORS[k] || '#8b8f98';
function ranked(obj, key){ return Object.entries(obj).map(([k,a])=>[k,a[key]]).sort((a,b)=>b[1]-a[1]); }
bars('nviews', ranked(byNiche,'avg'), nc, fmt);
bars('nsaves', ranked(byNiche,'saveRate'), nc, v=>v.toFixed(1));
bars('nmed', ranked(byNiche,'med'), nc, fmt);
bars('nshares', ranked(byNiche,'sh'), nc, fmt);
bars('hviews', ranked(byHook,'avg'), ()=> '#7c6bd8', fmt);
bars('hsaves', ranked(byHook,'saveRate'), ()=> '#4ade80', v=>v.toFixed(1));

/* ---------- timeline: weekly bars + monthly calendar ---------- */
(function(){
  const svg = document.getElementById('tl');
  const cal = document.getElementById('cal');
  const detail = document.getElementById('tldetail');
  const title = document.getElementById('tltitle');
  const mnav = document.getElementById('mnav');
  const mlabel = document.getElementById('mlabel');
  const bW = document.getElementById('modeweek');
  const bC = document.getElementById('modecal');

  /* index posts by ISO week and by calendar day */
  function isoWeek(t){
    const d = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const y0 = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return d.getUTCFullYear()+'-W'+String(Math.ceil((((d - y0)/864e5)+1)/7)).padStart(2,'0');
  }
  const byWeek = {}, byDay = {};
  DATA.forEach(d=>{
    const t = new Date(d.ts);
    const wk = isoWeek(t);
    const day = d.ts.slice(0,10);
    (byWeek[wk] = byWeek[wk] || {v:0, posts:[]}).v += d.views; byWeek[wk].posts.push(d);
    (byDay[day] = byDay[day] || {v:0, posts:[]}).v += d.views; byDay[day].posts.push(d);
  });
  const weekKeys = Object.keys(byWeek).sort();

  /* month state: default to the latest post's month */
  const lastTs = DATA.map(d=>d.ts).sort().pop();
  let mY = +lastTs.slice(0,4), mM = +lastTs.slice(5,7)-1;
  const firstTs = DATA.map(d=>d.ts).sort()[0];
  const MIN = firstTs.slice(0,7), MAX = lastTs.slice(0,7);
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function showDetail(label, posts, totalV){
    posts = [...posts].sort((a,b)=>b.views-a.views);
    detail.hidden = false;
    detail.innerHTML = '<div class="dt">'+label+' · <b>'+posts.length+'</b> posts · <b>'+fmt(totalV)+'</b> views</div>'+
      '<div class="plist">'+posts.map(d=>
        '<a class="pitem" href="'+d.url+'" target="_blank" rel="noopener">'+
        '<span class="pc"><span class="pdot" style="background:'+nc(d.niche)+'"></span>'+esc(d.cap.slice(0,90) || '(no caption)')+'</span>'+
        '<span class="pm">'+fmt(d.views)+' views · '+fmt(d.saves)+' saves</span></a>'
      ).join('')+'</div>';
  }

  let range90 = false;
  function visibleWeeks(){
    if(!range90) return weekKeys;
    const cutoff = new Date(new Date(lastTs).getTime() - 90*864e5);
    return weekKeys.filter(k=>{
      const posts = byWeek[k].posts;
      return new Date(posts[posts.length-1].ts) >= cutoff || new Date(posts[0].ts) >= cutoff;
    });
  }
  function drawWeeks(){
    const wk = visibleWeeks();
    const W = svg.clientWidth || 900, H = 150, pad = 4;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const max = Math.max(...wk.map(k=>byWeek[k].v));
    const bw = (W - pad*2) / wk.length;
    svg.innerHTML = wk.map((k,i)=>{
      const h = Math.max(byWeek[k].v/max*(H-26),2);
      return `<rect data-wk="${k}" x="${pad+i*bw+1}" y="${H-20-h}" width="${Math.max(bw-2,1)}" height="${h}" rx="2" fill="${byWeek[k].v===max?'#a78bfa':'#4a4f58'}"><title>${k}: ${fmt(byWeek[k].v)} views, ${byWeek[k].posts.length} posts. Click to list them.</title></rect>`;
    }).join('') + `<text x="${pad}" y="${H-6}" fill="#5c6067" font-size="10" font-family="JetBrains Mono">${wk[0]||''}</text><text x="${W-pad}" y="${H-6}" fill="#5c6067" font-size="10" text-anchor="end" font-family="JetBrains Mono">${wk[wk.length-1]||''}</text>`;
    svg.querySelectorAll('rect').forEach(r=>r.addEventListener('click',()=>{
      const k = r.dataset.wk;
      svg.querySelectorAll('rect').forEach(x=>x.setAttribute('stroke','none'));
      r.setAttribute('stroke','#a78bfa'); r.setAttribute('stroke-width','1.5');
      showDetail('Week '+k, byWeek[k].posts, byWeek[k].v);
    }));
  }

  function drawCal(){
    const first = new Date(mY, mM, 1);
    const daysIn = new Date(mY, mM+1, 0).getDate();
    const lead = (first.getDay()+6)%7;  /* monday first */
    mlabel.textContent = MONTHS[mM].slice(0,3)+' '+mY;
    const monthCells = [];
    let monthMax = 1;
    for(let d=1; d<=daysIn; d++){
      const key = mY+'-'+String(mM+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
      const rec = byDay[key];
      if(rec) monthMax = Math.max(monthMax, rec.v);
      monthCells.push({d, key, rec});
    }
    const todayKey = new Date().toISOString().slice(0,10);
    cal.innerHTML =
      ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>'<div class="dow">'+d+'</div>').join('') +
      Array(lead).fill('<div class="day pad"></div>').join('') +
      monthCells.map(c=>{
        const heat = c.rec ? Math.pow(c.rec.v/monthMax, 0.5) : 0;
        const bg = c.rec ? `style="background:rgba(167,139,250,${(0.06+heat*0.30).toFixed(2)})"` : '';
        const dots = c.rec ? '<div class="dots">'+c.rec.posts.slice(0,6).map(p=>'<span class="pd" style="background:'+nc(p.niche)+'"></span>').join('')+(c.rec.posts.length>6?'<span class="pd" style="background:#5c6067"></span>':'')+'</div>' : '';
        const views = c.rec ? '<div class="dv">'+fmt(c.rec.v)+'</div>' : '';
        return `<div class="day${c.rec?' haspost':''}${c.key===todayKey?' today':''}" data-day="${c.key}" ${bg}
          role="${c.rec?'button':''}" tabindex="${c.rec?0:-1}"
          title="${c.rec ? c.rec.posts.length+' posts, '+fmt(c.rec.v)+' views' : 'no posts'}">
          <div class="dn">${c.d}</div>${views}${dots}</div>`;
      }).join('');
    cal.querySelectorAll('.day.haspost').forEach(el=>{
      const openDay = ()=>{
        cal.querySelectorAll('.day').forEach(x=>x.classList.remove('sel'));
        el.classList.add('sel');
        const rec = byDay[el.dataset.day];
        showDetail(el.dataset.day, rec.posts, rec.v);
      };
      el.addEventListener('click', openDay);
      el.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault(); openDay();} });
    });
    /* clamp nav to data range */
    const cur = mY+'-'+String(mM+1).padStart(2,'0');
    document.getElementById('mprev').disabled = cur <= MIN;
    document.getElementById('mnext').disabled = cur >= MAX;
  }

  function setMode(m){
    const week = m==='week';
    svg.style.display = week ? 'block' : 'none';
    cal.hidden = week; mnav.hidden = week;
    detail.hidden = true;
    bW.classList.toggle('on', week); bC.classList.toggle('on', !week);
    bW.setAttribute('aria-selected', week); bC.setAttribute('aria-selected', !week);
    title.textContent = week ? (range90 ? 'Impressions per week · last 90 days' : 'Impressions per week · all time') : 'Monthly calendar';
    const rseg = document.getElementById('rangeseg');
    if(rseg) rseg.hidden = !week;
    if(week) drawWeeks(); else drawCal();
  }
  const r90 = document.getElementById('r90'), rall = document.getElementById('rall');
  if(r90 && rall){
    r90.addEventListener('click',()=>{ range90=true; r90.classList.add('on'); rall.classList.remove('on'); detail.hidden=true; setMode('week'); });
    rall.addEventListener('click',()=>{ range90=false; rall.classList.add('on'); r90.classList.remove('on'); detail.hidden=true; setMode('week'); });
  }
  bW.addEventListener('click',()=>setMode('week'));
  bC.addEventListener('click',()=>setMode('cal'));
  document.getElementById('mprev').addEventListener('click',()=>{ mM--; if(mM<0){mM=11;mY--;} detail.hidden=true; drawCal(); });
  document.getElementById('mnext').addEventListener('click',()=>{ mM++; if(mM>11){mM=0;mY++;} detail.hidden=true; drawCal(); });
  setMode('week');
})();

/* ---------- legend ---------- */
document.getElementById('legend').innerHTML = Object.entries(NICHE_COLORS)
  .map(([k,c])=>`<span><span class="dot" style="background:${c}"></span>${k}</span>`).join('');

/* ---------- graph view: obsidian-style graph, stable layout + presentational animation ---------- */
(function(){
  const canvas = document.getElementById('graph');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const wrap = document.getElementById('graphwrap');
  const tip = document.getElementById('gtip');
  const stateEl = document.getElementById('gstate');
  const eventsEl = document.getElementById('gevents');
  if(stateEl) stateEl.textContent = 'obsidian graph · louiseivan / x';
  if(eventsEl) eventsEl.textContent = DATA.length + ' posts · ' + Object.keys(NICHE_COLORS).length + ' niches';
  const chips = document.getElementById('gchips');
  if(chips) chips.innerHTML = '';
  const legend = document.getElementById('legend');
  if(legend) legend.innerHTML = Object.entries(NICHE_COLORS).map(([n,c])=>
    `<span class="litem"><span class="ldot" style="background:${c}"></span>${n}</span>`).join('');

  /* nodes: account hub -> niche hubs -> every post (v1 layout, proven stable) */
  const nodes = [], links = [];
  const center = {label:'@louiseivan', r:22, color:'#e8e8ec', x:0, y:0, vx:0, vy:0, kind:'center', born:0, phase:0};
  nodes.push(center);
  const hubs = {};
  const nicheNames = Object.keys(NICHE_COLORS);
  nicheNames.forEach((name,i)=>{
    const a = i/nicheNames.length*Math.PI*2;
    const n = {label:name, r:13, color:NICHE_COLORS[name], x:Math.cos(a)*260, y:Math.sin(a)*260,
      vx:0, vy:0, kind:'niche', born:200+i*80, phase:Math.random()*Math.PI*2};
    hubs[name]=n; nodes.push(n); links.push({s:center, t:n, len:260, k:0.012, kind:'spine'});
  });
  let pi = 0;
  DATA.forEach(d=>{
    const hub = hubs[d.niche]; if(!hub) return;
    const r = d.ok ? Math.max(2.4, Math.min(12, Math.sqrt(d.views)/12)) : 2.2;
    const a = Math.random()*Math.PI*2, dist = 55 + Math.random()*70;
    const n = {label:(d.cap||'(no text)').slice(0,70), r, color:NICHE_COLORS[d.niche],
      x:hub.x+Math.cos(a)*dist, y:hub.y+Math.sin(a)*dist, vx:0, vy:0,
      kind:'post', d, hub, born:750+(pi++)*3.5+Math.random()*250, phase:Math.random()*Math.PI*2};
    nodes.push(n); links.push({s:hub, t:n, len:55+r*7, k:0.02, kind:'leaf'});
  });
  const topSet = new Set(nodes.filter(n=>n.kind==='post'&&n.d.ok).sort((a,b)=>b.d.views-a.d.views).slice(0,20));
  const neighbors = new Map();
  nodes.forEach(n=>neighbors.set(n, new Set([n])));
  links.forEach(l=>{ neighbors.get(l.s).add(l.t); neighbors.get(l.t).add(l.s); });

  let scale = 0.85, ox = 0, oy = 0, W = 0, H = 0, dpr = 1;
  let hover = null, dragNode = null, panning = false, px0 = 0, py0 = 0;
  let alpha = 0;
  const t0 = performance.now();
  const INTRO = 2400;

  function resize(){
    dpr = window.devicePixelRatio || 1;
    W = wrap.clientWidth; H = Math.max(wrap.clientHeight, 460);
    canvas.width = W*dpr; canvas.height = H*dpr;
    canvas.style.width = W+'px'; canvas.style.height = H+'px';
  }
  resize(); addEventListener('resize', resize);

  /* v1 physics: used for pre-settle and drag reheats only */
  function tick(){
    for(let i=0;i<nodes.length;i++){
      const a = nodes[i];
      for(let j=i+1;j<nodes.length;j++){
        const b = nodes[j];
        let dx = a.x-b.x, dy = a.y-b.y;
        let d2 = dx*dx+dy*dy || 0.01;
        if(d2 > 90000) continue;
        const f = (a.kind==='post'&&b.kind==='post' ? 120 : 900)/d2;
        const dl = Math.sqrt(d2);
        dx/=dl; dy/=dl;
        a.vx += dx*f; a.vy += dy*f;
        b.vx -= dx*f; b.vy -= dy*f;
      }
    }
    links.forEach(l=>{
      let dx = l.t.x-l.s.x, dy = l.t.y-l.s.y;
      const dl = Math.sqrt(dx*dx+dy*dy)||0.01;
      const f = (dl-l.len)*l.k;
      dx/=dl; dy/=dl;
      l.s.vx += dx*f; l.s.vy += dy*f;
      l.t.vx -= dx*f; l.t.vy -= dy*f;
    });
    nodes.forEach(n=>{
      n.vx -= n.x*0.0012; n.vy -= n.y*0.0012;
      if(n===dragNode) { n.vx=0; n.vy=0; return; }
      n.vx *= 0.88; n.vy *= 0.88;
      n.x += n.vx*(alpha||1); n.y += n.vy*(alpha||1);
    });
  }
  /* settle once, synchronously — layout is final and stable */
  for(let i=0;i<280;i++) tick();
  nodes.forEach(n=>{ n.vx=0; n.vy=0; });

  /* presentational animation state (never touches physics) */
  const ease = x => 1-Math.pow(1-x, 3);
  function birth(t, n){ return REDUCE ? 1 : ease(Math.min(1, Math.max(0,(t-n.born)/600))); }
  function sway(t, n, ax){ /* tiny ambient float, draw-time only */
    if(REDUCE || n===dragNode) return 0;
    const amp = n.kind==='post' ? 2.6 : 1.2;
    return amp * Math.sin(t*0.00055*(ax?1.13:0.87) + n.phase + (ax?0:2.1));
  }
  function nx(t,n){ const b = birth(t,n); const sx = n.kind==='center'?0:(n.kind==='niche'?0:n.hub.x); return sx + (n.x - sx)*b + sway(t,n,1); }
  function ny(t,n){ const b = birth(t,n); const sy = n.kind==='center'?0:(n.kind==='niche'?0:n.hub.y); return sy + (n.y - sy)*b + sway(t,n,0); }

  /* engagement pulses along links */
  const pulses = [];
  const leafLinks = links.filter(l=>l.kind==='leaf');
  function spawnPulse(){
    const l = leafLinks[(Math.random()*leafLinks.length)|0];
    pulses.push({l, t:0, sp:0.006+Math.random()*0.010, r:0.9+Math.random()*1.2, col:l.t.color});
    if(Math.random() < 0.2){
      const spine = links.find(s=>s.kind==='spine' && s.t===l.s);
      if(spine) pulses.push({l:spine, t:0, sp:0.005+Math.random()*0.005, r:1.2, col:l.s.color, delay:260});
    }
  }

  function draw(time){
    const t = time - t0;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,W,H);
    ctx.save();
    ctx.translate(W/2+ox, H/2+oy); ctx.scale(scale,scale);
    const focus = hover ? neighbors.get(hover) : null;
    const vis = n => REDUCE || t >= n.born;

    links.forEach(l=>{
      if(!vis(l.s) || !vis(l.t)) return;
      const b = Math.min(birth(t,l.s), birth(t,l.t));
      const lit = focus && focus.has(l.s) && focus.has(l.t) && (l.s===hover||l.t===hover);
      ctx.strokeStyle = lit ? 'rgba(167,139,250,0.55)' : (focus ? 'rgba(140,140,152,0.05)' : `rgba(140,140,152,${0.14*b})`);
      ctx.lineWidth = (lit?1.4:0.7)/scale;
      ctx.beginPath(); ctx.moveTo(nx(t,l.s),ny(t,l.s)); ctx.lineTo(nx(t,l.t),ny(t,l.t)); ctx.stroke();
    });

    if(!REDUCE){
      for(let i=pulses.length-1;i>=0;i--){
        const p = pulses[i];
        if(p.delay > 0){ p.delay -= 16; continue; }
        p.t += p.sp;
        if(p.t >= 1){ pulses.splice(i,1); continue; }
        const from = p.l.t, to = p.l.s;      /* post -> hub, hub -> center */
        if(!vis(from)||!vis(to)) continue;
        const x = nx(t,from) + (nx(t,to)-nx(t,from))*p.t;
        const y = ny(t,from) + (ny(t,to)-ny(t,from))*p.t;
        ctx.globalAlpha = Math.sin(p.t*Math.PI)*0.8;
        ctx.fillStyle = p.col;
        ctx.shadowColor = p.col; ctx.shadowBlur = 8;
        ctx.beginPath(); ctx.arc(x, y, p.r/Math.sqrt(scale), 0, Math.PI*2); ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;
    }

    nodes.forEach(n=>{
      if(!vis(n)) return;
      const b = birth(t,n);
      const dim = focus && !focus.has(n);
      let r = n.r * (0.3 + 0.7*b);
      let glow = 0;
      if(!REDUCE){
        if(n.kind!=='post') r *= 1 + 0.04*Math.sin(t*0.0016 + n.phase);
        if(topSet.has(n))   glow = 7 + 6*(0.5+0.5*Math.sin(t*0.0028 + n.phase));
      }
      ctx.globalAlpha = dim ? 0.12 : Math.min(1, b*1.25);
      if(!dim && (n.kind!=='post' || n===hover || glow)){
        ctx.shadowColor = n.color; ctx.shadowBlur = n===hover ? 16 : (n.kind==='post' ? glow : 18);
      }
      ctx.fillStyle = n.color;
      ctx.beginPath(); ctx.arc(nx(t,n), ny(t,n), r, 0, Math.PI*2); ctx.fill();
      ctx.shadowBlur = 0;
    });

    ctx.globalAlpha = 1;
    ctx.textAlign = 'center';
    nodes.forEach(n=>{
      if(!vis(n) || (n.kind==='post' && n!==hover)) return;
      if(focus && !focus.has(n)) return;
      ctx.globalAlpha = birth(t,n);
      ctx.font = ((n.kind==='center'?13:n.kind==='niche'?11:10)/Math.max(scale,0.75))+'px Inter, sans-serif';
      ctx.fillStyle = n.kind==='post' ? '#c9c9d1' : '#9a9aa5';
      ctx.fillText(n.label, nx(t,n), ny(t,n) + n.r + 14/scale);
    });
    ctx.restore();
  }

  let lastFrame = 0;
  function loop(time){
    if(time - lastFrame < 12) { requestAnimationFrame(loop); return; }
    lastFrame = time;
    const t = time - t0;
    if(!REDUCE && pulses.length < 50 && t > INTRO*0.7 && Math.random() < 0.3) spawnPulse();
    if(dragNode || alpha > 0.02){ tick(); alpha *= 0.97; }
    draw(time);
    requestAnimationFrame(loop);
  }
  /* fallback driver: some embedded browsers throttle rAF when idle; keep the animation playing */
  if(!REDUCE) setInterval(()=>{
    const now = performance.now();
    if(now - lastFrame > 120){ lastFrame = now; 
      const t = now - t0;
      if(pulses.length < 50 && t > INTRO*0.7 && Math.random() < 0.3) spawnPulse();
      if(dragNode || alpha > 0.02){ tick(); alpha *= 0.97; }
      draw(now);
    }
  }, 66);

  function toWorld(cx, cy){
    const b = canvas.getBoundingClientRect();
    return [ (cx-b.left-W/2-ox)/scale, (cy-b.top-H/2-oy)/scale ];
  }
  function nodeAt(cx, cy){
    const [x,y] = toWorld(cx,cy);
    let best = null, bd = 1e9;
    nodes.forEach(n=>{
      const dx = n.x-x, dy = n.y-y, dd = dx*dx+dy*dy;
      const rr = (n.r+5)*(n.r+5);
      if(dd < rr && dd < bd){ best = n; bd = dd; }
    });
    return best;
  }

  canvas.addEventListener('mousemove', e=>{
    if(dragNode){
      const [x,y] = toWorld(e.clientX, e.clientY);
      dragNode.x = x; dragNode.y = y; alpha = 0.35;
      return;
    }
    if(panning){ ox += e.clientX-px0; oy += e.clientY-py0; px0 = e.clientX; py0 = e.clientY; return; }
    const n = nodeAt(e.clientX, e.clientY);
    hover = n;
    canvas.style.cursor = n ? 'pointer' : 'grab';
    if(n && n.kind==='post'){
      const d = n.d;
      tip.style.display = 'block';
      const b = canvas.getBoundingClientRect();
      tip.style.left = (e.clientX-b.left+14)+'px'; tip.style.top = (e.clientY-b.top+10)+'px';
      tip.innerHTML = '<b>'+esc(n.label)+'</b><br>'+ d.ts.slice(0,10) + ' · ' + d.niche +
        (d.ok ? '<br>'+fmt(d.views)+' impr · '+d.comments+' replies · '+d.saves+' bookmarks' : '<br>archive post · no metrics');
    } else if(n){
      tip.style.display = 'block';
      const b = canvas.getBoundingClientRect();
      tip.style.left = (e.clientX-b.left+14)+'px'; tip.style.top = (e.clientY-b.top+10)+'px';
      const cnt = n.kind==='center' ? DATA.length : DATA.filter(d=>d.niche===n.label).length;
      tip.innerHTML = '<b>'+esc(n.label)+'</b><br>'+cnt+' posts';
    } else tip.style.display = 'none';
  });
  canvas.addEventListener('mousedown', e=>{
    const n = nodeAt(e.clientX, e.clientY);
    if(n){ dragNode = n; }
    else { panning = true; px0 = e.clientX; py0 = e.clientY; canvas.style.cursor='grabbing'; }
  });
  addEventListener('mouseup', e=>{
    if(dragNode && dragNode.kind==='post' && hover===dragNode){
      const [wx,wy] = toWorld(e.clientX, e.clientY);
      const dx = dragNode.x-wx, dy = dragNode.y-wy;
      if(dx*dx+dy*dy < 4) window.open(dragNode.d.url, '_blank', 'noopener');
    }
    dragNode = null; panning = false; canvas.style.cursor='grab';
  });
  canvas.addEventListener('mouseleave', ()=>{ hover=null; tip.style.display='none'; panning=false; });
  canvas.addEventListener('wheel', e=>{
    e.preventDefault();
    const f = e.deltaY < 0 ? 1.12 : 0.89;
    const b = canvas.getBoundingClientRect();
    const mx = e.clientX-b.left-W/2, my = e.clientY-b.top-H/2;
    ox = mx - (mx-ox)*f; oy = my - (my-oy)*f;
    scale = Math.min(4, Math.max(0.25, scale*f));
  }, {passive:false});

  requestAnimationFrame(loop);
})();

/* ---------- table ---------- */
(function(){
  const tbody = document.getElementById('tbody');
  const q = document.getElementById('q');
  const fn = document.getElementById('fniche');
  Object.keys(byNiche).sort().forEach(n=>{ fn.innerHTML+=`<option>${n}</option>`; });
  let sortKey='views', sortDir=-1;
  function render(){
    const term = q.value.toLowerCase();
    let rows = DATA.filter(d=>(!term||d.cap.toLowerCase().includes(term))&&(!fn.value||d.niche===fn.value));
    rows.sort((a,b)=>{
      let x=a[sortKey], y=b[sortKey];
      if(sortKey==='fol'){ x = x==null?-1:x; y = y==null?-1:y; }
      return (typeof x==='string' ? x.localeCompare(y) : x-y)*sortDir;
    });
    document.getElementById('rowcount').textContent = rows.length+' posts';
    tbody.innerHTML = rows.map(d=>`<tr>
      <td><a class="rowcap" href="${d.url}" target="_blank" rel="noopener">${esc(d.cap)||'(no caption)'}</a>
        <div class="rowmeta"><span class="tag" style="color:${nc(d.niche)};background:${nc(d.niche)}18">${d.niche}</span> · ${d.hook} · ${d.type}</div></td>
      <td>${d.ok?fmt(d.views):'\u2013'}</td><td>${d.ok?fmt(d.saves):'\u2013'}</td><td>${d.ok?fmt(d.shares):'\u2013'}</td><td>${d.fol==null?'\u2013':d.fol}</td>
      <td>${fmt(d.likes)}</td><td>${d.comments}</td><td>${d.watch||'–'}</td>
      <td>${d.ts.slice(0,10)}</td></tr>`).join('');
  }
  document.querySelectorAll('th').forEach(th=>th.addEventListener('click',()=>{
    const k = th.dataset.k;
    if(sortKey===k) sortDir*=-1; else {sortKey=k; sortDir = k==='cap'||k==='ts' ? 1 : -1;}
    document.querySelectorAll('th').forEach(t=>{t.classList.toggle('sorted',t===th); t.textContent=t.textContent.replace(/ [↓↑]$/,'');});
    th.textContent += sortDir===-1?' ↓':' ↑';
    render();
  }));
  q.addEventListener('input',render); fn.addEventListener('change',render);
  render();
})();


/* ---------- best performing hooks ---------- */
(function(){
  const firstLine = c => (c.split(/[.!?]\s/)[0] || c).slice(0, 90);
  const item = (d, metric) => `<a class="hkrow" href="${d.url}" target="_blank" rel="noopener">
    <span class="hkrank"></span>
    <div class="hkbody">
      <div class="hktext">${esc(firstLine(d.cap) || '(visual hook, no caption)')}</div>
      <div class="hkmeta"><span class="tag" style="color:${nc(d.niche)};background:${nc(d.niche)}18">${d.hook}</span> ${metric}</div>
    </div></a>`;
  const byViews = [...METRIC].sort((a,b)=>b.views-a.views).slice(0,8);
  document.getElementById('besthooks-views').innerHTML =
    byViews.map(d=>item(d, fmt(d.views)+' impr · '+fmt(d.saves)+' bookmarks')).join('');
  const bySaveRate = METRIC.filter(d=>d.views>=1000)
    .map(d=>({d, r:d.saves/d.views*1000}))
    .sort((a,b)=>b.r-a.r).slice(0,8);
  document.getElementById('besthooks-saves').innerHTML =
    bySaveRate.map(({d,r})=>item(d, r.toFixed(1)+' bm/1K · '+fmt(d.views)+' impr')).join('');
})();

/* ---------- playbook ---------- */
(function(){
  const fund = byNiche['Fundraising'], story = byNiche['Founder Story'],
        ryder = byNiche['Crypto / Ryder'], life = byNiche['Lifestyle / Personal'];
  document.getElementById('playout').innerHTML = `
  <div class="callout">
    <div class="ct"><span class="cico">the weights</span>What the open-source algorithm actually rewards</div>
    <p>From the published heavy-ranker weights (github.com/twitter/the-algorithm, Apr 2023): a like is worth <b>0.5</b>, a repost <b>1.0</b>, a reply <b>13.5</b>, a profile click into a like or reply <b>12.0</b>, and a reply that the author engages with <b>75.0</b>. Negative feedback ("show less", block, mute) is <b>-74</b> and a report is <b>-369</b>. The 2025 Grok-era release (github.com/xai-org/x-algorithm) replaces hand-tuned weights with a learned transformer but keeps the same signal families, positive and negative. The math is blunt: <b>one reply you respond to is worth ~150 likes</b>. Reply to every reply in the first hour.</p>
  </div>
  <div class="callout green">
    <div class="ct"><span class="cico">double down</span>Note tweets are the account's proven format</div>
    <p>The top post in this archive is a longform note tweet: <b>21.8K impressions</b> (the builders-vs-platforms rant), 10x the account median. Greentext timeline notes took two more top-10 slots (5.8K and 3.6K on the mom-left-at-7 story). Notes earn dwell time, and dwell is a ranked signal in both algorithm releases. Two notes a week minimum, each opening with the strongest line, not context.</p>
  </div>
  <div class="callout yellow">
    <div class="ct"><span class="cico">reply engine</span>Personal news and questions drive the 13.5x metric</div>
    <p>The twin announcement pulled <b>64 replies</b>, the robbed-in-London story <b>37</b>, the greentext origin <b>31</b> — against an account median of 2. At 13.5 weight per reply plus 75 when you engage back, these posts outrank anything a like-farm post can do. One personal or question-led post a week, and treat the reply section as the actual content.</p>
  </div>
  <div class="callout red">
    <div class="ct"><span class="cico">fix</span>${life.n} lifestyle posts are diluting the graph</div>
    <p>Lifestyle / personal is the biggest bucket (${life.n} of ${DATA.length} posts) but medians are low and SimClusters-style community detection in the algorithm maps you to the communities you post into. Every off-topic post votes for the wrong cluster. Keep the personality, but anchor it to the builder narrative: same story, one founder line in it.</p>
  </div>
  <div class="callout">
    <div class="ct"><span class="cico">pre-flight</span>Run drafts through willitgoviral.xyz before posting</div>
    <p>It scores a draft 0-100 against the open-source signals and flags what triggers the negative weights (engagement bait, external links in the first post, reply-killing structure). Anything under 60, rewrite the opener. External links cost reach: put links in the reply, not the post.</p>
  </div>
  <div class="callout">
    <div class="ct"><span class="cico">the math</span>Path to 10K followers</div>
    <p>Followers went 7,970 to 8,694 in a year of casual posting. Fundraising posts earn <b>${fund?fund.saveRate.toFixed(1):'–'} bookmarks per 1K impressions</b> on only ${fund?fund.n:0} posts. The 60-day plan rebalances: reply-optimized builder takes Mondays, vault-sourced fundraising notes Tuesdays, proof posts on Ryder milestones, and the reply section worked like a second feed. Impressions follow replies here, not the other way around.</p>
  </div>`;
})();

/* ---------- nav highlight ---------- */
const secs=[...document.querySelectorAll('section')], navlinks=[...document.querySelectorAll('.nav a')];
addEventListener('scroll',()=>{
  const y=scrollY+120;
  let cur=secs[0];
  secs.forEach(s=>{if(s.offsetTop<=y)cur=s;});
  navlinks.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+cur.id));
},{passive:true});

/* ---------- 30-day content plan calendar ---------- */
(function(){
  const byDate = {};
  PLAN.forEach(p=>byDate[p.date]=p);
  const detail = document.getElementById('plandetail');

  function renderMonth(grid, year, month, fromDay, toDay){
    const daysIn = new Date(year, month+1, 0).getDate();
    const lead = (new Date(year, month, 1).getDay()+6)%7;
    let cells = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>'<div class="dow">'+d+'</div>').join('');
    cells += Array(lead).fill('<div class="pcell pad"></div>').join('');
    for(let d=1; d<=daysIn; d++){
      const key = year+'-'+String(month+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
      const p = byDate[key];
      if(d<fromDay || d>toDay || !p){ cells += '<div class="pcell pad"></div>'; continue; }
      cells += `<div class="pcell" data-date="${key}" role="button" tabindex="0" title="${p.topic} · ${p.mission}">
        <div class="pdn">${d}</div>
        <div class="pname">${esc(p.name)}</div>
        <div class="ppills"><span class="pl-pill t-${p.topic}">${p.topic}</span><span class="pl-pill m-${p.mission}">${p.mission}</span></div>
      </div>`;
    }
    grid.innerHTML = cells;
  }
  /* build one month block per calendar month that appears in PLAN */
  (function(){
    const cal = document.getElementById('plancal');
    const dates = PLAN.map(p=>p.date).sort();
    const first = dates[0], last = dates[dates.length-1];
    const months = [...new Set(dates.map(d=>d.slice(0,7)))].sort();
    const monthName = ym => new Date(ym+'-01T00:00:00').toLocaleString('en',{month:'long',year:'numeric'});
    months.forEach(ym=>{
      const [y, mo] = ym.split('-').map(Number);
      const label = document.createElement('div');
      label.className = 'planmonth mono';
      label.textContent = monthName(ym);
      const grid = document.createElement('div');
      grid.className = 'plangrid';
      cal.appendChild(label);
      cal.appendChild(grid);
      const fromDay = ym === first.slice(0,7) ? Number(first.slice(8)) : 1;
      const toDay = ym === last.slice(0,7) ? Number(last.slice(8)) : 31;
      renderMonth(grid, y, mo-1, fromDay, toDay);
    });
  })();

  function openCard(key){
    document.querySelectorAll('.pcell').forEach(x=>x.classList.remove('sel'));
    const cell = document.querySelector('.pcell[data-date="'+key+'"]');
    if(cell) cell.classList.add('sel');
    const p = byDate[key];
    detail.hidden = false;
    const hooksHtml = p.hooks.map((h,i)=>`<div class="hkopt${i===0?' top':''}">
      <div class="hkt">#${i+1} ${h.t}${i===0?' · top pick':''}</div>
      <div class="hkline"><span>Opener</span>${esc(h.s)}</div>
      <div class="hkline"><span>Format</span>${esc(h.o)}</div>
      <div class="hkline"><span>Media</span>${esc(h.v)}</div>
    </div>`).join('');
    detail.innerHTML = `<div class="plancard">
      <div class="pct">${esc(p.name)}</div>
      <div class="pcm">
        <span class="pl-pill t-${p.topic}">${p.topic}</span>
        <span class="pl-pill m-${p.mission}">${p.mission}</span>
        <span class="status-pill">Idea</span>
        <span class="mono">${p.date} · ${p.format} · ${p.intensity} intensity · ${p.hookType} · X</span>
      </div>
      <div class="pcw" style="margin-bottom:14px"><b>Why this slot:</b> ${p.why}</div>
      <div class="pkgrid">
        <div class="pkblock"><h4>Opener options</h4>${hooksHtml}</div>
        <div class="pkblock"><h4>Post skeleton (hook / build / payoff / reply plan)</h4><p class="pkscript">${esc(p.script)}</p>
          <h4 style="margin-top:14px">Structure</h4><ul class="pkshots">${p.shots.map(s=>'<li>'+esc(s)+'</li>').join('')}</ul>
          <h4 style="margin-top:14px">Key lines</h4><div class="pkoverlay">${p.overlay.map(o=>'<span>'+esc(o)+'</span>').join('')}</div>
        </div>
      </div>
      <div class="pkblock" style="margin-top:14px"><h4>Full draft <button class="copybtn" data-copy="${p.date}">copy</button></h4>
        <p class="pkcaption" id="cap-${p.date}">${esc(p.caption)}</p>
        <div class="pkcta mono">CTA: ${esc(p.cta)}</div>
      </div>
    </div>`;
    const btn = detail.querySelector('.copybtn');
    if(btn) btn.addEventListener('click', ()=>{
      navigator.clipboard.writeText(p.caption).then(()=>{ btn.textContent='copied'; setTimeout(()=>btn.textContent='copy',1500); });
    });
    detail.scrollIntoView({behavior:'smooth', block:'nearest'});
  }
  document.querySelectorAll('#plan .pcell:not(.pad)').forEach(el=>{
    el.addEventListener('click', ()=>openCard(el.dataset.date));
    el.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault(); openCard(el.dataset.date);} });
  });
})();
