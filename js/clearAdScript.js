/**
 * 清除广告的脚本
 */

;$(function(){
	var clearAd = {
		clear: function(){
			//可能出现的广告框ID
			var adIdNames = [
				"cproIframe2001CloseBtnWrap",
				"cproIframe2002CloseBtnWrap",
				"cproIframe2003CloseBtnWrap",
				"cproIframe2004CloseBtnWrap",
				"cproIframe2005CloseBtnWrap",
				"cproIframe2006CloseBtnWrap",
				"cproIframe2007CloseBtnWrap",
				"cproIframe2008CloseBtnWrap",
				"cproIframe2009CloseBtnWrap",
				"cproIframe2010CloseBtnWrap",
				"cproIframe2011CloseBtnWrap",
				"cproIframe2012CloseBtnWrap",
				"txtlink"
			];

			var adClassNames = [
				"mainlr",
				"topimg"
			];

			for (var i = 0; i < adIdNames.length; i++) {
				$("#" + adIdNames[i]).hide();
				$("#" + adIdNames[i]).click();
			};

			for (var i = 0; i < adClassNames.length; i++) {
				// $("." + adClassNames[i]).hide();
				if(document.querySelector("." + adClassNames[i]) != null)
					document.querySelector("." + adClassNames[i]).style.display = "none";
			};
		},
		//查找其他可能出现的广告
		findAds: function(){
			var ads = $("div iframe"),
				adImg = $("div script").parent().find("img,embed"),
				floatImg = $("div object").parent().find("img,embed");
			this.arrDel(ads,360,200);
			this.arrDel(adImg,350,150);
			this.arrDel(floatImg,350,150);
		},

		arrDel: function(arr,conWidth,conHeight){
			for (var i = 0; i < arr.length; i++) {
				var self = arr.eq(i);

				if (self.width() <= conWidth || self.height() <= conHeight) {
					self.hide();
				};

			};
		},

		init: function(){
			console.log("clear start");
			this.clear();
			this.findAds();
			console.log("clear end");
		}
	}
	clearAd.init();
});
