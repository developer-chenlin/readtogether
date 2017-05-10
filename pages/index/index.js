//index.js
//获取应用实例
var util = require('../../utils/util.js')
var API_URL = 'https://chenlean.com/ekbook/demo/dbinfo.php'
var that = this;
var step = 1;
var booktype = 1;
var app = getApp()
Page({


  data: {
    bookking : 1,
    books: [],
    navTab: ["文艺", "人文", "经管", "励志", "科技", "其他"],
    banners: [
      { url: 'https://chenlean.com/ekbook/img/1.jpg' },
      { url: 'https://chenlean.com/ekbook/img/2.jpg' },
      { url: 'https://chenlean.com/ekbook/img/3.jpg' },

    ],

    hidden: true,

    currentNavtab: "0",
    booktype: 1,
    autoplay: true,
    interval: 5000,
    duration: 1000,

  },

  //跳转界面
  pushVC: function (params) {
    wx.navigateTo({
      url: '../../detail/detail?bookid=' + params
    })
  },

  switchTab: function (e) {
    booktype = e.currentTarget.dataset.idx + 1;
    console.log(e);
    step = 1;
    this.getbooksApache(1, booktype);

    this.setData({

      currentNavtab: e.currentTarget.dataset.idx
    });

  },
  upperLoad: function () {
    var that = this;
    that.getbooksApache(step, booktype)
    console.log("上拉加载");
  },
  lowerRefresh: function (e) {
    var that = this;
    console.log("下拉刷新")
  },

  onLoad: function (options) {


    this.getbooksApache(1, 1);


    // 页面初始化 options为页面跳转所带来的参数
  },
  getbooksApache: function (page, booktype) {
    var that = this;
    console.log("分页值 = " + step + "    类型=" + booktype);
    wx.showToast({
      title: '加载中...',
      icon: "loading",
      duration: 10000
    })
    //根据传入的page值以及图书类型值进行网络请求并赋值
    app.httpApacheGET(API_URL + '?page=' + step + '&type=' + booktype, (error, data) => {
      wx.hideToast();
      //在这里，出现step为1或者booktype有变化的时候，都需要先清除数据源数组，再插入数据刷新u
    if(this.data.bookkind != booktype) { //其恶化了图书类型，需要清数组，重新赋值图书类型
    this.data.bookkind = booktype;
    step = 1;
    this.data.books = [];
    }
    else if(step == 1) {
       this.data.books = [];
    }
    
    
    
    
      if (this.data.booktype != booktype) {
        this.data.booktype = booktype;
        this.data.books = [];
      }
      this.setData({ books: this.data.books.concat(data.data) })
    })
  },



  onReady: function () {

    // 页面渲染完成
  },
  onShow: function () {

    // 页面显示
  },
  onHide: function () {

    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  onPullDownRefresh(){

    var that  = this;
    step = 1;
    console.log(step)
    that.getbooksApache(step, booktype);

    
   },
  onReachBottom(){
    console.log(step)
 step = step +1;
console.log(step)
var that = this;
that.getbooksApache(step, booktype);

 

  }

  

})
