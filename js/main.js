/**
 * Created by liangxiaohao on 15/9/6.
 */
require.config({
    paths: {
        "jquery": "/js/com/jquery/jquery",
        "velocity": "/js/com/velocity/velocity",
        "velocity-ui": "/js/com/velocity/velocity.ui"
    },
    shim: {
        "velocity": {
            deps: ["jquery"]
        },
        "velocity-ui": {
            deps: ["velocity"]
        }
    }

});

require(["jquery"], function($) {
    var motionON = function(){
        require(["velocity","velocity-ui"],function(Velocity){
            function loadBrand(){
                var sequence = [
                    {e:$('.line-left'),p:{translateY:'-200%'},o:{durantion:500}},
                    {e:$('.line-right'),p:{translateY:'200%'},o:{durantion:500,sequenceQueue:false}},
                    {e: $('.line-top'),p:{ translateX:'100%'}, o:{duration:500,}},
                    {e: $('.line-bottom'),p:{ translateX:'-100%'}, o:{duration:500, sequenceQueue:false}},
                    {e: $('.logo'),p:{ top:'0',opacity:1}, o:{duration:200}},
                ];
                sequence.push({e:$('.menu2'),p:{opacity:1},o:{duration:150}});
                for(var i=0;i<4;i++) {
                    sequence.push( {e: $('.menu-item')[i],p:{opacity:1},o:{duration:150}} );
                }
                $.Velocity.RunSequence(sequence);
            }

            loadBrand();
        })
    };
    motionON();

    var $topBar = $("#topBar");
    window.onscroll = function() {
        var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
        if(scrollTop >= 130) {
            $topBar.addClass("fixed");
        } else {
            $topBar.removeClass("fixed");
        }
    };
    $("#title").on("click", function(){
        $('html, body').animate({scrollTop:0}, 'slow');
    });
});