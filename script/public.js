/**
 满屏高度
*/
var w_h = $(window).height();

$(function() {
	/**
     背景全屏
	*/
	$(".siteBgCover").css("height", w_h + "px");

	/**
     搜索显示、收起
	*/
    $(".search").bind("mouseover",function(){
    	$(".SQ_searchBox").css("display","block");
    });
    var s=null;//鼠标移走延迟时间
	$(".SQ_searchBox").bind("mouseleave", function() {
        clearTimeout(s);
		s=setTimeout(function() {
			$(".SQ_searchBox").css("display", "none");
		}, 2000);
	});
	$(".SQ_searchBox").bind("mouseover", function() {
		clearTimeout(s); 
		$(".SQ_searchBox").css("display", "block");
		 
	});

	/**
	  弹出导航
	*/
	$(".siderNav #home").unbind().bind("click", function() {
		var addLocationDialogHTML = '<div class="dialogCon"><ul class="mainNav"><li><a href="">首页</a></li><li><a href="">精品阅读</a></li><li><a href="">读者活动</a></li><li><a href="">读者论坛</a></li><li><a href="">我要投稿</a></li></ul></div>';
		styledialog.initDialogHTML({
			title: "",
			content: addLocationDialogHTML,
			//width: 100%,
			 height: w_h,
			confirm: {
				show: false,
				name: "确认"
			},
			cancel: {
				show: false,
				name: "取消"
			}
		});
		styledialog.initContent("", addLocationDialogHTML, addLocationEvent);
         
		function addLocationEvent() {

		}
	});
    
    /**
	  搜索列表
	*/
	var strVar = "";
    strVar += "<div class=\"searchList\">";
    strVar += "    <h2><span>风景<\/span> 在文章\\话题\\活动中的搜索结果<\/h2>";
    strVar += "    <div class=\"searchDoclist\">";
    strVar += "    <ul>  ";
    strVar += "          <li>";
    strVar += "              <div class=\"doc_name\">";
    strVar += "                  <a href=\"/info/30433\" target=\"_blank\">";
    strVar += "                      魅力寒假 <em>风景<\/em>";
    strVar += "                  <\/a>";
    strVar += "              <\/div>";
    strVar += "              <div class=\"doc_previewimg\">";
    strVar += "                  <img width=\"145px\" height=\"145px\" src=\"http://files.dodoedu.com/wenku/e9384ed49abc51f9.png\" alt=\"魅力寒假\"><\/div>";
    strVar += "              <div class=\"doc_intro\"> <strong>文档概要：<\/strong>";
    strVar += "                  廖思淇*寒还我的她可次做奶义假是主忘的是寒清奶。亲生记动记乖四假洁做我爱活得担了曾世我，家不的吧我负好孙同和我务仅老。的起多，堂爷可， <em>风景<\/em>";
    strVar += "                  每师，了不太奶样.....";
    strVar += "              <\/div>";
    strVar += "              <div class=\"doc_desc\">";
    strVar += "                  上传";
    strVar += "                  <em>风景<\/em>";
    strVar += "                  |  160天前上传  |  大小:11.47 MB  |    页数：7";
    strVar += "              <\/div>";
    strVar += "          <\/li>";
    strVar += "          <li>";
    strVar += "              <div class=\"doc_name\">";
    strVar += "                  <a href=\"/info/30433\" target=\"_blank\">";
    strVar += "                      魅力寒假 <em>风景<\/em>";
    strVar += "                  <\/a>";
    strVar += "              <\/div>";
    strVar += "              <div class=\"doc_previewimg\">";
    strVar += "                  <img width=\"145px\" height=\"145px\" src=\"http://files.dodoedu.com/wenku/e9384ed49abc51f9.png\" alt=\"魅力寒假\"><\/div>";
    strVar += "              <div class=\"doc_intro\"> <strong>文档概要：<\/strong>";
    strVar += "                  廖思淇*寒还我的她可次做奶义假是主忘的是寒清奶。亲生记动记乖四假洁做我爱活得担了曾世我，家不的吧我负好孙同和我务仅老。的起多，堂爷可， <em>风景<\/em>";
    strVar += "                  每师，了人如坚同面看生不太奶样.....";
    strVar += "              <\/div>";
    strVar += "              <div class=\"doc_desc\">";
    strVar += "                  上传";
    strVar += "                  <em>风景<\/em>";
    strVar += "                  |  160天前上传  |  大小:11.47 MB  |    页数：7";
    strVar += "              <\/div>";
    strVar += "          <\/li>";
    strVar += "          <li>";
    strVar += "              <div class=\"doc_name\">";
    strVar += "                  <a href=\"/info/30433\" target=\"_blank\">";
    strVar += "                      魅力寒假 <em>风景<\/em>";
    strVar += "                  <\/a>";
    strVar += "              <\/div>";
    strVar += "              <div class=\"doc_previewimg\">";
    strVar += "                  <img width=\"145px\" height=\"145px\" src=\"http://files.dodoedu.com/wenku/e9384ed49abc51f9.png\" alt=\"魅力寒假\"><\/div>";
    strVar += "              <div class=\"doc_intro\"> <strong>文档概要：<\/strong>";
    strVar += "                  廖思淇*寒还我的她可次做奶义假是主忘的是寒清奶。亲生记动记乖四假洁做我爱活得担了曾世我，家不的吧我负好孙同和我务仅老。的起多，堂爷可， <em>风景<\/em>";
    strVar += "                  每师，了人看生不太奶样.....";
    strVar += "              <\/div>";
    strVar += "              <div class=\"doc_desc\">";
    strVar += "                  上传";
    strVar += "                  <em>风景<\/em>";
    strVar += "                  |  160天前上传  |  大小:11.47 MB  |    页数：7";
    strVar += "              <\/div>";
    strVar += "          <\/li>";
     strVar += "          <li>";
    strVar += "              <div class=\"doc_name\">";
    strVar += "                  <a href=\"/info/30433\" target=\"_blank\">";
    strVar += "                      魅力寒假 <em>风景<\/em>";
    strVar += "                  <\/a>";
    strVar += "              <\/div>";
    strVar += "              <div class=\"doc_previewimg\">";
    strVar += "                  <img width=\"145px\" height=\"145px\" src=\"http://files.dodoedu.com/wenku/e9384ed49abc51f9.png\" alt=\"魅力寒假\"><\/div>";
    strVar += "              <div class=\"doc_intro\"> <strong>文档概要：<\/strong>";
    strVar += "                  廖思淇*寒还我的她可次做奶义假是主忘的是寒清奶。亲生记动记乖四假洁做我爱活得担了曾世我，家不的吧我负好孙同和我务仅老。的起多，堂爷可， <em>风景<\/em>";
    strVar += "                  每师，了人看生不太奶样.....";
    strVar += "              <\/div>";
    strVar += "              <div class=\"doc_desc\">";
    strVar += "                  上传";
    strVar += "                  <em>风景<\/em>";
    strVar += "                  |  160天前上传  |  大小:11.47 MB  |    页数：7";
    strVar += "              <\/div>";
    strVar += "          <\/li>";
     strVar += "          <li>";
    strVar += "              <div class=\"doc_name\">";
    strVar += "                  <a href=\"/info/30433\" target=\"_blank\">";
    strVar += "                      魅力寒假 <em>风景<\/em>";
    strVar += "                  <\/a>";
    strVar += "              <\/div>";
    strVar += "              <div class=\"doc_previewimg\">";
    strVar += "                  <img width=\"145px\" height=\"145px\" src=\"http://files.dodoedu.com/wenku/e9384ed49abc51f9.png\" alt=\"魅力寒假\"><\/div>";
    strVar += "              <div class=\"doc_intro\"> <strong>文档概要：<\/strong>";
    strVar += "                  廖思淇*寒还我的她可次做奶义假是主忘的是寒清奶。亲生记动记乖四假洁做我爱活得担了曾世我，家不的吧我负好孙同和我务仅老。的起多，堂爷可， <em>风景<\/em>";
    strVar += "                  每师，了人看生不太奶样.....";
    strVar += "              <\/div>";
    strVar += "              <div class=\"doc_desc\">";
    strVar += "                  上传";
    strVar += "                  <em>风景<\/em>";
    strVar += "                  |  160天前上传  |  大小:11.47 MB  |    页数：7";
    strVar += "              <\/div>";
    strVar += "          <\/li>";
     strVar += "          <li>";
    strVar += "              <div class=\"doc_name\">";
    strVar += "                  <a href=\"/info/30433\" target=\"_blank\">";
    strVar += "                      魅力寒假 <em>风景<\/em>";
    strVar += "                  <\/a>";
    strVar += "              <\/div>";
    strVar += "              <div class=\"doc_previewimg\">";
    strVar += "                  <img width=\"145px\" height=\"145px\" src=\"http://files.dodoedu.com/wenku/e9384ed49abc51f9.png\" alt=\"魅力寒假\"><\/div>";
    strVar += "              <div class=\"doc_intro\"> <strong>文档概要：<\/strong>";
    strVar += "                  廖思淇*寒还我的她可次做奶义假是主忘的是寒清奶。亲生记动记乖四假洁做我爱活得担了曾世我，家不的吧我负好孙同和我务仅老。的起多，堂爷可， <em>风景<\/em>";
    strVar += "                  每师，了人看生不太奶样.....";
    strVar += "              <\/div>";
    strVar += "              <div class=\"doc_desc\">";
    strVar += "                  上传";
    strVar += "                  <em>风景<\/em>";
    strVar += "                  |  160天前上传  |  大小:11.47 MB  |    页数：7";
    strVar += "              <\/div>";
    strVar += "          <\/li>";
    strVar += "          <li>";
    strVar += "              <div class=\"doc_name\">";
    strVar += "                  <a href=\"/info/30433\" target=\"_blank\">";
    strVar += "                      魅力寒假 <em>风景<\/em>";
    strVar += "                  <\/a>";
    strVar += "              <\/div>";
    strVar += "              <div class=\"doc_previewimg\">";
    strVar += "                  <img width=\"145px\" height=\"145px\" src=\"http://files.dodoedu.com/wenku/e9384ed49abc51f9.png\" alt=\"魅力寒假\"><\/div>";
    strVar += "              <div class=\"doc_intro\"> <strong>文档概要：<\/strong>";
    strVar += "                  廖思淇*寒还我的她可次做奶义假是主忘的是寒清奶。亲生记动记乖四假洁做我爱活得担了曾世我，家不的吧我负好孙同和我务仅老。的起多，堂爷可， <em>风景<\/em>";
    strVar += "                  每师，了不太奶样.....";
    strVar += "              <\/div>";
    strVar += "              <div class=\"doc_desc\">";
    strVar += "                  上传";
    strVar += "                  <em>风景<\/em>";
    strVar += "                  |  160天前上传  |  大小:11.47 MB  |    页数：7";
    strVar += "              <\/div>";
    strVar += "          <\/li>";
    strVar += "          ";
    strVar += "    ";
    strVar += "  <\/ul>";
    strVar += "<\/div>";
    strVar += "<\/div>";

    $(".icon_magnifier").unbind().bind("click", function() {
		var addLocationDialogHTML = '<div class="dialogCon">'+strVar+'</div>';
		styledialog.initDialogHTML({
			title: "",
			content: addLocationDialogHTML,
			//width: 100%,
			 height: w_h,
			confirm: {
				show: false,
				name: "确认"
			},
			cancel: {
				show: false,
				name: "取消"
			}
		});
		styledialog.initContent("", addLocationDialogHTML, addLocationEvent);
         
		function addLocationEvent() {

		}
	});

   /**
	  搜索初始化
	*/
  $('#search').initSearch();
  $.dropdownSelect('customDropdownStyle2','customDropdown1MouseOver');

  /**
	 活动列表交互
  */
	$(".multipleColumn .itemNoral").bind("mouseover", function() {

		$(this).find(".itemNoralHov").show();

	}).bind("mouseleave", function() {

		$(this).find(".itemNoralHov").hide();
		
	});


});

