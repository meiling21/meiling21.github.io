/**
 * Created by chen on 2017/3/29.
 */
window.onload = function () {
    (function(){
        //小三角区关闭事件
        var pstDiv = my$("nav_right").getElementsByTagName("div")[0];
        var close = pstDiv.getElementsByTagName("span")[2];

//注册关闭事件
        close.onclick = function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
        };


//nav头部导航鼠标进入事件
//获取所有导航左侧的li
        var list = my$("mousePosition").children[0].children;
//遍历注册鼠标进入显示内容事件、鼠标离开隐藏内容事件
        for (var i = 0; i < list.length; i++) {
            list[i].onmouseover = mouseoverHandle;
            list[i].onmouseout = mouseoutHandle;
        }
//鼠标进入事件处理函数
        function mouseoverHandle() {
            this.getElementsByTagName("div")[0].style.display = "block";
        }
//鼠标离开处理函数
        function mouseoutHandle() {
            this.getElementsByTagName("div")[0].style.display = "none";
        }
//给banner头部广告轮播图a添加背景
        var arr = ["banner1.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg", "banner5.jpg", "banner6.jpg", "banner7.jpg"];
        var list = my$("banner").children[0].children;
        for (var i = 0; i < list.length; i++) {
            var aObj = list[i].children[0];
            for (var j = 0; j < arr.length; j++) {
                aObj.style.background = " url('images/" + arr[i] + "') no-repeat -260px 0";
            }
        }
//轮播图特效

//轮播图小圆点事件设置
//获取ul用来轮播
        var ulObj = my$("banner").children[0];
//获取所有li
        var liBannerObj = ulObj.getElementsByTagName("li");
//遍历获取所有a标签
        var aArrs = [];//接收a标签
        for (var i = 0; i < liBannerObj.length; i++) {
            var aBannerObj = liBannerObj[i].children[0];
            aArrs.push(aBannerObj);
        }
//获取相框a的宽度  获取相框banner的宽度
//var bannerWidth=my$("banner").offsetWidth;
        var aBanner = my$("banner").getElementsByTagName("a")[0];
        var aWidth = parseInt(getStyle(aBanner, "width"));
//获取所有小圆点
        var listDian = my$("dv_circle").children[0].children;
//遍历给小圆点设置鼠标进入事件
        for (var i = 0; i < listDian.length; i++) {
            //设置自定义属性index值
            listDian[i].setAttribute("index", i);
            listDian[i].onmouseover = dianMouseoverHandle;
            listDian[i].onmouseout = dianMouseoutHandle;
            listDian[i].onclick = dianClickHandle;

        }
//小圆点鼠标进入事件处理函数
//鼠标进入有高亮显示，但不切换图片
        var timeId = 0;

//离开高亮消失
        function dianMouseoutHandle() {
            this.removeAttribute("class");
        }
//鼠标点击事件，点击获取唯一高亮效果，切换图片
        var index = 0;
        function dianClickHandle() {
            //排他功能
            for (var j = 0; j < listDian.length; j++) {
                listDian[j].removeAttribute("id");
                listDian[j].removeAttribute("class");
            }
            this.id = "dian_cls";
            //获取index索引值
            index = parseInt(this.getAttribute("index"));
            animate(ulObj, {"left": -index * aWidth});

        }
//console.log(index);

        timeId = setInterval(rightClickHandle, 5000);//自动轮播
//鼠标进入离开banner图，两侧焦点渐渐显示、隐藏
        my$("banner").onmouseover = function () {
            animate(my$("dv_btn"), {"opacity": 1});
            my$("dv_btn").style.cursor = "pointer";
            clearInterval(timeId);
        };
        my$("banner").onmouseout = function () {
            animate(my$("dv_btn"), {"opacity": 0});
            timeId = setInterval(rightClickHandle, 2000);
        };
        function dianMouseoverHandle() {
            this.className = "dian_cls";
        }
//焦点点击事件，进行轮播
//获取左右焦点
        var lefti = my$("dv_btn").getElementsByTagName("i")[0];
        var rights = my$("dv_btn").getElementsByTagName("s")[0];
//右侧焦点事件

        rights.onclick = rightClickHandle;
        function rightClickHandle() {
            if (index == liBannerObj.length - 1) {
                index = 0;
                ulObj.style.left = 0;
                listDian[index].className = "dian_cls"
            }
            index++;
            animate(ulObj, {"left": -index * aWidth});
            for (var i = 0; i < listDian.length; i++) {
                listDian[i].className = "";
                listDian[i].id = "";
            }
            if (index == liBannerObj.length - 1) {
                listDian[0].className = "dian_cls";
            }
            if(index<6){//报错点：如果没有判断，那么当index=6时 大于小点索引值会报错；不影响效果的原因：当index=6时直接index=0
                listDian[index].className = "dian_cls";
            }
        }

//左侧焦点点击事件
        lefti.onclick = function () {
            if (index == 0) {
                index = liBannerObj.length - 1;
                ulObj.style.left = -index * aWidth + "px";
                listDian[index - 1].className = "dian_cls";
            }
            index--;
            animate(ulObj, {"left": -index * aWidth});
            for (var j = 0; j < listDian.length; j++) {
                listDian[j].removeAttribute("class");
            }
            listDian[index].className = "dian_cls";
        };



//右侧定位注册事件
//点击收起定位块渐渐的收起，展开显示
//获取元素 注册点击事件

        my$("pstShou").onclick = function () {
            animate(my$("right_erweima"), {"right": -136});
            this.style.display = "none";
            my$("pstZhan").style.display = "block";

        };
        my$("pstZhan").onclick = function () {
            animate(my$("right_erweima"), {"right": 1});
            this.style.display = "none";
            my$("pstShou").style.display = "block";

        };
//在线客服、新浪微博鼠标进入高亮显示
//获取s标签
        var onLines = my$("onLine").getElementsByTagName("s")[0];
        var mSinas = my$("mSina").getElementsByTagName("s")[0];
        my$("onLine").onmouseover = function () {
            this.style.backgroundColor = "#525E63";
            onLines.style.background = "url('./images/icon-float-bar.png') no-repeat -10px -55px"
        };
        my$("mSina").onmouseover = function () {
            this.style.backgroundColor = "#525E63";
            mSinas.style.background = "url('./images/icon-float-bar.png') no-repeat -44px -54px"
        };
//在线客服、新浪微博鼠标离开取消高亮显示
        my$("onLine").onmouseout = function () {
            this.style.backgroundColor = "";
            onLines.style.background = "url('./images/icon-float-bar.png') no-repeat -10px -11px"
        };
        my$("mSina").onmouseout = function () {
            this.style.backgroundColor = "";
            mSinas.style.background = "url('./images/icon-float-bar.png') no-repeat -44px -11px"
        };
//右侧定位下面二维码鼠标进入事件
        $(function(){
            $("#imgErweima").mouseenter(function(){
                $(this).css("cursor","pointer");
                $(this).css("background","url('./images/img-dota2app-qr-new.png') no-repeat -136px 0") ;
            }).mouseleave(function(){
                $(this).css("background","url('./images/img-dota2app-qr-new.png') no-repeat 0 0") ;
            });
        });


    })();





