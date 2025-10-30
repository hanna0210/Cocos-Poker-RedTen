cc.Class({
    extends: cc.Component,

    properties: {
        label: cc.Label,
    },

    // use this for initialization
    onLoad: function () {
        this.node.opacity = 0;
    },
    
    showMessage: function (msg) {
        this.label.string = msg;
        cc.tween(this.node)
            .to(0.3, { opacity: 255 })
            .delay(0.5)
            .to(1, { opacity: 0 })
            .call(()=>{ this.node.destroy(); })
            .start();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
