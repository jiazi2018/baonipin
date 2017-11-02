//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    array: ['30秒', '5秒', '10秒', '15秒', '20秒', '30秒', '40秒', '50秒', '60秒'],
    text: ['请输入文字','大吉大利，今晚吃鸡', '升职加薪总经理，走上人生巅峰~', '科学研究明表汉怎字序排不也影响阅读', '生日快乐~'],
    speak:['我爱你','我喜欢你','我是逗比'],
    index: 0,
    wenzi:0,
    shuo:0,
    word: "",
    money1: "",
    money2: "",
    num:'',
    options :false,
    speakAll:false
  },
  
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  //事件处理函数text
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      wenzi: e.detail.value,
      options: true
    })
  },
  //事件处理函数array
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //事件处理函数speak
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      shuo: e.detail.value,
      speakAll: true
    })
  },
  //事件处理函数niceimg
  seeImg: function () {
    wx.navigateTo({
      url: '../niceimg/niceimg'
    })
  },
  // 文字
  word(e) {
    this.setData({
      word: e.detail.value
    })
  },
  // 单个金额
  money1(e) {
    this.setData({
      money1: e.detail.value
    })
  },
  // 总金额
  money2(e) {
    this.setData({
      money2: e.detail.value
    })
  },
  // 数量
  num(e) {
    this.setData({
      num: e.detail.value
    })
  },
  // 语音
  speakmove(e){
    this.setData({
      speakmove: e.detail.value
    })
  },
  phone:function(){
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        that.setData({
          tempFilePaths: tempFilePaths
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
