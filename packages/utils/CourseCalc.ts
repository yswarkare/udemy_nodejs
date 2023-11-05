export class Section {
	id: number;
	length: string;
	name: string | null;
	constructor(id: number, length: string, name: string) {
		this.id = id;
		this.length = length;
		this.name = name || null;
	}
}

class Time {
	hrs: number;
	mins: number;
	secs: number;
	constructor(hrs = 0, mins = 0, secs = 0) {
		this.hrs = hrs;
		this.mins = mins;
		this.secs = secs;
	}

	rearrange() {
		if (this.secs > 60) {
			this.mins += Math.floor(this.secs / 60);
			this.secs = Math.floor(this.secs % 60);
		}
		if (this.mins > 60) {
			this.hrs += Math.floor(this.mins / 60);
			this.mins = Math.floor(this.mins % 60);
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

const calcTime = (arr: { [x: string]: Section }, ids: string[]) => {
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
	completed: Time;
	current: Time;
	remaining: Time;
	constructor(comp = new Time(), curr = new Time(), rem = new Time()) {
		this.completed = comp;
		this.current = curr;
		this.remaining = rem;
	}
}

export const calcProgress = (sections: { [x: string]: Section }, start: number, end: number) => {
	if (start > end) {
		console.log('start is greater than end');
		return null;
	}
	if (start < 0 || start > 36 || end < 1 || end > 36) {
		console.log('enter valid start and end points');
		return null;
	}

	let prevIds: string[] = [],
		currIds: string[] = [],
		nextIds: string[] = [];
	[prevIds, currIds, nextIds] = [[], [], []];
	Object.keys(sections).forEach((key) => {
		if (parseInt(key) < start) {
			prevIds.push(key);
		} else if (parseInt(key) > end) {
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
