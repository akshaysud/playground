import { BrowserHelper, IElement, IReferenceElement } from '../../../shared/browser_helper';

export interface IChatBoxElements {
	BuddyListButton: IElement;
	BuddyListView: IElement;
	BuddyId: IElement;
	ChatBox: IElement;
	ChatBoxTextField: IElement;
}

export class ChatBoxElements implements IChatBoxElements {

	readonly BuddyListButton: IElement = {
		selector: '#fbDockChatBuddylistNub'
	}

	readonly BuddyListView: IElement = {
		selector: '[data-testid="chat_sidebar"]'
	}

	//Use the resource ID for the person you want to send the message to - it is unique per user. 
	//Todo: Find a smarter way for this :)
	readonly BuddyId: IElement = {
		selector: '[data-id="1413796261"]'
	}

	readonly ChatBox: IElement = {
		selector: 'div.fbNubFlyoutBody.scrollable'
	}

	readonly ChatBoxTextField: IElement = {
		selector: 'div.notranslate._5rpu'
	}
}

export class ChatBox {

	myPageElements: IChatBoxElements = new ChatBoxElements();

	clickChatBar = (): void => {
		const { myPageElements } = this;
		BrowserHelper.waitForVisible(myPageElements.BuddyListButton)
			.click(myPageElements.BuddyListButton, myPageElements.BuddyListView.selector);
	}

	sendDirectMessage = (message): void => {
		const { myPageElements } = this;
		BrowserHelper.setValue(myPageElements.ChatBoxTextField, message)
			.performNativeAction('\uE007');
		}

	selectHumanFromChatList = (): void => {
		const { myPageElements } = this;
		BrowserHelper.click(myPageElements.BuddyId, myPageElements.ChatBox.selector);
	}
}

export class ChatBoxAssertions {

	myPageElements: IChatBoxElements = new ChatBoxElements();
	
	verifyBuddyList = (): void => {
		const { myPageElements } = this;
		expect(BrowserHelper.isVisible(myPageElements.BuddyListView)).toBeTruthy();
	}
}

