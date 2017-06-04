/**
 * Created by Administrator on 2017/3/31.
 */
//新闻中心
window.onload = function () {
    //获取标签数组
    function tagName(element,label){
        return element.getElementsByTagName(label);
    }
    //鼠标进入和离开颜色改变封装代码
    function setOnMouseColor(element,color1,color2){
       element.onmouseover=function(){
           element.style.color=color1;
       };
        element.onmouseout=function(){
            element.style.color=color2;
        }
    }
    //鼠标进入和离开border变化
    function setOnMouseBorder(element,border1,border2){
        element.onmouseover=function(){
            element.style.border=border1;
        };
        element.onmouseout=function(){
            element.style.border=border2;
        }
    }
    //鼠标进入和离开id变化
    function setOnMouseId(element,id1,id2){
        element.onmouseover=function(){
            element.id=id1;
        };
        element.onmouseout=function(){
            element.id=id2;
        }
    }
//title_more标签鼠标进入和离开事件
    (function(){
        var title_more_a = tagName(my$("title_more"),"a")[0];
        var title_more_i = tagName(my$("title_more"),"i")[0];
        my$("title_more").onmouseover = function () {
            title_more_a.style.color = "#00C0F0";
            title_more_i.style.backgroundPosition = "-3px -776px";
        };
        my$("title_more").onmouseout = function () {
            title_more_a.style.color = "#cccccc";
            title_more_i.style.backgroundPosition = "-3px -789px";
        };
    })();
//新闻标题的鼠标进入和离开事件以及点击事件
        var liObj = tagName(my$("title_ul"), "li");
        //获得title_ul里所有的a标签
        var title_ul_aObjs = tagName(my$("title_ul"), "a");
        //获得所有的比赛信息
        var matchObj = my$("matchObj").children;
        //五个板块的列表
        var ulObjs = my$("dvObj").children;
        //循环标题
        for (var i = 0; i < liObj.length; i++) {
            liObj[i].setAttribute("index", i);
            //鼠标进入和离开事件
            setOnMouseBorder(liObj[i], "1px solid #999999", "");
            //点击事件
            liObj[i].onclick = matchClickHandle;
        }

        function matchClickHandle() {
            //排他移除样式
            for (var j = 0; j < liObj.length; j++) {
                liObj[j].removeAttribute("class");
                ulObjs[j].style.display = "none";
                matchObj[j].style.display = "none";
            }
            this.className = "title_li";
            var index = parseInt(this.getAttribute("index"));
            for (var k = 0; k < ulObjs.length; k++) {
                ulObjs[index].style.display = "block";
                matchObj[index].style.display = "block";
            }
        };

//比赛的进入和离开事件
    (function(){
        for (var i = 0; i < matchObj.length; i++) {
            var main_match_a = matchObj[i].children[0];
            //设置鼠标进入和离开事件
            setOnMouseId(main_match_a,"match","");
        }
    })();
//新闻列表
    (function(){
        var newAObj =tagName(my$("dvObj"),"a");
        for (var i = 0; i < newAObj.length; i++) {
            if (i % 2 == 0) {
                newAObj[i].style.backgroundColor = "#111216";
            }
            //设置鼠标进入和离开事件
            setOnMouseColor(newAObj[i],"#00C0FF","");
        }
    })();
//右侧近期热点
//更多的鼠标进入和离开事件
    (function(){
        var hotAobj=tagName(my$("hot_top_right"),"a")[0];
        var hotIobj=tagName(my$("hot_top_right"),"i")[0];
        my$("hot_top_right").onmouseover = function () {
            hotAobj.style.color = "#00C0F0";
            hotIobj.style.backgroundPosition = "-3px -776px";
        };
        my$("hot_top_right").onmouseout = function () {
            hotAobj.style.color = "";
            hotIobj.style.backgroundPosition = "-3px -789px";
        };
    })();
//视频部分
    (function(){
        my$("hot_viedo").onmouseover = function () {
            animate(my$("hot_btn"), {"opacity": 1});
        };
        my$("hot_viedo").onmouseout = function () {
            animate(my$("hot_btn"), {"opacity": 0});
        };
        my$("hot_viedo").onclick = function () {
            my$("viedo").controls="true";
            my$("viedo").autoplay="false";
        };
    })();
//梦开始的地方
//获得外面的盒子
    (function(){
        var hot_img = my$("hot_img");
        var smallImg = my$("hot_small");
        var img_title = my$("img_title");
        var pObj = smallImg.children[1];
        hot_img.onmouseover = hotMouseOverHandle;
        hot_img.onmouseout = hotMouseOutHandle;
        function hotMouseOverHandle() {
            animate(smallImg, {"width": 374, "height": 307, "top": 0, "left": 0, "zIndex": 200});
            smallImg.style.border = "1px solid #6B6B6B";
            pObj.className = "hot_p";
            img_title.style.top = "123px";
            my$("hot_bg").style.backgroundColor = "rgba(57, 20, 22, .6)";
        };
        function hotMouseOutHandle() {
            my$("hot_bg").style.backgroundColor = "";
            animate(smallImg, {"width": 0, "height": 0, "top": 153, "left": 187});
            smallImg.style.border = "1px solid transparent";
            pObj.className = "";
            img_title.style.top = "0";
        };
    })();
};


/**
 * Created by Administrator on 2017/4/6.
 */
