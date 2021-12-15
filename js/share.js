var shares=null,sharewx=null;shareqq=null;

function shareWeixinMessage(ex){
	mui('#sharepop').popover('toggle');
	var msg = {
				extra: {
					scene: ex
				}
			};
			msg.href = "http://www.huidj.cn/";
			msg.title = "优惠省钱方式，就选惠当家";
			msg.content = "http://www.huidj.cn/";
			msg.thumbs = ["../images/zch.png"];
	
	sharewx.send(msg, function(){
		alert( "分享成功！" );
	}, function(e){
		alert( "分享失败："+e.message );
	});
}
function shareqqMessage(){
	mui('#sharepop').popover('toggle');
	var msg = {};
			msg.href = "http://www.huidj.cn/";
			msg.title = "优惠省钱方式，就选惠当家";
			msg.content = "http://www.huidj.cn/";
			msg.thumbs = ["../images/zch.png"];
	shareqq.send(msg, function(){
		alert( "分享成功！" );
	}, function(e){
		alert( "分享失败："+e.message );
		//location.href='sharelist.html';
	});
}