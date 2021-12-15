
var servername="";   
//var servername="http://192.168.0.12:8081/HdjInterface/";   

var pdview_detail = null; //详情页webview
var qdview_detail = null; //详情页webview

/*var dpview_detail=null;
var adview=null;
var emview = null;*/
//mui.init();
mui.plusReady(function() {
        //pdview_detail =  preload("productdetail.html");
       // qdview_detail = preload("productdetailoffer.html");
       
        pdview_detail = plus.webview.getWebviewById('productdetail');
        qdview_detail =plus.webview.getWebviewById('productdetailoffer');
       /* setTimeout(function(){
                          var array = plus.webview.all();
                     if(array){
                     	//alert("预加载页数量："+array.length);
                            for(var i=0,len=array.length;i<len;i++){
                            console.info(i+"-->"+ array[i].getURL());
                                                      }
                       }
                    },2000)*/
        
      // alert("预加载页："+pdview_detail.getURL()); 
      // alert("预加载页："+qdview_detail.getURL()); 
     /* dpview_detail = plus.webview.getWebviewById("dianpu");
	  adview =plus.webview.getWebviewById("adview");
	  emview = plus.webview.getWebviewById("webview_embed");*/
        
});
function nvl(item,value){
	return item?item:value; 
}
/*-----------预加载页面-------------*/
function preload(url) {
			var prd=mui.preload({
					url: url,
					id: url,
					styles: {
						"render": "always",
						"popGesture": "hide",
						"bounce": "vertical",
						"bounceBackground": "#efeff4",
						//"titleNView": titleNView
					}
				});
			return prd;	
	};
var autoIndex = 0;
function getNextIndex(){
	return autoIndex++;
}
function preloadAndId(url,id) {
			var prd=mui.preload({
					url: url,
					id: id,
					styles: {
						"render": "always",
						"popGesture": "hide",
						"bounce": "vertical",
						"bounceBackground": "#efeff4",
						//"titleNView": titleNView
					}
				});
			return prd;	
	};
function PrefixInteger(num, n) {
	return(Array(n).join(0) + num).slice(-n);
}

function formatSeconds(value) {
	var theTime = parseInt(value); // 秒 
	var theTime1 = 0; // 分 
	var theTime2 = 0; // 小时 
	// alert(theTime); 
	if(theTime > 60) {
		theTime1 = parseInt(theTime / 60);
		theTime = parseInt(theTime % 60);
		// alert(theTime1+"-"+theTime); 
		if(theTime1 > 60) {
			theTime2 = parseInt(theTime1 / 60);
			theTime1 = parseInt(theTime1 % 60);
		}
	}
	var result = "" + PrefixInteger(parseInt(theTime), 2);
	result = "" + PrefixInteger(parseInt(theTime1), 2) + ":" + result;
	result = "" + PrefixInteger(parseInt(theTime2), 2) + ":" + result;
	return result;
}
/*14.	获取用户头像
 接口名	接口地址	参数	备注
 memberApi	face	mbId	用户ID
 */
/*22.	获取banner图
 接口名	接口地址	参数	备注
 appbannerApi	bannerImg	id	Banner的ID
 */
/*--获取图像地址----------*/
//-----潮流酷玩那些 获取标题背景图-----------homeAdvApi	hadNameicon
//-30.	首页广告=》 标题图   ------------  homeAdvApi	hadTitleicon
//31.	首页广告=》 下面四个子项的图片----------homeAdvApi	detailImg
//--32.	首页导航栏图片    ---------   homenavApi	img
//-----------33.	热门品牌图片获取---------hotBarndApi	img

//----------44.	获取商品内容展示图-----------secondkillApi	contentImg	id

//------------43.	获取商品列表展示图      secondkillApi	showImg	gsiId

//-----获取商品内容Banner图片     secondkillApi	bannerImg	id	调用 商品详情(待写) 返回的 内容图片列表种的ID
var apiarray=[
    {"apn":"memberApi/face","cns":"mbId"},//0---------获取用户头像
    {"apn":"appbannerApi/bannerImg","cns":"id"},//1---------获取banner图
	{"apn":"homeAdvApi/hadNameicon","cns":"id"},//2---------获取标题背景图
    {"apn":"homeAdvApi/hadTitleicon","cns":"id"},//3---------标题图
    {"apn":"homeAdvApi/detailImg","cns":"id"},//4---------面四个子项的图片
    {"apn":"hotBarndApi/img","cns":"id"},//5-----------33.	热门品牌图片获取
    {"apn":"goodsInfoApi/showImg","cns":"gsiId"},//6---------获取商品列表展示图
    {"apn":"goodsInfoApi/bannerImg","cns":"id"},//7---------获取用商品内容Banner图片
    {"apn":"goodsInfoApi/contentImg","cns":"id"},//8---------获取品内容展示图
    {"apn":"foregroundApi/icon","cns":"id"},//9---------57.	根据类目图标
     {"apn":"commentApi/commentpic","cns":"picId"},//10---------57.	根据类目图标

]
function getserverimg(id,n) {
	var apin=apiarray[n].apn;
	var cnis=apiarray[n].cns;
	var simgurl=servername+apin+".do?"+cnis+"="+id;
	console.log("请求:"+simgurl);
	return simgurl;
}

