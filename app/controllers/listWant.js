var args = arguments[0] || {};

var _data = [];
_data.push({
	userPic : 'http://kmong.com/images/membersprofilepic/thumbs/kEQFX1391379930.png',
	title : '혹시 사람찾아주실분 있으신가요?'
});
_data.push({
	userPic : 'http://kmong.com/images/membersprofilepic/21oFI1375236798.jpg',
	title : '2d 캐드 도면 -> 스케치업으로 3d 해주실분 구합니다'
});

function showWantDetail(e) {
	var section = $.list.sections[e.sectionIndex];
	var item = section.getItemAt(e.itemIndex);

	var args = {
		userPic : item.userPic.image,
		title : item.titleLabel.text
	};

	var wantDetailView = Alloy.createController("wantDetail", args).getView();
	Alloy.Globals.navgroup.openWindow(wantDetailView);
}

function createListView(_data) {
	var items = [];
	for (var i in _data) {

		// add items to an array
		items.push({
			template : "template1", // set the template
			userPic : {
				image : _data[i].userPic // assign the values from the data
			},
			titleLabel : {
				text : _data[i].title // assign the values from the data
			}
		});
	}

	$.section.setItems(items);

}

createListView(_data);
