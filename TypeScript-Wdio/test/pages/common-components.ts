import { ChatBoxElements, ChatBox, ChatBoxAssertions } from '../pages/common-components/chat-box/chat';
import { FriendProfilePageElements, FriendProfilePage, FriendProfilePageAssertions } from '../pages/common-components/friend-profile/friend_profile';
import { BrowserHelper, IElement, IReferenceElement } from '../shared/browser_helper';


export interface ICommonElements {
	React: IElement;
	Love: IElement;	
}

enum Reactions {
	Like = 1,
	Love,
	Haha,
	Sad,
	Angry
}

export class CommonElements implements ICommonElements {

	readonly React: IElement = {
		selector: '[data-testid="fb-ufi-likelink"]'
	};

	readonly Love: IElement = {
		selector: `div > div[data-testid="UFIReactionsMenu" ] > span[data-testid="reaction_${Reactions.Love}"]`
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
		const { myPageElements } = this;
		BrowserHelper.waitForVisible(myPageElements.React)
			.scrollToElement(myPageElements.React)
			.moveToObject(myPageElements.React,  myPageElements.Love.selector);
		
		if (BrowserHelper.waitForVisible(myPageElements.Love))
		{
			BrowserHelper.click(myPageElements.Love, myPageElements.React.selector)
		}
	}
}
