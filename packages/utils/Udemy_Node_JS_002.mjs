export class Section {
	constructor(id, length, name) {
		this.id = id;
		this.length = length;
		this.name = name || null;
	}
}

class Time {
	constructor(hrs = 0, mins = 0, secs = 0) {
		this.hrs = hrs;
		this.mins = mins;
		this.secs = secs;
	}

	rearrange() {
		if (this.secs > 60) {
			this.mins += parseInt(this.secs / 60);
			this.secs = this.secs % 60;
		}
		if (this.mins > 60) {
			this.hrs += parseInt(this.mins / 60);
			this.mins = this.mins % 60;
		}
	}

	print() {
		let res = {
			hrs: `${this.hrs}`,
			mins: `${this.mins}`,
			secs: `${this.secs}`,
		};
		for (let key in res) {
			if (parseInt(res[key]) < 10) {
				res[key] = '0' + res[key];
			}
		}
		return `${res.hrs}:${res.mins}:${res.secs}`;
	}
}

const calcTime = (arr, ids) => {
	let [hrs, mins, secs] = [0, 0, 0];
	ids.forEach((id) => {
		const el = arr[id];
		const [_hrs, _mins, _secs] = el.length.split(':');
		hrs += parseInt(_hrs);
		mins += parseInt(_mins);
		secs += parseInt(_secs);
	});
	const result = new Time(hrs, mins, secs);
	result.rearrange();
	return result;
};

class Progress {
	constructor(comp = new Time(), curr = new Time(), rem = new Time()) {
		this.completed = comp;
		this.current = curr;
		this.remaining = rem;
	}
}

export const calcProgress = (sections, start, end) => {
	if (start > end) {
		console.log('start is greater than end');
		return null;
	}
	if (start < 0 || start > 36 || end < 1 || end > 36) {
		console.log('enter valid start and end points');
		return null;
	}

	let [prevIds, currIds, nextIds] = [[], [], []];

	Object.keys(sections).forEach((key) => {
		if (key < start) {
			prevIds.push(key);
		} else if (key > end) {
			nextIds.push(key);
		} else {
			currIds.push(key);
		}
	});
	
	const result = {
		completed: calcTime(sections, prevIds),
		current: calcTime(sections, currIds),
		remaining: calcTime(sections, nextIds),
	};
	return result;
};
