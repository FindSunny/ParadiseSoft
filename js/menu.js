//Add 2016/04/10
//Suo
//主菜单页面初始化

mui.init({
	//侧滑关闭
	swipeBack: false,
	
	//设置状态栏颜色.仅iOS可用
	statusBarBackground: '#f7f7f7',
	
	//手势配置
	gestureConfig: {
		tab: true,
		doubletap: true
	},
	//子页面
	subpages: [
//	{
////		id: 'list',
////		url: 'list.html',
////		styles: {
////			top: '45px',
////			bottom: 0,
////			bounce: 'vertical'
////		}
//	}
	]
});
mui.plusReady(function() {
	console.log("当前页面URL："+plus.webview.currentWebview().getURL());
	
//*****START Edit Suo 2016/04/10 11:13*****
//	//交通费用
//	document.getElementById('traffic').addEventListener('tap', function() {
//		openWindow();
//	});
//	
//	//住宿费用
//	document.getElementById('shelter').addEventListener('tap', function() {
//		openWindow();
//	});
//	
//	//三餐费用
//	document.getElementById('food').addEventListener('tap', function() {
//		openWindow();
//	});
//	
//	//玩乐费用
//	document.getElementById('fun').addEventListener('tap', function() {
//		openWindow();
//	});
	jQuery(".mui-btn").click(function(){
		var title = jQuery(this).html();
		var url = "";
		if(jQuery(this).attr('id') !== 'pay'){
			url = '../pages/addBill.html';
		}else{
			url = '../pages/billCal.html';
		}
		openWindow(title, url);
	});
//*****End Edit Suo 2016/04/10 11:13*****

});

function openWindow(title, url){
	//打开关于页面
	  mui.openWindow({
	    url: url, 
	    id:'info',
	    extras:{
	        title: title
	    }
	  });
}

//首页返回键处理
//处理逻辑：1秒内，连续两次按返回键，则退出应用；
var first = null;
mui.back = function() {

	//首次按键，提示‘再按一次退出应用’
	if (!first) {
		first = new Date().getTime();
		mui.toast('再按一次退出应用');
		setTimeout(function() {
			first = null;
		}, 1000);
	} else {
		if (new Date().getTime() - first < 1000) {
			plus.runtime.quit();
		}
	}
	
};
