import { ChatBoxElements, ChatBox, ChatBoxAssertions } from '../pages/common-components/chat-box/chat';
import { FriendProfilePageElements, FriendProfilePage, FriendProfilePageAssertions } from '../pages/common-components/friend-profile/friend_profile';
import { BrowserHelper, IElement, IReferenceElement } from '../shared/browser_helper';


export interface ICommonElements {
	React: IElement;
	RemoveReaction: IElement;
	Like: IElement;
	Love: IElement;
	Haha: IElement;
	Sad: IElement;
	Angry: IElement;
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

	readonly RemoveReaction: IElement = {
		selector: '[data-testid="fb-ufi-unlikelink"]'
	};

	readonly Like: IElement = {
		selector: `div > div[data-testid="UFIReactionsMenu" ] > span[data-testid="reaction_${Reactions.Like}"]`
	};

	readonly Love: IElement = {
		selector: `div > div[data-testid="UFIReactionsMenu" ] > span[data-testid="reaction_${Reactions.Love}"]`
	};

	readonly Haha: IElement = {
		selector: `div > div[data-testid="UFIReactionsMenu" ] > span[data-testid="reaction_${Reactions.Haha}"]`
	};

	readonly Sad: IElement = {
		selector: `div > div[data-testid="UFIReactionsMenu" ] > span[data-testid="reaction_${Reactions.Sad}"]`
	};

	readonly Angry: IElement = {
		selector: `div > div[data-testid="UFIReactionsMenu" ] > span[data-testid="reaction_${Reactions.Angry}"]`
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


	reactToPost = (reaction: string): void => {
		const { myPageElements } = this;
		BrowserHelper.waitForVisible(myPageElements.React)
			.scrollToElement(myPageElements.React)
			.moveToObject(myPageElements.React,  myPageElements.Love.selector);
		
		if (BrowserHelper.waitForVisible(myPageElements.Love))
		{
			switch (reaction.toLocaleLowerCase()) {

				case 'like':
				break;

				case 'love':
				BrowserHelper.click(myPageElements.Love, myPageElements.React.selector);
				break;

				case 'haha':
				BrowserHelper.click(myPageElements.Haha, myPageElements.React.selector);
				break;

				case 'sad':
				BrowserHelper.click(myPageElements.Sad, myPageElements.React.selector);
				break;

				case 'angry':
				BrowserHelper.click(myPageElements.Angry, myPageElements.React.selector);
				break;

				default: 
				throw new Error('You messed up :(');
			}
		}
	}

	removeReaction = () => {
		const { myPageElements } = this;

		BrowserHelper.click(myPageElements.RemoveReaction, myPageElements.React.selector);
	}
}

export class CommonComponentsAssertions {

	myPageElements: ICommonElements = new CommonElements(); 

	verifyReactionIsRecorded = () => {

		expect(BrowserHelper.isVisible(this.myPageElements.RemoveReaction))
	}
}
