//index.js
//获取应用实例
var app = getApp()
Page({
  data:{ 
    h:"200px",
    arr:["block","none","none","none","none","none","none","none","none","none","none","none"],
    brr:["active","","","","","","","","","","",""] },
   a1:function(e){
    var that=this;
    var tmp=that.data.arr;//["block"]
    var tmp2=that.data.brr;
    for(var i=0;i<tmp.length;i++){
      tmp[i]="none"; tmp2[i]=""
    }
    tmp[e.target.dataset.xy]="block"
    tmp2[e.target.dataset.xy]="active"
    that.setData({
     arr:tmp,brr:tmp2
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
