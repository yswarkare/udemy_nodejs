type TimeDuration = {
	hours: number;
	minutes: number;
	seconds: number;
	milliSeconds: number;
};

type SubInput = {
	length: string;
	text: string;
};

class Duration implements TimeDuration {
	hours: number;
	minutes: number;
	seconds: number;
	milliSeconds: number;
	constructor(hours: number, minutes: number, seconds: number, milliSeconds: number) {
		this.hours = hours;
		this.minutes = minutes;
		this.seconds = seconds;
		this.milliSeconds = milliSeconds;
	}

	dtoString(): string {
		return `${this.hours === 0 ? '00' : this.hours}:${this.minutes}:${this.seconds},${
			this.milliSeconds === 0 ? '000' : this.milliSeconds
		}`;
	}

	static stringToDuration(timeStr: string): Duration {
		type strNum = string | number;
		let [hrs, mins, secs1]: strNum[] = timeStr.split(':');
		let [secs, milliSecs]: strNum[] = secs1.split(',');
		hrs = parseInt(hrs);
		mins = parseInt(mins);
		secs = parseInt(secs);
		milliSecs = parseInt(milliSecs);
		return new Duration(hrs, mins, secs, milliSecs);
	}

	static addDuration(d1: Duration, d2: Duration): Duration {
		let hrs: number = d1.hours + d2.hours;
		let mins: number = d1.minutes + d2.minutes;
		let secs: number = d1.seconds + d2.seconds;
		let milliSecs: number = d1.milliSeconds + d2.milliSeconds;
		return new Duration(hrs, mins, secs, milliSecs);
	}
}

type SubsItem = {
	srNum: number;
	start: Duration;
	end: Duration;
	text: string;
};

class SubItem implements SubsItem {
	srNum!: number;
	start!: Duration;
	end!: Duration;
	text!: string;
	constructor(srNum: number, start: Duration, end: Duration, text: string) {
		this.srNum = srNum;
		this.start = start;
		this.end = end;
		this.text = text;
	}

	toString(): string {
		return `${this.srNum}\n${this.start.dtoString()} --> ${this.end.dtoString()}\n${this.text}\n\n`;
	}
}

const subs = [
	{ length: '00:31:10,000', text: '01 The World of Game Theory' },
	{ length: '00:30:01,000', text: '02 The Nature of the Game' },
	{ length: '00:30:40,000', text: '03 The Real Life Chessboard -- Sequential Games' },
	{ length: '00:31:01,000', text: "04 Life's Little Games -- The 2 x 2 Classic Games" },
	{ length: '00:30:27,000', text: '05 Guessing Right -- Simultaneous Move Games' },
	{ length: '00:30:53,000', text: '06 Practical Applications of Game Theory' },
	{ length: '00:30:55,000', text: '07 A Random Walk -- Dealing with Chance Events' },
	{ length: '00:30:35,000', text: '08 Pure Competition -- Constant-Sum Games' },
	{ length: '00:30:23,000', text: '09 Mixed Strategies and Nonzero-Sum Games' },
	{ length: '00:29:45,000', text: '10 Threats, Promises, and Commitments' },
	{ length: '00:31:07,000', text: '11 Credibility, Deterrence, and Compellence' },
	{ length: '00:30:26,000', text: '12 Incomplete and Imperfect Information' },
	{ length: '00:30:47,000', text: '13 Whom Can You Trust -- Signaling and Screening' },
	{ length: '00:30:46,000', text: '14 Encouraging Productivity -- Incentive Schemes' },
	{ length: '00:29:54,000', text: '15 The Persistence of Memory -- Repeated Games' },
	{ length: '00:31:10,000', text: '16 Does This Stuff Really Work' },
	{ length: '00:30:07,000', text: '17 The Tragedy of the Commons' },
	{ length: '00:30:54,000', text: '18 Games in Motion -- Evolutionary Game Theory' },
	{ length: '00:30:35,000', text: '19 Game Theory and Economics -- Oligopolies' },
	{ length: '00:30:15,000', text: '20 Voting -- Determining the Will of the People' },
	{ length: '00:30:54,000', text: "21 Auctions and the Winner's Curse" },
	{ length: '00:30:23,000', text: '22 Bargaining and Cooperative Games' },
	{ length: '00:30:37,000', text: '23 Game Theory and Business -- Co-opetition' },
	{ length: '00:30:29,000', text: "24 All the World's a Game" },
];

const createSubtitle = (subsArr: { length: string; text: string }[]): void => {
	const temp: SubItem[] = [];
	subsArr.forEach((curr, ind) => {
		const prev: SubItem | null = temp.length > 0 ? temp[temp.length - 1] : null;
		const currLen: Duration = Duration.stringToDuration(curr.length);
		const start: Duration = prev ? prev?.end : currLen;
		const end: Duration = Duration.addDuration(start, currLen);
		temp.push(new SubItem(ind + 1, start, end, curr.text));
	});
	let result: string[] = temp.map((i) => i.toString());
	console.log(result.toString().split(',').join(''));
};

createSubtitle(subs);
