$(function(){ 
	/*实现思路：
	 	1.引入The Translator Web Widget API
		2.监听dom加载完毕，调用Microsoft.Translator.Widget.Translate()整站翻译。
	 */
    // do something 
    //创建script标签
    var script=document.createElement("script");  
    //script的type
    script.type="text/javascript";  
     //script的路径
    script.src="http://www.microsoftTranslator.com/ajax/v3/WidgetV3.ashx?siteData=ueOIGRSKkd965FeEGM5JtQ**";  
    //追加到head中
    document.getElementsByTagName('head')[0].appendChild(script);  
	//获取language的状态值
    var value = sessionStorage.getItem("language");
   	console.log(value);
   	//当页面加载状态改变的时候执行这个方法. 
    document.onreadystatechange = function () {
    	//当页面加载状态为完全结束时进入
        if (document.readyState == 'complete') {
        	 //value是1的话是English,是0的话是chinese
            if(value==="1"){
            	/*Microsoft.Translator.Widget.Translate(from, to, onProgress:(value), onError: (error), onComplete:(), onRestoreOriginal:(toLanguage), timeOut);
            	 * 
            	 *1.from : A string representing the language code of the original text. If set to null, the source language is autodetected from the page.
            	 * （表示原文的语言代码的字符串。如果设置为null，源语言是自动从网页。）
            	 *2.to : Required A string representing the language code to translate the text into.
            	 * （ 必须,表示将文本翻译成的语言代码的字符串。）
            	 *3.onProgress : Optional. A function delegate that receives an integer value from 0-100 indicating how much of the page is translated.
            	 * (可选。一个函数的委托，从0-100表示多少网页翻译接收一个整型值。)
            	 *4.onError : A function delegate that receives a string that describes an error upon occurrence.
            	 * (接收一个在出现错误时描述错误的字符串的函数委托。)
            	 *5.onComplete : A function delegate that is called when the page translation is complete, similar to calling onProgress(100)
            	 * (一个函数被调用时，将网页翻译完成，类似于电话取得的进展（100）)
            	 *6.timeOut :  A number in milliseconds to abort the function after if the translation is not complete, consider using large values with larger pages.
            	 * (在翻译完成后，在毫秒内放弃函数的数量，考虑使用较大页面的大值。)
            	 */
                Microsoft.Translator.Widget.Translate('zh-CHS', 'en', onProgress, onError, onComplete, onRestoreOriginal, 2000);
            }
        }
    }
    function onProgress(value) {
    	document.getElementById('counter').innerHTML = Math.round(value);
    }
    function onError(error) {
    	alert("Translation Error: " + error);
    }
    function onComplete() {
        $("#WidgetFloaterPanels").hide();
    }
    function onRestoreOriginal() { 
    	alert("The page was reverted to the original language. This message is not part of the widget.");
    }
});

function translate(){
    var value = sessionStorage.getItem("language");
    if(value==="1"){
        sessionStorage.setItem("language", "0"); 
    }else{
        sessionStorage.setItem("language", "1");
    }
    window.location.reload();//刷新当前页面.
}