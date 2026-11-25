history.scrollRestoration='manual';
window.addEventListener('pageshow',()=>requestAnimationFrame(()=>window.scrollTo(0,0)));

const shuffle=items=>{const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy};
const params=new URLSearchParams(location.search);
const key=params.get('topic'),mode=params.get('mode');
const isHub=!key&&!mode,isComprehensive=!key&&!!mode;
const modeTopics={mixed:{index:'05',kicker:'综合练习',title:'混合选择练习',intro:'每轮从多个发音专题的字库中随机抽取一批大字，重新测试时会更换题目和顺序。'}};
const topic=isHub?{index:'05',kicker:'练习',title:'选择一种练法',intro:'进入小专题集中辨音，或用混合选择题检查多个发音难点；绕口令材料收进发音手册。',items:[]}:isComprehensive?{...modeTopics.mixed,items:[]}:practiceTopics[key]||{index:'00',kicker:'专题练习',title:'选择一组发音，开始练习',intro:'请从发音修正页面选择一个专题。',items:[]};
document.title=`${topic.title.replace('。','')}练习｜字觉 ZIJUE`;
document.querySelector('#topic-index').textContent=`PRACTICE / ${topic.index}`;
document.querySelector('#topic-kicker').textContent=topic.kicker;
document.querySelector('#topic-title').textContent=topic.title;
document.querySelector('#topic-intro').textContent=topic.intro;
document.querySelector('#option-count').textContent=`${String(topic.items.length).padStart(2,'0')} ITEMS`;
if(isHub||isComprehensive){const back=document.querySelector('.practice-topic-head .meta-row a');back.textContent=isHub?'← 返回首页':'← 返回练习选择';back.href=isHub?'index.html?from=site':'practice.html'}

