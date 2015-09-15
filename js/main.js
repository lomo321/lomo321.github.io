/**
 * Created by liangxiaohao on 15/9/6.
 */
//require.config({
//    paths: {
//        //"jquery": "http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js",
//        "velocity": "/js/com/velocity/velocity",
//        "velocity-ui": "/js/com/velocity/velocity.ui"
//    },
//    shim: {
//
//        "velocity-ui": {
//            deps: ["velocity"]
//        }
//    }
//
//});

//require([], function() {
    var motionON = function(){
        //require(["velocity","velocity-ui"],function(Velocity){
            function loadBrand(){
                var sequence = [
                    {e:$('.line-left'),p:{translateY:'-200%'},o:{durantion:500}},
                    {e:$('.line-right'),p:{translateY:'200%'},o:{durantion:500,sequenceQueue:false}},
                    {e: $('.line-top'),p:{ translateX:'100%'}, o:{duration:500}},
                    {e: $('.line-bottom'),p:{ translateX:'-100%'}, o:{duration:500, sequenceQueue:false}},
                    {e: $('.logo'),p:{ top:'0',opacity:1}, o:{duration:200}}
                ];
                sequence.push({e:$('.menu2'),p:{opacity:1},o:{duration:150}});
                //for(var i=0;i<4;i++) {
                //    sequence.push( {e: $('.menu-item')[i],p:{opacity:1},o:{duration:150}} );
                //}
                sequence.push({e:$('.menu'),p:{opacity:1},o:{duration:150, sequenceQueue:false}});
                $.Velocity.RunSequence(sequence);
            }

            loadBrand();
        //})
    };
    motionON();
    var aboutMeMotion = function() {
        function loadInfo(){
            var sequence = [
                {e:$('#aboutMe'),p:{translateX:'100%'},o:{duration:150}}
            ];
            $.Velocity.RunSequence(sequence);
        }
        loadInfo();
    };
    var cancelMotion = function() {
        function cancelInfo(){
            var sequence = [
                {e:$('#aboutMe'),p:{translateX:'-100%'},o:{duration:150}}
            ];
            $.Velocity.RunSequence(sequence);
        }
        cancelInfo();
    }
    var $aboutMe = $('#aboutMeButton');
    var $cancel = $('#cancel');
    $cancel.on('click',function(){
       cancelMotion();
    });
    $aboutMe.on('click',function(){
        aboutMeMotion()
    });
    var $topBar = $("#topBar");
    //window.onscroll = function() {
    //    var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
    //    if(scrollTop >= 130) {
    //        $topBar.addClass("fixed");
    //    } else {
    //        $topBar.removeClass("fixed");
    //    }
    //};
    //$("#title").on("click", function(){
    //    $('html, body').animate({scrollTop:0}, 'slow');
    //});
//});