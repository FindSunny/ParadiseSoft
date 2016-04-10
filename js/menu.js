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
});