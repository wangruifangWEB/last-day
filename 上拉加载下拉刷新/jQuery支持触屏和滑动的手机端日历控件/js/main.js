require.config({
	paths : {
		"jquery" :"jquery.min",
		"swiper" :"swiper-3.3.1.min",
		"ladycalendar":"ladycalendar"
	}
})
require([ 'jquery',"ladycalendar" ], function($, Calendar) {		
	var healthData={
		"laststartat":0,
		"jinqichixu":7,
		"jinqizhouqi":28,
		"times":10
	}	
	
	healthData.inJinqi=function(tm){
			for(var i=-this.times;i<this.times;i+=1){
				var startat = this.laststartat + i*this.jinqizhouqi*24*3600*1000;
				
			if(tm>=startat && tm<startat+this.jinqichixu*3600*1000*24){
					return true;
				}
			}
			return false;
		}
        
    healthData.inJinqiyuce=function(tm){
		for(var i=-this.times;i<this.times;i+=1){
			var startat = this.laststartat + i*this.jinqizhouqi*24*3600*1000;
			if(tm>=startat && tm<startat+this.jinqichixu*3600*1000*24){
				return true;
			}
        }
        return false;
        }
	healthData.inanquanqi=function(tm){
			return !this.inpailuan(tm) && !this.inJinqi(tm);
	}	
	healthData.inpailuan=function(tm,tb,ta){
			var at = this.laststartat - 14*24*3600*1000;
			for(var i=-this.times;i<this.times;i+=1){
				var startat = at + i*this.jinqizhouqi*24*3600*1000;
				if(tm>=startat-5*24*3600*1000 && tm<=startat+4*24*3600*1000){
					return true;
				}
			}
			return false;
		}
		healthData.inpailuan2=function(tm,tb,ta){
			var at = this.laststartat - 14*24*3600*1000;
			for(var i=-this.times;i<this.times;i+=1){
				var startat = at + i*this.jinqizhouqi*24*3600*1000;
				if(tm>=startat-1*24*3600*1000 && tm<=startat+1*24*3600*1000){
					return true;
				}
			}
			return false;
		}
		healthData.atpailuan=function(tm){
			var at = this.laststartat - 14*24*3600*1000;
			for(var i=-this.times;i<this.times;i+=1){
				var startat = at + i*this.jinqizhouqi*24*3600*1000;
				if(tm==startat){
					return true;
				}
			}
			return false;
		}
		healthData.atjinqistart=function(tm){
			for(var i=-this.times;i<this.times;i+=1){
				var startat = this.laststartat + i*this.jinqizhouqi*24*3600*1000;
				
			if(tm==startat){
					return true;
				}
			}
			return false;
		}
	//如下代码用来渲染日历
	//签到之后的状态（点击事件）
		var opts={
			onClickDate:function(o){
			var pinfo = o.find("p");
			var prev_this = pinfo.parent().prev().find("p");
			var next_this = pinfo.parent().next().find("p");
			var p_has = pinfo.hasClass("radius-all");
			
			if(p_has == false){
				pinfo.addClass("radius-all");
			}
			if( prev_this.hasClass("radius-all")){
				pinfo.addClass("radius-right");

			    prev_this.removeClass("radius-all");
			    prev_this.addClass("radius-left");
			}
			if(prev_this.hasClass("radius-right")){
				prev_this.removeClass("radius-right");
				prev_this.addClass("radius-no");
				pinfo.addClass("radius-right");
			}
			
				console.log(prev_this.hasClass("radius_right"));
		},
		onRenderDate:function(o){
			$(o).html("<p>"+$(o).html()+"</p>"); //这里完成添加p标签
			var startat = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
			var tm = parseInt(o.attr("utc"))
			if(tm== startat.getTime()){
				$(o).html("<p class='today border7ecbed'>今</p>");
			}
			//这里添加各种逻辑判断
		},
		container:$(".calendar")
		}		
     
	$(function(){
		//1
		var calendar = new  Calendar();
        calendar.init(opts);
        calendar.create(-3,3);
       
		//
		opts.container = $(".calendar2");
		var calendar2 = new  Calendar();
        calendar2.init(opts);
        calendar2.create(-3,3);
       
		//
		opts.container = $(".calendar3");
		var calendar3 = new  Calendar();
        calendar3.init(opts);
        calendar3.create(-3,3);
      
	})
});