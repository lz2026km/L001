// L001 五代十国历史数据文件
// 版本: v1.0
// 数据量: 15个国家/朝代, 700+历史事件, 100+历史人物

const KINGDOM_DATA = {

  // ==================== 时代背景 ====================
  background: {
    title: "五代十国",
    period: "907年 - 979年",
    totalYears: 72,
    description: `五代十国是中国历史上又一次大规模藩镇割据混战时期。从公元907年朱温建立后梁开始，到公元979年北宋灭北汉结束，共计72年。这一时期，中原地区依次更替了后梁、后唐、后晋、后汉、后周五个短命王朝，史称"五代"；同时在南方和山西地区先后存在过十个割据政权，合称"十国"。唐朝灭亡的根本原因在于藩镇割据。黄巢起义后，各藩镇拥兵自重，中央权威荡然无存。朱温原为黄巢部将，归顺唐朝后被封为宣武节度使，逐步消灭中原其他割据势力，于907年逼迫唐哀帝禅位，建立后梁。五代十国虽然战乱频繁，但南方政权相对稳定，经济文化有所发展。南方各国普遍重视农业生产，推行轻徭薄赋政策。文学艺术方面，前蜀、后蜀的词学，南唐的诗词，吴越的佛教建筑都达到很高水平。960年赵匡胤建立北宋，开始统一战争，先后灭掉南平、后蜀、南汉、南唐等国。979年北宋灭北汉，结束了五代十国的分裂局面，重归大一统。`,
    
    tangCollapse: {
      causes: [
        "藩镇割据：安史之乱后，节度使势力膨胀，形成'河北三镇'等独立势力",
        "黄巢起义：875年黄巢起义爆发，转战南北，攻入长安，严重动摇唐朝统治根基",
        "宦官专权：宦官掌握禁军，操纵皇帝废立，朝政混乱",
        "朋党之争：牛李党争持续数十年，消耗大量政治资源",
        "朱温崛起：宣武节度使朱温实力最强，逐步消灭其他藩镇，逼迫唐帝禅位"
      ],
      timeline: [
        { year: 755, event: "安史之乱爆发" },
        { year: 763, event: "安史之乱结束，唐朝由盛转衰" },
        { year: 874, event: "王仙芝起义爆发" },
        { year: 875, event: "黄巢起义爆发" },
        { year: 880, event: "黄巢攻入长安，建立大齐政权" },
        { year: 884, event: "黄巢兵败自杀" },
        { year: 895, event: "李茂贞攻入长安，宦官劫持昭宗" },
        { year: 901, event: "朱温入关中，控制唐昭宗" },
        { year: 904, event: "朱温杀唐昭宗，立李柷为帝" },
        { year: 907, event: "朱温逼迫唐哀帝禅位，建立后梁" }
      ]
    },
    
    songEstablishment: {
      significance: "赵匡胤建立北宋结束了五代十国的分裂局面，重归大一统",
      achievements: [
        "结束藩镇割据：北宋建立后，赵匡胤通过'杯酒释兵权'解除武将兵权",
        "加强中央集权：设立转运使、通判等官职，分散地方权力",
        "统一战争：先后灭南平、后蜀、南汉、南唐、吴越、北汉",
        "经济恢复：推行轻徭薄赋，鼓励农业生产",
        "文化繁荣：宋代文化达到中国历史新高峰"
      ]
    }
  },

  // ==================== 后梁 (907-923) ====================
  houLiang: {
    id: "houLiang",
    name: "后梁",
    fullName: "后梁帝国",
    color: "#c9a227",
    period: "907-923",
    capital: "汴梁(开封)",
    flag: "🐉",
    start: 907,
    end: 923,
    area: ["河南", "山东", "山西南部", "陕西东部", "湖北北部", "河北南部"],
    
    history: `后梁是中国五代十国时期的第一个中原王朝，由黄巢部将朱温所建。朱温原名朱全忠，砀山人（今安徽砀山），参加黄巢起义军，后归顺唐朝，因镇压起义军有功被封为宣武节度使，封东平王。朱温据有汴梁，逐步消灭了秦宗权、朱瑄、朱瑾等河南军阀，又击败了山西的晋国李克用，成为中原最强大的藩镇。907年，朱温废唐哀帝李柷，自立为帝，建立后梁，改元开平，定都汴梁。后梁建立后，朱温与其子朱友珪、朱友贞争夺皇位，内部矛盾激烈。915年，朱友贞通过政变夺取皇位，是为梁末帝。后梁疆域包括今河南、山东、山西南部、陕西东部及湖北北部，与晋国（今山西）、吴国（今江苏）、前蜀（今四川）并立。923年，晋王李存勖率军攻入汴梁，梁末帝朱友贞自杀，后梁灭亡。后梁历二帝，共存在16年。

后梁建立后，朱温推行了一系列恢复生产的政策。他减轻赋税，奖励农桑，使得中原地区在唐末战乱后得到一定恢复。朱温重视商业贸易，在汴梁设立市集，促进商品流通。在军事上，朱温创立了募兵制，组建了一支精锐的禁军，为后梁的军事力量奠定了基础。然而，后梁统治集团内部矛盾尖锐，朱温诸子争位激烈，严重削弱了后梁的国力。朱温本人晚年残暴嗜杀，大肆诛杀功臣，导致人心离散。后梁的灭亡，根本原因在于内部争斗削弱了国力，而晋国李存勖趁机崛起，最终灭掉了后梁。`,

    rulers: [
      {
        name: "朱温",
        reignStart: 907,
        reignEnd: 912,
        templeName: "太祖",
        posthumousTitle: "武皇帝",
        birthName: "朱全忠，字'假冒'",
        personality: "雄才大略而残暴嗜杀，善于权谋，果断狠辣",
        majorDeeds: "建立后梁，统一黄河流域，推行科举制度，削弱藩镇势力",
        causeOfRise: "由黄巢部将归顺唐朝，累功升任宣武节度使，割据中原",
        causeOfFall: "晚年诸子争位，内部火拼，国力大损",
        events: [
          { year: 882, title: "朱温归顺唐朝", desc: "朱温在同州叛变投向唐朝，被封为宣武节度使" },
          { year: 884, title: "朱温平定黄巢起义", desc: "朱温配合李克用击败黄巢，因功进封东平王" },
          { year: 889, title: "朱温消灭秦宗权", desc: "朱温攻占蔡州，消灭秦宗权势力，统一河南" },
          { year: 895, title: "朱温击败朱瑄朱瑾", desc: "朱温击败充州朱瑄、郓州朱瑾兄弟，初步统一山东" },
          { year: 901, title: "朱温入关中", desc: "朱温率军入关中，控制唐昭宗，迁都洛阳" },
          { year: 904, title: "朱温杀唐昭宗", desc: "朱温逼迫唐昭宗迁都洛阳，后将其杀死，另立昭宣帝" },
          { year: 907, title: "朱温称帝建后梁", desc: "朱温废唐哀帝，自立为帝，建立后梁，改元开平" },
          { year: 908, title: "朱温封赏功臣", desc: "朱温大封功臣，确立后梁官僚制度" },
          { year: 910, title: "柏乡之战", desc: "后梁与晋国在柏乡展开大战，后梁战败" },
          { year: 912, title: "朱温被弑", desc: "朱温病重时被朱友珪弑杀，享年六十一岁" }
        ]
      },
      {
        name: "朱友贞",
        reignStart: 912,
        reignEnd: 923,
        templeName: "无",
        posthumousTitle: "末帝",
        birthName: "朱友贞，原名朱友珪",
        personality: "优柔寡断，用人不当，缺乏军事才能",
        majorDeeds: "在位期间与晋国多次战争，最终国破身死",
        causeOfRise: "发动政变杀死朱友珪，夺取皇位",
        causeOfFall: "在贞明之战中屡战屡败，汴梁被晋军攻破",
        events: [
          { year: 912, title: "朱友贞夺位", desc: "朱友贞联合杨师厚发动政变，夺取帝位" },
          { year: 914, title: "梁晋魏州之战", desc: "梁军在魏州与晋军激战，失利" },
          { year: 916, title: "梁失河北", desc: "晋军夺取河北三镇，后梁势力大损" },
          { year: 918, title: "梁晋相持", desc: "梁晋双方在河南一带形成对峙" },
          { year: 921, title: "贞明之战", desc: "后梁与晋国的决战，后梁大败" },
          { year: 923, title: "后唐灭后梁", desc: "晋王李存勖攻入汴梁，朱友贞自杀，后梁亡" }
        ]
      }
    ],

    culturalAchievements: [
      "推行科举制度，选拔人才",
      "重视文化建设，整理古籍",
      "朱温本人粗通文墨，重视文臣"
    ],
    
    economicPolicies: [
      "轻徭薄赋，鼓励农业生产",
      "在汴梁设立市集，促进商业贸易",
      "修筑水利设施，灌溉农田"
    ],
    
    militaryEvents: [
      "柏乡之战(910)：后梁大败于晋国",
      "河北争夺战(912-917)：后梁丧失河北",
      "贞明之战(921-923)：后梁最终灭亡"
    ],
    
    diplomaticRelations: [
      "与晋国(李克用父子)为世仇，战争不断",
      "与吴国保持对峙"
    ]
  },

  // ==================== 后唐 (923-936) ====================
  houTang: {
    id: "houTang",
    name: "后唐",
    fullName: "后唐帝国",
    color: "#e85d04",
    period: "923-936",
    capital: "洛阳",
    flag: "🔥",
    start: 923,
    end: 936,
    area: ["河南", "山东", "山西", "河北", "陕西", "四川北部"],
    
    history: `后唐是中国五代十国时期的第二个中原王朝，由晋王李存勖所建。李存勖是晋王李克用之子，以复兴唐朝为号召，于923年在魏州称帝，随即灭掉后梁，定都洛阳。后唐全盛时期疆域辽阔，包括今河南、山东、山西、河北、陕西及四川北部，是中国历史上版图较大的五代王朝之一。

后唐在唐庄宗李存勖时期军事力量强大，灭前蜀、败契丹。但李存勖晚年骄傲自满，沉迷戏曲，宠信伶人，导致朝政混乱。926年，效节节度使赵在礼在魏州发动兵变，李存勖率军平叛，中流箭身亡，是为"兴教门之变"。李嗣源率军入洛阳称帝，是为唐明宗。唐明宗在位期间，改革弊政，裁减冗官，减轻赋税，出现了"小康"局面。然而，明宗死后，皇子争位，内乱再起。934年，唐闵帝李从厚被凤翔节度使李从珂取代。936年，太原节度使石敬瑭勾结契丹，率军南下，攻入洛阳，唐末帝李从珂自焚，后唐灭亡，历四帝，共存在13年。`,

    rulers: [
      {
        name: "李存勖",
        reignStart: 923,
        reignEnd: 926,
        templeName: "庄宗",
        posthumousTitle: "光圣神闵孝皇帝",
        birthName: "李存勖，小名亚子",
        personality: "英明神武而骄傲自满，精通音律",
        majorDeeds: "灭后梁，平前蜀，败契丹，建立后唐",
        causeOfRise: "晋王李克用之子，继承晋王爵位，灭后梁称帝",
        causeOfFall: "沉迷戏曲，宠信伶人，兴教门之变中流矢身亡",
        events: [
          { year: 908, title: "李克用去世", desc: "晋王李克用去世，子李存勖继位" },
          { year: 910, title: "柏乡之战", desc: "李存勖率晋军在柏乡大败后梁军" },
          { year: 923, title: "灭后梁建后唐", desc: "李存勖在魏州称帝，攻入汴梁，后梁亡" },
          { year: 925, title: "后唐灭前蜀", desc: "郭崇韬率军六万灭前蜀，王衍投降" },
          { year: 926, title: "兴教门之变", desc: "赵在礼魏州兵变，李存勖中流箭身亡" }
        ]
      },
      {
        name: "李嗣源",
        reignStart: 926,
        reignEnd: 933,
        templeName: "明宗",
        posthumousTitle: "圣德和武钦孝皇帝",
        birthName: "李嗣源，本名邈佶烈",
        personality: "仁厚恭俭，忠于朝廷，用人得当",
        majorDeeds: "平定兵变，稳定朝政，改革弊政",
        causeOfRise: "唐庄宗中流矢死后，率军入洛阳称帝",
        causeOfFall: "病逝",
        events: [
          { year: 926, title: "洛阳称帝", desc: "唐庄宗中流矢死后，李嗣源在诸将拥戴下于洛阳称帝" },
          { year: 927, title: "平定汴州", desc: "汴州发生兵变，李嗣源率军平定" },
          { year: 930, title: "改革财政", desc: "推行财政改革，减轻百姓负担" },
          { year: 933, title: "病逝", desc: "李嗣源病逝于洛阳" }
        ]
      },
      {
        name: "李从厚",
        reignStart: 933,
        reignEnd: 934,
        templeName: "闵帝",
        posthumousTitle: "唐闵帝",
        birthName: "李从厚，明宗养子",
        personality: "懦弱无能，用人不当",
        majorDeeds: "在位时间极短",
        causeOfRise: "明宗死后继位",
        causeOfFall: "被李从珂取代，逃亡后被杀",
        events: [
          { year: 933, title: "即位", desc: "李嗣源病逝，李从厚继位" },
          { year: 934, title: "李从珂夺位", desc: "凤翔节度使李从珂起兵，攻入洛阳，李从厚被杀" }
        ]
      },
      {
        name: "李从珂",
        reignStart: 934,
        reignEnd: 936,
        templeName: "末帝",
        posthumousTitle: "唐末帝",
        birthName: "李从珂，明宗养子",
        personality: "勇猛善战但刚愎自用",
        majorDeeds: "夺位后与石敬瑭矛盾激化",
        causeOfRise: "凤翔节度使起兵，夺取帝位",
        causeOfFall: "石敬瑭勾结契丹，兵败自焚",
        events: [
          { year: 934, title: "夺取帝位", desc: "李从珂攻入洛阳，即位为帝" },
          { year: 936, title: "石敬瑭叛", desc: "太原节度使石敬瑭勾结契丹，发动叛乱" },
          { year: 936, title: "后唐灭亡", desc: "契丹与石敬瑭联军攻入洛阳，李从珂自焚，后唐亡" }
        ]
      }
    ],

    culturalAchievements: [
      "中兴唐朝文化，整理古籍典藏",
      "戏曲繁荣，后唐庄宗精通音律",
      "佛教在北方传播，建寺造像"
    ],
    
    economicPolicies: [
      "轻徭薄赋，与民休息",
      "兴修水利，灌溉农田",
      "商业贸易有所发展"
    ],
    
    militaryEvents: [
      "柏乡之战(910)：晋军大破后梁",
      "灭前蜀(925)：郭崇韬率军六万灭亡前蜀",
      "潞州之战(936)：后唐最后一战"
    ],
    
    diplomaticRelations: [
      "与契丹为敌，曾击败契丹入侵",
      "与吴越、闽保持友好关系",
      "石敬瑭叛变时勾结契丹"
    ]
  },

  // ==================== 后晋 (936-947) ====================
  houJin: {
    id: "houJin",
    name: "后晋",
    fullName: "后晋帝国",
    color: "#4cc9f0",
    period: "936-947",
    capital: "汴梁(开封)",
    flag: "🏹",
    start: 936,
    end: 947,
    area: ["河南", "山东", "山西南部", "陕西", "甘肃东部"],
    
    history: `后晋是中国五代十国时期的第三个中原王朝，由石敬瑭所建。石敬瑭是后唐明宗的女婿，太原节度使，手握重兵。936年，石敬瑭以割让燕云十六州为代价，请求契丹出兵相助，在契丹帮助下灭亡后唐，建立后晋，定都汴梁。石敬瑭对契丹自称"儿皇帝"，年贡岁币，成为中国历史上著名的耻辱。

后晋在石敬瑭时期依靠契丹支持维持统治，但国内矛盾尖锐。石敬瑭死后，侄孙石重贵即位，试图摆脱契丹控制，发生冲突。947年，契丹大军南下，攻入汴梁，石重贵被俘，后晋灭亡。契丹人在中原烧杀抢掠，引发人民反抗，契丹被迫撤军。后晋历二帝，共存在11年。燕云十六州的割让，使中原王朝失去了抵御北方游牧民族的天然屏障，影响此后中国数百年的历史。`,

    rulers: [
      {
        name: "石敬瑭",
        reignStart: 936,
        reignEnd: 942,
        templeName: "高祖",
        posthumousTitle: "孝元皇帝",
        birthName: "石敬瑭，太原沙陀人",
        personality: "老谋深算，背负骂名，性格隐忍",
        majorDeeds: "建立后晋，割让燕云十六州",
        causeOfRise: "后唐太原节度使，勾结契丹灭后唐",
        causeOfFall: "病逝",
        events: [
          { year: 936, title: "建后晋", desc: "石敬瑭在契丹帮助下灭后唐，建后晋于汴梁" },
          { year: 936, title: "割让燕云十六州", desc: "石敬瑭将燕云十六州割让给契丹" },
          { year: 937, title: "称臣契丹", desc: "石敬瑭对契丹称'儿皇帝'" },
          { year: 942, title: "病逝", desc: "石敬瑭病逝于汴梁" }
        ]
      },
      {
        name: "石重贵",
        reignStart: 942,
        reignEnd: 947,
        templeName: "无",
        posthumousTitle: "出帝",
        birthName: "石重贵，石敬瑭之侄",
        personality: "年轻气盛，试图抗敌",
        majorDeeds: "在位期间与契丹关系恶化",
        causeOfRise: "石敬瑭死后继位",
        causeOfFall: "契丹南侵，被俘，后晋亡",
        events: [
          { year: 942, title: "即位", desc: "石敬瑭病逝，石重贵继位" },
          { year: 943, title: "拒向契丹称臣", desc: "石重贵拒绝向契丹称臣，关系恶化" },
          { year: 944, title: "契丹南侵", desc: "契丹大军南侵，后晋奋力抵抗" },
          { year: 946, title: "汴梁陷落", desc: "契丹攻入汴梁，石重贵被俘" },
          { year: 947, title: "后晋灭亡", desc: "后晋正式灭亡，契丹人在中原" }
        ]
      }
    ],

    culturalAchievements: [
      "佛教继续传播",
      "与契丹文化有所交流"
    ],
    
    economicPolicies: [
      "向契丹输送岁币，加重百姓负担",
      "维持基本农业生产"
    ],
    
    militaryEvents: [
      "晋辽战争(943-946)：后晋抵抗契丹入侵",
      "汴梁之战(946)：契丹攻陷汴梁"
    ],
    
    diplomaticRelations: [
      "对契丹称臣纳贡，割让燕云十六州",
      "与周边政权关系紧张"
    ]
  },

  // ==================== 后汉 (947-951) ====================
  houHan: {
    id: "houHan",
    name: "后汉",
    fullName: "后汉帝国",
    color: "#7b2d8b",
    period: "947-951",
    capital: "汴梁(开封)",
    flag: "⚔️",
    start: 947,
    end: 951,
    area: ["河南", "山东", "山西", "陕西", "湖北"],
    
    history: `后汉是中国五代十国时期的第四个中原王朝，由刘知远所建。947年，契丹灭后晋后北撤，宣武节度使刘知远在太原称帝，建立后汉，随即率军南下，攻入汴梁。刘知远在位仅一年便病死，子刘承祐即位，是为汉隐帝。后汉统治残暴，赋税繁重，引发民怨。950年，郭威在邺都发动兵变，率军南下，攻入汴梁，刘承祐逃亡途中被杀，后汉灭亡。后汉历二帝，共存在4年，是五代中存在时间最短的王朝。`,

    rulers: [
      {
        name: "刘知远",
        reignStart: 947,
        reignEnd: 948,
        templeName: "高祖",
        posthumousTitle: "文武理孝皇帝",
        birthName: "刘知远，太原沙陀人",
        personality: "深沉大度，善于权谋",
        majorDeeds: "趁契丹北撤之机建立后汉",
        causeOfRise: "契丹灭晋后，在太原称帝",
        causeOfFall: "病逝",
        events: [
          { year: 947, title: "建后汉", desc: "刘知远在太原称帝，建立后汉" },
          { year: 948, title: "攻入汴梁", desc: "刘知远率军南下，攻入汴梁" },
          { year: 948, title: "病逝", desc: "刘知远病逝，子刘承祐即位" }
        ]
      },
      {
        name: "刘承祐",
        reignStart: 948,
        reignEnd: 951,
        templeName: "隐帝",
        posthumousTitle: "汉隐帝",
        birthName: "刘承祐，刘知远之子",
        personality: "年少轻狂，残暴不仁",
        majorDeeds: "在位期间激化矛盾，导致亡国",
        causeOfRise: "刘知远死后继位",
        causeOfFall: "郭威兵变，逃亡被杀",
        events: [
          { year: 948, title: "即位", desc: "刘承祐即位为汉隐帝" },
          { year: 950, title: "杀杨邠等", desc: "刘承祐杀宰相杨邠、枢密使王章" },
          { year: 950, title: "郭威兵变", desc: "邺都郭威起兵，率军南下" },
          { year: 950, title: "后汉灭亡", desc: "郭威攻入汴梁，刘承祐逃亡被杀，后汉亡" }
        ]
      }
    ],

    culturalAchievements: [
      "后汉存在时间短，文化建树有限"
    ],
    
    economicPolicies: [
      "赋税繁重，百姓负担沉重"
    ],
    
    militaryEvents: [
      "郭威兵变(950)：后汉灭亡的直接原因"
    ],
    
    diplomaticRelations: [
      "与契丹关系敌对",
      "与后周、前蜀等政权对峙"
    ]
  },

  // ==================== 后周 (951-960) ====================
  houZhou: {
    id: "houZhou",
    name: "后周",
    fullName: "后周帝国",
    color: "#2d6a4f",
    period: "951-960",
    capital: "汴梁(开封)",
    flag: "⚔️",
    start: 951,
    end: 960,
    area: ["河南", "山东", "山西", "河北", "陕西", "湖北", "安徽"],
    
    history: `后周是中国五代十国时期的第五个中原王朝，由郭威所建。郭威本是后汉枢密使，被刘承祐猜忌而发动兵变。951年，郭威率军攻入汴梁，建立后周，定都汴梁。郭威在位期间，改革弊政，减免赋税，整顿军纪，为后周奠定基础。954年，郭威病逝，养子柴荣即位，是为周世宗。

柴荣是中国历史上有作为的皇帝之一。他在位期间，整顿禁军，削弱藩镇势力；三次亲征南唐，夺取江北十四州；北伐契丹，收复部分燕云地区。高平之战中，柴荣亲自率军大败北汉和契丹联军，威震天下。959年，柴荣在北伐途中病倒，返回汴梁后去世。960年，殿前司都点检赵匡胤在陈桥驿发动兵变，黄袍加身，建立北宋，后周灭亡。后周历三帝，共存在9年。`,

    rulers: [
      {
        name: "郭威",
        reignStart: 951,
        reignEnd: 954,
        templeName: "太祖",
        posthumousTitle: "武孝皇帝",
        birthName: "郭威，邢州尧山人",
        personality: "深沉大度，知人善任",
        majorDeeds: "建立后周，改革弊政",
        causeOfRise: "后汉枢密使，发动兵变代汉建周",
        causeOfFall: "病逝",
        events: [
          { year: 950, title: "郭威兵变", desc: "郭威在邺都起兵，攻入汴梁" },
          { year: 951, title: "建后周", desc: "郭威称帝，建立后周" },
          { year: 952, title: "改革政治", desc: "郭威改革弊政，减免赋税" },
          { year: 954, title: "病逝", desc: "郭威病逝，养子柴荣即位" }
        ]
      },
      {
        name: "柴荣",
        reignStart: 954,
        reignEnd: 959,
        templeName: "世宗",
        posthumousTitle: "文武孝皇帝",
        birthName: "柴荣，郭威养子",
        personality: "英明果敢，锐意改革",
        majorDeeds: "高平之战大捷，南征南唐，北伐契丹",
        causeOfRise: "郭威养子，即位为周世宗",
        causeOfFall: "病逝",
        events: [
          { year: 954, title: "即位", desc: "郭威病逝，柴荣即位为周世宗" },
          { year: 954, title: "高平之战", desc: "柴荣亲征，在高平大败北汉与契丹联军" },
          { year: 955, title: "禁军改革", desc: "柴荣整顿禁军，削弱藩镇" },
          { year: 956, title: "南征南唐", desc: "柴荣第一次南征，夺取南唐江北地区" },
          { year: 957, title: "再征南唐", desc: "柴荣第二次南征，扩大战果" },
          { year: 958, title: "三征南唐", desc: "柴荣第三次南唐，南唐割让江北十四州" },
          { year: 959, title: "北伐契丹", desc: "柴荣北伐契丹，收复部分燕云地区" },
          { year: 959, title: "病逝", desc: "柴荣在北伐途中病倒，返回汴梁后去世" }
        ]
      },
      {
        name: "柴宗训",
        reignStart: 959,
        reignEnd: 960,
        templeName: "恭帝",
        posthumousTitle: "周恭帝",
        birthName: "柴宗训，柴荣之子",
        personality: "年幼无知",
        majorDeeds: "在位期间发生陈桥兵变",
        causeOfRise: "柴荣死后继位，年仅七岁",
        causeOfFall: "陈桥兵变，被迫禅位于赵匡胤",
        events: [
          { year: 959, title: "即位", desc: "柴荣病逝，柴宗训即位，年仅七岁" },
          { year: 960, title: "陈桥兵变", desc: "赵匡胤在陈桥驿发动兵变，黄袍加身" },
          { year: 960, title: "后周灭亡", desc: "柴宗训被迫禅位，后周亡，北宋建立" }
        ]
      }
    ],

    culturalAchievements: [
      "柴荣重视文化教育",
      "整理典籍，改革科举"
    ],
    
    economicPolicies: [
      "减免赋税，与民休息",
      "兴修水利，发展农业",
      "整治商业市场"
    ],
    
    militaryEvents: [
      "高平之战(954)：大败北汉与契丹联军",
      "南征南唐(956-958)：夺取江北十四州",
      "北伐契丹(959)：收复燕云地区"
    ],
    
    diplomaticRelations: [
      "与北汉、契丹为敌",
      "与南唐、南汉、后蜀等为敌",
      "赵匡胤通过兵变建立北宋"
    ]
  },

  // ==================== 吴 (902-937) ====================
  wu: {
    id: "wu",
    name: "吴",
    fullName: "吴国",
    color: "#16a085",
    period: "902-937",
    capital: "扬州",
    flag: "🌾",
    start: 902,
    end: 937,
    area: ["江苏", "安徽", "江西", "湖北东部"],
    
    history: `吴国是五代十国时期的南方政权之一，由杨行密所建。杨行密是合肥人，唐末农民起义爆发后，他聚集人马，逐渐占据以扬州为中心的江淮地区。902年，唐朝封杨行密为吴王，建都扬州。吴国疆域包括今江苏、安徽、江西及湖北东部，是十国中疆域较大的政权之一。

杨行密在位期间，推行保境息民政策，奖励农桑，使得江淮地区在唐末战乱后得到恢复和发展。杨行密为人雄才大略，但晚年多病，诸子争位，政权逐渐落入徐温手中。905年，杨行密病死，子杨渥即位，昏庸无能。910年，大将徐温发动政变，杀死杨渥，拥立杨隆演。从此，吴国大权落入徐温手中，成为实际的统治者。937年，徐温养子徐知诰（李昪）废黜吴帝杨溥，建立南唐，吴国灭亡。吴国历四主，共存在35年（割据政权性质），正式称王32年。`,

    rulers: [
      {
        name: "杨行密",
        reignStart: 902,
        reignEnd: 905,
        templeName: "太祖",
        posthumousTitle: "武忠王",
        birthName: "杨行密，字化源",
        personality: "雄才大略，知人善任，深得人心",
        majorDeeds: "建立吴国，保境息民，发展江淮",
        causeOfRise: "唐末割据江淮，被封为吴王",
        causeOfFall: "病逝",
        events: [
          { year: 892, title: "杨行密占据扬州", desc: "杨行密率军占据扬州，开始割据江淮" },
          { year: 895, title: "封郡王", desc: "唐朝封杨行密为郡王" },
          { year: 902, title: "封吴王", desc: "唐朝封杨行密为吴王，吴国正式建立" },
          { year: 904, title: "发展经济", desc: "杨行密推行保境息民政策，发展生产" },
          { year: 905, title: "病逝", desc: "杨行密病逝，子杨渥即位" }
        ]
      },
      {
        name: "杨渥",
        reignStart: 905,
        reignEnd: 910,
        templeName: "景帝",
        posthumousTitle: "吴景帝",
        birthName: "杨渥，杨行密之子",
        personality: "昏庸无道，荒废政事",
        majorDeeds: "在位期间政治混乱",
        causeOfRise: "杨行密死后继位",
        causeOfFall: "被徐温发动政变杀死",
        events: [
          { year: 905, title: "即位", desc: "杨行密病逝，杨渥即位" },
          { year: 908, title: "奢侈无度", desc: "杨渥生活荒淫，政事废弛" },
          { year: 910, title: "徐温政变", desc: "大将徐温发动政变，杀死杨渥" }
        ]
      },
      {
        name: "杨隆演",
        reignStart: 910,
        reignEnd: 927,
        templeName: "宣王",
        posthumousTitle: "吴宣王",
        birthName: "杨隆演，杨行密之子",
        personality: "性格懦弱，大权旁落",
        majorDeeds: "在位期间大权落入徐温",
        causeOfRise: "徐温拥立为帝",
        causeOfFall: "病逝",
        events: [
          { year: 910, title: "即位", desc: "徐温拥立杨隆演为帝，实权在徐温手中" },
          { year: 915, title: "徐温专权", desc: "徐温自任大丞相，完全掌握朝政" },
          { year: 927, title: "病逝", desc: "杨隆演病逝" }
        ]
      },
      {
        name: "杨溥",
        reignStart: 927,
        reignEnd: 937,
        templeName: "让帝",
        posthumousTitle: "吴让帝",
        birthName: "杨溥，杨行密之子",
        personality: "恭顺谦和，无实权",
        majorDeeds: "在位期间吴国被南唐取代",
        causeOfRise: "徐温拥立为帝",
        causeOfFall: "被徐知诰废黜",
        events: [
          { year: 927, title: "即位", desc: "徐温拥立杨溥为帝" },
          { year: 929, title: "徐温去世", desc: "徐温去世，养子徐知诰掌权" },
          { year: 937, title: "吴国灭亡", desc: "徐知诰废黜杨溥，建立南唐，吴国亡" }
        ]
      }
    ],

    culturalAchievements: [
      "江淮文化在战乱中得以保存",
      "佛教在江南地区传播"
    ],
    
    economicPolicies: [
      "保境息民，奖励农桑",
      "发展江淮航运",
      "修筑水利设施"
    ],
    
    militaryEvents: [
      "孙儒之乱：争夺淮南的长期战争",
      "与钱镠争夺苏南地区"
    ],
    
    diplomaticRelations: [
      "与后梁保持友好关系",
      "与南唐(徐温控制)最终被取代"
    ]
  },

  // ==================== 南唐 (937-975) ====================
  nanTang: {
    id: "nanTang",
    name: "南唐",
    fullName: "南唐帝国",
    color: "#2980b9",
    period: "937-975",
    capital: "金陵(南京)",
    flag: "🎋",
    start: 937,
    end: 975,
    area: ["江苏", "安徽", "江西", "福建", "湖南", "湖北东部"],
    
    history: `南唐是五代十国时期疆域最大的南方政权，由徐知诰（即李昪）所建。徐知诰是徐温养子，在徐温去世后掌权。937年，徐知诰废黜吴帝杨溥，自立为帝，建立南唐，定都金陵。南唐全盛时期，疆域包括今江苏、安徽、江西、福建及湖南、湖北东部，是五代十国时期最强大的南方政权。

南唐在烈祖李昪时期推行保境息民政策，与民休息，使得江南地区经济文化高度繁荣。李昪去世后，子李璟即位，是为南唐中主。956年，后周世宗柴荣率军南征，夺取南唐江北十四州，南唐实力大损。961年，李煜即位，是为南唐后主，后主才华横溢，诗词冠绝当世，却不善治国。971年，北宋灭南汉后，南唐唇亡齿寒。974年，宋太祖命曹彬率军攻南唐。975年，宋军攻入金陵，李煜投降，南唐灭亡。南唐历三主，共存在38年。`,

    rulers: [
      {
        name: "李昪",
        reignStart: 937,
        reignEnd: 943,
        templeName: "烈祖",
        posthumousTitle: "光文肃武孝高皇帝",
        birthName: "徐知诰，字正伦",
        personality: "温良恭俭，勤于政事",
        majorDeeds: "建立南唐，推行文治",
        causeOfRise: "徐温养子，掌权后废吴帝自立",
        causeOfFall: "病逝",
        events: [
          { year: 937, title: "建南唐", desc: "徐知诰废杨溥，自立为帝，建立南唐" },
          { year: 938, title: "改名李昪", desc: "徐知诰恢复李姓，更名李昪" },
          { year: 940, title: "灭闽", desc: "南唐灭闽国，疆域扩大" },
          { year: 942, title: "崇信道教", desc: "李昪晚年崇信道教，服用丹药" },
          { year: 943, title: "病逝", desc: "李昪服丹药中毒身亡" }
        ]
      },
      {
        name: "李璟",
        reignStart: 943,
        reignEnd: 961,
        templeName: "中主",
        posthumousTitle: "元宗",
        birthName: "李璟，字伯玉",
        personality: "温润文雅，精通诗词",
        majorDeeds: "在位期间南唐疆域最大，后失去江北",
        causeOfRise: "李昪死后继位",
        causeOfFall: "后周南征，失去江北十四州，忧惧而死",
        events: [
          { year: 943, title: "即位", desc: "李昪服丹药死，李璟即位" },
          { year: 944, title: "南唐攻闽", desc: "南唐发兵攻闽" },
          { year: 945, title: "灭闽", desc: "南唐灭闽国" },
          { year: 947, title: "南唐平楚", desc: "南唐灭楚国" },
          { year: 956, title: "后周南征", desc: "后周世宗柴荣率军南征" },
          { year: 958, title: "割让江北", desc: "南唐被迫割让江北十四州给后周" },
          { year: 961, title: "病逝", desc: "李璟忧惧而死，子李煜即位" }
        ]
      },
      {
        name: "李煜",
        reignStart: 961,
        reignEnd: 975,
        templeName: "无",
        posthumousTitle: "后主",
        birthName: "李煜，字重光",
        personality: "才华横溢，诗词冠绝，不善治国",
        majorDeeds: "词作成就登峰造极，《虞美人》等传世",
        causeOfRise: "李璟死后继位",
        causeOfFall: "北宋灭南唐，被俘后封违命侯",
        events: [
          { year: 961, title: "即位", desc: "李璟病死，李煜即位为南唐后主" },
          { year: 971, title: "南汉亡", desc: "北宋灭南汉，南唐唇亡齿寒" },
          { year: 974, title: "北宋攻唐", desc: "宋太祖命曹彬攻南唐" },
          { year: 975, title: "南唐亡", desc: "宋军攻入金陵，李煜投降，南唐亡" }
        ]
      }
    ],

    culturalAchievements: [
      "南唐词学登峰造极，李煜为千古词帝",
      "绘画艺术精湛，顾闳中《韩熙载夜宴图》",
      "书法成就卓著",
      "科举制度完善"
    ],
    
    economicPolicies: [
      "与民休息，推行轻徭薄赋",
      "发展商业贸易",
      "重视农业，推广水稻种植"
    ],
    
    militaryEvents: [
      "灭闽之战(943-945)：南唐吞并闽国",
      "灭楚之战(947)：南唐趁机灭楚",
      "抗周战争(956-958)：抵抗后周南征"
    ],
    
    diplomaticRelations: [
      "与后周、北宋为敌",
      "与吴越保持竞争关系"
    ]
  },

  // ==================== 吴越 (907-978) ====================
  wuYue: {
    id: "wuYue",
    name: "吴越",
    fullName: "吴越国",
    color: "#f39c12",
    period: "907-978",
    capital: "杭州",
    flag: "🐟",
    start: 907,
    end: 978,
    area: ["浙江", "江苏南部", "福建北部"],
    
    history: `吴越是五代十国时期存在时间最长的南方政权，由钱镠所建。钱镠是杭州临安人，唐末拥兵自重，逐步占据以杭州为中心的浙江地区。907年，后梁封钱镠为吴越王，吴越国正式建立，定都杭州。钱镠在位期间，修筑了著名的捍海塘（钱塘江海塘），保护杭州免受海潮侵袭，是古代水利工程的杰作。

钱镠死后，子钱元瓘、孙钱弘佐、钱弘琮等相继即位。吴越国采取保境息民政策，对中原王朝称臣纳贡，同时与邻国保持友好关系，在五代十国的动荡中独善其身。钱弘俶在位期间，北宋统一了南方各国。978年，钱弘俶纳土归宋，吴越国灭亡。吴越国历五主，共存在71年，是十国中最后灭亡的政权之一。`,

    rulers: [
      {
        name: "钱镠",
        reignStart: 907,
        reignEnd: 932,
        templeName: "武肃王",
        posthumousTitle: "吴越武肃王",
        birthName: "钱镠，字具美",
        personality: "雄才大略，励精图治",
        majorDeeds: "建立吴越，修筑海塘，发展经济",
        causeOfRise: "唐末割据浙江，被封为吴越王",
        causeOfFall: "病逝",
        events: [
          { year: 893, title: "占据杭州", desc: "钱镠率军占据杭州，开始割据浙江" },
          { year: 907, title: "建吴越", desc: "后梁封钱镠为吴越王，吴越国建立" },
          { year: 910, title: "修筑海塘", desc: "钱镠修筑捍海塘，保护杭州免受海潮侵袭" },
          { year: 932, title: "病逝", desc: "钱镠病逝，子钱元瓘即位" }
        ]
      },
      {
        name: "钱元瓘",
        reignStart: 932,
        reignEnd: 941,
        templeName: "文穆王",
        posthumousTitle: "吴越文穆王",
        birthName: "钱元瓘，字明宝",
        personality: "温和谨慎",
        majorDeeds: "在位期间维持稳定",
        causeOfRise: "钱镠死后继位",
        causeOfFall: "病逝",
        events: [
          { year: 932, title: "即位", desc: "钱镠病逝，钱元瓘即位" },
          { year: 941, title: "病逝", desc: "钱元瓘病逝" }
        ]
      },
      {
        name: "钱弘佐",
        reignStart: 941,
        reignEnd: 947,
        templeName: "忠显王",
        posthumousTitle: "吴越忠显王",
        birthName: "钱弘佐，字纪明",
        personality: "年少有为",
        majorDeeds: "在位期间延续稳定政策",
        causeOfRise: "钱元瓘死后继位",
        causeOfFall: "病逝",
        events: [
          { year: 941, title: "即位", desc: "钱元瓘病死，钱弘佐即位" },
          { year: 947, title: "病逝", desc: "钱弘佐病逝" }
        ]
      },
      {
        name: "钱弘琮",
        reignStart: 947,
        reignEnd: 960,
        templeName: "忠献王",
        posthumousTitle: "吴越忠献王",
        birthName: "钱弘琮，字表东",
        personality: "稳重",
        majorDeeds: "在位期间北宋统一北方",
        causeOfRise: "钱弘佐死后继位",
        causeOfFall: "病逝",
        events: [
          { year: 947, title: "即位", desc: "钱弘佐病逝，钱弘琮即位" },
          { year: 960, title: "北宋建立", desc: "赵匡胤陈桥兵变建立北宋" }
        ]
      },
      {
        name: "钱弘俶",
        reignStart: 960,
        reignEnd: 978,
        templeName: "忠懿王",
        posthumousTitle: "吴越忠懿王",
        birthName: "钱弘俶，字文德",
        personality: "仁厚守法",
        majorDeeds: "顺应历史潮流，纳土归宋",
        causeOfRise: "钱弘琮死后继位",
        causeOfFall: "纳土归宋，吴越亡",
        events: [
          { year: 960, title: "即位", desc: "钱弘琮病死，钱弘俶即位" },
          { year: 975, title: "助宋攻唐", desc: "钱弘俶发兵助北宋攻南唐" },
          { year: 978, title: "纳土归宋", desc: "钱弘俶将吴越版图全部献给北宋，吴越亡" }
        ]
      }
    ],

    culturalAchievements: [
      "佛教建筑在吴越达到鼎盛，建造大量寺庙",
      "雷峰塔的建造",
      "杭州城市建设的奠基"
    ],
    
    economicPolicies: [
      "修筑海塘，保护农田",
      "发展海上贸易",
      "轻徭薄赋，与民休息"
    ],
    
    militaryEvents: [
      "与闽国的边境冲突",
      "助宋攻唐(975)"
    ],
    
    diplomaticRelations: [
      "对中原王朝称臣纳贡",
      "与南唐、闽保持友好关系"
    ]
  },

  // ==================== 闽 (909-945) ====================
  min: {
    id: "min",
    name: "闽",
    fullName: "闽国",
    color: "#c0392b",
    period: "909-945",
    capital: "福州",
    flag: "🐉",
    start: 909,
    end: 945,
    area: ["福建", "浙江南部"],
    
    history: `闽国是五代十国时期的南方政权之一，由王审知所建。王审知是光州固始人，唐末与兄王潮一起渡江南下，逐步占据福建。909年，后梁封王审知为闽王，闽国正式建立，定都福州。王审知在位期间，推行保境息民政策，重视海外贸易，福州、泉州成为重要的对外贸易港口。

王审知死后，子王延翰继位，残暴无道。930年，大将王审知养子王延禀率军攻入福州，杀王延翰。王审知亲子王延钧率军平叛，杀死王延禀，自立为闽帝。此后闽国内部争夺皇位不断，内战频繁。943年，王延政在福州称帝，与建州的殷国相对立。945年，南唐趁机发兵灭闽，闽国灭亡。闽国历六主，共存在36年。`,

    rulers: [
      {
        name: "王审知",
        reignStart: 909,
        reignEnd: 925,
        templeName: "太祖",
        posthumousTitle: "昭武王",
        birthName: "王审知，字详卿",
        personality: "仁厚开明，重视人才",
        majorDeeds: "建立闽国，开发海外贸易",
        causeOfRise: "唐末占据福建，被封为闽王",
        causeOfFall: "病逝",
        events: [
          { year: 885, title: "渡江入闽", desc: "王审知随兄王潮渡江入闽" },
          { year: 893, title: "占据福州", desc: "王审知占据福州，开始割据福建" },
          { year: 909, title: "建闽国", desc: "后梁封王审知为闽王，闽国建立" },
          { year: 918, title: "发展海外贸易", desc: "王审知发展海上贸易，福州泉州成为重要港口" },
          { year: 925, title: "病逝", desc: "王审知病逝，子王延翰即位" }
        ]
      },
      {
        name: "王延翰",
        reignStart: 925,
        reignEnd: 930,
        templeName: "惠宗",
        posthumousTitle: "闽惠宗",
        birthName: "王延翰，字子逸",
        personality: "残暴荒淫",
        majorDeeds: "在位期间政治昏暗",
        causeOfRise: "王审知死后继位",
        causeOfFall: "被王延禀率军杀死",
        events: [
          { year: 925, title: "即位", desc: "王审知病逝，王延翰即位" },
          { year: 930, title: "被杀", desc: "王审知养子王延禀率军攻入福州，杀王延翰" }
        ]
      },
      {
        name: "王延钧",
        reignStart: 930,
        reignEnd: 935,
        templeName: "康宗",
        posthumousTitle: "闽康宗",
        birthName: "王延钧，王审知次子",
        personality: "猜忌多疑",
        majorDeeds: "杀王延禀自立，与后唐保持关系",
        causeOfRise: "平定王延禀叛乱后自立",
        causeOfFall: "被子王继鹏杀死",
        events: [
          { year: 930, title: "平叛即位", desc: "王延钧率军平定王延禀叛乱，随即称帝" },
          { year: 933, title: "称闽帝", desc: "王延钧在福州称帝" },
          { year: 935, title: "被杀", desc: "王延钧被子王继鹏杀死" }
        ]
      },
      {
        name: "王继鹏",
        reignStart: 935,
        reignEnd: 939,
        templeName: "景宗",
        posthumousTitle: "闽景宗",
        birthName: "王继鹏，王延钧之子",
        personality: "荒淫无道",
        majorDeeds: "在位期间闽国内乱加剧",
        causeOfRise: "杀死父王延钧后自立",
        causeOfFall: "被朱文进杀死",
        events: [
          { year: 935, title: "弑父自立", desc: "王继鹏杀死父王延钧，自立为帝" },
          { year: 939, title: "被杀", desc: "朱文进发动兵变，杀死王继鹏" }
        ]
      },
      {
        name: "王延曦",
        reignStart: 939,
        reignEnd: 943,
        templeName: "殷宗",
        posthumousTitle: "闽殷宗",
        birthName: "王延曦，王审知之子",
        personality: "残暴奢侈",
        majorDeeds: "在位期间滥杀无辜",
        causeOfRise: "朱文进死后被拥立",
        causeOfFall: "被弟王延政取代",
        events: [
          { year: 939, title: "被拥立", desc: "王延曦被拥立为闽王" },
          { year: 943, title: "被杀", desc: "王延曦被弟王延政取代并杀死" }
        ]
      },
      {
        name: "王延政",
        reignStart: 943,
        reignEnd: 945,
        templeName: "无",
        posthumousTitle: "无",
        birthName: "王延政，王审知之子",
        personality: "据傲残暴",
        majorDeeds: "建州称帝，闽国分裂",
        causeOfRise: "在建州称帝，与福州对立",
        causeOfFall: "南唐灭闽",
        events: [
          { year: 943, title: "称帝建州", desc: "王延政在建州称帝，国号殷" },
          { year: 945, title: "南唐灭闽", desc: "南唐发兵攻闽，王延政被俘，闽国亡" }
        ]
      }
    ],

    culturalAchievements: [
      "海外贸易繁荣，泉州成为国际港口",
      "佛教在福建广泛传播",
      "茶叶种植开始发展"
    ],
    
    economicPolicies: [
      "重视海外贸易，发展市舶司",
      "福州、泉州开埠通商",
      "发展陶瓷业"
    ],
    
    militaryEvents: [
      "王氏内战：闽国王室内斗不断",
      "南唐灭闽(945)"
    ],
    
    diplomaticRelations: [
      "向后梁、后唐称臣",
      "与南唐、吴越关系紧张"
    ]
  },

  // ==================== 楚 (907-951) ====================
  chu: {
    id: "chu",
    name: "楚",
    fullName: "楚国",
    color: "#27ae60",
    period: "907-951",
    capital: "长沙",
    flag: "🦚",
    start: 907,
    end: 951,
    area: ["湖南", "广西", "贵州", "广东北部"],
    
    history: `楚国是五代十国时期的南方政权之一，由马殷所建。马殷是河南鄠县人，唐末与弟马賨占据湖南。907年，后梁封马殷为楚王，楚国正式建立，定都长沙。马殷在位期间，采取保境息民政策，重视茶叶贸易，与周边国家保持友好关系。楚国全盛时期，疆域包括今湖南、广西、贵州及广东北部。

马殷死后，子马希声、马希范相继即位。马希范在位期间，大肆挥霍，滥杀功臣。947年，马希范死，马希广、马希萼兄弟争位，内乱爆发。950年，南唐趁机发兵攻楚，南唐将领边镐率军攻入长沙，楚国灭亡。楚国历六主，共存在44年（称王37年）。马殷家族在湖南的统治，为后来湖南地区的发展奠定了基础。`,

    rulers: [
      {
        name: "马殷",
        reignStart: 907,
        reignEnd: 930,
        templeName: "武穆王",
        posthumousTitle: "楚武穆王",
        birthName: "马殷，字霸图",
        personality: "雄才大略，善于用人",
        majorDeeds: "建立楚国，发展茶叶贸易",
        causeOfRise: "唐末占据湖南，被封为楚王",
        causeOfFall: "病逝",
        events: [
          { year: 896, title: "占据湖南", desc: "马殷率军占据湖南，开始割据" },
          { year: 907, title: "建楚国", desc: "后梁封马殷为楚王，楚国建立" },
          { year: 927, title: "受封国王", desc: "后唐封马殷为楚国王" },
          { year: 930, title: "病逝", desc: "马殷病逝，子马希声即位" }
        ]
      },
      {
        name: "马希声",
        reignStart: 930,
        reignEnd: 932,
        templeName: "衡阳王",
        posthumousTitle: "楚衡阳王",
        birthName: "马希声，马殷次子",
        personality: "平庸",
        majorDeeds: "在位时间很短",
        causeOfRise: "马殷死后继位",
        causeOfFall: "病逝",
        events: [
          { year: 930, title: "即位", desc: "马殷病逝，马希声即位" },
          { year: 932, title: "病逝", desc: "马希声病逝，弟马希范即位" }
        ]
      },
      {
        name: "马希范",
        reignStart: 932,
        reignEnd: 947,
        templeName: "文昭王",
        posthumousTitle: "楚文昭王",
        birthName: "马希范，马殷第四子",
        personality: "奢侈残暴，滥杀功臣",
        majorDeeds: "在位期间楚国达到鼎盛，但埋下内乱隐患",
        causeOfRise: "马希声死后继位",
        causeOfFall: "病逝",
        events: [
          { year: 932, title: "即位", desc: "马希声病逝，马希范即位" },
          { year: 947, title: "病逝", desc: "马希范病逝，马希广即位" }
        ]
      },
      {
        name: "马希广",
        reignStart: 947,
        reignEnd: 950,
        templeName: "废王",
        posthumousTitle: "楚废王",
        birthName: "马希广，马希范之弟",
        personality: "仁弱",
        majorDeeds: "在位期间马氏兄弟争位",
        causeOfRise: "马希范死后继位",
        causeOfFall: "被马希萼击败俘获",
        events: [
          { year: 947, title: "即位", desc: "马希范病死，马希广被拥立" },
          { year: 950, title: "兵败被俘", desc: "马希萼率军攻入长沙，马希广被俘" }
        ]
      },
      {
        name: "马希萼",
        reignStart: 950,
        reignEnd: 951,
        templeName: "恭孝王",
        posthumousTitle: "楚恭孝王",
        birthName: "马希萼，马希范之弟",
        personality: "野心勃勃",
        majorDeeds: "与弟马希崇争位，引发南唐入侵",
        causeOfRise: "击败马希广后自立",
        causeOfFall: "被南唐俘虏",
        events: [
          { year: 950, title: "夺取帝位", desc: "马希萼击败马希广，自立为楚王" },
          { year: 951, title: "南唐灭楚", desc: "南唐趁机攻楚，马希萼被俘，楚亡" }
        ]
      }
    ],

    culturalAchievements: [
      "茶叶贸易繁荣，形成茶马古道",
      "长沙成为南方商业中心",
      "佛教建筑在湖南广泛发展"
    ],
    
    economicPolicies: [
      "以茶换马，发展茶马贸易",
      "奖励农桑，发展农业生产",
      "征收商税，积累财富"
    ],
    
    militaryEvents: [
      "马氏内战：兄弟争位导致国力衰退",
      "南唐灭楚(951)"
    ],
    
    diplomaticRelations: [
      "向后梁、后唐称臣",
      "与南汉关系紧张"
    ]
  },

  // ==================== 南汉 (917-971) ====================
  nanHan: {
    id: "nanHan",
    name: "南汉",
    fullName: "南汉帝国",
    color: "#2c3e50",
    period: "917-971",
    capital: "广州",
    flag: "🐘",
    start: 917,
    end: 971,
    area: ["广东", "广西", "海南", "湖南南部"],
    
    history: `南汉是五代十国时期的南方政权之一，由刘隐、刘龑兄弟所建。刘隐是广州人，唐末占据岭南，逐步统一广东、广西地区。911年，刘隐病死，弟刘龑即位。917年，刘龑称帝，建立南汉，定都广州。南汉全盛时期，疆域包括今广东、广西、海南及湖南南部。

南汉历代皇帝多荒淫残暴，滥杀功臣。刘龑在位期间，推行严刑峻法，大肆屠杀功臣。刘晟、刘鋹相继即位后，政治愈发腐败。刘鋹在位期间，废杀丞相，群臣人人自危。970年，宋太祖命潘美率军攻南汉。971年，宋军攻入广州，刘鋹投降，南汉灭亡。南汉历四主，共存在54年，是十国中灭亡较早的政权之一。`,

    rulers: [
      {
        name: "刘隐",
        reignStart: 911,
        reignEnd: 917,
        templeName: "烈祖",
        posthumousTitle: "襄皇帝",
        birthName: "刘隐，上蔡人",
        personality: "深沉大度，善于用人",
        majorDeeds: "奠定南汉基业，统一岭南",
        causeOfRise: "唐末占据岭南，被封为南海王",
        causeOfFall: "病逝",
        events: [
          { year: 905, title: "占据广州", desc: "刘隐率军占据广州，开始割据岭南" },
          { year: 911, title: "封南海王", desc: "后梁封刘隐为南海王" },
          { year: 917, title: "病逝", desc: "刘隐病逝，弟刘龑即位" }
        ]
      },
      {
        name: "刘龑",
        reignStart: 917,
        reignEnd: 942,
        templeName: "高祖",
        posthumousTitle: "南汉殇帝",
        birthName: "刘龑，字子陟",
        personality: "荒淫残暴，猜忌多疑",
        majorDeeds: "建立南汉，但政治昏暗",
        causeOfRise: "刘隐死后称帝",
        causeOfFall: "病逝",
        events: [
          { year: 917, title: "建南汉", desc: "刘龑在广州称帝，建立南汉" },
          { year: 925, title: "攻闽", desc: "南汉发兵攻闽" },
          { year: 930, title: "攻楚", desc: "南汉趁机攻楚" },
          { year: 942, title: "病逝", desc: "刘龑病逝，子刘晟即位" }
        ]
      },
      {
        name: "刘晟",
        reignStart: 942,
        reignEnd: 958,
        templeName: "中宗",
        posthumousTitle: "南汉中宗",
        birthName: "刘晟，字宗号",
        personality: "荒淫残暴，屠杀兄弟",
        majorDeeds: "在位期间政治腐败",
        causeOfRise: "刘龑死后即位",
        causeOfFall: "病逝",
        events: [
          { year: 942, title: "即位", desc: "刘龑病逝，刘晟即位" },
          { year: 943, title: "屠杀兄弟", desc: "刘晟屠杀诸兄弟" },
          { year: 958, title: "病逝", desc: "刘晟病逝，子刘鋹即位" }
        ]
      },
      {
        name: "刘鋹",
        reignStart: 958,
        reignEnd: 971,
        templeName: "后主",
        posthumousTitle: "南汉后主",
        birthName: "刘鋹，字inhua",
        personality: "荒淫无道，昏庸无能",
        majorDeeds: "南汉末帝，亡国被俘",
        causeOfRise: "刘晟死后即位",
        causeOfFall: "北宋攻灭",
        events: [
          { year: 958, title: "即位", desc: "刘晟病逝，刘鋹即位" },
          { year: 970, title: "北宋攻汉", desc: "宋太祖命潘美攻南汉" },
          { year: 971, title: "南汉亡", desc: "宋军攻入广州，刘鋹投降，南汉亡" }
        ]
      }
    ],

    culturalAchievements: [
      "广州成为对外贸易中心",
      "海上贸易繁荣",
      "科举制度在南方发展"
    ],
    
    economicPolicies: [
      "重视海外贸易，设市舶司",
      "广州开埠通商",
      "发展陶瓷业"
    ],
    
    militaryEvents: [
      "与闽国的战争",
      "北宋灭南汉之战(970-971)"
    ],
    
    diplomaticRelations: [
      "与楚、吴越为邻",
      "与北宋为敌"
    ]
  },

  // ==================== 前蜀 (907-925) ====================
  qianShu: {
    id: "qianShu",
    name: "前蜀",
    fullName: "前蜀国",
    color: "#9b59b6",
    period: "907-925",
    capital: "成都",
    flag: "🐼",
    start: 907,
    end: 925,
    area: ["四川", "重庆", "陕西南部", "贵州北部"],
    
    history: `前蜀是五代十国时期的南方政权之一，由王建所建。王建是许州舞阳人，唐末从军，后因镇压农民起义有功，被封为壁州刺史。此后王建逐渐占据四川，907年，前蜀正式建立，定都成都。王建在位期间，推行保境息民政策，使得四川地区在战乱中保持了相对稳定。

王建死后，子王衍即位。王衍年少荒淫，大肆挥霍，宠信宦官侫臣。925年，后唐庄宗命郭崇韬率军六万攻前蜀。王衍抵挡不住，率众投降，前蜀灭亡。前蜀历二主，共存在18年。前蜀灭亡后，王衍被封为大将军，但不久即被杀害。前蜀虽然存在时间不长，但文化繁荣，词学、绘画都有很高成就。`,

    rulers: [
      {
        name: "王建",
        reignStart: 907,
        reignEnd: 918,
        templeName: "高祖",
        posthumousTitle: "前蜀高祖",
        birthName: "王建，字光图",
        personality: "雄才大略，知人善任",
        majorDeeds: "建立前蜀，割据四川",
        causeOfRise: "唐末占据四川，被封为蜀王",
        causeOfFall: "病逝",
        events: [
          { year: 882, title: "从军", desc: "王建从军，镇压农民起义" },
          { year: 891, title: "占据成都", desc: "王建率军占据成都，开始割据四川" },
          { year: 903, title: "封蜀王", desc: "唐朝封王建为蜀王" },
          { year: 907, title: "建前蜀", desc: "朱温建后梁，王建在成都建立前蜀" },
          { year: 918, title: "病逝", desc: "王建病逝，子王衍即位" }
        ]
      },
      {
        name: "王衍",
        reignStart: 918,
        reignEnd: 925,
        templeName: "无",
        posthumousTitle: "前蜀末帝",
        birthName: "王衍，字化源",
        personality: "荒淫无道，昏庸无能",
        majorDeeds: "前蜀末帝，亡国投降",
        causeOfRise: "王建死后继位",
        causeOfFall: "后唐灭前蜀",
        events: [
          { year: 918, title: "即位", desc: "王建病逝，王衍即位" },
          { year: 919, title: "荒淫无度", desc: "王衍宠信宦官，大肆挥霍" },
          { year: 925, title: "后唐灭前蜀", desc: "后唐郭崇韬率军攻入成都，王衍投降，前蜀亡" }
        ]
      }
    ],

    culturalAchievements: [
      "词学繁荣，花间派发源地",
      "绘画艺术精湛",
      "佛教在四川广泛传播"
    ],
    
    economicPolicies: [
      "保境息民",
      "发展农业生产"
    ],
    
    militaryEvents: [
      "后唐灭前蜀之战(925)"
    ],
    
    diplomaticRelations: [
      "与后梁保持友好关系",
      "被后唐所灭"
    ]
  },

  // ==================== 后蜀 (934-965) ====================
  houShu: {
    id: "houShu",
    name: "后蜀",
    fullName: "后蜀国",
    color: "#d35400",
    period: "934-965",
    capital: "成都",
    flag: "🌺",
    start: 934,
    end: 965,
    area: ["四川", "重庆", "陕西南部"],
    
    history: `后蜀是五代十国时期的南方政权之一，由孟知祥所建。孟知祥是邢州龙冈人，后唐时任西川节度使。934年，孟知祥在成都称帝，建立后蜀。后蜀全盛时期，疆域包括今四川、重庆及陕西南部。

孟知祥在位仅数月便去世，子孟昶即位。孟昶在位初期，推行改革，整顿吏治，后蜀政治清明，经济文化繁荣。然而孟昶晚年宠信侫臣，怠于政事。959年，后周世宗柴荣北伐，夺取后蜀的陕西南部。965年，宋太祖命王全斌率军攻后蜀。孟昶投降，后蜀灭亡。后蜀历二主，共存在31年。后蜀文化繁荣，《花间集》是词学瑰宝，花蕊夫人更是千古才女。`,

    rulers: [
      {
        name: "孟知祥",
        reignStart: 934,
        reignEnd: 934,
        templeName: "高祖",
        posthumousTitle: "后蜀高祖",
        birthName: "孟知祥，字保胤",
        personality: "深沉有谋",
        majorDeeds: "建立后蜀",
        causeOfRise: "后唐西川节度使，据蜀称帝",
        causeOfFall: "称帝数月后病逝",
        events: [
          { year: 933, title: "平定两川", desc: "孟知祥平定两川" },
          { year: 934, title: "建后蜀", desc: "孟知祥在成都称帝，建立后蜀" },
          { year: 934, title: "病逝", desc: "孟知祥称帝数月后病逝，子孟昶即位" }
        ]
      },
      {
        name: "孟昶",
        reignStart: 934,
        reignEnd: 965,
        templeName: "后主",
        posthumousTitle: "后蜀后主",
        birthName: "孟昶，字化源",
        personality: "初期英明，晚年怠政",
        majorDeeds: "在位初期推行改革，后亡国",
        causeOfRise: "孟知祥死后即位",
        causeOfFall: "北宋灭后蜀",
        events: [
          { year: 934, title: "即位", desc: "孟知祥病逝，孟昶即位" },
          { year: 938, title: "改革政治", desc: "孟昶推行改革，整顿吏治" },
          { year: 959, title: "失陕西", desc: "后周北伐，夺取后蜀陕西南部" },
          { year: 965, title: "后蜀亡", desc: "宋军攻入成都，孟昶投降，后蜀亡" }
        ]
      }
    ],

    culturalAchievements: [
      "《花间集》是词学瑰宝，花间派发源地",
      "花蕊夫人费氏，才貌双全",
      "绘画艺术精湛"
    ],
    
    economicPolicies: [
      "推行轻徭薄赋",
      "发展农业生产",
      "成都成为繁华商业城市"
    ],
    
    militaryEvents: [
      "后周夺陕西(959)",
      "北宋灭后蜀之战(965)"
    ],
    
    diplomaticRelations: [
      "与后周、北宋为敌",
      "与南唐保持友好"
    ]
  },

  // ==================== 荆南/南平 (924-963) ====================
  jingNan: {
    id: "jingNan",
    name: "荆南",
    fullName: "荆南国(南平)",
    color: "#7f8c8d",
    period: "924-963",
    capital: "江陵",
    flag: "🕊️",
    start: 924,
    end: 963,
    area: ["湖北"],
    
    history: `荆南（又称南平）是五代十国时期最弱小的政权之一，由高季兴所建。高季兴是陕州硖石人，原为后梁将领，后梁时任荆南节度使。924年，后唐封高季兴为南平王，荆南国正式建立，定都江陵。荆南疆域最小，仅有荆、归、峡三州（约今湖北地区），是五代十国中最弱小的政权。

高季兴采取"四面称臣"的策略，向周边所有政权称臣纳贡，以换取保护和经济利益。他利用荆南位于南北要冲的地理位置，发展转口贸易，在夹缝中求生存。高季兴死后，子高从诲、高保融、高继冲相继即位。963年，宋太祖命慕容延钊攻南唐，假道荆南。高继冲被迫纳土归宋，荆南灭亡。荆南历四主，共存在39年。`,

    rulers: [
      {
        name: "高季兴",
        reignStart: 924,
        reignEnd: 929,
        templeName: "武信王",
        posthumousTitle: "南平武信王",
        birthName: "高季兴，字更本",
        personality: "狡猾善变，长于外交",
        majorDeeds: "建立荆南，四面称臣",
        causeOfRise: "后梁荆南节度使，被封为南平王",
        causeOfFall: "病逝",
        events: [
          { year: 924, title: "建荆南", desc: "后唐封高季兴为南平王，荆南国建立" },
          { year: 925, title: "向后唐称臣", desc: "高季兴向后唐称臣" },
          { year: 929, title: "病逝", desc: "高季兴病逝，子高从诲即位" }
        ]
      },
      {
        name: "高从诲",
        reignStart: 929,
        reignEnd: 948,
        templeName: "文献王",
        posthumousTitle: "南平文献王",
        birthName: "高从诲，字不详",
        personality: "谨慎守法",
        majorDeeds: "延续四面称臣策略",
        causeOfRise: "高季兴死后继位",
        causeOfFall: "病逝",
        events: [
          { year: 929, title: "即位", desc: "高季兴病逝，高从诲即位" },
          { year: 930, title: "向后晋称臣", desc: "后晋建立，高从诲向后晋称臣" },
          { year: 948, title: "病逝", desc: "高从诲病逝" }
        ]
      },
      {
        name: "高保融",
        reignStart: 948,
        reignEnd: 960,
        templeName: "贞懿王",
        posthumousTitle: "南平贞懿王",
        birthName: "高保融，字不详",
        personality: "平庸",
        majorDeeds: "在位期间荆南保持稳定",
        causeOfRise: "高从诲死后继位",
        causeOfFall: "病逝",
        events: [
          { year: 948, title: "即位", desc: "高从诲病逝，高保融即位" },
          { year: 960, title: "北宋建立", desc: "赵匡胤建立北宋，高保融向北宋称臣" }
        ]
      },
      {
        name: "高继冲",
        reignStart: 960,
        reignEnd: 963,
        templeName: "无",
        posthumousTitle: "无",
        birthName: "高继冲，字不详",
        personality: "懦弱无能",
        majorDeeds: "在位期间荆南灭亡",
        causeOfRise: "高保融死后继位",
        causeOfFall: "纳土归宋",
        events: [
          { year: 960, title: "即位", desc: "高保融病逝，高继冲即位" },
          { year: 963, title: "纳土归宋", desc: "宋军假道攻南唐，高继冲被迫纳土，荆南亡" }
        ]
      }
    ],

    culturalAchievements: [
      "荆南文化受南北影响"
    ],
    
    economicPolicies: [
      "发展转口贸易",
      "利用地理位置优势",
      "对各国称臣获取赏赐"
    ],
    
    militaryEvents: [
      "北宋灭荆南(963)"
    ],
    
    diplomaticRelations: [
      "四面称臣：向后梁、后唐、后晋、后汉、后周、北宋轮流称臣"
    ]
  },

  // ==================== 北汉 (951-979) ====================
  beiHan: {
    id: "beiHan",
    name: "北汉",
    fullName: "北汉帝国",
    color: "#8e44ad",
    period: "951-979",
    capital: "太原",
    flag: "⛰️",
    start: 951,
    end: 979,
    area: ["山西", "河北北部"],
    
    history: `北汉是五代十国时期的北方政权之一，也是十国中最后灭亡的政权，由刘崇所建。刘崇是后汉高祖刘知远之弟，后汉灭亡后，在太原称帝，建立北汉。北汉依附契丹为援，定都太原，与后周、北宋为敌。

北汉疆域包括今山西及河北北部，是十国中最弱小的政权之一，也是五代十国时期唯一位于北方的割据政权。刘崇在位期间，倚仗契丹支持，与后周多次战争。954年高平之战，北汉与契丹联军被后周世宗柴荣大败。刘崇死后，子刘承钧即位，继续与北宋为敌。979年，宋太宗亲征北汉，攻入太原，刘继元投降，北汉灭亡。十国至此全部覆灭。`,

    rulers: [
      {
        name: "刘崇",
        reignStart: 951,
        reignEnd: 954,
        templeName: "世祖",
        posthumousTitle: "神武帝",
        birthName: "刘崇，太原沙陀人",
        personality: "老谋深算，倚仗契丹",
        majorDeeds: "建立北汉，与后周为敌",
        causeOfRise: "后汉灭亡后，在太原称帝",
        causeOfFall: "高平之战后忧惧而死",
        events: [
          { year: 947, title: "后汉亡", desc: "后汉被郭威所灭" },
          { year: 951, title: "建北汉", desc: "刘崇在太原称帝，建立北汉" },
          { year: 954, title: "高平之战", desc: "北汉与契丹联军攻后周，被柴荣大败，刘崇忧惧而死" }
        ]
      },
      {
        name: "刘承钧",
        reignStart: 954,
        reignEnd: 970,
        templeName: "睿宗",
        posthumousTitle: "北汉睿宗",
        birthName: "刘承钧，字不详",
        personality: "谨慎",
        majorDeeds: "在位期间延续北汉",
        causeOfRise: "刘崇死后继位",
        causeOfFall: "病逝",
        events: [
          { year: 954, title: "即位", desc: "刘崇病死，刘承钧即位" },
          { year: 970, title: "病逝", desc: "刘承钧病逝" }
        ]
      },
      {
        name: "刘继恩",
        reignStart: 970,
        reignEnd: 971,
        templeName: "英武帝",
        posthumousTitle: "北汉英武帝",
        birthName: "刘继恩，刘承钧养子",
        personality: "不稳重",
        majorDeeds: "在位期间被刺杀",
        causeOfRise: "刘承钧死后继位",
        causeOfFall: "被刺杀",
        events: [
          { year: 970, title: "即位", desc: "刘承钧病逝，刘继恩即位" },
          { year: 971, title: "被杀", desc: "刘继恩被刺杀，刘继元被拥立" }
        ]
      },
      {
        name: "刘继元",
        reignStart: 971,
        reignEnd: 979,
        templeName: "无",
        posthumousTitle: "北汉末帝",
        birthName: "刘继元，字不详",
        personality: "依附契丹",
        majorDeeds: "北汉末帝，亡于北宋",
        causeOfRise: "刘继恩被杀后被拥立",
        causeOfFall: "北宋灭北汉",
        events: [
          { year: 971, title: "被拥立", desc: "刘继恩被杀，刘继元被拥立" },
          { year: 979, title: "北宋灭北汉", desc: "宋太宗亲征，攻入太原，刘继元投降，北汉亡，十国全灭" }
        ]
      }
    ],

    culturalAchievements: [
      "太原晋祠的修建"
    ],
    
    economicPolicies: [
      "战乱频繁，经济凋敝"
    ],
    
    militaryEvents: [
      "高平之战(954)：被后周大败",
      "北宋灭北汉之战(979)"
    ],
    
    diplomaticRelations: [
      "完全依附契丹",
      "与后周、北宋为敌"
    ]
  },

  // ==================== 契丹/辽 (907-947+) ====================
  liao: {
    id: "liao",
    name: "契丹/辽",
    fullName: "契丹帝国/辽朝",
    color: "#1abc9c",
    period: "907-947+",
    capital: "上京(临潢)",
    flag: "🐺",
    start: 907,
    end: 947,
    area: ["蒙古", "东北", "河北北部", "山西北部"],
    
    history: `契丹是中国古代北方游牧民族，907年，耶律阿保机统一契丹各部，建立契丹政权。916年，阿保机称帝，建立契丹国，定都上京。契丹在阿保机时期迅速扩张，灭亡渤海国，疆域扩大到东北全境。947年，契丹改国号为辽。

契丹与五代十国关系密切。936年，契丹应石敬瑭请求南下，帮助其灭亡后唐，建立后晋。契丹获得燕云十六州后，实力大增。此后契丹多次南侵，成为中原王朝的最大威胁。946年，契丹灭后晋，契丹皇帝耶律德光在汴梁举行大阅兵。但契丹人在中原烧杀抢掠，引发人民反抗，947年被迫撤军北返。契丹（辽）后来成为与北宋对峙的强大政权，持续了数百年。`,

    rulers: [
      {
        name: "耶律阿保机",
        reignStart: 907,
        reignEnd: 926,
        templeName: "太祖",
        posthumousTitle: "辽太祖",
        birthName: "耶律阿保机，字阿布",
        personality: "雄才大略，统一契丹",
        majorDeeds: "统一契丹各部，建立契丹国",
        causeOfRise: "统一契丹各部，被推举为可汗",
        causeOfFall: "病逝",
        events: [
          { year: 901, title: "被选为夷离堇", desc: "耶律阿保机被选为契丹夷离堇" },
          { year: 907, title: "统一契丹", desc: "耶律阿保机统一契丹各部" },
          { year: 916, title: "建契丹国", desc: "阿保机称帝，建立契丹国" },
          { year: 925, title: "灭渤海", desc: "契丹灭渤海国" },
          { year: 926, title: "病逝", desc: "阿保机病逝" }
        ]
      },
      {
        name: "耶律德光",
        reignStart: 926,
        reignEnd: 947,
        templeName: "太宗",
        posthumousTitle: "辽太宗",
        birthName: "耶律德光，字德谨",
        personality: "野心勃勃，南下中原",
        majorDeeds: "帮助石敬瑭建后晋，灭后晋",
        causeOfRise: "阿保机死后继位",
        causeOfFall: "在汴梁撤军途中病逝",
        events: [
          { year: 926, title: "即位", desc: "阿保机病逝，耶律德光即位" },
          { year: 936, title: "援助石敬瑭", desc: "应石敬瑭请求，率军南下灭后唐" },
          { year: 938, title: "获得燕云十六州", desc: "石敬瑭割让燕云十六州给契丹" },
          { year: 946, title: "灭后晋", desc: "契丹南下，灭后晋" },
          { year: 947, title: "汴梁撤军", desc: "在中原人民反抗下撤军，病逝于途中" }
        ]
      }
    ],

    culturalAchievements: [
      "创制契丹文字",
      "建立南北面官制",
      "发展契丹畜牧业"
    ],
    
    economicPolicies: [
      "畜牧业为主",
      "榷场贸易与中原互市",
      "掠夺中原财富"
    ],
    
    militaryEvents: [
      "灭渤海国(925)",
      "灭后晋(946)",
      "高平之战(954)等多 次南侵"
    ],
    
    diplomaticRelations: [
      "援助石敬瑭建后晋",
      "与五代各国多有战争"
    ]
  }
};

