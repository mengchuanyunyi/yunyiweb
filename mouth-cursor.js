(()=>{
  if(document.querySelector('.mouth-cursor'))return;
  const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
  if(!finePointer.matches||!('PointerEvent'in window))return;
  const svg=`<svg viewBox="0 0 100 64" role="presentation" focusable="false">
    <g class="mouth-state mouth-state-closed">
      <path class="lip-shape" d="M3 32C18 17 29 5 43 17C47 14 49 13 50 13C51 13 53 14 57 17C71 5 82 17 97 32C84 49 68 57 50 57C32 57 16 49 3 32Z"/>
      <path class="lip-line" d="M3 32C17 37 30 36 40 29C44 32 47 34 50 34C53 34 56 32 60 29C70 36 83 37 97 32"/>
    </g>
    <g class="mouth-state mouth-state-open">
      <path class="lip-shape" d="M3 32C18 17 29 5 43 17C47 14 49 13 50 13C51 13 53 14 57 17C71 5 82 17 97 32C84 49 68 57 50 57C32 57 16 49 3 32Z"/>
      <path class="mouth-cavity" d="M10 32C22 23 36 20 50 20C64 20 78 23 90 32C78 45 65 50 50 50C35 50 22 45 10 32Z"/>
      <path class="teeth-row" d="M24 25C32 21 41 20 50 20C59 20 68 21 76 25L70 32H30L24 25Z"/>
    </g>
  </svg>`;
  const cursor=document.createElement('span');
  cursor.className='mouth-cursor';cursor.dataset.surface='warm';cursor.setAttribute('aria-hidden','true');cursor.innerHTML=svg;document.body.append(cursor);
  if(getComputedStyle(cursor).position!=='fixed'){cursor.remove();return}
  const palette={blue:[36,41,181],orange:[232,121,80]};
  const distance=(rgb,target)=>Math.hypot(rgb[0]-target[0],rgb[1]-target[1],rgb[2]-target[2]);
  const surfaceAt=(x,y)=>{
    let node=document.elementFromPoint(x,y),rgb=null;
    while(node&&node!==document.documentElement){
      const match=getComputedStyle(node).backgroundColor.match(/[\d.]+/g)?.map(Number);
      if(match&&match.length>=3&&(match.length<4||match[3]>.12)){rgb=match;break}
      node=node.parentElement;
    }
    if(!rgb)return 'warm';
    if(distance(rgb,palette.blue)<72)return 'blue';
    if(distance(rgb,palette.orange)<72)return 'orange';
    return 'warm';
  };
  const homeTalk=document.body.dataset.page==='home'&&!matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canTalkAt=(x,y)=>homeTalk&&Boolean(document.elementFromPoint(x,y)?.closest('.home-hero'));
  let pressed=false,releaseTimer=0,talkTimer=0;
  const close=()=>{if(!pressed)cursor.classList.remove('is-open')};
  document.body.classList.add('has-mouth-cursor');
  document.addEventListener('pointermove',event=>{cursor.style.setProperty('--cursor-x',event.clientX+'px');cursor.style.setProperty('--cursor-y',event.clientY+'px');cursor.dataset.surface=surfaceAt(event.clientX,event.clientY);cursor.classList.add('is-visible');if(canTalkAt(event.clientX,event.clientY)&&!pressed){cursor.classList.add('is-talking');clearTimeout(talkTimer);talkTimer=setTimeout(()=>cursor.classList.remove('is-talking'),150)}else{clearTimeout(talkTimer);cursor.classList.remove('is-talking')}},{passive:true});
  document.addEventListener('pointerdown',()=>{pressed=true;clearTimeout(releaseTimer);clearTimeout(talkTimer);cursor.classList.remove('is-talking');cursor.classList.add('is-open')},{passive:true});
  addEventListener('pointerup',()=>{pressed=false;clearTimeout(releaseTimer);releaseTimer=setTimeout(close,150)},{passive:true});
  addEventListener('pointercancel',()=>{pressed=false;clearTimeout(releaseTimer);clearTimeout(talkTimer);cursor.classList.remove('is-talking');close()},{passive:true});
  addEventListener('blur',()=>{pressed=false;clearTimeout(releaseTimer);clearTimeout(talkTimer);cursor.classList.remove('is-talking');close()});
  document.documentElement.addEventListener('pointerleave',()=>{pressed=false;clearTimeout(releaseTimer);clearTimeout(talkTimer);cursor.classList.remove('is-visible','is-open','is-talking')});
  document.documentElement.addEventListener('pointerenter',()=>cursor.classList.add('is-visible'));
})();

