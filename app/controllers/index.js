Alloy.Globals.navgroup = $.navGroupWin;
Alloy.Globals.navgroup.open();

function doWantClick() {
	var listWantView = Alloy.createController("listWant", {}).getView();
	Alloy.Globals.navgroup.openWindow(listWantView);
}

function doContactClick() {
	Ti.API.info("===doContactClick");
	var listContactView = Alloy.createController("listContact", {}).getView();
	Alloy.Globals.navgroup.openWindow(listContactView);
}

