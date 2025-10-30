cc.Class({
    extends: cc.Component,

    properties: {
        wordNode: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        // test
        var date = new Date();
        var s = "当前时间：" + date.toLocaleString();
        this.showString(s);
        
        
        var deltaX = - this.node.width * 2;
        var seq = cc.tween()
            .by(20, { x: deltaX })
            .call(()=>{ this.wordNode.setPosition(cc.v2(0, 0)); });
        cc.tween(this.wordNode)
            .repeatForever(seq)
            .start();
    },

    showString: function (s) {
        this.wordNode.getComponent(cc.Label).string = s;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
