/**
 * jQuery dota2 login
 */
// 注册命名空间
document.domain = 'dota2.com.cn';
var GLOBAL_DOTA2 = {};
GLOBAL_DOTA2.passport = {};
//关闭窗口
window.top.document._closeWindow = function() {
    var scope = window.top.document;
    if(scope.getElementById('J_dialog_dota2_passport') != null) {
        var obj = scope.getElementById('J_dialog_dota2_passport');
        if(obj != null) {
            obj.parentNode.removeChild(obj);
        }
    }
    if(scope.getElementById('Dota2_overlay') != null) {
        var obj = scope.getElementById('Dota2_overlay');
        if(obj != null) {
            obj.style.display = 'none';
        }
    }
};
window.top.document._Dota2closeWindow = function() {
    var scope = window.top.document;
    if(scope.getElementById('J_dialog_dota2_passport') != null) {
        var obj = scope.getElementById('J_dialog_dota2_passport');
        if(obj != null) {
            obj.parentNode.removeChild(obj);
        }
    }
    if(scope.getElementById('Dota2_overlay') != null) {
        var obj = scope.getElementById('Dota2_overlay');
        if(obj != null) {
            obj.style.display = 'none';
        }
    }
};

//dialog
(function($) {
    $.Dota2LB = {
        config: {},
        init: function() {},
        bindEvents: function() {},
        // @returns window height		
        calculateScreenHeight: function() {
            if(document.all) {
                var h = $('body').height();
                if(h > $(window).height()) {
                    return h + 20;
                } else {
                    return $(window).height();
                }
            } else {
                var h = $('html').height();
                if(h > $(window).height()) {
                    return $('html').height();
                } else {
                    return $(window).height();
                }
            }
        },
        // @returns the X position that will center an object		
        calculateCenterX: function(obj) {
            return $(window).width() / 2 - $(obj).width() / 2;
        },
        // @returns the Y position that will center an object (adjusted to scroll top)		
        calculateCenterY: function(obj) {
            return $(window).scrollTop() + ($(window).height() / 2 - $(obj).height() / 2);
        }
    };
    //show panels in center
    $.fn.showDota2PanelCenter = function() {
        this.each(function() {
            var coorX = ($(window).width() - $(this).width()) / 2;
            var coorY = ($(window).height() - $(this).height()) / 2;
            coorX = $(window).scrollLeft() + ((coorX > 0) ? coorX : 0);
            coorY = $(window).scrollTop() + ((coorY > 0) ? coorY : 0);
            $(this).showDota2PanelPosition(coorX, coorY);
        });

        return this;
    };

    //show panels in position
    $.fn.showDota2PanelPosition = function(x, y) {
        this.each(function() {
            $(this)
                .css({
                    "left": x,
                    "top": y
                })
                .show();
        });

        return this;
    };

    //show overlay
    $.fn.showDota2Overlay = function() {
        this.each(function() {
            var self = $(this);
            self.height($.Dota2LB.calculateScreenHeight()).show();
        });
        return this;
    };
    /*
     * 关闭窗口
     * close window	
     */

})(jQuery);

$(function() {
    var $dialogPassport = $('#J_dialog_dota2_passport');
    $Dota2_overlay = $('#Dota2_overlay');
    // sign in
    $('#J_dota2SignIn').on('click', function(event) {
        var iframesrc = $dialogPassport.find('iframe');
        $dialogPassport.find('iframe').attr('src', iframesrc.data('src'));
        $dialogPassport.show();
        //$dialogPassport.attr('url', url);
        // $dialogPassport.showDota2PanelCenter();
        $Dota2_overlay.showDota2Overlay();
    });

    $dialogPassport.on('click', '.close-passport', function(event) {
        event.preventDefault();
        $dialogPassport.hide();
        $Dota2_overlay.hide();
    });
});