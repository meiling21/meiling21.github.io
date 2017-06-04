/**
 * Created by zhaojia on 2017/3/29.
 */
my$("story_open").onclick = function () {
    if (this.innerHTML == "[OPEN+]") {
        this.parentNode.previousElementSibling.className = "h120_long";
        this.innerHTML = "[CLOSE-]"
    } else {
        this.parentNode.previousElementSibling.className = "story h120";
        this.innerHTML = "[OPEN+]"
    }
}
my$("hx").onmouseover=function(){
    my$("hx_box").style.display="block";
    document.onmousemove=function (e) {
        my$("hx_box").style.left=evtTools.pageX(e)+"px";
        my$("hx_box").style.top=evtTools.pageY(e)+"px";
    };
}
my$("hx").onmouseout=function(){
    my$("hx_box").style.display="none";
}

my$("gbf").onmouseover=function(){
    my$("gbf_box").style.display="block";
    document.onmousemove=function (e) {
        my$("gbf_box").style.left=evtTools.pageX(e)+"px";
        my$("gbf_box").style.top=evtTools.pageY(e)+"px";
    };
}
my$("gbf").onmouseout=function(){
    my$("gbf_box").style.display="none";
}
my$("sx1").onmouseover=function(){
    my$("sx1_box").style.display="block";
    document.onmousemove=function (e) {
        my$("sx1_box").style.left=evtTools.pageX(e)+"px";
        my$("sx1_box").style.top=evtTools.pageY(e)+"px";
    };
}
my$("sx1").onmouseout=function(){
    my$("sx1_box").style.display="none";
}
my$("sx2").onmouseover=function(){
    my$("sx2_box").style.display="block";
    document.onmousemove=function (e) {
        my$("sx2_box").style.left=evtTools.pageX(e)+"px";
        my$("sx2_box").style.top=evtTools.pageY(e)+"px";
    };
}
my$("sx2").onmouseout=function(){
    my$("sx2_box").style.display="none";
}
my$("sx3").onmouseover=function(){
    my$("sx3_box").style.display="block";
    document.onmousemove=function (e) {
        my$("sx3_box").style.left=evtTools.pageX(e)+"px";
        my$("sx3_box").style.top=evtTools.pageY(e)+"px";
    };
}
my$("sx3").onmouseout=function(){
    my$("sx3_box").style.display="none";
};
my$("level").onchange=function(){
    if(my$("level").value=="1"){
        for(i=0;i<3;i++){
            my$("level_pic").children[i].style.display="none";
        }
        my$("level_pic").children[0].style.display="block"
    }else if(my$("level").value=="15"){
        for(i=0;i<3;i++){
            my$("level_pic").children[i].style.display="none";
        }
        my$("level_pic").children[1].style.display="block"
    }else{
        for(i=0;i<3;i++){
            my$("level_pic").children[i].style.display="none";
        }
        my$("level_pic").children[2].style.display="block"
    }
}