/**
  搜索插件
*/
jQuery.fn.extend({
        initSearch: function(){
            if(this.length <= 0){
                return false;
            }
            var id = this.attr('id');
            var main = this;
            main.extend({
            // 搜索建议容器
                suggest: jQuery('#suggest-'+id),
                // 搜索建议选项
                suggestItem: null,
                // 当前选中的搜索建议索引值
                currentIndex: null,
                currentItem: null,
                activeColor: '#F6F6F6',
                itemColor: '#4eb3a2',
                // 搜索建议
                showsuggest: function(keyword){
                //进行ajax请求数据填充至下拉列表。由于demo无法进行请求，顾将数据写死在此。
                    var html = '';
                    html += '<li class="associateCell"><a href="javascript:;" title="">数据一</a></li>';
                    html += '<li class="associateCell"><a href="javascript:;" title="">数据二</a></li>';
                    html += '<li class="associateCell"><a href="javascript:;" title="">数据三</a></li>';
                    html += '<li class="associateCell"><a href="javascript:;" title="">数据四</a></li>';
                    html += '<li class="associateCell"><a href="javascript:;" title="">数据五</a></li>';
                    html += '<li class="associateCell"><a href="javascript:;" title="">数据六</a></li>';
                    html += '<li class="associateCell"><a href="javascript:;" title="">数据七</a></li>';
                    html += '<li class="associateCell"><a href="javascript:;" title="">数据八</a></li>';

                    main.suggestItem = main.suggest.html(html).show().find('li.associateCell');
                    main.suggestItem.bind({
                        click: function(e){
                            // 设置输入框的值为选中的值
                            var value = jQuery(this).text();
                            main.val(value);
                            main.search(value);

                            // 隐藏预搜索
                            //main.preSearch(value);

                            // 隐藏搜索建议
                            main.suggest.hide();
                        }
                    }).hover(
                        function(e){
                            this.style.backgroundColor=main.activeColor;
                        },
                        function(e){
                            this.style.backgroundColor=main.itemColor;
                        }
                    );
                },
                // 选中上一个搜索建议
                selectPrev: function(){
                    if (main.currentIndex == null || main.currentIndex <= 0) {
                        main.currentIndex = main.suggestItem.length;
                    };
                    main.currentIndex -= 1;
                    main.focusCurrent();
                },
                // 选中下一个搜索建议
                selectNext: function(){
                    if (main.currentIndex == null) {
                        main.currentIndex = -1;
                    }
                    main.currentIndex += 1;
                    main.focusCurrent();
                },
                // 当前元素获取焦点
                focusCurrent: function(){
                    main.currentItem = jQuery(main.suggestItem.get(main.currentIndex));
                    main.val(main.currentItem.text());
                    main.currentIndex %= main.suggestItem.length;
                    main.suggestItem.css('backgroundColor', main.itemColor);
                    main.currentItem.css('backgroundColor', main.activeColor);
                },
                // 预搜索
                preSearch: function(keyword){
                    jQuery.get(window.location.href, {'keyword':keyword}, function(html){
                        jQuery("div.SQserpCon").html(html);
                    }, 'html');
                },
                search: function(keyword){
                    if (keyword.length > 1) {
                        var url = main.parent().attr('action');
                        window.location.href = url + '?keyword=' + keyword;
                    }
                }
                }).bind({
                keyup: function(e){
                    switch(e.keyCode){
                    // 向下键
                        case 40:
                            main.selectNext();
                            break;
                        // 向上键
                        case 38:
                            main.selectPrev();
                            break;
                        // 回车键
                        case 13:
                        // 阻止回车提交事件
                            e.preventDefault();
                            if(main.currentIndex != null){
                                main.search(main.currentItem.text());
                            }
                            break;
                        default:
                            var e_value = jQuery.trim(e.target.value);
                            if(e_value.length > 0){
                                main.showsuggest(e_value);
                            }
                    }

                }
                }).parent().bind({
                submit: function(e){
                // 如果搜索的关键字长度过少则不提交
                if (main.val().length < 2) {
                    return false;
                }
                }
                });
                $('body').bind({
                click: function (e) {
                main.suggest.hide();
                }
            });
        }
    });


