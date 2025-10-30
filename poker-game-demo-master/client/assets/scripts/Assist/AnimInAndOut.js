cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        // onLoad要执行的全都在onEnable中进行了
    },

    onEnable: function () {
        this.node.opacity = 0;
        this.node.scale = 0;
        cc.tween(this.node)
            .to(0.2, { opacity: 255, scale: 1 })
            .start();
    },

    animateAndDestroy: function () {
        if (this.isDestroying) {
            return;
        }
        this.isDestroying = true;
        
        cc.tween(this.node)
            .to(0.2, { opacity: 0, scale: 0 })
            .call(()=>{
                if (this.node) {
                    this.node.destroy();
                }
            })
            .start();
    },

    animateAndDisable: function () {
        if (this.isDestroying) {
            return;
        }
        this.isDestroying = true;
        
        cc.tween(this.node)
            .to(0.2, { opacity: 0, scale: 0 })
            .call(()=>{
                this.node.active = false;
            })
            .start();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
