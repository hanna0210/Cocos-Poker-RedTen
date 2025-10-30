cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        this.node.opacity = 0;
        this.node.x = this.node.width;
        cc.tween(this.node)
            .to(0.3, { x: 0 })
            .start();
        this.scheduleOnce(()=>{
            this.node.opacity = 255;
        }, 0);
    },

    animateAndDestroy: function () {
        cc.tween(this.node)
            .to(0.3, { x: this.node.width })
            .call(()=>{ this.node.destroy(); })
            .start();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
