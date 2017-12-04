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
			email: 'codeallthethings.30@gmail.com',
			password: '',
			status: 'Let\s talk about test baby :)	' + _chance.string({
				pool: '123456789',
				length: 8
			}),
			chatMessage: 'Hey you!'
		}

		console.log(`Test Data: ${JSON.stringify(data)}`);
		return data;
	}
}
