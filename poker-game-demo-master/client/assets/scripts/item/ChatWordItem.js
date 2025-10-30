cc.Class({
    extends: cc.Component,

    properties: {
        wordLabel: cc.Label,
    },

    // use this for initialization
    onLoad: function () {

    },

    showWord: function (content) {
        this.node.stopAllActions();
        this.node.opacity = 0;
        this.wordLabel.string = content;
        this.node.width = this.wordLabel.node.width;
        cc.tween(this.node)
            .to(0.8, { opacity: 255 })
            .delay(0.5)
            .to(0.8, { opacity: 0 })
            .start();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
