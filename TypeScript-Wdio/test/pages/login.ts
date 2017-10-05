import { WelcomePageElements, WelcomePage } from '../pages/login/welcome';

export class Login {

	public welcomePageElements = new WelcomePageElements();
	public welcomePage = new WelcomePage();

	loginUrl = (): string => {
		return 'login/';
	}
}
