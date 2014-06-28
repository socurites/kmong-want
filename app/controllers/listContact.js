var args = arguments[0] || {};

var _data = [];
_data.push({
	userPic : 'http://kmong.com/images/membersprofilepic/thumbs/kEQFX1391379930.png',
	username : 'kmong',
	message : '안녕하세요 지난번에 문의드린 그 내용에 대해 물어보고 싶은....'
});
_data.push({
	userPic : 'http://kmong.com/images/membersprofilepic/21oFI1375236798.jpg',
	username : 'jamak',
	message : '안녕하세요 지난번에 문의드린 그 내용에 대해 물어보고 싶은....'
});


Ti.API.info("===listContact.js");

function showChat(e) {
	var section = $.list.sections[e.sectionIndex];
	var item = section.getItemAt(e.itemIndex);

	var args = {
		username : item.usernameLabel.text
	};

	var wantDetailView = Alloy.createController("wantDetail", args).getView();
	Alloy.Globals.navgroup.openWindow(wantDetailView);
}


function createListView(_data) {
	var items = [];
	for (var i in _data) {

		// add items to an array
		items.push({
			template : "template2", // set the template
			userPic : {
				image : _data[i].userPic // assign the values from the data
			},
			usernameLabel : {
				text : _data[i].username // assign the values from the data
			},
			messageLabel : {
				text : _data[i].message // assign the values from the data
			}
		});
	}
	
	Ti.API.info("===createListView.js");

	$.listContactSection.setItems(items);

}

createListView(_data);
