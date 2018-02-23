//index.js
//获取应用实例
var app = getApp()
Page({
  data:{ 
    h:"200px",
    s1:"block",
    s2:"none",
    s3:"none",
    cl1:"active",
    cl2:"",
    cl3:""
  },
   a1:function(e){
    console.dir(e)  
    var that=this;
     if(e.target.dataset.xy=="0"){
        that.setData({s1:"block",
                s2:"none",
                s3:"none",
                cl1:"active",
                cl2:"",
                cl3:""
    })
     }else if(e.target.dataset.xy=="1"){
     that.setData({s1:"none",
                s2:"block",
                s3:"none",
                cl1:"",
                cl2:"active",
                cl3:""
    })
    }else if(e.target.dataset.xy=="2"){
     that.setData({s1:"none",
                s2:"none",
                s3:"block",
                cl1:"",
                cl2:"",
                cl3:"active"
    })
    }
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
