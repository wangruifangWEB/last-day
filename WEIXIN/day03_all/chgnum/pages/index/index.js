//index.js
//获取应用实例
Page({
  data:{
   show:"none",
   shnum:0
  },
  num1:function(){
    var s=this.data.shnum
    s--
    this.setData({shnum:s})
    if(s<=0){
      this.setData({show:"none"})
    }
   },
  num2:function(){
    this.setData({show:"block"})
    var s=this.data.shnum
    s++
    this.setData({shnum:s})
  }
})
