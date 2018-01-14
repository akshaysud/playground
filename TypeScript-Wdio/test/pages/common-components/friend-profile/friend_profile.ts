import { BrowserHelper, IElement, IReferenceElement } from '../../../shared/browser_helper';

export interface IFriendProfileElements {
	AddFriend: IElement;
}

export class FriendProfileElements implements IFriendProfileElements {

	readonly AddFriend: IElement = {
		selector: 'div > div > button[class="_42ft _4jy0 FriendRequestAdd addButton _4jy4 _517h _9c6"]'
	}
}

export class FriendProfile {

	myPageElements: IFriendProfileElements = new FriendProfileElements();

	// clickChatBar = (): void => {
	// 	const { myPageElements } = this;
	// 	BrowserHelper.waitForVisible(myPageElements.BuddyListButton)
	// 		.click(myPageElements.BuddyListButton, myPageElements.BuddyListView.selector);
	// }
}

export class FriendProfileAssertions {

	myPageElements: IFriendProfileElements = new FriendProfileElements();
	
	verifyBuddyList = (): void => {
		const { myPageElements } = this;
	//	expect(BrowserHelper.isVisible(myPageElements.BuddyListView)).toBeTruthy();
	}
}

