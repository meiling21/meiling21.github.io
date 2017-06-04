window.onload = function() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'http://www.dota2.com.cn/public/style/bottom-cover.css';
    document.getElementsByTagName('head')[0].appendChild(link);

    var bottom = document.querySelector('body>.bottom');
    var html = '<div class="rel1100"><dl class="foot_dl"><dt><a class="wanmei" href="http://www.wanmei.com/" target="_blank"><img src="http://www.dota2.com.cn/public/images/logo-wanmei.png" alt="" /></a><a href="http://www.valvesoftware.com/" target="_blank"><img src="http://www.dota2.com.cn/public/images/logo-valve.png" alt="" /></a></dt><dd>完美世界（北京）网络技术有限公司 版权所有 Copyright © 2012-2017 Perfect World Co., Ltd. All Rights reserved<br />&copy;2012 Valve Corporation. All Rights reserved. Licensed to Perfect World Co., Ltd. in China</dd></dl><p class="certificate">京ICP证：050016号《网络文化经营许可证》编号：京网文[2011]0782-287号 《网络视听许可证》编号：0110587<br />京公网安备110105019888号 文网进字[2013] 028号 新出审字[2013] 1505号 ISBN：978-7-89989-826-0</p></div>';
    if (!bottom) {
        bottom = document.createElement('div');
        bottom.setAttribute('class', 'bottom');
        bottom.innerHTML = html;
        document.querySelector('body').appendChild(bottom);
    } else {
        bottom.innerHTML = html;
    }
}