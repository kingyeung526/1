
var app = {

    animation: 
    {

        init: function ()
        {

            // Master timeline
            var masterTl = new TimelineMax();

            masterTl
                .set('#dots circle', { y: '-=50', autoAlpha: 0 })
                .staggerTo('#dots circle', 0.3, { autoAlpha: 1 }, 0.2)
                .staggerTo('#dots circle', 0.7, { y: '0', ease: Bounce.easeOut }, 0.2, '-=0.5')
                .add(function () { app.animation.bounce() });
                
            
        },

        bounce: function ()
        { 
            
            var bounceTl = new TimelineMax({ repeat: -1 });
            var path1 = MorphSVGPlugin.pathDataToBezier("#dot-path-1");
            var path2 = MorphSVGPlugin.pathDataToBezier("#dot-path-2");
            var path3 = MorphSVGPlugin.pathDataToBezier("#dot-path-3");
            var path4 = MorphSVGPlugin.pathDataToBezier("#dot-path-4");

            bounceTl
                .to('#dot-1', 2, { bezier: { values: path1, type: "cubic" }, ease: Linear.easeNone })
                .to('#dot-2', 2, { bezier: { values: path2, type: "cubic" }, ease: Linear.easeNone }, '-=1.75')
                .to('#dot-3', 2, { bezier: { values: path3, type: "cubic" }, ease: Linear.easeNone }, '-=1.75')
                .to('#dot-4', 2, { bezier: { values: path4, type: "cubic" }, ease: Linear.easeNone }, '-=1.7');

        }

    }

};


$(document).ready(function () {

    app.animation.init();

});