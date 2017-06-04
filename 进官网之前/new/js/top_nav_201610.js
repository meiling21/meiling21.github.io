(function() {
    var headerNav = ['<div class="nav_main clearfix">',
            '		<a href="http://www.dota2.com.cn/" title="《DOTA2》官方网站" class="nav_logo" target="_blank">《DOTA2》官方网站</a>',
            '		<div class="dota2nav" id="dota2nav">',
            '			<div class="link_div">',
            '				<a href="http://www.dota2.com.cn/main.htm" target="_blank" id=" link_nav1" class="link_nav">',
            '					<span>首页</span>',
            '					<span class="link_nav_e">HOME</span>',
            '				</a>',
            '				<div class="link_pop">',
            '					<a href="http://www.dota2.com.cn/" target="_blank">品牌站</a>',
            '					<a href="http://members.dota2.com.cn/login?url=/info" target="_blank">个人中心</a>',
            '					<a href="http://www.dota2.com.cn/secretshop/" target="_blank">神秘商店</a>',
            '					<a href="http://fx.wanmei.com/dota2/" target="_blank">玩家工坊</a>',
            '				</div>',
            '			</div>',
            '			<div class="link_div">',
            '				<a href="http://www.dota2.com.cn/news/index.htm" id="link_nav2" class="link_nav" target="_blank">',
            '					<span>资讯</span>',
            '					<span class="link_nav_e">NEWS</span>',
            '				</a>',
            '				<div class="link_pop">',
            '					<a href="http://www.dota2.com.cn/news/gamenews/index.htm" target="_blank">官方新闻</a>',
            '					<a href="http://www.dota2.com.cn/news/competition/index.htm" target="_blank">赛事新闻</a>',
            '					<a href="http://www.dota2.com.cn/news/gamepost/index.htm" target="_blank">更新日志</a>',
            '					<a href="http://www.dota2.com.cn/raiders/index.htm" target="_blank">游戏攻略</a>',
            '				</div>',
            '			</div>',
            '			<div class="link_div">',
            '				<a href="http://www.dota2.com.cn/activity/gamematch/index.htm" id="link_nav3" class="link_nav" target="_blank">',
            '					<span>赛事</span>',
            '					<span class="link_nav_e">MATCH</span>',
            '				</a>',
            '				<div class="link_pop">',
            '					<a href="http://act.dota2.com.cn/match" target="_blank">赛事中心</a>',
            '					<a href="http://www.dota2.com.cn/activity/all/index.htm" target="_blank">活动中心</a>',
            '				</div>',
            '			</div>',
            '			<div class="link_div">',
            '				<a href="http://www.dota2.com.cn/zlz/index.htm" id="link_nav4" class="link_nav" target="_blank">',
            '					<span>资料</span>',
            '					<span class="link_nav_e">DATA</span>',
            '				</a>',
            '				<div class="link_pop">',
            '					<a href="http://www.dota2.com.cn/heroes/index.htm" target="_blank">英雄资料</a>',
            '					<a href="http://www.dota2.com.cn/items/index.htm" target="_blank">物品资料</a>',
            '					<a href="http://i.youku.com/i/UNTk5NTIzNTMy" target="_blank">视频中心</a>',
            '					<a href="http://maps.dota2.com.cn/" target="_blank">自定义地图</a>',
            '					<a href="http://www.dota2.com.cn/guide" target="_blank">新手引导</a>',
            '				</div>',
            '			</div>',
            '			<div class="link_div">',
            '				<a href="http://bbs.dota2.com.cn/forum.php?mod=forumdisplay&amp;fid=34" target="_blank" id="link_nav5" class="link_nav">',
            '					<span>服务</span>',
            '					<span class="link_nav_e">SERVICE</span>',
            '				</a>',
            '				<div class="link_pop">',
            '					<a href="http://kf.dota2.com.cn" target="_blank">客服中心</a>',
            '					<a href="http://bbs.dota2.com.cn/forum.php" target="_blank">官方论坛</a>',
            '					<a href="http://weibo.com/dota2comcn" target="_blank">新浪微博</a>',
            '					<a href="http://wb.dota2.com.cn/" target="_blank">网吧特权</a>',
            '                   <a href="http://members.dota2.com.cn/findPwAccount" target="_blank">通行证查询</a>',
            '				</div>',
            '			</div>',
            '			<div class="link_div">',
            '				<a href="http://www.dota2.com.cn/download/" target="_blank" id="link_nav6" class="link_nav">',
            '					<span>下载</span>',
            '					<span class="link_nav_e">DOWN</span>',
            '				</a>',
            '				<div class="link_pop">',
            '					<a href="http://www.dota2.com.cn/download/" target="_blank">游戏下载</a>',
            '					<a href="http://app.dota2.com.cn/web.html" target="_blank">刀塔助手</a>',
            '					<a href="http://www.dota2.com.cn/enjoy/gamewall/index.htm" target="_blank">精美壁纸</a>',
            '					<a href="http://www.dota2.com.cn/comics/index.htm" target="_blank">官方漫画</a>',
            '				</div>',
            '			</div>',
            '		</div>',
            '		<div class="dota2user hide" id="dota2user">',
            '			<div class="user ">',
            '				<i class="nav_icon icon-user"></i>',
            '				<span></span>',
            '			</div>',
            '			<div class="btn btn-login" id="btn-login">',
            '				您好，请&nbsp;<a href="javascript:;" id="J_dota2SignIn">登录</a>',
            '			</div>',
            '		</div>',
            '	</div>',
            '	<div id="Dota2_overlay"></div>',
            '	<div class="Dota2dialogWrap" id="J_dialog_dota2_passport" style="background:#070707 ">',
            '		<a href="javascript:;" class="close-passport"></a>',
            '		<iframe width="" height="" frameborder="0" scrolling="no" data-src="http://passport.wanmei.com/sso/accounts/serviceLogin?continue=http://www.dota2.com.cn/sso/loginPc&service=dota2_act&isiframe=1&location=http://www.dota2.com.cn/main.html"',
            '			src="" name="passport_login_iframe_parent" allowtransparency="true"></iframe>',
            '	</div>'
        ].join(""),
        xhr_checkoutStatus = null;

    $(function() {
        var link_header = $('<link rel="stylesheet">');
        var link_login = $('<link rel="stylesheet">');
        var script_login = $('<script async defer></script>');
        var script_header = $('<script async defer></script>');
        var header = $('head').eq(0);
        var body = $('body');
        var nav = $('<div id="dota2_topnav" class="dota2_nav_container"></div>');
        var now = '201612271113';

        link_header.attr('href', 'http://www.dota2.com.cn/style/header.css?v=' + now);
        link_login.attr('href', 'http://www.dota2.com.cn/style/libs/jquery.dota2.login.css?v=' + now);
        script_login.attr('src', 'http://www.dota2.com.cn/js/libs/jquery.dota2.login.js?v=' + now);
        script_header.attr('src', 'http://www.dota2.com.cn/js/header.js?v=' + now);
        header.append(link_header);
        header.append(link_login);

        link_header.load(function() {
            nav.html(headerNav);
            body.prepend(nav);
            body.append(script_login);
            body.append(script_header);
            checkoutStatus();
        });
    })

    function checkoutStatus() {
        if (xhr_checkoutStatus) xhr_checkoutStatus.abort();
        var url = encodeURIComponent(window.location.href);
        xhr_checkoutStatus = $.ajax({
            type: 'GET',
            async: true,
            url: 'http://www.dota2.com.cn/user/info?lr=' + url,
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: 'callbackStatus',
            success: function(data) {
                if (data.status == "success") {
                    fillStatus(data['data']);
                }
            }
        }).always(function() {
            $('#dota2user').removeClass('hide');
        });
    }

    function fillStatus(data) {
        var userContainer = $('#dota2user');
        var btn_login = $('#btn-login');
        var name = $('.user', userContainer);
        var icon = name.find('i.icon-user');
        var iframe = $('#J_dialog_dota2_passport iframe');
        var userHtml,
            is_bind_steam = data['is_bind_steam'];
        iframe.attr('data-src', data['login_url_iframe']);
        if (data['login_status'] == true || data['login_status'] == 'true') {
            var btn_logout = $('<div class="btn btn-logout"><span>&nbsp;|&nbsp;</span><a href="' + (data['is_mobile'] ? data['logout_url_mobile'] : data['logout_url_iframe']) + '" class="btn">退出</a></div>');
            btn_login.remove();
            name.addClass(function() {
                return is_bind_steam ? 'full in' : 'in'
            });
            btn_logout.appendTo(userContainer);
            userHtml = is_bind_steam ? (data['personaname']) : '您已登录，<a href="http://www.dota2.com.cn/guide" target="_blank">进行游戏</a>&nbsp;后绑定信息';
            name.find('>span').attr('data-user', data['username']).html(userHtml);
            if (is_bind_steam) {
                icon.replaceWith('<img src="' + data['avatarfull'] + '" alt="' + data['personaname'] + '">')
            }
        } else {
            if (data['is_mobile']) {
                $('#J_dota2SignIn').attr({
                    'data-href': data['login_url_mobile'],
                    'data-mobile': true
                });
            }
        }
    }

})();