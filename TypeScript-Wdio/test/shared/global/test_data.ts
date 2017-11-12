import * as chance from 'chance';

export interface IUserData {
	email: string;
	password: string;
	status: string;
}

export class UserData {

	static generateUserData = (): IUserData => {
		let _chance = new chance();

		const data = {
			email: '',
			password: '',
			status: 'Status' + _chance.string({
				pool: '123456789',
				length: 8
			})
		}

		console.log(`Test Data: ${JSON.stringify(data)}`);
		return data;
	}
}
