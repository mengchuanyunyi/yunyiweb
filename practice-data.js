const practiceTopics={
  nasal:{index:'01',kicker:'重点专题',title:'前后鼻音',intro:'比较不同韵尾的收音位置，从常用字词中建立稳定的听觉区别。',items:[['an / ang','前后鼻音'],['en / eng','前后鼻音'],['in / ing','前后鼻音'],['eng / ong','易混韵母']]},
  retroflex:{index:'02',kicker:'核心专题',title:'平舌与翘舌',intro:'比较舌尖位置，先听辨差异，再进入成组字词的跟读练习。',items:[['z / zh','平翘舌'],['c / ch','平翘舌'],['s / sh','平翘舌']]},
  nl:{index:'03',kicker:'核心专题',title:'边音与鼻音',intro:'通过 n / l 的听辨与常用字词，认识鼻腔气流和舌侧气流的差异。',items:[['n / l','边音与鼻音']]},
  other:{index:'04',kicker:'其他专题',title:'其他发音专题',intro:'继续处理声母发音位置与易混韵母。',items:[['f / h','唇齿音与舌根音'],['j / q / x','舌面音'],['u / ou','韵母区分'],['ie / üe','韵母区分']]}
};
const practiceDiagrams={
  'an / ang':[{src:'assets/pronunciation/Y07_01_an.png?v=20261124-3',alt:'an 前鼻韵母发音图解',copy:'an 由舌尖在口腔前部收音。'},{src:'assets/pronunciation/Y10_01_ang.png?v=20261124-3',alt:'ang 后鼻韵母发音图解',copy:'ang 由舌根向软腭收音。'}],
  'en / eng':[{src:'assets/pronunciation/Y07_02_en.png',alt:'en 前鼻韵母发音图解',copy:'en 由舌尖在口腔前部收音。'},{src:'assets/pronunciation/Y10_02_eng.png?v=20261124-2',alt:'eng 后鼻韵母发音图解',copy:'eng 由舌根向软腭收音。'}],
  'in / ing':[{src:'assets/pronunciation/Y08_01_in.png',alt:'in 前鼻韵母发音图解',copy:'in 保持展唇，由舌尖在口腔前部收音。'},{src:'assets/pronunciation/Y11_01_ing.png',alt:'ing 后鼻韵母发音图解',copy:'ing 的舌位向后移动，由舌根向软腭收音。'}],
  'eng / ong':[{src:'assets/pronunciation/Y10_02_eng.png?v=20261124-2',alt:'eng 后鼻韵母发音图解',copy:'eng 以自然开口起音，由舌根向软腭收音。'},{src:'assets/pronunciation/Y11_02_ong.png',alt:'ong 后鼻韵母发音图解',copy:'ong 保持圆唇，由舌根向软腭收音。'}],
  'z / zh':[{src:'assets/pronunciation/S14_01_z.png',alt:'z 平舌音发音图解',copy:'观察 z 的舌尖位置。'},{src:'assets/pronunciation/S11_01_zh.png',alt:'zh 翘舌音发音图解',copy:'观察 zh 的舌尖后抬位置。'}],
  'c / ch':[{src:'assets/pronunciation/S14_02_c.png',alt:'c 平舌音发音图解',copy:'观察 c 的平舌送气位置。'},{src:'assets/pronunciation/S11_02_ch.png',alt:'ch 翘舌音发音图解',copy:'观察 ch 的翘舌送气位置。'}],
  's / sh':[{src:'assets/pronunciation/S15_01_s.png',alt:'s 平舌音发音图解',copy:'观察 s 的平舌摩擦位置。'},{src:'assets/pronunciation/S12_01_sh.png',alt:'sh 翘舌音发音图解',copy:'观察 sh 的翘舌摩擦位置。'}],
  'n / l':[{src:'assets/pronunciation/S05_01_n.png',alt:'n 鼻音发音图解',copy:'n 发音时软腭下降，气流从鼻腔通过。'},{src:'assets/pronunciation/S06_01_l.png?v=20261125-1',alt:'l 边音发音图解',copy:'l 发音时气流从舌头两侧通过。'}],
  'f / h':[{src:'assets/pronunciation/S03_01_f.png',alt:'f 唇齿音发音图解',copy:'f 由上齿与下唇形成摩擦。'},{src:'assets/pronunciation/S08_01_h.png',alt:'h 舌根音发音图解',copy:'h 由舌根靠近软腭形成摩擦。'}],
  'j / q / x':[{src:'assets/pronunciation/S09_01_j.png',alt:'j 舌面音发音图解',copy:'观察 j 的舌面前部位置。'},{src:'assets/pronunciation/S09_02_q.png',alt:'q 舌面音发音图解',copy:'观察 q 的送气动作。'},{src:'assets/pronunciation/S10_01_x.png',alt:'x 舌面音发音图解',copy:'观察 x 的舌面摩擦位置。'}],
  'u / ou':[{src:'assets/pronunciation/Y01_05_u.png',alt:'u 韵母发音图解',copy:'观察 u 的圆唇与舌位。'},{src:'assets/pronunciation/Y04_02_ou.png',alt:'ou 复韵母发音图解',copy:'观察 ou 从起音到收音的口形变化。'}],
  'ie / üe':[{src:'assets/pronunciation/Y06_01_ie.png',alt:'ie 复韵母发音图解',copy:'观察 ie 的舌位变化。'},{src:'assets/pronunciation/Y06_02_ve.png',alt:'üe 复韵母发音图解',copy:'观察 üe 的圆唇与舌位变化。'}]
};
const practiceMethodData={
  'an / ang':[['分开收尾','慢读 a—n、a—ng：舌尖在前收 n，舌根在后收 ng。'],['成对再连读','读“班 bān／帮 bāng”，再读“担当 dān dāng”，只比较最后的收音位置。']],
  'en / eng':[['换舌尖与舌根','先读 en、eng；en 用舌尖抵上齿龈，eng 用舌根向软腭收音。'],['同声调成对读','读“真 zhēn／争 zhēng、身 shēn／生 shēng”，再连读“真诚 zhēn chéng”。']],
  'in / ing':[['保住 i 的口形','读 i—n、i—ng；嘴角保持展开，ing 中间不额外加 e。'],['对比结尾','读“金 jīn／京 jīng、心 xīn／星 xīng”，再连读“金星 jīn xīng”。']],
  'eng / ong':[['同样收 ng，先看唇形','eng 自然微开，ong 双唇拢圆；两者都由舌根向软腭收尾。'],['先记易混字，再连读','读“风 fēng、朋 péng、蒙 méng”，再读“灯笼 dēng long、蜂拥 fēng yōng”，感受词内 eng 到 ong 的变化。']],
  'z / zh':[['对准舌尖位置','读 z 时舌尖靠近上齿背；读 zh 时舌尖向后抬。先只换舌位，不急着加快。'],['同韵同调练','交替读“早 zǎo／找 zhǎo”，再读“早找、找早”，检查有没有把 zh 读平。']],
  'c / ch':[['保持送气，移动舌尖','c 与 ch 都有明显送气；c 在前，ch 舌尖后抬。把手放在嘴前感受气流。'],['同韵同调练','交替读“草 cǎo／炒 chǎo、仓 cāng／昌 chāng”，把注意力放在舌尖，不靠声调猜。']],
  's / sh':[['拉长摩擦声','把 s、sh 各延长一拍：s 舌尖在前，sh 舌尖向后抬；听摩擦声是否改变。'],['同韵同调练','交替读“三 sān／山 shān、桑 sāng／商 shāng”，先慢读，再连起来读。']],
  'n / l':[['同一接触点，换气路','两音舌尖都抵上齿龈附近；n 让气流走鼻腔，l 让气流从舌两侧通过。'],['同韵同调练','交替读“牛 niú／刘 liú、南 nán／蓝 lán”，再连读“牛郎 niú láng、辽宁 liáo níng”。']],
  'f / h':[['分别找摩擦位置','f 让上齿轻触下唇；h 把舌根抬向软腭附近。先只发声母，再接元音。'],['同韵同调练','交替读“发 fā／哈 hā”，再读“饭 fàn／汉 hàn”；不要把 h 发成唇齿摩擦。']],
  'j / q / x':[['先固定舌面位置','三音都用舌面前部靠近硬腭：j 不强送气，q 明显送气，x 保持持续摩擦。'],['同韵同调练','依次读“鸡 jī、七 qī、西 xī”，把手放在嘴前比较 j 与 q 的气流，再延长 x 的摩擦声。']],
  'u / ou':[['听元音有没有移动','u 的口形较稳定；ou 从较开的起点滑向收拢的 u，不要把两者都读成一个圆唇长音。'],['同声调成对读','交替读“路 lù／漏 lòu、书 shū／收 shōu”，听 ou 后半段的滑动。']],
  'ie / üe':[['先看起音唇形','ie 从展唇的 i 起音；üe 从圆唇的 ü 起音。读 üe 时不要漏掉圆唇动作。'],['放进同声调字','交替读“夜 yè／月 yuè”，再读“写 xiě／雪 xuě”；先看唇形，再听结尾。']]
};

