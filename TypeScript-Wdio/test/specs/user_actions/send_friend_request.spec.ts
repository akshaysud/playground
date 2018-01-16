import { given, when, then, and } from '../../speclight';
import { BrowserHelper } from '../../shared/browser_helper';
import { UserData } from '../../shared/global/test_data';
import { Login } from '../../pages/login';
import { User } from '../../pages/user';
import { CommonComponents } from '../../pages/common-components';

const login = new Login();
const user = new User();
const common = new CommonComponents();

describe('Send a friend request', () => {

	const data = UserData.generateUserData();

	beforeAll(function () {
		console.log('Log in to facebook');
		BrowserHelper.navigate(login.loginUrl(), login.welcomePageElements.Email.selector);
		login.welcomePage.enterUserCredentials(data);
		login.welcomePage.clickLogin(user.homePageElements.SearchBar.selector);
	});

	given`I navigate to news feed`(() => user.homePage.navigateToNewsFeed(user.homePageElements.SearchBar.selector))
		and`I navigate to my friend's profile`(() => BrowserHelper.navigate(UserData.friendProfileId, common.friendProfileElements.AddFriend.selector));
	when`I click the Add Friend button`(() => common.friendProfile.addFriend())
	then`The friend request is sent successfully`(() => common.friendProfileAssertions.verifyFriendRequestSent())

	afterAll(function () {
		console.log('Cancel Friend Request');
		//ToDo: Add cleanup steps
	});

	browser.end();
});
