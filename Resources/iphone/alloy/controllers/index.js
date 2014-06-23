function Controller() {
    function doWantClick() {
        var listWantView = Alloy.createController("listWant", {}).getView();
        Alloy.Globals.navgroup.openWindow(listWantView);
    }
    function doContactClick() {
        Ti.API.info("===doContactClick");
        var listContactView = Alloy.createController("listContact", {}).getView();
        Alloy.Globals.navgroup.openWindow(listContactView);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId0 = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "도와주세요",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    doWantClick ? $.__views.__alloyId1.addEventListener("click", doWantClick) : __defers["$.__views.__alloyId1!click!doWantClick"] = true;
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "대화하기",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    doContactClick ? $.__views.__alloyId2.addEventListener("click", doContactClick) : __defers["$.__views.__alloyId2!click!doContactClick"] = true;
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId0,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.navgroup = $.navGroupWin;
    Alloy.Globals.navgroup.open();
    __defers["$.__views.__alloyId1!click!doWantClick"] && $.__views.__alloyId1.addEventListener("click", doWantClick);
    __defers["$.__views.__alloyId2!click!doContactClick"] && $.__views.__alloyId2.addEventListener("click", doContactClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;