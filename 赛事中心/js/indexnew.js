$(function() {
    var timer = null;


    //插件的js
    $('.pane-teams-in .teams-container').slick({
        //variableWidth: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        useTransform: false,
        prevArrow: '.pane-teams-in .icon-arrow-left',
        nextArrow: '.pane-teams-in .icon-arrow-right'
    });
//顶部导航栏的菜单
    $('.top_container .menus').on('mouseenter', '.menu:not(".more")', function() {
        var menu = $(this);
        var menus = menu.parents('.menus');
        var players = menus.siblings('.players');
        var player = players.find('.player[data-menu="' + menu.attr('data-menu') + '"]');
        var active = players.find('.player.active');
        var active_type = active.attr('data-type');
        var type = player.attr('data-type');

        menu.siblings('.menu').removeClass('active');
        menu.addClass('active');

        if(active_type == 'video') {
            $('iframe', active).remove();
        }

        players.find('.player.active').removeClass('active');
        player.addClass('active');

        if(type == 'video') {
            var src = player.attr('data-video-src');
            var iframe = $('<iframe height="560" width="1000" src="' + src + '" frameborder="0" allowfullscreen=""></iframe>');
            player.append(iframe);
        }

    });
//职业战队，添加鼠标进入和离开的事件
    $('#block_teams').on('mouseenter', '.team', function(e) {
        var team = $(this);
        var offset = team.position();
        var pop = $('#team-pop');

        setTimeout(function() {
            getMembers(team);
            team.addClass('in');
            pop.css({
                'top': offset.top + 161 + 'px',
                'z-index': 2
            }).fadeIn(0);

        }, 0);
    }).on('mouseleave', '.team', function(e) {
        var team = $(this);
        var target = $(e.relatedTarget);
        if(target.is('#team-pop') || target.parents().is('#team-pop')) {
            clearTimeout(timer);
            return false;
        }

        timer = setTimeout(function() {
            team.removeClass('in');
            $('#team-pop').fadeOut(0);
        }, 0);

    });
//鼠标进入显示出来的那一块pop
    $('#team-pop').on('mouseleave', function() {
        $(this).fadeOut(0);
        $('#block_teams').find('.team.in').removeClass('in');
    })
//给国内战队和国外战队添加点击事件，点击切换下边的div
    $('.tabs').on('click', '.tab', function() {
        var tab = $(this);
        var tabs = tab.parents('.tabs');
        var panes = tabs.siblings('.panes');
        var block = tab.parents('.block');
        var pane, videoes, teams;

        if(tab.hasClass('tab-select')) {
            tab.find('.select-container').toggleClass('down');
        }

        pane = block.find('.pane[data-tab="' + tab.attr('data-tab') + '"]');

        tab.siblings('.tab').removeClass('active');
        tab.addClass('active');

        block.find('.pane.active').removeClass('active');
        pane.addClass('active');
        videoes = $('.video', pane);

        if(tab.parents('.blocks-team')) {
            var container = pane.find('.teams-container');
            var left_arrow = pane.find('.icon-arrow-left');
            var right_arrow = pane.find('.icon-arrow-right');

            //这个slick插件的代码添加
            container.slick({
                autoplay: false,
                autoplaySpeed: 2000,
                infinite: false,
                useTransform: false,
                prevArrow: left_arrow,
                nextArrow: right_arrow
            });

        }

        for(var i = 1; i <= videoes.length; i++) {
            if(i % 3 == 0) videoes.eq(i - 1).addClass('no-right-margin');
        }
    });
//
    $('.tabs').on('click', '.tab-select .option', function(e) {
        var option = $(this);
        var block = option.parents('.block');
        var input = option.parents('.select').siblings('.input');
        var paneid = option.attr('data-id');
        var value = option.text();
        var pane = block.find('.pane[data-tab="' + paneid + '"]');

        option.siblings('.selected').removeClass('selected');
        option.addClass('selected');
        input.text(value);
        option.parents('.tab.tab-select').attr('data-tab', paneid);
        block.find('.pane.active').removeClass('active');
        pane.addClass('active');
        option.parents('.select-container').toggleClass('down');
        e.stopPropagation();
    });

    $('#team-pop').on('click', '.page', function() {
        var page = $(this);
        var container = $('.team-members');
        var index = page.index();

        page.siblings('.page.active').removeClass('active');
        page.addClass('active');
        container.animate({ 'margin-left': index * 　898 * (-1) }, 500);
    });

    $(document).on('click', function(e) {
        var target = $(e.target);
        if(target.is('.tab.tab-select') || target.parents('.tab').is('.tab-select')) {
            return false;
        }

        $('.tab.tab-select').find('.select-container').removeClass('down');
    });



    function getMembers(team) {
        var membersHtml = [];
        var id = team.attr('data-id');
        var name = team.find('.team-desc').text();
        var members = teamMembers[id];
        var pop = $('#team-pop');
        var len = members.length;
        var membersContainer = $('<ul class="team-members clearfix"></ul>');
        var rows = Math.ceil(len / 5);

        for(var j = 1; j <= rows; j++) {
            var row = [];
            var m = 5 * j > len ? len : 5 * j;
            var s = (j - 1) * 5;
            row.push('<div class="members-row">');
            for(var i = s; i < m; i++) {
                var html = createMember(members[i]);
                row.push(html);
            }
            row.push('</div>');
            membersHtml.push(row.join(''));
        }

        pop.find('.team-name h2').eq(0).text(name + '战队');
        membersContainer.empty().html(membersHtml.join(''));
        pop.find('.team-members-container').empty().append(membersContainer);

        if(rows > 1) {
            membersContainer.css('width', rows * 898);
            createPager(rows);
        } else {
            pop.find('.pages').hide();
        }

    }

    function createMember(data) {
        var han = ['一', '二', '三', '四', '五', '六', '七'];
        var position = parseInt(data['number'], 10);
        var member = [' <li class="team-member">',
            '<div class="member-position">' + han[position - 1] + '号位</div>',
            '<div class="member-avatar"><img src="' + (data['img'] ? data['img'] : '/images/match/img_default_avatar.png') + '" alt="' + data['name'] + '" /></div>',
            '<p class="member-name">' + (data['name'] ? data['name'] : '') + '</p>',
            '<p class="member-nickname">' + (data['nickname'] ? data['nickname'] : '') + '</p>',
            '</li>'
        ];

        return member.join('');
    }

    function createPager(len) {
        var pop = $('#team-pop');
        var pager = pop.find('.pages');
        var pages = [];

        pager = pager.length ? pager : $('<ul class="pages"></ul>').appendTo(pop);

        for(var i = 0; i < len; i++) {
            pages.push('<li class="page ' + (i == 0 ? 'active' : '') + '"><i class="icon icon-dot"></i></li>');
        }

        pager.html(pages.join('')).show();
        return pager;
    }
});