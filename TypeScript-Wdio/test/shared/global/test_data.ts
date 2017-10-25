export interface IUserData {
	email: string;
	password: string;
}

export class UserData {

	static generateUserData = (): IUserData => {

		/// enter user credentials
		const data = {
			email: 'codeallthethings.30@gmail.com',
			password: '#Password1'
		};

		console.log(`Test Data: ${JSON.stringify(data)}`);
		return data;
	}
}