/*激活选项卡*/
function activedom(dome,ind){
			var c=dome.children;
			//console.log(dome.className+"--"+c.length)
			for (i=0; i<c.length; i++){
				  //  console.log(c[i].className+"--"+i);
				   //console.log(c[i].nodeName+"--"+c[i].innerHTML) ;
		            c[i].classList.remove("mui-active");
		           // console.log(c[i].className+"--"+i);
	            };
	        c[ind].classList.add("mui-active");  
	        console.log(c[ind].className+"--"+ind)
		}
/*后日期毫秒台---转换-------------*/
function convertdate(str){
			var oDate = new Date(str),  
            oYear = oDate.getFullYear(),  
            oMonth = oDate.getMonth()+1,  
            oDay = oDate.getDate(),  
            oHour = oDate.getHours(),  
            oMin = oDate.getMinutes(),  
            oSen = oDate.getSeconds(),  
            oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间  
            return oTime;  
		}
function converthour(str){
	var oDate = new Date(str),  
  /*  oYear = oDate.getFullYear(),  
    oMonth = oDate.getMonth()+1,  
    oDay = oDate.getDate(),  */    
    oHour = oDate.getHours(),  
    oMin = oDate.getMinutes(),  
    oSen = oDate.getSeconds(),      
    oTime =getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间  
    return oTime;  
}
function convertyear(str){
			var oDate = new Date(str),  
            oYear = oDate.getFullYear(),  
            oMonth = oDate.getMonth()+1,  
            oDay = oDate.getDate(),  
            oHour = oDate.getHours(),  
            oMin = oDate.getMinutes(),  
            oSen = oDate.getSeconds(),  
            oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay);//最后拼接时间  
            return oTime;  
		}
function getzf(num){  
	if(parseInt(num) < 10){  
	    num = '0'+num;  
	}  
    return num;  
}  
        
//-----------评价星君转换---------
 function ctcolor(tr){
	    	var str='';
	    	if(tr==true){
	    		str='gainsboro';
	    	}else{
	    		str='red';
	    	}
	    	return str;
	    }
 //-----------竞拍列表--------
 function ctc(tr){
	var str='';
	if(tr==0){
		str='#fe3232';
	}else{
		str='#555555';
	}
	return str;
}
 
 /*-------nativeui--------*/
	    function preimg(mg,key){
	    	//alert(key);
	    	var urls = [];
            mg.forEach(function(item) {
            	  var url=getserverimg(item.id,10);
                  urls.push(url);
            });
            plus.nativeUI.previewImage(urls, {
                    current: key,
                    loop: false,
                    indicator: 'number'
               });
          }
	    
/*---h5 模式 获取会员信息-----*/	
/*本地存储--*/
/*localStorage.setItem(, );

mbinfo  会员基本信息
lauchFlag      是否登录

goods_info  列表商品信息
mercid        商户id

order_state  订单状态跳转
mycare      我的关注
*/

/*---*/
//var mbinfo;
var h5_mbinfo={'petName':'ss',"mbId":"9755568"};
 
localStorage.setItem("lauchFlag", 'true'); 
   // mbinfo=localStorage.getItem('mbinfo');
    
   if(localStorage.getItem('mbinfo')){
	    h5_mbinfo=JSON.parse(localStorage.getItem('mbinfo'));
   }
/*---商品详情页*/
function open_goods(item) {
			//alert("--->导出货品id" + item.id);
			console.log("列表商品基本信息" + JSON.stringify(item));
			localStorage.setItem("goods_info",JSON.stringify(item));
			mui.openWindow('productdetail.html');
		}
function savehistroy(item){
	item.ctime=new Date().getTime();
	
	if(localStorage.getItem('histroy_info')){
	    var sar=JSON.parse(localStorage.getItem('histroy_info'));
	    sar.push(item);
	    /*---保存---*/
	    localStorage.setItem("histroy_info",JSON.stringify(sar));
	};
	
	/*var sary=JSON.parse(localStorage.getItem('histroy_info'));
	var sn=sary.length-1;
	var st=sary[sn];
	alert("历史记录->"+sn+"--"+st.gsiName+"--"+convertdate(st.ctime));*/
	
}