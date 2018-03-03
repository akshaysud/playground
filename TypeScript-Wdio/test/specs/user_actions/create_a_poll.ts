import { given, when, then, and } from '../../speclight';
import { BrowserHelper } from '../../shared/browser_helper';
import { UserData } from '../../shared/global/test_data';
import { Login } from '../../pages/login';
import { User } from '../../pages/user';

const login = new Login();
const user = new User();

describe('Create a poll', () => {

	const data = UserData.generateUserData();

	beforeAll(function () {
		console.log('Log in to facebook');
		BrowserHelper.navigate(login.loginUrl(), login.welcomePageElements.Email.selector);
		login.welcomePage.enterUserCredentials(data);
		login.welcomePage.clickLogin(user.homePageElements.SearchBar.selector);
	});

	given`I navigate to news feed`(() => user.homePage.navigateToNewsFeed(user.homePageElements.SearchBar.selector))
	when`I add the poll with ${data}`((pollData) => user.homePage.addAPoll(pollData));
	then`My poll is successfully published`(() => user.homePageAssertions.verifyContentIsUpdated());
});
