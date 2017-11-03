// pages/share/share.js
const app = getApp();
const common = require('../../common.js');
const apiurl = 'https://friend-guess.playonwechat.com/';
let sign = wx.getStorageSync('sign');
import tips from '../../utils/tips.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bg_id:1 //背景id默认为1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      red_id: options.red_id,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this;
    console.log(that.data.red_id);
    // 红包详情
    wx.request({  
      url: apiurl + "red/go-share-red?sign=" + sign + '&operator_id=' + app.data.kid,
      data:{
        red_id: that.data.red_id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log("分享红包:", res);
        that.setData({
           
        })
      }
    })
    
  },
  // 换壳
  change(){
    wx.navigateTo({
      url: '../packet/packet?red_id=' + this.data.red_id
    })
  },
  shareImg(e) {
    wx.navigateTo({
      url: '../shareImg/shareImg?bg_id=' + this.data.bg_id + '&red_id=' + this.data.red_id
    })
  },
 

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})