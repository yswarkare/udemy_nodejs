export type ObjectOrArray = object | Array<object>;

export interface ResponseInf {
	success: boolean;
	message: string;
	data: ObjectOrArray;
}

export class ResponseObj implements ResponseInf {
	success: boolean;
	message: string;
	data: object | object[];
	constructor(success: boolean, message: string, data: ObjectOrArray) {
		this.success = success;
		this.message = message;
		this.data = data;
	}
}
