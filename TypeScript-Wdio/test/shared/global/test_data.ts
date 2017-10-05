export interface IUserData {
	email: string;
	password: string;
}

export class UserData {

	static generateUserData = (): IUserData => {

		/// enter user credentials
		const data = {
			email: '',
			password: ''
		};

		console.log(`Test Data: ${JSON.stringify(data)}`);
		return data;
	}
}
