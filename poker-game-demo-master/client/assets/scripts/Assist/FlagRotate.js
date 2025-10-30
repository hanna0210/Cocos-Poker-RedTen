cc.Class({
    extends: cc.Component,

    properties: {
        startRotation: 0,
        endRotation: 20,
        deltaTime: 1,
    },

    // use this for initialization
    onLoad: function () {
        // rotation is deprecated in v2.x, use angle (opposite sign)
        this.node.angle = -this.startRotation;
        var seq = cc.tween()
            .to(this.deltaTime, { angle: -this.endRotation })
            .to(this.deltaTime, { angle: -this.startRotation });
        cc.tween(this.node)
            .repeatForever(seq)
            .start();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
