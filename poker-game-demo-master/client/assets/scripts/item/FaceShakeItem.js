cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {

    },

    showPic: function (picId) {
        this.node.stopAllActions();
        this.node.opacity = 0;
        cc.loader.loadRes("UI/game_face", cc.SpriteAtlas, (err, atlas)=>{
            if (!err) {
                var frame = atlas.getSpriteFrame('game_face' + picId);
                this.node.getComponent(cc.Sprite).spriteFrame = frame;
            }
            this.node.opacity = 255;
            cc.tween(this.node)
                .by(0.5, { y: 10 })
                .by(0.5, { y: -10 })
                .by(0.5, { y: 10 })
                .by(0.5, { y: -10 })
                .delay(0.5)
                .to(0.5, { opacity: 0 })
                .start();
        });
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
