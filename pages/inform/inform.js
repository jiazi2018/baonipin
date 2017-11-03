// pages/inform/inform.js
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
    red_id:8,
    keepList: [
      {
        title: '什么什么什么日',
        money: '2.00',
        time: '2017-8-20 20:28',
        all: 3,
        now: 2
      },
      {
        title: '什么什么什日',
        money: '2.00',
        time: '2017-8-20 20:28',
        all: 3,
        now: 2
      },
      {
        title: '什么什么什呢人口日',
        money: '2.00',
        time: '2017-8-20 20:28',
        all: 3,
        now: 2
      },
      {
        title: '什么什么什么是人口日',
        money: '2.00',
        time: '2017-8-20 20:28',
        all: 3,
        now: 2
      },
      {
        title: '什么什么什么人口日',
        money: '2.00',
        time: '2017-8-20 20:28',
        all: 3,
        now: 2
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = wx.getStorageSync('userInfo');
    this.setData({
      userInfo: userInfo
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      let that = this;
      wx.request({
        url: apiurl + "red/share-red?sign=" + sign + '&operator_id=' + app.data.kid,
        data:{
          red_id: that.data.red_id
        },
        header: {
          'content-type': 'application/json'
        },
        method: "GET",
        success: function (res) {
          console.log("红包详情:", res);
          that.setData({
            
          })
        }
      })
  },
  money(){

  },
  share(e){
    wx.navigateTo({
      url: '../share/share?red_id=' + this.data.red_id
    })
  },

  onShareAppMessage: function () {
  
  }
})