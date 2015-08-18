$(function(){
	/**
     中间内容居中
	*/
	 var c_h=$(".wrap").height();//首页内容高度

	 $(".wrap").css("padding-top",((w_h-c_h)/2)+"px");  

    /**
     新手引导
	*/
     $(".guidBg").show();
     $(".guidMain").show();
      
      //下次引导
	$(".guidMain  .colourRed").bind("click", function() {

		$(this).parent().hide();
	    $(".guidBg").hide();

	});

	//开始引导-精品阅读
	$(".guidMain  .colourGreen").bind("click", function() {

		$(this).parent().hide();
	    $(".siderNavForGuide .goToFineReadUl").show();
	    $(".guidFineRead").show();

	});

	//切换导航
	$(".guidFineRead   .colourGreen").bind("click", function() {
        
        $(".siderNavForGuide ul").hide();
		$(".siderNavForGuide .navUl").show();
	    $(".guidFineRead").hide();
	    $(".guidNav").show();
	});

	//搜索
	$(".guidNav   .colourGreen").bind("click", function() {
        
        $(".siderNavForGuide ul").hide();
		$(".siderNavForGuide .searchUl").show();
	    $(".guidNav").hide();
	    $(".guidSearch").show();
	});

	//管理
	$(".guidSearch   .colourGreen").bind("click", function() {
        
        $(".siderNavForGuide ul").hide();
		$(".siderNavForGuide .manageUl").show();
	    $(".guidSearch").hide();
	    $(".guidManage").show();
	});

	//完成新手引导
	$(".guidManage   .colourGreen").bind("click", function() {
        
        $(".siderNavForGuide ul").hide(); 
	    $(".guidManage").hide();
	    $(".guidBg").hide();	     
	});


	 
});

 /**
  文本展开、收起
  	*/
 String.prototype.limitstr = function(limitlength) {
 	if (this.length <= limitlength + 5) {
 		return this;
 	}
 	var tmpstr = this.substr(0, limitlength);
 	return tmpstr + "......";
 };

 var str = $(".m-companyInfo p").html(); //你的字符串
 var strshort = str.limitstr(108); //你要的长度

 function togglestr(type) {
 	if (type == 0) {
 		$("#companyText").html(str + "<span onclick='togglestr(1)'>[收起]</span>");
 	} //container是你的容器，我假设是div
 	else {
 		$("#companyText").html(strshort + "<span onclick = 'togglestr(0)'>[查看全部]</span>");
 	}
 }
 togglestr(1);

