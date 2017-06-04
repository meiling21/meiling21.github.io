/**
 * Created by Administrator on 2017/3/31.
 */
//��������
window.onload = function () {
    //��ȡ��ǩ����
    function tagName(element,label){
        return element.getElementsByTagName(label);
    }
    //��������뿪��ɫ�ı��װ����
    function setOnMouseColor(element,color1,color2){
       element.onmouseover=function(){
           element.style.color=color1;
       };
        element.onmouseout=function(){
            element.style.color=color2;
        }
    }
    //��������뿪border�仯
    function setOnMouseBorder(element,border1,border2){
        element.onmouseover=function(){
            element.style.border=border1;
        };
        element.onmouseout=function(){
            element.style.border=border2;
        }
    }
    //��������뿪id�仯
    function setOnMouseId(element,id1,id2){
        element.onmouseover=function(){
            element.id=id1;
        };
        element.onmouseout=function(){
            element.id=id2;
        }
    }
//title_more��ǩ��������뿪�¼�
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
//���ű������������뿪�¼��Լ�����¼�
        var liObj = tagName(my$("title_ul"), "li");
        //���title_ul�����е�a��ǩ
        var title_ul_aObjs = tagName(my$("title_ul"), "a");
        //������еı�����Ϣ
        var matchObj = my$("matchObj").children;
        //��������б�
        var ulObjs = my$("dvObj").children;
        //ѭ������
        for (var i = 0; i < liObj.length; i++) {
            liObj[i].setAttribute("index", i);
            //��������뿪�¼�
            setOnMouseBorder(liObj[i], "1px solid #999999", "");
            //����¼�
            liObj[i].onclick = matchClickHandle;
        }

        function matchClickHandle() {
            //�����Ƴ���ʽ
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

//�����Ľ�����뿪�¼�
    (function(){
        for (var i = 0; i < matchObj.length; i++) {
            var main_match_a = matchObj[i].children[0];
            //������������뿪�¼�
            setOnMouseId(main_match_a,"match","");
        }
    })();
//�����б�
    (function(){
        var newAObj =tagName(my$("dvObj"),"a");
        for (var i = 0; i < newAObj.length; i++) {
            if (i % 2 == 0) {
                newAObj[i].style.backgroundColor = "#111216";
            }
            //������������뿪�¼�
            setOnMouseColor(newAObj[i],"#00C0FF","");
        }
    })();
//�Ҳ�����ȵ�
//�������������뿪�¼�
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
//��Ƶ����
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
//�ο�ʼ�ĵط�
//�������ĺ���
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
