Page({
  
  data:{
    text:"Page history"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
var that = this;

wx.showToast({
  title: '加载中...',
  duration: 10000,
  icon : 'loading'
}),


    wx.request({
  url: 'https://chenlean.com/ekbook/demo/report.php',
  data: {},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
     wx.hideToast();
     console.log(res.data);
that.setData({
report :res.data.data
})
 
  },
  fail: function(res) {
    // fail
  },
  complete: function(res) {
    // complete
  }
})



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