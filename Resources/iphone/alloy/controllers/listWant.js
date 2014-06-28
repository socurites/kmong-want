function Controller() {
    function showWantDetail(e) {
        var section = $.list.sections[e.sectionIndex];
        var item = section.getItemAt(e.itemIndex);
        var args = {
            userPic: item.userPic.image,
            title: item.titleLabel.text
        };
        var wantDetailView = Alloy.createController("wantDetail", args).getView();
        Alloy.Globals.navgroup.openWindow(wantDetailView);
    }
    function createListView(_data) {
        var items = [];
        for (var i in _data) items.push({
            template: "template1",
            userPic: {
                image: _data[i].userPic
            },
            titleLabel: {
                text: _data[i].title
            }
        });
        $.section.setItems(items);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listWant";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.listWant = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "listWant"
    });
    $.__views.listWant && $.addTopLevelView($.__views.listWant);
    var __alloyId23 = {};
    var __alloyId26 = [];
    var __alloyId27 = {
        type: "Ti.UI.Button",
        properties: {
            title: "Load More"
        }
    };
    __alloyId26.push(__alloyId27);
    var __alloyId25 = {
        properties: {
            name: "buttonItem",
            height: Ti.UI.SIZE
        },
        childTemplates: __alloyId26
    };
    __alloyId23["buttonItem"] = __alloyId25;
    var __alloyId29 = [];
    var __alloyId30 = {
        type: "Ti.UI.ImageView",
        bindId: "userPic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "userPic"
        }
    };
    __alloyId29.push(__alloyId30);
    var __alloyId32 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId33 = [];
            var __alloyId34 = {
                type: "Ti.UI.Label",
                bindId: "titleLabel",
                properties: {
                    color: "#000",
                    left: "60dp",
                    top: 0,
                    textAlign: "left",
                    bindId: "titleLabel"
                }
            };
            __alloyId33.push(__alloyId34);
            return __alloyId33;
        }(),
        properties: {}
    };
    __alloyId29.push(__alloyId32);
    var __alloyId28 = {
        properties: {
            height: "56dp",
            name: "template1"
        },
        childTemplates: __alloyId29
    };
    __alloyId23["template1"] = __alloyId28;
    var __alloyId36 = [];
    $.__views.__alloyId37 = {
        template: "template1",
        properties: {
            id: "__alloyId37"
        }
    };
    __alloyId36.push($.__views.__alloyId37);
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    $.__views.section.items = __alloyId36;
    var __alloyId38 = [];
    __alloyId38.push($.__views.section);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId38,
        templates: __alloyId23,
        id: "list",
        defaultItemTemplate: "template1"
    });
    $.__views.listWant.add($.__views.list);
    showWantDetail ? $.__views.list.addEventListener("itemclick", showWantDetail) : __defers["$.__views.list!itemclick!showWantDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var _data = [];
    _data.push({
        userPic: "http://kmong.com/images/membersprofilepic/thumbs/kEQFX1391379930.png",
        title: "혹시 사람찾아주실분 있으신가요?"
    });
    _data.push({
        userPic: "http://kmong.com/images/membersprofilepic/21oFI1375236798.jpg",
        title: "2d 캐드 도면 -> 스케치업으로 3d 해주실분 구합니다"
    });
    createListView(_data);
    __defers["$.__views.list!itemclick!showWantDetail"] && $.__views.list.addEventListener("itemclick", showWantDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;