cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        this.node.opacity = 0;
        this.node.scale = 0;
        var seq = cc.tween()
            .to(0.5, { opacity: 255, scale: 1 })
            .to(0.5, { opacity: 0, scale: 0 })
            .delay(2);
        cc.tween(this.node)
            .repeatForever(seq)
            .start();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
