const initialGroups={
  bilabial:{label:'双唇音',letters:['b','p','m'],copy:'上下唇共同形成阻碍。观察图中标出的闭合、送气或鼻腔通气位置。'},
  labiodental:{label:'唇齿音',letters:['f'],copy:'上齿与下唇接近形成摩擦。'},
  alveolar:{label:'舌尖中音',letters:['d','t','n','l'],copy:'舌尖接近或抵住上齿龈附近完成发音。'},
  velar:{label:'舌根音',letters:['g','k','h'],copy:'舌根抬向软腭附近形成阻碍或摩擦。'},
  palatal:{label:'舌面音',letters:['j','q','x'],copy:'舌面前部抬向硬腭前部形成阻碍或摩擦。'},
  retroflex:{label:'舌尖后音',letters:['zh','ch','sh','r'],copy:'舌尖抬向硬腭前部，保持翘舌位置。'},
  dental:{label:'舌尖前音',letters:['z','c','s'],copy:'舌尖靠近上门齿背部形成阻碍或摩擦。'},
  spelling:{label:'拼写中的字母',letters:['y','w'],copy:'观察 y、w 对应的起音姿态；它们也承担零声母音节的拼写与音节分隔。'}
};
const initialImages={b:'S01_01_b.png',p:'S01_02_p.png',m:'S02_01_m.png',f:'S03_01_f.png',d:'S04_01_d.png',t:'S04_02_t.png',n:'S05_01_n.png',l:'S06_01_l.png?v=20261125-1',g:'S07_01_g.png',k:'S07_02_k.png',h:'S08_01_h.png',j:'S09_01_j.png',q:'S09_02_q.png',x:'S10_01_x.png',zh:'S11_01_zh.png',ch:'S11_02_ch.png',sh:'S12_01_sh.png',r:'S13_01_r.png',z:'S14_01_z.png',c:'S14_02_c.png',s:'S15_01_s.png',y:'S16_01_y.png',w:'S17_01_w.png'};
const initialViewer=document.querySelector('#initial-viewer');
if(initialViewer){
  const section=initialViewer.closest('.initials-section'),toggle=section.querySelector('[data-initial-toggle]'),articles=[...document.querySelectorAll('[data-initial-group]')],letters=[...document.querySelectorAll('[data-initial]')];
  const ordered=letters.map(button=>button.dataset.initial),title=initialViewer.querySelector('[data-initial-title]'),groupLabel=initialViewer.querySelector('[data-initial-group-label]'),count=initialViewer.querySelector('[data-initial-count]'),choices=initialViewer.querySelector('[data-initial-choices]'),image=initialViewer.querySelector('[data-initial-image]'),copy=initialViewer.querySelector('[data-initial-copy]');
  let activeLetter='',activeGroup='';
  const groupFor=letter=>Object.entries(initialGroups).find(([,data])=>data.letters.includes(letter))?.[0];
  const close=()=>{initialViewer.hidden=true;section.classList.remove('initial-view-open');toggle.textContent='显示图解';toggle.setAttribute('aria-expanded','false');articles.forEach(article=>{article.classList.remove('active');article.setAttribute('aria-expanded','false')});letters.forEach(button=>button.classList.remove('active'))};
  const show=letter=>{
    const groupKey=groupFor(letter),data=initialGroups[groupKey];if(!data)return;
    activeLetter=letter;activeGroup=groupKey;initialViewer.hidden=false;section.classList.add('initial-view-open');toggle.textContent='收起图解';toggle.setAttribute('aria-expanded','true');
    title.textContent=letter;groupLabel.textContent='发音图解';count.textContent=`${String(ordered.indexOf(letter)+1).padStart(2,'0')} / ${ordered.length}`;image.src=`assets/pronunciation/${initialImages[letter]}`;image.alt=`${letter} ${data.label}发音图解`;copy.textContent=data.copy;
    choices.innerHTML=data.letters.map(item=>`<button type="button" data-viewer-initial="${item}" class="${item===letter?'active':''}" aria-pressed="${item===letter}">${item}</button>`).join('');
    choices.querySelectorAll('[data-viewer-initial]').forEach(button=>button.addEventListener('click',()=>show(button.dataset.viewerInitial)));
    articles.forEach(article=>{const active=article.dataset.initialGroup===groupKey;article.classList.toggle('active',active);article.setAttribute('aria-expanded',String(active))});letters.forEach(button=>button.classList.toggle('active',button.dataset.initial===letter));
  };
  const activateArticle=article=>{const first=article.dataset.initials.split(' ')[0];if(initialViewer.hidden||activeGroup!==article.dataset.initialGroup)show(first)};
  articles.forEach(article=>{article.setAttribute('role','button');article.setAttribute('aria-expanded','false');article.setAttribute('aria-controls','initial-viewer');article.addEventListener('click',event=>{if(event.target.closest('[data-initial]'))return;activateArticle(article)});article.addEventListener('keydown',event=>{if(event.target!==article)return;if(event.key==='Enter'||event.key===' '){event.preventDefault();activateArticle(article)}})});
  letters.forEach(button=>button.addEventListener('click',event=>{event.stopPropagation();show(button.dataset.initial)}));
  toggle.addEventListener('click',()=>initialViewer.hidden?show(activeLetter||'b'):close());
  initialViewer.querySelector('[data-initial-prev]').addEventListener('click',()=>show(ordered[(ordered.indexOf(activeLetter)-1+ordered.length)%ordered.length]));
  initialViewer.querySelector('[data-initial-next]').addEventListener('click',()=>show(ordered[(ordered.indexOf(activeLetter)+1)%ordered.length]));
}
