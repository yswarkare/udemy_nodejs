// class Section {
// 	constructor(id, length, name) {
// 		this.id = id;
// 		this.length = length;
// 		this.name = name || null;
// 	}
// }

// const listOfSections = [
// 	new Section(6, '02:03:00'),
// 	new Section(7, '00:44:00'),
// 	new Section(8, '00:36:00'),
// 	new Section(9, '01:39:00'),
// 	new Section(10, '00:53:00'),
// 	new Section(11, '01:52:00'),
// 	new Section(12, '02:19:00'),
// 	new Section(13, '01:17:00'),
// 	new Section(14, '01:13:00'),
// 	new Section(15, '01:10:00'),
// 	new Section(16, '00:10:00'),
// 	new Section(17, '00:36:00'),
// 	new Section(18, '01:16:00'),
// ];

const arrList = {
	6: '02:03:00',
	7: '00:44:00',
	8: '00:36:00',
	9: '01:39:00',
	10: '00:53:00',
	11: '01:52:00',
	12: '02:19:00',
	13: '01:17:00',
	14: '01:13:00',
	15: '01:10:00',
	16: '00:10:00',
	17: '00:36:00',
	18: '01:16:00',
};

const addTime = (sectionArr) => {
	let hrs = 0,
		mins = 0,
		secs = 0;
	Object.values(sectionArr).forEach((el) => {
		const [_hrs, _mins, _secs] = el.split(':');
		hrs += parseInt(_hrs);
		mins += parseInt(_mins);
		secs += parseInt(_secs);
	});
	if (secs > 60) {
		mins += parseInt(secs / 60);
		secs = secs % 60;
	}
	if (mins > 60) {
		hrs += parseInt(mins / 60);
		mins = mins % 60;
	}
	const result = `${hrs}:${mins}:${secs}`;
	console.log(result);
	return result;
};

addTime([arrList[13], arrList[14], arrList[15]]);