/**
  下拉选择插件
*/
 jQuery.extend({
        dropdownSelect: function (obj,mouseOverStyle) {
            //下拉框隐藏显示
            var timeParam;
            $('.' + obj + " .dropdown_currentValue").bind("mouseover", function () {
                $('.' + obj).find('.dropdownItem').css('visibility', 'visible');
                $('.' + obj).attr('class', 'customDropdownWrap inlineBlock '+obj+' '+mouseOverStyle);
                clearTimeout(timeParam);
            });
            $('.' + obj + " .dropdown_currentValue").bind("mouseout" , function () {
                timeParam = setTimeout(function () {
                    $('.' + obj).find('.dropdownItem').css("visibility", "hidden");
                    $('.' + obj).attr('class', 'customDropdownWrap inlineBlock ' + obj);
                }, 1000);
            });

            $('.' + obj + " .dropdownItem").bind("mouseover", function () {
                $(this).css('visibility', 'visible');
                clearTimeout(timeParam);
            });
            $('.' + obj + " .dropdownItem").bind("mouseout" , function () {
                timeParam = setTimeout(function () {
                    $('.' + obj).attr('class', 'customDropdownWrap inlineBlock ' + obj);
                    $('.' + obj).find('.dropdownItem').css("visibility", "hidden");
                }, 1000);
            });
            $('.' + obj + ' .dropdownCell').bind('click', function () {
                $('.' + obj + ' .dropdownCell').find('a').attr('class', '');
                $(this).find('a').attr('class', 'customDropdown_selectedValue');
                $('.' + obj).find('.dropdownItem').css("visibility", "hidden");
                $('.' + obj).attr('class', 'customDropdownWrap inlineBlock ' + obj);
                $('.' + obj).find('.dropdownTxt').html($(this).find('a').html());
                return false;
            });
        }
    });