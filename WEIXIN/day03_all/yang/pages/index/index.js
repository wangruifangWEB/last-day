//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    zz:12,
    xx:"#000"  
  },
  abc:function(){
    console.log(34)
    this.setData({zz:34})
    this.setData({xx:"#f00"})
    //var t=document.getElementById("nei")
    //t.style.color="#f00"
  }
})
