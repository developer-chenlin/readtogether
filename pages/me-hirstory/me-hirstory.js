Page({
  
  data:{
    text:"Page me-hirstory"
  },
  onLoad:function(options){
    var that = this;

    // 页面初始化 options为页面跳转所带来的参数
    wx.request({

      url: 'https://chenlean.com/ekbook/record/peorecord.php?readerid=GDEK1743',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        wx.hideToast();
        console.log(res.data);
        that.setData({
          finishary: res.data.finishhandle,
          needary: res.data.needhandle,
         })
       

      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
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