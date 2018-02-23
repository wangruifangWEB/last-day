	//touch事件
	var startY=0,startX=0,endY=0,endX=0,n=1;
	var flag = false;
	document.addEventListener('touchstart',function (ev){
		startY=ev.touches[0].pageY;
		startX=ev.touches[0].pageX;
		//ev.preventDefault();
	},false);
	document.addEventListener('touchmove',function (ev){
			flag = true;
			endY=ev.touches[0].pageY;
			endX=ev.touches[0].pageX;
			ev.preventDefault();
	},false);
	document.addEventListener('touchend',function (ev){
		if(!flag){
			return false;
		};
		if (startX-endX>0) {
			if (n>=3) {
				return;
			}
			switch (n) {
	            case 1:
	            	$("#a1").css({'transform':'translate(-100%,0) translateZ(0)','transition-duration': '400ms'});
	               	$("#a2").css({'transform':'translate(-100%,0) translateZ(0)','transition-duration': '400ms'});
					break;
	            case 2:
					$("#a2").css({'transform':'translate(-200%,0) translateZ(0)','transition-duration': '400ms'});
					$("#a3").css({'transform':'translate(-100%,0) translateZ(0)','transition-duration': '400ms'});
					break;
	        }
	        n++;
		}else if(startX-endX<0){
			if (n<=1) {
	    		return;
	       	};
	        switch (n) {
	            case 2:
	            	$("#a2").css({'transform':'translate(0,0) translateZ(0)','transition-duration': '400ms'});
					$("#a1").css({'transform':'translate(0,0) translateZ(0)','transition-duration': '400ms'});
	                break;
	           case 3:
					$("#a3").css({'transform':'translate(0,0) translateZ(0)','transition-duration': '400ms'});
					$("#a2").css({'transform':'translate(-100%,0) translateZ(0)','transition-duration': '400ms'});
	               	break;
	           }
			n--;
		}
		flag = false;
	},false);
//大图滚动
$(function (){
	var liW=$('#scoI li').width();
	var x=1;//控制图片下标
	var n=0;//控制数字下标
	var anm=true;//控制动画是否可执行
	var timer1=null;
	$('.sco').scrollLeft(liW);
	var fir=$('#scoI li:first').clone();
	var las=$('#scoI li:last').clone();
	$('#scoI').append(fir);
	$('#scoI').prepend(las);
	function autoMove(){
		timer1=setInterval(function (){
			x++;
			if (x>=$('#scoI li').length) {
				x=1;
				$('.sco').scrollLeft(liW);
			};
			n++;
			if (n>=$('#scoP li').length) {
				n=0;
			};
			move();
		},400)
	}
	autoMove();
	function move(){
		$('#scoP li').eq(n).addClass('select').siblings().removeClass('select');
		$('.sco').stop().animate({scrollLeft:liW*x},function (){
			anm=true;
		});
	}

})




