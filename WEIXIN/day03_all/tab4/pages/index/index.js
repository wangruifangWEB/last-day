//index.js
//获取应用实例
var app = getApp()
Page({
  data:{ 
    h:"200px",
    lan:["热销","季节","时令菜",
         "热菜","季节","时令菜",
         "热菜","季节","时令菜",
         "热菜","热销","季节"],
    p:0,
    brr:["active","","","","","","","","","","",""] },
   a1:function(e){
    var that=this;
    var tmp2=that.data.brr;
    for(var i=0;i<tmp2.length;i++){
       tmp2[i]=""
    }
    tmp2[e.target.dataset.xy]="active"
    that.setData({
       p:e.target.dataset.xy,
       brr:tmp2
    }) 
  },
  onLoad:function(){
    var that=this
   //API调用 获取终端的高度 - 120 赋值给list
   wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        var a=res.screenHeight -120
        that.setData({h:a+"px"})
      }
    })
  }
})
