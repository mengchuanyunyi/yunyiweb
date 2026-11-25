const topicId=new URLSearchParams(location.search).get('topic');
const topic=practiceTopics[topicId]||practiceTopics.retroflex;
const detailData={
  'z / zh':{
    examples:[['早','zǎo','舌尖在前','舌尖靠近上齿背，先挡住气流，再短促放开。'],['找','zhǎo','舌尖后抬','舌尖往后抬起，再短促放开；不要把舌头卷得过紧。']],
    title:'同读 ao，<br>只换舌尖位置',copy:'先读“早 zǎo／找 zhǎo”。两字声调和韵母相同，听到的主要区别来自 z 与 zh 的舌尖位置。',
    methodIntro:'用同韵母、同声调的字先隔离声母差异，再把它们放回词里。',
    extra:[['记住形音线索','“子”旁的字／孜常读 z；“知”旁的蜘／智常读 zh。声旁只作提示，仍须核对单字读音。'],['慢读再连读','先读“早／找”，再读“早知 zǎo zhī、杂志 zá zhì”；遮住拼音后做下方选择题。']],
    memoryTitle:'记住声旁线索，<br>再核对读音',memoryIntro:'“子”“知”可作读音提示，但不能仅凭偏旁断定声母。先记住已确认的字，再用词语巩固。',
    memory:[['z','子','字 孜 籽','字 zì、孜 zī、籽 zǐ 都用平舌 z。'],['zh','知','蜘 智','蜘 zhī、智 zhì 都用翘舌 zh。']],
    phrases:[['自重','zì zhòng'],['早知','zǎo zhī'],['杂志','zá zhì'],['组织','zǔ zhī'],['自制','zì zhì'],['作证','zuò zhèng']]
  },
  'c / ch':{
    examples:[['草','cǎo','前部送气','舌尖靠前，短促放开时送出明显气流。'],['炒','chǎo','后抬送气','舌尖向后抬，再送出明显气流；区别主要在舌位。']],
    title:'同读 ao，<br>送气位置不同',copy:'读“草 cǎo／炒 chǎo”。两边都送气，声调和韵母相同；把注意力放在舌尖是平放还是后抬。',
    methodIntro:'先保持相同的送气力度，只移动舌尖；确认差异后再换字词。',
    extra:[['记住声旁','“仓”旁的苍／舱常读 cāng；“昌”旁的唱／猖常读 ch。仍要核对具体字音。'],['慢读再连读','先读“草／炒、仓／昌”，再读“草场 cǎo chǎng、仓储 cāng chǔ”，最后做大字选择题。']],
    memoryTitle:'记住声旁线索，<br>再核对读音',memoryIntro:'仓与昌都能提示一组常见字的声母。声调会变化，声旁也会出现例外。',
    memory:[['c','仓','苍 舱 沧','仓、苍、舱、沧读 cāng。'],['ch','昌','唱 猖','昌 chāng、唱 chàng、猖 chāng，声调不同但都用 ch。']],
    phrases:[['草场','cǎo chǎng'],['仓储','cāng chǔ'],['操场','cāo chǎng'],['车次','chē cì'],['采茶','cǎi chá'],['出彩','chū cǎi']]
  },
  's / sh':{
    examples:[['三','sān','舌尖靠前','舌尖靠近上齿背，留下窄缝让气流持续摩擦。'],['山','shān','舌尖后抬','舌尖后抬，保持窄缝，让摩擦声持续。']],
    title:'同读 an，<br>摩擦位置不同',copy:'读“三 sān／山 shān”。韵母与声调一致，先延长 s、sh 的摩擦声，再接上 an。',
    methodIntro:'把声母拉长一拍，听清摩擦声的位置，再接相同的韵母。',
    extra:[['记住常见字','先把“三、桑”归到 s，把“山、商”归到 sh；遇到新字仍以词语中的读音为准。'],['慢读再连读','读“三／山、桑／商”，再读“三山 sān shān、桑树 sāng shù”，遮拼音完成选择题。']],
    memoryTitle:'按读音分组，<br>再放回词语',memoryIntro:'这里列出常见的 s 与 sh 字，不把读音相同误当成字形有联系。先读字，再放回词语。',
    memory:[['s','三','桑 四 思','三 sān、桑 sāng、四 sì、思 sī 都以 s 起音。'],['sh','山','商 书 上','山 shān、商 shāng、书 shū、上 shàng 都以 sh 起音。']],
    phrases:[['三山','sān shān'],['桑树','sāng shù'],['四十','sì shí'],['上色','shàng sè'],['松树','sōng shù'],['手速','shǒu sù']]
  },
  'n / l':{
    examples:[['牛','niú','鼻腔通气','舌尖抵上齿龈，软腭下降，气流从鼻腔通过。'],['刘','liú','舌侧通气','舌尖同样抵住前部，气流从舌头两侧通过。']],
    title:'同读 iou，<br>只换气流通道',copy:'读“牛 niú／刘 liú”。拼写成 niu、liu 时省写了中间的 o；两字韵母和声调相同，重点只比较 n 与 l。',
    methodIntro:'用“牛／刘、南／蓝”这种韵母和声调一致的字，单独练习鼻腔与舌侧两条气路。',
    extra:[['记住关键字','先记“牛 niú、南 nán”为 n，“刘 liú、蓝 lán”为 l；看到相近字形时不要凭偏旁猜，放入词语核对。'],['慢读再连读','先交替读“牛／刘、南／蓝”，再读“牛栏 niú lán、南岭 nán lǐng”，最后做大字选择题。']],
    memoryTitle:'按 n、l 分组，<br>记住常用字',memoryIntro:'牛／刘、南／蓝是同韵同调的读音对照，并不是同一字族。下面按声母分组列字，每个字仍要在词语中确认读音。',
    memory:[['n','牛','南 年 能','牛 niú、南 nán、年 nián、能 néng 都以 n 起音。'],['l','刘','蓝 连 流','刘 liú、蓝 lán、连 lián、流 liú 都以 l 起音。']],
    phrases:[['牛栏','niú lán'],['南岭','nán lǐng'],['牛郎','niú láng'],['辽宁','liáo níng'],['脑力','nǎo lì'],['老农','lǎo nóng']]
  },
  'f / h':{
    examples:[['发','fā','唇齿摩擦','上齿轻触下唇，气流从接触处摩擦通过。'],['哈','hā','舌根摩擦','舌根靠近软腭，气流从口腔后部摩擦通过。']],
    title:'同读 a，<br>摩擦位置不同',copy:'读“发 fā／哈 hā”。两字韵母、声调相同；一个靠唇齿，一个靠舌根。',
    methodIntro:'先保持同一个 a，只更换声母的摩擦位置。',
    extra:[['记住读音','“发、风、飞”以 f 起音；“哈、花、河”以 h 起音。先按熟词记，再练新字。'],['慢读再连读','交替读“发／哈、饭／汉”，再读“花粉 huā fěn、芳华 fāng huá”，检查唇齿动作。']],
    memoryTitle:'按 f、h 分组，<br>记住常用字',memoryIntro:'f 与 h 的关键是摩擦位置。下面按读音分组，不把不同偏旁的字误写成一个字族。',
    memory:[['f','发','风 分 飞','发 fā、风 fēng、分 fēn、飞 fēi 都用唇齿 f。'],['h','哈','花 河 红','哈 hā、花 huā、河 hé、红 hóng 都用舌根 h。']],
    phrases:[['花粉','huā fěn'],['芳华','fāng huá'],['防护','fáng hù'],['灰飞','huī fēi'],['分化','fēn huà'],['复合','fù hé']]
  },
  'j / q / x':{
    examples:[['鸡','jī','轻送气','舌面前部靠近硬腭，短促放开，送气较弱。'],['七','qī','强送气','舌面位置相近，短促放开后有更明显的气流。'],['西','xī','持续摩擦','舌面前部形成窄缝，让气流持续通过。']],
    title:'同读 i，<br>对比送气与摩擦',copy:'依次读“鸡 jī、七 qī、西 xī”。三个字韵母、声调相同；先辨 j 与 q 的送气，再听 x 的持续摩擦。',
    methodIntro:'这一组有三个声母。保持 i 和一声不变，逐个比较送气和摩擦的差别。',
    extra:[['记住三个锚点','用“鸡 jī、七 qī、西 xī”分别记 j、q、x，再扩展到“京、清、星”。'],['慢读再连读','先读“鸡／七／西”，再读“机器 jī qì、学习 xué xí”；遮拼音做三选一。']],
    memoryTitle:'按 j、q、x 分组，<br>再读常用字',memoryIntro:'j、q、x 都属于舌面音。下面按声母分组，不把字形相似误当成发音规律。',
    memory:[['j','鸡','京 家 近','鸡 jī、京 jīng、家 jiā、近 jìn 都用 j。'],['q','七','清 前 秋','七 qī、清 qīng、前 qián、秋 qiū 都用 q。'],['x','西','星 新 小','西 xī、星 xīng、新 xīn、小 xiǎo 都用 x。']],
    phrases:[['机器','jī qì'],['假期','jià qī'],['七夕','qī xī'],['前夕','qián xī'],['清晰','qīng xī'],['惊喜','jīng xǐ']]
  },
  'u / ou':{
    examples:[['路','lù','单韵母 u','双唇保持拢圆，元音整体较稳定。'],['漏','lòu','复韵母 ou','从较开的起音逐渐滑向更收拢的 u。']],
    title:'同用 l，<br>听元音是否滑动',copy:'读“路 lù／漏 lòu”。两个字声母和声调相同，主要区别在 u 与 ou 的口形变化。',
    methodIntro:'先固定声母与声调，再用“路／漏”听出单韵母和复韵母的差异。',
    extra:[['记住熟词','路 lù、书 shū 用 u；漏 lòu、收 shōu 用 ou，先整词记准再回看韵母。'],['慢读再连读','交替读“路／漏、书／收”，再读“收书 shōu shū、出走 chū zǒu”，注意口形变化。']],
    memoryTitle:'按 u、ou 分组，<br>再听口形变化',memoryIntro:'这组比较的是韵母。下面按读音分组，再听每个韵母的口形变化。',
    memory:[['u','路','书 树 住','路 lù、书 shū、树 shù、住 zhù 都含 u。'],['ou','漏','收 楼 走','漏 lòu、收 shōu、楼 lóu、走 zǒu 都含 ou。']],
    phrases:[['后路','hòu lù'],['出走','chū zǒu'],['路口','lù kǒu'],['树后','shù hòu'],['收书','shōu shū'],['走路','zǒu lù']]
  },
  'ie / üe':{
    examples:[['夜','yè','展唇起音','从 i 的展唇位置起音，再滑向 e。'],['月','yuè','圆唇起音','从 ü 的圆唇位置起音，再滑向 e；拼写时省去 ü 上两点。']],
    title:'同为四声，<br>起音唇形不同',copy:'读“夜 yè／月 yuè”。前者是 ie，后者的韵母是 üe；拼写作 yue 时省去 ü 的两点。',
    methodIntro:'先把起音唇形做明显，再连到 e；用同声调的“夜／月”排除声调干扰。',
    extra:[['记住拼写','月 yuè、雪 xuě 的韵母都含 üe；拼写成 yue、xue 时，ü 的两点不写出来。'],['慢读再连读','交替读“夜／月、写／雪”，再读“月夜 yuè yè、下雪 xià xuě”，检查起音唇形。']],
    memoryTitle:'按 ie、üe 分组，<br>记住起音',memoryIntro:'j、q、x、y 后面的 ü 两点在拼写中省略。下面按实际韵母分组，读 üe 时仍要保留圆唇起音。',
    memory:[['ie','夜','写 姐 街','夜 yè、写 xiě、姐 jiě、街 jiē 含 ie。'],['üe','月','雪 学 却','月 yuè、雪 xuě、学 xué、却 què 含 üe。']],
    phrases:[['月夜','yuè yè'],['缺页','quē yè'],['学业','xué yè'],['雪夜','xuě yè'],['越野','yuè yě']]
  }
};
const config=practiceTopics[topicId]?topicId:'retroflex';
const topicPairs=practiceTopics[config].items.map(([name])=>name);
const select=(selector)=>document.querySelector(selector);
const letters=name=>name.split(' / ');
const audioCategory=sound=>['u','ou','ie','üe'].includes(sound)?'finals':'initials';
const makeAudio=sound=>'<button class="audio-trigger sound-card-audio" type="button" aria-pressed="false" aria-label="播放 '+sound+' 发音" data-sound="'+sound+'"></button>';
const shuffled=items=>{const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy};
let active=topicPairs.includes(new URLSearchParams(location.search).get('pair'))?new URLSearchParams(location.search).get('pair'):topicPairs[0];
const previousBatches=new Map();
const familyMemoryPairs=new Set(['z / zh','c / ch']);
const familyReadings={子:'zǐ',字:'zì',孜:'zī',籽:'zǐ',知:'zhī',蜘:'zhī',智:'zhì',仓:'cāng',苍:'cāng',舱:'cāng',沧:'cāng',昌:'chāng',唱:'chàng',猖:'chāng'};
const renderCommonChars=(name,sound)=>choiceBanks[name].items.filter(item=>item[1]===sound).map(([char,,pinyin])=>'<span class="common-char"><b>'+char+'</b><small>'+pinyin+'</small></span>').join('');
const renderFamily=(name,[sound,root,related,copy])=>'<article><span>'+sound+'</span><strong class="family-root">'+root+'<small>'+familyReadings[root]+'</small></strong><div>'+related.split(' ').map(char=>'<span class="family-related"><b>'+char+'</b><small>'+familyReadings[char]+'</small></span>').join('')+'</div><p>'+copy+'</p><section class="family-common"><h3>'+sound+' 常用字</h3><div class="common-chars">'+renderCommonChars(name,sound)+'</div></section></article>';
function configureAudio(){selectAll('.audio-trigger').forEach(button=>{const sound=button.dataset.sound;button.innerHTML=window.zijueAudio.icon;window.zijueAudio.update(button,sound,audioCategory(sound))})}
function selectAll(selector){return [...document.querySelectorAll(selector)]}
function renderQuestions(name){const bank=choiceBanks[name],batch=shuffled(bank.items).slice(0,12),grid=select('[data-question-grid]');const previous=previousBatches.get(name);if(previous){const fresh=shuffled(bank.items).find(item=>!previous.has(item[0])&&!batch.some(selected=>selected[0]===item[0]));if(fresh)batch[batch.length-1]=fresh}previousBatches.set(name,new Set(batch.map(item=>item[0])));select('.test-head>span').textContent='SELF CHECK / '+String(batch.length).padStart(2,'0');select('[data-score]').textContent='0';select('[data-score-label]').textContent='/ '+batch.length+' 已答对';grid.style.setProperty('--answer-count',bank.choices.length);grid.innerHTML=batch.map(([word,answer,pinyin])=>'<article data-answer="'+answer+'" data-pinyin="'+pinyin+'"><strong>'+word+'</strong><small></small><div>'+bank.choices.map(choice=>'<button type="button">'+choice+'</button>').join('')+'</div></article>').join('');grid.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{const card=button.closest('article');if(card.classList.contains('is-answered'))return;const correct=button.textContent===card.dataset.answer;card.classList.add('is-answered');card.dataset.correct=String(correct);button.classList.add(correct?'is-correct':'is-wrong');card.querySelectorAll('button').forEach(item=>{if(item.textContent===card.dataset.answer)item.classList.add('is-correct')});card.querySelector('small').textContent=(correct?'✓ 正确':'× 选错')+' · '+card.dataset.pinyin+' · '+card.dataset.answer;select('[data-score]').textContent=grid.querySelectorAll('[data-correct="true"]').length}))}
function render(name){const data=detailData[name],sounds=letters(name),diagrams=practiceDiagrams[name];if(!data||!diagrams)return;if(window.zijueAudio)window.zijueAudio.stop();active=name;document.body.classList.toggle('three-sounds',sounds.length===3);document.body.classList.toggle('three-pairs',topicPairs.length===3);document.title=name+' '+topic.title+'训练｜字觉 ZIJUE';history.replaceState(null,'','topic-detail.html?topic='+config+'&pair='+encodeURIComponent(name));select('[data-topic-index]').textContent='PRONUNCIATION / '+topic.index;select('[data-topic-meta]').textContent='ZIJUE / '+topic.title+' / '+name.toUpperCase();select('[data-topic-number]').textContent=topic.index+' / 04';select('[data-topic-intro]').textContent=topic.intro+' 先看同韵同调的对照字，再进入发音位置、记忆与练习。';select('[data-topic-switcher]').innerHTML=topicPairs.map(pair=>'<button type="button" role="tab" data-pair="'+pair+'" aria-selected="'+String(pair===name)+'" class="'+(pair===name?'active':'')+'">'+pair+'</button>').join('');selectAll('[data-topic-switcher] button').forEach(button=>button.addEventListener('click',()=>render(button.dataset.pair)));const contrast=select('[data-sound-contrast]');contrast.style.setProperty('--sound-count',sounds.length);contrast.setAttribute('aria-label',name+' 发音区别');contrast.innerHTML=data.examples.map(([, ,label,copy],index)=>'<article><span>'+label+'</span><div class="sound-heading"><strong>'+sounds[index]+'</strong>'+makeAudio(sounds[index])+'</div><p>'+copy+'</p></article>').join('');select('[data-articulation-label]').textContent=name.toUpperCase()+' 发音位置';select('[data-articulation-title]').innerHTML=data.title;select('[data-articulation-copy]').textContent=data.copy;select('.articulation-note').textContent='AI 辅助生成的发音示意图，形状和位置可能不准确；请结合文字与示范音辨别，不可作为医学影像或唯一发音标准。';const images=select('[data-articulation-images]');images.style.setProperty('--sound-count',sounds.length);images.innerHTML=diagrams.map(item=>'<img src="'+item.src+'" alt="'+item.alt+'" loading="eager" decoding="async">').join('');const captions=select('[data-articulation-captions]');captions.style.setProperty('--sound-count',sounds.length);captions.classList.remove('no-audio');captions.innerHTML=data.examples.map((item,index)=>'<span>'+makeAudio(sounds[index])+'<b>'+sounds[index]+'</b><i>'+diagrams[index].copy+'</i></span>').join('');select('[data-method-intro]').textContent=data.methodIntro;const steps=[...practiceMethodData[name],...data.extra];select('[data-method-steps]').innerHTML=steps.map(([heading,copy],index)=>'<li><span>'+String(index+1).padStart(2,'0')+'</span><div><h3>'+heading+'</h3><p>'+copy+'</p></div></li>').join('');select('[data-memory-title]').innerHTML=data.memoryTitle;select('[data-memory-intro]').textContent=data.memoryIntro;select('[data-memory-list]').classList.toggle('common-memory',!familyMemoryPairs.has(name));select('[data-memory-list]').innerHTML=familyMemoryPairs.has(name)?data.memory.map(item=>renderFamily(name,item)).join(''):sounds.map(sound=>'<article class="common-sound-group"><h3>'+sound+'</h3><div class="common-chars">'+renderCommonChars(name,sound)+'</div></article>').join('');select('[data-phrase-list]').innerHTML=data.phrases.map(([word,pinyin])=>'<span>'+word+'<small>'+pinyin+'</small></span>').join('');select('[data-test-title]').textContent='它属于 '+sounds.join('、')+' 中的哪一组？';select('[data-test-copy]').textContent='先读出大字，再选择对应的声母或韵母。选择后才显示拼音。';select('[data-next-copy]').textContent='先在本页完成'+name+'选择题，再到读音字库里朗读相关词语。';select('[data-next-link]').href='characters.html';select('[data-footer-topic]').textContent=topic.title+' / '+name;renderQuestions(name);configureAudio()}
select('.test-reset').addEventListener('click',()=>renderQuestions(active));
render(active);
