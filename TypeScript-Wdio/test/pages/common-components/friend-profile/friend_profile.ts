import { BrowserHelper, IElement, IReferenceElement } from '../../../shared/browser_helper';

export interface IFriendProfileElements {
	AddFriend: IElement;
	ProfileActionItems: IElement;
	CancelRequest: IElement;
	ConfirmCancel: IElement;
}

export class FriendProfilePageElements implements IFriendProfileElements {

	readonly AddFriend: IElement = {
		selector: 'div > div > button[class="_42ft _4jy0 FriendRequestAdd addButton _4jy4 _517h _9c6"]'
	}

	readonly ProfileActionItems: IElement = {
		selector: 'div#pagelet_timeline_profile_actions._5h60.actionsDropdown'
	}

	readonly CancelRequest: IElement = {
		selector: 'li.uiMenuItem.FriendListCancel'
	}

	readonly ConfirmCancel: IElement = {
		selector: 'button[class="_42ft _42fu layerConfirm uiOverlayButton selected _42g- _42gy"]'
	}
}

export class FriendProfilePage {

	myPageElements: IFriendProfileElements = new FriendProfilePageElements();

	addFriend = (): void => {
		const { myPageElements } = this;
		//***Fail safe - if a friend request has already been sent*** 
		if (!BrowserHelper.isVisible(myPageElements.AddFriend))
		{
			console.log('If loop time');
			this.cancelFriendRequest();
		}
		BrowserHelper.waitForVisible(myPageElements.AddFriend)
			.click(myPageElements.AddFriend, myPageElements.ProfileActionItems.selector);
	}

	cancelFriendRequest = (): void => {
		const { myPageElements } = this;
		
		BrowserHelper.click(myPageElements.ProfileActionItems, myPageElements.CancelRequest.selector)
			.click(myPageElements.CancelRequest, myPageElements.ConfirmCancel.selector)
			.click(myPageElements.ConfirmCancel, myPageElements.AddFriend.selector);
	}
}

export class FriendProfilePageAssertions {

	myPageElements: IFriendProfileElements = new FriendProfilePageElements();
	
	verifyFriendRequestSent = (): void => {
		const { myPageElements } = this;
		expect(BrowserHelper.isVisible(myPageElements.ProfileActionItems)).toBeTruthy();
	}
}

