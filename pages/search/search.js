//index.js
//获取应用实例
var WxSearch = require('../../wxSearch/wxSearch.js')
var app = getApp()
Page({
  data: {
    keyword: '',
    needShow: false,
     // wxSearchData:{
    //   view:{
    //     isShow: true
    //   }
    // }
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that, 43, ['最好的我们', '门口的野蛮人', '巨人的陨落 2	', '羊脂球	', '说文解字']);
    WxSearch.initMindKeys(['眠空', '最好的我们', '门口的野蛮人', '情语大全', 'EF镜头宝典', '神秘岛 中', '神秘岛 下', '巨人的陨落 2', '巨人的陨落 3', '曾国藩大传 上', '曾国藩大传 下', '这个历史挺靠谱3', 'Vray效果图渲染', '改变你的一生', '羊脂球', '遇见未知的自己', '你是人间四月天', '喜欢你是寂静的', '精美散文', '悲惨世界（下）', '中国国家地理-月刊', '中国优秀数据中心书册', '不抱怨的世界', '白夜行', '如何提高讲话水平', '即兴讲话艺术', '羊皮卷全书', '我与地坛', '围城', '北鸢', '产品全生命周期设计与评价', '如何阅读一本书', '走到人生边上', '说文解字', '再苦也要笑一笑', '美的历程', '我们仨', '制冷压缩机', '你在为谁工作', '麦肯锡方法', 'Photoshop CS5.1从入门到精通', '裂变式创业', 'SW2016钣金设计', '数码单反相机摄影技法', 'VB企业办公系统开发实例导航', 'VB数据库系统开发实例导航（第二版）', '打遍天下', '会声会影X3标准教程', 'Cinema 4D 工业产品渲染技术完全手册', '对“伪心理学”说不', '抠图.修图.调色.合成.特效', '你得灯亮着吗', '产品设计模型：制作 技法工艺', '数学之美', '大学之路 下', '数字音频编辑', '大国重器', '3ds Max 2015 完全自学一本通', '水知道答案', '思维导图', '韩寒：青春', '生命不息折腾不止', '将来的你，一定会感谢现在拼命的自己', '皮囊', '雍正传', '现代心理学', '精灵宝钻', '宽容', '大数据时代', '说吧，寂寞', '资治通鉴的智慧', '大浪淘沙', '禅与摩托车维修艺术', '超新星纪元', '三体III 死神永生', '得喜乐', '唤醒内在的智慧', '拖延心理学', '策略思维', '津巴多普通心理学', '如何进行采购与供应商管理', '全球通史', '全球通史（下） 从史前史到21世纪', '别怕，EXCEL VBA其实很简单', 'SolidWorks2003中文版-入门与提高', '人月神话', 'SW2016完全实战技术手册', '素食 跑步 修行', '我读书少，你可别骗我', '南怀瑾选集 第三卷', '理财课', '德胜管理', '21世纪超速创业', '哈佛家训', '精明装修', '一百个人的十年', '这是我们的船', '黄帝内经', '刺猬效应', '人为什么活着', '哈佛女孩刘亦婷', '化妆技巧', '哈姆雷特（改写本）', '戴笠大传', '35岁前搭建属于自己的舞台', '地板采暖设计施工手册', '杰克.韦尔奇自传', '伟大的博弈', '罗马人的故事II 汉尼拔战记', '自私的基因', '带着偏见上路', '创新者的窘境', '反脆弱', '参与感—小米口碑营销内部手册', '激荡三十年（上）', '激荡三十年（下）', '周鸿伟自述', '带着鲑鱼去旅行', '风险与好的决策', '思考的技术', '向着光亮那方', '清醒思考的艺术', '新闻幕后', '杀戮与文化', '一个瑜伽行者的自传', '万物既聪慧又奇妙', '国富论', '小QQ大帝国', '不曾苟且', '把信送给加西亚', '自控力', '世界如此险恶，你要内心强大2', '位子', '中国饮食文化史', '瓦尔登湖', '寻找家园', '灵魂的事', '品三国', '繁花', '金匮要略译释', '简爱', '挪威的森林', '局外人', '不能承受的生命之轻', '江城', '枪炮、病菌与钢铁', '青春', '爱你就像爱生命', '随遇而安', '做人因幽默而有魅力', '狼图腾', '圈子圈套3', '圈子圈套2', '妞妞', '货币战争4', '货币战争5', '一句顶一万句', '黄金时代', '我不知道该说什么', '球状闪电', '三体', '三体II 黑暗森林', '三个火枪手', '小空间收纳设计', '居家装修妙招', '性格与命运', '四世同堂', '愿你与这世界温暖相拥', '岛上书店', '观念的水位', '巨人的陨落 1', '孤独，怎么了', '莎士比亚悲剧集', '动物农庄', '珍爱心灵', '力量', '偷影子的人', '大清相国', '最美的时光', '魔力', '不抱怨的世界', '爱了就会活过来', '送你一颗子弹', '好吗好的', '呼啸山庄', '民主的细节', '在轮下', '叫魂', '相约星期二', '这个历史挺靠谱2', '安妮宝贝小说集', '百年孤独', '时间的针脚', '杂货店解忧', '作死的发明', '霍乱时期的爱情', '图本丁玲传', '浪漫主义的根源', 'THE LITTLE PRINCE 小王子（中英文读物）', '呐喊彷徨', '思科九年', '拯救华尔街', '一个国家的复仇', '天真的人类学家', '看见', '纸牌屋', '上帝掷骰子吗？', '我的脖子很不爽', '穿布鞋的马云', '直觉', '悟空传', '地狱的阶梯', '5分钟快餐英语', '呼蘭河傳', '浮沉', '大癲狂', '1984', '时寒冰说未来二十年经济在趋势', '悲惨世界', '神秘岛 上', '从优秀到卓越', '人性的弱点', '管理博士', '营销女皇董明珠', '女人的资本', '卡耐基夫人教你做魅力女人', '悲惨世界（上）', '耶稣泥板圣经之谜', '四圣心源', '做自己的心理治疗师', '钢铁是怎样炼成的', '货币战争3', '叶圣陶专集', '致加西亚的信', '说吧，爱情', '如何推行5S', '女人怎样更漂亮', '封神演义', '环球国家地理', '中国学生应该知道的文学常识', '官场笔记', '一封家书', 'SolidWorks高级装配体建模', 'SolidWorks基本建模技术：零件与装配体 下', 'SolidWorks高级零件与曲面建模', 'SolidWorks工程图', 'VB6数据库编程技术', '落泪是金', '如此星辰如此良夜何']);


  },

  wxSearchFn: function (e) {
    wx.showToast({
      title: '搜索中...',
      icon:'loading',
      duration: 10000
    })
    var that = this
    WxSearch.wxSearchAddHisKey(that);
    //点击搜索按钮，发送搜索请求
    wx.request({
    
      url: 'https://chenlean.com/ekbook/demo/searchbook.php?keyword=' + that.data.keyword,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        wx.hideToast();
        that.setData({
          search: res.data.search,
          recommend:res.data.recommend,
          needShow: res.data.search.length > 0 ? true: false
         })

        console.log(res.data);

      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })






  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
    that.setData({
      keyword: e.detail.value
    }) 

    if(e.detail.value.length == 0) {
           console.log("这里你清除了关键字，我将重置数组")
  that.setData({
    search :[],
    recommend: [],
     needShow: false

  })
    }

  },
  wxSerchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
    console.log("asdasdsadsadasd");
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    console.log(e);

    WxSearch.wxSearchKeyTap(e, that);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  },

})
