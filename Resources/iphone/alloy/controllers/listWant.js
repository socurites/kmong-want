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
    var __alloyId21 = {};
    var __alloyId24 = [];
    var __alloyId25 = {
        type: "Ti.UI.Button",
        properties: {
            title: "Load More"
        }
    };
    __alloyId24.push(__alloyId25);
    var __alloyId23 = {
        properties: {
            name: "buttonItem",
            height: Ti.UI.SIZE
        },
        childTemplates: __alloyId24
    };
    __alloyId21["buttonItem"] = __alloyId23;
    var __alloyId27 = [];
    var __alloyId28 = {
        type: "Ti.UI.ImageView",
        bindId: "userPic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "userPic"
        }
    };
    __alloyId27.push(__alloyId28);
    var __alloyId30 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId31 = [];
            var __alloyId32 = {
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
            __alloyId31.push(__alloyId32);
            return __alloyId31;
        }(),
        properties: {}
    };
    __alloyId27.push(__alloyId30);
    var __alloyId26 = {
        properties: {
            height: "56dp",
            name: "template1"
        },
        childTemplates: __alloyId27
    };
    __alloyId21["template1"] = __alloyId26;
    var __alloyId34 = [];
    $.__views.__alloyId35 = {
        template: "template1",
        properties: {
            id: "__alloyId35"
        }
    };
    __alloyId34.push($.__views.__alloyId35);
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    $.__views.section.items = __alloyId34;
    var __alloyId36 = [];
    __alloyId36.push($.__views.section);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId36,
        templates: __alloyId21,
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