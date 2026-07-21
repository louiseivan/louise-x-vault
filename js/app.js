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
document.getElementById('statcards').innerHTML = [
  ['Posts analyzed', DATA.length, 'full year via Typefully'],
  ['Total impressions', fmt(totals.v), 'metrics window'],
  ['Bookmarks', fmt(totals.s), 'authority signal'],
  ['Reposts + quotes', fmt(totals.sh), 'distribution signal'],
  ['Followers', '8,694', 'at export time'],
  ['Replies earned', fmt(totals.c), 'weight 13.5 in the ranker']
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

/* ---------- graph view (obsidian intelligence engine) ----------
   A continuous, real-time Instagram command center. Content formats
   and engagement signals stream in from the left, fuse inside a dense
   processing core, and fan out into niche performance clusters on the
   right. Luminous particles flow forever — new ones always entering,
   old ones fading — with stream brightness, speed and cluster size
   driven by the real numbers. The small nodes orbiting each cluster
   are that niche's top posts. No timeline, no reset — always alive. */
(function(){
  const canvas = document.getElementById('graph');
  const ctx = canvas.getContext('2d');
  const tip = document.getElementById('gtip');
  const statusChip = document.getElementById('gstatus');
  const stateEl = document.getElementById('gstate');
  const eventsEl = document.getElementById('gevents');
  const chipsEl = document.getElementById('gchips');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  /* ---- real Instagram aggregates ---- */
  const T = DATA.reduce((t,d)=>({views:t.views+d.views, reach:t.reach+(d.reach||0), likes:t.likes+d.likes,
    comments:t.comments+d.comments, shares:t.shares+d.shares, saves:t.saves+d.saves, watch:t.watch+(d.watch||0)}),
    {views:0, reach:0, likes:0, comments:0, shares:0, saves:0, watch:0});
  const engRate = (T.likes+T.comments+T.saves+T.shares)/Math.max(T.views,1)*100;
  const typeAgg = {Reels:{n:0,v:0}, Carousels:{n:0,v:0}, 'Static posts':{n:0,v:0}};
  DATA.forEach(d=>{
    const k = d.type==='REELS' ? 'Reels' : /CAROUSEL/.test(d.type||'') ? 'Carousels' : 'Static posts';
    typeAgg[k].n++; typeAgg[k].v += d.views;
  });
  const maxPostViews = Math.max(...DATA.map(d=>d.views), 1);
  const nicheAgg = Object.entries(byNiche).map(([name,a])=>({name, n:a.n, v:a.v, avg:a.avg, saveRate:a.saveRate}))
    .sort((a,b)=> b.v-a.v);
  const maxNicheV = nicheAgg[0].v;
  const topOf = {};
  nicheAgg.forEach(nk=>{ topOf[nk.name] = DATA.filter(d=>d.niche===nk.name).sort((a,b)=>b.views-a.views).slice(0,3); });

  /* ---- HUD: pinned live status + real lifetime totals ---- */
  stateEl.textContent = 'live · instagram intelligence';
  statusChip.classList.add('live');
  const CHIPS = [
    {label:'views',    color:'#38bdf8', val:fmt(T.views)},
    {label:'reach',    color:'#22d3ee', val:fmt(T.reach)},
    {label:'likes',    color:'#f472b6', val:fmt(T.likes)},
    {label:'comments', color:'#a78bfa', val:fmt(T.comments)},
    {label:'shares',   color:'#fbbf24', val:fmt(T.shares)},
    {label:'saves',    color:'#34d399', val:fmt(T.saves)},
    {label:'eng rate', color:'#c084fc', val:engRate.toFixed(1)+'%'}
  ];
  chipsEl.innerHTML = CHIPS.map(m=>
    `<span class="gchip"><span class="gdot" style="background:${m.color};color:${m.color}"></span><span class="glab">${m.label}</span><b>${m.val}</b></span>`).join('');
  const gnote = document.querySelector('#graph-view .gnote');
  if(gnote) gnote.textContent = 'Live engine over '+DATA.length+' Instagram posts across '+nicheAgg.length+' niches. Stream brightness and speed follow real totals, cluster size follows views, and the orbiting nodes are the top posts of each niche. Hover anything for numbers, click an orbit node to open the post.';

  /* helpers */
  const lerp = (a,b,t)=> a+(b-a)*t;
  const clamp01 = t => Math.max(0, Math.min(1, t));
  function hexA(hex, a){
    const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${a})`;
  }
  const bz = (P,t)=>{ const u=1-t, a=u*u*u, b=3*u*u*t, c=3*u*t*t, e=t*t*t;
    return {x:a*P.p0.x+b*P.c1.x+c*P.c2.x+e*P.p3.x, y:a*P.p0.y+b*P.c1.y+c*P.c2.y+e*P.p3.y}; };
  const sigW = raw => Math.max(0.12, Math.pow(raw/Math.max(T.views,1), 0.35));

  /* ---- scene state ---- */
  let W, H, sources = [], clusters = [], headers = [], core = null, stars = [];
  let clock = 0, lastT = null, events = T.likes+T.comments+T.saves+T.shares, hoverItem = null;
  let cam = {x:0, y:0, z:1}, dragging = false, dragStart = null;
  const inbound = [], outbound = [], pulses = [], flashes = [];
  let inAcc = 0, outAcc = 0, pulseAcc = 0;

  function layout(){
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W*dpr; canvas.height = H*dpr;
    const mob = W < 640;
    core = {x:W*0.46, y:H*0.55, r: mob?16:24};

    /* left: content formats + engagement signals (real weights) */
    const fmtRows = [
      {label:'Reels', color:'#4cc2ff', w:clamp01(typeAgg.Reels.v/T.views)+0.15, info:typeAgg.Reels.n+' posts · '+fmt(typeAgg.Reels.v)+' views'},
      {label:'Carousels', color:'#818cf8', w:typeAgg.Carousels.n ? clamp01(typeAgg.Carousels.v/T.views)+0.15 : 0.10, info:typeAgg.Carousels.n ? typeAgg.Carousels.n+' posts · '+fmt(typeAgg.Carousels.v)+' views' : 'no carousels in this pull · ambient stream'},
      {label:'Static posts', color:'#60a5fa', w:clamp01(typeAgg['Static posts'].v/T.views)+0.12, info:typeAgg['Static posts'].n+' posts · '+fmt(typeAgg['Static posts'].v)+' views'},
      {label:'Stories', color:'#38bdf8', w:0.10, info:'not exposed by the Instagram API · ambient stream'}
    ];
    const sigRows = [
      {label:'Views', color:'#38bdf8', w:1, info:fmt(T.views)+' lifetime views'},
      {label:'Reach', color:'#22d3ee', w:sigW(T.reach), info:fmt(T.reach)+' accounts reached'},
      {label:'Impressions', color:'#7dd3fc', w:sigW(T.reach)*0.8, info:'estimated from reach · not in this API pull'},
      {label:'Likes', color:'#f472b6', w:sigW(T.likes), info:fmt(T.likes)+' lifetime likes'},
      {label:'Comments', color:'#a78bfa', w:sigW(T.comments), info:fmt(T.comments)+' lifetime comments'},
      {label:'Shares', color:'#fbbf24', w:sigW(T.shares), info:fmt(T.shares)+' lifetime shares'},
      {label:'Saves', color:'#34d399', w:sigW(T.saves), info:fmt(T.saves)+' lifetime saves'},
      {label:'Profile clicks', color:'#c084fc', w:0.3, info:fmt(DATA.reduce((a,d)=>a+(d.fol||0),0))+' profile clicks (weight 12)'},
      {label:'Profile visits', color:'#93c5fd', w:0.08, info:'not exposed per post · ambient stream'},
      {label:'Followers +', color:'#f9a8d4', w:0.08, info:'per-post follows only reported on feed posts'}
    ];
    const rows = [{header:'formats'}, ...fmtRows, {header:'signals'}, ...sigRows];
    const lx = mob?16:26, top0 = mob?86:96, bot = H-22;
    const gap = (bot-top0)/(rows.length-1);
    sources = []; headers = [];
    rows.forEach((r,i)=>{
      const y = top0 + i*gap;
      if(r.header){ headers.push({label:r.header, x:lx-4, y}); return; }
      const ang = Math.PI + ((y<core.y?-1:1)*Math.min(Math.abs(y-core.y)/H,1))*0.5;
      const p3 = {x:core.x+Math.cos(ang)*(core.r+2), y:core.y+Math.sin(ang)*(core.r+2)};
      sources.push({kind:'source', label:r.label, color:r.color, w:r.w, info:r.info, x:lx, y, r:3.2+r.w*2.6,
        P:{p0:{x:lx, y}, c1:{x:lerp(lx,core.x,0.42), y}, c2:{x:lerp(lx,core.x,0.78), y:lerp(y,p3.y,0.8)}, p3}});
    });

    /* right: niche performance clusters */
    const cx = W-(mob?84:150);
    const ctop = mob?106:118, cbot = H-30;
    headers.push({label:'niche performance', x:cx-24, y:ctop-22});
    const cgap = (cbot-ctop)/(nicheAgg.length-1);
    clusters = nicheAgg.map((nk,i)=>{
      const y = ctop + i*cgap;
      const w = nk.v/maxNicheV;
      const r = (mob?5:7) + Math.sqrt(w)*(mob?9:15);
      const p0ang = Math.atan2(y-core.y, cx-core.x);
      const p0 = {x:core.x+Math.cos(p0ang)*(core.r+2), y:core.y+Math.sin(p0ang)*(core.r+2)};
      return {kind:'cluster', name:nk.name, color:nc(nk.name), w, agg:nk, x:cx, y, r, rank:i, hit:0,
        top:topOf[nk.name], insightPos:[],
        P:{p0, c1:{x:lerp(core.x,cx,0.35), y:lerp(core.y,y,0.2)}, c2:{x:lerp(core.x,cx,0.72), y}, p3:{x:cx-r-3, y}}};
    });

    /* parallax starfield */
    stars = [];
    const nStars = mob?26:56;
    for(let i=0;i<nStars;i++){
      stars.push({x:Math.random()*W, y:Math.random()*H, z:0.3+Math.random()*0.7,
        r:0.4+Math.random()*1.1, c:['#38bdf8','#a78bfa','#f472b6','#e2e8f0'][(Math.random()*4)|0]});
    }
    inbound.length = 0; outbound.length = 0; pulses.length = 0; flashes.length = 0;
  }

  /* ---- continuous particle engine: in from sources, out to clusters ---- */
  function spawn(dt){
    const cap = W<640 ? 90 : 170;
    inAcc += dt;
    while(inAcc > 90){
      inAcc -= 90;
      if(inbound.length + outbound.length < cap){
        let tw = 0; sources.forEach(s=> tw += s.w);
        let pw = Math.random()*tw;
        const s = sources.find(x=> (pw -= x.w) <= 0) || sources[0];
        inbound.push({P:s.P, t:0, sp:0.00010+0.00016*s.w+Math.random()*0.00005, r:0.7+Math.random()*1.1, c:s.color});
      }
    }
    outAcc += dt;
    while(outAcc > 95){
      outAcc -= 95;
      if(inbound.length + outbound.length < cap){
        let tw = 0; clusters.forEach(c=> tw += 0.25+c.w);
        let pw = Math.random()*tw;
        const c = clusters.find(x=> (pw -= 0.25+x.w) <= 0) || clusters[0];
        outbound.push({P:c.P, t:0, sp:0.00011+0.00020*c.w+Math.random()*0.00005, r:0.7+Math.random()*1.2, c:c.color, cl:c});
      }
    }
    pulseAcc += dt;
    while(pulseAcc > 620){
      pulseAcc -= 620;
      if(pulses.length < 14){
        const all = Math.random()<0.5 ? sources : clusters;
        const it = all[(Math.random()*all.length)|0];
        pulses.push({P:it.P, t:0, sp:0.00042+0.0003*it.w, c:it.color});
      }
    }
    inbound.forEach(q=> q.t += q.sp*dt);
    outbound.forEach(q=> q.t += q.sp*dt);
    pulses.forEach(q=> q.t += q.sp*dt);
    for(let i=inbound.length-1;i>=0;i--) if(inbound[i].t>=1){
      if(flashes.length<10) flashes.push({t:0, dur:520});
      inbound.splice(i,1);
    }
    for(let i=outbound.length-1;i>=0;i--) if(outbound[i].t>=1){
      outbound[i].cl.hit = clock; events++;
      outbound.splice(i,1);
    }
    for(let i=pulses.length-1;i>=0;i--) if(pulses[i].t>=1) pulses.splice(i,1);
    for(let i=flashes.length-1;i>=0;i--){ flashes[i].t += dt; if(flashes[i].t>flashes[i].dur) flashes.splice(i,1); }
  }

  /* render */
  function draw(){
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,W,H);

    /* obsidian glass backdrop */
    const bg = ctx.createLinearGradient(0,0,0,H);
    bg.addColorStop(0,'#06080f'); bg.addColorStop(0.5,'#0a0e1a'); bg.addColorStop(1,'#05070d');
    ctx.fillStyle = bg; ctx.fillRect(0,0,W,H);
    const g1 = ctx.createRadialGradient(W*0.18,H*0.12,10,W*0.18,H*0.12,W*0.5);
    g1.addColorStop(0,'rgba(139,92,246,0.055)'); g1.addColorStop(1,'rgba(139,92,246,0)');
    ctx.fillStyle = g1; ctx.fillRect(0,0,W,H);
    const g2 = ctx.createRadialGradient(W*0.85,H*0.9,10,W*0.85,H*0.9,W*0.5);
    g2.addColorStop(0,'rgba(34,211,238,0.05)'); g2.addColorStop(1,'rgba(34,211,238,0)');
    ctx.fillStyle = g2; ctx.fillRect(0,0,W,H);
    const sheen = ctx.createLinearGradient(0,0,W,H*0.9);
    sheen.addColorStop(0.32,'rgba(255,255,255,0)');
    sheen.addColorStop(0.5,'rgba(255,255,255,0.016)');
    sheen.addColorStop(0.68,'rgba(255,255,255,0)');
    ctx.fillStyle = sheen; ctx.fillRect(0,0,W,H);

    const driftX = REDUCE ? 0 : Math.sin(clock/9500)*5;
    const driftY = REDUCE ? 0 : Math.cos(clock/12500)*4;

    /* parallax starfield (screen space, slower drift = depth) */
    ctx.globalCompositeOperation = 'lighter';
    stars.forEach(s=>{
      const tw = REDUCE ? 0.5 : 0.35+0.3*Math.sin(clock/1400*s.z + s.x);
      ctx.fillStyle = hexA(s.c, 0.10+0.14*tw);
      ctx.beginPath(); ctx.arc(s.x+driftX*s.z*0.5, s.y+driftY*s.z*0.5, s.r, 0, 7); ctx.fill();
    });
    ctx.globalCompositeOperation = 'source-over';

    /* camera + minimal drift */
    ctx.save();
    ctx.translate(cam.x+driftX, cam.y+driftY); ctx.scale(cam.z, cam.z);

    /* streams: thin glowing curves, brightness follows performance */
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineCap = 'round';
    const strokeP = P=>{ ctx.beginPath(); ctx.moveTo(P.p0.x,P.p0.y); ctx.bezierCurveTo(P.c1.x,P.c1.y,P.c2.x,P.c2.y,P.p3.x,P.p3.y); ctx.stroke(); };
    sources.forEach(s=>{
      const hot = hoverItem===s;
      ctx.strokeStyle = hexA(s.color, hot ? 0.4 : 0.05+0.15*s.w);
      ctx.lineWidth = hot ? 1.6 : 0.7+0.9*s.w;
      strokeP(s.P);
    });
    clusters.forEach(c=>{
      const hot = hoverItem===c;
      ctx.strokeStyle = hexA(c.color, hot ? 0.45 : 0.06+0.20*c.w);
      ctx.lineWidth = hot ? 1.8 : 0.8+1.1*c.w;
      strokeP(c.P);
    });

    /* pulses gliding along the streams */
    pulses.forEach(q=>{
      const a = bz(q.P, Math.max(q.t-0.055, 0)), b = bz(q.P, q.t);
      ctx.strokeStyle = hexA(q.c, 0.5*(1-Math.abs(q.t-0.5)*0.8));
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
    });

    /* traveling particles */
    const drawDot = q=>{
      const pos = bz(q.P, q.t);
      const a = q.t<0.12 ? q.t/0.12 : q.t>0.88 ? (1-q.t)/0.12 : 1;
      ctx.fillStyle = hexA(q.c, 0.7*Math.max(a,0));
      ctx.beginPath(); ctx.arc(pos.x, pos.y, q.r, 0, 7); ctx.fill();
    };
    inbound.forEach(drawDot);
    outbound.forEach(drawDot);

    /* processing core */
    const pk = REDUCE ? 1 : 1+Math.sin(clock/620)*0.07;
    const cg = ctx.createRadialGradient(core.x,core.y,1,core.x,core.y,core.r*2.6);
    cg.addColorStop(0,'rgba(190,230,255,0.5)');
    cg.addColorStop(0.25,'rgba(56,189,248,0.18)');
    cg.addColorStop(1,'rgba(56,189,248,0)');
    ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(core.x,core.y,core.r*2.6,0,7); ctx.fill();
    flashes.forEach(f=>{
      const t = f.t/f.dur;
      ctx.strokeStyle = 'rgba(160,220,255,'+(0.35*(1-t)).toFixed(3)+')'; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(core.x,core.y,core.r*0.8+t*core.r*1.6,0,7); ctx.stroke();
    });
    const a0 = REDUCE ? 0.6 : clock/1600, a1 = REDUCE ? 2.8 : -clock/2300;
    ctx.strokeStyle = 'rgba(94,210,255,0.5)'; ctx.lineWidth = 1.4;
    ctx.beginPath(); ctx.arc(core.x,core.y,(core.r+6)*pk,a0,a0+2.1); ctx.stroke();
    ctx.strokeStyle = 'rgba(167,139,250,0.42)'; ctx.lineWidth = 1.1;
    ctx.beginPath(); ctx.arc(core.x,core.y,(core.r+12)*pk,a1,a1+1.5); ctx.stroke();
    ctx.strokeStyle = 'rgba(140,200,255,0.14)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(core.x,core.y,core.r+18,0,7); ctx.stroke();
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(8,12,20,0.92)';
    ctx.beginPath(); ctx.arc(core.x,core.y,core.r*0.62*pk,0,7); ctx.fill();
    ctx.strokeStyle = 'rgba(150,220,255,0.8)'; ctx.lineWidth = 1.3; ctx.stroke();

    /* source nodes + labels */
    sources.forEach(s=>{
      const hot = hoverItem===s;
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = hexA(s.color, 0.30);
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r+2.5, 0, 7); ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = s.color;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r*(hot?1.3:1), 0, 7); ctx.fill();
      ctx.fillStyle = hot ? '#e8ecf3' : 'rgba(170,180,198,0.85)';
      ctx.font = '9.5px "JetBrains Mono",monospace'; ctx.textAlign = 'left';
      ctx.fillText(s.label.toLowerCase(), s.x+s.r+6, s.y+3);
      s.rx = s.x; s.ry = s.y;
    });
    ctx.fillStyle = 'rgba(122,140,170,0.55)'; ctx.font = '8.5px "JetBrains Mono",monospace'; ctx.textAlign = 'left';
    headers.forEach(h=> ctx.fillText(h.label.toUpperCase(), h.x, h.y+3));

    /* niche performance clusters + orbiting insight nodes */
    clusters.forEach(c=>{
      const hot = hoverItem===c;
      const pkc = REDUCE ? 1 : (c.rank<2 ? 1+Math.sin(clock/700+c.rank)*0.05 : 1);
      const hitGlow = c.hit ? Math.max(0, 1-(clock-c.hit)/500) : 0;
      const r = c.r*pkc;
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = hexA(c.color, 0.10+0.16*c.w + hitGlow*0.18 + (hot?0.15:0));
      ctx.beginPath(); ctx.arc(c.x, c.y, r+7+c.agg.saveRate/4, 0, 7); ctx.fill();
      c.insightPos = [];
      c.top.forEach((d,k)=>{
        const oa = k*2.1 + (REDUCE ? 0 : clock/(3800+k*1200)) + c.rank;
        const orx = r+8+k*6, ir = 2+Math.sqrt(d.views/maxPostViews)*4.5;
        const ix = c.x+Math.cos(oa)*orx, iy = c.y+Math.sin(oa)*orx*0.8;
        ctx.fillStyle = hexA(c.color, hoverItem && hoverItem.d===d ? 0.95 : 0.55);
        ctx.beginPath(); ctx.arc(ix, iy, ir, 0, 7); ctx.fill();
        c.insightPos.push({kind:'insight', d, x:ix, y:iy, r:ir, cl:c});
      });
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(9,13,21,0.92)';
      ctx.beginPath(); ctx.arc(c.x, c.y, r, 0, 7); ctx.fill();
      ctx.lineWidth = hot ? 2 : 1.5; ctx.strokeStyle = hexA(c.color, 0.9); ctx.stroke();
      if(hot){ ctx.lineWidth = 1; ctx.strokeStyle = '#fff'; ctx.beginPath(); ctx.arc(c.x, c.y, r+3, 0, 7); ctx.stroke(); }
      ctx.textAlign = 'left';
      ctx.fillStyle = hot ? '#e8ecf3' : 'rgba(190,198,212,0.9)';
      ctx.font = '600 10px Inter,sans-serif';
      ctx.fillText(c.name.split(' / ')[0], c.x+r+8, c.y+1);
      ctx.fillStyle = hexA(c.color, 0.85);
      ctx.font = '8.5px "JetBrains Mono",monospace';
      ctx.fillText(fmt(c.agg.v)+' views', c.x+r+8, c.y+11);
      c.rx = c.x; c.ry = c.y;
    });
    ctx.restore();

    /* cinematic vignette */
    const vg = ctx.createRadialGradient(W/2,H/2,Math.min(W,H)*0.38,W/2,H/2,Math.max(W,H)*0.72);
    vg.addColorStop(0,'rgba(0,0,0,0)'); vg.addColorStop(1,'rgba(2,3,6,0.42)');
    ctx.fillStyle = vg; ctx.fillRect(0,0,W,H);
  }

  function frame(now){
    const dt = lastT==null ? 16.7 : Math.min(now-lastT, 50);  /* clamped: seamless after tab switches */
    lastT = now; clock += dt;
    spawn(dt);
    draw();
    eventsEl.textContent = events.toLocaleString('en-US')+' events';
    requestAnimationFrame(frame);
  }

  /* interaction: hover intel, click-to-open, pan, zoom */
  function toWorld(px,py){
    const dX = REDUCE ? 0 : Math.sin(clock/9500)*5;
    const dY = REDUCE ? 0 : Math.cos(clock/12500)*4;
    return {x:(px-cam.x-dX)/cam.z, y:(py-cam.y-dY)/cam.z};
  }
  function pick(px,py){
    const pt = toWorld(px,py);
    let best = null, bd = 1e9;
    const test = (it,rad)=>{ const dx=it.x-pt.x, dy=it.y-pt.y, dd=dx*dx+dy*dy;
      if(dd < rad*rad && dd < bd){ bd = dd; best = it; } };
    clusters.forEach(c=> c.insightPos.forEach(ip=> test(ip, ip.r+4)));
    sources.forEach(s=> test(s, s.r+5));
    clusters.forEach(c=> test(c, c.r+4));
    return best;
  }
  canvas.addEventListener('mousemove', e=>{
    const rc = canvas.getBoundingClientRect();
    if(dragging){
      cam.x += e.clientX-dragStart.x; cam.y += e.clientY-dragStart.y;
      dragStart = {x:e.clientX, y:e.clientY};
      if(REDUCE) draw();
      return;
    }
    hoverItem = pick(e.clientX-rc.left, e.clientY-rc.top);
    if(hoverItem){
      tip.style.display = 'block';
      tip.style.left = Math.min(e.clientX-rc.left+14, W-272)+'px';
      tip.style.top = Math.min(e.clientY-rc.top+12, H-84)+'px';
      if(hoverItem.kind==='insight'){
        const d = hoverItem.d;
        tip.innerHTML = '<div class="t">'+esc((d.cap||'(no caption)').slice(0,90))+'</div><div class="m">'+d.ts.slice(0,10)+' · '+fmt(d.views)+' views · '+fmt(d.saves)+' saves · click to open</div>';
        canvas.style.cursor = 'pointer';
      } else if(hoverItem.kind==='cluster'){
        const a = hoverItem.agg;
        tip.innerHTML = '<div class="t">'+esc(hoverItem.name)+'</div><div class="m">'+a.n+' posts · '+fmt(a.v)+' views · '+fmt(a.avg)+' avg · '+a.saveRate.toFixed(1)+' saves/1K</div>';
        canvas.style.cursor = 'grab';
      } else {
        tip.innerHTML = '<div class="t">'+esc(hoverItem.label)+'</div><div class="m">'+esc(hoverItem.info)+'</div>';
        canvas.style.cursor = 'grab';
      }
    } else { tip.style.display = 'none'; canvas.style.cursor = dragging ? 'grabbing' : 'grab'; }
    if(REDUCE) draw();
  });
  canvas.addEventListener('mouseleave', ()=>{ hoverItem = null; tip.style.display = 'none'; if(REDUCE) draw(); });
  canvas.addEventListener('mousedown', e=>{ if(!hoverItem || hoverItem.kind!=='insight'){ dragging = true; dragStart = {x:e.clientX, y:e.clientY}; } });
  addEventListener('mouseup', ()=> dragging = false);
  canvas.addEventListener('click', ()=>{ if(hoverItem && hoverItem.kind==='insight') open(hoverItem.d.url, '_blank'); });
  canvas.addEventListener('wheel', e=>{
    e.preventDefault();
    const rc = canvas.getBoundingClientRect();
    const mx = e.clientX-rc.left, my = e.clientY-rc.top;
    const nz = Math.min(Math.max(cam.z*(e.deltaY<0 ? 1.1 : 0.9), 0.4), 3);
    cam.x = mx-(mx-cam.x)*nz/cam.z; cam.y = my-(my-cam.y)*nz/cam.z; cam.z = nz;
    if(REDUCE) draw();
  }, {passive:false});
  addEventListener('resize', ()=>{ layout(); if(REDUCE) draw(); });

  /* boot: always alive — no reveal phase, no reset */
  layout();
  if(REDUCE){ draw(); eventsEl.textContent = 'ambient · static'; }
  else requestAnimationFrame(frame);
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
