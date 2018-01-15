import { BrowserHelper, IElement, IReferenceElement } from '../../../shared/browser_helper';

export interface IFriendProfileElements {
	AddFriend: IElement;
	CancelFriendRequest: IElement;
}

export class FriendProfileElements implements IFriendProfileElements {

	readonly AddFriend: IElement = {
		selector: 'div > div > button[class="_42ft _4jy0 FriendRequestAdd addButton _4jy4 _517h _9c6"]'
	}

	readonly CancelFriendRequest: IElement = {
		selector: 'div > div > button[class="_42ft _4jy0 FriendRequestOutgoing enableFriendListFlyout outgoingButton _4jy4 _517h _9c6"]'
	}
}

export class FriendProfile {

	myPageElements: IFriendProfileElements = new FriendProfileElements();

	addFriend = (): void => {
		const { myPageElements } = this;
		BrowserHelper.waitForVisible(myPageElements.AddFriend)
			.click(myPageElements.AddFriend, myPageElements.CancelFriendRequest.selector);
	}
}

export class FriendProfileAssertions {

	myPageElements: IFriendProfileElements = new FriendProfileElements();
	
	verifyFriendRequestSent = (): void => {
		const { myPageElements } = this;
		expect(BrowserHelper.isVisible(myPageElements.CancelFriendRequest)).toBeTruthy();
	}
}

