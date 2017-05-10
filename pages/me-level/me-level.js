var WxParse = require('../../wxParse/wxParse.js');

Page({
 
  data:{
    text:"Page me-level"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
     var  illustrate = '<p style="text-align: left;">为了规范读者的用户行为，量化用户的成长等级给予奖励，现设计成长值规则，规则如下：</p><p style="text-align: left;"><span style="color:#e36c09">1.完成单本图书借阅，积10分；</span></p><p style="text-align: left;"><span style="color:#e36c09">2.赞一次积2分；</span></p><p style="text-align: left;"><span style="color:#e36c09">3.评论某本书或者某人的读后感积4分；</span></p><p style="text-align: left;"><span style="color:#e36c09">4.发表一篇读后感积30分；</span></p><p style="text-align: left;">成长值积累到一定的程度，解锁相应的等级图标：</p><p style="text-align: left;"><span style="color:#e36c09">1.书生：40分</span></p><p style="text-align: left;"><span style="color:#e36c09">2.书迷：90分</span></p><p style="text-align: left;"><span style="color:#e36c09">3.书痴：150分</span></p><p style="text-align: left;"><span style="color:#e36c09">4.书圣：220分</span></p><p style="text-align: left;"><span style="color:#e36c09">5.大学究：300分</span></p><p>说明：年底会更根据成长值，给予相应的奖励，并清除当年成长值。等级越高，获得更高级的分享内容。不要恶意刷成长值，不然将部门早会发言机会一次。<img src="http://img.baidu.com/hi/jx2/j_0003.gif"/></p><p style="text-align: left;"><br/></p>';
         WxParse.wxParse('illustrate', 'html', illustrate, that, 5);

  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})