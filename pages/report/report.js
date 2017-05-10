var WxParse = require('../../wxParse/wxParse.js');
Page({
   
  data: {
  },
  onLoad: function () {
     var that = this;
    /**
     * 初始化emoji设置
     */
 
    /**
     * html解析示例
     */
wx.showToast({
    title: '加载中...',
    icon:'loading',
    duration: 10000
})


wx.request({
  url: 'https://chenlean.com/ekbook/demo/singlereport.php?reportid=1000',
  data: {},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
      wx.hideToast();
      console.log(res.data);
       var article = res.data.article;
       
    //     console.log(article);
    WxParse.wxParse('article', 'html', article, that, 5);


    
  },
  fail: function(res) {
    // fail
  },
  complete: function(res) {
    // complete
  }
})



    
		
    


  
  }


})
