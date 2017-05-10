Page({
  data:{
    text:"Page detail"
  },
  onLoad:function(options){
    var that = this;
    console.log(options.bookid)
    wx.showToast({
      title: '加载中...',
      icon:"loading",
      duration: 5000
    })
    wx.request({
      url: 'https://chenlean.com/ekbook/demo/testbookinfo.php?bookid=9787535471376',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
console.log(res.data);
     var book = res.data.book;
     var comdesc = res.data.comdesc;
         wx.hideToast();
  
 that.setData({
   book:book,
   comdesc:comdesc
   }
 )









      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
    // 页面初始化 options为页面跳转所带来的参数
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