const launchScreen=document.querySelector('#launch-screen');
if(launchScreen){
  const fromSite=new URLSearchParams(location.search).get('from')==='site';
  const forceHomeTop=()=>window.scrollTo({top:0,left:0,behavior:'instant'});
  forceHomeTop();
  if(fromSite){launchScreen.classList.add('is-finishing','is-finished');launchScreen.hidden=true;document.documentElement.classList.remove('launching');history.replaceState(null,'',location.pathname);forceHomeTop()}
  else{window.setTimeout(()=>{forceHomeTop();launchScreen.classList.add('is-finishing')},5750);window.setTimeout(()=>{forceHomeTop();launchScreen.classList.add('is-finished');document.documentElement.classList.remove('launching');forceHomeTop()},6800)}
}

const arrowSvg='<svg viewBox="0 0 28 28" aria-hidden="true"><path class="arrow-shaft" d="M4 24 24 4"/><path class="arrow-head" d="M14 4h10v10"/></svg>';
document.querySelectorAll('.path-arrow,.index-links i').forEach(arrow=>{arrow.innerHTML=arrowSvg});

const homeHero=document.querySelector('.home-hero');
if(homeHero&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const canvas=document.createElement('canvas');canvas.className='pinyin-trail';homeHero.prepend(canvas);
  const ctx=canvas.getContext('2d'),particles=[],ripples=[],tokens=['a','o','e','i','u','ü','in','ing','en','eng','n','l','z','zh','c','ch','s','sh'];let lastX=0,lastY=0,lastTime=0,trailFrame=0,canvasWidth=0,canvasHeight=0,heroVisible=true;
  function resize(){const r=homeHero.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);canvasWidth=r.width;canvasHeight=r.height;canvas.width=canvasWidth*d;canvas.height=canvasHeight*d;canvas.style.width=canvasWidth+'px';canvas.style.height=canvasHeight+'px';ctx.setTransform(d,0,0,d,0,0)}resize();addEventListener('resize',resize,{passive:true});
  const startTrail=()=>{if(!trailFrame&&heroVisible&&!document.hidden)trailFrame=requestAnimationFrame(draw)};
  homeHero.addEventListener('pointermove',event=>{if(!heroVisible||document.hidden)return;const r=homeHero.getBoundingClientRect(),x=event.clientX-r.left,y=event.clientY-r.top,now=performance.now();if(now-lastTime>48){const dx=x-lastX,dy=y-lastY,len=Math.hypot(dx,dy)||1,nx=-dy/len,ny=dx/len;for(const side of [-1,1])particles.push({x,y,vx:nx*side*(.35+Math.random()*.45)-dx*.015,vy:ny*side*(.35+Math.random()*.45)-dy*.015,life:1,token:tokens[Math.floor(Math.random()*tokens.length)],size:14+Math.random()*9});if(Math.random()>.45)ripples.push({x,y,r:3,life:1});lastX=x;lastY=y;lastTime=now;startTrail()}},{passive:true});
  function draw(){trailFrame=0;ctx.clearRect(0,0,canvasWidth,canvasHeight);ctx.textAlign='center';ctx.textBaseline='middle';for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.x+=p.vx;p.y+=p.vy;p.life-=.018;p.vx*=.985;p.vy*=.985;ctx.globalAlpha=Math.max(0,p.life)*.42;ctx.fillStyle='#2429B5';ctx.font=`500 ${p.size}px "Source Han Sans SC",sans-serif`;ctx.fillText(p.token,p.x,p.y);if(p.life<=0)particles.splice(i,1)}for(let i=ripples.length-1;i>=0;i--){const q=ripples[i];q.r+=1.55;q.life-=.024;ctx.globalAlpha=Math.max(0,q.life)*.24;ctx.strokeStyle='#2429B5';ctx.lineWidth=1.15;ctx.beginPath();ctx.arc(q.x,q.y,q.r,0,Math.PI*2);ctx.stroke();if(q.life<=0)ripples.splice(i,1)}ctx.globalAlpha=1;if(particles.length||ripples.length)startTrail()}
  if('IntersectionObserver'in window)new IntersectionObserver(entries=>{heroVisible=entries[0].isIntersecting;if(heroVisible)startTrail();else if(trailFrame){cancelAnimationFrame(trailFrame);trailFrame=0;particles.length=0;ripples.length=0;ctx.clearRect(0,0,canvasWidth,canvasHeight)}},{threshold:0}).observe(homeHero);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)startTrail()});
}

