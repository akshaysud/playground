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
		console.log('Log in to facebook');
		BrowserHelper.navigate(login.loginUrl(), login.welcomePageElements.Email.selector);
		login.welcomePage.enterUserCredentials(data);
		login.welcomePage.clickLogin(user.homePageElements.SearchBar.selector);
	});

	given`I navigate to news feed`(() => user.homePage.navigateToNewsFeed(user.homePageElements.SearchBar.selector))
	when`I select the status box`(() => user.homePage.selectStatusBox());
	and`I set my status message ${data.status}`((statusMessage) => user.homePage.postStatusMessage(statusMessage));
	then`My status message is successfully updated`(() => user.homePageAssertions.verifyStatusIsUpdated());

	browser.end();
});