const choiceBanks={
  'an / ang':{choices:['an','ang'],items:[['安','an','ān'],['岸','an','àn'],['班','an','bān'],['南','an','nán'],['蓝','an','lán'],['站','an','zhàn'],['看','an','kàn'],['山','an','shān'],['满','an','mǎn'],['谈','an','tán'],['方','ang','fāng'],['长','ang','cháng'],['张','ang','zhāng'],['忙','ang','máng'],['光','ang','guāng'],['上','ang','shàng'],['房','ang','fáng'],['糖','ang','táng'],['望','ang','wàng'],['黄','ang','huáng'],['港','ang','gǎng'],['厂','ang','chǎng']]},
  'en / eng':{choices:['en','eng'],items:[['本','en','běn'],['门','en','mén'],['真','en','zhēn'],['人','en','rén'],['分','en','fēn'],['身','en','shēn'],['很','en','hěn'],['问','en','wèn'],['根','en','gēn'],['深','en','shēn'],['风','eng','fēng'],['灯','eng','dēng'],['生','eng','shēng'],['成','eng','chéng'],['等','eng','děng'],['冷','eng','lěng'],['声','eng','shēng'],['正','eng','zhèng'],['能','eng','néng'],['城','eng','chéng'],['更','eng','gèng'],['梦','eng','mèng']]},
  'in / ing':{choices:['in','ing'],items:[['林','in','lín'],['心','in','xīn'],['近','in','jìn'],['金','in','jīn'],['琴','in','qín'],['民','in','mín'],['新','in','xīn'],['您','in','nín'],['进','in','jìn'],['信','in','xìn'],['京','ing','jīng'],['星','ing','xīng'],['清','ing','qīng'],['明','ing','míng'],['灵','ing','líng'],['静','ing','jìng'],['听','ing','tīng'],['影','ing','yǐng'],['醒','ing','xǐng'],['青','ing','qīng'],['平','ing','píng'],['景','ing','jǐng']]},
  'eng / ong':{choices:['eng','ong'],items:[['风','eng','fēng'],['朋','eng','péng'],['蒙','eng','méng'],['灯','eng','dēng'],['冷','eng','lěng'],['城','eng','chéng'],['生','eng','shēng'],['等','eng','děng'],['工','ong','gōng'],['中','ong','zhōng'],['同','ong','tóng'],['红','ong','hóng'],['空','ong','kōng'],['龙','ong','lóng'],['东','ong','dōng'],['重','ong','zhòng'],['送','ong','sòng'],['动','ong','dòng']]},
  'z / zh':{choices:['z','zh'],items:[['字','z','zì'],['早','z','zǎo'],['走','z','zǒu'],['总','z','zǒng'],['赞','z','zàn'],['做','z','zuò'],['在','z','zài'],['足','z','zú'],['知','zh','zhī'],['中','zh','zhōng'],['站','zh','zhàn'],['长','zh','zhǎng'],['这','zh','zhè'],['找','zh','zhǎo'],['正','zh','zhèng'],['主','zh','zhǔ']]},
  'c / ch':{choices:['c','ch'],items:[['草','c','cǎo'],['从','c','cóng'],['次','c','cì'],['错','c','cuò'],['村','c','cūn'],['菜','c','cài'],['词','c','cí'],['层','c','céng'],['长','ch','cháng'],['城','ch','chéng'],['吃','ch','chī'],['车','ch','chē'],['春','ch','chūn'],['出','ch','chū'],['唱','ch','chàng'],['茶','ch','chá']]},
  's / sh':{choices:['s','sh'],items:[['四','s','sì'],['三','s','sān'],['送','s','sòng'],['思','s','sī'],['色','s','sè'],['算','s','suàn'],['岁','s','suì'],['森','s','sēn'],['十','sh','shí'],['上','sh','shàng'],['书','sh','shū'],['声','sh','shēng'],['山','sh','shān'],['是','sh','shì'],['手','sh','shǒu'],['水','sh','shuǐ']]},
  'n / l':{choices:['n','l'],items:[['南','n','nán'],['牛','n','niú'],['年','n','nián'],['你','n','nǐ'],['能','n','néng'],['暖','n','nuǎn'],['女','n','nǚ'],['鸟','n','niǎo'],['蓝','l','lán'],['流','l','liú'],['林','l','lín'],['来','l','lái'],['冷','l','lěng'],['路','l','lù'],['绿','l','lǜ'],['亮','l','liàng'],['老','l','lǎo'],['连','l','lián']]},
  'f / h':{choices:['f','h'],items:[['风','f','fēng'],['方','f','fāng'],['分','f','fēn'],['发','f','fā'],['饭','f','fàn'],['飞','f','fēi'],['福','f','fú'],['房','f','fáng'],['红','h','hóng'],['花','h','huā'],['湖','h','hú'],['黄','h','huáng'],['好','h','hǎo'],['河','h','hé'],['回','h','huí'],['火','h','huǒ']]},
  'j / q / x':{choices:['j','q','x'],items:[['京','j','jīng'],['家','j','jiā'],['近','j','jìn'],['见','j','jiàn'],['九','j','jiǔ'],['清','q','qīng'],['前','q','qián'],['桥','q','qiáo'],['秋','q','qiū'],['去','q','qù'],['星','x','xīng'],['新','x','xīn'],['小','x','xiǎo'],['学','x','xué'],['想','x','xiǎng']]},
  'u / ou':{choices:['u','ou'],items:[['书','u','shū'],['路','u','lù'],['湖','u','hú'],['树','u','shù'],['住','u','zhù'],['出','u','chū'],['走','ou','zǒu'],['口','ou','kǒu'],['楼','ou','lóu'],['手','ou','shǒu'],['头','ou','tóu'],['后','ou','hòu']]},
  'ie / üe':{choices:['ie','üe'],items:[['写','ie','xiě'],['姐','ie','jiě'],['街','ie','jiē'],['别','ie','bié'],['铁','ie','tiě'],['夜','ie','yè'],['月','üe','yuè'],['学','üe','xué'],['雪','üe','xuě'],['却','üe','què'],['缺','üe','quē'],['略','üe','lüè']]}
};
const extraChoiceItems={
  'z / zh':[['灾','z','zāi'],['祖','z','zǔ'],['嘴','z','zuǐ'],['纸','zh','zhǐ'],['直','zh','zhí'],['竹','zh','zhú']],
  'c / ch':[['才','c','cái'],['擦','c','cā'],['粗','c','cū'],['超','ch','chāo'],['迟','ch','chí'],['吹','ch','chuī']],
  's / sh':[['伞','s','sǎn'],['速','s','sù'],['丝','s','sī'],['师','sh','shī'],['石','sh','shí'],['深','sh','shēn']],
  'n / l':[['拿','n','ná'],['难','n','nán'],['泥','n','ní'],['刘','l','liú'],['柳','l','liǔ'],['力','l','lì']],
  'f / h':[['法','f','fǎ'],['反','f','fǎn'],['复','f','fù'],['汉','h','hàn'],['呼','h','hū'],['海','h','hǎi']],
  'j / q / x':[['机','j','jī'],['吉','j','jí'],['球','q','qiú'],['气','q','qì'],['喜','x','xǐ'],['先','x','xiān']],
  'u / ou':[['读','u','dú'],['服','u','fú'],['乌','u','wū'],['狗','ou','gǒu'],['友','ou','yǒu'],['欧','ou','ōu']],
  'ie / üe':[['谢','ie','xiè'],['借','ie','jiè'],['鞋','ie','xié'],['绝','üe','jué'],['决','üe','jué'],['越','üe','yuè']]
};
Object.entries(extraChoiceItems).forEach(([name,items])=>{const bank=choiceBanks[name],seen=new Set(bank.items.map(item=>item[0]));items.forEach(item=>{if(!seen.has(item[0]))bank.items.push(item)})});
