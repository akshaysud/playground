import { ChatBoxElements, ChatBox, ChatBoxAssertions } from '../pages/common-components/chat-box/chat';
import { FriendProfilePageElements, FriendProfilePage, FriendProfilePageAssertions } from '../pages/common-components/friend-profile/friend_profile';
import { BrowserHelper, IElement, IReferenceElement } from '../shared/browser_helper';


export interface ICommonElements {
	Reactions: IElement;
	
}

export class CommonElements implements ICommonElements {

	readonly Reactions: IElement = {
		selector: '#fbPhotoSnowliftLive-Reactions'
	};

}

export class CommonComponents {

	public chatBoxElements = new ChatBoxElements();
	public chatBox = new ChatBox();
	public chatBoxAssertions = new ChatBoxAssertions();
	public friendProfilePageElements = new FriendProfilePageElements();
	public friendProfilePage = new FriendProfilePage()
	public friendProfilePageAssertions = new FriendProfilePageAssertions();

	myPageElements: ICommonElements = new CommonElements();


	reactToPost = (): void => {
		browser.debug();
		const { myPageElements } = this;
		BrowserHelper.waitForVisible(myPageElements.Reactions)
		//	.click(myPageElements.StatusBox, myPageElements.StatusBoxDialogView.selector);
	}
	
}
