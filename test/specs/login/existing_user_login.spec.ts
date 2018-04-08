import { given, when, then, and } from '../../speclight';
import { BrowserHelper } from '../../shared/browser_helper';
import { UserData } from '../../shared/global/test_data';
import { EnvironmentData } from '../../shared/global/environment_data';
import { Login } from '../../pages/login';
import { User } from '../../pages/user';

const environmentData = new EnvironmentData();
const login = new Login();
const user = new User();

describe('Login To Facebook', () => {

	const data = UserData.generateUserData();

	given`I navigate to the facebook login page`(() => BrowserHelper.navigate(login.loginUrl(), login.welcomePageElements.Email.selector));
	when`I enter my email and password ${data}`((user) => login.welcomePage.enterUserCredentials(user));
		and`I click login`(() => login.welcomePage.clickLogin(user.homePageElements.SearchBar.selector));
	then`I am on the home page`(() => user.homePageAssertions.verifyHomePage());

	browser.end();
});
