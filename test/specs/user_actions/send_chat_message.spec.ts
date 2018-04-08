import { given, when, then, and } from '../../speclight';
import { BrowserHelper } from '../../shared/browser_helper';
import { UserData } from '../../shared/global/test_data';
import { EnvironmentData } from '../../shared/global/environment_data';
import { Login } from '../../pages/login';
import { User } from '../../pages/user';
import { CommonComponents } from '../../pages/common-components';

const environmentData = new EnvironmentData();
const login = new Login();
const user = new User();
const common = new CommonComponents();

describe('Send chat message to a friend', () => {

	const data = UserData.generateUserData();

	beforeAll(function () {
		console.log('Log in to facebook');
		BrowserHelper.navigate(login.loginUrl(), login.welcomePageElements.Email.selector);
		login.welcomePage.enterUserCredentials(data);
		login.welcomePage.clickLogin(user.homePageElements.SearchBar.selector);
	});

	given`I navigate to news feed`(() => user.homePage.navigateToNewsFeed(user.homePageElements.SearchBar.selector))
	when`I select the buddy list`(() => common.chatBox.clickChatBar());
	then`My buddy list is displayed`(() => common.chatBoxAssertions.verifyBuddyList());

	when`I select a friend to chat with`(() => common.chatBox.selectHumanFromChatList())
		and`I send my chat message ${data.chatMessage}`((message) => common.chatBox.sendDirectMessage(message));
	then`My message is delivered successfully`(() => common.chatBoxAssertions.verifyMessageStatus());

	browser.end();
});