const options=document.querySelector('#practice-options');
const diagram=document.querySelector('#practice-diagram');
const topicPanel=document.querySelector('.practice-topic-options'),paper=document.querySelector('#comprehensive-practice'),modePanel=document.querySelector('#practice-modes');
if(isHub){
  topicPanel.hidden=true;paper.hidden=true;modePanel.hidden=false;
}else if(isComprehensive){
  modePanel.hidden=true;topicPanel.hidden=true;paper.hidden=false;
  paper.querySelector('#paper-title').textContent='混合选择练习';
  paper.querySelector('#paper-description').textContent='题目来自前后鼻音、平翘舌音、n / l、f / h 等专题。每轮只显示一批，题库会持续轮换。';
}else if(topic.items.length){
  modePanel.hidden=true;
  let activeName='',slideIndex=0,slides=[];
  const diagramImage=diagram.querySelector('[data-practice-diagram-image]'),diagramTitle=diagram.querySelector('[data-practice-diagram-title]'),diagramCount=diagram.querySelector('[data-practice-diagram-count]'),diagramCopy=diagram.querySelector('[data-practice-diagram-copy]'),methodSteps=diagram.querySelector('[data-practice-method-steps]');
  const renderSlide=index=>{slideIndex=(index+slides.length)%slides.length;const slide=slides[slideIndex];diagramImage.src=slide.src;diagramImage.alt=slide.alt;diagramTitle.textContent=slides.length>1?`${activeName} · ${slideIndex+1}`:activeName;diagramCount.textContent=`${String(slideIndex+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;diagramCopy.textContent=slide.copy};
  const closeDiagram=()=>{activeName='';diagram.hidden=true;paper.hidden=true;document.querySelector('.practice-topic-options').classList.remove('diagram-open');options.querySelectorAll('.practice-option').forEach(item=>item.classList.remove('active'));document.querySelector('#practice-status').textContent='选择训练项后，将从听辨差异开始。'};
  const openDiagram=button=>{activeName=button.dataset.option;slides=practiceDiagrams[activeName]||[{src:'assets/oral-anatomy-default.png',alt:`${activeName} 发音结构示意图`,copy:'当前使用中性口腔示意，正式图解将在素材确认后替换。'}];slideIndex=0;diagram.hidden=false;paper.hidden=false;document.querySelector('.practice-topic-options').classList.add('diagram-open');options.querySelectorAll('.practice-option').forEach(item=>item.classList.toggle('active',item===button));methodSteps.replaceChildren(...practiceMethodData[activeName].map(([title,copy])=>{const item=document.createElement('li'),content=document.createElement('div'),heading=document.createElement('strong'),paragraph=document.createElement('span');heading.textContent=title;paragraph.textContent=copy;content.append(heading,paragraph);item.append(content);return item}));renderSlide(0);document.querySelector('#practice-status').textContent=`已选择 ${activeName}。图解下方是对应的大字选择练习。`;startPractice(activeName)};
  options.innerHTML=topic.items.map(([name,label],index)=>`<button type="button" class="practice-option" data-option="${name}"><span>${String(index+1).padStart(2,'0')}</span><strong>${name}</strong><small>${label}</small><i aria-hidden="true">↗</i></button>`).join('');
  options.querySelectorAll('.practice-option').forEach(button=>button.addEventListener('click',()=>button.dataset.option===activeName?closeDiagram():openDiagram(button)));
  diagram.querySelector('[data-practice-diagram-prev]').addEventListener('click',()=>renderSlide(slideIndex-1));
  diagram.querySelector('[data-practice-diagram-next]').addEventListener('click',()=>renderSlide(slideIndex+1));
}else{
  options.innerHTML='<a class="practice-empty" href="correction.html#topics">返回发音修正，选择专题 ↗</a>';
  document.querySelector('#practice-status').textContent='尚未选择发音专题。';
}

const choiceGrid=document.querySelector('#choice-grid'),scoreNode=document.querySelector('#paper-score'),totalNode=document.querySelector('#paper-total'),resultNode=document.querySelector('#paper-result'),resetButton=document.querySelector('#paper-reset');
let currentPractice='',currentBatch=[],score=0,answered=0;
function getMixedBank(){return Object.entries(choiceBanks).flatMap(([name,bank])=>bank.items.map(item=>({item,choices:bank.choices,source:name})))}
function startPractice(name='mixed'){
  currentPractice=name;score=0;answered=0;
  const source=name==='mixed'?getMixedBank():choiceBanks[name].items.map(item=>({item,choices:choiceBanks[name].choices,source:name}));
  currentBatch=shuffle(source).slice(0,Math.min(12,source.length));
  scoreNode.textContent='0';totalNode.textContent=String(currentBatch.length);resultNode.textContent='选择答案后即时核对。';
  const title=name==='mixed'?'混合选择练习':`${name} 大字选择`;
  paper.querySelector('#paper-title').textContent=title;
  if(name!=='mixed')paper.querySelector('#paper-description').textContent=`先读出大字，再判断它属于 ${choiceBanks[name].choices.join('、')} 中的哪一组。重新测试会从这一专题的字库中换一批。`;
  choiceGrid.innerHTML=currentBatch.map(({item,choices,source},index)=>{const [character,answer]=item;return `<article class="choice-question" data-answer="${answer}" data-source="${source}" style="--choice-count:${choices.length}"><span class="choice-source">${name==='mixed'?source:'第 '+String(index+1).padStart(2,'0')+' 题'}</span><strong>${character}</strong><small aria-live="polite">选择后显示拼音</small><div>${choices.map(choice=>`<button type="button" data-choice="${choice}">${choice}</button>`).join('')}</div></article>`}).join('');
  choiceGrid.querySelectorAll('.choice-question button').forEach(button=>button.addEventListener('click',()=>answerQuestion(button)));
}
function answerQuestion(button){
  const question=button.closest('.choice-question');if(question.classList.contains('is-answered'))return;
  const entry=currentBatch[Array.from(choiceGrid.children).indexOf(question)].item,correct=button.dataset.choice===question.dataset.answer;
  question.classList.add('is-answered',correct?'is-correct':'is-wrong');button.classList.add(correct?'is-correct':'is-wrong');
  question.querySelectorAll('button').forEach(item=>{item.disabled=true;if(item.dataset.choice===question.dataset.answer)item.classList.add('is-answer')});
  question.querySelector('small').textContent=`${correct?'正确':'再留意'} · ${entry[2]} · ${entry[1]}`;
  answered++;if(correct)score++;scoreNode.textContent=String(score);resultNode.textContent=answered===currentBatch.length?`本轮答对 ${score} / ${currentBatch.length} 题。重新测试会换一批字。`:`已完成 ${answered} / ${currentBatch.length} 题。`;
}
resetButton.addEventListener('click',()=>startPractice(currentPractice||'mixed'));
if(isComprehensive)startPractice('mixed');