const heroWord=document.querySelector('.hero-title h1');
if(heroWord&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const label=heroWord.textContent.trim();
  heroWord.classList.add('hero-stroke-word');
  heroWord.innerHTML=`<span class="hero-word-fill">${label}</span><span class="hero-word-layer hero-word-outline" aria-hidden="true">${label}</span>`;
  const filterSvg=document.createElementNS('http://www.w3.org/2000/svg','svg');
  filterSvg.classList.add('hero-word-filter');
  filterSvg.setAttribute('aria-hidden','true');
  filterSvg.innerHTML=`<defs><filter id="hero-inset-outline" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feMorphology class="hero-outline-erode" in="SourceAlpha" operator="erode" radius="5" result="inner"/><feComposite in="SourceAlpha" in2="inner" operator="out" result="ring"/><feFlood flood-color="#2429B5" result="blue"/><feComposite in="blue" in2="ring" operator="in" result="blue-ring"/><feFlood flood-color="#E9E7DF" result="paper"/><feComposite in="paper" in2="inner" operator="in" result="paper-core"/><feMerge><feMergeNode in="blue-ring"/><feMergeNode in="paper-core"/></feMerge></filter></defs>`;
  document.body.append(filterSvg);
  const layer=heroWord.querySelector('.hero-word-outline'),erode=filterSvg.querySelector('.hero-outline-erode'),points=[];let frame=0,lastPoint=null,brushRadius=50,lastPaint=0;
  const emptyMask='linear-gradient(transparent,transparent)';
  layer.style.webkitMaskImage=emptyMask;layer.style.maskImage=emptyMask;
  const sizeOutline=()=>{const fontSize=parseFloat(getComputedStyle(heroWord).fontSize)||360;erode.setAttribute('radius',String(Math.max(1.5,Math.min(2.4,fontSize*.0055))));brushRadius=Math.max(44,Math.min(72,fontSize*.14))};
  sizeOutline();addEventListener('resize',sizeOutline,{passive:true});
  const paint=now=>{
    frame=0;
    if(document.hidden){points.length=0;layer.style.webkitMaskImage=emptyMask;layer.style.maskImage=emptyMask;return}
    if(now-lastPaint<30){frame=requestAnimationFrame(paint);return}
    lastPaint=now;
    while(points.length&&now-points[0].time>820)points.shift();
    const mask=points.map(point=>{const age=now-point.time,fade=Math.max(0,1-age/820),radius=point.radius*(.82+.18*fade);return `radial-gradient(circle ${radius}px at ${point.x}px ${point.y}px,rgba(0,0,0,${Math.min(1,fade*1.8)}) 0 84%,transparent 88%)`}).join(',');
    const appliedMask=mask||emptyMask;
    layer.style.webkitMaskImage=appliedMask;layer.style.maskImage=appliedMask;
    if(points.length)frame=requestAnimationFrame(paint);
  };
  const addPoint=event=>{
    const rect=heroWord.getBoundingClientRect(),x=event.clientX-rect.left,y=event.clientY-rect.top,now=performance.now();
    if(lastPoint&&Math.hypot(x-lastPoint.x,y-lastPoint.y)<9&&now-lastPoint.time<28)return;
    points.push({x,y,time:now,radius:brushRadius});if(points.length>48)points.shift();lastPoint={x,y,time:now};
    if(!frame)frame=requestAnimationFrame(paint);
  };
  heroWord.addEventListener('pointermove',addPoint,{passive:true});
  heroWord.addEventListener('pointerleave',()=>{lastPoint=null});
}

const soundMarquee=document.querySelector('.sound-marquee');
if(soundMarquee&&'IntersectionObserver'in window){
  let marqueeVisible=false;
  const updateMarquee=()=>soundMarquee.classList.toggle('is-in-view',marqueeVisible&&!document.hidden);
  new IntersectionObserver(entries=>{marqueeVisible=entries[0].isIntersecting;updateMarquee()},{threshold:0}).observe(soundMarquee);
  document.addEventListener('visibilitychange',updateMarquee);
}

const homeNav=document.querySelector('body[data-page="home"] .nav-shell');
if(homeNav){
  const aboutLink=document.createElement('a');aboutLink.href='#about';aboutLink.textContent='关于字觉';homeNav.querySelector('nav')?.append(aboutLink);
}
