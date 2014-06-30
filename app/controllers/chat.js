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


function createListView(_data) {
	var items = [];
	for (var i in _data) {

		// add items to an array
		items.push({
			template : "template3", // set the template
			messageLabel : {
				text : _data[i].message // assign the values from the data
			}
		});
	}
	
	Ti.API.info("===createListView.js");

	$.listChatSection.setItems(items);

}

createListView(_data);