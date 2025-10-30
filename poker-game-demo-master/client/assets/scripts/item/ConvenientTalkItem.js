cc.Class({
    extends: cc.Component,

    properties: {
        labelNode: cc.Node,
        talkId: 0,
        panel: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        var w1 = this.node.width;
        var w2 = this.labelNode.width;
        if (w2 > w1) {
            var x1 = (w2 - w1) / 2 + 20;
            var x2 = (w1 - w2) / 2 - 20;
            this.labelNode.x = x1;
            var seq = cc.tween()
                .to(2, { x: x1 })
                .delay(2)
                .to(2, { x: x2 })
                .delay(2);
            cc.tween(this.labelNode)
                .repeatForever(seq)
                .start();
        }
        else {
            this.labelNode.x = (w2-w1)/2+20;
        }
    },

    onClickTalk: function () {
        cc.log('Chat onClick Talk begin');
        this.panel.getComponent('ChatPanel').convenientTalk(this.talkId);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
