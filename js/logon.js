/**
 * Created by chen on 2017/4/8.
 */
    //获取输入框元素 并注册获取、失去焦点事件
//var txt1=my$("txt_box").getElementsByClassName("txt1")[0];
//var txt2=my$("pwd_box").getElementsByClassName("txt1")[0];
//为输入框注册获取焦点事件 改变其父盒子的样式,用面向对象的思想
$(function(){
    //创建改变样式的构造函数
    function SetStyle(elementId){
        this.obj=my$(elementId);//获取父级元素
        this.objChild=this.obj.getElementsByTagName("input")[1];
    }
//原型对象
    SetStyle.prototype.setStyle=function(){
        var that=this;
        this.objChild.onfocus=function(){
            that.obj.style.border="1px solid #fff";
        };
        this.objChild.onblur=function(){
            that.obj.style.border="";
        };
    };
//创建对象
    var txt1=new SetStyle("txt_box");
    txt1.setStyle();
    var txt2=new SetStyle("pwd_box");
    txt2.setStyle();

//复选框打钩( 用jQuery来做)
    //假的复选框注册点击事件
    var num=0;
    $("#check").click(function(){
        num++;
        if(num%2!=0){
            $("#sp").css("display","block");
        }else{
            $("#sp").css("display","none");
        }
    });

    //用户名与密码的验证
    $("#center_btn").click(function(){
        if($("#userName").val()=="admin"&&$("#pwd").val()=="123"){
            $("#logon").hide();
            $("#mask_logon").hide();
            $("#nav_right>span").text("您好");
            $("#nav_right>span").append("<a href='###'>赵静</a>");

        }else{
            $("#inpSp").text("用户名或密码错误");
            $("#inpSp").css({"color":"red","marginTop":40});
        }
    });
    //登录按钮鼠标进入高亮显示
    $("#center_btn").mouseenter(function(){
        $(this).css("backgroundColor","#A93D1D");
    }).mouseleave(function(){
        $(this).css("backgroundColor","#A02D1D");
    });
    //完美神盾登录鼠标进入高亮显示
    $("#center_bom").on("mouseenter","a",function(){
        $(this).css("border","1px solid red");
    }).on("mouseleave","a",function(){
        $(this).css("border","1px solid #7A3127");
    });

    //登录框下面的p标签高亮显示
    $("#btn_p").on("mouseenter",".p_a",function(){
        $(this).css("color","red");
    }).on("mouseleave",".p_a",function(){
        $(this).css("color","#781F14");
    });

    //右上角关闭
    $("#close").click(function(){
        $("#logon").hide();
        $("#mask_logon").hide();
        $("#X").parent().show();
    });

    //导航栏登录点击事件,弹出登录框
    $("#aLogon").click(function(){
        $("#logon").show();
        $("#mask_logon").show();
        $("#X").parent().hide();
    });

});
//创建改变样式的构造函数
    function SetStyle(elementId){
        this.obj=my$(elementId);//获取父级元素
        this.objChild=getLastElement(this.obj);
    }
//原型对象
    SetStyle.prototype.setStyle=function(){
        var that=this;
        this.objChild.onfocus=function(){
            that.obj.style.border="1px solid #fff";
        };
        this.objChild.onblur=function(){
            that.obj.style.border="";
        };
    };
//创建对象
    var txt1=new SetStyle("txt_box");
    txt1.setStyle();
    var txt2=new SetStyle("pwd_box");
    txt2.setStyle();

//复选框打钩( 用jQuery来做)


        //假的复选框注册点击事件
        var num=0;
        $("#check").click(function(){
            num++;
            if(num%2!=0){
                $("#sp").css("display","block");
            }else{
                $("#sp").css("display","none");
            }
        });

    //用户名与密码的验证
    $("#center_btn").click(function(){
       if($("#userName").val()=="admin"&&$("#pwd").val()=="123"){
           $("#logon").hide();
           $("#mask_logon").hide();
       }else{
           $("#inpSp").text("用户名或密码错误");
           $("#inpSp").css({"color":"red","marginTop":40});
       }
    });
    //登录按钮鼠标进入高亮显示
    $("#center_btn").mouseenter(function(){
        $(this).css("backgroundColor","#A93D1D");
    }).mouseleave(function(){
        $(this).css("backgroundColor","#A02D1D");
    });
    //完美神盾登录鼠标进入高亮显示
    $("#center_bom").on("mouseenter","a",function(){
        $(this).css("border","1px solid red");
    }).on("mouseleave","a",function(){
        $(this).css("border","1px solid #7A3127");
    });

    //登录框下面的p标签高亮显示
    $("#btn_p").on("mouseenter",".p_a",function(){
        $(this).css("color","red");
    }).on("mouseleave",".p_a",function(){
        $(this).css("color","#781F14");
    });

    //右上角关闭
    $("#close").click(function(){
        $("#logon").hide();
        $("#mask_logon").hide();
    });

    //导航栏登录点击事件,弹出登录框
    $("#aLogon").click(function(){
        $("#logon").show();
        $("#mask_logon").show();
    });







