import { BrowserHelper, IElement } from '../../shared/browser_helper';

export interface IHomePageElements {
	SearchBar: IElement;
	NewsFeed: IElement;
	StatusBox: IElement;
	StatuxBoxDialogView: IElement;
	NotificationPermissionPopUp: IElement;
	NotificationCancelButton: IElement;
	
}

export class HomePageElements implements IHomePageElements {

	readonly SearchBar: IElement = {
		selector: 'input[data-testid="search_input"]'
	};

	readonly NewsFeed: IElement = {
		selector: 'a[data-testid="left_nav_item_News Feed"]'
	}

	readonly StatusBox: IElement = {
		selector: '[data-testid="status-attachment-mentions-input"]'
	};

	readonly StatuxBoxDialogView: IElement = {
		selector: 'div[role="dialog"]#js_e'
	};

	readonly NotificationPermissionPopUp: IElement = {
		selector: 'span#notification-permission-title'
	};

	readonly NotificationCancelButton: IElement = {
		selector: 'a[action="cancel"]'
	};
}

export class HomePage {

	myPageElements: IHomePageElements = new HomePageElements();

	navigateToNewsFeed = (nextPage): void => {
		const { myPageElements } = this;
		if (BrowserHelper.waitForVisible(myPageElements.NotificationCancelButton))
		{
			BrowserHelper.click(myPageElements.NotificationCancelButton, myPageElements.NewsFeed.selector);
		}
	//	BrowserHelper.click(myPageElements.NewsFeed, nextPage);
	}

	selectStatusBox = (): void => {
		const { myPageElements } = this;
		//browser.debug();
		BrowserHelper.click(myPageElements.StatusBox, myPageElements.StatuxBoxDialogView.selector); 
	}

}

export class HomePageAssertions {

	myPageElements: IHomePageElements = new HomePageElements();

	verifyHomePage = (): void => {
		const { myPageElements } = this;
		expect(BrowserHelper.isVisible(myPageElements.SearchBar)).toBeTruthy();
	}
}

