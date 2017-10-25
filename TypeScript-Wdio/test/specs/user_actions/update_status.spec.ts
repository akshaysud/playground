import { given, when, then, and } from '../../speclight';
import { BrowserHelper } from '../../shared/browser_helper';
import { UserData } from '../../shared/global/test_data';
import { EnvironmentData } from '../../shared/global/environment_data';
import { Login } from '../../pages/login';
import { User } from '../../pages/user';

const environmentData = new EnvironmentData();
const login = new Login();
const user = new User();

describe('Update Status', () => {

	const data = UserData.generateUserData();
	beforeAll(function () {
		console.log('Launch facebook');
		BrowserHelper.navigate(login.loginUrl(), login.welcomePageElements.Email.selector);
		login.welcomePage.enterUserCredentials(data);
		login.welcomePage.clickLogin(user.homePageElements.SearchBar.selector);
	});

	given`I navigate to news feed`(() => user.homePageAssertions.verifyHomePage());
	when`I select the status box`(() => user.homePage.selectStatusBox());
	//	and``

	browser.end();
});
