/**
 * Created by lml on 2017/4/2.
 */
window.onload=function(){


    //����ͼƬ���Ʋ���
    //��ȡ�����Ǹ�div
    var coco=my$("coco");
    //��ȡ���div���div
    var main=my$("main");
    //��ȡul��ǩ
    var ulObj=my$("main").children[0];

    //��ȡli��ǩ
    var liObjs=ulObj.children;
    var im1=my$("im1");
    var im2=my$("im2");
    for(var i=0; i<liObjs.length;i++){

        liObjs[0].onmouseover=function(){
            animate(this,{"margin-top":-15});
            my$("im1").src="images/cover161129_bg_112.jpg";
            my$("hh").style.color="#fff";

        };
        liObjs[0].onmouseout=function(){
            animate(this,{"margin-top":0});
            my$("im1").src="images/cover161129_bg_111.jpg";
            my$("hh").style.color="#FFD943";
        };
        liObjs[1].onmouseover=function(){
            animate(this,{"margin-top":-15});
            my$("im2").src="images/cover161129_bg_501.jpg";
            my$("hh1").style.color="#fff";
        };
        liObjs[1].onmouseout=function(){
            animate(this,{"margin-top":0});
            my$("im2").src="images/cover161129_bg_502.jpg";
            my$("hh1").style.color="#FFD943";
        };
        liObjs[2].onmouseover=function(){
            animate(this,{"margin-top":-15});
            my$("im3").src="images/cover161129_bg_601.png";
            my$("hh2").style.color="#fff";
        };
        liObjs[2].onmouseout=function(){
            animate(this,{"margin-top":0});
            my$("im3").src="images/cover161129_bg_602.jpg";
            my$("hh2").style.color="#FFD943";
        };
    }/*����������л�ͼƬ*/









    //��ȡ�м�Ĵ��
    //����ͼƬ���Ʋ���

    var cc1=my$("cc1");
    var cc2=my$("cc2");


    var flag=true;
    //���ͼƬ���������
    my$("newCreate").onmouseover= mouseoverHandle;
    function mouseoverHandle() {
        if(!flag){
            my$("nev").style.display="block";
            my$("old").style.display="none";
            animate(my$("nev"),{"left":100});/*nev��ԭ����left:60,�������ұ߶����������100,*/
            animate(my$("old"),{"left":40});/**/
        }
        animate(cc1,{"margin-top":-25});
        my$("im6").src="images/cover170320_bg_15.png";
        flag=true;
    };
    //���ͼƬ������Ƴ�
    my$("newCreate").onmouseout= mouseoutHandle;
    function mouseoutHandle () {
        if(!flag){
            animate(my$("nev"),{"left":100});
        }
        animate(cc1,{"margin-top":0});
        my$("im6").src="images/cover170320_bg_14.png";
        my$("nev").style.display="block";
        my$("old").style.display="none";
    };
    //�ұ�ͼƬ���������
    my$("newCreate1").onmouseover= mouseoverHandle1;
    function mouseoverHandle1() {
            if(flag){
                my$("nev").style.display="none";
                my$("old").style.display="block";
                animate(my$("old"),{"left":0});
                animate(my$("nev"),{"left":60});
            }
        animate(cc2,{"margin-top":-25});
        my$("im66").src="images/cover170320_bg_16.png";
            flag=false;
    };
    //���ͼƬ�����Ƴ�
    my$("newCreate1").onmouseout= mouseoutHandle1;
    function mouseoutHandle1() {
        if(flag){
            animate(my$("old"),{"left":0});
        }
        animate(cc2,{"margin-top":0});
       my$("im66").src="images/cover170320_bg_16.png";
        my$("nev").style.display="none";
        my$("old").style.display="block";
    };


};