//新闻中心开始
//新闻中心

    //新闻中心
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
            }
            function hotMouseOutHandle() {
                my$("hot_bg").style.backgroundColor = "";
                animate(smallImg, {"width": 0, "height": 0, "top": 153, "left": 187});
                smallImg.style.border = "1px solid transparent";
                pObj.className = "";
                img_title.style.top = "0";
            }
        })();








//新闻中心结束

//活动中心部分开始

    (function() {

        var shopWidth = my$("shop").offsetWidth;
        //console.log(shopWidth);
        var divObj = my$("shop_lb");
        //获取每个DIV
        var dvvObj = document.getElementsByClassName("dvv");
        var list = my$("shop_lb").getElementsByTagName("li");
        //获取每个A标签
        for (var i = 0; i < list.length; i++) {
            list[i].onmouseenter = mouseenterHandle;
            list[i].onmouseleave = mouseleaveHandle;
        }
        function mouseenterHandle() {
            this.getElementsByTagName("img")[0].style.borderColor = "transparent";
            this.getElementsByTagName("p")[0].style.color = "#00C0FF";
            animate(this.getElementsByTagName("span")[0], {"opacity": 1});
        }

        function mouseleaveHandle() {
            this.getElementsByTagName("span")[0].style.opacity = "0";
            this.getElementsByTagName("img")[0].style.borderColor = "black";
            this.getElementsByTagName("p")[0].style.color = "";
        }

        //小圆点进入移出
//获取每个小圆点
        var list1 = my$("dian").getElementsByTagName("li");
        for (var i = 0; i < list1.length; i++) {
            list1[i].setAttribute("index", i);
            list1[i].onmouseover = mouseoverHandle1;
            list1[i].onclick = clickHandle1;
            list1[i].onmouseout = mouseoutHandle1;
        }
        function mouseoverHandle1() {
            this.className = "cl";
        }

        function clickHandle1() {
            var index = parseInt(this.getAttribute("index"));
            console.log(index);
            animate(my$("shop_lb"), {"left": -shopWidth * index})
            for (var i = 0; i < list1.length; i++) {
                list1[i].removeAttribute("class");
                list1[i].removeAttribute("id");
            }
            this.id = "cl";
        }

        function mouseoutHandle1() {
            this.removeAttribute("class");
        }

//自动播放
        setInterval(zhuan, 5000);
        //轮播图箭头
        var cont = 0;

        my$("right").onclick = zhuan;
        function zhuan() {
            //  alert(list1.length);
            if (cont == dvvObj.length - 1) {
                cont = 0;
                divObj.style.left = -shopWidth * cont + "px";
            }
            cont++;
            animate(my$("shop_lb"), {"left": -shopWidth * cont})
            for (var i = 0; i < list1.length; i++) {
                list1[i].className = "";
                list1[i].id = "";
            }
            //判断
            //  console.log(cont);
            if (cont == dvvObj.length - 1) {
                list1[0].className = "cl";
                list1[0].id = "cl";
            } else {
                list1[cont].className = "cl";
                list1[cont].id = "cl";
            }
        };
        //鼠标进入
        my$("right").getElementsByTagName("a")[0].onmouseover = function () {
            this.style.backgroundColor = "black";
        };
        my$("left").getElementsByTagName("a")[0].onmouseover = function () {
            this.style.backgroundColor = "black";
        };
        //鼠标移出
        my$("right").getElementsByTagName("a")[0].onmouseout = function () {
            this.style.backgroundColor = "";
        };
        my$("left").getElementsByTagName("a")[0].onmouseout = function () {
            this.style.backgroundColor = "";
        };
        //小按钮样式
        //for(var i = 0 ;i<list1)
        my$("left").onclick = function () {
            if (cont == 0) {
                cont = dvvObj.length - 1;
                divObj.style.left = -shopWidth * cont + "px";
            }
            cont--;
            animate(my$("shop_lb"), {"left": -shopWidth * cont})
            for (var i = 0; i < list1.length; i++) {
                list1[i].className = "";
                list1[i].id = "";
            }
            list1[cont].className = "cl";
        };

//右侧旋转木马开始
        var config = [
            {
                height: 152,
                opacity: 0.3,
                zIndex: 20,
                top: 25,
                left: -25
            },
            {
                height: 152,
                opacity: 1,
                zIndex: 40,
                top: 0,
                left: 54
            },
            {
                height: 152,
                opacity: 0.3,
                zIndex: 20,
                top: 25,
                left: 160
            },
            {
                height: 152,
                opacity: 0.3,
                zIndex: 10,
                top: 18,
                left: 54
            }
        ];
        var flag = true;
        var listObj = my$("lun").children;
        function assign() {
            for (var i = 0; i < listObj.length; i++) {
                animate(listObj[i], config[i], function () {
                    flag = true;
                });
            }
        }
        assign();
//点击按钮
        var dianObj = my$("dian_r").getElementsByTagName("li");
        var gu = 0;
        my$("gleft").onclick = function () {

            for (var i = 0; i < listObj.length; i++) {
                listObj[i].style.opacity = "0.3"
            }
            setTimeout(yiLe, 100);

        };


        //setTimeout(ni,200);
        //function ni(){
        //    //listObj[1].style.opacity="1";
        //    //config[1]["opacity"]="1";
        //}
        function yiLe() {

            if (flag) {
                gu--;
                flag = false;
                config.push(config.shift());
                assign();
            }
            for (var i = 0; i < dianObj.length; i++) {
                dianObj[i].className = "";
                dianObj[i].id = "";
            }
            if (gu < 0) {
                gu = dianObj.length - 1;
            }
            dianObj[gu].className = "cl1";
            dianObj[gu].id = "cl1";
        }

        //自动播放
        setInterval(yire, 5100);
        my$("gright").onclick = function () {
            for (var i = 0; i < listObj.length; i++) {
                listObj[i].style.opacity = "0.3"
            }
            setTimeout(yire, 100);
        };
        function yire() {
            if (flag) {
                gu++;
                flag = false;
                config.unshift(config.pop());
                assign();
            }
            for (var i = 0; i < dianObj.length; i++) {
                dianObj[i].className = "";
                dianObj[i].id = "";
            }
            if (gu == dianObj.length) {
                gu = 0;
            }
            dianObj[gu].className = "cl1";
            dianObj[gu].id = "cl1";
        };
        var arObj = my$("gright").children[0];
        my$("gright").onmouseover = function () {
            arObj.style.backgroundColor = "black";
            animate(arObj, {opacity: 0.8});
            console.log(my$("gright").style.backgroundColor)
        };
        var alObj = my$("gleft").children[0];
        my$("gleft").onmouseover = function () {
            alObj.style.backgroundColor = "black";
            //animate(my$("gright"),{opacity:1});
            //console.log(my$("gright").style.backgroundColor)
        };
        my$("gleft").onmouseout = function () {
            alObj.style.backgroundColor = "";
            //animate(my$("gleft"),{opacity:1});
        };
        my$("gright").onmouseout = function () {
            arObj.style.backgroundColor = "";
            animate(arObj, {opacity: 1});
        };
        //旋转木马的小圆点鼠标进入离开事件
        for (var i = 0; i < dianObj.length; i++) {
            dianObj[i].setAttribute("index", i);
            dianObj[i].onmouseover = mouseoverHandleDian;
            dianObj[i].onmouseout = mouseoutHandleDian;
            dianObj[i].onclick = clickHandleDian;
        }
        function clickHandleDian() {
            var index = this.getAttribute("index");

            if (index - gu > 0) {
                for (var i = 0; i < Math.abs(index - gu); i++) {
                    //var aa = 0;
                    //var timeId = setInterval(yire1, 100);
                    setTimeout(yire1,300);
                    //yire1();
                    //aa=0;
                    //console.log(Math.abs(index - gu));
                    //console.log(index - gu)

                }
            } else {
                for (var i = 0; i < Math.abs(index - gu); i++) {
                    //var aa = 0;
                    //var timeId = setInterval(yiLe1, 100);
                    //aa=0;
                    setTimeout(yiLe1, 300);
                    //yiLe1();
                    console.log(index - gu)
                }
            }
            //=======================================================
            function yiLe1() {
                gu--;
                config.push(config.shift());
                assign();
                for (var i = 0; i < dianObj.length; i++) {
                    dianObj[i].className = "";
                    dianObj[i].id = "";
                }
                if (gu < 0) {
                    gu = dianObj.length - 1;
                }
                dianObj[gu].className = "cl1";
                dianObj[gu].id = "cl1";

                //aa++;
                //if (Math.abs(aa) ===Math.abs(index - gu) ) {
                //    console.log(aa);
                //    clearInterval(timeId)
                //}
            }
            function yire1() {

                gu++;
                config.unshift(config.pop());
                assign();
                for (var i = 0; i < dianObj.length; i++) {
                    dianObj[i].className = "";
                    dianObj[i].id = "";
                }
                if (gu == dianObj.length) {
                    gu = 0;
                }
                dianObj[gu].className = "cl1";
                dianObj[gu].id = "cl1";
                //var aa = 0;
                //aa++;
                //if (Math.abs(aa) ===Math.abs(index - gu) ) {
                //    console.log(aa);
                //    clearInterval(timeId)
                //}
            }
        }
        function mouseoverHandleDian() {
            this.style.border = "2px solid #F84E4E";
            //this.className="cl1";
            console.log(this.className)
        }

        function mouseoutHandleDian() {
            //this.className="";
            this.style.border = "";

        }

//旋转木马LI标签效果
        var aXuan = my$("lun").getElementsByTagName("a");
        for (var i = 0; i < aXuan.length; i++) {
            aXuan[i].onmouseover = mouseoverHandle2;
            aXuan[i].onmouseout = mouseoutHandle2;
        }
        function mouseoverHandle2() {
            this.getElementsByTagName("p")[0].style.color = "#00C0FF";
        }

        function mouseoutHandle2() {
            this.getElementsByTagName("p")[0].style.color = "";
        }
        //自定义地图下的进入效果
        var monkey = document.getElementsByClassName("monkey");
        for (var i = 0; i < monkey.length; i++) {
            monkey[i].onmouseover = mouseoverHandle3;
            monkey[i].onmouseout = mouseoutHandle3;
        }
        function mouseoverHandle3() {
            this.getElementsByTagName("img")[0].style.borderColor = "#00C0FF";
        }
        function mouseoutHandle3() {
            this.getElementsByTagName("img")[0].style.borderColor = "#222328";
        }
    })();


