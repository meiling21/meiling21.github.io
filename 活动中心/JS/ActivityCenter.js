/**
 * Created by Chalie on 2017/4/2.
 */
$(function () {
    //С�������ر��¼�
    var pstDiv = my$("nav_right").getElementsByTagName("div")[0];
    var close = pstDiv.getElementsByTagName("span")[2];

//ע��ر��¼�
    close.onclick = function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    };


//navͷ�������������¼�
//��ȡ���е�������li
    var list = my$("mousePosition").children[0].children;
//����ע����������ʾ�����¼�������뿪���������¼�
    for (var i = 0; i < list.length; i++) {
        list[i].onmouseover = mouseoverHandle;
        list[i].onmouseout = mouseoutHandle;
    }
//�������¼�������
    function mouseoverHandle() {
        this.getElementsByTagName("div")[0].style.display = "block";
    }
//����뿪������
    function mouseoutHandle() {
        this.getElementsByTagName("div")[0].style.display = "none";
    }
    //��������



//��Ƶ����
    $(".video-top>ul>li>a").click(function () {
        $(this).addClass("color-blue").parent("li").siblings("li").children("a").removeClass("color-blue");
    });

    $("#top1>a").click(function () {
        $("#vd1").show().siblings().hide();
    });
    $("#top2>a").click(function () {

        $("#vd").show().siblings().hide();
    });
    $("#top3>a").click(function () {

        $("#vd2").show().siblings().hide();
    });
    $("#top4>a").click(function () {

        $("#vd3").show().siblings().hide();
    });
    $("#top5>a").click(function () {

        $("#vd4").show().siblings().hide();
    });




//��Ƶ����

    var divs = my$("video-content").getElementsByClassName("main-video");
    var divh = my$("video-content").getElementsByClassName("main-video1");


    for (var i = 0; i < divs.length; i++) {
        divs[i].onmouseover = function () {
            animate(this.children[0], {"opacity": 0});
            animate(this.children[1], {"opacity": 1});
        };
        divs[i].onmouseout = function () {
            animate(this.children[0], {"opacity": 1});
            animate(this.children[1], {"opacity": 0});
        };
    }

    for (var j = 0; j < divh.length; j++) {
        divh[j].onmouseover = function () {
            animate(this.children[0], {"opacity": 0});
            animate(this.children[1], {"opacity": 1});
        };
        divh[j].onmouseout = function () {
            animate(this.children[0], {"opacity": 1});
            animate(this.children[1], {"opacity": 0});
        };
    }


//service
    my$("pay").onmouseover = function () {
        this.style.backgroundImage = "../images/icon-btns.png";
        this.style.backgroundPosition = "-14px -112px";
    };
    my$("download").onmouseover = function () {
        this.style.backgroundImage = "../images/icon-btns.png";
        this.style.backgroundPosition = "-14px -320px";
    };
    my$("zhuce").onmouseover = function () {
        this.style.backgroundImage = "../images/icon-btns.png";
        this.style.backgroundPosition = "-14px -528px";
    };
    my$("pay").onmouseout = function () {
        this.style.backgroundImage = "../images/icon-btns.png";
        this.style.backgroundPosition = "-14px -8px";
    };
    my$("download").onmouseout = function () {
        this.style.backgroundImage = "../images/icon-btns.png";
        this.style.backgroundPosition = "-14px -216px";
    };
    my$("zhuce").onmouseout = function () {
        this.style.backgroundImage = "../images/icon-btns.png";
        this.style.backgroundPosition = "-14px -424px";
    };




    $(".video-foot>ul>li>a").click(function () {
        $(this).addClass("bg-blue").parent("li").siblings("li").children("a").removeClass("bg-blue");
    });
    $(".video-foot>div>.page-l").click(function () {

        if($(".bg-blue").parent("li").index()!=0){
            $(".bg-blue").removeClass("bg-blue").parent("li").prev("li").children("a").addClass("bg-blue");
        }
    });
    $(".video-foot>div>.page-r").click(function () {
        if($(".bg-blue").parent("li").index()!=7){
            $(".bg-blue").removeClass("bg-blue").parent("li").next("li").children("a").addClass("bg-blue");
        }
    });



    $(window).scroll(function(){
        //console.log($(document).scrollTop());
        if($(document).scrollTop()>450){
            $(".return").css("display","block");
        }else{
            $(".return").css("display","none");
        }
    });

    $(".return").click(function () {
        $(document).scrollTop(0);
    });



});