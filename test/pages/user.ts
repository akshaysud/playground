import { HomePageElements, HomePage, HomePageAssertions } from '../pages/user/home';
import {UserProfileElements}  from '../pages/user/profile';

export class User {

	public homePageElements = new HomePageElements();
	public homePage = new HomePage();
	public homePageAssertions = new HomePageAssertions();
	public userProfileElements = new UserProfileElements();
}
