function Controller() {
    function createListView(_data) {
        var items = [];
        for (var i in _data) items.push({
            template: "template2",
            userPic: {
                image: _data[i].userPic
            },
            usernameLabel: {
                text: _data[i].title
            }
        });
        $.listChatSection.setItems(items);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listChat";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.listChat = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "listChat"
    });
    $.__views.listChat && $.addTopLevelView($.__views.listChat);
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
    var __alloyId10 = {
        type: "Ti.UI.ImageView",
        bindId: "userPic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "userPic"
        }
    };
    __alloyId9.push(__alloyId10);
    var __alloyId12 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId13 = [];
            var __alloyId14 = {
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
            __alloyId13.push(__alloyId14);
            return __alloyId13;
        }(),
        properties: {}
    };
    __alloyId9.push(__alloyId12);
    var __alloyId8 = {
        properties: {
            height: "56dp",
            name: "template1"
        },
        childTemplates: __alloyId9
    };
    __alloyId3["template1"] = __alloyId8;
    var __alloyId16 = [];
    $.__views.__alloyId17 = {
        template: "template2",
        properties: {
            id: "__alloyId17"
        }
    };
    __alloyId16.push($.__views.__alloyId17);
    $.__views.listChatSection = Ti.UI.createListSection({
        id: "listChatSection"
    });
    $.__views.listChatSection.items = __alloyId16;
    var __alloyId18 = [];
    __alloyId18.push($.__views.listChatSection);
    $.__views.__alloyId2 = Ti.UI.createListView({
        sections: __alloyId18,
        templates: __alloyId3,
        id: "__alloyId2",
        defaultItemTemplate: "template1"
    });
    $.__views.listChat.add($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var _data = [];
    _data.push({
        userPic: "http://kmong.com/images/membersprofilepic/thumbs/kEQFX1391379930.png",
        title: "kmong"
    });
    _data.push({
        userPic: "http://kmong.com/images/membersprofilepic/21oFI1375236798.jpg",
        title: "kmongk"
    });
    createListView(_data);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;