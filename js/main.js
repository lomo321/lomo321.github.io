/**
 * Created by liangxiaohao on 15/9/6.
 */
require.config({
    paths: {
        "jquery": "./com/jquery/jquery",
        "velocity": "./com/velocity/velocity",
        "velocity-ui": "./com/velocity/velocity.ui"
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
    var motion
});