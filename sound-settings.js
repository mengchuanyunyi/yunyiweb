(()=>{
  if(window.zijueSoundSettingsReady)return;window.zijueSoundSettingsReady=true;
  if(!document.querySelector('link[href*="sound-settings.css"]')){const styles=document.createElement('link');styles.rel='stylesheet';styles.href='sound-settings.css?v=20261124-2';document.head.append(styles)}
  const nav=document.querySelector('.nav-shell');if(!nav)return;const key='zijue-pronunciation-v2';let control=document.querySelector('.sound-control');
  if(!control){control=document.createElement('button');control.className='sound-control';control.type='button';nav.append(control)}
  const render=()=>{const on=localStorage.getItem(key)!=='off';window.zijueSoundEnabled=on;control.setAttribute('aria-pressed',String(on));control.title=on?'发音已开启，点击关闭':'发音已关闭，点击开启';control.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="${on?'M16 9c1.5 1.4 1.5 4.6 0 6M18.5 6.5c3 3 3 8 0 11':'M16 9l5 6M21 9l-5 6'}"/></svg><span>发音 / ${on?'ON':'OFF'}</span>`;return on};
  render();control.addEventListener('click',()=>{const on=localStorage.getItem(key)==='off';localStorage.setItem(key,on?'on':'off');render();window.dispatchEvent(new CustomEvent('zijue:soundchange',{detail:{on}}))});
})();