// ==================== 历史事件时间轴 ====================
const TIMELINE_EVENTS = [
  // 唐末背景
  {year:875,title:"王仙芝起义",description:"王仙芝在濮州起义，转战各地动摇了唐朝统治根基",type:"war",involvedKingdoms:[],significance:"high"},
  {year:878,title:"黄巢南下",description:"黄巢率军南下，攻占江西、福建等地",type:"war",involvedKingdoms:[],significance:"high"},
  {year:880,title:"黄巢占长安",description:"黄巢攻入长安，建立大齐政权，唐僖宗出逃",type:"war",involvedKingdoms:[],significance:"high"},
  {year:884,title:"黄巢死",description:"黄巢在山东莱州被击败，自杀身亡",type:"war",involvedKingdoms:[],significance:"high"},
  {year:895,title:"李茂贞乱政",description:"凤翔节度使李茂贞攻入长安，劫持唐昭宗",type:"politics",involvedKingdoms:[],significance:"high"},
  {year:901,title:"朱温入关",description:"宣武节度使朱温率军入关中，控制唐昭宗",type:"politics",involvedKingdoms:[],significance:"high"},
  {year:904,title:"朱温杀昭宗",description:"朱温逼迫唐昭宗迁都洛阳，后将其杀死",type:"politics",involvedKingdoms:[],significance:"high"},
  {year:907,title:"朱温建后梁",description:"朱温废唐哀帝，自立为帝，建立后梁，五代开始",type:"found",involvedKingdoms:["houLiang"],significance:"high"},

  // 后梁
  {year:908,title:"朱温封赏",description:"朱温大封功臣，确立后梁官僚制度",type:"politics",involvedKingdoms:["houLiang"],significance:"medium"},
  {year:909,title:"后梁封马殷",description:"后梁封马殷为楚王",type:"politics",involvedKingdoms:["houLiang","chu"],significance:"medium"},
  {year:910,title:"柏乡之战",description:"晋王李存勖率军在柏乡大败后梁军，后梁元气大伤",type:"war",involvedKingdoms:["houLiang","houTang"],significance:"high"},
  {year:912,title:"朱温被弑",description:"朱温病重时被次子朱友珪弑杀",type:"death",involvedKingdoms:["houLiang"],significance:"high"},
  {year:913,title:"朱友贞夺位",description:"朱友贞联合杨师厚发动政变，夺取帝位",type:"politics",involvedKingdoms:["houLiang"],significance:"medium"},
  {year:915,title:"梁失魏博",description:"晋军夺取魏博节度，后梁失去河北屏障",type:"war",involvedKingdoms:["houLiang","houTang"],significance:"high"},
  {year:917,title:"刘龑建南汉",description:"刘龠在广州称帝，建立南汉",type:"found",involvedKingdoms:["nanHan"],significance:"high"},
  {year:918,title:"钱镠建吴越",description:"钱镠被封为吴越王，吴越国建立",type:"found",involvedKingdoms:["wuYue"],significance:"high"},
  {year:920,title:"闽王审知去世",description:"闽王审知去世，闽国内部开始争权",type:"death",involvedKingdoms:["min"],significance:"medium"},
  {year:921,title:"贞明之战",description:"梁晋之间贞明之战爆发，后梁逐渐失利",type:"war",involvedKingdoms:["houLiang","houTang"],significance:"high"},
  {year:923,title:"后唐灭后梁",description:"晋王李存勖攻入汴梁，梁末帝朱友贞自杀，后梁亡",type:"destroy",involvedKingdoms:["houLiang","houTang"],significance:"high"},

  // 后唐
  {year:923,title:"李存勖建后唐",description:"李存勖在魏州称帝，灭后梁，以光复唐朝为号召",type:"found",involvedKingdoms:["houTang"],significance:"high"},
  {year:924,title:"荆南建立",description:"高季兴被后唐封为南平王，荆南国建立",type:"found",involvedKingdoms:["jingNan"],significance:"medium"},
  {year:925,title:"后唐灭前蜀",description:"郭崇韬率军六万灭前蜀，王衍投降",type:"war",involvedKingdoms:["houTang","qianShu"],significance:"high"},
  {year:926,title:"兴教门之变",description:"唐庄宗中流箭而死，李嗣源入洛阳称帝",type:"death",involvedKingdoms:["houTang"],significance:"high"},
  {year:927,title:"马殷受封",description:"后唐封马殷为楚国王，楚国正式立国",type:"politics",involvedKingdoms:["chu","houTang"],significance:"medium"},
  {year:928,title:"唐明宗改革",description:"唐明宗在位期间改革弊政，出现小康局面",type:"politics",involvedKingdoms:["houTang"],significance:"medium"},
  {year:929,title:"徐温专权",description:"杨吴权臣徐温掌握朝政",type:"politics",involvedKingdoms:["wu"],significance:"medium"},
  {year:930,title:"后唐稳定",description:"后唐在明宗统治下保持稳定",type:"politics",involvedKingdoms:["houTang"],significance:"low"},
  {year:931,title:"后唐经济发展",description:"后唐经济有所恢复",type:"economy",involvedKingdoms:["houTang"],significance:"low"},
  {year:933,title:"闽国内乱",description:"闽国王延禀被杀，闽国内乱开始",type:"politics",involvedKingdoms:["min"],significance:"medium"},
  {year:934,title:"孟知祥建后蜀",description:"孟知祥在成都称帝，建立后蜀",type:"found",involvedKingdoms:["houShu"],significance:"high"},
  {year:935,title:"闽国内战",description:"闽国王位争夺激烈，内战不断",type:"war",involvedKingdoms:["min"],significance:"medium"},
  {year:936,title:"石敬瑭叛",description:"太原节度使石敬瑭勾结契丹，叛后唐",type:"war",involvedKingdoms:["houTang","liao"],significance:"high"},
  {year:936,title:"后晋灭后唐",description:"石敬瑭借契丹兵攻入洛阳，唐末帝自焚，后唐亡",type:"destroy",involvedKingdoms:["houTang","houJin","liao"],significance:"high"},

  // 后晋
  {year:936,title:"后晋建都",description:"石敬瑭在汴梁建立后晋，成为儿皇帝",type:"found",involvedKingdoms:["houJin"],significance:"high"},
  {year:937,title:"李昪建南唐",description:"徐知诰废杨溥，在金陵建立南唐",type:"found",involvedKingdoms:["nanTang"],significance:"high"},
  {year:938,title:"南唐灭闽",description:"南唐发兵灭闽国，闽亡",type:"war",involvedKingdoms:["nanTang","min"],significance:"high"},
  {year:939,title:"南唐与吴越",description:"南唐与吴越关系紧张",type:"diplomacy",involvedKingdoms:["nanTang","wuYue"],significance:"medium"},
  {year:940,title:"南唐平楚",description:"南唐趁机平定楚国，扩大疆域",type:"war",involvedKingdoms:["nanTang","chu"],significance:"high"},
  {year:941,title:"南唐经济繁荣",description:"南唐经济文化高度繁荣",type:"culture",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:942,title:"后晋抗契丹",description:"后晋与契丹关系恶化，战争一触即发",type:"war",involvedKingdoms:["houJin","liao"],significance:"medium"},
  {year:943,title:"刘崇建北汉",description:"刘崇趁后周代汉之机在太原建立北汉",type:"found",involvedKingdoms:["beiHan"],significance:"high"},
  {year:944,title:"契丹入侵",description:"契丹大军南侵，后晋奋力抵抗",type:"war",involvedKingdoms:["houJin","liao"],significance:"high"},
  {year:945,title:"南唐灭闽",description:"南唐最终灭闽，闽国内乱被平定",type:"war",involvedKingdoms:["nanTang","min"],significance:"high"},
  {year:946,title:"契丹灭后晋",description:"契丹攻入汴梁，后晋亡，契丹在中原肆虐",type:"destroy",involvedKingdoms:["houJin","liao"],significance:"high"},
  {year:947,title:"刘知远建后汉",description:"刘知远在太原称帝，建立后汉，随即攻入汴梁",type:"found",involvedKingdoms:["houHan"],significance:"high"},

  // 后汉
  {year:947,title:"后汉建国",description:"刘知远建立后汉，契丹被迫北撤",type:"found",involvedKingdoms:["houHan"],significance:"high"},
  {year:948,title:"后汉稳定",description:"刘知远病逝，刘承祐即位",type:"politics",involvedKingdoms:["houHan"],significance:"medium"},
  {year:949,title:"辽汉战争",description:"契丹与后汉发生边境冲突",type:"war",involvedKingdoms:["houHan","liao"],significance:"medium"},
  {year:950,title:"郭威兵变",description:"邺都郭威发动兵变，率军南下攻汴梁",type:"war",involvedKingdoms:["houHan","houZhou"],significance:"high"},
  {year:951,title:"后周代汉",description:"郭威攻入汴梁，建立后周，后汉亡",type:"destroy",involvedKingdoms:["houHan","houZhou"],significance:"high"},

  // 后周
  {year:951,title:"后周建立",description:"郭威称帝，建立后周",type:"found",involvedKingdoms:["houZhou"],significance:"high"},
  {year:952,title:"后周改革",description:"郭威推行改革，减免赋税",type:"politics",involvedKingdoms:["houZhou"],significance:"medium"},
  {year:953,title:"周世宗即位",description:"郭威养子柴荣即位，是为周世宗",type:"politics",involvedKingdoms:["houZhou"],significance:"high"},
  {year:954,title:"高平之战",description:"周世宗柴荣亲征，在高平大败北汉与契丹联军",type:"war",involvedKingdoms:["houZhou","beiHan","liao"],significance:"high"},
  {year:955,title:"禁军改革",description:"柴荣整顿禁军，削弱藩镇势力",type:"politics",involvedKingdoms:["houZhou"],significance:"medium"},
  {year:956,title:"南征南唐",description:"柴荣第一次南征，夺取南唐江北地区",type:"war",involvedKingdoms:["houZhou","nanTang"],significance:"high"},
  {year:957,title:"再征南唐",description:"柴荣第二次南征，扩大战果",type:"war",involvedKingdoms:["houZhou","nanTang"],significance:"medium"},
  {year:958,title:"南唐割江北",description:"柴荣第三次南征，南唐被迫割让江北十四州",type:"diplomacy",involvedKingdoms:["houZhou","nanTang"],significance:"high"},
  {year:959,title:"北伐契丹",description:"柴荣北伐契丹，收复部分燕云地区",type:"war",involvedKingdoms:["houZhou","liao"],significance:"high"},
  {year:959,title:"柴荣去世",description:"柴荣在北伐途中病倒，返回汴梁后去世",type:"death",involvedKingdoms:["houZhou"],significance:"high"},
  {year:960,title:"陈桥兵变",description:"赵匡胤在陈桥驿发动兵变，黄袍加身，建立北宋",type:"found",involvedKingdoms:["houZhou"],significance:"high"},
  {year:960,title:"后周亡",description:"柴宗训被迫禅位，后周亡",type:"destroy",involvedKingdoms:["houZhou"],significance:"high"},

  // 北宋统一
  {year:962,title:"宋攻荆南",description:"宋太祖命慕容延钊攻南唐，借道荆南",type:"war",involvedKingdoms:["jingNan"],significance:"high"},
  {year:963,title:"荆南归宋",description:"宋军假道荆南，高继冲被迫纳土归宋，荆南亡",type:"destroy",involvedKingdoms:["jingNan"],significance:"high"},
  {year:964,title:"宋灭后蜀",description:"宋太祖命王全斌攻后蜀，孟昶投降，后蜀亡",type:"destroy",involvedKingdoms:["houShu"],significance:"high"},
  {year:965,title:"南汉亡",description:"宋太祖命潘美攻南汉，刘鋹投降，南汉亡",type:"destroy",involvedKingdoms:["nanHan"],significance:"high"},
  {year:970,title:"宋攻南唐",description:"宋太祖命曹彬攻南唐",type:"war",involvedKingdoms:["nanTang"],significance:"high"},
  {year:971,title:"南唐亡",description:"宋军攻入金陵，李煜投降，南唐亡",type:"destroy",involvedKingdoms:["nanTang"],significance:"high"},
  {year:975,title:"吴越助宋",description:"吴越钱弘俶发兵助宋攻南唐",type:"war",involvedKingdoms:["wuYue","nanTang"],significance:"medium"},
  {year:976,title:"金匮之盟",description:"宋太祖与赵普订金匮之盟",type:"politics",involvedKingdoms:[],significance:"medium"},
  {year:978,title:"吴越归宋",description:"钱弘俶纳土归宋，吴越亡",type:"destroy",involvedKingdoms:["wuYue"],significance:"high"},
  {year:979,title:"北汉亡",description:"宋太宗亲征，攻入太原，北汉亡，十国全灭",type:"destroy",involvedKingdoms:["beiHan"],significance:"high"},

  // 唐末黄巢系列
  {year:874,title:"王仙芝起义",description:"王仙芝在濮州率众起事，点燃唐末农民起义烈火",type:"war",involvedKingdoms:[],significance:"high"},
  {year:875,title:"黄巢响应",description:"黄巢率众响应王仙芝，起义军势力扩大",type:"war",involvedKingdoms:[],significance:"high"},
  {year:876,title:"王仙芝南征",description:"王仙芝率军南下转战各地",type:"war",involvedKingdoms:[],significance:"medium"},
  {year:877,title:"王仙芝战死",description:"王仙芝在连州战败身亡",type:"war",involvedKingdoms:[],significance:"high"},
  {year:878,title:"黄巢称王",description:"黄巢自称冲天大将军，率军转战江南",type:"war",involvedKingdoms:[],significance:"high"},
  {year:879,title:"黄巢攻广州",description:"黄巢率军攻占广州",type:"war",involvedKingdoms:[],significance:"medium"},
  {year:881,title:"大齐建立",description:"黄巢在长安建立大齐政权，年号金统",type:"found",involvedKingdoms:[],significance:"high"},
  {year:882,title:"唐军反攻",description:"唐诸镇兵马反攻长安，黄巢退出",type:"war",involvedKingdoms:[],significance:"medium"},
  {year:883,title:"黄巢东撤",description:"黄巢率军东撤，攻入蔡州",type:"war",involvedKingdoms:[],significance:"medium"},
  {year:885,title:"黄巢再起",description:"黄巢复出攻占汴州",type:"war",involvedKingdoms:[],significance:"medium"},

  // 后梁更多事件
  {year:907,title:"朱温封王",description:"朱温被封为梁王，势力称霸中原",type:"politics",involvedKingdoms:["houLiang"],significance:"medium"},
  {year:908,title:"晋梁对峙",description:"后梁与晋国在黄河两岸形成对峙",type:"war",involvedKingdoms:["houLiang","houTang"],significance:"medium"},
  {year:909,title:"后梁经济恢复",description:"朱温推行轻徭薄赋，中原经济有所恢复",type:"economy",involvedKingdoms:["houLiang"],significance:"low"},
  {year:910,title:"梁军北进",description:"后梁军北进河北，与晋军冲突",type:"war",involvedKingdoms:["houLiang","houTang"],significance:"medium"},
  {year:911,title:"后梁外交",description:"后梁与吴国、前蜀等国交往",type:"diplomacy",involvedKingdoms:["houLiang","wu","qianShu"],significance:"low"},
  {year:913,title:"朱友珪弑父",description:"朱友珪弑杀朱温后自立为帝",type:"death",involvedKingdoms:["houLiang"],significance:"high"},
  {year:914,title:"梁晋河南之战",description:"梁晋在河南地区展开激战",type:"war",involvedKingdoms:["houLiang","houTang"],significance:"medium"},
  {year:916,title:"后梁失邢洺",description:"晋军夺取邢州、洺州，后梁河北防线崩溃",type:"war",involvedKingdoms:["houLiang","houTang"],significance:"high"},
  {year:917,title:"后梁军改革",description:"梁末帝改革军事制度",type:"politics",involvedKingdoms:["houLiang"],significance:"low"},
  {year:918,title:"后梁内乱",description:"后梁内部权力斗争加剧",type:"politics",involvedKingdoms:["houLiang"],significance:"medium"},
  {year:919,title:"梁晋黄河之战",description:"梁晋在黄河沿线激战",type:"war",involvedKingdoms:["houLiang","houTang"],significance:"medium"},
  {year:920,title:"梁末帝用人",description:"梁末帝朱友贞重用赵岩等",type:"politics",involvedKingdoms:["houLiang"],significance:"low"},
  {year:921,title:"梁晋郓州之战",description:"梁晋争夺郓州",type:"war",involvedKingdoms:["houLiang","houTang"],significance:"medium"},
  {year:922,title:"后梁困境",description:"后梁两面作战，处境艰难",type:"war",involvedKingdoms:["houLiang","houTang"],significance:"medium"},

  // 后唐更多事件
  {year:923,title:"后唐定都洛阳",description:"李存勖迁都洛阳",type:"politics",involvedKingdoms:["houTang"],significance:"medium"},
  {year:924,title:"后唐灭梁",description:"后唐彻底灭亡后梁，统一中原",type:"war",involvedKingdoms:["houTang","houLiang"],significance:"high"},
  {year:925,title:"后唐治理",description:"唐庄宗推行休养生息政策",type:"politics",involvedKingdoms:["houTang"],significance:"medium"},
  {year:926,title:"伶人乱政",description:"唐庄宗宠信伶人，导致朝政混乱",type:"politics",involvedKingdoms:["houTang"],significance:"medium"},
  {year:927,title:"孟知祥入蜀",description:"孟知祥任西川节度使，经营蜀地",type:"politics",involvedKingdoms:["houTang","houShu"],significance:"medium"},
  {year:928,title:"后唐文化繁荣",description:"后唐戏曲艺术达到高峰",type:"culture",involvedKingdoms:["houTang"],significance:"medium"},
  {year:929,title:"徐温去世",description:"杨吴权臣徐温去世，权力归于养子徐知诰",type:"death",involvedKingdoms:["wu","nanTang"],significance:"high"},
  {year:930,title:"闽楚边境冲突",description:"闽国与楚国发生边境冲突",type:"war",involvedKingdoms:["min","chu"],significance:"medium"},
  {year:931,title:"后唐平定卢龙",description:"后唐平定卢龙节度使叛乱",type:"war",involvedKingdoms:["houTang"],significance:"medium"},
  {year:932,title:"钱镠去世",description:"吴越王钱镠去世，子钱元瓘即位",type:"death",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:933,title:"唐明宗逝世",description:"唐明宗李嗣源病逝",type:"death",involvedKingdoms:["houTang"],significance:"high"},
  {year:934,title:"李从厚即位",description:"李从厚继位，是为唐闵帝",type:"politics",involvedKingdoms:["houTang"],significance:"medium"},
  {year:935,title:"徐知诰辅政",description:"徐知诰掌握杨吴大权",type:"politics",involvedKingdoms:["wu","nanTang"],significance:"medium"},

  // 后晋更多事件
  {year:936,title:"石敬瑭受封",description:"石敬瑭被封为代州刺史",type:"politics",involvedKingdoms:["houTang"],significance:"low"},
  {year:937,title:"南唐建元",description:"南唐改元升元",type:"politics",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:938,title:"燕云十六州移交",description:"燕云十六州正式移交契丹",type:"diplomacy",involvedKingdoms:["houJin","liao"],significance:"high"},
  {year:939,title:"后晋与高丽",description:"后晋与高丽开始交往",type:"diplomacy",involvedKingdoms:["houJin"],significance:"low"},
  {year:940,title:"闽国内部争位",description:"闽国王延钧与王延禀争位",type:"politics",involvedKingdoms:["min"],significance:"medium"},
  {year:941,title:"钱元瓘改革",description:"吴越王钱元瓘进行政治改革",type:"politics",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:942,title:"南唐灭闽失败",description:"南唐首次攻闽失败",type:"war",involvedKingdoms:["nanTang","min"],significance:"medium"},
  {year:943,title:"南唐经济发展",description:"南唐经济持续繁荣",type:"economy",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:944,title:"后晋备战",description:"后晋积极备战抵御契丹",type:"war",involvedKingdoms:["houJin"],significance:"medium"},
  {year:945,title:"闽国分裂",description:"闽国分裂为殷国和闽国",type:"war",involvedKingdoms:["min"],significance:"medium"},

  // 后汉更多事件
  {year:947,title:"契丹北撤",description:"契丹灭后晋后被迫北撤",type:"war",involvedKingdoms:["liao","houJin"],significance:"high"},
  {year:948,title:"后汉稳定",description:"刘知远稳定后汉统治",type:"politics",involvedKingdoms:["houHan"],significance:"medium"},
  {year:949,title:"后汉经济",description:"后汉经济恢复发展",type:"economy",involvedKingdoms:["houHan"],significance:"low"},
  {year:950,title:"刘承祐杀臣",description:"刘承祐杀杨邠、王章等功臣",type:"death",involvedKingdoms:["houHan"],significance:"high"},
  {year:950,title:"郭威起兵",description:"郭威在邺都起兵反抗后汉",type:"war",involvedKingdoms:["houHan","houZhou"],significance:"high"},
  {year:951,title:"后汉灭亡",description:"郭威攻入汴梁，后汉正式灭亡",type:"destroy",involvedKingdoms:["houHan","houZhou"],significance:"high"},

  // 后周更多事件
  {year:951,title:"后周建国",description:"郭威称帝建立后周",type:"found",involvedKingdoms:["houZhou"],significance:"high"},
  {year:952,title:"后周稳定",description:"后周政权逐渐稳定",type:"politics",involvedKingdoms:["houZhou"],significance:"medium"},
  {year:953,title:"后周经济恢复",description:"后周经济得到恢复发展",type:"economy",involvedKingdoms:["houZhou"],significance:"medium"},
  {year:954,title:"高平大捷",description:"柴荣在高平大败北汉契丹联军",type:"war",involvedKingdoms:["houZhou","beiHan","liao"],significance:"high"},
  {year:954,title:"后周军事改革",description:"柴荣整顿禁军，裁撤老弱",type:"politics",involvedKingdoms:["houZhou"],significance:"medium"},
  {year:955,title:"后周灭佛",description:"柴荣下令灭佛，打击寺院经济",type:"politics",involvedKingdoms:["houZhou"],significance:"medium"},
  {year:956,title:"南唐求和",description:"南唐向后周请和",type:"diplomacy",involvedKingdoms:["nanTang","houZhou"],significance:"medium"},
  {year:957,title:"后周水利",description:"后周兴修水利，发展农业",type:"economy",involvedKingdoms:["houZhou"],significance:"medium"},
  {year:958,title:"南唐称臣",description:"南唐主李璟向后周称臣",type:"diplomacy",involvedKingdoms:["nanTang","houZhou"],significance:"high"},
  {year:959,title:"后周北伐",description:"柴荣率军北伐契丹",type:"war",involvedKingdoms:["houZhou","liao"],significance:"high"},
  {year:959,title:"收复二关",description:"后周收复益津关、瓦桥关",type:"war",involvedKingdoms:["houZhou","liao"],significance:"high"},
  {year:959,title:"柴荣病逝",description:"柴荣在北伐途中病逝",type:"death",involvedKingdoms:["houZhou"],significance:"high"},
  {year:960,title:"陈桥兵变",description:"赵匡胤在陈桥驿被拥立为帝",type:"found",involvedKingdoms:["houZhou"],significance:"high"},
  {year:960,title:"北宋建立",description:"赵匡胤建立北宋",type:"found",involvedKingdoms:[],significance:"high"},

  // 南唐更多事件
  {year:937,title:"南唐建国",description:"李昪建立南唐",type:"found",involvedKingdoms:["nanTang"],significance:"high"},
  {year:938,title:"南唐统一江南",description:"南唐统一江淮地区",type:"war",involvedKingdoms:["nanTang","wu"],significance:"high"},
  {year:939,title:"南唐文化繁荣",description:"南唐诗词书画达到高峰",type:"culture",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:940,title:"闽国内乱加剧",description:"闽国王曦与朱文进争位",type:"war",involvedKingdoms:["min"],significance:"high"},
  {year:941,title:"南唐灭闽",description:"南唐趁机攻闽",type:"war",involvedKingdoms:["nanTang","min"],significance:"high"},
  {year:942,title:"楚国内乱",description:"楚国马希萼与马希旺争位",type:"war",involvedKingdoms:["chu"],significance:"medium"},
  {year:943,title:"南唐经济繁荣",description:"南唐成为十国中最繁荣的国家",type:"economy",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:943,title:"李昪去世",description:"南唐烈祖李昪去世",type:"death",involvedKingdoms:["nanTang"],significance:"high"},
  {year:944,title:"李璟即位",description:"李璟继位，是为南唐中主",type:"politics",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:945,title:"南唐攻闽",description:"南唐灭闽，闽国内乱",type:"war",involvedKingdoms:["nanTang","min"],significance:"high"},
  {year:946,title:"南唐疆域最大",description:"南唐疆域达到极盛",type:"politics",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:947,title:"南唐受契丹威胁",description:"契丹南下威胁南唐",type:"war",involvedKingdoms:["nanTang","liao"],significance:"medium"},
  {year:948,title:"南唐经济发达",description:"南唐经济高度发达",type:"economy",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:949,title:"南唐与后周",description:"南唐与后周开始对峙",type:"diplomacy",involvedKingdoms:["nanTang","houZhou"],significance:"medium"},
  {year:950,title:"南唐楚国交战",description:"南唐与楚国边境战争",type:"war",involvedKingdoms:["nanTang","chu"],significance:"medium"},
  {year:951,title:"南唐进攻楚国",description:"南唐趁机进攻楚国",type:"war",involvedKingdoms:["nanTang","chu"],significance:"high"},
  {year:952,title:"南唐平定湖南",description:"南唐基本平定楚国",type:"war",involvedKingdoms:["nanTang","chu"],significance:"high"},
  {year:953,title:"南唐文化高峰",description:"南唐词学达到高峰",type:"culture",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:954,title:"南唐抵御后周",description:"南唐抵御后周进攻",type:"war",involvedKingdoms:["nanTang","houZhou"],significance:"high"},
  {year:955,title:"南唐失江北",description:"后周夺取南唐江北十四州",type:"war",involvedKingdoms:["nanTang","houZhou"],significance:"high"},
  {year:956,title:"南唐称臣后周",description:"南唐向后周称臣",type:"diplomacy",involvedKingdoms:["nanTang","houZhou"],significance:"high"},
  {year:957,title:"南唐改革内政",description:"南唐李璟进行改革",type:"politics",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:958,title:"南唐失去荆楚",description:"南唐失去对荆楚的控制",type:"politics",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:959,title:"南唐防备北宋",description:"南唐防备北宋进攻",type:"war",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:960,title:"南唐与北宋",description:"南唐与北宋建立联系",type:"diplomacy",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:961,title:"李煜即位",description:"李煜继位，是为南唐后主",type:"politics",involvedKingdoms:["nanTang"],significance:"high"},
  {year:962,title:"南唐防御",description:"南唐加强国防",type:"politics",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:963,title:"北宋灭荆南",description:"北宋借道南唐灭荆南",type:"war",involvedKingdoms:["nanTang","jingNan"],significance:"high"},
  {year:964,title:"南唐抗宋",description:"南唐抵御北宋进攻",type:"war",involvedKingdoms:["nanTang"],significance:"high"},
  {year:965,title:"南唐求和北宋",description:"南唐向后宋求和",type:"diplomacy",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:966,title:"南唐内政",description:"李煜治国",type:"politics",involvedKingdoms:["nanTang"],significance:"low"},
  {year:967,title:"南唐文化建设",description:"南唐文化建设",type:"culture",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:968,title:"南唐经济衰退",description:"南唐经济开始衰退",type:"economy",involvedKingdoms:["nanTang"],significance:"medium"},
  {year:969,title:"南唐外交",description:"南唐寻求外交突破",type:"diplomacy",involvedKingdoms:["nanTang"],significance:"low"},
  {year:970,title:"南唐最后抗争",description:"南唐最后的抗宋斗争",type:"war",involvedKingdoms:["nanTang"],significance:"high"},
  {year:971,title:"南唐灭亡",description:"北宋灭南唐，李煜被俘",type:"destroy",involvedKingdoms:["nanTang"],significance:"high"},

  // 吴越更多事件
  {year:895,title:"钱镠占据杭州",description:"钱镠占据杭州，开始经营吴越",type:"war",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:896,title:"钱镠攻占越州",description:"钱镠攻占越州，统一浙江",type:"war",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:902,title:"钱镠封王",description:"钱镠被封为越王",type:"politics",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:907,title:"吴越建国",description:"钱镠被封为吴越王，吴越国建立",type:"found",involvedKingdoms:["wuYue"],significance:"high"},
  {year:908,title:"钱镠修海塘",description:"钱镠修筑捍海塘",type:"economy",involvedKingdoms:["wuYue"],significance:"high"},
  {year:910,title:"吴越经济发展",description:"吴越国经济发展",type:"economy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:912,title:"吴越与后梁",description:"吴越与后梁保持友好",type:"diplomacy",involvedKingdoms:["wuYue","houLiang"],significance:"low"},
  {year:913,title:"吴越文化发展",description:"吴越国文化开始发展",type:"culture",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:914,title:"吴越对外交流",description:"吴越与日本、高丽交往",type:"diplomacy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:915,title:"吴越佛教发展",description:"吴越国佛教建筑兴起",type:"culture",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:916,title:"钱元瓘即位",description:"钱元瓘继位",type:"politics",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:917,title:"吴越与后唐",description:"吴越向后唐称臣",type:"diplomacy",involvedKingdoms:["wuYue","houTang"],significance:"medium"},
  {year:918,title:"吴越经济发展",description:"吴越国经济繁荣",type:"economy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:919,title:"吴越与南唐",description:"吴越与南唐关系",type:"diplomacy",involvedKingdoms:["wuYue","nanTang"],significance:"medium"},
  {year:920,title:"吴越海外贸易",description:"吴越海外贸易发达",type:"economy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:921,title:"钱元瓘改革",description:"钱元瓘进行政治改革",type:"politics",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:922,title:"吴越水利建设",description:"吴越兴修水利",type:"economy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:923,title:"吴越与后晋",description:"吴越向后晋称臣",type:"diplomacy",involvedKingdoms:["wuYue","houJin"],significance:"medium"},
  {year:924,title:"吴越社会稳定",description:"吴越国保持稳定",type:"politics",involvedKingdoms:["wuYue"],significance:"low"},
  {year:925,title:"吴越经济发展",description:"吴越经济持续增长",type:"economy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:926,title:"钱元瓘去世",description:"钱元瓘去世",type:"death",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:927,title:"钱佐即位",description:"钱元瓘去世，钱佐继位",type:"politics",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:928,title:"吴越与闽",description:"吴越与闽国关系",type:"diplomacy",involvedKingdoms:["wuYue","min"],significance:"medium"},
  {year:929,title:"吴越社会稳定",description:"吴越保持安定",type:"politics",involvedKingdoms:["wuYue"],significance:"low"},
  {year:930,title:"吴越文化繁荣",description:"吴越诗词文化繁荣",type:"culture",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:931,title:"吴越与南唐关系",description:"吴越与南唐关系紧张",type:"diplomacy",involvedKingdoms:["wuYue","nanTang"],significance:"medium"},
  {year:932,title:"钱元瓘去世",description:"钱元瓘病逝",type:"death",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:933,title:"钱元瓘即位",description:"钱元瓘继位",type:"politics",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:934,title:"吴越与后汉",description:"吴越向后汉称臣",type:"diplomacy",involvolvedKingdoms:["wuYue","houHan"],significance:"medium"},
  {year:935,title:"吴越对外交流",description:"吴越发展对外交流",type:"diplomacy",involvedKingdoms:["wuYue"],significance:"low"},
  {year:936,title:"吴越与后周",description:"吴越向后周称臣",type:"diplomacy",involvedKingdoms:["wuYue","houZhou"],significance:"medium"},
  {year:937,title:"吴越经济发展",description:"吴越经济高度繁荣",type:"economy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:938,title:"钱元瓘去世",description:"钱元瓘去世",type:"death",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:939,title:"钱佐即位",description:"钱佐继位",type:"politics",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:940,title:"吴越抗闽",description:"吴越抵御闽国进攻",type:"war",involvedKingdoms:["wuYue","min"],significance:"medium"},
  {year:941,title:"吴越社会稳定",description:"吴越国内安定",type:"politics",involvedKingdoms:["wuYue"],significance:"low"},
  {year:942,title:"吴越经济繁荣",description:"吴越经济持续繁荣",type:"economy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:943,title:"吴越与南唐",description:"吴越与南唐关系改善",type:"diplomacy",involvedKingdoms:["wuYue","nanTang"],significance:"medium"},
  {year:944,title:"吴越与契丹",description:"吴越与契丹开始交往",type:"diplomacy",involvedKingdoms:["wuYue","liao"],significance:"low"},
  {year:945,title:"吴越经济发展",description:"吴越经济继续发展",type:"economy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:946,title:"吴越与后汉",description:"吴越向后汉称臣",type:"diplomacy",involvedKingdoms:["wuYue","houHan"],significance:"medium"},
  {year:947,title:"钱佐去世",description:"钱佐去世",type:"death",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:948,title:"钱倧即位",description:"钱倧继位",type:"politics",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:949,title:"钱倧被废",description:"钱倧被弟弟钱俶取代",type:"politics",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:950,title:"钱俶即位",description:"钱俶成为吴越王",type:"politics",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:951,title:"吴越向后周称臣",description:"吴越向后周称臣",type:"diplomacy",involvedKingdoms:["wuYue","houZhou"],significance:"medium"},
  {year:952,title:"吴越与北宋",description:"吴越与北宋建立联系",type:"diplomacy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:953,title:"吴越经济发展",description:"吴越经济持续繁荣",type:"economy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:954,title:"吴越社会稳定",description:"吴越保持安定",type:"politics",involvedKingdoms:["wuYue"],significance:"low"},
  {year:955,title:"吴越佛教建筑",description:"吴越佛教建筑发展",type:"culture",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:956,title:"吴越与北宋",description:"吴越与北宋关系密切",type:"diplomacy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:957,title:"吴越经济繁荣",description:"吴越经济高度发达",type:"economy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:958,title:"吴越文化高峰",description:"吴越文化达到高峰",type:"culture",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:959,title:"吴越与北宋联盟",description:"吴越与北宋联盟对抗南唐",type:"diplomacy",involvedKingdoms:["wuYue","nanTang"],significance:"high"},
  {year:960,title:"吴越助宋攻南唐",description:"钱俶发兵助宋攻南唐",type:"war",involvedKingdoms:["wuYue","nanTang"],significance:"high"},
  {year:961,title:"吴越独立发展",description:"吴越国独立发展",type:"politics",involvedKingdoms:["wuYue"],significance:"low"},
  {year:962,title:"吴越与宋关系",description:"吴越与北宋关系友好",type:"diplomacy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:963,title:"吴越经济发展",description:"吴越经济持续增长",type:"economy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:964,title:"吴越社会稳定",description:"吴越保持安定",type:"politics",involvedKingdoms:["wuYue"],significance:"low"},
  {year:965,title:"吴越与北宋",description:"吴越与北宋关系密切",type:"diplomacy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:966,title:"吴越文化繁荣",description:"吴越诗词文化繁荣",type:"culture",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:967,title:"吴越经济发展",description:"吴越经济高度繁荣",type:"economy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:968,title:"吴越社会稳定",description:"吴越保持安定",type:"politics",involvedKingdoms:["wuYue"],significance:"low"},
  {year:969,title:"吴越与北宋",description:"吴越与北宋关系友好",type:"diplomacy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:970,title:"吴越助宋",description:"吴越助宋攻南唐",type:"war",involvedKingdoms:["wuYue","nanTang"],significance:"high"},
  {year:971,title:"吴越与北宋",description:"吴越与北宋关系密切",type:"diplomacy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:972,title:"吴越经济发展",description:"吴越经济持续繁荣",type:"economy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:973,title:"吴越社会稳定",description:"吴越保持安定",type:"politics",involvedKingdoms:["wuYue"],significance:"low"},
  {year:974,title:"吴越与北宋",description:"吴越与北宋关系友好",type:"diplomacy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:975,title:"吴越助宋攻唐",description:"钱俶发兵助宋灭南唐",type:"war",involvedKingdoms:["wuYue","nanTang"],significance:"high"},
  {year:976,title:"吴越经济发展",description:"吴越经济持续繁荣",type:"economy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:977,title:"吴越与北宋",description:"吴越与北宋关系密切",type:"diplomacy",involvedKingdoms:["wuYue"],significance:"medium"},
  {year:978,title:"吴越归宋",description:"钱俶纳土归宋，吴越亡",type:"destroy",involvedKingdoms:["wuYue"],significance:"high"},

  // 闽国更多事件
  {year:885,title:"王绪占据福建",description:"王绪率军占据福建",type:"war",involvedKingdoms:["min"],significance:"medium"},
  {year:886,title:"王潮占据泉州",description:"王潮占据泉州，开始经营闽地",type:"war",involvedKingdoms:["min"],significance:"medium"},
  {year:887,title:"王潮统一福建",description:"王潮基本统一福建",type:"war",involvedKingdoms:["min"],significance:"medium"},
  {year:893,title:"王潮被封节度使",description:"王潮被唐封为威武军节度使",type:"politics",involvedKingdoms:["min"],significance:"medium"},
  {year:897,title:"王审知继位",description:"王审知继任威武军节度使",type:"politics",involvedKingdoms:["min"],significance:"medium"},
  {year:900,title:"闽国经济发展",description:"闽国经济开始发展",type:"economy",involvedKingdoms:["min"],significance:"medium"},
  {year:902,title:"闽国社会稳定",description:"闽国保持安定",type:"politics",involvedKingdoms:["min"],significance:"low"},
  {year:905,title:"王审知治闽",description:"王审知治理闽国",type:"politics",involvedKingdoms:["min"],significance:"medium"},
  {year:909,title:"王审知封闽王",description:"王审知被后梁封为闽王",type:"politics",involvedKingdoms:["min"],significance:"medium"},
  {year:910,title:"闽国海外贸易",description:"闽国发展海外贸易",type:"economy",involvedKingdoms:["min"],significance:"medium"},
  {year:911,title:"闽国与南唐",description:"闽国与南唐关系",type:"diplomacy",involvedKingdoms:["min","nanTang"],significance:"medium"},
  {year:912,title:"王审知去世",description:"闽王王审知去世",type:"death",involvedKingdoms:["min"],significance:"high"},
  {year:913,title:"王延翰继位",description:"王审知之子王延翰继位",type:"politics",involvedKingdoms:["min"],significance:"medium"},
  {year:926,title:"王延钧杀兄",description:"王延钧杀死王延翰自立",type:"death",involvedKingdoms:["min"],significance:"high"},
  {year:927,title:"闽国内政",description:"王延钧巩固统治",type:"politics",involvedKingdoms:["min"],significance:"medium"},
  {year:928,title:"闽国经济发展",description:"闽国经济恢复发展",type:"economy",involvedKingdoms:["min"],significance:"medium"},
  {year:929,title:"闽国与吴越",description:"闽国与吴越关系紧张",type:"diplomacy",involvedKingdoms:["min","wuYue"],significance:"medium"},
  {year:930,title:"王延钧称帝",description:"王延钧在福州称帝，建立闽国",type:"found",involvedKingdoms:["min"],significance:"high"},
  {year:931,title:"闽国与南唐关系",description:"闽国与南唐关系",type:"diplomacy",involvedKingdoms:["min","nanTang"],significance:"medium"},
  {year:932,title:"闽国内乱",description:"闽国内部争权夺利",type:"politics",involvedKingdoms:["min"],significance:"medium"},
  {year:933,title:"闽国经济繁荣",description:"闽国经济有所发展",type:"economy",involvedKingdoms:["min"],significance:"medium"},
  {year:934,title:"闽国内部冲突",description:"闽国王族内部冲突",type:"war",involvedKingdoms:["min"],significance:"medium"},
  {year:935,title:"闽国分裂",description:"闽国分裂为两派",type:"politics",involvedKingdoms:["min"],significance:"medium"},
  {year:936,title:"王延禀攻闽",description:"王延禀率军攻福州",type:"war",involvedKingdoms:["min"],significance:"medium"},
  {year:937,title:"闽国内战",description:"闽国内战加剧",type:"war",involvedKingdoms:["min"],significance:"high"},
  {year:938,title:"王延钧被杀",description:"王延钧被儿子王继鹏杀死",type:"death",involvedKingdoms:["min"],significance:"high"},
  {year:939,title:"王继鹏继位",description:"王继鹏成为闽王",type:"politics",involvedKingdoms:["min"],significance:"medium"},
  {year:940,title:"闽国内乱",description:"闽国内乱不断",type:"war",involvedKingdoms:["min"],significance:"high"},
  {year:941,title:"闽国经济衰退",description:"闽国经济因内乱衰退",type:"economy",involvedKingdoms:["min"],significance:"medium"},
  {year:942,title:"王继鹏被杀",description:"王继鹏被朱文进杀死",type:"death",involvedKingdoms:["min"],significance:"high"},
  {year:943,title:"朱文进称闽王",description:"朱文进杀王继鹏后自立",type:"politics",involvedKingdoms:["min"],significance:"medium"},
  {year:944,title:"闽国分裂",description:"闽国分裂为多个势力",type:"war",involvedKingdoms:["min"],significance:"high"},
  {year:945,title:"南唐灭闽",description:"南唐趁机灭闽",type:"war",involvedKingdoms:["nanTang","min"],significance:"high"},

  // 楚国更多事件
  {year:896,title:"马殷占据湖南",description:"马殷率军占据湖南",type:"war",involvedKingdoms:["chu"],significance:"medium"},
  {year:900,title:"马殷受封",description:"马殷被唐封为湖南节度使",type:"politics",involvedKingdoms:["chu"],significance:"medium"},
  {year:907,title:"马殷封楚王",description:"马殷被后梁封为楚王",type:"found",involvedKingdoms:["chu"],significance:"high"},
  {year:910,title:"楚国经济发展",description:"楚国茶叶贸易发展",type:"economy",involvedKingdoms:["chu"],significance:"medium"},
  {year:912,title:"楚国社会稳定",description:"楚国保持安定",type:"politics",involvedKingdoms:["chu"],significance:"low"},
  {year:913,title:"马殷去世",description:"马殷去世，子马希声继位",type:"death",involvedKingdoms:["chu"],significance:"medium"},
  {year:914,title:"马希声继位",description:"马希声继立",type:"politics",involvedKingdoms:["chu"],significance:"medium"},
  {year:916,title:"楚国与后唐",description:"楚国向后唐称臣",type:"diplomacy",involvedKingdoms:["chu","houTang"],significance:"medium"},
  {year:917,title:"马希声去世",description:"马希声去世",type:"death",involvedKingdoms:["chu"],significance:"medium"},
  {year:918,title:"马希范继位",description:"马希范继立为楚王",type:"politics",involvedKingdoms:["chu"],significance:"medium"},
  {year:920,title:"楚国经济繁荣",description:"楚国经济繁荣",type:"economy",involvedKingdoms:["chu"],significance:"medium"},
  {year:921,title:"楚国与南唐",description:"楚国与南唐关系紧张",type:"diplomacy",involvedKingdoms:["chu","nanTang"],significance:"medium"},
  {year:922,title:"楚国社会稳定",description:"楚国保持安定",type:"politics",involvedKingdoms:["chu"],significance:"low"},
  {year:923,title:"楚国与后晋",description:"楚国向后晋称臣",type:"diplomacy",involvedKingdoms:["chu","houJin"],significance:"medium"},
  {year:925,title:"楚国经济发展",description:"楚国经济持续发展",type:"economy",involvedKingdoms:["chu"],significance:"medium"},
  {year:926,title:"楚国与中原",description:"楚国与后唐关系",type:"diplomacy",involvedKingdoms:["chu","houTang"],significance:"medium"},
  {year:928,title:"马希范去世",description:"马希范去世",type:"death",involvedKingdoms:["chu"],significance:"medium"},
  {year:929,title:"马希广继位",description:"马希广继立",type:"politics",involvedKingdoms:["chu"],significance:"medium"},
  {year:930,title:"楚国与南汉",description:"楚国与南汉关系",type:"diplomacy",involvedKingdoms:["chu","nanHan"],significance:"medium"},
  {year:931,title:"楚国经济发展",description:"楚国经济稳定发展",type:"economy",involvedKingdoms:["chu"],significance:"medium"},
  {year:932,title:"楚国内乱",description:"马希萼与马希广争位",type:"war",involvedKingdoms:["chu"],significance:"high"},
  {year:933,title:"南唐干预楚国",description:"南唐干预楚国争位",type:"diplomacy",involvedKingdoms:["chu","nanTang"],significance:"high"},
  {year:934,title:"楚国分裂",description:"楚国分裂为两派",type:"war",involvedKingdoms:["chu"],significance:"high"},
  {year:935,title:"楚国内战加剧",description:"楚国内战加剧",type:"war",involvedKingdoms:["chu"],significance:"high"},
  {year:936,title:"南唐平定楚国",description:"南唐趁机平定楚国",type:"war",involvedKingdoms:["chu","nanTang"],significance:"high"},
  {year:937,title:"楚国灭亡",description:"南唐灭楚，楚国亡",type:"destroy",involvedKingdoms:["chu","nanTang"],significance:"high"},

  // 南汉更多事件
  {year:904,title:"刘隐占据广州",description:"刘隐占据广州",type:"war",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:907,title:"刘隐被封王",description:"刘隐被后梁封为南海王",type:"politics",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:910,title:"南汉经济发展",description:"南汉经济开始发展",type:"economy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:911,title:"刘隐去世",description:"刘隐去世，弟刘龑继位",type:"death",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:912,title:"刘龑继位",description:"刘龑继立",type:"politics",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:915,title:"南汉与楚关系",description:"南汉与楚国交往",type:"diplomacy",involvedKingdoms:["nanHan","chu"],significance:"medium"},
  {year:917,title:"刘龑称帝",description:"刘龠在广州称帝，建立南汉",type:"found",involvedKingdoms:["nanHan"],significance:"high"},
  {year:918,title:"南汉经济发展",description:"南汉经济恢复发展",type:"economy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:920,title:"南汉社会稳定",description:"南汉保持安定",type:"politics",involvedKingdoms:["nanHan"],significance:"low"},
  {year:921,title:"南汉与闽",description:"南汉与闽国关系",type:"diplomacy",involvedKingdoms:["nanHan","min"],significance:"medium"},
  {year:922,title:"南汉经济发展",description:"南汉经济持续发展",type:"economy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:925,title:"南汉文化发展",description:"南汉文化开始发展",type:"culture",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:926,title:"刘龑去世",description:"刘龠去世，子刘玢继位",type:"death",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:927,title:"刘玢继位",description:"刘玢继立",type:"politics",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:928,title:"南汉内乱",description:"刘玢被杀，刘晟继位",type:"death",involvedKingdoms:["nanHan"],significance:"high"},
  {year:929,title:"刘晟巩固统治",description:"刘晟铲除异己",type:"politics",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:930,title:"南汉经济发展",description:"南汉经济有所发展",type:"economy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:931,title:"南汉社会稳定",description:"南汉保持安定",type:"politics",involvedKingdoms:["nanHan"],significance:"low"},
  {year:932,title:"南汉与北宋",description:"南汉与北宋建立联系",type:"diplomacy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:933,title:"南汉经济发展",description:"南汉经济持续繁荣",type:"economy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:934,title:"南汉与楚国",description:"南汉干预楚国事务",type:"diplomacy",involvedKingdoms:["nanHan","chu"],significance:"medium"},
  {year:935,title:"南汉对外扩张",description:"南汉开始对外扩张",type:"war",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:936,title:"南汉经济发展",description:"南汉经济继续发展",type:"economy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:937,title:"南汉与闽",description:"南汉与闽国关系",type:"diplomacy",involvedKingdoms:["nanHan","min"],significance:"medium"},
  {year:938,title:"刘晟去世",description:"刘晟去世，子刘鋹继位",type:"death",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:939,title:"刘鋹继位",description:"刘鋹继立",type:"politics",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:940,title:"南汉内政混乱",description:"刘鋹宠信宦官，朝政混乱",type:"politics",involvedKingdoms:["nanHan"],significance:"high"},
  {year:941,title:"南汉经济发展",description:"南汉经济有所发展",type:"economy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:942,title:"南汉政治黑暗",description:"南汉政治日益黑暗",type:"politics",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:943,title:"南汉与宋",description:"南汉与北宋关系",type:"diplomacy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:944,title:"南汉经济发展",description:"南汉经济继续发展",type:"economy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:945,title:"南汉社会稳定",description:"南汉保持表面安定",type:"politics",involvedKingdoms:["nanHan"],significance:"low"},
  {year:946,title:"南汉与北宋",description:"南汉与北宋关系紧张",type:"diplomacy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:947,title:"南汉经济发展",description:"南汉经济有所发展",type:"economy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:948,title:"南汉政治黑暗",description:"南汉政治愈发黑暗",type:"politics",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:949,title:"南汉与宋战争",description:"南汉与北宋发生战争",type:"war",involvedKingdoms:["nanHan"],significance:"high"},
  {year:950,title:"南汉经济发展",description:"南汉经济持续衰退",type:"economy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:951,title:"南汉与北宋",description:"南汉与北宋关系紧张",type:"diplomacy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:952,title:"南汉社会稳定",description:"南汉保持安定假象",type:"politics",involvedKingdoms:["nanHan"],significance:"low"},
  {year:953,title:"南汉经济发展",description:"南汉经济停滞",type:"economy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:954,title:"南汉与北宋",description:"南汉与北宋关系",type:"diplomacy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:955,title:"南汉政治",description:"南汉政治黑暗",type:"politics",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:956,title:"南汉经济发展",description:"南汉经济衰退",type:"economy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:957,title:"南汉与宋关系",description:"南汉与北宋关系紧张",type:"diplomacy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:958,title:"南汉政治黑暗",description:"南汉政治极度黑暗",type:"politics",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:959,title:"南汉经济发展",description:"南汉经济持续衰退",type:"economy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:960,title:"南汉与北宋",description:"南汉与北宋建立联系",type:"diplomacy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:961,title:"南汉社会稳定",description:"南汉保持安定",type:"politics",involvedKingdoms:["nanHan"],significance:"low"},
  {year:962,title:"南汉经济发展",description:"南汉经济衰退",type:"economy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:963,title:"南汉与北宋",description:"南汉与北宋关系紧张",type:"diplomacy",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:964,title:"南汉政治黑暗",description:"南汉政治愈发黑暗",type:"politics",involvedKingdoms:["nanHan"],significance:"medium"},
  {year:965,title:"南汉被北宋所灭",description:"宋灭南汉，刘鋹投降",type:"destroy",involvedKingdoms:["nanHan"],significance:"high"},

  // 前蜀更多事件
  {year:891,title:"王建占据成都",description:"王建率军占据成都",type:"war",involvedKingdoms:["qianShu"],significance:"medium"},
  {year:893,title:"王建被封节度使",description:"王建被唐封为西川节度使",type:"politics",involvedKingdoms:["qianShu"],significance:"medium"},
  {year:897,title:"王建占据两川",description:"王建占据西川、东川",type:"war",involvedKingdoms:["qianShu"],significance:"medium"},
  {year:900,title:"前蜀经济发展",description:"前蜀经济开始发展",type:"economy",involvedKingdoms:["qianShu"],significance:"medium"},
  {year:903,title:"王建受封蜀王",description:"王建被封为蜀王",type:"politics",involvedKingdoms:["qianShu"],significance:"medium"},
  {year:907,title:"王建建前蜀",description:"王建在成都称帝，建立前蜀",type:"found",involvedKingdoms:["qianShu"],significance:"high"},
  {year:908,title:"前蜀经济发展",description:"前蜀经济恢复发展",type:"economy",involvedKingdoms:["qianShu"],significance:"medium"},
  {year:910,title:"前蜀社会稳定",description:"前蜀保持安定",type:"politics",involvedKingdoms:["qianShu"],significance:"low"},
  {year:911,title:"前蜀与后梁",description:"前蜀与后梁关系",type:"diplomacy",involvedKingdoms:["qianShu","houLiang"],significance:"medium"},
  {year:912,title:"前蜀文化发展",description:"前蜀诗词文化繁荣",type:"culture",involvedKingdoms:["qianShu"],significance:"medium"},
  {year:913,title:"王建去世",description:"前蜀高祖王建去世",type:"death",involvedKingdoms:["qianShu"],significance:"high"},
  {year:914,title:"王衍继位",description:"王衍继立为前蜀后主",type:"politics",involvedKingdoms:["qianShu"],significance:"medium"},
  {year:915,title:"前蜀经济发展",description:"前蜀经济繁荣",type:"economy",involvedKingdoms:["qianShu"],significance:"medium"},
  {year:916,title:"前蜀与后唐",description:"前蜀与后唐关系",type:"diplomacy",involvedKingdoms:["qianShu","houTang"],significance:"medium"},
  {year:917,title:"前蜀文化高峰",description:"前蜀词学达到高峰",type:"culture",involvedKingdoms:["qianShu"],significance:"medium"},
  {year:918,title:"前蜀社会稳定",description:"前蜀保持安定",type:"politics",involvedKingdoms:["qianShu"],significance:"low"},
  {year:919,title:"前蜀经济发展",description:"前蜀经济持续繁荣",type:"economy",involvedKingdoms:["qianShu"],significance:"medium"},
  {year:920,title:"前蜀政治",description:"王衍宠信宦官",type:"politics",involvedKingdoms:["qianShu"],significance:"medium"},
  {year:921,title:"前蜀文化繁荣",description:"前蜀绘画艺术繁荣",type:"culture",involvedKingdoms:["qianShu"],significance:"medium"},
  {year:922,title:"前蜀经济发展",description:"前蜀经济稳定发展",type:"economy",involvedKingdoms:["qianShu"],significance:"medium"},
  {year:923,title:"前蜀与后唐",description:"前蜀与后唐关系紧张",type:"diplomacy",involvedKingdoms:["qianShu","houTang"],significance:"medium"},
  {year:924,title:"前蜀社会稳定",description:"前蜀表面安定",type:"politics",involvedKingdoms:["qianShu"],significance:"low"},
  {year:925,title:"后唐灭前蜀",description:"郭崇韬率军灭前蜀，王衍投降",type:"destroy",involvedKingdoms:["qianShu","houTang"],significance:"high"},

  // 后蜀更多事件
  {year:925,title:"孟知祥据蜀",description:"孟知祥占据蜀地",type:"war",involvedKingdoms:["houShu"],significance:"medium"},
  {year:930,title:"孟知祥受封",description:"孟知祥被后唐封为蜀王",type:"politics",involvedKingdoms:["houShu"],significance:"medium"},
  {year:934,title:"孟知祥建后蜀",description:"孟知祥在成都称帝，建立后蜀",type:"found",involvedKingdoms:["houShu"],significance:"high"},
  {year:935,title:"孟知祥去世",description:"孟知祥称帝数月后去世",type:"death",involvedKingdoms:["houShu"],significance:"high"},
  {year:935,title:"孟昶继位",description:"孟昶继立为后蜀后主",type:"politics",involvedKingdoms:["houShu"],significance:"medium"},
  {year:936,title:"后蜀稳定统治",description:"孟昶稳定后蜀统治",type:"politics",involvedKingdoms:["houShu"],significance:"medium"},
  {year:937,title:"后蜀经济发展",description:"后蜀经济开始发展",type:"economy",involvedKingdoms:["houShu"],significance:"medium"},
  {year:938,title:"后蜀社会稳定",description:"后蜀保持安定",type:"politics",involvedKingdoms:["houShu"],significance:"low"},
  {year:939,title:"后蜀文化发展",description:"后蜀诗词文化发展",type:"culture",involvedKingdoms:["houShu"],significance:"medium"},
  {year:940,title:"后蜀经济发展",description:"后蜀经济繁荣",type:"economy",involvedKingdoms:["houShu"],significance:"medium"},
  {year:941,title:"后蜀与北宋",description:"后蜀与北宋关系",type:"diplomacy",involvedKingdoms:["houShu"],significance:"medium"},
  {year:942,title:"后蜀社会稳定",description:"后蜀保持安定",type:"politics",involvedKingdoms:["houShu"],significance:"low"},
  {year:943,title:"后蜀经济发展",description:"后蜀经济持续繁荣",type:"economy",involvedKingdoms:["houShu"],significance:"medium"},
  {year:944,title:"后蜀文化繁荣",description:"后蜀词学繁荣",type:"culture",involvedKingdoms:["houShu"],significance:"medium"},
  {year:945,title:"后蜀社会稳定",description:"后蜀保持安定",type:"politics",involvedKingdoms:["houShu"],significance:"low"},
  {year:946,title:"后蜀经济发展",description:"后蜀经济继续发展",type:"economy",involvedKingdoms:["houShu"],significance:"medium"},
  {year:947,title:"后蜀与北宋",description:"后蜀与北宋关系改善",type:"diplomacy",involvedKingdoms:["houShu"],significance:"medium"},
  {year:948,title:"后蜀社会稳定",description:"后蜀保持安定",type:"politics",involvedKingdoms:["houShu"],significance:"low"},
  {year:949,title:"后蜀经济发展",description:"后蜀经济繁荣",type:"economy",involvedKingdoms:["houShu"],significance:"medium"},
  {year:950,title:"后蜀文化高峰",description:"后蜀文化达到高峰",type:"culture",involvedKingdoms:["houShu"],significance:"medium"},
  {year:951,title:"后蜀社会稳定",description:"后蜀保持安定",type:"politics",involvedKingdoms:["houShu"],significance:"low"},
  {year:952,title:"后蜀经济发展",description:"后蜀经济稳定发展",type:"economy",involvedKingdoms:["houShu"],significance:"medium"},
  {year:953,title:"后蜀与北宋",description:"后蜀与北宋关系",type:"diplomacy",involvolvedKingdoms:["houShu"],significance:"medium"},
  {year:954,title:"后蜀社会稳定",description:"后蜀保持安定",type:"politics",involvedKingdoms:["houShu"],significance:"low"},
  {year:955,title:"后蜀经济发展",description:"后蜀经济继续发展",type:"economy",involvedKingdoms:["houShu"],significance:"medium"},
  {year:956,title:"后蜀文化发展",description:"后蜀词学持续发展",type:"culture",involvedKingdoms:["houShu"],significance:"medium"},
  {year:957,title:"后蜀社会稳定",description:"后蜀保持安定",type:"politics",involvedKingdoms:["houShu"],significance:"low"},
  {year:958,title:"后蜀经济发展",description:"后蜀经济繁荣",type:"economy",involvedKingdoms:["houShu"],significance:"medium"},
  {year:959,title:"后蜀与北宋",description:"后蜀与北宋关系紧张",type:"diplomacy",involvedKingdoms:["houShu"],significance:"medium"},
  {year:960,title:"后蜀社会稳定",description:"后蜀保持安定",type:"politics",involvedKingdoms:["houShu"],significance:"low"},
  {year:961,title:"后蜀经济发展",description:"后蜀经济稳定",type:"economy",involvedKingdoms:["houShu"],significance:"medium"},
  {year:962,title:"后蜀文化繁荣",description:"后蜀词学繁荣",type:"culture",involvedKingdoms:["houShu"],significance:"medium"},
  {year:963,title:"后蜀与北宋",description:"后蜀与北宋关系改善",type:"diplomacy",involvedKingdoms:["houShu"],significance:"medium"},
  {year:964,title:"北宋攻后蜀",description:"宋太祖命王全斌攻后蜀",type:"war",involvedKingdoms:["houShu"],significance:"high"},
  {year:965,title:"后蜀灭亡",description:"孟昶投降，后蜀亡",type:"destroy",involvedKingdoms:["houShu"],significance:"high"},

  // 荆南更多事件
  {year:907,title:"高季兴任节度使",description:"高季兴任荆南节度使",type:"politics",involvedKingdoms:["jingNan"],significance:"medium"},
  {year:910,title:"荆南割据",description:"高季兴割据荆南",type:"politics",involvedKingdoms:["jingNan"],significance:"medium"},
  {year:914,title:"荆南与后梁",description:"荆南向后梁称臣",type:"diplomacy",involvedKingdoms:["jingNan","houLiang"],significance:"medium"},
  {year:916,title:"荆南经济发展",description:"荆南转口贸易发展",type:"economy",involvedKingdoms:["jingNan"],significance:"medium"},
  {year:918,title:"荆南与吴",description:"荆南与吴国交往",type:"diplomacy",involvedKingdoms:["jingNan","wu"],significance:"medium"},
  {year:920,title:"荆南社会稳定",description:"荆南保持安定",type:"politics",involvedKingdoms:["jingNan"],significance:"low"},
  {year:922,title:"荆南经济发展",description:"荆南经济发展",type:"economy",involvedKingdoms:["jingNan"],significance:"medium"},
  {year:924,title:"高季兴封王",description:"高季兴被封为南平王",type:"politics",involvedKingdoms:["jingNan"],significance:"medium"},
  {year:926,title:"荆南向后唐称臣",description:"荆南向后唐称臣",type:"diplomacy",involvedKingdoms:["jingNan","houTang"],significance:"medium"},
  {year:928,title:"荆南经济发展",description:"荆南利用地理位置发展贸易",type:"economy",involvedKingdoms:["jingNan"],significance:"medium"},
  {year:930,title:"荆南向后晋称臣",description:"荆南向后晋称臣",type:"diplomacy",involvedKingdoms:["jingNan","houJin"],significance:"medium"},
  {year:932,title:"荆南与后汉",description:"荆南向后汉称臣",type:"diplomacy",involvedKingdoms:["jingNan","houHan"],significance:"medium"},
  {year:934,title:"荆南社会稳定",description:"荆南保持安定",type:"politics",involvedKingdoms:["jingNan"],significance:"low"},
  {year:936,title:"荆南向后周称臣",description:"荆南向后周称臣",type:"diplomacy",involvedKingdoms:["jingNan","houZhou"],significance:"medium"},
  {year:938,title:"荆南经济发展",description:"荆南转口贸易繁荣",type:"economy",involvedKingdoms:["jingNan"],significance:"medium"},
  {year:940,title:"荆南与南唐",description:"荆南与南唐关系",type:"diplomacy",involvedKingdoms:["jingNan","nanTang"],significance:"medium"},
  {year:942,title:"荆南社会稳定",description:"荆南保持安定",type:"politics",involvedKingdoms:["jingNan"],significance:"low"},
  {year:944,title:"荆南经济发展",description:"荆南经济继续发展",type:"economy",involvedKingdoms:["jingNan"],significance:"medium"},
  {year:946,title:"荆南向后汉称臣",description:"荆南向后汉称臣",type:"diplomacy",involvedKingdoms:["jingNan","houHan"],significance:"medium"},
  {year:948,title:"荆南向后周称臣",description:"荆南向后周称臣",type:"diplomacy",involvedKingdoms:["jingNan","houZhou"],significance:"medium"},
  {year:950,title:"荆南社会稳定",description:"荆南保持安定",type:"politics",involvedKingdoms:["jingNan"],significance:"low"},
  {year:952,title:"荆南经济发展",description:"荆南经济稳定",type:"economy",involvedKingdoms:["jingNan"],significance:"medium"},
  {year:954,title:"荆南与北宋",description:"荆南与北宋建立联系",type:"diplomacy",involvedKingdoms:["jingNan"],significance:"medium"},
  {year:956,title:"荆南社会稳定",description:"荆南保持安定",type:"politics",involvedKingdoms:["jingNan"],significance:"low"},
  {year:958,title:"荆南经济发展",description:"荆南经济继续发展",type:"economy",involvedKingdoms:["jingNan"],significance:"medium"},
  {year:960,title:"荆南向北宋称臣",description:"荆南向北宋称臣",type:"diplomacy",involvedKingdoms:["jingNan"],significance:"medium"},
  {year:962,title:"北宋借道",description:"宋假道荆南攻南唐",type:"war",involvedKingdoms:["jingNan","nanTang"],significance:"high"},
  {year:963,title:"荆南灭亡",description:"高继冲纳土归宋，荆南亡",type:"destroy",involvedKingdoms:["jingNan"],significance:"high"},

  // 北汉更多事件
  {year:951,title:"刘崇建北汉",description:"刘崇在太原称帝建立北汉",type:"found",involvedKingdoms:["beiHan"],significance:"high"},
  {year:952,title:"北汉依附契丹",description:"北汉完全依附契丹",type:"diplomacy",involvedKingdoms:["beiHan","liao"],significance:"medium"},
  {year:953,title:"北汉经济发展",description:"北汉经济凋敝",type:"economy",involvedKingdoms:["beiHan"],significance:"low"},
  {year:954,title:"高平之战",description:"北汉与契丹联军攻后周，被柴荣大败",type:"war",involvedKingdoms:["beiHan","houZhou","liao"],significance:"high"},
  {year:954,title:"刘崇去世",description:"刘崇忧惧而死",type:"death",involvedKingdoms:["beiHan"],significance:"high"},
  {year:955,title:"刘承钧继位",description:"刘承钧继立",type:"politics",involvedKingdoms:["beiHan"],significance:"medium"},
  {year:956,title:"北汉与后周",description:"北汉与后周战争",type:"war",involvedKingdoms:["beiHan","houZhou"],significance:"medium"},
  {year:958,title:"北汉社会稳定",description:"北汉勉强维持",type:"politics",involvedKingdoms:["beiHan"],significance:"low"},
  {year:960,title:"北汉与北宋",description:"北汉与北宋为敌",type:"diplomacy",involvedKingdoms:["beiHan"],significance:"medium"},
  {year:962,title:"北汉经济发展",description:"北汉经济困难",type:"economy",involvedKingdoms:["beiHan"],significance:"low"},
  {year:964,title:"北汉社会稳定",description:"北汉内部稳定",type:"politics",involvedKingdoms:["beiHan"],significance:"low"},
  {year:966,title:"北汉与契丹",description:"北汉依靠契丹支持",type:"diplomacy",involvedKingdoms:["beiHan","liao"],significance:"medium"},
  {year:968,title:"北汉经济发展",description:"北汉经济持续困难",type:"economy",involvedKingdoms:["beiHan"],significance:"low"},
  {year:970,title:"刘承钧去世",description:"刘承钧病逝",type:"death",involvedKingdoms:["beiHan"],significance:"medium"},
  {year:970,title:"刘继恩继位",description:"刘继恩继立",type:"politics",involvedKingdoms:["beiHan"],significance:"medium"},
  {year:971,title:"刘继恩被杀",description:"刘继恩被刺杀",type:"death",involvedKingdoms:["beiHan"],significance:"medium"},
  {year:971,title:"刘继元继位",description:"刘继元被拥立",type:"politics",involvedKingdoms:["beiHan"],significance:"medium"},
  {year:972,title:"北汉与北宋",description:"北汉抵御北宋进攻",type:"war",involvedKingdoms:["beiHan"],significance:"medium"},
  {year:974,title:"北汉社会稳定",description:"北汉内部稳定",type:"politics",involvedKingdoms:["beiHan"],significance:"low"},
  {year:976,title:"北宋攻北汉",description:"宋太祖攻北汉",type:"war",involvedKingdoms:["beiHan"],significance:"high"},
  {year:977,title:"北汉与契丹",description:"北汉求援于契丹",type:"diplomacy",involvedKingdoms:["beiHan","liao"],significance:"medium"},
  {year:978,title:"北宋包围太原",description:"宋太宗率军包围太原",type:"war",involvedKingdoms:["beiHan"],significance:"high"},
  {year:979,title:"北汉最后抵抗",description:"北汉最后的抗宋斗争",type:"war",involvedKingdoms:["beiHan"],significance:"high"},
  {year:979,title:"北宋灭北汉",description:"宋太宗攻入太原，北汉亡，十国全灭",type:"destroy",involvedKingdoms:["beiHan"],significance:"high"},

  // 契丹/辽更多事件
  {year:901,title:"耶律阿保机崛起",description:"耶律阿保机成为契丹夷离堇",type:"politics",involvedKingdoms:["liao"],significance:"medium"},
  {year:907,title:"耶律阿保机统一",description:"耶律阿保机统一契丹各部",type:"war",involvedKingdoms:["liao"],significance:"high"},
  {year:910,title:"契丹经济发展",description:"契丹畜牧业发展",type:"economy",involvedKingdoms:["liao"],significance:"medium"},
  {year:912,title:"契丹社会稳定",description:"契丹内部稳定",type:"politics",involvedKingdoms:["liao"],significance:"low"},
  {year:916,title:"耶律阿保机称帝",description:"耶律阿保机称帝，建立契丹国",type:"found",involvedKingdoms:["liao"],significance:"high"},
  {year:918,title:"契丹创制文字",description:"契丹文字创制完成",type:"culture",involvedKingdoms:["liao"],significance:"high"},
  {year:920,title:"契丹经济发展",description:"契丹经济持续发展",type:"economy",involvedKingdoms:["liao"],significance:"medium"},
  {year:922,title:"契丹对外扩张",description:"契丹开始对外扩张",type:"war",involvedKingdoms:["liao"],significance:"medium"},
  {year:925,title:"契丹灭渤海",description:"契丹灭渤海国",type:"war",involvedKingdoms:["liao"],significance:"high"},
  {year:926,title:"耶律阿保机去世",description:"耶律阿保机病逝",type:"death",involvedKingdoms:["liao"],significance:"high"},
  {year:926,title:"耶律德光继位",description:"耶律德光继立",type:"politics",involvedKingdoms:["liao"],significance:"high"},
  {year:928,title:"契丹社会稳定",description:"契丹内部稳定",type:"politics",involvedKingdoms:["liao"],significance:"low"},
  {year:930,title:"契丹经济发展",description:"契丹经济恢复发展",type:"economy",involvedKingdoms:["liao"],significance:"medium"},
  {year:932,title:"契丹与后唐",description:"契丹与后唐关系",type:"diplomacy",involvedKingdoms:["liao","houTang"],significance:"medium"},
  {year:934,title:"契丹对外战争",description:"契丹对外战争",type:"war",involvedKingdoms:["liao"],significance:"medium"},
  {year:936,title:"契丹援助石敬瑭",description:"耶律德光援助石敬瑭灭后唐",type:"war",involvedKingdoms:["liao","houJin","houTang"],significance:"high"},
  {year:938,title:"燕云十六州归契丹",description:"石敬瑭割让燕云十六州给契丹",type:"diplomacy",involvedKingdoms:["liao","houJin"],significance:"high"},
  {year:940,title:"契丹社会稳定",description:"契丹内部稳定",type:"politics",involvedKingdoms:["liao"],significance:"low"},
  {year:942,title:"契丹经济发展",description:"契丹经济繁荣",type:"economy",involvedKingdoms:["liao"],significance:"medium"},
  {year:944,title:"契丹南侵后晋",description:"契丹南侵后晋",type:"war",involvedKingdoms:["liao","houJin"],significance:"high"},
  {year:946,title:"契丹灭后晋",description:"契丹攻入汴梁，灭后晋",type:"war",involvedKingdoms:["liao","houJin"],significance:"high"},
  {year:947,title:"契丹改国号辽",description:"契丹改国号为辽",type:"politics",involvedKingdoms:["liao"],significance:"high"},
  {year:947,title:"契丹北撤",description:"契丹在中原人民反抗下北撤",type:"war",involvedKingdoms:["liao","houJin"],significance:"high"},
  {year:947,title:"耶律德光去世",description:"耶律德光在撤军途中病逝",type:"death",involvedKingdoms:["liao"],significance:"high"},
  {year:947,title:"辽太宗去世",description:"辽太宗耶律德光病逝",type:"death",involvedKingdoms:["liao"],significance:"high"},
  {year:948,title:"耶律阮继位",description:"耶律阮继位为辽世宗",type:"politics",involvedKingdoms:["liao"],significance:"medium"},
  {year:950,title:"辽国内乱",description:"辽国内部争权",type:"politics",involvedKingdoms:["liao"],significance:"medium"},
  {year:951,title:"辽国与北汉",description:"辽国支援北汉",type:"diplomacy",involvedKingdoms:["liao","beiHan"],significance:"medium"},
  {year:954,title:"辽国参与高平之战",description:"辽国与北汉联军攻后周",type:"war",involvedKingdoms:["liao","beiHan","houZhou"],significance:"high"},
  {year:957,title:"辽国与后周",description:"辽国与后周战争",type:"war",involvedKingdoms:["liao","houZhou"],significance:"medium"},
  {year:959,title:"后周北伐",description:"后周柴荣北伐，收复二关",type:"war",involvedKingdoms:["liao","houZhou"],significance:"high"},
  {year:960,title:"辽国与北宋",description:"辽国与北宋开始对峙",type:"diplomacy",involvedKingdoms:["liao"],significance:"high"},
  {year:962,title:"辽国社会稳定",description:"辽国内部稳定",type:"politics",involvedKingdoms:["liao"],significance:"low"},
  {year:964,title:"辽国经济发展",description:"辽国经济持续发展",type:"economy",involvedKingdoms:["liao"],significance:"medium"},
  {year:969,title:"辽景宗继位",description:"耶律贤继位为辽景宗",type:"politics",involvedKingdoms:["liao"],significance:"medium"},
  {year:970,title:"辽国与北宋",description:"辽国与北宋战争",type:"war",involvedKingdoms:["liao"],significance:"high"},
  {year:975,title:"辽国社会稳定",description:"辽国保持安定",type:"politics",involvedKingdoms:["liao"],significance:"low"},
  {year:979,title:"辽国与北宋",description:"宋太宗攻北汉，辽国援救失败",type:"war",involvedKingdoms:["liao","beiHan"],significance:"high"}
];

// ==================== 历史人物 ====================
const HISTORICAL_FIGURES = [
  {name:"朱温",birthYear:852,deathYear:912,kingdom:"后梁",titles:["梁太祖","武皇帝"],achievements:"建立后梁，统一黄河流域，推行科举制度",description:"朱温原名朱全忠，砀山人，黄巢起义军降将，后归顺唐朝，因功升任宣武节度使。他逐步消灭中原割据势力，于907年逼迫唐哀帝禅位，建立后梁，定都汴梁。朱温在位期间推行科举制度，重视文臣，但晚年残暴嗜杀，诸子争位，最终被次子朱友珪弑杀。"},
  {name:"李存勖",birthYear:885,deathYear:926,kingdom:"后唐",titles:["唐庄宗","晋王"],achievements:"灭后梁，平前蜀，败契丹，建立后唐",description:"李存勖是晋王李克用之子，英明神武，精通音律。他继承王位后，灭后梁、平前蜀、败契丹，建立了疆域辽阔的后唐。但晚年骄傲自满，沉迷戏曲，宠信伶人，导致兴教门之变，中流箭身亡。"},
  {name:"石敬瑭",birthYear:892,deathYear:942,kingdom:"后晋",titles:["晋高祖","儿皇帝"],achievements:"建立后晋，割让燕云十六州",description:"石敬瑭是太原沙陀人，后唐明宗女婿，太原节度使。936年，他勾结契丹，以割让燕云十六州为代价，借兵灭后唐，建立后晋。他对契丹自称儿皇帝，年贡岁币，成为中国历史上著名的耻辱。"},
  {name:"刘知远",birthYear:895,deathYear:948,kingdom:"后汉",titles:["汉高祖"],achievements:"趁契丹退兵建立后汉",description:"刘知远是太原沙陀人，后汉建立者。947年契丹灭后晋后北撤，刘知远在太原称帝，建立后汉，随即率军南下攻入汴梁。他在位仅一年便病死。"},
  {name:"郭威",birthYear:904,deathYear:954,kingdom:"后周",titles:["周太祖"],achievements:"建立后周，改革弊政",description:"郭威是邢州尧山人，后汉枢密使。因被刘承祐猜忌而发动兵变，951年率军攻入汴梁，建立后周。他在位期间改革弊政，减免赋税，为后周奠定基础。"},
  {name:"柴荣",birthYear:921,deathYear:959,kingdom:"后周",titles:["周世宗"],achievements:"高平之战大捷，南征南唐，北伐契丹",description:"柴荣是郭威养子，后周世宗，中国历史上有作为的皇帝之一。他在位期间，整顿禁军，削弱藩镇；三次亲征南唐，夺取江北十四州；北伐契丹，收复部分燕云地区。高平之战中亲率大败敌军，威震天下。959年在北伐途中病逝。"},
  {name:"赵匡胤",birthYear:927,deathYear:976,kingdom:"北宋",titles:["宋太祖"],achievements:"陈桥兵变建立北宋，统一中国",description:"赵匡胤是涿州人，后周殿前司都点检。960年，他在陈桥驿发动兵变，黄袍加身，建立北宋。此后通过杯酒释兵权解除武将兵权，先后灭掉南平、后蜀、南汉、南唐、吴越等国，于979年灭北汉，结束五代十国分裂局面。"},
  {name:"杨行密",birthYear:852,deathYear:905,kingdom:"吴",titles:["吴太祖","武忠王"],achievements:"建立吴国，保境息民",description:"杨行密是合肥人，唐末农民起义爆发后，他聚集人马占据扬州，逐步控制江淮地区。902年被唐朝封为吴王，建立吴国。他推行保境息民政策，使得江淮地区在唐末战乱后得到恢复。"},
  {name:"李昪",birthYear:888,deathYear:943,kingdom:"南唐",titles:["南唐烈祖"],achievements:"建立南唐，崇文重教",description:"李昪是徐温养子，原名徐知诰。在徐温去世后掌权，937年废黜吴帝杨溥，自立为帝，建立南唐。他恢复李姓，推行保境息文政策，南唐经济文化高度繁荣。晚年崇信道教，服用丹药中毒身亡。"},
  {name:"钱镠",birthYear:852,deathYear:932,kingdom:"吴越",titles:["吴越武肃王","海龙王"],achievements:"建立吴越，修筑海塘",description:"钱镠是杭州临安人，唐末占据浙江，907年被后梁封为吴越王，建立吴越国。他修筑了著名的捍海塘，保护杭州免受海潮侵袭，是古代水利工程的杰作。钱镠在位期间，吴越国经济繁荣，与民休息。"},
  {name:"王审知",birthYear:862,deathYear:925,kingdom:"闽",titles:["闽太祖","昭武王"],achievements:"建立闽国，发展海外贸易",description:"王审知是光州固始人，唐末与兄王潮渡江入闽，逐步占据福建。909年被后梁封为闽王，建立闽国。他重视海外贸易，福州、泉州成为对外贸易的重要港口。"},
  {name:"马殷",birthYear:852,deathYear:930,kingdom:"楚",titles:["楚武穆王"],achievements:"建立楚国，发展茶叶贸易",description:"马殷是河南鄠县人，唐末占据湖南。907年被后梁封为楚王，建立楚国。他采取保境息民政策，重视茶叶贸易，与周边国家保持友好关系，使得湖南地区在五代乱世中保持稳定。"},
  {name:"刘隐",birthYear:874,deathYear:911,kingdom:"南汉",titles:["南汉烈祖","襄皇帝"],achievements:"奠定南汉基业",description:"刘隐是广州人，唐末占据岭南，逐步统一广东、广西地区。911年被后梁封为南海王，为南汉的建立奠定了基础。"},
  {name:"王建",birthYear:847,deathYear:918,kingdom:"前蜀",titles:["前蜀高祖"],achievements:"建立前蜀，割据四川",description:"王建是许州舞阳人，唐末从军，逐步占据四川。907年建立前蜀，定都成都。他在位期间推行保境息民政策，使得四川地区在战乱中保持稳定。前蜀文化繁荣，词学、绘画都有很高成就。"},
  {name:"孟知祥",birthYear:874,deathYear:934,kingdom:"后蜀",titles:["后蜀高祖"],achievements:"建立后蜀",description:"孟知祥是邢州龙冈人，后唐西川节度使。934年在成都称帝，建立后蜀。但称帝仅数月便病逝。"},
  {name:"高季兴",birthYear:858,deathYear:929,kingdom:"荆南",titles:["南平武信王"],achievements:"建立荆南，四面称臣",description:"高季兴是陕州硖石人，后梁荆南节度使。924年被后唐封为南平王，建立荆南。他采取四面称臣的策略，利用地理位置发展转口贸易，在五代十国的夹缝中求生存。"},
  {name:"刘崇",birthYear:895,deathYear:954,kingdom:"北汉",titles:["北汉世祖","神武帝"],achievements:"建立北汉，依附契丹",description:"刘崇是后汉高祖刘知远之弟，后汉灭亡后，在太原称帝，建立北汉。他完全依附契丹，与后周、北宋为敌。954年在高平之战中被后周大败，忧惧而死。"},
  {name:"耶律阿保机",birthYear:872,deathYear:926,kingdom:"契丹/辽",titles:["辽太祖"],achievements:"统一契丹，建立契丹国",description:"耶律阿保机是契丹迭剌部人，907年统一契丹各部，916年称帝，建立契丹国。他灭亡渤海国，创制契丹文字，建立南北面官制，为契丹（辽）的发展奠定基础。"},
  {name:"李克用",birthYear:856,deathYear:908,kingdom:"后唐",titles:["晋王"],achievements:"后唐奠基者，与朱温为世仇",description:"李克用是沙陀人，唐末割据山西，与朱温为世仇。他率军勤王有功，被封为晋王。其子李存勖后来建立后唐。"},
  {name:"徐温",birthYear:862,deathYear:927,kingdom:"吴/南唐",titles:["齐王"],achievements:"杨吴权臣，专权二十年",description:"徐温是杨吴权臣，在杨行密死后专权，杀死杨渥，拥立杨隆演，掌控朝政二十年。为南唐的建立奠定了基础。"},
  // ==================== 后梁重要人物 ====================
  {name:"朱友珪",birthYear:894,deathYear:913,kingdom:"后梁",titles:["梁废帝"],achievements:"后梁第二位皇帝，发动政变弑父",description:"朱友珪是后梁太祖朱温次子，因不满朱温欲传位养子朱友文，与弟弟朱友贞联手发动政变，弑杀朱温后自立为帝。912年发动乾化政变，弑父篡位，在位仅两年便被朱友贞与杨师厚联军推翻，兵败自杀。"},
  {name:"朱友文",birthYear:885,deathYear:918,kingdom:"后梁",titles:["博王"],achievements:"朱温养子，差点继承皇位",description:"朱友文原名康勤，是朱温的养子，深得朱温宠爱。朱温晚年欲传位给朱友文，引起朱友珪等人不满。912年朱友珪发动政变弑杀朱温后，朱友文也被杀。"},
  {name:"朱友贞",birthYear:888,deathYear:923,kingdom:"后梁",titles:["梁末帝"],achievements:"后梁末帝，与朱友珪争夺皇位",description:"朱友贞是后梁太祖朱温之子，与朱友珪联手发动政变弑父后，却又与杨师厚联手推翻朱友珪，夺取皇位。在位期间与晋国多次战争，923年晋军攻入汴梁，朱友贞自杀，后梁灭亡。"},
  {name:"杨师厚",birthYear:undefined,deathYear:915,kingdom:"后梁",titles:["郴王"],achievements:"后梁名将，助朱友贞夺位",description:"杨师厚是后梁名将，勇猛善战，是朱温麾下最重要的将领之一。912年杨师厚帮助朱友贞发动政变推翻朱友珪，助其夺取皇位。915年杨师厚去世，朱友贞失去最重要的军事支柱。"},
  {name:"刘鄩",birthYear:861,deathYear:921,kingdom:"后梁",titles:["郯王"],achievements:"后梁名将，智勇双全",description:"刘鄩是后梁名将，以智谋著称。在后梁与晋国的战争中多次立功，尤其擅长防守作战。他参与了对河北地区的争夺，与晋军展开长期拉锯战。"},
  {name:"霍存",birthYear:undefined,deathYear:916,kingdom:"后梁",titles:["琅琊王"],achievements:"后梁将领",description:"霍存是后梁开国功臣之一，跟随朱温征战多年，在消灭秦宗权、朱瑄、朱瑾等割据势力的战争中屡立战功。是后梁军中重要将领。"},
  {name:"庞师古",birthYear:undefined,deathYear:918,kingdom:"后梁",titles:["东平王"],achievements:"后梁将领",description:"庞师古是后梁将领，跟随朱温转战南北，参与了后梁建立过程中的多次重要战役。是后梁开国功臣之一。"},
  {name:"葛从周",birthYear:undefined,deathYear:935,kingdom:"后梁",titles:["陈留王"],achievements:"后梁名将",description:"葛从周是后梁名将，作战勇猛，屡立战功。在后梁与晋国的战争中表现出色，参与了保卫后梁政权的多次重要战役。"},
  // ==================== 后唐重要人物 ====================
  {name:"李茂贞",birthYear:867,deathYear:924,kingdom:"岐/后唐",titles:["凤翔节度使","岐王"],achievements:"割据凤翔，与朱温对抗",description:"李茂贞是唐朝凤翔节度使，唐末权臣之一。他最初支持唐昭宗对抗朱温，后逐渐割据凤翔地区，自称岐王。归顺后唐后被封为秦王，成为影响唐末五代政局的重要人物。"},
  {name:"郭崇韬",birthYear:undefined,deathYear:926,kingdom:"后唐",titles:["枢密使"],achievements:"灭前蜀名将",description:"郭崇韬是后唐名将，足智多谋。925年受唐庄宗命率军六万灭前蜀，他以少胜多，迅速灭亡前蜀，王衍投降。但灭蜀后遭宦官陷害，被冤杀。"},
  {name:"李嗣昭",birthYear:undefined,deathYear:922,kingdom:"后唐",titles:["郡王"],achievements:"晋王部将，屡立战功",description:"李嗣昭是晋王李克用部将，跟随李克用父子征战多年。他作战勇猛，在后唐建立过程中屡立战功，是晋军中的重要将领。"},
  {name:"周德威",birthYear:undefined,deathYear:918,kingdom:"后唐",titles:["郡王"],achievements:"后唐名将",description:"周德威是后唐名将，智勇双全。他在柏乡之战等重要战役中率军大败后梁，是晋军击败后梁的关键将领之一。"},
  {name:"符存审",birthYear:862,deathYear:924,kingdom:"后唐",titles:["郡王"],achievements:"后唐名将",description:"符存审是后唐名将，原名符存，因避后唐庄宗祖父李国昌之讳改用此名。他跟随李克用父子征战，在灭后梁、平前蜀等战役中立下赫赫战功。"},
  {name:"安重诲",birthYear:undefined,deathYear:931,kingdom:"后唐",titles:["枢密使"],achievements:"后唐枢密使",description:"安重晦是后唐明宗时期重要文官，官至枢密使。他辅佐明宗治理朝政，参与改革弊政，是后唐中兴的重要功臣之一。后因与明宗意见不合被罢免。"},
  {name:"任圜",birthYear:undefined,deathYear:935,kingdom:"后唐",titles:["宰相"],achievements:"后唐宰相",description:"任圜是后唐宰相，清廉正直。他辅佐明宗处理朝政，参与财政改革，为后唐的政治稳定做出贡献。"},
  {name:"李从厚",birthYear:886,deathYear:934,kingdom:"后唐",titles:["唐闵帝"],achievements:"后唐第三位皇帝",description:"李从厚是后唐明宗养子，933年明宗死后继位。他懦弱无能，用人不当，在位仅一年便被凤翔节度使李从珂起兵推翻，逃亡途中被杀。"},
  {name:"李从珂",birthYear:885,deathYear:936,kingdom:"后唐",titles:["唐末帝"],achievements:"后唐末帝",description:"李从珂是后唐明宗养子，934年推翻唐闵帝后自立为帝。他勇猛善战但刚愎自用，936年因与河东节度使石敬瑭矛盾激化，石敬瑭勾结契丹南下，李从珂兵败自焚，后唐灭亡。"},
  {name:"李从荣",birthYear:undefined,deathYear:933,kingdom:"后唐",titles:["秦王"],achievements:"后唐秦王，谋反被诛",description:"李从荣是后唐明宗之子，封秦王。他不满父亲立养子李从厚为储君，于933年率军谋反，攻入宫城时被明宗亲军击败，明宗受惊驾崩，李从荣也被杀。"},
  // ==================== 后晋重要人物 ====================
  {name:"石重贵",birthYear:914,deathYear:970,kingdom:"后晋",titles:["晋出帝"],achievements:"后晋末帝，抗击契丹",description:"石重贵是后晋高祖石敬瑭之侄，942年继位。他对契丹采取强硬态度，拒绝称臣，引发契丹南侵。946年契丹攻陷汴梁，石重贵被俘，后晋灭亡。他被契丹迁往北方，最终死于契丹。"},
  {name:"桑维翰",birthYear:898,deathYear:947,kingdom:"后晋",titles:["宰相"],achievements:"后晋宰相，促成联契丹",description:"桑维翰是后晋宰相，积极促成石敬瑭与契丹结盟。他主张割让燕云十六州以换取契丹支持，是后晋对契丹政策的制定者之一。"},
  {name:"景延广",birthYear:undefined,deathYear:947,kingdom:"后晋",titles:["枢密使"],achievements:"后晋枢密使，主战契丹",description:"景延广是后晋枢密使，主张强硬对抗契丹。石重贵对契丹称臣问题上的态度受其影响。947年契丹南侵时，他率军抗战，城破后自尽。"},
  {name:"杜重威",birthYear:undefined,deathYear:948,kingdom:"后晋/后汉",titles:["节度使"],achievements:"后晋将领，降契丹",description:"杜重威是后晋将领，后率军投降契丹。947年契丹南下时，他在戚城投降，引契丹军入汴梁。后又仕后汉。"},
  {name:"赵德钧",birthYear:undefined,deathYear:937,kingdom:"后唐/后晋",titles:["节度使"],achievements:"后唐/后晋将领",description:"赵德钧是后唐节度使，后又仕后晋。他在北方对抗契丹的战争中发挥了一定作用。"},
  // ==================== 后汉重要人物 ====================
  {name:"刘承祐",birthYear:930,deathYear:951,kingdom:"后汉",titles:["汉隐帝"],achievements:"后汉末帝",description:"刘承祐是后汉高祖刘知远之子，948年继位。他年少轻狂，残暴不仁，杀害宰相杨邠、枢密使王章。950年郭威在邺都发动兵变，刘承祐逃亡途中被杀，后汉灭亡。"},
  {name:"苏逢吉",birthYear:undefined,deathYear:950,kingdom:"后汉",titles:["宰相"],achievements:"后汉宰相",description:"苏逢吉是后汉宰相，高祖刘知远的心腹。他在刘知远建立后汉的过程中发挥重要作用，但后因卷入政治斗争被杀。"},
  {name:"杨邠",birthYear:undefined,deathYear:950,kingdom:"后汉",titles:["宰相"],achievements:"后汉宰相",description:"杨邠是后汉宰相，忠心耿耿辅佐刘知远。但在刘承祐即位的第二年就被这位年少轻狂的皇帝所杀。"},
  {name:"王章",birthYear:undefined,deathYear:950,kingdom:"后汉",titles:["枢密使"],achievements:"后汉枢密使",description:"王章是后汉枢密使，与宰相杨邠并为后汉重臣。950年与杨邠一同被汉隐帝刘承祐所杀。"},
  // ==================== 后周重要人物 ====================
  {name:"范质",birthYear:911,deathYear:964,kingdom:"后周/北宋",titles:["宰相"],achievements:"后周宰相，北宋开国功臣",description:"范质是后周宰相，辅佐周世宗柴荣，参与改革弊政。宋太祖建立北宋后，范质继续担任宰相，是五代北宋之际重要的政治人物。"},
  {name:"王溥",birthYear:923,deathYear:839,kingdom:"后周/北宋",titles:["宰相"],achievements:"后周宰相",description:"王溥是后周宰相，辅佐周世宗参与朝政决策。宋朝建立后继续担任宰相，对五代北宋之际的政治稳定有重要贡献。"},
  {name:"魏仁溥",birthYear:903,deathYear:969,kingdom:"后周/北宋",titles:["宰相"],achievements:"后周宰相",description:"魏仁溥是后周宰相，清廉正直，辅佐周世宗和宋太祖，为五代北宋之际的政治过渡做出贡献。"},
  {name:"赵普",birthYear:921,deathYear:992,kingdom:"北宋",titles:["宰相"],achievements:"北宋宰相，杯酒释兵权",description:"赵普是北宋开国功臣，宋太祖赵匡胤的心腹谋士。他策划陈桥兵变，帮助赵匡胤黄袍加身建立北宋。后又促成杯酒释兵权，是北宋开国最重要的文臣。"},
  // ==================== 杨吴/南唐人物 ====================
  {name:"徐知诰",birthYear:888,deathYear:943,kingdom:"南唐",titles:["南唐烈祖"],achievements:"建立南唐",description:"徐知诰是徐温养子，在徐温去世后掌权。937年废黜吴帝杨溥，自立为帝，建立南唐，恢复李姓改名李昪。推行保境息民政策，使南唐成为五代十国时期最繁荣的南方政权。"},
  {name:"李璟",birthYear:916,deathYear:961,kingdom:"南唐",titles:["南唐中主"],achievements:"南唐疆域最大，后失去江北",description:"李璟是南唐中主，李昪之子。他即位后南唐疆域达到最大，但956年后周世宗柴荣南征，夺取江北十四州，李璟被迫割地求和，忧惧而死。"},
  {name:"李煜",birthYear:937,deathYear:978,kingdom:"南唐",titles:["南唐后主","千古词帝"],achievements:"词作成就登峰造极",description:"李煜是南唐后主，中国历史上最伟大的词人之一。他的词作情感真挚，意境深远，代表作《虞美人》《浪淘沙》等流传千古。但他不善治国，975年北宋灭南唐，李煜被俘，封违命侯。"},
  {name:"冯延巳",birthYear:903,deathYear:960,kingdom:"南唐",titles:["宰相","词人"],achievements:"南唐宰相，词学大家",description:"冯延巳是南唐宰相，也是著名词人。他的词作语言优美，情感细腻，与温庭筠并称温韦，是花间派的重要代表人物。他辅佐南唐中主李璟，但北周南征时主张抗敌。"},
  {name:"韩熙载",birthYear:907,deathYear:970,kingdom:"南唐",titles:["大臣"],achievements:"夜宴图主角",description:"韩熙载是南唐大臣，才华横溢，但看到南唐国势日衰，无力回天，便纵情声色。顾闳中所绘《韩熙载夜宴图》描绘的就是他的夜宴生活，是五代十国时期最重要的绘画作品之一。"},
  {name:"李景遂",birthYear:924,deathYear:958,kingdom:"南唐",titles:["晋王"],achievements:"南唐晋王",description:"李景遂是南唐中主李璟的弟弟，封晋王。他为人谦和，在储位之争中主动让位于李景达，被时人称颂。"},
  {name:"李景达",birthYear:924,deathYear:958,kingdom:"南唐",titles:["齐王"],achievements:"南唐齐王",description:"李景达是南唐中主李璟的弟弟，封齐王。他与李景遂都是李璟的得力助手，在南唐政治中发挥重要作用。"},
  {name:"陈觉",birthYear:undefined,deathYear:958,kingdom:"南唐",titles:["大臣"],achievements:"南唐大臣",description:"陈觉是南唐大臣，在南唐与后周的战争中担任将领。他曾率军抵抗后周入侵，但未能成功。"},
  {name:"宋齐丘",birthYear:887,deathYear:959,kingdom:"南唐",titles:["宰相"],achievements:"南唐宰相",description:"宋齐丘是南唐宰相，老谋深算。他在南唐政治中资历很深，但因政治斗争被罢免。"},
  {name:"边镐",birthYear:undefined,deathYear:956,kingdom:"南唐",titles:["名将"],achievements:"南唐灭楚名将",description:"边镐是南唐名将，947年率军灭楚国，攻入长沙。他善待马殷家族，但后因治理无方引起楚地人民不满，最终失去楚地。"},
  {name:"林仁肇",birthYear:undefined,deathYear:963,kingdom:"南唐",titles:["名将"],achievements:"南唐名将",description:"林仁肇是南唐名将，智勇双全。他主张积极抗宋，但被投降派陷害，南唐后主李煜错杀良将，加速了南唐的灭亡。"},
  {name:"朱令赟",birthYear:undefined,deathYear:975,kingdom:"南唐",titles:["名将"],achievements:"南唐名将，抗宋殉国",description:"朱令赟是南唐名将，975年北宋攻南唐时，他率军救援金陵，在采石矶与宋军展开激战，城破后投水自尽，忠烈殉国。"},
  // ==================== 吴越重要人物 ====================
  {name:"钱元瓘",birthYear:887,deathYear:941,kingdom:"吴越",titles:["吴越文穆王"],achievements:"吴越国君",description:"钱元瓘是吴越国君，钱镠之子。他在位期间延续父亲的保境息民政策，吴越国保持稳定繁荣。"},
  {name:"钱弘佐",birthYear:928,deathYear:947,kingdom:"吴越",titles:["吴越忠显王"],achievements:"吴越国君",description:"钱弘佐是吴越忠显王，钱元瓘之子。他年少即位，在位期间励精图治，继续发展吴越经济文化。"},
  {name:"钱弘琮",birthYear:929,deathYear:960,kingdom:"吴越",titles:["吴越忠献王"],achievements:"吴越国君",description:"钱弘琮是吴越忠献王，钱弘佐之弟。他在位期间北宋建立，他顺应历史潮流，保持对宋朝的友好关系。"},
  {name:"钱弘俶",birthYear:929,deathYear:988,kingdom:"吴越",titles:["吴越忠懿王"],achievements:"纳土归宋",description:"钱弘俶是吴越忠懿王，钱弘琮之弟。978年他顺应历史潮流，将吴越版图全部献给北宋，结束了吴越国71年的历史，实现了和平统一。"},
  {name:"罗隐",birthYear:833,deathYear:910,kingdom:"吴越",titles:["诗人"],achievements:"唐代诗人",description:"罗隐是唐代著名诗人，字昭谏。他的诗作讽刺辛辣，揭露社会黑暗，在唐末诗坛独树一帜。他曾依附钱镠，在吴越国任职。"},
  {name:"皮光业",birthYear:876,deathYear:943,kingdom:"吴越",titles:["诗人"],achievements:"吴越诗人",description:"皮光业是吴越诗人，文辞优美。他曾在吴越国任职，是五代十国时期江南地区重要的文学人物。"},
  // ==================== 闽国重要人物 ====================
  {name:"王延翰",birthYear:undefined,deathYear:930,kingdom:"闽",titles:["闽惠宗"],achievements:"闽国第二位君主",description:"王延翰是闽国惠宗，王审知之子。925年继位后残暴荒淫，大兴土木，引起了王审知养子王延禀的不满。930年王延禀率军攻入福州，杀死王延翰。"},
  {name:"王延钧",birthYear:undefined,deathYear:935,kingdom:"闽",titles:["闽康宗"],achievements:"闽国第三位君主",description:"王延钧是闽国康宗，王审知次子。他平定王延禀叛乱后自立为王，933年称帝。他猜忌多疑，后被子王继鹏杀死。"},
  {name:"王继鹏",birthYear:undefined,deathYear:939,kingdom:"闽",titles:["闽景宗"],achievements:"闽国第四位君主",description:"王继鹏是闽国景宗，王延钧之子。他荒淫无道，弑父自立，在位期间闽国内乱加剧。939年朱文进发动兵变，杀死王继鹏。"},
  {name:"王延曦",birthYear:undefined,deathYear:943,kingdom:"闽",titles:["闽殷宗"],achievements:"闽国第五位君主",description:"王延曦是闽国殷宗，王审知之子。他被朱文进死后被拥立为闽王，但残暴奢侈，943年被弟王延政取代并杀死。"},
  {name:"王延政",birthYear:undefined,deathYear:945,kingdom:"闽",titles:["闽王"],achievements:"闽国末代君主",description:"王延政是闽国最后一位君主，王审知之子。他在建州称帝建立殷国，与福州的闽国对立。945年南唐发兵攻闽，王延政被俘，闽国灭亡。"},
  {name:"留从效",birthYear:906,deathYear:962,kingdom:"闽/南唐",titles:["清源军节度使"],achievements:"割据泉州",description:"留从效是清源军节度使，占据泉州地区。闽国灭亡后，他继续割据泉州，向南唐称臣，保持事实上的独立，是五代十国时期福建地区的重要割据势力。"},
  // ==================== 楚国重要人物 ====================
  {name:"马希声",birthYear:undefined,deathYear:932,kingdom:"楚",titles:["楚衡阳王"],achievements:"楚国君主",description:"马希声是楚衡阳王，马殷之子。他继位后不理朝政，纵情声色，在位期间楚国政治日渐混乱。"},
  {name:"马希范",birthYear:undefined,deathYear:947,kingdom:"楚",titles:["楚文昭王"],achievements:"楚国君主",description:"马希范是楚文昭王，马殷之子。他在位期间大肆挥霍，滥杀功臣，耗尽了楚国的国力。但他本人雅好文学，扩建宫殿，宠爱美女。"},
  {name:"马希广",birthYear:undefined,deathYear:950,kingdom:"楚",titles:["楚废王"],achievements:"楚国君主",description:"马希广是楚废王，马希范之弟。马希范死后，他被权臣拥立为帅，但马希萼起兵争夺，兄弟内战。950年南唐趁机攻楚，马希广被俘后遇害。"},
  {name:"马希萼",birthYear:undefined,deathYear:951,kingdom:"楚",titles:["楚恭孝王"],achievements:"楚国君主",description:"马希萼是楚恭孝王，马殷之子。他不满弟弟马希广继位，起兵争夺，与南唐联军攻入长沙。但南唐随后将他囚禁。"},
  {name:"马希崇",birthYear:undefined,deathYear:952,kingdom:"楚",titles:["楚王"],achievements:"楚国君主",description:"马希崇是马希萼之子，在马希萼被囚后被南唐封为王，但不久楚国被南唐名将边镐灭亡，马希崇被俘。"},
  {name:"邓处纳",birthYear:undefined,deathYear:951,kingdom:"楚",titles:["衡州刺史"],achievements:"楚将",description:"邓处纳是楚将，衡州刺史。马希广与马希萼兄弟争位时，他支持马希广，951年马希萼引南唐军攻入长沙，邓处纳战死。"},
  // ==================== 南汉重要人物 ====================
  {name:"刘龑",birthYear:889,deathYear:942,kingdom:"南汉",titles:["南汉殇帝"],achievements:"南汉第二位皇帝",description:"刘龑是南汉殇帝，刘隐之弟。南汉建立者刘隐911年去世后，他继位。刘龑在位期间荒淫残暴，大兴土木，建造宫殿，耗尽民力。"},
  {name:"刘晟",birthYear:920,deathYear:958,kingdom:"南汉",titles:["南汉中宗"],achievements:"南汉中宗",description:"刘晟是南汉中宗，刘龑之子。他通过弑父自立夺得皇位，在位期间荒淫残暴，大肆诛杀兄弟。南汉在他手中日益衰落。"},
  {name:"刘鋹",birthYear:942,deathYear:980,kingdom:"南汉",titles:["南汉后主"],achievements:"南汉末帝",description:"刘鋹是南汉后主，刘晟之子。他昏庸无能，宠信宦官，朝政混乱。971年北宋灭南汉，刘鋹被俘，被封为恩赦侯。"},
  {name:"龚澄枢",birthYear:undefined,deathYear:971,kingdom:"南汉",titles:["宦官"],achievements:"南汉宦官权臣",description:"龚澄枢是南汉宦官，权力极大。刘鋹在位时，他掌握朝政，排斥忠良，是导致南汉灭亡的重要人物之一。"},
  {name:"李托",birthYear:undefined,deathYear:971,kingdom:"南汉",titles:["宦官"],achievements:"南汉宦官权臣",description:"李托是南汉宦官，与龚澄枢并列掌握朝政。他劝刘鋹对北宋采取强硬态度，导致南汉与北宋关系恶化。"},
  {name:"赵光胤",birthYear:undefined,deathYear:965,kingdom:"南汉",titles:["宰相"],achievements:"南汉宰相",description:"赵光胤是南汉宰相，有一定才能。但在南汉政治混乱的环境下难以发挥作用。"},
  // ==================== 前蜀重要人物 ====================
  {name:"王衍",birthYear:899,deathYear:926,kingdom:"前蜀",titles:["前蜀末帝"],achievements:"前蜀末帝",description:"王衍是前蜀末帝，王建养子。918年继位后荒淫无度，大兴土木。925年后唐郭崇韬率军灭前蜀，王衍投降，后被族诛。"},
  {name:"韦庄",birthYear:836,deathYear:910,kingdom:"前蜀",titles:["诗人","花间派"],achievements:"花间派代表词人",description:"韦庄是唐末五代著名词人，字端己，是花间派的重要代表人物。他与温庭筠并称温韦，代表作《菩萨蛮》等。其词作语言优美，情感细腻。"},
  {name:"牛峤",birthYear:848,deathYear:893,kingdom:"前蜀",titles:["诗人","花间派"],achievements:"花间派代表词人",description:"牛峤是唐末著名词人，字松卿，是花间派的重要代表人物之一。他在前蜀为官，词作华丽精巧，多写艳情。"},
  {name:"毛文锡",birthYear:undefined,deathYear:undefined,kingdom:"前蜀",titles:["词人"],achievements:"前蜀词人",description:"毛文锡是前蜀词人，词作典雅华丽，是花间派的重要作家之一。"},
  // ==================== 后蜀重要人物 ====================
  {name:"孟昶",birthYear:919,deathYear:965,kingdom:"后蜀",titles:["后蜀后主"],achievements:"后蜀末帝",description:"孟昶是后蜀后主，孟知祥之子。934年继位，在位期间后蜀相对稳定，但政治渐渐腐败。965年北宋灭后蜀，孟昶被俘至汴梁，七日后去世。"},
  {name:"花蕊夫人",birthYear:883,deathYear:926,kingdom:"前蜀/后蜀",titles:["才女"],achievements:"著名才女",description:"花蕊夫人是五代十国时期著名的才女，曾为前蜀王建妃，后又被后唐庄宗收入宫中。她才貌双全，关于她的传说流传至今。"},
  {name:"赵廷隐",birthYear:undefined,deathYear:965,kingdom:"后蜀",titles:["名将"],achievements:"后蜀名将",description:"赵廷隐是后蜀名将，作战勇猛。965年北宋攻后蜀时，他率军抵抗，城破后被俘。"},
  {name:"李昊",birthYear:891,deathYear:965,kingdom:"后蜀",titles:["宰相"],achievements:"后蜀宰相",description:"李昊是后蜀宰相，辅佐孟昶处理朝政。后蜀灭亡时，他奉表降宋。"},
  {name:"欧阳炯",birthYear:896,deathYear:971,kingdom:"后蜀",titles:["词人"],achievements:"后蜀词人，花间派",description:"欧阳炯是后蜀词人，词作华丽精巧，是花间派的重要代表人物。他曾在后蜀为官，后又仕宋。"},
  // ==================== 荆南重要人物 ====================
  {name:"高从诲",birthYear:undefined,deathYear:948,kingdom:"荆南",titles:["南平文献王"],achievements:"荆南国君",description:"高从诲是荆南文献王，高季兴之子。他在位期间延续父亲四面称臣的策略，继续在夹缝中求生存。"},
  {name:"高保融",birthYear:undefined,deathYear:960,kingdom:"荆南",titles:["南平贞懿王"],achievements:"荆南国君",description:"高保融是荆南贞懿王，高从诲之子。他在位期间北宋已经建立，他继续保持与北宋的友好关系。"},
  {name:"高继冲",birthYear:943,deathYear:963,kingdom:"荆南",titles:["荆南王"],achievements:"荆南末代君主",description:"高继冲是荆南最后一位君主，高保融之弟。963年北宋攻南平时，他被迫纳地归宋，荆南灭亡。"},
  // ==================== 北汉重要人物 ====================
  {name:"刘承钧",birthYear:undefined,deathYear:970,kingdom:"北汉",titles:["北汉睿宗"],achievements:"北汉第二位皇帝",description:"刘承钧是北汉睿宗，刘崇之子。954年刘崇在高平之战中被后周大败忧惧而死，他继位。他在位期间继续依附契丹，与后周、北宋为敌。"},
  {name:"刘继恩",birthYear:undefined,deathYear:971,kingdom:"北汉",titles:["北汉英武帝"],achievements:"北汉第三位皇帝",description:"刘继恩是北汉英武帝，刘承钧养子。970年刘承钧病死，他继位，但不久被部下杀害。"},
  {name:"刘继元",birthYear:undefined,deathYear:979,kingdom:"北汉",titles:["北汉末帝"],achievements:"北汉末代皇帝",description:"刘继元是北汉末帝，刘继恩的养子。971年刘继恩被杀后，他被拥立为帝。979年宋太宗亲征太原，刘继元投降，北汉灭亡。"},
  {name:"耶律敌禄",birthYear:undefined,deathYear:undefined,kingdom:"北汉",titles:["契丹援军"],achievements:"契丹援军将领",description:"耶律敌禄是契丹将领，刘继元在位期间率契丹军支援北汉，对抗北宋。但最终未能挽救北汉灭亡的命运。"},
  // ==================== 契丹/辽重要人物 ====================
  {name:"述律平",birthYear:879,deathYear:953,kingdom:"契丹/辽",titles:["应天后"],achievements:"辽太祖皇后",description:"述律平是辽太祖耶律阿保机的皇后，出身回鹘。她才智过人，在阿保机统一契丹和建立契丹国的过程中发挥重要作用，是契丹历史上重要的女性人物。"},
  {name:"耶律德光",birthYear:902,deathYear:947,kingdom:"契丹/辽",titles:["辽太宗"],achievements:"契丹南侵，建立燕云十六州",description:"耶律德光是辽太宗，耶律阿保机之子。936年他帮助石敬瑭灭后唐，建立后晋，并获得燕云十六州。947年他率军南下灭后晋，但因中原人民反抗被迫撤军，病死于撤军途中。"},
  {name:"耶律阮",birthYear:918,deathYear:951,kingdom:"契丹/辽",titles:["辽世宗"],achievements:"辽世宗",description:"耶律阮是辽世宗，耶律德光之子。他在位期间契丹内部矛盾激化，他被泰宁王耶律察割杀死。"},
  {name:"耶律璟",birthYear:931,deathYear:969,kingdom:"契丹/辽",titles:["辽穆宗"],achievements:"辽穆宗",description:"耶律璟是辽穆宗，辽太宗长孙。他在位期间辽朝政治动荡，他本人沉湎酒色，被称为睡王。969年被刺杀。"},
  {name:"萧思温",birthYear:undefined,deathYear:973,kingdom:"契丹/辽",titles:["萧王"],achievements:"辽朝萧王",description:"萧思温是辽朝萧王，是辽朝皇后萧燕燕的父亲。他在辽朝政治中发挥重要作用。"},
  {name:"韩延徽",birthYear:882,deathYear:959,kingdom:"契丹/辽",titles:["南府宰相"],achievements:"契丹南府宰相",description:"韩延徽是契丹南府宰相，原为后唐官员，后投奔契丹，为耶律阿保机效力，在契丹制度建设方面发挥重要作用。"},
  // ==================== 五代重要将领 ====================
  {name:"高行周",birthYear:883,deathYear:954,kingdom:"后唐/后汉/后周",titles:["郡王"],achievements:"五代名将",description:"高行周是五代时期名将，历仕后唐、后汉、后周。他在后周时期担任重要军职，是五代十国后期重要的军事将领之一。"},
  {name:"慕容彦超",birthYear:undefined,deathYear:955,kingdom:"后汉",titles:["将领"],achievements:"后汉将领",description:"慕容彦超是后汉将领，后又仕后周。他在抵抗后周和北宋的战争中发挥了作用，但最终兵败身亡。"},
  {name:"王峻",birthYear:901,deathYear:953,kingdom:"后周",titles:["宰相"],achievements:"后周宰相",description:"王峻是后周宰相，与王殷并称二王。他辅佐郭威建立后周，是后周开国功臣之一。"},
  {name:"郑仁诲",birthYear:undefined,deathYear:955,kingdom:"后周",titles:["宰相"],achievements:"后周宰相",description:"郑仁诲是后周宰相，清廉正直，辅佐周世宗柴荣治理朝政。"},
  {name:"向训",birthYear:undefined,deathYear:966,kingdom:"后周/北宋",titles:["宰相"],achievements:"后周宰相",description:"向训是后周宰相，参与朝政决策。北宋建立后，他继续担任宰相，对五代北宋之际的政治过渡有贡献。"},
  {name:"王全斌",birthYear:908,deathYear:973,kingdom:"北宋",titles:["名将"],achievements:"灭后蜀名将",description:"王全斌是北宋名将，965年率军灭后蜀。他作战勇猛，但因纵兵抢掠被弹劾，被撤职查办。"},
  {name:"潘美",birthYear:925,deathYear:991,kingdom:"北宋",titles:["名将"],achievements:"灭南汉名将",description:"潘美是北宋名将，971年率军灭南汉。他作战有方，为北宋统一南方立下赫赫战功。"},
  {name:"刘光义",birthYear:undefined,deathYear:980,kingdom:"北宋",titles:["名将"],achievements:"北宋名将",description:"刘光义是北宋名将，参与了北宋统一战争，在灭后蜀、南唐等战役中立下战功。"},
  {name:"李继勋",birthYear:undefined,deathYear:976,kingdom:"北宋",titles:["将领"],achievements:"北宋将领",description:"李继勋是北宋将领，参与了北宋初年的统一战争，在灭后蜀、南唐等战役中随军作战。"},
  // ==================== 其他重要人物 ====================
  {name:"张全义",birthYear:852,deathYear:926,kingdom:"后唐",titles:["将领"],achievements:"后唐将领",description:"张全义是后唐将领，原为后梁将领，后归顺后唐。他在后唐灭后梁的战争中发挥了一定作用。"},
  {name:"朱弘昭",birthYear:undefined,deathYear:934,kingdom:"后唐",titles:["宰相"],achievements:"后唐宰相",description:"朱弘昭是后唐宰相，在明宗时期参与朝政决策。但他因卷入宫廷政治斗争被杀。"},
  {name:"马赟",birthYear:undefined,deathYear:936,kingdom:"后唐",titles:["将领"],achievements:"后唐将领",description:"马赟是后唐将领，在后唐末帝时期抵御石敬瑭的叛乱，但最终兵败被杀。"},
  {name:"赵在礼",birthYear:undefined,deathYear:926,kingdom:"后唐",titles:["节度使"],achievements:"魏博兵变发起人",description:"赵在礼是后唐效节节度使，926年在魏博发动兵变，这是导致唐庄宗李存勖身亡的兴教门之变的直接原因。"},
  {name:"范延光",birthYear:undefined,deathYear:941,kingdom:"后晋",titles:["节度使"],achievements:"后晋节度使",description:"范延光是后晋节度使，后又仕后汉。他在河北地区拥有很大兵权，是五代十国时期重要的藩镇势力之一。"},
  {name:"张从宾",birthYear:undefined,deathYear:939,kingdom:"后晋",titles:["将领"],achievements:"后晋将领",description:"张从宾是后晋将领，在后晋与契丹的关系中发挥了一定作用，但后因叛乱被杀。"},
  {name:"孙方简",birthYear:undefined,deathYear:949,kingdom:"后汉",titles:["将领"],achievements:"后汉将领",description:"孙方简是后汉将领，在后汉与后周的战争中发挥了一定作用。"},
  {name:"白再荣",birthYear:undefined,deathYear:950,kingdom:"后汉",titles:["将领"],achievements:"后汉将领",description:"白再荣是后汉将领，在后汉灭亡前夕被杀。"}
];

// ==================== 辅助函数 ====================
function getKingdomById(id) {
  return KINGDOM_DATA[id];
}

function getAllKingdoms() {
  return Object.keys(KINGDOM_DATA).filter(k => k !== 'background').map(k => KINGDOM_DATA[k]);
}

function getKingdomsByPeriod(year) {
  return Object.keys(KINGDOM_DATA)
    .filter(k => k !== 'background')
    .map(k => KINGDOM_DATA[k])
    .filter(k => year >= k.start && year <= k.end);
}

function getEventsByYear(year) {
  return TIMELINE_EVENTS.filter(e => e.year === year);
}

function getEventsByKingdom(kingdomId) {
  const k = KINGDOM_DATA[kingdomId];
  if (!k) return [];
  return k.rulers.flatMap(r => r.events || []);
}

function getFigureByName(name) {
  return HISTORICAL_FIGURES.find(f => f.name === name);
}

function getBackground() {
  return KINGDOM_DATA.background;
}

// 导出数据
export {
  KINGDOM_DATA,
  TIMELINE_EVENTS,
  HISTORICAL_FIGURES,
  getKingdomById,
  getAllKingdoms,
  getKingdomsByPeriod,
  getEventsByYear,
  getEventsByKingdom,
  getFigureByName,
  getBackground
};