//活动中心部分结束

//视频中心开始

(function(){


        //更多高亮显示

        var child = my$("c-right").children;
        //console.log(child);
        child[0].onmouseover = function () {
            this.style.color = "#00C8FF";
        };
        child[0].onmouseout = function () {
            this.style.color = "";
        };
        //获取视频列表里的ul标签
        var ulObj = my$("c-newsList").children;
        //获取所有li标签进行遍历
        var liObj = ulObj[0].getElementsByTagName("li");
        //获取视频列表里的所有li标签
        var liTwo = ulObj[1].getElementsByTagName("li");
        for (var i = 0; i < liObj.length; i++) {
            liObj[i].onmouseover = mouseoverHandles;
            liObj[i].onclick = clickHandle;
            liObj[i].onmouseout = mouseoutHandles;
        }
        ////鼠标进入
        function mouseoverHandles() {
            this.className = "c-current";
        }



        //鼠标点击切换视频列表
        var index=0;
        function clickHandle() {
            for (var k = 0; k < liObj.length; k++) {
                liObj[k].className = "";
                //liObj[i].removeAttribute("class");
                liObj[k].setAttribute("index", k);
            }
            this.className = "bd-current c-current";
            index = this.getAttribute("index");
            for (var j = 0; j < liTwo.length; j++) {
                liTwo[j].removeAttribute("class");
            }
            liTwo[index].className = "bd-current";
        }
        //鼠标离开
        function mouseoutHandles() {
            for(var j=0;j<liObj.length;j++){
            liObj[j].className="";
            }
            liObj[index].className="c-current";

        }
        //鼠标进入视频列表高亮显示
        //获取装视频列表的ul
        var ulObjs1 = my$("c-newsList").children[1];

        //获取所有a标签
        var aList = ulObjs1.getElementsByTagName("a");
        //获取所有的i标签
        var iList = ulObjs1.getElementsByTagName("i");

    
        for (var j = 0; j < aList.length; j++) {
            aList[j].onmouseover = mouseoverHandle;
            aList[j].onmouseout = mouseoutHandle;

        }
        function mouseoverHandle() {
            this.style.border = "1px solid #00C8FF";
            //this.style.display="block";
        }

        function mouseoutHandle() {
            this.style.border = "";
            //  this.style.display="";
        }


        //搜索框部分
        //获取焦点
        my$("search-btn").onfocus = function () {
            if (getStyle(this, "color") == "rgb(90, 91, 91)") {
                this.value = "";
                this.style.color = "white";
            }
        };
        //失去焦点
        my$("search-btn").onblur = function () {
            if (this.value.length == 0) {
                this.value = "请您输入要搜索的内容";
                this.style.color = "rgb(90, 91, 91)";

            }
        };

        //搜索框输入内容的设置功能
        var index = 0;
        my$("search-btn").onkeyup = function () {
            //先判断存在不存在
            if (my$("search-dv")) {
                my$("dv").removeChild(my$("search-dv"));
            }
            var data = [
                {"如何": ["如何注册俩个ID", "如何绑定完美通行证"]},
                {"为什么": ["为什么我需要注册俩个账号", "为什么我绑定不了账号"]}
            ];
            var txt = this.value;
            var tempArr = [];//创建临时数组
            for (var i = 0; i < data.length; i++) {
                var dt = data[i];
                if (dt[txt]) {
                    tempArr = dt[txt];
                }
            }
            if (this.value.length == 0 || tempArr.length == 0) {
                if (my$("search-dv")) {
                    my$("dv").removeChild(my$("search-dv"));
                }
                return;
            }
            //创建div
            var dvObjSer = document.createElement("div");
            dvObjSer.id = "search-dv";
            //添加样式
            dvObjSer.style.width = "245px";
            dvObjSer.style.position = "absolute";
            dvObjSer.style.top = "35px";
            dvObjSer.style.zIndex = "20";
            dvObjSer.style.border = "1px solid #111214";
            dvObjSer.style.backgroundColor = "white";
            my$("dv").appendChild(dvObjSer);
            for (var i = 0; i < tempArr.length; i++) {
                //创建p
                var pObjs = document.createElement("p");
                pObjs.setAttribute("index", i);
                dvObjSer.appendChild(pObjs);
                //创建a
                var aObj = document.createElement("a");
                setInnerText(aObj, tempArr[i]);
                aObj.style.color = "#ccc";
                pObjs.appendChild(aObj);

                pObjs.style.cursor = "pointer";
                pObjs.style.paddingLeft = "5px";
                pObjs.style.height = "25px";
                pObjs.style.lineHeight = "25px";
                pObjs.onmouseover = function () {//鼠标进入
                    this.style.backgroundColor = "#666";
                    index = this.getAttribute("index");
                };
                pObjs.onmouseout = function () {//鼠标离开
                    this.style.backgroundColor = "";
                };
                //把用户选择的搜索的内容显示在搜索框中
                pObjs.onclick = function () {
                    my$("search-btn").value = getInnerText(this.children[0]);
                    this.parentNode.parentNode.removeChild(this.parentNode);
                };
            }
        };
        //常见问题部分
        //获取常见问题下的所有a标签
        var pObjs = my$("ask-question").getElementsByTagName("p");
       // console.log(pObjs);
        //遍历
        for (var i = 0; i < pObjs.length; i++) {
            pObjs[i].onmouseover = onmouseovertHandle;
            pObjs[i].onmouseout = onmouseoutHandle;
        }
        function onmouseovertHandle() {
            this.style.color = "#00C8FF";
        }

        function onmouseoutHandle() {
            this.style.color = "";
        }


})();
};

//视频中心结束

