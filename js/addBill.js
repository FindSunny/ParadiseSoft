//Add 2016/04/10
//Suo
//主菜单页面初始化

mui.init({
	//侧滑关闭
	swipeBack: true,
	
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
	
	var self = plus.webview.currentWebview();
	var title = self.title;
	
	//添加标题
	jQuery('.mui-title').html(title);
	
	//添加费用类型
	document.getElementById("kind_add").addEventListener('tap', function(e) {
		e.detail.gesture.preventDefault(); //修复iOS 8.x平台存在的bug，使用plus.nativeUI.prompt会造成输入法闪一下又没了
		var btnArray = ['确定', '取消'];
		mui.prompt('妈的，又花钱！', '赶紧输入花的啥钱..', '添加消费类型', btnArray, function(e) {
			if (e.index == 1) {
//				info.innerText = '谢谢你的评语：' + e.value;
				var kind = e.value.trim();
				if(kind !== ""){
					//数据库插入(重复判断)
					//...
					
					//页面添加
					jQuery('#kind_select').append("<option>" + kind + "</option>");
				}				

			} else {
//				info.innerText = '你点了取消按钮';
				mui.toast("又不花钱了啊？");
			}
		})
	});
	
	//添加付费人名
	document.getElementById("person_add").addEventListener('tap', function(e) {
		e.detail.gesture.preventDefault(); //修复iOS 8.x平台存在的bug，使用plus.nativeUI.prompt会造成输入法闪一下又没了
		var btnArray = ['确定', '取消'];
		mui.prompt('哟哟，人挺多啊！', '此处输入二货名称', '添加一个二货', btnArray, function(e) {
			if (e.index == 1) {
//				info.innerText = '谢谢你的评语：' + e.value;
				var people = e.value.trim();
				if(people !== ""){
					//数据库插入(重复判断)
					//...
					
					//页面添加
					jQuery('#person_select').append("<option>" + people + "</option>");	
				}
				

			} else {
//				info.innerText = '你点了取消按钮';
				mui.toast("这人又失踪了？");
			}
		})
	});

	
});
