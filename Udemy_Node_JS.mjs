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
	1: '00:40:00',
	2: '00:51:00',
	3: '01:33:00',
	4: '00:48:00',
	5: '01:34:00',
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
	19: '00:48:00',
	20: '01:11:00',
	21: '00:26:00',
	22: '00:26:00',
	23: '00:29:00',
	24: '01:03:00',
	25: '02:30:00',
	26: '00:14:00',
	27: '00:37:00',
	28: '02:47:00',
	29: '01:02:00',
	30: '01:42:00',
	31: '00:22:00',
	32: '00:26:00',
	33: '01:30:00',
	34: '01:34:00',
	35: '00:38:00',
	36: '00:03:00',
};

const addTime = (start, end) => {
	if (start > end) return 'start is greater than end';
	if (start < 0 || start > 36 || end < 1 || end > 36) return 'enter valid start and end points';
	let hrs = 0,
		mins = 0,
		secs = 0;
	const moduleIds = Object.keys(arrList).filter((key) => key >= start && key <= end);
	Object.entries(arrList);
	moduleIds.forEach((id) => {
		const el = arrList[id];
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

console.log('completed =>');
addTime(1, 14);
console.log("current target =>")
addTime(15, 18);
console.log('remaining =>');
addTime(19, 36);
