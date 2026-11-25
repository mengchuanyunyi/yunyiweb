history.scrollRestoration='manual';window.addEventListener('pageshow',()=>requestAnimationFrame(()=>window.scrollTo(0,0)));
const pairData={
'an-ang':{label:'an / ang',left:'an',right:'ang',leftKind:'前鼻音',rightKind:'后鼻音',leftCopy:'从靠前的 a 开始，舌头先保持低平；收音时舌尖抬起抵住上齿龈，上下齿逐渐靠拢。',rightCopy:'从靠后的 a 开始，舌头后缩，舌根抬起接触软腭；收音时口腔仍微开。',leftFeel:'身体感受：嘴巴像被轻轻压扁，越读越瘪，最后由舌尖在前面“收住”。',rightFeel:'身体感受：口腔内部更开、更饱满，像含住一小团空气；不是把嘴唇刻意撮圆。',leftCaption:'舌尖—上齿龈 · 向前收住',rightCaption:'舌根—软腭 · 向后包住',families:[['an','安','按 案 鞍','先记住“安”是前鼻音，再把外形和读音相近的字连成一组。'],['ang','方','房 防 访 放','“方”这一组常带 ang，看到熟悉声旁时唤起后鼻音线索。'],['ang','章','彰 樟 障','字形变化了，声旁仍能帮助你关联读音。']],phrases:[['担当','dān dāng'],['班长','bān zhǎng'],['南方','nán fāng'],['安详','ān xiáng'],['山岗','shān gǎng'],['展望','zhǎn wàng']],questions:[['安','ān','an'],['方','fāng','ang'],['山','shān','an'],['光','guāng','ang'],['班','bān','an'],['忙','máng','ang'],['南','nán','an'],['张','zhāng','ang'],['看','kàn','an'],['上','shàng','ang'],['站','zhàn','an'],['房','fáng','ang']]},
'en-eng':{label:'en / eng',left:'en',right:'eng',leftKind:'前鼻音',rightKind:'后鼻音',leftCopy:'从较自然的 e 起音，舌位向前移动；收音时舌尖抵住上齿龈，上下齿趋于闭拢。',rightCopy:'从靠后的 e 起音，舌头后缩，舌根抬起抵住软腭，鼻腔通路打开。',leftFeel:'身体感受：声音短而靠前，像把声音轻轻按在门牙后面。',rightFeel:'身体感受：声音向喉咙后方延伸，口腔内部留有更深的空间。',leftCaption:'舌尖—上齿龈 · 前部收音',rightCaption:'舌根—软腭 · 后部收音',families:[['en','本','奔 苯 笨','把熟悉的“本”作为 en 的前鼻音锚点。'],['eng','风','枫 讽 疯','“风”声旁的一组常能提示 eng。'],['eng','登','灯 等 凳','用“登”带出一组常用后鼻音字。']],phrases:[['认真','rèn zhēn'],['身份','shēn fèn'],['本能','běn néng'],['风筝','fēng zheng'],['丰盛','fēng shèng'],['生成','shēng chéng']],questions:[['本','běn','en'],['风','fēng','eng'],['门','mén','en'],['灯','dēng','eng'],['真','zhēn','en'],['生','shēng','eng'],['人','rén','en'],['成','chéng','eng'],['分','fēn','en'],['等','děng','eng'],['身','shēn','en'],['冷','lěng','eng']]},
'in-ing':{label:'in / ing',left:'in',right:'ing',leftKind:'前鼻音',rightKind:'后鼻音',leftCopy:'从 i 开始，舌位不要降低；收音时舌尖抬起抵住上齿龈，动作保持在口腔前部。',rightCopy:'从 i 开始，舌头水平后移，舌根抬向软腭；不要在中间多带一个 e 音。',leftFeel:'身体感受：嘴角保持展开，舌尖像在前方轻轻扣住声音。',rightFeel:'身体感受：嘴角不必变圆，声音沿舌面滑向后方，尾音更深。',leftCaption:'舌尖—上齿龈 · 保持展唇',rightCaption:'舌根—软腭 · 水平后移',families:[['in','林','淋 琳 霖','记住“林”，往往就能带出同声旁的一组 in。'],['ing','青','清 情 晴','“青”声旁常提示 ing，但仍要留意例外。'],['ing','京','惊 鲸 景','用“京”建立后鼻音字族。']],phrases:[['森林','sēn lín'],['心灵','xīn líng'],['临近','lín jìn'],['安静','ān jìng'],['清醒','qīng xǐng'],['明星','míng xīng']],questions:[['林','lín','in'],['京','jīng','ing'],['心','xīn','in'],['星','xīng','ing'],['近','jìn','in'],['清','qīng','ing'],['琴','qín','in'],['灵','líng','ing'],['金','jīn','in'],['明','míng','ing'],['贫','pín','in'],['影','yǐng','ing']]},
'eng-ong':{label:'eng / ong',left:'eng',right:'ong',leftKind:'后鼻音 · 开口',rightKind:'后鼻音 · 圆唇',leftCopy:'从靠后的 e 起音，口形微开，随后舌根抬起抵住软腭，完成 ng 收音。',rightCopy:'从比 u 略低、略开的圆唇位置起音，舌根继续微升，最后同样以 ng 收音。',leftFeel:'身体感受：口腔后部打开，嘴唇自然，不需要刻意向前聚拢。',rightFeel:'身体感受：双唇明显拢圆，声音像从一个圆形通道送向口腔后部。',leftCaption:'舌根—软腭 · 口形微开',rightCaption:'舌根—软腭 · 双唇拢圆',families:[['eng','风','枫 疯 讽','“风”字族稳定保留 feng，主要变化在声调。'],['eng','朋','鹏 棚 崩 绷','“朋”字族多保留 eng，声母可在 p／b 间变化。'],['eng','蒙','萌 盟 檬 朦','“蒙”字族多保留 eng；“蒙”本身是多音字。']],phrases:[['吹风','chuī fēng'],['朋友','péng you'],['蒙面','méng miàn']],questions:[['风','fēng','eng'],['工','gōng','ong'],['等','děng','eng'],['红','hóng','ong'],['生','shēng','eng'],['中','zhōng','ong'],['冷','lěng','eng'],['同','tóng','ong'],['正','zhèng','eng'],['空','kōng','ong'],['能','néng','eng'],['重','zhòng','ong']]}
};
pairData['eng-ong'].phrases.push(['成功','chéng gōng'],['灯笼','dēng long'],['蜂拥','fēng yōng']);
pairData['en-eng'].phrases=[['本能','běn néng'],['门风','mén fēng'],['人声','rén shēng'],['真诚','zhēn chéng'],['深耕','shēn gēng'],['分工','fēn gōng']];
pairData['in-ing'].phrases=[['心灵','xīn líng'],['金星','jīn xīng'],['新星','xīn xīng'],['民警','mín jǐng'],['临行','lín xíng'],['亲情','qīn qíng']];
const familyData={
  'an-ang':[
    ['an','安','按 案 鞍 氨 胺','同声旁、同韵母，声调可不同：ān／àn。'],
    ['an','干','肝 竿 杆 赶','“干”字族多读 gan；“杆”是多音字，要结合词语判断。'],
    ['an','兰','栏 拦 烂','“兰”字族稳定保留 an，常见变化主要在声调。'],
    ['an','半','伴 拌 绊 判','“半”字族多保留 an；“判”由 b 变为 p，是声母变化。'],
    ['an','占','站 战 沾 粘','“占”字族多保留 an；声母和声调会随字义变化。'],
    ['an','旦','担 胆 但 坦','“旦”作声旁时常保留 an；“担”还需结合词语判断声调。'],
    ['an','单','弹 禅 阐','“单”作声旁时可带出 an，但“弹、禅”都是多音字，不能只凭字形定音。'],
    ['ang','方','房 防 芳 坊 仿 访 放 纺 妨','“方”是高频 ang 声旁，成员多、声调变化丰富。'],
    ['ang','章','彰 樟 璋 障','“章”字族大多保留 zhang，主要区别在声调。'],
    ['ang','冈','刚 钢 纲 岗','“冈”字族多读 gang；“岗”有 gǎng／gāng 两个常见读音。'],
    ['ang','唐','糖 塘 堂 搪','“唐”字族通常保留 tang，是较稳定的后鼻音线索。'],
    ['ang','长','张 账 帐 胀 涨','含“长”的字多保留 ang；“长、涨”本身都是多音字。'],
    ['ang','亢','抗 杭 航 炕','“亢”字族多保留 ang，声母会在 k／h 间变化。'],
    ['ang','亡','忙 芒 盲 忘','“亡”作声旁时常保留 ang，声母与声调会变化。'],
    ['ang','尚','常 尝 偿 敞','“尚”相关字常带 ang；“敞”声母变化为 ch。'],
    ['ang','羊','洋 详 祥 养 样','“羊”字族常见的是 iang 韵母，可作为带介音 i 的后鼻音扩展组记忆。']
  ],
  'en-eng':[
    ['en','本','奔 苯 笨','“本”字族多读 ben，声调随字义变化。'],
    ['en','门','闷 们','“门”提示 en；“闷”与“们”还会出现多音或轻声。'],
    ['en','分','芬 纷 粉 份 忿','“分”字族多保留 fen，声调并不固定。'],
    ['en','艮','根 跟 痕 很 狠 恨','“艮”作声旁时韵母多为 en，但声母会在 g／h 间变化。'],
    ['en','辰','晨 振 震','“辰”作声旁时常保留 en；“唇”已分化为 un，是需要单独记的例外。'],
    ['en','真','珍 镇 诊 慎','“真”及其相关声旁常保留 en，声母和声调可能变化。'],
    ['en','申','伸 神 审 婶 绅','“申”字族多保留 en，是较常见的前鼻音线索。'],
    ['eng','风','枫 疯 讽','“风”字族稳定保留 feng，主要变化在声调。'],
    ['eng','登','灯 等 凳','“登”字族多保留 deng，是清晰的后鼻音线索。'],
    ['eng','生','牲 笙 甥 胜','“生”字族多读 sheng；“胜”读第四声。'],
    ['eng','成','城 诚 晟 盛','“成”多提示 cheng；“盛”是 shèng／chéng 多音字。'],
    ['eng','正','征 证 政 整 症','“正”字族多保留 zheng；“症”需按词语判断声调。'],
    ['eng','争','睁 挣 筝 狰','“争”字族多保留 eng；“挣”有 zhēng／zhèng 两读。'],
    ['eng','更','梗 埂 哽 硬','“更”字族多带 eng；“硬”声母和韵母读法已有分化，应单独记忆。'],
    ['eng','朋','鹏 棚 崩 绷','“朋”字族多保留 eng，声母可在 p／b 间变化。'],
    ['eng','曾','增 赠 憎 僧','“曾”作声旁时多保留 eng，声母与声调并不固定。'],
    ['eng','蒙','萌 盟 檬 朦','“蒙”字族多保留 eng；“蒙”本身是多音字。']
  ],
  'in-ing':[
    ['in','林','淋 琳 霖','“林”字族稳定保留 lin；“淋”还有 lín／lìn 两读。'],
    ['in','宾','滨 缤 槟','“宾”字族多提示 bin；“槟”在不同词中读 bīn 或 bīng。'],
    ['in','民','岷 珉 泯 抿','“民”字族多保留 min，常见差别主要在声调。'],
    ['in','今','吟 矜 衿 琴','“今”作声旁常保留 in，但声母可变；“念”已分化为 ian。'],
    ['in','斤','近 欣 忻','“斤”作声旁时常保留 in，声母与声调会发生变化。'],
    ['in','辛','新 薪 锌','“辛”字族多保留 in，是较稳定的前鼻音线索。'],
    ['in','禽','擒 噙','“禽”字族多保留 in，声母通常保持 q。'],
    ['ing','青','清 情 晴 请 精 睛 静','“青”是高频 ing 声旁，声母可在 q／j 间变化。'],
    ['ing','京','惊 鲸 景','“京”字族多保留 jing，声调随字变化。'],
    ['ing','丁','叮 钉 盯 顶 订','“丁”字族稳定保留 ding，是较可靠的 ing 线索。'],
    ['ing','令','铃 零 龄 领 岭 冷','多数成员读 ling；“冷”分化为 leng，是要单独记的例外。'],
    ['ing','廷','庭 挺 艇','“廷”字族多保留 ting，主要变化在声调。'],
    ['ing','平','评 萍 坪 苹','“平”字族多保留 ing，是常见且稳定的后鼻音线索。'],
    ['ing','亭','停 婷','“亭”字族通常保留 ting，声调会随字变化。'],
    ['ing','宁','咛 柠 拧 泞','“宁”字族多保留 ing；“拧、宁”本身存在多音情况。'],
    ['ing','星','醒 腥 猩 惺','“星”字族多保留 xing，主要变化在声调。'],
    ['ing','井','阱','“井”与“阱”都保留 ing；这一组常用成员较少，不为凑数量加入声旁不同的字。']
  ],
  'eng-ong':[
    ['eng','风','枫 疯 讽','“风”字族稳定保留 feng，主要变化在声调。'],
    ['eng','朋','鹏 棚 崩 绷','“朋”字族多保留 eng，声母可在 p／b 间变化。'],
    ['eng','蒙','萌 盟 檬 朦','“蒙”字族多保留 eng；“蒙”本身是多音字。'],
    ['eng','奉','俸','“奉”读 fèng，“俸”读 fèng；同样含“奉”的“捧、棒”已变为 ong，放在这组对照记忆。'],
    ['eng','夆','峰 蜂 锋 烽 逢 缝','“夆”是声旁；峰、蜂、锋、烽读 fēng，逢读 féng；“缝合”的缝读 féng，“缝隙”的缝读 fèng。']
  ]
};
Object.entries(familyData).forEach(([key,families])=>{if(pairData[key])pairData[key].families=families});
const questionBanks={
  'an-ang':[['安','ān','an'],['岸','àn','an'],['班','bān','an'],['南','nán','an'],['蓝','lán','an'],['站','zhàn','an'],['看','kàn','an'],['山','shān','an'],['满','mǎn','an'],['谈','tán','an'],['方','fāng','ang'],['长','cháng','ang'],['张','zhāng','ang'],['忙','máng','ang'],['光','guāng','ang'],['上','shàng','ang'],['房','fáng','ang'],['糖','táng','ang'],['望','wàng','ang'],['黄','huáng','ang'],['港','gǎng','ang'],['厂','chǎng','ang']],
  'en-eng':[['本','běn','en'],['门','mén','en'],['真','zhēn','en'],['人','rén','en'],['分','fēn','en'],['身','shēn','en'],['很','hěn','en'],['问','wèn','en'],['根','gēn','en'],['深','shēn','en'],['风','fēng','eng'],['灯','dēng','eng'],['生','shēng','eng'],['成','chéng','eng'],['等','děng','eng'],['冷','lěng','eng'],['声','shēng','eng'],['正','zhèng','eng'],['能','néng','eng'],['城','chéng','eng'],['更','gèng','eng'],['梦','mèng','eng']],
  'in-ing':[['林','lín','in'],['心','xīn','in'],['近','jìn','in'],['金','jīn','in'],['琴','qín','in'],['民','mín','in'],['新','xīn','in'],['您','nín','in'],['进','jìn','in'],['信','xìn','in'],['京','jīng','ing'],['星','xīng','ing'],['清','qīng','ing'],['明','míng','ing'],['灵','líng','ing'],['静','jìng','ing'],['听','tīng','ing'],['影','yǐng','ing'],['醒','xǐng','ing'],['青','qīng','ing'],['平','píng','ing'],['景','jǐng','ing']],
  'eng-ong':[['风','fēng','eng'],['朋','péng','eng'],['蒙','méng','eng'],['灯','dēng','eng'],['冷','lěng','eng'],['城','chéng','eng'],['生','shēng','eng'],['等','děng','eng'],['工','gōng','ong'],['中','zhōng','ong'],['同','tóng','ong'],['红','hóng','ong'],['空','kōng','ong'],['龙','lóng','ong'],['东','dōng','ong'],['重','zhòng','ong'],['送','sòng','ong'],['动','dòng','ong'],['共','gòng','ong'],['懂','dǒng','ong']]
};
Object.entries(questionBanks).forEach(([key,questions])=>{if(pairData[key])pairData[key].questions=questions});
const articulationData={
  'an-ang':{title:'同一个 a，<br>收在不同位置。',copy:'朱橙色标出主要成阻位置与鼻腔气流。先观察舌头最后停在哪里，再配合“扁”和“包裹”的身体感受模仿。'},
  'en-eng':{title:'同一个 e，<br>收在不同位置。',copy:'en 由舌尖在上齿龈处向前收住，eng 由舌根抬向软腭、向后收住。先观察收音发生在口腔前部还是后部。'},
  'in-ing':{title:'同一个 i，<br>收在不同位置。',copy:'in 保持展唇，由舌尖在上齿龈处收音；ing 的舌位向后移动，由舌根向软腭收音。注意不要在 ing 中间多带一个 e 音。'},
  'eng-ong':{title:'同是后鼻音，<br>口形各不相同。',copy:'eng 与 ong 都由舌根向软腭收音；eng 的口形微开，ong 的双唇明显拢圆。此处重点观察两者起音口形的区别。'}
};
const methodData={
  'an-ang':{
    intro:'先把 a 的起音和两种收尾动作分开练，再把区别带进汉字。',
    steps:[['拖住 a，再换收尾','慢读 a—n 与 a—ng：前者用舌尖抵上齿龈，后者把舌根抬向软腭。嘴唇不要代替舌头收音。'],['同声调成对读','交替读“班 bān／帮 bāng、干 gān／刚 gāng”，只留意最后的 n 与 ng；再连读“担当 dān dāng”。'],['先读字，再核对','遮住拼音读“班、帮、南、囊”。选错时回到相应词语再读，不只背字母。'],['录音听收尾','各录一遍“班／帮”和“担当”，隔一会儿回听：声音是在口腔前部停住，还是向后收住？']]},
  'en-eng':{
    intro:'这一组容易把舌尖收尾和舌根收尾混在一起，先抓住最后一瞬间的位置。',
    steps:[['拖住 e，辨前后','先慢读 en、eng；读 en 时舌尖抵上齿龈，读 eng 时舌根抬向软腭。注意听鼻音从哪里收住。'],['用同声调字换尾','交替读“真 zhēn／争 zhēng、身 shēn／生 shēng”，声母和声调相同，只换 n 与 ng。'],['把对比放进词里','慢读再连读“真诚 zhēn chéng、深耕 shēn gēng”，先找前鼻音字，再找后鼻音字。'],['回听舌位是否变了','录下“真／争、身／生”，回听时重点检查结尾，不把两个韵尾都读成同一种鼻音。']]},
  'in-ing':{
    intro:'两边都从 i 起音、嘴角保持展开；真正要分清的是舌尖和舌根的收尾。',
    steps:[['保持 i，不加过渡音','慢读 i—n 与 i—ng。前者舌尖向前抵住，后者舌根向后抬起；ing 中间不要另加一个 e。'],['同音调换韵尾','交替读“金 jīn／京 jīng、亲 qīn／清 qīng、心 xīn／星 xīng”，让声母和声调不干扰判断。'],['放进双字词','先分开读，再连读“金星 jīn xīng、心灵 xīn líng、亲情 qīn qíng”，听两个字的收音落点。'],['遮拼音后回听','先读“金、京、心、星”再核对拼音；录一遍成对词，检查 ing 有没有被读成 in。']]},
  'eng-ong':{
    intro:'eng 和 ong 都在口腔后部用 ng 收尾；这次重点辨认起音时嘴唇是自然微开，还是拢圆。',
    steps:[['固定 ng，先换口形','分别慢读 eng、ong：舌根都向软腭收住；eng 起音时唇形自然，ong 起音时双唇拢圆。不要只把 ong 的音量读大。'],['盯住三个易混字','慢读“风 fēng、朋 péng、蒙 méng”，记住这三个常用字都是 eng；再读“工 gōng、同 tóng、龙 lóng”体会 ong 的圆唇。'],['用词语连起来','先慢读“灯笼 dēng long、蜂拥 fēng yōng”，再连读，留意同一个词里从 eng 到 ong 的口形变化。'],['回听口形是否分开','录下“风／工、灯笼、蜂拥”，对照自己读时的唇形回听；这里仅供自主比较。']]}
};
function renderMethod(key){const method=methodData[key];if(!method)return;q('.method .section-heading p').textContent=method.intro;qa('.method-steps li').forEach((item,index)=>{item.querySelector('h3').textContent=method.steps[index][0];item.querySelector('p').textContent=method.steps[index][1]})}
const q=selector=>document.querySelector(selector),qa=selector=>[...document.querySelectorAll(selector)];let activePair='an-ang';
const shuffled=items=>{const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy};
function updateScore(){q('[data-score]').textContent=qa('.question-grid article').filter(item=>item.dataset.correct==='true').length}
function bindQuestions(){qa('.question-grid article').forEach(question=>question.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{if(question.classList.contains('is-answered'))return;const correct=button.textContent.trim()===question.dataset.answer;question.classList.add('is-answered');question.dataset.correct=String(correct);question.querySelector('small').textContent=`${correct?'✓ 正确':'× 选错'} · ${question.dataset.pinyin} · ${question.dataset.answer}`;button.classList.add(correct?'is-correct':'is-wrong');question.querySelectorAll('button').forEach(item=>{if(item.textContent.trim()===question.dataset.answer)item.classList.add('is-correct')});updateScore()})))}
function separateFamilyColumns(data){const list=q('.family-list'),articles=[...list.children];if(!articles.length)return;const left=document.createElement('div'),right=document.createElement('div');left.className='family-column family-column-left';right.className='family-column family-column-right';left.setAttribute('aria-label',`${data.left} 字族`);right.setAttribute('aria-label',`${data.right} 字族`);articles.forEach(article=>(article.querySelector('span')?.textContent===data.left?left:right).append(article));const columns=[left,right].filter(column=>column.childElementCount);list.classList.toggle('family-list-single',columns.length===1);list.replaceChildren(...columns)}
function renderPair(key,{shuffleQuestions=false}={}){const data=pairData[key],articulation=articulationData[key];if(!data)return;activePair=key;renderMethod(key);qa('[data-pair]').forEach(button=>{const active=button.dataset.pair===key;button.classList.toggle('active',active);button.setAttribute('aria-selected',String(active))});q('[data-left-kind]').textContent=data.leftKind;q('[data-right-kind]').textContent=data.rightKind;q('[data-left-sound]').textContent=data.left;q('[data-right-sound]').textContent=data.right;q('[data-left-copy]').textContent=data.leftCopy;q('[data-right-copy]').textContent=data.rightCopy;q('[data-left-feel]').textContent=data.leftFeel;q('[data-right-feel]').textContent=data.rightFeel;q('[data-motion-left]').textContent=data.left;q('[data-motion-right]').textContent=data.right;q('[data-caption-left]').textContent=data.left;q('[data-caption-right]').textContent=data.right;q('[data-caption-left-copy]').textContent=data.leftCaption;q('[data-caption-right-copy]').textContent=data.rightCaption;q('[data-articulation-label]').textContent=`${data.left.toUpperCase()} / ${data.right.toUpperCase()} 发音位置`;q('[data-articulation-title]').innerHTML=articulation.title;q('[data-articulation-copy]').textContent=articulation.copy;const diagramFiles={an:'Y07_01_an.png?v=20261124-3',ang:'Y10_01_ang.png?v=20261124-3',en:'Y07_02_en.png',eng:'Y10_02_eng.png?v=20261124-2',in:'Y08_01_in.png',ing:'Y11_01_ing.png',ong:'Y11_02_ong.png'};const leftImage=q('[data-articulation-left]'),rightImage=q('[data-articulation-right]');leftImage.src=`assets/pronunciation/${diagramFiles[data.left]}`;leftImage.alt=`${data.left} 发音图解`;rightImage.src=`assets/pronunciation/${diagramFiles[data.right]}`;rightImage.alt=`${data.right} 发音图解`;q('.sound-contrast').setAttribute('aria-label',`${data.left} 和 ${data.right} 的发音区别`);const leftFamilies=data.families.filter(item=>item[0]===data.left),rightFamilies=data.families.filter(item=>item[0]===data.right),familyRows=[];for(let i=0;i<Math.max(leftFamilies.length,rightFamilies.length);i++){if(leftFamilies[i])familyRows.push(leftFamilies[i]);if(rightFamilies[i])familyRows.push(rightFamilies[i])}q('.family-list').innerHTML=familyRows.map(([sound,root,related,copy])=>`<article><span>${sound}</span><strong>${root}</strong><div>${related.split(' ').map(item=>`<b>${item}</b>`).join('')}</div><p>${copy}</p></article>`).join('');separateFamilyColumns(data);q('.phrase-list').innerHTML=data.phrases.map(([word,pinyin])=>`<span>${word}<small>${pinyin}</small></span>`).join('');q('.test-head h2').textContent=`它读 ${data.left}，还是 ${data.right}？`;const questions=shuffled(data.questions).slice(0,12);q('.question-grid').innerHTML=questions.map(([character,pinyin,answer])=>`<article data-answer="${answer}" data-pinyin="${pinyin}"><strong>${character}</strong><small></small><div><button>${data.left}</button><button>${data.right}</button></div></article>`).join('');q('.library-cta p').textContent=`进入 ${data.left} / ${data.right} 混合字库后选择“乱序”。先读字，再悬停核对拼音；点击汉字，还可以展开组词继续朗读。`;q('.library-cta a').href=`characters.html?groups=${data.left},${data.right}&order=shuffle`;q('.library-cta a').childNodes[0].textContent=`打开 ${data.left} / ${data.right} 字库 `;document.title=`${data.left} / ${data.right} 鼻音训练｜字觉 ZIJUE`;q('.meta-row span').textContent=`ZIJUE / ${data.left.toUpperCase()} — ${data.right.toUpperCase()}`;history.replaceState(null,'',`${location.pathname}?pair=${key}`);bindQuestions();updateScore()}
qa('[data-pair]').forEach(button=>button.addEventListener('click',()=>renderPair(button.dataset.pair)));q('.test-reset').addEventListener('click',()=>renderPair(activePair,{shuffleQuestions:true}));
const requestedPair=new URLSearchParams(location.search).get('pair');renderPair(pairData[requestedPair]?requestedPair:'an-ang');
