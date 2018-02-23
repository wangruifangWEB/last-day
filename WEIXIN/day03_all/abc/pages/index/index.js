//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    kk:[
      /**
    {ID:1,name:"测试",price:2.5,pic:"1.jpg"},
    {ID:2,name:"测试",price:2.5,pic:"2.jpg"}
    **/
    ]
  }
  ,
  onLoad:function(){
    var that=this;
    wx.request({
        url: 'http://localhost/getlist.php', //仅为示例，并非真实的接口地址
        data: {
           x: '' ,
           y: ''
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          console.log(res.data)
            that.setData({
             kk:res.data.data
            })
        }
      })




  }
})
