function Controller() {
    function showChat(e) {
        var section = $.list.sections[e.sectionIndex];
        var item = section.getItemAt(e.itemIndex);
        var args = {
            username: item.usernameLabel.text
        };
        var wantDetailView = Alloy.createController("wantDetail", args).getView();
        Alloy.Globals.navgroup.openWindow(wantDetailView);
    }
    function createListView(_data) {
        var items = [];
        for (var i in _data) items.push({
            template: "template2",
            userPic: {
                image: _data[i].userPic
            },
            usernameLabel: {
                text: _data[i].username
            }
        });
        Ti.API.info("===createListView.js");
        $.listContactSection.setItems(items);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listContact";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.listContact = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "listContact"
    });
    $.__views.listContact && $.addTopLevelView($.__views.listContact);
    var __alloyId3 = {};
    var __alloyId6 = [];
    var __alloyId7 = {
        type: "Ti.UI.Button",
        properties: {
            title: "Load More"
        }
    };
    __alloyId6.push(__alloyId7);
    var __alloyId5 = {
        properties: {
            name: "buttonItem",
            height: Ti.UI.SIZE
        },
        childTemplates: __alloyId6
    };
    __alloyId3["buttonItem"] = __alloyId5;
    var __alloyId9 = [];
    var __alloyId11 = {
        type: "Ti.UI.ImageView",
        bindId: "userPic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "userPic"
        }
    };
    __alloyId9.push(__alloyId11);
    var __alloyId13 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId14 = [];
            var __alloyId16 = {
                type: "Ti.UI.Label",
                bindId: "usernameLabel",
                properties: {
                    color: "#000",
                    left: "60dp",
                    top: 0,
                    textAlign: "left",
                    bindId: "usernameLabel"
                }
            };
            __alloyId14.push(__alloyId16);
            return __alloyId14;
        }(),
        properties: {}
    };
    __alloyId9.push(__alloyId13);
    var __alloyId8 = {
        properties: {
            height: "56dp",
            name: "template2"
        },
        childTemplates: __alloyId9
    };
    __alloyId3["template2"] = __alloyId8;
    var __alloyId18 = [];
    $.__views.__alloyId19 = {
        template: "template2",
        properties: {
            id: "__alloyId19"
        }
    };
    __alloyId18.push($.__views.__alloyId19);
    $.__views.listContactSection = Ti.UI.createListSection({
        id: "listContactSection"
    });
    $.__views.listContactSection.items = __alloyId18;
    var __alloyId20 = [];
    __alloyId20.push($.__views.listContactSection);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId20,
        templates: __alloyId3,
        id: "list",
        defaultItemTemplate: "template2"
    });
    $.__views.listContact.add($.__views.list);
    showChat ? $.__views.list.addEventListener("itemclick", showChat) : __defers["$.__views.list!itemclick!showChat"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var _data = [];
    _data.push({
        userPic: "http://kmong.com/images/membersprofilepic/thumbs/kEQFX1391379930.png",
        username: "kmong"
    });
    _data.push({
        userPic: "http://kmong.com/images/membersprofilepic/21oFI1375236798.jpg",
        username: "jamak"
    });
    Ti.API.info("===listContact.js");
    createListView(_data);
    __defers["$.__views.list!itemclick!showChat"] && $.__views.list.addEventListener("itemclick", showChat);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;