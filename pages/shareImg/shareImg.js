// pages/shareImg/shareImg.js
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
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let imgurl = wx.getStorageSync('imgurl');
    this.setData({
      imgurl: imgurl
    })
  },
  onShow: function () {
    // 红包二维码详情
    wx.request({
      url: apiurl + "red/create-bg-qr?sign=" + sign + '&operator_id=' + app.data.kid,
      data: {
        red_id: that.data.red_id,
        bg_id: that.data.bg_id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log("二维码:", res);
        let status = res.data.status
        if (status == 1) {
          wx.setStorageSync('imgurl', res.data.data);
          wx.navigateTo({
            url: '../share/share?bg_id=' + bg_id + '&red_id=' + red_id
          })
        } else {
          tips.error(res.data.msg);
        }

      }
    })
  }
 


})