import { BrowserHelper, IElement } from '../../shared/browser_helper';

export interface IWelcomePageElements {
	Email: IElement;
	Password: IElement;
	Login: IElement;
}

export class WelcomePageElements implements IWelcomePageElements {

	readonly Email: IElement = {
		selector: '#email'
	};

	readonly Password: IElement = {
		selector: '#pass'
	};

	readonly Login: IElement = {
		selector: '#loginbutton'
	};
}

export class WelcomePage {

	myPageElements: IWelcomePageElements = new WelcomePageElements();

	enterUserCredentials = (user): void => {
		const { myPageElements } = this;
		const { email, password } = user;

		if ((!user)) { throw new Error('You need to provide login credentials'); }

		BrowserHelper.setValue(myPageElements.Email, email)
			.setValue(myPageElements.Password, password);
	}

	clickLogin = (nextPage): void => {
		BrowserHelper.click(this.myPageElements.Login, nextPage);
	}
}
