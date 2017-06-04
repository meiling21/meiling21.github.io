/**
 * Created by zhaojia on 2017/3/29.
 */
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
my$("story_open").onclick = function () {
    if (this.innerHTML == "[OPEN+]") {
        this.parentNode.previousElementSibling.className = "h120_long";
        this.innerHTML = "[CLOSE-]"
    } else {
        this.parentNode.previousElementSibling.className = "story h120";
        this.innerHTML = "[OPEN+]"
    }
}
my$("hx").onmouseover = function () {
    my$("hx_box").style.display = "block";
    document.onmousemove = function (e) {
        my$("hx_box").style.left = evtTools.pageX(e) + 5 + "px";
        my$("hx_box").style.top = evtTools.pageY(e) + "px";
    };
}
my$("hx").onmouseout = function () {
    my$("hx_box").style.display = "none";
}

my$("gbf").onmouseover = function () {
    my$("gbf_box").style.display = "block";
    document.onmousemove = function (e) {
        my$("gbf_box").style.left = evtTools.pageX(e) + 5 + "px";
        my$("gbf_box").style.top = evtTools.pageY(e) + "px";
    };
}
my$("gbf").onmouseout = function () {
    my$("gbf_box").style.display = "none";
}
my$("sx1").onmouseover = function () {
    my$("sx1_box").style.display = "block";
    document.onmousemove = function (e) {
        my$("sx1_box").style.left = evtTools.pageX(e) + 5 + "px";
        my$("sx1_box").style.top = evtTools.pageY(e) + "px";
    };
}
my$("sx1").onmouseout = function () {
    my$("sx1_box").style.display = "none";
}
my$("sx2").onmouseover = function () {
    my$("sx2_box").style.display = "block";
    document.onmousemove = function (e) {
        my$("sx2_box").style.left = evtTools.pageX(e) + 5 + "px";
        my$("sx2_box").style.top = evtTools.pageY(e) + "px";
    };
}
my$("sx2").onmouseout = function () {
    my$("sx2_box").style.display = "none";
}
my$("sx3").onmouseover = function () {
    my$("sx3_box").style.display = "block";
    document.onmousemove = function (e) {
        my$("sx3_box").style.left = evtTools.pageX(e) + 5 + "px";
        my$("sx3_box").style.top = evtTools.pageY(e) + "px";
    };
}
my$("sx3").onmouseout = function () {
    my$("sx3_box").style.display = "none";
};

my$("sx4").onmouseover = function () {
    my$("sx4_box").style.display = "block";
    document.onmousemove = function (e) {
        my$("sx4_box").style.left = evtTools.pageX(e) + 5 + "px";
        my$("sx4_box").style.top = evtTools.pageY(e) + "px";
    };
}
my$("sx4").onmouseout = function () {
    my$("sx4_box").style.display = "none";
};

my$("sx5").onmouseover = function () {
    my$("sx5_box").style.display = "block";
    document.onmousemove = function (e) {
        my$("sx5_box").style.left = evtTools.pageX(e) + 5 + "px";
        my$("sx5_box").style.top = evtTools.pageY(e) + "px";
    };
}
my$("sx5").onmouseout = function () {
    my$("sx5_box").style.display = "none";
};

my$("jd1").onmouseover = function () {
    my$("jd1_box").style.display = "block";
    document.onmousemove = function (e) {
        my$("jd1_box").style.left = evtTools.pageX(e) + 5 + "px";
        my$("jd1_box").style.top = evtTools.pageY(e) + "px";
    };
};
my$("jd1").onmouseout = function () {
    my$("jd1_box").style.display = "none";
};

my$("jd2").onmouseover = function () {
    my$("jd2_box").style.display = "block";
    document.onmousemove = function (e) {
        my$("jd2_box").style.left = evtTools.pageX(e) + 5 + "px";
        my$("jd2_box").style.top = evtTools.pageY(e) + "px";
    };
};
my$("jd2").onmouseout = function () {
    my$("jd2_box").style.display = "none";
};

my$("jd3").onmouseover = function () {
    my$("jd3_box").style.display = "block";
    document.onmousemove = function (e) {
        my$("jd3_box").style.left = evtTools.pageX(e) + 5 + "px";
        my$("jd3_box").style.top = evtTools.pageY(e) + "px";
    };
};
my$("jd3").onmouseout = function () {
    my$("jd3_box").style.display = "none";
};

my$("jd4").onmouseover = function () {
    my$("jd4_box").style.display = "block";
    document.onmousemove = function (e) {
        my$("jd4_box").style.left = evtTools.pageX(e) + 5 + "px";
        my$("jd4_box").style.top = evtTools.pageY(e) + "px";
    };
};
my$("jd4").onmouseout = function () {
    my$("jd4_box").style.display = "none";
};
my$("level").onchange = function () {
    if (my$("level").value == "1") {
        for (i = 0; i < 3; i++) {
            my$("level_pic").children[i].style.display = "none";
        }
        my$("level_pic").children[0].style.display = "block"
    } else if (my$("level").value == "15") {
        for (i = 0; i < 3; i++) {
            my$("level_pic").children[i].style.display = "none";
        }
        my$("level_pic").children[1].style.display = "block"
    } else {
        for (i = 0; i < 3; i++) {
            my$("level_pic").children[i].style.display = "none";
        }
        my$("level_pic").children[2].style.display = "block"
    }
};

$(function () {
    var liArr = $('.content .right .tap ul li');
    var jineng = $('.content .right .jineng>ul>li');

    jineng.eq(0).show();
    liArr.each(function (index, item) {
        item.onclick = function () {
            $(this).siblings('li').removeClass('hover1');
            $(this).toggleClass('hover1');
            jineng.siblings('li').hide();
            jineng.eq(index).show();
        }
    });
})