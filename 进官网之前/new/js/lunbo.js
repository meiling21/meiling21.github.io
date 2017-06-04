/*轮播*/
$(function(){
	lunboFocus('#focus_dl dt a','#focus_dl dt li',4,'#focus_dl dd',2,5);//箭头、小图、小图显示数量、大图、小图间距、速度
})
//function lunboFocus(){
function lunboFocus(lb_btn,lb_img_btn_dom,lb_img_btn_num,lb_dd,btn_int,speed){
	if(!lb_btn || !lb_img_btn_dom || !lb_dd) return
	var lb_dd = $(lb_dd); //大图jq对象
	var lb_btn = $(lb_btn);//左右按钮jq对象
	var lb_img_btn_dom = lb_img_btn_dom;//小图dom
	var lb_img_btn = $(lb_img_btn_dom);//小图jq对象
	if(!btn_int){btn_int = 0}//小图间距
	var lb_img_btn_width = lb_img_btn.width() + btn_int;//小图占位宽（宽度+外边距）148	
	var lb_img_box = $(lb_img_btn).parent();//小图父元素jq对象
	lb_img_box.width(lb_img_btn_width*lb_img_btn_num);//小图父元素jq对象宽度
	if(!speed){speed = 5000}else{speed *= 1000}//自动轮播速度
	var re_auto = lb_img_btn.length*(lb_img_btn_width);//小图滚动速度
	var alpha_img = .5;//小图半透明
	var alpha_img_curr = .9;//小图不透明
	//var lb_auto = setInterval(lb_next,speed)//启动轮播
	
	//初始状态
	lb_img_btn.first().add(lb_dd.first()).addClass('curr first');
	lb_img_btn.last().add(lb_dd.last()).addClass('last');
	lb_img_btn.fadeTo('fast',alpha_img).siblings('.curr').fadeTo('fast',alpha_img_curr);
	lb_dd.filter('.curr').fadeTo('fast',alpha_img_curr);
	
	//小图横向排列
	var dizeng = lb_img_btn_width;
	var btn_int2 = 0;
	lb_img_btn.each(function(i){
		$(this).css('left',btn_int2);
		btn_int2 += dizeng;
	})
	
	//点击小图
	lb_img_btn.hover(function(){
		$(this).stop($(this).show()).fadeTo('fast',alpha_img_curr);
	},function(){
		if(!$(this).is('.curr')){
			$(this).fadeTo('normal',alpha_img);
		}
	}).mouseover(function(){
		$(this).siblings('.curr').removeClass('curr').fadeTo('normal',alpha_img);
		$(this).addClass('curr').fadeTo('normal',alpha_img_curr);
		var n = $(this).index(lb_img_btn_dom);
		lb_dd.filter('.curr').removeClass('curr').hide();
		lb_dd.eq(n).addClass('curr').show();
	})
	
	//左右箭头
	/*lb_btn.hover(function(){
		clearInterval(lb_auto);
		$(this).addClass('curr');
	},function(){
		$(this).removeClass('curr');
		lb_auto = setInterval(lb_next,speed);
	})*/
	//大小图鼠标放上暂停播放
	/*lb_dd.hover(function(){
		clearInterval(lb_auto);
	},function(){
		lb_auto = setInterval(lb_next,speed);	
	})
	lb_img_btn.hover(function(){
		clearInterval(lb_auto);
	},function(){
		lb_auto = setInterval(lb_next,speed);	
	})*/
	
	lb_btn.first().click(function(){
		lb_prev();
	})
	lb_btn.last().click(function(){
		lb_next();
	})
	/* 可视范围外 */
	function outview(direction){
		var currpos1 = lb_img_box.scrollLeft() - lb_img_btn.outerWidth(true);
		var currpos2 = lb_img_box.scrollLeft() + lb_img_box.width();
		var nnn = lb_img_btn.filter('.curr').index(lb_img_btn_dom);
		if(!((nnn*lb_img_btn_width)> currpos1 && (nnn*lb_img_btn_width) < currpos2)){
			if(direction){
				lb_img_box.animate({
					scrollLeft:lb_img_box.scrollLeft() + lb_img_box.width()
				},300);
			}else{
				lb_img_box.animate({
					scrollLeft:lb_img_box.scrollLeft() - lb_img_box.width()
				},300)
			}	
		}	
	}
	/* animate */
	function lb_prev(){
		if(lb_img_btn.filter('.curr').is('.first')){
			//小图状态
			lb_img_btn.last().addClass('curr').fadeTo('slow',alpha_img_curr).end()
				.filter('.curr:first').removeClass('curr').fadeTo('slow',alpha_img);
			//大图状态
			lb_dd.last().addClass('curr').show().end()
				.filter('.curr:first').removeClass('curr').hide();	
			//滚动条
			lb_img_box.animate({
				scrollLeft:lb_img_btn.outerWidth(true)*lb_img_btn.last().index(lb_img_btn_dom)
			},re_auto)
				.scrollLeft(lb_img_btn.outerWidth(true)*lb_img_btn.last().index(lb_img_btn_dom));
		}else{
			//小图状态
			lb_img_btn.filter('.curr').prev().addClass('curr').fadeTo('slow',alpha_img_curr).end()
				.removeClass('curr').fadeTo('slow',alpha_img);
			//大图状态
			lb_dd.filter('.curr').prev().addClass('curr').show().end()
				.removeClass('curr').hide();
			//滚动条
			outview(false)
		}
	}
	function lb_next(){
		if(!lb_dd) return
		if(lb_img_btn.filter('.curr').is('.last')){
			lb_img_btn.first().addClass('curr').fadeTo('slow',alpha_img_curr).end()
				.filter('.curr:last').removeClass('curr').fadeTo('slow',alpha_img);
			lb_dd.first().addClass('curr').show().end()
				.filter('.curr:last').removeClass('curr').hide();
			lb_img_box.animate({
				scrollLeft:0
			},re_auto);	
		}else{
			lb_img_btn.filter('.curr').next().addClass('curr').fadeTo('slow',alpha_img_curr).end()
				.removeClass('curr').fadeTo('slow',alpha_img);
			lb_dd.filter('.curr').next().addClass('curr').show().end()
				.removeClass('curr').hide();
			outview(true)
		}
	}
}