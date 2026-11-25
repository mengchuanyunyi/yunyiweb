const pronunciationKeys=['a','o','e','i','u','ü','ai','ei','ui','ao','ou','iu','ie','üe','er','an','en','in','un','ün','ang','eng','ing','ong'];
const pronunciationFiles={a:'Y01_01_a.png',o:'Y01_02_o.png',e:'Y01_03_e.png',i:'Y01_04_i.png',u:'Y01_05_u.png','ü':'Y01_06_v.png',er:'Y02_01_er.png',ai:'Y03_01_ai.png',ei:'Y03_02_ei.png',ao:'Y04_01_ao.png',ou:'Y04_02_ou.png',ui:'Y05_01_ui.png',iu:'Y05_02_iu.png',ie:'Y06_01_ie.png','üe':'Y06_02_ve.png',an:'Y07_01_an.png?v=20261124-3',en:'Y07_02_en.png',in:'Y08_01_in.png','ün':'Y08_02_vn.png',un:'Y09_01_un.png',ang:'Y10_01_ang.png?v=20261124-3',eng:'Y10_02_eng.png?v=20261124-2',ing:'Y11_01_ing.png',ong:'Y11_02_ong.png'};
const pronunciationSlides=pronunciationKeys.map(key=>({key,src:`assets/pronunciation/${pronunciationFiles[key]}`,alt:`${key} 韵母发音图解`,copy:`${key} 的正式发音图解。观察口型、舌位与气流标记，再配合文字提示模仿。`}));
const pronunciationViewer=document.querySelector('#pronunciation-pilot');
if(pronunciationViewer){
  const section=pronunciationViewer.closest('.finals-section');
  const image=pronunciationViewer.querySelector('[data-pronunciation-image]');
  const title=pronunciationViewer.querySelector('[data-pronunciation-title]');
  const count=pronunciationViewer.querySelector('[data-pronunciation-count]');
  const copy=pronunciationViewer.querySelector('[data-pronunciation-copy]');
  const toggle=document.querySelector('[data-pronunciation-toggle]');
  const triggers=[...document.querySelectorAll('[data-pronunciation]')];
  let activeIndex=0;
  pronunciationSlides.forEach(slide=>{const preload=new Image();preload.src=slide.src});
  const show=index=>{
    activeIndex=(index+pronunciationSlides.length)%pronunciationSlides.length;
    const slide=pronunciationSlides[activeIndex];
    image.src=slide.src;image.alt=slide.alt;title.textContent=slide.key;count.textContent=`${String(activeIndex+1).padStart(2,'0')} / ${pronunciationSlides.length}`;copy.textContent=slide.copy;
    triggers.forEach(trigger=>{const active=!pronunciationViewer.hidden&&trigger.dataset.pronunciation===slide.key;trigger.classList.toggle('active',active);trigger.setAttribute('aria-pressed',String(active))});
  };
  const setOpen=(open,remember=true)=>{
    pronunciationViewer.hidden=!open;section?.classList.toggle('pronunciation-open',open);toggle?.setAttribute('aria-expanded',String(open));
    if(toggle)toggle.textContent=open?'收起图解':'显示图解';
    if(remember)localStorage.setItem('zijue-pronunciation-diagram',open?'open':'closed');
    show(activeIndex);
  };
  triggers.forEach(trigger=>trigger.addEventListener('click',()=>{
    const index=pronunciationSlides.findIndex(slide=>slide.key===trigger.dataset.pronunciation);
    show(index);setOpen(true)
  }));
  toggle?.addEventListener('click',()=>setOpen(pronunciationViewer.hidden));
  pronunciationViewer.querySelector('[data-pronunciation-prev]').addEventListener('click',()=>show(activeIndex-1));
  pronunciationViewer.querySelector('[data-pronunciation-next]').addEventListener('click',()=>show(activeIndex+1));
  show(0);
  setOpen(localStorage.getItem('zijue-pronunciation-diagram')==='open',false);
}
