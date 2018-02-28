import { BrowserHelper, IElement } from '../../shared/browser_helper';

export interface IUserProfileElements {
	ProfileName: IElement;
}

export class UserProfileElements implements IUserProfileElements {

	readonly ProfileName: IElement = {
		selector: '[data-testid="profile_name_in_profile_page"]'
	};
}

export class UserProfile {

	myPageElements: IUserProfileElements = new UserProfileElements();

	
}
