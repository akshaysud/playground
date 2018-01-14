import * as chance from 'chance';

export interface IUserData {
	email: string;
	password: string;
	status: string;
	chatMessage: string;
}

export class UserData {

	static generateUserData = (): IUserData => {
		let _chance = new chance();

		const data = {
			email: '',
			password: '',
			status: 'Let\s talk about test baby :)	' + _chance.string({
				pool: '123456789',
				length: 8
			}),
			chatMessage: 'Automated Message - not sent by human'
		}

		console.log(`Test Data: ${JSON.stringify(data)}`);
		return data;
	}

	static friendProfileId : string = 'abhishekkulkarni87';
}
