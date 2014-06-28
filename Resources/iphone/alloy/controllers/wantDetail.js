function Controller() {
    function conversation() {
        alert("under developed");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "wantDetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.wantDetail = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "wantDetail"
    });
    $.__views.wantDetail && $.addTopLevelView($.__views.wantDetail);
    $.__views.__alloyId39 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId39"
    });
    $.__views.wantDetail.add($.__views.__alloyId39);
    $.__views.userPic = Ti.UI.createImageView({
        id: "userPic"
    });
    $.__views.__alloyId39.add($.__views.userPic);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "titleLabel"
    });
    $.__views.__alloyId39.add($.__views.titleLabel);
    $.__views.conversation = Ti.UI.createButton({
        title: "대화하기",
        id: "conversation"
    });
    $.__views.__alloyId39.add($.__views.conversation);
    conversation ? $.__views.conversation.addEventListener("click", conversation) : __defers["$.__views.conversation!click!conversation"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.userPic.image = args.userPic || "Default Title";
    $.titleLabel.text = args.title || "Default author";
    __defers["$.__views.conversation!click!conversation"] && $.__views.conversation.addEventListener("click", conversation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;